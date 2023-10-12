import { defineStore } from "pinia"

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [{id:1, title: 'Buy Milk', isComplete: false},{id:2, title: 'Read a book', isComplete: false}],
    filter: 'all'
  }),
  getters: {
    completedTodos() {
      return this.todos.filter(todo => todo.isComplete)
    },
    incompleteTodos() {
      return this.todos.filter(todo => !todo.isComplete)
    },
    countCompleted() {
      return this.todos.reduce((acc, curr) => {
        return curr.isComplete ? acc + 1 : acc
      }, 0)
    },
    countTotal() {
      return this.todos.length
    }
  },
  actions: {
    addTodo(todo) {
      // Add a new todo item to the array
      this.todos.unshift(todo)
    },
    deleteTodo(todoId) {
      
      // Find the index of the todo item with the given ID
      const index = this.todos.findIndex((todo) => todo.id === todoId)

      // If found, remove it from the array
      if (index !== -1) {
        this.todos.splice(index, 1)
      }
  
    },
    completeTodo(todoId) {

      // Find the index of the todo item with the given ID
      const todo = this.todos.find((todo) => todo.id === todoId)

      // If found, toggle complete
      if(todo) {
        todo.isComplete = !todo.isComplete
      }
    },
    updateTodo(todoId,inputTodo) {

       // Find the index of the todo item with the given ID
      const todo = this.todos.find((todo) => todo.id === todoId)
      todo.title = inputTodo
   }
  }
})
