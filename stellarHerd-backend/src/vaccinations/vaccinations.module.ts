import { Module } from '@nestjs/common';
import { VaccinationsService } from './vaccinations.service';
import { VaccinationsController } from './vaccinations.controller';

@Module({
  providers: [VaccinationsService],
  controllers: [VaccinationsController]
})
export class VaccinationsModule {}
