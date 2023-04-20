import { defineStore } from "pinia";
import supabase from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasksList: [],
    };
  },

  actions: {
    async _fetchAllTasks(context) {
      const { data, error } = await supabase.from("tasks").select();

      if (error) {
        console.error(error);
        return;
      }

      console.log(data);
      context.state.tasksList = data;
    },
    async _addNewTask(context, title) {
      const { data, error } = await supabase
        .from("tasks")
        .insert({ title })
        .select();
      if (error) {
        console.error(error);
        return;
      }
      this.tasksList.push(data)
    }
  }
})
 






















