import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from './category.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectID } from 'bson';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('Category') private readonly categoriesSchema: Model<ICategory>
    ){}

    async findAll(): Promise<ICategory[]>{
        try {
            return await this.categoriesSchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async create(category: ICategory): Promise<ICategory>{
        try {
            return this.categoriesSchema.create(category);
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async update(category: ICategory): Promise<ICategory>{
        try {
            return this.categoriesSchema.findByIdAndUpdate({_id: category.id}, category, { new: true })
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async delete(categoryId: ObjectID): Promise<ICategory>{
        try {
            return this.categoriesSchema.findByIdAndDelete({_id: categoryId});
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
}
