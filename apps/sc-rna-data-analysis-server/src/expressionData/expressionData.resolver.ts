import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpressionDataResolverBase } from "./base/expressionData.resolver.base";
import { ExpressionData } from "./base/ExpressionData";
import { ExpressionDataService } from "./expressionData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpressionData)
export class ExpressionDataResolver extends ExpressionDataResolverBase {
  constructor(
    protected readonly service: ExpressionDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
