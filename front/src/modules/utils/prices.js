export const setUniversalPrices = (typeOfComplect, dataPricesKMV, dataPricesSTV, coefficients) => {
    let resultUniversalPricesInternet = []

    const rangeDataPrices = (dataPrices) => {
        let resultPricesOfRegion = [[]]

        coefficients.forEach((coefficient, index) => { //Цены универсальных комплектов

            if (typeOfComplect === 'proxima') {
                resultPricesOfRegion[index + 1] = []
            } else {
                resultPricesOfRegion[index] = []
            }
            dataPrices.forEach(product => {
                
                if (typeOfComplect === 'proxima') {
                    if (index === 0) {

                        resultPricesOfRegion[0].push(Number.parseFloat((product.price * coefficient).toFixed(2)))
                        resultPricesOfRegion[index + 1].push(Number((product.price * coefficient).toFixed(2)))
                    } else {
                        resultPricesOfRegion[index + 1].push(Number((product.price * coefficient).toFixed(2)))
                    }
                } else {
                    resultPricesOfRegion[index].push(Number((product.price * coefficient).toFixed(2)))
                }
            });

        });
        return resultPricesOfRegion
    }
    resultUniversalPricesInternet[0] = rangeDataPrices(dataPricesKMV)
    resultUniversalPricesInternet[1] = rangeDataPrices(dataPricesSTV)
    return resultUniversalPricesInternet
}