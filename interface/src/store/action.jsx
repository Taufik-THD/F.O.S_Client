import axios from 'axios'
import swal from 'sweetalert'

export const registerForm = (payload) => {
  return function (dispatch) {
    dispatch(registerFormStatus(true))
  }
}

export const setMenu = (payload) => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/menu'
    }).then(({data}) => {
      dispatch(allMenu(data.data))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const getAdminData = (payload) => {
  return function (dispatch) {
    const token = localStorage.getItem('authorization')
    axios({
      method: 'get',
      url: 'http://localhost:3000/admin',
      headers: {
        token: token
      }
    }).then(({data}) => {
      dispatch(allAdmin(data.data))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const getChefData = (payload) => {
  return function (dispatch) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/chef'
    }).then(({data}) => {
      dispatch(allChef(data.data))
    }).catch(err => {
      console.log(err);
    })
  }
}

export const updateMenu = (payload) => {
  return function (dispatch) {
    dispatch(allMenu(payload))
    dispatch(cancelAll())
  }
}

export const updateAdmin = (payload) => {
  return function (dispatch) {
    dispatch(allAdmin(payload))
    dispatch(cancelAll())
  }
}

export const updateChef = (payload) => {
  return function (dispatch) {
    dispatch(allChef(payload))
    dispatch(cancelAll())
  }
}

export const loginForm = (payload) => {
  return function (dispatch) {
    dispatch(registerFormStatus(false))
  }
}

export const listScreen = (payload) => {
  return function (dispatch) {
    dispatch(listScreenStatus(true))
  }
}

export const listScreenFoods = (payload) => {
  return function (dispatch) {
    dispatch(screenFoods(true))
  }
}

export const listScreenAdmins = (payload) => {
  return function (dispatch) {
    dispatch(screenAdmins(true))
  }
}

export const listScreenChefs = (payload) => {
  return function (dispatch) {
    dispatch(screenChefs(true))
  }
}

export const login = (payload) => {
  return function (dispatch) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/login/admin',
      data: payload
    }).then(({data}) => {
      localStorage.setItem('authorization', data.token)
    }).catch(err => {
      console.log(err);
    })
  }
}

export const formAddMenu = (payload) => {
  return function (dispatch) {
    dispatch(formMenu(true))
  }
}

export const formAddAdmin = (payload) => {
  return function (dispatch) {
    dispatch(formAdmin(true))
  }
}

export const formAddChef = (payload) => {
  return function (dispatch) {
    dispatch(formChef(true))
  }
}

export const logout = (payload) => {
  return function (dispatch) {
    localStorage.clear()
  }
}

// =============================================================================
// =============================================================================
// =============================================================================

export const allMenu = (payload) => {
  return {
    type: 'MENU',
    payload: payload
  }
}

export const allAdmin = (payload) => {
  return {
    type: 'ADMIN',
    payload: payload
  }
}

export const allChef = (payload) => {
  return {
    type: 'CHEF',
    payload: payload
  }
}

export const listScreenStatus = (payload) => {
  return {
    type: 'LIST_SCREEN',
    payload: payload
  }
}

export const registerFormStatus = (payload) => {
  return {
    type: 'FORM_REGISTER',
    payload: payload
  }
}

export const cancelAll = (payload) => {
  return {
    type: 'CANCEL_PROCESS',
    payload: payload
  }
}

export const formMenu = (payload) => {
  return {
    type: 'FORM_ADD_MENU',
    payload: payload
  }
}

export const formAdmin = (payload) => {
  return {
    type: 'FORM_ADD_ADMIN',
    payload: payload
  }
}

export const formChef = (payload) => {
  return {
    type: 'FORM_ADD_CHEF',
    payload: payload
  }
}

export const screenFoods = (payload) => {
  return {
    type: 'FOODS_SCREEN',
    payload: payload
  }
}

export const screenAdmins = (payload) => {
  return {
    type: 'ADMINS_SCREEN',
    payload: payload
  }
}

export const screenChefs = (payload) => {
  return {
    type: 'CHEFS_SCREEN',
    payload: payload
  }
}
