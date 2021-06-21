import stream from "getstream";

export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

export const actions = {
  authenticate({ commit }) {
    console.log("authenticating...");
    const client = stream.connect(
      "92mzjgtz5tvc",
      "pbrxdneuga6wxswydvkvhrhmmher4yhpbmtjeudj3f5pm4chquwmveu4jmb23xqd"
    );

    const userToken = client.createUserToken("the-user-id");
    commit("setToken", userToken);

    //TODO setcookie?
  }
};

export const getters = {
  token(state) {
    return state.token;
  }
};
