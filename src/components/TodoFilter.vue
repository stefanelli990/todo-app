<template>
   
    <div class="flex flex-col space-y-3 justify-between sm:flex-row sm:items-center sm:space-y-0 mx-auto mb-6 max-w-xl px-4">
        <h2 class="text-md">You've completed <span class="text-teal-600 font-semibold">{{ todoStore.countCompleted }}</span> out of <span class="text-teal-600 font-semibold">{{ todoStore.countTotal }}</span> todos.</h2>
        <nav>
            <ul class="flex space-x-4 text-sm">
            <li class="cursor-pointer hover:underline" :class="{'text-teal-600 underline': todoStore.filter === 'all'}" @click="todoStore.filter = 'all'">All</li>
            <li class="cursor-pointer hover:underline" :class="{'text-teal-600 underline': todoStore.filter === 'completed'}" @click="todoStore.filter = 'completed'">Complete</li>
            <li class="cursor-pointer hover:underline" :class="{'text-teal-600 underline': todoStore.filter === 'incomplete'}" @click="todoStore.filter = 'incomplete'">Incomplete</li>
        </ul>
        </nav>
  </div>
  
</template>

<script setup>

import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

</script>