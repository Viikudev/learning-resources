import { Controller } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Get, Param } from '@nestjs/common';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourceService: ResourcesService) {}

  @Get()
  getResources() {
    return this.resourceService.getResources();
  }

  @Get(':id')
  async getSingleResource(@Param('id') id: string) {
    return await this.resourceService.getSingleResource(id);
  }
}
