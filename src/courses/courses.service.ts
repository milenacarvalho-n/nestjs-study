/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/couse.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            description: 'Fundamentos de NestJS',
            tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
        },
        {
            id: 2,
            description: 'Fundamentos de Typescript',
            tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
        }
    ];

findAll(){
  return this.courses;
}

findOne(id: string){
    const course = this.courses.find((course) => course.id === Number(id));

    if(!course){
        throw new HttpException(`Course by id: ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return course;
}

create(createCourseDto: any){
    return this.courses.push(createCourseDto);
}

update(id: string, updateCourseDto: any){
    const indexCourse = this.courses.findIndex((course) => course.id === Number(id));
    this.courses[indexCourse] = updateCourseDto;
}

remove(id: string){
    const indexCourse = this.courses.findIndex((course) => course.id === Number(id));
    this.courses.splice(indexCourse, 1);
}

}

