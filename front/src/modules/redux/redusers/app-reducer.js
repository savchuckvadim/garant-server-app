import { bitrixAPI, bitrixHooks } from '../../services/bitrix-api'
import { garantAPI } from '../../services/garant-server-app-api'

const SET_APP_DATA = 'SET_APP_DATA'
const initialState = {
    company: '',
    user: ''

}

const setAppData = (currentUserId, currentCompanyId) => ({ type: SET_APP_DATA, currentUserId, currentCompanyId })

export const initial = () => async (dispatch) => {
    const companyId = localStorage.getItem('company_id');

    console.log('companyId')
    console.log(companyId)

    // garantAPI.getTest()
    console.log('initial')
    // garantAPI.getCurrentUserId()
    const currentUserId = await bitrixHooks.getCurrentUserId(companyId)
    const currentCompanyId = Number(companyId)
    dispatch(setAppData(currentUserId, currentCompanyId))
    console.log(currentCompanyId)
    // bitrixAPI.info()
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_DATA:
            const resultState = { ...state, company: action.currentCompanyId, user: action.currentUserId }
            console.log('app-state')
            console.log(resultState)
            return resultState

        default:
            return state
    }

}

export default app