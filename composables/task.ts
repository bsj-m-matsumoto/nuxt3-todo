export const useTask = () => {
  const taskGroup: Ref<Array> = useState('taskGroup', () => [])

  const addTaskToTaskGroup = (task: string) => {
    const date = new Date();
    const data: object = {
      task: task, created_at: `${date.getFullYear()}/${date.getMonth()} / ${date.getDate()}`
    }
    taskGroup.value.push(data)
  }

  const deleteTaskFromTaskGroup = (taskIndex: number) => {
    taskGroup.value.splice(taskIndex, 1)
  }

  return {
    taskGroup: readonly(taskGroup),
    addTaskToTaskGroup,
    deleteTaskFromTaskGroup
  }
}
