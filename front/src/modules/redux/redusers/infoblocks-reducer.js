let initialState = [
    {
        'nameOfType': 'Нормативно-правовые акты',
        'value': [
            {

                'name': 'Законодательство России',
                'checked': true,
                'weight': 0.5,
                // 'description': 'Информационный банк содержит документы федерального уровня регулирования по основным отраслям права: гражданские отношения, налогообложение, бухучет, предпринимательство, собственность, валютное регулирование, трудовые отношения, социальная защита и другие. Включает все кодексы и федеральные законы. Кроме нормативных документов, в блок включены судебная и арбитражная практика, формы правовых документов, производственный календарь и другие бизнес-справки. В блок включены обновляемые интерактивные путеводители по общему плану счетов, кадровому делу и охране труда.'
                'description': `Документы, регулирующие вопросы ведения РФ и совместного ведения РФ и субъектов РФ.`
            },
            {
                'name': 'Региональное законодательство',
                'checked': false,
                'weight': 0.5,
                'description': 'Основные правовые акты Ставропольского края - необходимая информация для каждого специалиста, работающего с правовой информацией. Кодексы, законы, указы, постановления, приказы, разъяснительные письма и другие документы именно вашего региона.'
            },
            {
                'name': 'Отраслевое законодательство',
                'checked': false,
                'weight': 1,
                // 'description': 'Информация по всем отраслям законодательства: нормы земельного, таможенного, жилищного, банковского, уголовного, административного права. Информационный блок полезен всем, чья сфера интересов связана с таможенными правоотношениями, банковской деятельностью, земельными правоотношениями, с правоохранительной и правозащитной, строительной деятельностью.'
                'description': 'Федеральные акты правоприменительного, нормативно-технического, разъяснительного и организационного характера всех федеральных органов власти.'
            },
            {
                'name': 'Проекты законов',
                'checked': false,
                'weight': 0.5,
                'description': 'Проекты федеральных законов, которые готовятся к рассмотрению Государственной Думой РФ.'
            },
            {
                'name': 'Международное право',
                'checked': false,
                'weight': 0.5,
                'description': 'Документы, регулирующие деятельность участников внешнеэкономической деятельности по различным направлениям - экономическому, налоговому, таможенному, уголовному и другим.'
            },
            {
                'name': 'ГОСТы России',
                'checked': false,
                'weight': 1,
                'description': 'ГОСТы России -  позволяет организовать работу с текстами ГОСТов максимально эффективно и своевременно отслеживать изменения в правилах стандартизации продукции.'
            },
            {
                'name': 'Решения Федеральной антимонопольной службы',
                'checked': false,
                'weight': 1,
                'description': 'Включает в себя документы антимонопольной службы.'
            },
        ]
    },
    {
        'nameOfType': 'Судебная практика',
        'value': [
            {
                'name': 'Практика высших судебных органов',
                'checked': false,
                'weight': 1,
                'description': 'Практика КС РФ, ВАС РФ, ВС РФ, Суда по интеллектуальным правам.'
            },
            {
                'name': 'Практика арбитражных судов округов',
                'checked': false,
                'weight': 1,
                'description': 'Практика 10 арбитражных судов округов - постановления, определения и обзоры практики суда по применению нормативных актов.'
            },
            {
                'name': 'Практика арбитражных апелляционных судов округов',
                'checked': false,
                'weight': 1,
                'description': 'Практика всех 10 судебных округов в которых функционирует 21 арбитражный апелляционный суд.'
            },
            {
                'name': 'Практика судов общей юрисдикции',
                'checked': false,
                'weight': 1,
                'description': 'Практика судов общей юрисдикции из 85 регионов РФ (верховные суды республик, краевые и областные суды, суды городов федерального значения, суды автономной области и автономных округов, отдельные районные суды и мировые судьи).'
            },
            {
                'name': 'Энциклопедия судебной практики. Правовые позиции судов',
                'checked': false,
                'weight': 0.5,
                // 'description': `В блоке каждый документ посвящен конкретной норме права, и предлагает пользователям возможность быстро знакомиться с мнениями судов по рассматриваемому вопросу. Все материалы снабжены краткими выводами, которые были сформулированы опытными экспертами компании \"Гарант\", а также содержат правовые позиции судов по аналогичной ситуации. 
                // Блок позволяет быстро \"ухватить\" суть изучаемого вопроса и оперативно обращаться к заинтересовавшему судебному акту.
                // Энциклопедия включает в себя структурированные постатейные аннотации решений судов по наиболее востребованным пользователями темам и нормативным актам, среди которых:
                // - Гражданский кодекс РФ;
                // - Налоговый кодекс РФ;
                // - Трудовой кодекс РФ;
                // - Земельный кодекс;
                // - Закон \"Об акционерных обществах\";
                // - Закон \"Об обществах с ограниченной ответственностью\";
                // - Закон \"О защите прав потребителей\";
                // - Закон о страховых взносах во внебюджетные фонды;
                // - Закон об обязательном страховании от несчастных случаев
                // \"Энциклопедия\" развивается и совершенствуется: в ближайшем будущем расширится охват норм и количество проанализированных судебных решений.`

                'description': `Структурированные постатейные аннотации решений судов по наиболее востребованным темам и нормативным актам (Гражданский кодекс РФ, Налоговый кодекс РФ, Трудовой кодекс РФ, Земельный кодекс, Закон, и многое другое).`
            },
        ]
    },
    {
        'nameOfType': 'Консультационные материалы',
        'value': [
            {
                'name': 'Большая библиотека юриста',
                'checked': false,
                'weight': 1,
                // 'description': 'Комментарии к основополагающим документам по всем разделам российского законодательства Конституция, ГК, УК, ТК РФ и т. д., труды ведущих юристов по вопросам толкования и применения различных норм права, статьи из более 100 периодических изданий, аналитические обзоры судебной практики.'
                'description': 'Комментарии к законодательству, монографии по актуальным правовым вопросам, юридические периодические издания, книги, вопросы-ответы. '
            },
            {
                'name': 'Большая библиотека бухгалтера и кадрового работника',
                'checked': false,
                'weight': 1,
                // 'description': 'Библиотека книг и периодики для бухгалтера и кадровика. Бухгалтерский и кадровый учет, оформление новых сотрудников, первичных документов, кассовые операции, начисление зарплаты, больничные листы и многое другое. Книги, статьи, ответы на вопросы, практические решения. В информационном блоке "Большая библиотека бухгалтера и кадрового работника" представлены статьи, комментарии, разъяснения, методические материалы, ответы специалистов профильных министерств, опубликованные в более чем восьмидесяти периодических изданиях для бухгалтеров и кадровиков. В блоке содержатся более 22 тысяч примеров бухгалтерских проводок. В блок включены интерактивные путеводители по общему плану счетов, бюджетному учёту в казённых учреждениях и органах власти, бухгалтерскому учёту в бюджетных учреждениях, в автономных учреждениях, кадровому делу.'
                'description': 'Библиотека книг и периодики для бухгалтера и кадровика. Бухгалтерский и кадровый учет, оформление новых сотрудников, первичных документов, кассовые операции, начисление зарплаты, больничные листы и многое другое. Книги, статьи, ответы на вопросы, практические решения. В блоке представлены статьи, комментарии, разъяснения, методические материалы, ответы специалистов профильных министерств, опубликованные в более чем восьмидесяти периодических изданиях для бухгалтеров и кадровиков. В блоке содержатся более 22 тысяч примеров бухгалтерских проводок. В блок включены интерактивные путеводители по общему плану счетов, бюджетному учёту в казённых учреждениях и органах власти, бухгалтерскому учёту в бюджетных учреждениях, в автономных учреждениях, кадровому делу.'
            },
            {
                'name': 'Библиотека консультаций. Бухгалтерия предприятия',
                'checked': false,
                'weight': 0.5,
                'description': 'Книги, статьи, вопросы-ответы из профессиональных журналов, интерактивные схемы, по тематикам: "УСН", "ЕНВД", "НДФЛ(подоходный налог)", "ОСН", "ПНС".'
            },
            {
                'name': 'Библиотека консультаций. Бюджетные организации',
                'checked': false,
                'weight': 0.5,
                // 'description': 'Статьи, ответы на вопросы из специализированных журналов, а также книги и комментарии, разъясняющие вопросы бухгалтерского учета в учреждениях государственного сектора экономики. В блок включены интерактивные путеводители по бюджетному учету в казенных учреждениях и органах власти, кадровому делу и бухгалтерскому учету бюджетных организаций, по бухгалтерскому учету в автономных учреждениях.'
                'description': 'Статьи, ответы на вопросы из специализированных журналов, а также книги и комментарии, разъясняющие вопросы бухгалтерского учета в учреждениях государственного сектора экономики.'

            },
            {
                'name': 'Библиотека консультаций. Кадры',
                'checked': false,
                'weight': 0.5,
                'description': 'Cтатьи и вопросы-ответы из ведущих профессиональных СМИ, формы кадровых документов, книги и интерактивные схемы по трудовому законодательству, а также  Путеводитель по кадровому делу и Путеводитель по охране труда.'
            },
        ]
    },
    {
        'nameOfType': 'Специализированные блоки',
        'value': [
            {
                'name': 'Толковый словарь «Бизнес и право»',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия. Законодательство в схемах',
                'checked': false,
                'weight': 0.5,
                'description': 'Схемы, построенные с использованием современных технологий. Доступное и наглядное изложение, анимация, всплывающие подсказки.'
            },
            {
                'name': 'Энциклопедия. Формы правовых документов',
                'checked': false,
                'weight': 0.5,
                'description': 'Разработанные юристами-практиками формы различных документов.'
            },
            {
                'name': 'ГАРАНТ-Инфарм',
                'checked': false,
                'weight': 1,
                'description': 'Документы, регулирующие вопросы организации медицинской помощи, обязательного и добровольного медицинского страхования и многое другое. Также официальная информация о лекарственных средствах, фирмах.'
            },
            {
                'name': 'Справочник нормативно-технической документации по строительству',
                'checked': false,
                'weight': 1,
                'description': 'Для сметчиков, проектировщиков, специалистов производственных отделов.(СНиП, СНиР, ЕНиР, ГЭСН, ФЕР, МДС, ВСН, РД, СП, ТОИ, СанПиН, ГОСТ и др.).'
            },
        ]

    },
    {
        'nameOfType': 'Новые блоки',
        'value': [
            {
                'name': 'Справочник промышленника',
                'checked': false,
                'weight': 3,
                'description': 'Справочник промышленника включает в себя более 80 000 документов. Структура разделов блока разработана в соответствии с нормативными документами, регламентирующими деятельность служб предприятий. Среди них - ГОСТы, СНиПы, ПБ, ПНСТ, ВСН, ТОИ и другие нормы и стандарты.В удобном классификаторе представлены шесть разделов продукта: техническое регулирование и стандартизация, экология и охрана окружающей среды, промышленная безопасность, пожарная безопасность, метрологическое обеспечение, охрана труда.'
            },
            {
                'name': 'Справочник по охране труда',
                'checked': false,
                'weight': 1,
                'description': 'Правовые акты, стандарты, методические рекомендации, санитарные правила и нормы для организации системы управления охраной труда.'
            },
            {
                'name': 'Справочник по техническому регулированию и стандартизации',
                'checked': false,
                'weight': 1,
                'description': 'Блок содержит документы в сфере технического регулирования и стандартизации: ГОСТы и другие нормативы по строительству, топливно-энергетическому комплексу, пищевой промышленности, машиностроению, медицине и фармацевтике, охране труда и т. д.'
            },


        ]
    },
    
]



