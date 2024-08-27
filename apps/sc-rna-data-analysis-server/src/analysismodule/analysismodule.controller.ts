import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalysisModuleService } from "./analysismodule.service";
import { AnalysisCreateDto } from "../analysisModule/AnalysisCreateDto";

@swagger.ApiTags("analysisModules")
@common.Controller("analysisModules")
export class AnalysisModuleController {
  constructor(protected readonly service: AnalysisModuleService) {}

  @common.Get("/fetchResults")
  @swagger.ApiOkResponse({
    type: AnalysisCreateDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchResults(
    @common.Body()
    body: string
  ): Promise<AnalysisCreateDto[]> {
        return this.service.FetchResults(body);
      }

  @common.Post("/processSRA")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessSraFile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessSraFile(body);
      }

  @common.Post("/runPCA")
  @swagger.ApiOkResponse({
    type: AnalysisCreateDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RunPca(
    @common.Body()
    body: string
  ): Promise<AnalysisCreateDto> {
        return this.service.RunPca(body);
      }

  @common.Post("/runUMAP")
  @swagger.ApiOkResponse({
    type: AnalysisCreateDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RunUmap(
    @common.Body()
    body: string
  ): Promise<AnalysisCreateDto> {
        return this.service.RunUmap(body);
      }

  @common.Post("/uploadSRA")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadSraFile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadSraFile(body);
      }
}
