let initialState =

{
    'nameOfType': 'Без дополнительной оплаты',
    'value': [
        {
            'name': 'Прайм: законодательство, судебная практика и проекты законов',
            'checked': false,
            'weight': 0,
            'description': 'Индивидуальная новостная лента. Объемный банк кратких аннотаций для всех важных документов, входящих в комплект пользователя. Мощный аналитический инструмент для построения обзоров изменений законодательства - позволяет формировать тематические обзоры нововведений и изменений законодательства за любой период.'
        },
        {
            'name': 'Архивы ГАРАНТа',
            'checked': false,
            'weight': 0,
            'description': 'Узковедомственные отраслевые документы и индивидуальные правовые акты.'
        },
        {
            'name': 'Большая домашняя правовая энциклопедия',
            'checked': false,
            'weight': 0,
            'description': 'Основные правовые темы, с которыми может столкнуться любой гражданин нашей страны.'
        },
        {
            'name': 'База знаний службы правового консалтинга',
            'checked': false,
            'weight': 0,
            'description': ''
        },


        {
            'name': 'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
            'checked': false,
            'weight': 0,
            'description': ''
        },

        {
            'name': 'Судебная практика: приложение к консультационным блокам',
            'checked': false,
            'weight': 0,
            'description': 'В основу блока легли решения судебных инстанций, на которые ссылаются в своих работах авторы консультационных материалов, подключенных в систему ГАРАНТ. На момент выхода информационный блок объединяет решения, вынесенные Верховным Судом РФ, Высшим Арбитражным Судом РФ и Федеральными арбитражными судами округов.'
        },

        {
            'name': 'Онлайн-архив «Практика судов общей юрисдикции»',
            'checked': false,
            'weight': 0,
            'description': 'При выборе блоков с арбитражной практикой и практикой судов общей юрисдикции вы получаете доступ к десяткам миллионов судебных решений арбитражных судов первой инстанции и судов общей юрисдикции. Эта информация позволит вам не только точнее формировать свою позицию по спорным вопросам, но и проводить анализ практических аспектов ведения бизнеса.'
        },
        {
            'name': 'Онлайн-архив «Практика мировых судей»',
            'checked': false,
            'weight': 0,
            'description': 'При выборе блока "Практика судов общей юрисдикции" вы получаете доступ более чем десяткам миллионов решений мировых судей субъектов РФ.(разводы, взыскание алиментов, нарушение прав потребителей и т.д.).'
        },
        {
            'name': 'Онлайн-архив «Определения арбитражных судов»',
            'checked': false,
            'weight': 0,
            'description': 'Архив содержит определения, выносимые арбитражными судами первой, апелляционной и кассационной инстанций.'
        },
        {
            'name': 'Онлайн-архив «Практика арбитражных судов первой инстанции»',
            'checked': false,
            'weight': 0,
            'description': ''
        },
        {
            'name': 'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
            'checked': false,
            'weight': 0,
            'description': ''
        },
        {
            'name': '2 экспертных заключения в месяц',
            'checked': false,
            'weight': 0,
            'description': ''
        },
        {
            'name': 'Неограниченное количество устных консультаций',
            'checked': false,
            'weight': 0,
            'description': ''
        },




    ]
}




export const changeInfoblocksFromCurrent = (state, currentComplect) => { //меняет стэйт в соответствии с currentComplect



    let stateCopy = { ...state }
    stateCopy.value = [...state.value]
    stateCopy.value[0] = { ...state.value[0] }
    stateCopy.value[1] = { ...state.value[1] }
    stateCopy.value[2] = { ...state.value[2] }
    stateCopy.value[3] = { ...state.value[3] }
    stateCopy.value[4] = { ...state.value[4] }
    stateCopy.value[5] = { ...state.value[5] }
    stateCopy.value[6] = { ...state.value[6] }
    // let stateCopy_1 = [...state][1]
    // let stateCopy_2 = [...state][2]
    // let stateCopy_3 = [...state][3]
    // let stateCopy_4 = [...state][4]
    // let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]
    if (currentComplect) {

        stateCopy.value.forEach((elem, index) => {



            if (currentComplect.freeBlocks.includes(index)) {
                elem.checked = true
            } else {
                elem.checked = false
            }

            if (elem.name === 'Онлайн-архив «Практика арбитражных судов первой инстанции»' || elem.name === 'Онлайн-архив «Определения арбитражных судов»') {

                if (currentComplect.currentFilling.includes('Практика арбитражных судов округов') || currentComplect.currentFilling.includes('Практика арбитражных апелляционных судов округов')) {
                    elem.checked = true
                } else {
                    elem.checked = false
                }


            } else if (elem.name === 'Онлайн-архив «Практика судов общей юрисдикции»') {
                if (currentComplect.currentFilling.includes('Практика судов общей юрисдикции')) {
                    elem.checked = true
                } else {
                    elem.checked = false
                }
            }else if (elem.name === 'Онлайн-архив «Практика мировых судей»' ) {
                if (currentComplect.currentFilling.includes('Практика высших судебных органов')) {
                    elem.checked = true
                } else {
                    elem.checked = false
                }
            }
        })


    } else {

        stateCopy.value.forEach((elem) => {

            elem.checked = false

        })

    }


    return stateCopy
}
const changeInfolocksFromNewComplect = (state, currentComplect) => {

    let stateCopy = { ...state }
    stateCopy.value = [...state.value]
    //     stateCopy.value[0] = {...state.value[0]}
    // stateCopy.value[1] = {...state.value[1]}
    // stateCopy.value[2] = {...state.value[2]}
    // stateCopy.value[3] = {...state.value[3]}
    // stateCopy.value[4] = {...state.value[4]}
    // stateCopy.value[5] = {...state.value[5]}
    // stateCopy.value[6] = {...state.value[6]}
    // stateCopy.value[7] = {...state.value[7]}
    // stateCopy.value[8] = {...state.value[8]}
    // let stateCopy_1 = [...state][1]
    // let stateCopy_2 = [...state][2]
    // let stateCopy_3 = [...state][3]
    // let stateCopy_4 = [...state][4]
    // let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]

    if (currentComplect) {

        stateCopy.value.forEach((elem, index) => {
            if (currentComplect.freeBlocks.includes(index)) {
                elem.checked = true
            } else {
                elem.checked = false
            }

            // if (currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
            //     elem.checked = true
            // }
        })


    } else {

        stateCopy.value.forEach((elem) => {

            elem.checked = false

        })

    }

    return stateCopy
}

export const freeBlocks = (state = initialState, action) => {
    // action.type === 'CHANGE_CURRENT_INFOBLOCKS' || 
    if (action.type === 'CHANGE_CURRENT_INFOBLOCKS' || action.type === 'RESET') {
        return changeInfoblocksFromCurrent(state, action.currentComplect)
    }
    else if (action.type === 'CHANGE_BLOCKS_FROM_NEW_COMPLECT') {
        return changeInfolocksFromNewComplect(state, action.currentComplect)

    }
    else {
        return state
    }




}