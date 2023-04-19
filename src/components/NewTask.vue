<template>
    <div class="flex flex-col items-center max-w-lg mx-auto mt-5 mb-3 bg-white p-5 rounded-xl shadow shadow-slate-300">
      <div @click="changeShowAdd" class="flex flex-row items-center">
        <h1 class="text-3xl font-bold text-slate-900 hover:text-slate-200">¡Añade una tarea!</h1>
        <svg v-if="!showAddTask" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-10 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        <svg v-if="showAddTask" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-10 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      <p v-if="showAddTask" class="text-xs p-4 text-gray-400">Hoy es dia {{time}}</p>
      <input 
        v-if="showAddTask"
        class="w-full my-1 py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
        :value="title" 
        @input="title = $event.target.value" 
        type="text" 
        placeholder="Titulo" />
      <input 
        v-if="showAddTask"
        class="w-full my-1 py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
        :value="description" 
        @input="description = $event.target.value" 
        type="text" 
        placeholder="Descripción" />
      <button v-if="showAddTask" @click="addTask" class="w-full border-x border-y border-emerald-400 mt-1 py-1 rounded-md text-emerald-400 font-bold hover:bg-emerald-400 hover:text-gray-100 transition duration-3000">Añadir Tarea</button>
    </div>
  </template>
  

  <script>
import { defineEmits, ref } from 'vue';
import moment from 'moment';

export default {
  emits: ['addTask'],
  setup(props, { emit }) {
    const title = ref('');
    const description = ref('');
    const errorMsgContainer = ref(false);
    const showAddTask = ref(false);
    const errorMsg = ref('');
    const time = moment().format('LL');

    const addTask = async () => {
      if (title.value) {
        emit('addTask', title.value, description.value);
        title.value = '';
        description.value = '';
      } else {
        errorMsg.value = `Error: Debe añadir un Titulo a la tarea!`;
        errorMsgContainer.value = true;
        setTimeout(() => {
          errorMsg.value = null;
          errorMsgContainer.value = false;
        }, 5000);
      }
    };

    const changeShowAdd = () => {
      showAdd
    }
  }
}
</script>