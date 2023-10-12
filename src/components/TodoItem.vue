<template>
  <li class="mb-4 p-3 bg-slate-700 rounded-md flex border" :class="isEditing ? 'border-yellow-500' : 'border-slate-700'">
    <div class="flex items-center flex-1 space-x-2">
      <button @click="$emit('complete')">
        <Icon v-if="isComplete" icon="carbon:checkmark-filled" width="18" height="18" />
        <Icon v-else icon="material-symbols:circle" width="18" height="18" />
      </button>
      <input
      ref="inputTodoRef"
        v-if="isEditing"
        class="bg-transparent  outline-none"
        type="text"
        v-model="inputTodo"
      />
      <span v-else :class="{ 'line-through': isComplete	}">{{ title }}</span>
    </div>
    <div class="flex space-x-2">
      <TodoBtn v-if="isEditing" @click="handleUpdate(id)" colour="bg-yellow-500 text-black">
        <Icon icon="ant-design:save-outlined" width="20" height="20" />
      </TodoBtn>
      <TodoBtn v-if="!isEditing" @click="editTodo(title)" colour="bg-teal-600"
        ><Icon icon="bx:edit" width="20" height="20"
      /></TodoBtn>
      <TodoBtn  colour="bg-red-500" @click="$emit('delete')"
        ><Icon icon="material-symbols:delete-outline" width="20" height="20"
      /></TodoBtn>
    </div>
  </li>
</template>

<script setup>

import { ref, nextTick  } from 'vue'
import { Icon } from "@iconify/vue"
import TodoBtn from "../components/TodoBtn.vue"
import { useTodoStore } from '../stores/todoStore';

const todoStore = useTodoStore()

const isEditing = ref(false)
const inputTodo = ref('')
const inputTodoRef = ref(null)

const props = defineProps(['title','isComplete','id'])
const emits = defineEmits(['complete','delete','update'])

const editTodo = (title) => {
 
  isEditing.value = true
  inputTodo.value = title
  
  nextTick(() => {
    inputTodoRef.value.select()
  })
}

const handleUpdate = (id) => {
  
  todoStore.updateTodo(id,inputTodo.value)
  isEditing.value = false
}

</script>
