import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoritesService } from './favorites/favorites.service';
import { FavoritesController } from './favorites/favorites.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { ResourcesService } from './resources/resources.service';
import { ResourcesController } from './resources/resources.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, FavoritesController, ResourcesController],
  providers: [AppService, FavoritesService, PrismaService, ResourcesService],
})
export class AppModule {}
