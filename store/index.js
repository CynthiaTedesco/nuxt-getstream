export const state = () => ({});

export const actions = {
  nuxtServerInit({ dispatch, getters }) {
    console.log("nuxtServerInit");
    if (!getters['getstream/token']) {
      dispatch("getstream/authenticate");
    }
  }
};
