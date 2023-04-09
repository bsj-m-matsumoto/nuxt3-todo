export const useTask = () => {
  const taskGroup: Ref<Array> = useState('taskGroup', () => [])

  const addTaskToTaskGroup = (task: string) => {
    taskGroup.value.push(task)
  }

  return {
    taskGroup: readonly(taskGroup),
    addTaskToTaskGroup
  }
}