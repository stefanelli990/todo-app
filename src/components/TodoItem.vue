<template>
  <li
    class="mb-4 p-3 rounded-md flex items-center border-2 shadow-md"
    :class="[
    isEditing ? 'border-yellow-400' : 'border-transparent',
    isComplete ? 'bg-gray-200' : 'bg-white'
  ]"
    
  >
    <div class="contents">
      <button @click="todoStore.completeTodo(id)">
        <Icon
          v-if="isComplete"
          class="text-primaryColor"
          icon="carbon:checkmark-filled"
          width="18"
          height="18"
        />
        <Icon v-else class="text-gray-300" icon="material-symbols:circle" width="18" height="18" />
      </button>
      <input
        ref="inputTodoRef"
        v-if="isEditing"
        class="bg-transparent w-full px-2 outline-none"
        
        type="text"
        v-model="inputTodo"
      />
      <span v-else class="px-2 truncate flex-1" :class="{ 'line-through': isComplete }">{{ title }}</span>
    </div>
    <div class="flex space-x-2">
      <TodoBtn
        v-if="isEditing"
        @click="handleUpdate(id)"
        colour="bg-yellow-400 !text-black"
      >
        <Icon icon="ant-design:save-outlined" width="20" height="20" />
      </TodoBtn>
      <TodoBtn v-if="!isEditing" @click="editTodo(title)" colour="bg-primaryColor"
        ><Icon icon="bx:edit" width="20" height="20"
      /></TodoBtn>
      <TodoBtn colour="bg-red-500" @click="todoStore.deleteTodo(id)"
        ><Icon icon="material-symbols:delete-outline" width="20" height="20"
      /></TodoBtn>
    </div>
  </li>
  
</template>

<script setup>
import { ref, nextTick } from "vue";
import { Icon } from "@iconify/vue";
import TodoBtn from "../components/TodoBtn.vue";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore();

const isEditing = ref(false);
const inputTodo = ref("");
const inputTodoRef = ref(null);

const props = defineProps(["title", "isComplete", "id"]);

const editTodo = (title) => {
  isEditing.value = true;
  inputTodo.value = title;

  nextTick(() => {
    inputTodoRef.value.select();
  });
};

const handleUpdate = (id) => {
  todoStore.updateTodo(id, inputTodo.value);
  isEditing.value = false;
};
</script>
