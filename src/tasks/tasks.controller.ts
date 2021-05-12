import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {  CreateDto  }  from './dto/create-task.dto';


@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): {} {
        return {"message": "all"}
    }

    @Post('/create')
    creatTask(@Body() task: CreateDto): string {
        return 'se genero task: ' + task.title + ' ' + 'Su descripcion es:' + task.descriptio; 
    }

    @Put()
    updateTask(id: string) {

    }

    @Delete()
    deleteTask(id: string) {

    }
}
