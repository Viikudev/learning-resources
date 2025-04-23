import { Controller } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import {
  Get,
  Post,
  Delete,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getFavorites(): number[] {
    return this.favoritesService.getFavorites();
  }

  @Post(':resourceId')
  addFavorite(@Param('resourceId') resourceId: string): {
    success: boolean;
    message: string;
  } {
    const id = parseInt(resourceId, 10);
    if (isNaN(id)) {
      throw new NotFoundException('Resource ID must be a number');
    }
    const added = this.favoritesService.addFavorite(id);
    if (added) {
      return { success: true, message: 'Resource added to favorites' };
    } else {
      return { success: false, message: 'Resource was already in favorites' };
    }
  }

  @Delete(':resourceId')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeFavorite(@Param('resourceId') resourceId: string): void {
    const id = parseInt(resourceId, 10);
    if (isNaN(id)) {
      throw new NotFoundException('Resource ID must be a number');
    }
    const removed = this.favoritesService.removeFavorite(id);
    if (!removed) {
      throw new NotFoundException(
        `Resource with ID ${resourceId} not found in favorites`,
      );
    }
  }

  @Get(':resourceId/status')
  isFavorite(@Param('resourceId') resourceId: string): { isFavorite: boolean } {
    const id = parseInt(resourceId, 10);
    if (isNaN(id)) {
      throw new NotFoundException('Resource ID must be a number');
    }
    const favoriteStatus = this.favoritesService.isFavorite(id);
    return { isFavorite: favoriteStatus };
  }
}
