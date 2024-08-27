import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeneModuleBase } from "./base/gene.module.base";
import { GeneService } from "./gene.service";
import { GeneController } from "./gene.controller";
import { GeneResolver } from "./gene.resolver";

@Module({
  imports: [GeneModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeneController],
  providers: [GeneService, GeneResolver],
  exports: [GeneService],
})
export class GeneModule {}
