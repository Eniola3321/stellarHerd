import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AiModule } from './ai/ai.module';
import { PrismaModule } from './prisma/prisma.module';
import { RewardModule } from './reward/reward.module';
import { FarmModule } from './farm/farm.module';
import { LivestockModule } from './livestock/livestock.module';
import { CooperativeModule } from './cooperative/cooperative.module';
import { HealthModule } from './health/health.module';
import { VaccinationModule } from './vaccination/vaccination.module';
import { FeedLogsModule } from './feed-logs/feed-logs.module';
import { BreedRecordModule } from './breed-record/breed-record.module';
import { ProductivityRecordModule } from './productivity-record/productivity-record.module';
import { MetricsModule } from './metrics/metrics.module';
import { SyncQueueModule } from './sync-queue/sync-queue.module';

@Module({
  imports: [UserModule, AiModule, PrismaModule, RewardModule, FarmModule, LivestockModule, CooperativeModule, HealthModule, VaccinationModule, FeedLogsModule, BreedRecordModule, ProductivityRecordModule, MetricsModule, SyncQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
