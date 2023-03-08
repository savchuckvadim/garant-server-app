
export const getWeight = (infoblocks, encyclopedias) => {
    let info = 0;
    let er = 0;
    let totalweight = 0;

    infoblocks.forEach(element => {
        element.value.forEach(elem => {
            if (elem.checked === true) {
                info += elem.weight
            }
        })
    })

    encyclopedias.forEach(element => {
        element.value.forEach(elem => {

            if (elem.checked === true) {
                er += elem.weight
            }
        })
    })

    totalweight = info + er
    
    return totalweight
};