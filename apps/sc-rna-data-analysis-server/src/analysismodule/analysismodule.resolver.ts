import * as graphql from "@nestjs/graphql";
import { AnalysisCreateDto } from "../analysisModule/AnalysisCreateDto";
import { AnalysisModuleService } from "./analysismodule.service";

export class AnalysisModuleResolver {
  constructor(protected readonly service: AnalysisModuleService) {}

  @graphql.Query(() => [AnalysisCreateDto])
  async FetchResults(
    @graphql.Args()
    args: AnalysisCreateDto
  ): Promise<AnalysisCreateDto[]> {
    return this.service.FetchResults(args);
  }

  @graphql.Mutation(() => String)
  async ProcessSraFile(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ProcessSraFile(args);
  }

  @graphql.Mutation(() => AnalysisCreateDto)
  async RunPca(
    @graphql.Args()
    args: AnalysisCreateDto
  ): Promise<AnalysisCreateDto> {
    return this.service.RunPca(args);
  }

  @graphql.Mutation(() => AnalysisCreateDto)
  async RunUmap(
    @graphql.Args()
    args: AnalysisCreateDto
  ): Promise<AnalysisCreateDto> {
    return this.service.RunUmap(args);
  }

  @graphql.Mutation(() => String)
  async UploadSraFile(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.UploadSraFile(args);
  }
}
