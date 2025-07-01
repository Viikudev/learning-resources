import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  async getResources() {
    return await this.prisma.resource.findMany();
  }

  async getSingleResource(id: string) {
    return this.prisma.resource.findUnique({ where: { id: Number(id) } });
  }
}
