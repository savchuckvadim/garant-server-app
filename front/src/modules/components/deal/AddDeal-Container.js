import { connect } from "react-redux"
import { resetActionCreator } from "../../redux/redusers/currentComplect-reducer";
import { sendDeal } from "../../redux/redusers/deal/deal-reducer";
import { dealNameActionCreator } from "../../redux/redusers/deal/dealName-reducer";
import { dealStatusActionCreator } from "../../redux/redusers/deal/dealStatus-reducer";
import { dealFieldActionCreator } from "../../redux/redusers/deal/field-reducer";
import { AddDeal } from "./AddDeal"



const mapStateToProps = (state) => {

    let currentComplect = state.currentComplect;
    let dealField = state.field.current

    let dealStatus = state.dealStatus.isFetching
    let description = state.field.infoblocksDescription
    let descriptionObject = state.description.description
    let price = state.price.currentPrice.value
    let goods = state.goods.currentId
    let ltGoods = state.legalTech.currentId
    let priceOfLt = state.legalTech.priceOfLt

    let activeFreeBlocks = []

    state.freeBlocks.value.forEach(block => {

        if (block.checked) {
            activeFreeBlocks.push(block)
        }
    })
    let freeBlocks = ``;

    activeFreeBlocks.map((block, index) => {
        if (index < activeFreeBlocks.length) {
            freeBlocks += `FIELDS[UF_CRM_1676561014][${index}]=${block.name}&`
        } else {
            freeBlocks += `FIELDS[UF_CRM_1676561014][${index}]=${block.name}`
        }

    })
   
    let descriptionUrl = ''



    return {
        currentComplectsType: state.globalParameters.currentComplectsType,
        typeOfContract: state.typeOfContract,
        unit: state.typeOfContract.value.units.CODE,
        typeOfClient: state.typeOfClient,
        prepaid: state.prepaid,
        priceOfComplect: price,
        goods: goods,
        ltGoods: ltGoods,
        priceOfLt: priceOfLt,
        // styleOfPush,
        // styleOfCancel,
        dealField,
        dealStatus: dealStatus,
        name: state.dealName.value,
        description: description,
        descriptionObject: descriptionObject,
        freeBlocks: freeBlocks,
        descriptionUrl,
        descriptionUrls: state.field.descriptionUrls



    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        reset: () => {
            let resetAction = resetActionCreator()
            return dispatch(resetAction)
        },

        changeDealStatus: (status) => {

            let statusAction = dealStatusActionCreator(status);
            dispatch(statusAction)
        },
        changeDealName: (value) => {

            let nameAction = dealNameActionCreator(value);
            dispatch(nameAction)
        },
        sendDeal: (dealName, ltId, goodsId, price, priceOfLt, unit, typeOfContractId, dealField, description, freeblocksUrl, descriptionUrl, descriptionUrls) => {
            console.log('sendDeal')
            dispatch(sendDeal(dealName, ltId, goodsId, price, priceOfLt, unit, typeOfContractId, dealField, description, freeblocksUrl, descriptionUrl, descriptionUrls))
        }

    }
}


export const AddDealContainer = connect(mapStateToProps, mapDispatchToProps)(AddDeal)