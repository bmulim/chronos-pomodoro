import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url));
  }

  static getInstece() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  postMessege(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(callBack: (e: MessageEvent) => void) {
    this.worker.onmessage = callBack;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
