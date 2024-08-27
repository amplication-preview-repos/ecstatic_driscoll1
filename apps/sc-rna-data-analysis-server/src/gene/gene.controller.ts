import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeneService } from "./gene.service";
import { GeneControllerBase } from "./base/gene.controller.base";

@swagger.ApiTags("genes")
@common.Controller("genes")
export class GeneController extends GeneControllerBase {
  constructor(
    protected readonly service: GeneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
