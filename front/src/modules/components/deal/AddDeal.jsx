import React, { useState } from 'react';
import BX24API from 'bx24-api';
import { Button } from "@material-ui/core";
import "./AddDeal.css"
import "./prepaid.css"
import { DealNameContainer } from './dealName-Container';
import { DealFieldContainer } from './included/deal-field-Container';

export const AddDeal = (props) => {

  // console.log('dealField', props.dealField)


  let typeOfContractId = props.typeOfContract.value.id

  let price = props.priceOfComplect
  let goodsId = props.goods
  let ltId = props.ltGoods
  let priceOfLt = props.priceOfLt
  let dealField = `${<DealFieldContainer />}`
  let dealName = props.name
  let description = props.description



  console.log('🚀 ~ file: AddTask.jsx ~ line 6 ~ AddTask ~ taskData', props.name);

  const onChange = (event) => {

    props.changeDealName(event.target.value)
  };

  const onSubmit = async (event) => {
    
    event.preventDefault();
    // props.changeDealStatus(true)

    console.log('onSubmit')
    // const fields = await BX24API.callMethod('crm.deal.fields')  //look at all fields parameters
    console.log('Начал думать');

    props.sendDeal(dealName, ltId, goodsId, price, priceOfLt, props.unit, typeOfContractId, props.dealField, description, props.freeBlocks, props.descriptionUrl, props.descriptionUrls)
    props.reset()

    // document.location.replace(`https://april-garant.bitrix24.ru/crm/deal/details/${idOfCurrentDeal}/`);


  }
  const onCancel = () => {
    document.location.reload();
  }

  return (



    <div className='dealButtons__container'>
      <Button className='addDeal__btn' onClick={onSubmit} variant="outlined">Создать Сделку</Button>
      <Button className='cancelDeal__btn' onClick={onCancel} variant="outlined">Отменить</Button>

    </div>




  );
};
