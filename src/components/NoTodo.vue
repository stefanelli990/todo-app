<template>
    <div class="section-container max-w-md text-lg font-medium text-center">{{ noTodoMsg }}</div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

const noTodoMsg = computed(() => {
  if (todoStore.countTotal === 0) {
    return "Your todo list is empty. Add new todos to fill it up and keep things organized! 📋"
  } else if (todoStore.tab === 'completed' && todoStore.completedTodos.length === 0) {
    return "You don't have any completed todos."
  } else if (todoStore.tab === 'incomplete' && todoStore.incompleteTodos.length === 0) {
    return "You don't have any pending todos."
  }
  return ''
})

</script>