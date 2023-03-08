const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const TYPE_OF_CONTRACT = 'TYPE_OF_CONTRACT'


let initialState = {

    'pricesOfLt': [1050, 2200, 3300],
    'ltIds': [5040, 5042, 5044],
    'currentId': null,
    'nameOfType': 'Legal Tech',
    'display': 'none',
    'status': false,
    'weightLt': 0,
    'ltIncluded': 0,
    'nameOflt': '',
    'priceOfLt': 0,
    'previousPrice' : 0,
    'value': [{
            'name': 'Аналитическая система "Сутяжник" ',
            'checked': false,
            'weight': 1,
            'description': 'Автоматизированный сервис по подбору судебной практики, соответствующей содержанию и тематике документов, загружаемых в сервис пользователем.'
        },
        {
            'name': 'Конструктор правовых документов',
            'checked': false,
            'weight': 1,
            'description': 'Позволяет быстро получить утвержденную в установленном порядке учетную политику коммерческой или бюджетной организации, готовый к подписанию гражданско-правовой договор, трудовой договор, государственный (муниципальный) контракт и многое другое.'
        },
        {
            'name': 'Экспресс проверка контрагентов',
            'checked': false,
            'weight': 1,
            'description': 'Позволяет самостоятельно определить степень благонадежности контрагента. Информация о компании компактно сгруппирована по рубрикам(реквизиты, сведения об учредителях и многие другие).'
        },
        {
            'name': 'Экспресс Согласование',
            'checked': false,
            'weight': 1,
            'description': 'Инструмент, позволяющий навести порядок в бизнес-процессах согласования договоров, коммерческих предложений, официальных писем, протоколов собраний и любых других документов, требующих визирования несколькими сотрудниками организации.'
        },
        {
            'name': 'Гарант Тендер',
            'checked': false,
            'weight': 1,
            'description': 'Мониторинг площадок и контроль участия в закупках. Помогает найти по интересующим параметрам и отобрать лучшие закупки на всех торговых площадках страны, а также информирует об изменении в документации и статусе конкретной закупки. Благодаря системе комментирования можно наладить обмен информацией внутри тендерного отдела.'
        },
        {
            'name': 'Гарант Диск',
            'checked': false,
            'weight': 1,
            'description': 'Возможность обеспечить удобный доступ к актуальным версиям всех важных документов организации прямо в системе ГАРАНТ. Теперь все важные документы, формы, образцы будут храниться в одном месте и доступны всем сотрудникам, у которых есть доступ к системе ГАРАНТ. А еще этот сервис умеет автоматически расставлять гиперссылки на законы в загруженном тексте.'
        },
        {
            'name': 'Гарант Коннект',
            'checked': false,
            'weight': 1,
            'description': 'API к системе ГАРАНТ, программный интерфейс приложения, позволяющий пропустить этап обращения к обычному интерфейсу IT-решений и сразу встраивать их функции в ваши программы и сайты. До недавних пор справочные правовые системы не имели своего API. Компания "Гарант" первой решила исправить эту ситуацию.'
        },
        {
            'name': 'Онлайн Патент Стандарт',
            'checked': false,
            'weight': 1,
            'description': 'Цифровая платформа для управления, поиска и мониторинга интеллектуальной собственности, а также специальный комплекс сопутствующих услуг. Помимо организации работы с имеющейся собственностью в виде товарных знаков, патентов, промышленных образцов, программ, баз данных и недавно появившихся наименований места происхождения товара платформа позволяет производить поиск и автоматический мониторинг по базе Роспатента. Кроме того, в услугу входит анализ ситуации клиента, расширенное консультирование по вопросам интеллектуальной собственности и участие в вебинарах. Даже если у вас нет зарегистрированной интеллектуальной собственности, эксперты платформы Онлайн Патент смогут провести экспертизу и дать рекомендации по защите вашего бизнеса.'
        },
        {
            'name': 'Интернет-Семианры',
            'checked': false,
            'weight': 1,
            'description': 'Позволяет не отходя от рабочего места узнать мнение авторитетных лекторов по животрепещущим профессиональным вопросам в сферах гражданского, корпоративного, трудового права, налогообложения, бухгалтерского учёта, закупок, бюджетного законодательства, кадровых вопросов и др.'
        },
        {
            'name': 'ЭТАЛОННЫЙ КЛАССИФИКАТОР',
            'checked': false,
            'weight': 1,
            'description': 'Автоматизированная база данных, включающая набор классификаторов. Позволяет правильно формировать налоговую базу, определять и обосновывать применение налоговых льгот. Сервис является надежным рабочим инструментом для выбора и подтверждения нормами законодательства следующих данных для любого основного средства: кода ОКОФ, амортизационной группы, срока полезного использования и налоговых преференций.'
        },
        {
            'name': 'Бизнес на контроле',
            'checked': false,
            'weight': 1,
            'description': 'Предназначен для отслеживания новых событий и создания напоминаний, связанных с юридическими лицами и ИП в сфере интересов пользователя (собственными активами, контрагентами, конкурентами).'
        },

    ]




}





