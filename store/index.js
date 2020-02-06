// fetch() appears to *always* return a resolved Promise, even if the request actually failed.
// This wraps a call to fetch() so that code for handling success and failure can be split off
// into .then() and .catch() blocks, respectively, as usual.
async function request(...args) {
  let result = await fetch(...args);
  let resultJson = await result.json();
  
  if (result.ok) {
    return resultJson;
  } else {
    throw Error(resultJson.message);
  }
}


export const state = () => ({
  loggedIn: false
})

export const mutations = {
  login (state) {
    state.loggedIn = true;
  },

  logout(state) {
    state.loggedIn = false;
  }
}

export const actions = {
  async login ({ commit }, { password }) {
    try {
      const { success } = await request('/api/login', {
        method: 'POST',
        body: JSON.stringify({ password: password }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (success) {
        commit('login');
      } else {
        // Just in case!
        console.log("Backup catch!");
        throw new Error('Bad Credentials');
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }
}
