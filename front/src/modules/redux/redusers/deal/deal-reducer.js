import React from 'react';
import { bitrixHooks } from "../../../services/bitrix-api";
import { preloader } from "../preloader-reducer";



const SET_NEW_DEAL = 'SET_NEW_DEAL'
const DELETE_CREATED_DEAL = 'DELETE_CREATED_DEAL'

const initialState = {
    newDeal: null
}


//AC
const setNewDeal = (deal) => ({ type: SET_NEW_DEAL, deal })
const deleteCreatedDeal = () => ({ type: DELETE_CREATED_DEAL })



//THUNK
export const sendDeal = (dealName, ltId, goodsId, price, priceOfLt = null, unit, typeOfContractId, dealField, description, freeblocksUrl, descriptionUrl, descriptionUrls) => async (dispatch, getState) => {

    dispatch(preloader(true))
    try {

        const state = getState()
        const currentUserId = state.app.user
        const companyId = state.app.company
        const currentComplectName = state.currentComplect.name
        console.log('currentComplectName')
        console.log(currentComplectName)

       
        console.log(companyId)

        const newDealId = await bitrixHooks.addDeal(dealName, currentUserId)
        console.log('newDealId')
        console.log(newDealId)

        await bitrixHooks.setProducts(ltId, newDealId, goodsId, price, priceOfLt, unit)
        const updatingDeal = await bitrixHooks.updateDeal(newDealId, typeOfContractId, dealField, companyId, freeblocksUrl, currentComplectName)
        dispatch(setNewDeal(updatingDeal))
        dispatch(preloader(false))
        document.location.reload();

           
    } catch (error) {
        console.log(error)
        dispatch(preloader(false))
    }



}


const dealReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_DEAL: return { ...state, newDeal: action.deal };
        case DELETE_CREATED_DEAL: return { ...state, newDeal: null };
        default:
            return state;
    }
}

export default dealReducer