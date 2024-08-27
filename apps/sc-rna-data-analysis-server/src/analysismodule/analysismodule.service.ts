import { Injectable } from "@nestjs/common";
import { AnalysisCreateDto } from "../analysisModule/AnalysisCreateDto";

@Injectable()
export class AnalysisModuleService {
  constructor() {}
  async FetchResults(args: AnalysisCreateDto): Promise<AnalysisCreateDto[]> {
    throw new Error("Not implemented");
  }
  async ProcessSraFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RunPca(args: AnalysisCreateDto): Promise<AnalysisCreateDto> {
    throw new Error("Not implemented");
  }
  async RunUmap(args: AnalysisCreateDto): Promise<AnalysisCreateDto> {
    throw new Error("Not implemented");
  }
  async UploadSraFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