export const changeltData = (stateCome, currentComplect) => {
    let value = []
    stateCome.value.forEach(lt => {
        value.push({
            ...lt
        })
    })
    let state = {
        ...stateCome
    }
    state.value = value
    if (currentComplect) {
        value.forEach((elem, index) => {

            if (currentComplect.fillingLTIndexes.includes(index) || currentComplect.fillingPaketLT.includes(index)) {
                elem.checked = true
            } else elem.checked = false
        })

    } else {
        value.forEach((elem) => {
            elem.checked = false
        })
    }


    return state
}

export const weightLtForResult = (stateCome, currentComplect) => {
    let value = stateCome.value.map(lt => {
        return {
            ...lt
        }
    })
    let state = {
        ...stateCome
    }
    state.value = value

    if (currentComplect) {
        state.ltIncluded = 0
        state.weightLt = 0
        state.value.forEach((element, index) => { //перебираем все LT
            if (currentComplect.fillingPaketLT.includes(index)) { //если индекс перебираемого LT содержится в списке индексов входящих в комплект по умолчанию
                if (element.checked) {

                    state.weightLt = state.weightLt + element.weight
                }

            } else if (currentComplect.fillingLTIndexes.includes(index)) {
                element.checked ? state.ltIncluded++ : state.ltIncluded = state.ltIncluded - 0

            }
            state.weightLt > 0 ? state.display = 'flex' : state.display = 'none'
            if (state.weightLt === 0) {
                state.nameOflt = ''
                state.priceOfLt = ''
                state.currentId = null
            }
            if (state.weightLt === 2) {
                state.nameOflt = `Малый Пакет`
                state.priceOfLt = state.pricesOfLt[0]
                state.currentId = state.ltIds[0]
            } else if (state.weightLt === 5) {
                state.nameOflt = `Средний Пакет `
                state.priceOfLt = state.pricesOfLt[1]
                state.currentId = state.ltIds[1]
            } else if (state.weightLt === 10) {
                state.nameOflt = `Большой Пакет `
                state.priceOfLt = state.pricesOfLt[2]
                state.currentId = state.ltIds[2]
            }
            if ((state.weightLt === 1 || state.weightLt > 2) && (state.weightLt < 5 || state.weightLt > 5) && (state.weightLt < 11)) {
                state.nameOflt = `LT собран неверно`
                state.currentId = null
            }
        })

    }
    return state
}

const changeQuantityLt = (stateCome, index) => {
    let state = {
        ...stateCome
    }
    let currentIndexOfLtPrice = 0
    state.pricesOfLt.forEach((price, index) => {
        if(price === state.priceOfLt){
            currentIndexOfLtPrice = index
        }
    })
    
    
    if (index === 1) {
        state.priceOfLt = state.pricesOfLt[currentIndexOfLtPrice] * 6
    } else if (index === 2) {
        state.priceOfLt = state.pricesOfLt[currentIndexOfLtPrice] * 12
    }else {
        state.priceOfLt =  state.pricesOfLt[currentIndexOfLtPrice]
    }

    return state
}

export const changeLTFromCurrent = (state = initialState, action) => {

    let changeLt = (state) => {
        
        state = changeltData(state, action.currentComplect)
        state = weightLtForResult(state, action.currentComplect)
        return state
    }

    if (action.type === CHANGE_CURRENT_LT || action.type === CREATE_COMPLECT || action.type === 'RESET') {
        return changeLt(state)
    }
    if (action.type === TYPE_OF_CONTRACT) {
        return changeQuantityLt(state, action.index)
    }

    return state
}