// live1 _ Tramite una chiamata ad una API, stampiamo a schermo un numero casuale.
// (not finished)

const app = new Vue ({
    el:'#app',
    data:{
        randomNumber: null
    },
    methods: {

    },
    mounted (){
       axios
       .get("https://flynn.boolean.careers/exercises/api/random/int")
       .then(response =>{
          this.randomNumber = response.data.response;
       })
        
    }
}) 