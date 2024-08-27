/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Sample } from "./Sample";
import { SampleCountArgs } from "./SampleCountArgs";
import { SampleFindManyArgs } from "./SampleFindManyArgs";
import { SampleFindUniqueArgs } from "./SampleFindUniqueArgs";
import { CreateSampleArgs } from "./CreateSampleArgs";
import { UpdateSampleArgs } from "./UpdateSampleArgs";
import { DeleteSampleArgs } from "./DeleteSampleArgs";
import { ExpressionDataFindManyArgs } from "../../expressionData/base/ExpressionDataFindManyArgs";
import { ExpressionData } from "../../expressionData/base/ExpressionData";
import { SampleService } from "../sample.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sample)
export class SampleResolverBase {
  constructor(
    protected readonly service: SampleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sample",
    action: "read",
    possession: "any",
  })
  async _samplesMeta(
    @graphql.Args() args: SampleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sample])
  @nestAccessControl.UseRoles({
    resource: "Sample",
    action: "read",
    possession: "any",
  })
  async samples(@graphql.Args() args: SampleFindManyArgs): Promise<Sample[]> {
    return this.service.samples(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sample, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sample",
    action: "read",
    possession: "own",
  })
  async sample(
    @graphql.Args() args: SampleFindUniqueArgs
  ): Promise<Sample | null> {
    const result = await this.service.sample(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sample)
  @nestAccessControl.UseRoles({
    resource: "Sample",
    action: "create",
    possession: "any",
  })
  async createSample(@graphql.Args() args: CreateSampleArgs): Promise<Sample> {
    return await this.service.createSample({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sample)
  @nestAccessControl.UseRoles({
    resource: "Sample",
    action: "update",
    possession: "any",
  })
  async updateSample(
    @graphql.Args() args: UpdateSampleArgs
  ): Promise<Sample | null> {
    try {
      return await this.service.updateSample({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Sample)
  @nestAccessControl.UseRoles({
    resource: "Sample",
    action: "delete",
    possession: "any",
  })
  async deleteSample(
    @graphql.Args() args: DeleteSampleArgs
  ): Promise<Sample | null> {
    try {
      return await this.service.deleteSample(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ExpressionData], { name: "expressionDataItems" })
  @nestAccessControl.UseRoles({
    resource: "ExpressionData",
    action: "read",
    possession: "any",
  })
  async findExpressionDataItems(
    @graphql.Parent() parent: Sample,
    @graphql.Args() args: ExpressionDataFindManyArgs
  ): Promise<ExpressionData[]> {
    const results = await this.service.findExpressionDataItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
