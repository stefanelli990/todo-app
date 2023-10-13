<template>
    <div class="section-container text-xl mt-14 md:text-center">{{ noTodoMsg }}</div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

const noTodoMsg = computed(() => {
  if(todoStore.completedTodos.length === 0 && todoStore.filter === 'completed') {
    return "Incomplete todos waiting for your action."
  } else if(todoStore.incompleteTodos.length === 0 && todoStore.filter === 'incomplete') {
    return "Congratulations, you've completed these todos!"
  } else if(todoStore.countTotal === 0 && todoStore.filter === 'all') {
    return "You're all caught up – no more todos!"
  } 
  return ''
})

</script>