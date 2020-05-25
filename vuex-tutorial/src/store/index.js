import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    saleProducts: state => {
      let salesProducts = state.products.map(el => {
        return {
          name: '**' + el.name + '**',
          price: el.price / 2
        }
      });

      return salesProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(item => {
        item.price -= payload
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit('reducePrice', payload)
      }, 3000)
    }
  },
  modules: {
  },
});
