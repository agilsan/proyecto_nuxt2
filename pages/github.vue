<template>
  <v-layout>
    <v-flex class="text-center" >
      <p>github</p>
      
      <v-card class="elevation-12" v-if="this.$store.getters.isLoged">
                    <v-toolbar dark color="primary">
                       <v-toolbar-title>Repos de {{ this.$store.state.userGithub }} </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <v-data-table 
                          :headers="head" 
                          :items="items"
                          locale="es-ES"
                       ></v-data-table>
                    
                    </v-card-text>
                 </v-card>
      <v-card class="elevation-12" v-else>
          No estas Logeado
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>

export default {
 data() {
   return {
    items:[],
    head:[
          {  
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {  
            text: 'Lenguaje',
            align: 'start',
            sortable: false,
            value: 'language',
          },
        ],
   };
 },

 async mounted(){

 
  if(this.$store.getters.isLoged != ""){
    let res = await this.$axios.get(`https://api.github.com/users/${this.$store.state.userGithub}/repos`);
    this.items = res.data;
  }
  
 },
 methods:{
 }
};
</script>
