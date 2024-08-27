import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneServiceBase } from "./base/gene.service.base";

@Injectable()
export class GeneService extends GeneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
