import { MAXIMUM } from "./currentComplect-reducer"

const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'



let initialState = [

  {
    'nameOfType': 'Пакет Энциклопедий решений',
    'value':
      [
        {
          'name': 'Пакет Энциклопедий решений для бухгалтера',
          'checked': false,
          'including': [0, 2, 4, 5, 6],
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Пакет Энциклопедий решений для бухгалтера госсектора',
          'checked': false,
          'weight': 1,
          'including': [1, 3, 4, 5, 6],
          'description': ''
        },
        {
          'name': 'Пакет Энциклопедий решений для юриста',
          'checked': false,
          'weight': 1,
          'including': [0, 3, 4, 6, 7],
          'description': ''
        }
      ]
  },
  {
    'nameOfType': 'Энциклопедии решений',

    'value': [
      {
        'name': 'Энциклопедия решений.Проверки организаций и предпринимателей',
        'checked': false,
        'weight': 0.5,
        'description': 'Практические рекомендации по подготовке к проверкам и по действиям при их проведении. Образцы документов, оформляемых в ходе проверок.'
      },
      {
        'name': 'Энциклопедия решений.Госсектор: учет, отчетность, финконтроль',
        'checked': false,
        'weight': 0.5,
        'description': 'Аналитические материалы, предлагающие практические рекомендации по решению наиболее значимых и актуальных задач, стоящих в настоящее время перед специалистами организаций государственного сектора.'
      },
      {
        'name': 'Энциклопедия решений.Хозяйственные ситуации',
        'checked': false,
        'weight': 0.5,
        'description': 'Практическая информация по конкретным хозяйственным ситуациям: описание ситуации, регулирующие ее правовые нормы, необходимые формы документов, бухгалтерские проводки, позиция контролирующих органов и судебная практика.'
      },
      {
        'name': 'Энциклопедия решений.Госзакупки',
        'checked': false,
        'weight': 0.5,
        'description': 'Эксклюзивные консультации от специалистов ФАС России, подготовленные специально для системы ГАРАНТ, разъяснения и комментарии, административная практика, судебная практика и примерные формы документов.'
      },
      {
        'name': 'Энциклопедия решений.Трудовые отношения, кадры',
        'checked': false,
        'weight': 0.5,
        'description': 'Практические рекомендации по вопросам взаимоотношений работодателя и работника: от приема на работу до увольнения. Практические примеры, рекомендации.'
      },

      {
        'name': 'Энциклопедия решений.Налоги и взносы',
        'checked': false,
        'weight': 0.5,
        'description': 'Пошаговые инструкции, практические примеры, образцы заполнения документов. Учтены все существующие точки зрения по спорным вопросам.'
      },
      {
        'name': 'Энциклопедия решений.Договоры и иные сделки',
        'checked': false,
        'weight': 0.5,
        'description': 'Материалы о часто используемых гражданско-правовых договорах, помимо общей характеристики договоров рассматриваются особенности различных их видов. Формы договоров, акты, уведомления претензии и т. д.'
      },
      {
        'name': 'Энциклопедия решений.Корпоративное право',
        'checked': false,
        'weight': 0.5,
        'description': 'Необходимые сведения о регистрации юридических лиц, создании и деятельности филиалов и представительств, реорганизации, ликвидации и т. д.'
      },
    ]
  }

]




