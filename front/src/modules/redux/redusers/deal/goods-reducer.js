import { CURRENT_UNIVERSAL, INTERNET, PROF, PROKSIMA } from "../global-parameters/global-parameters-reducer";

let GOODS = 'GOODS';

let initialState = {
    //Бух БухГос ГлавБух ГлавБухГос ЮРИСТ оФИС 
    prof: [
        [6394, 6396, 6402, 6404, 6398, 6400, 6406, 6408],//1OD
        [6410, 6412, 6418, 6420, 6414, 6416, 6422, 6424],//20D
        [6426, 6428, 6434, 6436, 6430, 6432, 6438, 6440],
        [6442, 6444, 6450, 6452, 6446, 6448, 6454, 6456],
        [6458, 6460, 6466, 6468, 6462, 6464, 6470, 6472],
        [6474, 6476, 6482, 6484, 6478, 6480, 6486, 6488],
        [6490, 6492, 6498, 6500, 6494, 6496, 6502, 6504],
        [6506, 6508, 6514, 6516, 6510, 6512, 6518, 6520]
    ],

    abonSix: [
        [6522, 6524, 6530, 6532, 6526, 6528, 6534, 6536],
        [6538, 6540, 6546, 6548, 6542, 6544, 6550, 6552],
        [6554, 6556, 6562, 6564, 6558, 6560, 6566, 6568],
        [6570, 6572, 6578, 6580, 6574, 6576, 6582, 6584],
        [6586, 6588, 6594, 6596, 6590, 6592, 6598, 6600],
        [6602, 6604, 6610, 6612, 6606, 6608, 6614, 6616],
        [6618, 6620, 6626, 6628, 6622, 6624, 6630, 6632],
        [6634, 6636, 6642, 6644, 6638, 6640, 6646, 6648],

    ],

    abonEleven: [
        [6650, 6652, 6658, 6660, 6654, 6656, 6662, 6664],
        [6666, 6668, 6674, 6676, 6670, 6672, 6678, 6680],
        [6682, 6684, 6690, 6692, 6686, 6688, 6694, 6696],
        [6698, 6700, 6706, 6708, 6702, 6704, 6710, 6712],
        [6714, 6716, 6722, 6724, 6718, 6720, 6726, 6728],
        [6730, 6732, 6738, 6740, 6734, 6736, 6742, 6744],
        [6746, 6748, 6754, 6756, 6750, 6752, 6758, 6760],
        [6762, 6764, 6770, 6772, 6766, 6768, 6774, 6776],


    ],
    proximaProf: [
        [7426, 7428, 7434, 7436, 7430, 7432, 7438, 7440], //flash
        [7442, 7566, 7446, 7448, 7570, 7444, 7450, 7452], //1OD
        [7454, 7456, 7462, 7464, 7458, 7460, 7466, 7468], //2OD
        [7470, 7472, 7478, 7480, 7474, 7476, 7482, 7484], //3OD
        [7486, 7488, 7494, 7496, 7490, 7492, 7498, 7500], //5OD
        [7502, 7504, 7510, 7512, 7506, 7508, 7514, 7516], //10 OD
        [7518, 7520, 7526, 7528, 7522, 7524, 7530, 7532], //20 OD
        [7534, 7536, 7542, 7544, 7538, 7540, 7546, 7548], //30 OD
        [7550, 7552, 7558, 7560, 7554, 7556, 7562, 7564], //50 OD

    ],
    proximaUniversal: [
        [7574, 7576, 7578, 7580, 7582, 7584, 7586, 7588, 7590], //flash
        [7282, 7284, 7286, 7288, 7290, 7292, 7294, 7296, 7298], //1OD
        [7300, 7302, 7304, 7306, 7308, 7310, 7312, 7314, 7316], //2OD
        [7318, 7320, 7322, 7324, 7326, 7328, 7330, 7332, 7334], //3OD
        [7336, 7338, 7340, 7342, 7344, 7346, 7348, 7350, 7352], //5OD
        [7354, 7356, 7358, 7360, 7362, 7364, 7366, 7368, 7370], //10 OD
        [7372, 7374, 7376, 7378, 7380, 7382, 7384, 7386, 7388], //20 OD
        [7390, 7392, 7394, 7396, 7398, 7400, 7402, 7404, 7406], //30 OD
        [7408, 7410, 7412, 7414, 7416, 7418, 7420, 7422, 7424], //50 OD

    ],
    internetUniversal: [
        // [7592, 7594, 7596, 7598, 7600, 7602, 7604, 7606, 7608], //internet standart
        [7610, 7612, 7614, 7616, 7618, 7620, 7622, 7624, 7626], //1OD
        [7628, 7630, 7632, 7634, 7636, 7638, 7640, 7642, 7644], //2OD
        [7646, 7648, 7650, 7652, 7654, 7656, 7658, 7660, 7662], //3OD
        [7664, 7666, 7668, 7670, 7672, 7674, 7676, 7678, 7680], //5OD
        [7682, 7684, 7686, 7688, 7690, 7692, 7694, 7696, 7698], //10 OD
        [7700, 7702, 7704, 7706, 7708, 7710, 7712, 7714, 7716], //20 OD
        [7718, 7720, 7722, 7724, 7726, 7728, 7730, 7732, 7734], //30 OD
        [7752, 7736, 7738, 7740, 7742, 7744, 7746, 7748, 7750], //50 OD

    ],

    currentId: 6394

}



export const goodsActionCreator = (numberOfComplect, numberOfOD, typeOfContract, currentSupplyName, currentComplectsType, currentRegion) => {

    return {
        type: GOODS,
        numberOfComplect,
        numberOfOD,
        typeOfContract,
        currentSupplyName,
        currentComplectsType,
        currentRegion
    }
}

const changeGoods = (stateCome, action) => {
    let numberOfComplect = action.numberOfComplect
    let numberOfOD = action.numberOfOD
    let typeOfContract = action.typeOfContract

    let state = {
        ...stateCome
    }
    
    if (action.currentSupplyName === INTERNET) {
        if(action.currentComplectsType == PROF){
            
            if (typeOfContract === 'abonSix') {
                state.currentId = state.abonSix[numberOfOD][numberOfComplect]
            } else if (typeOfContract === 'abonEleven') {
                state.currentId = state.abonEleven[numberOfOD][numberOfComplect]
            } else {
                state.currentId = state.prof[numberOfOD][numberOfComplect]
    
            }

        }else if(action.currentComplectsType == CURRENT_UNIVERSAL){
            state.currentId = state.internetUniversal[numberOfOD][numberOfComplect]
        }
       
    } else if (action.currentSupplyName === PROKSIMA) {
        if(action.currentComplectsType == PROF){
            state.currentId = state.proximaProf[numberOfOD][numberOfComplect]
        }else if(action.currentComplectsType == CURRENT_UNIVERSAL){
            state.currentId = state.proximaUniversal[numberOfOD][numberOfComplect]
        }
        
    }


    return state
}

export const goodsReducer = (state = initialState, action) => {

    if (action.type === GOODS) {
        return changeGoods(state, action)
    }
    return state
}