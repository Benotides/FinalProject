
import { defineStore } from "pinia";
import supabase from "../supabase/index";


export  default defineStore("tasks", {
  state() {
    return {
      tasksList: [],
    }
    },
    
  actions: {

    async _fetchAllTasks() {
      const { data, error } = await supabase
          .from('tasks')
          .select()

          if(error) {
            console.error(error)
            return
          }
        console.log(data)
        this.tasksList = data;
    },
    async _addNewTask(title) {
      const { data, error } = await supabase.from('countries')
      .insert({title})
      .select();
      if (error) {
        console.error(error);
        return;
      }
      this.tasksList.push(data)
    }
  }
})
 






















