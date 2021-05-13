import { Injectable } from '@nestjs/common';

interface Task {
    id?: number;
    title: string;
    description: string;
    done: boolean;
}

@Injectable()
export class TasksService {
     task: Task[] =  [
        {
            id: 1,
            title: 'testing',
            description: 'tarea prueba',
            done: false
        },
        {
            id: 2,
            title: 'nest',
            description: 'tarea prueba',
            done: false
        },
        {
            id: 1,
            title: 'angular',
            description: 'tarea prueba',
            done: false
        }
    ];

    getTasks(): Task[] {
        return this.task;
    }


    getTask(id:number) {
        return this.task.filter(_task => _task.id === id);
    }
}
