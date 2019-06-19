import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ICategory } from './category.interface';

@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService
    ){ }

    @Get()
    async index() {
        return await this.categoriesService.findAll();
    }

    @Post()
    async create(@Body() category: ICategory){
        return await this.categoriesService.create(category);
    }

    @Put()
    async update(@Body() category: ICategory){
        return await this.categoriesService.update(category);
    }

    @Delete()
    async delete(@Param() params){
        return await this.categoriesService.delete(params.id);
    }
}
