import { Module } from "@nestjs/common";
import { CoachModuleBase } from "./base/coach.module.base";
import { CoachService } from "./coach.service";
import { CoachController } from "./coach.controller";
import { CoachResolver } from "./coach.resolver";

@Module({
  imports: [CoachModuleBase],
  controllers: [CoachController],
  providers: [CoachService, CoachResolver],
  exports: [CoachService],
})
export class CoachModule {}
