import axios from 'axios';
import { addDealbaseUrl, COMMENTS, COMPANY_ID, getCurrentUserbaseUrl, setProductsBaseUrl, TYPE_OF_CONTRACT_ID, updateDealBaseUrl } from '../global/global';

export const bitrixHooks = {

     getCurrentUserId: async (companyId) => {
        let result = await axios(`${getCurrentUserbaseUrl}ID=${companyId}`)
        let userId = result.data.result['ASSIGNED_BY_ID']
 
        return userId
    },
    addDeal: async (dealName, currentUserId) => {

        let result = await axios(`${addDealbaseUrl}FIELDS[TITLE]=${dealName}&FIELDS[ASSIGNED_BY_ID]=${currentUserId}&FIELDS[CATEGORY_ID]=6&FIELDS[UF_CRM_5B39D7C2EC0AB]=true&FIELDS[CATEGORY_ID]=6&FIELDS[OPENED]="Y"`)
        console.log('addDeal')
        console.log(result)
        return result.data.result
    },
    setProducts: async (ltId, idOfCurrentDeal, goodsId, price, priceOfLt = null, unit) => {
        let result = null
       
        if (ltId) {
            result = await axios(`${setProductsBaseUrl}ID=${idOfCurrentDeal}&ROWS[0][PRODUCT_ID]=${goodsId}&ROWS[0][PRICE]=${price}&ROWS[0][MEASURE_CODE]=${unit}&ROWS[0][QUANTITY]=${1}&ROWS[1][PRODUCT_ID]=${ltId}&ROWS[1][PRICE]=${priceOfLt}&ROWS[1][MEASURE_CODE]=${unit}&ROWS[1][QUANTITY]=${1}`)
        } else {
            result = await axios(`${setProductsBaseUrl}ID=${idOfCurrentDeal}&ROWS[0][PRODUCT_ID]=${goodsId}&ROWS[0][PRICE]=${price}&ROWS[0][MEASURE_CODE]=${unit}&ROWS[0][QUANTITY]=${1}`)
        }

        return result

    },
    updateDeal: async (idOfCurrentDeal, typeOfContractId, dealField, companyId, freeblocksUrl, currentComplectName) => {

        let result = await axios(`${updateDealBaseUrl}ID=${idOfCurrentDeal}&${COMPANY_ID}=${companyId}&${COMMENTS}=${dealField}&${TYPE_OF_CONTRACT_ID}=${typeOfContractId}&${NAME_OF_COMPLECT}=${currentComplectName}`)
        await axios(`${updateDealBaseUrl}ID=${idOfCurrentDeal}&${freeblocksUrl}`)
        return result.data.result

    },


}


