import axios from "axios";

const state = {
  items: [],
};

const mutations = {
  STORE_ITEMS(state, items) {
    state.items = items;
  },
  UPDATE_ITEM(state, updatedItem) {
    const index = state.findIndex((item) => item.imdbID == updatedItem.imdbID);
    if (index >= 0) {
      state.items.splice(index, 1);
      state.items.splice(index, 0, updatedItem);
    }
  },
};

const actions = {
  fetchItems: ({ commit }) => {
    axios
      .get("/static/Vue_Response.json")
      .then((res) => {
        console.log(res.data.results);
        commit("STORE_ITEMS", res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateItem: ({ commit }) => {
    axios
      .patch("<SERVER_URL>", event)
      .then((res) => {
        commit("UPDATE_ITEM", res);
        console.log("item updated");
      })
      .catch((err) => {
        console.log("failed to save item >> ", err);
      });
  },
};

const getters = {
  getAllItems: (state) => {
    return state.items;
  },
};
export default { state, mutations, actions, getters };
