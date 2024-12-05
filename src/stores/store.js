import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => {
    return { 
        data : []
     }
  },
  getters: {
    getData: (state) => state.data,
},
  actions:{
    async FetchData(id){
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        const datas = await response.json();
        if(id !=undefined){
            id = datas.findIndex((el)=>{return el.id == id})
            this.data = datas[id]
        }else{
            this.data = datas; 
        }
    },
  }
})