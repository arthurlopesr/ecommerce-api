import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from '../../../domain/entities/state.entity';
import { StateController } from '../../../presentation/controllers/state.controller';
import { StateService } from '../../../use-cases/services/state/state.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService],
  exports: [],
})
export class StateModule {}
