import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpressionDataService } from "./expressionData.service";
import { ExpressionDataControllerBase } from "./base/expressionData.controller.base";

@swagger.ApiTags("expressionData")
@common.Controller("expressionData")
export class ExpressionDataController extends ExpressionDataControllerBase {
  constructor(
    protected readonly service: ExpressionDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
