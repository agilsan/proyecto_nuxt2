  // holds your root state
  export const state = () => ({
    users:[
      {id:0, username:"agil" , pass:"pass" , name:"Antonio Gil"  , userGithub:"agilsan"},
      {id:1, username:"edelacalle", pass:"pass", name:"Enrique de la Calle", userGithub:"edelacalle"}
    ],
    username: "",
    userGithub:""
  })
  
  // contains your actions
  export const actions = {

  }
  
  // contains your mutations
  export const mutations = {
    loadUser(state,existsUser){
      state.username = existsUser.name;
      state.userGithub = existsUser.userGithub;
    },
    logoutUser(state){
      state.username = "";
      state.userGithub = "";
    }
  }

  // your root getters
  export const getters = {
    existUserPass: state => ( user , pass ) => {
      const elemFind = state.users.find(elem => elem.username == user && elem.pass == pass);
      return (elemFind != undefined)? elemFind : [];
    },
    isLoged:state =>  state.username != "" , 
    me: state => {
      console.log("En me -> state.username: ", state.username);
      return state;
    }
  }