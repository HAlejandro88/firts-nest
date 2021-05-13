import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import {  CreateDto  }  from './dto/create-task.dto';
import {  Request, Response  } from 'express';
import {  TasksService  } from './tasks.service';

interface Task {
    id?: number;
    title: string;
    description: string;
    done: boolean;
}

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Task[] {
       return this.taskService.getTasks();
    }

    @Get(':taskId')
    getOneTask(@Param('taskId') taskId:string): Task[] {

        return this.taskService.getTask(parseInt(taskId));
    } 

    @Get('/another')
    getAllTask(@Req() req, @Res() res):Response {
        return res.status(200).send('Hola')
    } // esto es como express

    @Post('/create')
    creatTask(@Body() task: CreateDto): string {
        return 'se genero task: ' + task.title + ' ' + 'Su descripcion es:' + task.descriptio; 
    }

    @Put(':id')
    updateTask(@Body() task: CreateDto, @Param('id') id) {
        console.log('actualizar la tarea', id);
        console.log(task)
    }

    @Delete(':id')
    deleteTask(@Param('id') id) {
        console.log(id)
    }
}
