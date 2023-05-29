<script lang="ts" setup>
const isShowDialog = ref<boolean>(false)
const task = ref<String>('')
const taskState = useTask()
const { addTaskToTaskGroup } = taskState

function clickAdd() {
  addTaskToTaskGroup(String(task.value))
  task.value = ''
}
</script>

<template>
  <v-app>
    <v-app-bar :title="'Nuxt3-TODO'">
      <v-btn icon="mdi-plus" @click="isShowDialog = !isShowDialog"></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="dialog" v-if="isShowDialog">
          <v-col>
            <v-text-field v-model="task" clearable :label="'タスクを入力'"></v-text-field>
            <v-btn @click="clickAdd">追加</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <AppTaskTable />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.dialog {
  position: absolute;
}
</style>
 