<template>
  <div class="section-container max-w-md flex flex-col items-center space-y-4">
    <img v-if="noTodoMsg !== ''" class="w-full max-w-[300px]" src="../assets/todo-illustration.svg" alt="">
    <div class="text-lg font-semibold text-center">{{ noTodoMsg }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

const noTodoMsg = computed(() => {
  if (todoStore.countTotal === 0) {
    return "Your todo list is empty. Add new todos to fill it up and keep things organized!"
  } else if (todoStore.tab === 'completed' && todoStore.completedTodos.length === 0) {
    return "You don't have any completed todos."
  } else if (todoStore.tab === 'incomplete' && todoStore.incompleteTodos.length === 0) {
    return "You don't have any pending todos."
  }
  return ''
})

</script>