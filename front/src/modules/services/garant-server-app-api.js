import BX24API from 'bx24-api';
import axios from "axios";
//baseURL: 'https://sheet.best/api/sheets/4d75a8b6-0dbc-44af-8465-9cf163faacf6/'

const instance = axios.create({

    baseURL: 'https://garant-server-app.ru/api',

})
const instanceLocalApi = axios.create({

    baseURL: 'https://garant-server-app.ru/',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true

})

export const garantAPI = {
    getTest: async () => {
        const response = await instanceLocalApi.get('test')
        console.log(response)
    },

    getCurrentUserId: async () => {
        const currentUserIdExtend = await instance.post('user', {
            type: 'user.current'
        })

        console.log(currentUserIdExtend)
        const currentUserId = currentUserIdExtend.answer.result.ID
        return currentUserId
    },
    addDeal: async (dealName, currentUserId) => {
        const newDeal = await BX24API.callMethod('crm.deal.add', {
            fields: {
                "ID": 56767,
                "TITLE": `${dealName}`,
                // "STAGE_ID": "GOODS",
                "STAGE_ID": "Составление комплекта",
                // "COMPANY_ID": 3,
                // "CONTACT_ID": 3,
                "OPENED": "Y",
                "ASSIGNED_BY_ID": currentUserId,
                "PROBABILITY": 30,
                "CURRENCY_ID": "RUB",
                "OPPORTUNITY": 5000,

                "CATEGORY_ID": 6,
                'STAGE_ID': 'C6:NEW',

                'UF_CRM_5B39D7C2EC0AB': true

            },
            params: {
                "REGISTER_SONET_EVENT": "Y"
            }
        })
        return newDeal.answer.result
    },

    setProducts: async (ltId, idOfCurrentDeal, goodsId, price, priceOfLt = null, unit) => {
        console.log((ltId, idOfCurrentDeal, goodsId, price, priceOfLt, unit))

        let products = null
        if (ltId) {
            products = await BX24API.callMethod('crm.deal.productrows.set', {
                id: idOfCurrentDeal,
                rows:
                    [
                        { "PRODUCT_ID": goodsId, "PRICE": price, 'MEASURE_CODE': unit, "QUANTITY": 1 },
                        { "PRODUCT_ID": ltId, "PRICE": priceOfLt, 'MEASURE_CODE': unit, "QUANTITY": 1 }

                    ]
            })
        } else {
            products = await BX24API.callMethod('crm.deal.productrows.set', {
                id: idOfCurrentDeal,
                rows:
                    [
                        { "PRODUCT_ID": goodsId, "PRICE": price, 'MEASURE_CODE': unit, "QUANTITY": 1 },

                    ]
            })
        }
        return products
    },
    getCompanyId: async (dealName) => {
        const company = await BX24API.callMethod('crm.company.list', {
            order: { "DATE_CREATE": "ASC" },
            filter: { "TITLE": `${dealName}` },
            select: ["ID", "TITLE", "CURRENCY_ID", "REVENUE"]
        })
        let companyId
        // const companyTitle = company.answer.result[0].TITLE
        if (company.answer.result[0]) {
            companyId = company.answer.result[0].ID
        } else {
            companyId = null
        }
        return companyId
    },
    updateDeal: async (idOfCurrentDeal, typeOfContractId, dealField, description, companyId) => {
        console.log('idOfCurrentDeal ' + idOfCurrentDeal, 'typeOfContractId ' + typeOfContractId, 'dealField ' + dealField, 'description ' + description, 'companyId ' + companyId)
        let fieldsUpdate = {            //поля для обновления сделки   
            'UF_CRM_1540190343': typeOfContractId,
            "COMMENTS": `${dealField}`,
            'UF_CRM_1642056396': ` ${description}`,
            "COMPANY_ID": `${companyId}`
        }
        const updatedDeal = await BX24API.callMethod(
            "crm.deal.update",
            {
                id: idOfCurrentDeal,
                fields:
                {
                    ...fieldsUpdate
                    // 'UF_CRM_1540190343': typeOfContractId,  //type of contract id
                    // "COMMENTS": dealField,           //field infoblocks
                    // 'UF_CRM_1642056396': description,  //? description
                    // "COMPANY_ID": companyId          //company id

                },
                params: { "REGISTER_SONET_EVENT": "Y" }
            },

        )
        return updatedDeal
    },
    info: async () => {

        // await BX24API.callMethod('init')
        const info = await BX24API.callMethod('placement.info')
        console.log(info)
    }
}