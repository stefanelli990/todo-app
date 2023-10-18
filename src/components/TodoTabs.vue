<template>
    <nav>
        <ul class="flex justify-center space-x-2 text-sm text-black/40 font-medium mb-8">
        <li class="cursor-pointer hover:underline" :class="{'text-primaryColor underline': todoStore.tab === 'all'}" @click="todoStore.tab = 'all'">All({{ todoStore.todos.length }})</li>
        <li class="cursor-pointer hover:underline" :class="{'text-primaryColor underline': todoStore.tab === 'completed'}" @click="todoStore.tab = 'completed'">Completed({{ todoStore.completedTodos.length }})</li>
        <li class="cursor-pointer hover:underline" :class="{'text-primaryColor underline': todoStore.tab === 'incomplete'}" @click="todoStore.tab = 'incomplete'">Pending({{ todoStore.incompleteTodos.length }})</li>
    </ul>
    </nav>
</template>

<script setup>

import { useTodoStore } from "../stores/todoStore"

const todoStore = useTodoStore()

</script>