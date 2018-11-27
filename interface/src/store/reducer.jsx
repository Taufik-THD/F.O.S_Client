const initialState = {
  formRegister: false,
  isLogin: false,
  addChefForm: false,
  addAdminForm: false,
  addMenuForm: false,
  listScreen: false,
  screenFoods: false,
  screenAdmins: false,
  screenChefs: false,
  allMenu: null,
  allAdmin: null,
  allChef: null
}

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
      case 'FORM_REGISTER':
        return {
          ...state,
          formRegister: action.payload
        }
      case 'CANCEL_PROCESS':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: false,
          addMenuForm: false,
          listScreen: false,
          screenFoods: false,
          screenAdmins: false,
          screenChefs: false
        }
      case 'FORM_ADD_CHEF':
        return {
          ...state,
          addChefForm: true,
          addAdminForm: false,
          addMenuForm: false,
          listScreen: false,
          screenFoods: false,
          screenAdmins: false,
          screenChefs: false
        }
      case 'FORM_ADD_ADMIN':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: true,
          addMenuForm: false,
          listScreen: false,
          screenFoods: false,
          screenAdmins: false,
          screenChefs: false
        }
      case 'FORM_ADD_MENU':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: false,
          addMenuForm: true,
          listScreen: false,
          screenFoods: false,
          screenAdmins: false,
          screenChefs: false
        }
      case 'LIST_SCREEN':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: false,
          addMenuForm: false,
          listScreen: true,
          screenFoods: false,
          screenAdmins: false,
          screenChefs: false
        }
      case 'FOODS_SCREEN':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: false,
          addMenuForm: false,
          listScreen: true,
          screenFoods: true,
          screenAdmins: false,
          screenChefs: false
        }
      case 'ADMINS_SCREEN':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: false,
          addMenuForm: false,
          listScreen: true,
          screenFoods: false,
          screenAdmins: true,
          screenChefs: false
        }
      case 'CHEFS_SCREEN':
        return {
          ...state,
          addChefForm: false,
          addAdminForm: false,
          addMenuForm: false,
          listScreen: true,
          screenFoods: false,
          screenAdmins: false,
          screenChefs: true
        }
      case 'MENU':
        return {
          ...state,
          allMenu: action.payload
        }
      case 'ADMIN':
        return {
          ...state,
          allAdmin: action.payload
        }
      case 'CHEF':
        return {
          ...state,
          allChef: action.payload
        }
        
      default:
        return state
  }
}

export default reducer
