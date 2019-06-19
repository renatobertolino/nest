import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from './category.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('Category') private readonly categoriesSchema: Model<ICategory>
    ){}

    async findAll(){
        try {
            return await this.categoriesSchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