export const changeInfoblocksFromCurrent = (state, currentComplect) => { //меняет стэйт в соответствии с currentComplect

  
    let stateCopy_0 = [...state][0]
    let stateCopy_1 = [...state][1]
    let stateCopy_2 = [...state][2]
    let stateCopy_3 = [...state][3]
    let stateCopy_4 = [...state][4]
    let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]
    if (currentComplect) {
        
        stateCopy.forEach((element) => {
            element.value.forEach((elem) => {
                

                if (currentComplect.currentFilling.includes(elem.name)) {
                    elem.checked = true
                } else elem.checked = false

                if (currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
                    elem.checked = true
                }
            })

        })

    } else {

        stateCopy.forEach((element) => {
            element.value.forEach((elem) => {

                elem.checked = false

            })
        })
    }


    return stateCopy
}
const changeInfolocksFromNewComplect = (state, currentComplect) => {
    let stateCopy_0 = [...state][0]
    let stateCopy_1 = [...state][1]
    let stateCopy_2 = [...state][2]
    let stateCopy_3 = [...state][3]
    let stateCopy_4 = [...state][4]
    let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]
    if (currentComplect) {

        stateCopy.forEach((element) => {
            element.value.forEach((elem) => {
                if (currentComplect.filling.includes(elem.name)) {
                    elem.checked = true
                } else elem.checked = false

                if (currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
                    elem.checked = true
                }
            })
        })

    } else {

        stateCopy.forEach((element) => {
            element.value.forEach((elem) => {

                elem.checked = false

            })
        })
    }

    return stateCopy
}

export const infoblocks = (state = initialState, action) => {
    
    if (action.type === 'CHANGE_CURRENT_INFOBLOCKS' || action.type === 'RESET') {
        return changeInfoblocksFromCurrent(state, action.currentComplect)
    } else if (action.type === 'CHANGE_BLOCKS_FROM_NEW_COMPLECT') {
        return changeInfolocksFromNewComplect(state, action.currentComplect)
    } else
        return state
}