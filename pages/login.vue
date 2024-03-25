<template>
  <v-layout>
    <v-flex class="text-center">
      <p>LOGIN</p>
      <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                       <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                    <form ref="form" @submit.prevent="login()">
                           <v-text-field
                             v-model="username"
                             name="username"
                             label="Username"
                             type="text"
                             placeholder="usuarios"
                             required
                          ></v-text-field>
                          
                           <v-text-field
                             v-model="password"
                             name="password"
                             label="Password"
                             type="password"
                             placeholder="password"
                             required
                          ></v-text-field>
                          <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
                          <v-btn type="button" @click="logout" class="mt-4" color="primary" value="log in">Logout</v-btn>
                     </form>
                    </v-card-text>
                 </v-card>
                 <v-card class="elevation-12" v-if="this.lError">
                    Error en Login
                 </v-card>
      
    </v-flex>
  </v-layout>
</template>


<script>

export default {
 data() {
   return {
    lError:false,
    username:"agil",
    password:"pass"
   };
 },
 methods:{
  login(){
    let existsUser = this.$store.getters.existUserPass(this.username,this.password);

    if(existsUser.length != 0){
      this.$store.commit('loadUser', existsUser);
      this.$router.push('/me')
    }else{
      this.lError = true 
    }
  },
  logout(){
      this.$store.commit('logoutUser');
      this.lError = false
  },

 }
};
</script>
