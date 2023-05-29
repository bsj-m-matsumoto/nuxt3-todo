<script lang="ts" setup>
let count = ref<number>(1)
function toNextPage() {
  count.value++
  console.log(count.value)
  location.href = '/sample2'
}
</script>

<template>
  <v-app>
    <v-btn @click="toNextPage">押して</v-btn>
  </v-app>
</template>

<style lang="scss" scoped>
.v-application {
  height: 100vh;
}

.v-btn {
  position: absolute;
  top: 50%;
  left: calc((100vw - 300px)/2);
  width: 300px;
}
</style>