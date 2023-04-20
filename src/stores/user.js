import { defineStore } from "pinia";
import supabase from "../supabase";
import { useRouter } from 'vue-router';



export default defineStore('userStore', {
  state:() => ({
    user:null,
  }),


  actions: {
    async fetchUser() {
      const  { data: user, error } = await supabase.auth.getUser();
      if (error) throw error;
      if (!user) {
        console.log('El usuario aún no ha iniciado sesión');
        this.user = null;
      } else {
        console.log('Usuario recuperado:', user);
        this.user = user;
      }
    },
    
async signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({

    email,
    password,
  });
  if (error) throw error;
  if (user) this.user = user;

},
async signIn(email, password) {
  const router = useRouter();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (data && !error) {
    this.user = data;
    // Verificar si existe un nombre de usuario
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("username")
      .eq("email", email)
      .single();
    if (userData && !userError && userData.username) {
      // Si existe el nombre de usuario, redirigir a Home
      this.router.push("/");
    } else {
      // Si no existe el nombre de usuario, redirigir a SignUp para crear uno
      this.router.push({ name: "SignUp" });
    }
  } else {
    // Si hay un error, redirigir a SignIn
    this.router.push({ name: "SignIn" });
  }
}




}

  }
)

