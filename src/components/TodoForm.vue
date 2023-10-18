<template>
  <div class="section-container max-w-md mb-8" :class="triggerErrAnimation ? 'animate-wiggle' : ''">
    <form @submit.prevent="addNewTodo" class="bg-white flex p-3 border-2 rounded-lg" :class="errMsg ? 'border-red-500' : 'border-gray-200'">
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
    <div class="h-[20px]">
      <span v-show="errMsg" class="text-red-500 text-sm font-medium">Please enter a todo.</span>
    </div>
  </div>
</template>

<script setup>

import TodoBtn from "../components/TodoBtn.vue"
import { ref } from "vue"
import { Icon } from "@iconify/vue"
import { useTodoStore } from "../stores/todoStore"
import { v4 as uuidv4 } from "uuid"

const todoInput = ref("")
const errMsg = ref(false)
const triggerErrAnimation = ref(false)

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
    errMsg.value = false
    todoStore.tab = 'all'
  } else {
    errMsg.value = true
    triggerErrAnimation.value = true
    setTimeout(() => {
      triggerErrAnimation.value = false
    }, 500);
  }
};
</script>
