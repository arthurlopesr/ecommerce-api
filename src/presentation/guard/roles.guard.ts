import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserType } from '../enum/user-type';
import { JwtService } from '@nestjs/jwt';
import { LoginPayloadDto } from '../main/routes/dto/loginPayload.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const { authorization } = context.switchToHttp().getRequest().headers;

    const loginPayload: LoginPayloadDto = await this.jwtService.verify(
      authorization,
      { secret: process.env.JWT_SECRET },
    );

    if (!loginPayload) {
      return false;
    }

    return requiredRoles.some((role) => role === loginPayload.userType);
  }
}
