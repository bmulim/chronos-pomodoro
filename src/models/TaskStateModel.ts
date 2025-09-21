import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[]; //locais de uso: histórico, MainForm
  secondsRemaining: number; //locais de uso: Home, CountDown, histórico, MainForm, Button
  formattedSecondsRemaining: string; //Locais de uso: Título, CountDown
  activeTask: TaskModel | null; //locais de uso: CountDown, histórico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number;//MainForm
    longBreakTime: number;//MainForm
  };
};