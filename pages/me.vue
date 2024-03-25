<template>
  <v-layout>
    
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;{{ JSON.stringify(this.$store.getters.me.username) }}.&#8221;
      </blockquote>
      <v-card class="elevation-12">
        <v-btn type="button" @click="github" class="mt-4" color="primary" value="github">Github</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
 data() {
   return {
   };
 },
 methods:{
  github(){
    this.$router.push('/github');
  },

 }
};
</script>
