import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => {
    return { 
        data : [],
        next : [],
     }
  },
  getters: {
    getData: (state) => state.data,
    getNext: (state) => state.next,
},
  actions:{
    async FetchData(slug,next){
        let response = await fetch('https://bsk-admin-test.testers-site.ru/api/news');
        const datas = await response.json();
        const newData = datas.data.result.list;
        if(slug !=undefined){
          const id = newData.findIndex((el)=>{return el.code == slug});
          this.data = newData[id];
          this.next = newData[id + 1];
        }
        else{
          this.data = newData; 
        }
    },
  }
})