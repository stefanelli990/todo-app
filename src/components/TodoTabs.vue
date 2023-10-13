<template>
    <div class="section-container flex flex-col space-y-3 justify-between sm:flex-row sm:items-center sm:space-y-0  mb-6">
        <h2 class="text-lg">You've completed <span class="text-primaryColor font-semibold">{{ todoStore.completedTodos.length }}</span> out of <span class="text-primaryColor font-semibold">{{ todoStore.todos.length }}</span> todos.</h2>
        <nav>
            <ul class="flex space-x-2 text-sm text-black/40 font-medium">
            <li class="cursor-pointer hover:underline" :class="{'text-primaryColor underline': todoStore.tab === 'all'}" @click="todoStore.tab = 'all'">All({{ todoStore.todos.length }})</li>
            <li class="cursor-pointer hover:underline" :class="{'text-primaryColor underline': todoStore.tab === 'completed','pointer-events-none': todoStore.completedTodos.length === 0}" @click="todoStore.tab = 'completed'">Completed({{ todoStore.completedTodos.length }})</li>
            <li class="cursor-pointer hover:underline" :class="{'text-primaryColor underline': todoStore.tab === 'incomplete','pointer-events-none': todoStore.incompleteTodos.length === 0}" @click="todoStore.tab = 'incomplete'">Pending({{ todoStore.incompleteTodos.length }})</li>
        </ul>
        </nav>
  </div>
  
</template>

<script setup>

import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

</script>