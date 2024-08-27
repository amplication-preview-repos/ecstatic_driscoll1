import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpressionDataServiceBase } from "./base/expressionData.service.base";

@Injectable()
export class ExpressionDataService extends ExpressionDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
