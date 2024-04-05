// import { NextFunction, Request, Response } from 'express';
// import { Container } from 'typedi';
// import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
// import { Category } from '../interfaces/categories.interface';
// import { CategoryService } from '../services/categories.service';

// export class CategoryController {
//   public categoryService = Container.get(CategoryService);

//   public getAll = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const foundCategories: Category[] = await this.categoryService.findAllCategories();

//       res.status(200).json({ data: foundCategories, message: 'findAll' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public getById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const categoryId = Number(req.params.id);

//       const foundCategory: Category = await this.categoryService.findByCategoryId(categoryId);

//       res.status(200).json({ data: foundCategory, message: 'findOne' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public create = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const categoryData: CreateCategoryDto = req.body;

//       const createdCategory: Category = await this.categoryService.createCategory(categoryData);

//       res.status(201).json({ data: createdCategory, message: 'created' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public update = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const categoryId = Number(req.params.id);
//       const categoryData: UpdateCategoryDto = req.body;

//       const updatedCategory: Category = await this.categoryService.updateCategory(categoryId, categoryData);

//       res.status(200).json({ data: updatedCategory, message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public delete = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const categoryId = Number(req.params.id);

//       const deletedCategory: Category = await this.categoryService.deleteCategory(categoryId);

//       res.status(200).json({ data: deletedCategory, message: 'deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };
// }
