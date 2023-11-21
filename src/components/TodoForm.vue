<template>
  <div class="section-container max-w-md mb-8" :class="triggerAnimation ? 'animate-wiggle' : ''">
    <form @submit.prevent="addNewTodo" class="bg-white flex p-3 border-2 rounded-lg border-gray-200">
      <input
        class="bg-transparent w-full px-4 py-2 outline-none"
        type="text"
        v-model="todoInput"
        placeholder="Add new todo..."
      />
      <TodoBtn  colour="bg-primaryColor"
        ><Icon icon="uil:plus" width="16" height="16"
      /></TodoBtn>
    </form>
   
  </div>
</template>

<script setup>

import TodoBtn from "../components/TodoBtn.vue"
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import { useTodoStore } from "../stores/todoStore"
import { v4 as uuidv4 } from "uuid"
import { useToast } from 'vue-toastification'

const toast = useToast()

const todoInput = ref("")
const triggerAnimation = ref(false)

const todoStore = useTodoStore()

const addNewTodo = () => {
  const todo = {
    id: uuidv4(),
    title: todoInput.value,
    isComplete: false,
  }

  if (todoInput.value.length) {
    todoStore.addTodo(todo)
    todoInput.value = ""
    todoStore.tab = 'all'
  } else {
    toast.error('Please enter a valid todo.')
    triggerAnimation.value = true
    setTimeout(() => {
      triggerAnimation.value = false
    }, 500)
  }
};
</script>
