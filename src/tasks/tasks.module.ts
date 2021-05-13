import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { TaskSchema } from './schemas/task.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Task', schema: TaskSchema }
    ])],
    controllers: [TasksController],// rutas 
    providers: [TasksService] // logica de controladres
})
export class TasksModule {}
