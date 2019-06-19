import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService 
    ){}

    @Get()
    async index() {
        return await this.categoriesService.findAll();
    }

}
