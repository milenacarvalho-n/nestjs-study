import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
  @Get(':id')
  //   pode haver um ou mais parâmetros
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Get(':id')
  //   estou pegando um parâmetro chamado id e definindo o tipo dele como string
  findOneDes(@Param('id') id: string): string {
    return `Curso ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Post('unique')
  // pegando uma propriedade específica do body
  createOneProp(@Body('name') body): string {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