////////////////////////////////
export const changePaketsErFromCurrent = (state, currentComplect) => {      //меняет _state



  const changerErDependPaket = (indexOfPaket) => {
    //изменяет checked Энциклпедий в зависимости от Пакета, 
    // ставит weight = 0 и checked = true у Энциклопедий входящих в комплект,
    //  у остальных checked false, если пакетов больше - по-другому...

    if (indexOfPaket !== 'noPaket') { //если какой-то пакет есть
      state[0].value[indexOfPaket].checked = true; //заходит  в пакеты по индексу includes -находит нужный пакет делает его отмеченным checked

      state[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })

      state[0].value[indexOfPaket].including.forEach(el => {
        state[1].value[el].checked = true
        state[1].value[el].weight = 0
      })
    } else {                                 //если нет никаких пакетов в currentComplect.fillingPaketsErIndexes
      state[0].value.forEach(element => {   //проходит по всем пакетам и делает их checked = false
        element.checked = false;
        element.weight = 1;
      })
      state[1].value.forEach(element => {   //проходит по всем пакетам и делает их checked = false и вес 0,5
        element.checked = false;
        element.weight = 0.5
      })
    }


  }
  //////////TODO условие переделать на currentComplect - если undefined

  if (currentComplect) {


    if (currentComplect.fillingPaketsERIndexes.length < 1) {
      state[0].value[0].checked = false;
      state[0].value[1].checked = false;
      state[0].value[2].checked = false;
      changerErDependPaket('noPaket')
    } else if (currentComplect.fillingPaketsERIndexes.length === 1) {
      if (currentComplect.fillingPaketsERIndexes.includes(0)) {
        state[0].value[1].checked = false;
        state[0].value[2].checked = false;
        changerErDependPaket(0)

      } else if (currentComplect.fillingPaketsERIndexes.includes(1)) {
        state[0].value[0].checked = false;
        state[0].value[2].checked = false;
        changerErDependPaket(1)
      } else if (currentComplect.fillingPaketsERIndexes.includes(2)) {
        state[0].value[0].checked = false;
        state[0].value[1].checked = false;
        changerErDependPaket(2)
      }
    } else if (currentComplect.fillingPaketsERIndexes.length === 2) { //офис

      if (currentComplect.fillingPaketsERIndexes.includes(0) && currentComplect.fillingPaketsERIndexes.includes(1)) {

        state[0].value[2].checked = false; // пакет который не входит в дате отключаем
        state[0].value[0].checked = true;
        state[0].value[1].checked = true;
        //склеить массивы входящих в пакеты эр
        let concatIncludesER = state[0].value[0].including.concat(state[0].value[1].including);
        state[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {
          state[1].value[el].checked = true
          state[1].value[el].weight = 0
        })


      } else if (currentComplect.fillingPaketsERIndexes.includes(0) && currentComplect.fillingPaketsERIndexes.includes(2)) {
        state[0].value[1].checked = false;
        state[0].value[0].checked = true;
        state[0].value[2].checked = true;

        let concatIncludesER = state[0].value[0].including.concat(state[0].value[2].including);

        state[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {

          state[1].value[el].checked = true
          state[1].value[el].weight = 0
        })


      } else if (currentComplect.fillingPaketsERIndexes.includes(1) && currentComplect.fillingPaketsERIndexes.includes(2)) {
        state[0].value[0].checked = false;
        state[0].value[1].checked = true;
        state[0].value[2].checked = true;

        let concatIncludesER = state[0].value[1].including.concat(state[0].value[2].including);

        state[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {
          state[1].value[el].checked = true
          state[1].value[el].weight = 0
        })
      }

    }


    // saveERandPaketsERinCurrentComplect(state);


  } else { //если current Complect отсутствует, всё обнуляется
    state[0].value.forEach((element) => {
      element.checked = false
      element.weight = 0.5
    })
  }

  return state
}
/////////////////////////////////

const changeEr = (stateCome, action) => {

  let state = [...stateCome]
  state[0] = [...stateCome][0]
  state[1] = [...stateCome][1]


  state[0].value[0] = [...stateCome][0].value[0]
  state[0].value[1] = [...stateCome][0].value[1]
  state[0].value[2] = [...stateCome][0].value[2]

  state[1].value[0] = [...stateCome][1].value[0]
  state[1].value[1] = [...stateCome][1].value[1]
  state[1].value[2] = [...stateCome][1].value[2]
  state[1].value[3] = [...stateCome][1].value[3]
  state[1].value[4] = [...stateCome][1].value[4]
  state[1].value[5] = [...stateCome][1].value[5]
  state[1].value[6] = [...stateCome][1].value[6]
  state[1].value[7] = [...stateCome][1].value[7]


  state = changePaketsErFromCurrent(state, action.currentComplect)


  state = changeErFromCurrent(state, action.currentComplect)

  return state
}

///////////////////////////
export const changeErFromCurrent = (state, currentComplect) => {


  if (currentComplect) {
    state[1].value.forEach((element, index) => {
      if (currentComplect.fillingEncyclopediasIndexes.includes(index)) {
        element.checked = true
        element.weight = 0.5
      }
    })
  } else {

    state[1].value.forEach((element) => {
      element.checked = false
      element.weight = 0.5
    })
  }

  return state

}

export const changeErAndPaketsErFromCurrent = (state = initialState, action) => {

  if (action.type === 'CREATE_COMPLECT' || action.type === MAXIMUM || action.type === CHANGE_CURRENT_PAKETS_ER || action.type === CHANGE_CURRENT_ER || action.type === 'RESET') {
    // changePaketsErFromCurrent(state, action.currentComplect)
    // changeErFromCurrent(state, action.currentComplect)

    return changeEr(state, action)
    //отмечает checked : true/false и значение weight 
    //  в пакетах и ЭР в зависимости от пришедшего CurrentComplect - от названия 
    // и от  fillingPaketsERIndexes и fillingEncyclopediasIndexes
  }
  return state


}