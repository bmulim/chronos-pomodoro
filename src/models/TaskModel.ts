import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completeDate: number | null; //quando a tarefa foi finalizada
  interruptDate: number | null; //quando a tarefa foi interrompida
  type: keyof TaskStateModel["config"];
};
