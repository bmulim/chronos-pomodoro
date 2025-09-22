import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);

  //tipo de ciclo
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite uma tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      durationInMinutes: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.durationInMinutes * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    setState((pervState) => {
      return {
        ...pervState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks:pervState.tasks.map(task => {
            if (pervState.activeTask && pervState.activeTask.id === task.id){
                return {...task, interruptDate: Date.now()}
            }
              return task;
        })
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="myInput"
          type="text"
          labelText={`Task`}
          placeholder="Digite sua tarefa"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      {state.currentCycle > 0 && (
        <>
          <div className="formRow">
            <p>Próximo intervalo: 25 min</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>
        </>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            type="submit"
            icon={<PlayCircleIcon />}
            title="Iniciar tarefa"
            color="green"
            aria-label="Iniciar tarefa"
            key="submit button"
          />
        ) : (
          <DefaultButton
            title="Parar tarefa"
            icon={<StopCircleIcon />}
            type="button"
            color="red"
            aria-label="Parar tarefa"
            onClick={handleInterruptTask}
            key="stop button"
          />
        )}
      </div>
    </form>
  );
}
