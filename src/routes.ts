import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response){
  
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Dani'
  });

  return res.send();
}