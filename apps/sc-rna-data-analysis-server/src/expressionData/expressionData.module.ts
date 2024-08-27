import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExpressionDataModuleBase } from "./base/expressionData.module.base";
import { ExpressionDataService } from "./expressionData.service";
import { ExpressionDataController } from "./expressionData.controller";
import { ExpressionDataResolver } from "./expressionData.resolver";

@Module({
  imports: [ExpressionDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExpressionDataController],
  providers: [ExpressionDataService, ExpressionDataResolver],
  exports: [ExpressionDataService],
})
export class ExpressionDataModule {}
