import { defineStore } from "pinia";
import { supabase } from "@/supabase/index.js";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    login(user) {
      this.user = user
    },
    logout() {
      this.user = null
    }
  }
})
export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async signIn({ commit }, { email, password }) {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
      commit("setUser", user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error(error);
      alert("Error signing in. Please try again.");
    }
  },
  async signUp({ commit }, { name, email, password }) {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      await supabase.from("users").insert([{ name, email }]);
      commit("setUser", user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error(error);
      alert("Error creating account. Please try again.");
    }
  },
  async signOut({ commit }) {
    await supabase.auth.signOut();
    commit("setUser", null);
    localStorage.removeItem("user");
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.user !== null;
  },
};
