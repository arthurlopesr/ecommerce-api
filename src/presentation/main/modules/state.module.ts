import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from 'src/domain/entities/state.entity';
import { StateController } from 'src/presentation/controllers/state.controller';
import { StateService } from 'src/use-cases/services/state/state.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService],
  exports: [],
})
export class StateModule {}
