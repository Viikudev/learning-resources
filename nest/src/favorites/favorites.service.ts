import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  private readonly testUserId = 'testUser123';
  private favoritesMap: Map<string, Set<number>> = new Map();

  constructor() {
    if (!this.favoritesMap.has(this.testUserId)) {
      this.favoritesMap.set(this.testUserId, new Set<number>());
    }
  }

  addFavorite(resourceId: number): boolean {
    const userFavorites = this.favoritesMap.get(this.testUserId);
    if (userFavorites) {
      const sizeBeforeAdd = userFavorites.size;
      userFavorites.add(resourceId);
      return userFavorites.size > sizeBeforeAdd;
    }
    return false;
  }

  removeFavorite(resourceId: number): boolean {
    const userFavorites = this.favoritesMap.get(this.testUserId);
    if (userFavorites) {
      return userFavorites.delete(resourceId);
    }
    return false;
  }

  getFavorites(): number[] {
    const userFavorites = this.favoritesMap.get(this.testUserId);
    // Convierte el Set a un array para retornarlo
    return userFavorites ? Array.from(userFavorites) : [];
  }

  isFavorite(resourceId: number): boolean {
    const userFavorites = this.favoritesMap.get(this.testUserId);
    // Verifica si el resourceId existe en el Set
    return userFavorites ? userFavorites.has(resourceId) : false;
  }
}
