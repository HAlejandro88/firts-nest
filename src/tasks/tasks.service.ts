import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

export interface Task extends Document {
    id?: number;
    title: string;
    description: string;
    done: boolean;
}

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel:Model<Task>) {}

    

    async findTasks() {
        return await this.taskModel.find();
    }

    async getTask(id: string) {
        try {
            return await this.taskModel.findById(id);
        } catch (error) {
            console.log(error);
        }
        
    }

    /* getTasks(): Task[] {
        return this.task;
    }


    getTask(id:number) {
        return this.task.filter(_task => _task.id === id);
    } */
}
