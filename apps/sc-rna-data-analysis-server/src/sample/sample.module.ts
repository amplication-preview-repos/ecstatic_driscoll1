import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SampleModuleBase } from "./base/sample.module.base";
import { SampleService } from "./sample.service";
import { SampleController } from "./sample.controller";
import { SampleResolver } from "./sample.resolver";

@Module({
  imports: [SampleModuleBase, forwardRef(() => AuthModule)],
  controllers: [SampleController],
  providers: [SampleService, SampleResolver],
  exports: [SampleService],
})
export class SampleModule {}
