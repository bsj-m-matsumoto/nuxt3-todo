<script lang="ts" setup>
const taskState = useTask()
const { taskGroup, deleteTaskFromTaskGroup } = taskState

function deleteTask(taskIndex: number) {
  deleteTaskFromTaskGroup(taskIndex)
}
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          タスク名
        </th>
        <th class="text-left">
          作成日
        </th>
        <th class="text-left">
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, taskIndex) in taskGroup" :key="task.task">
        <td>{{ task.task }}</td>
        <td>{{ task.created_at }}</td>
        <td>
          <v-btn @click="deleteTask(taskIndex)">削除</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>