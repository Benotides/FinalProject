<template>
<header>
    <h1>Make magic with your tasks</h1>
</header>
<div>

    <div class="auth-container">
     
        <SignIn />
        <SignUp />

    </div>
</div>
</template>

<script>

import SignIn from "../Auth/SignIn.vue";
import SignUp from "../Auth/SignUp.vue";

export default {
    name: 'Auth',
    components: {
    
        SignIn,
        SignUp,
      


    },
};
</script>

<style scoped>
header {
    background-color: rgb(71, 54, 12);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 80px;
}

header h1 {
    color: whitesmoke;
    font-family: 'aniron', sans-serif;
    font-size: 2.5rem;
    margin: 0;
}

header button {
    background-color: #093a21;
    color: #F8E9A1;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-family: 'aniron', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

header button:hover {
    background-color: #003D19;
}

.auth-container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    margin-top: 3rem;
    font-family: 'aniron', sans-serif;
    color: #3c2525;
}

.auth form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}

.auth button {
    background-color: #006633;
    color: #F8E9A1;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-family: 'aniron', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.auth button:hover {
    background-color: #003D19;
}
</style>
