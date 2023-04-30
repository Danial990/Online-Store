

const actionType = {
    READING_DATA: "READING_DATA",
    FILTER_DATA: "FILTER_DATA",
    CATEGORIES: "CATEGORIES",
    ADDTOCARD: "ADD_TO_CARD",
    DELETEPRODUCT: "DELETEPRODUCT",
    DELETEALL: "DELETEALL",
    COUNTANDPRICE: "COUNTANDPRICE",
    SORTPRICEDOWN: "SORTPRICEDOWN",
    SORTPRICEUP: "SORTPRICEUP",
    PRICEFROMTO: "PRICEFROMTO",
    CARDPERPAGE: "CARDPERPAGE",
    PAGECOUNT: "PAGECOUNT"
}

const initState = {
    products: [],
    unsortedProducts: [],
    card: [],
    categories: [],
    FilteredProducts: [],
    card2: [],
    priceFromTo: [],
    count: 0,
    price: 0,
    cardPerPage: 'All',
    pageCount: 0
}

function reducer(state, action) {

    let info = action.payload.data;

    switch (action.type) {

        case actionType.READING_DATA:
            return {
                ...state,
                products: [...info],
                unsortedProducts: [...info]
            }

        case actionType.FILTER_DATA:
            return {
                ...state,
                FilteredProducts: [info]
            }

        case actionType.CATEGORIES:
            return {
                ...state,
                categories: [info]
            }

        case actionType.ADDTOCARD:
            if (!state.card.includes(info)) {
                info.count = 1
                return {
                    ...state,
                    card: [...state.card, info],
                    card2: [...state.card2, info]
                }
            } else {
                info.count = info.count + 1
                return {
                    ...state,
                    card2: [...state.card2, info]
                }
            }


        case actionType.DELETEPRODUCT:

            if (state.card.includes(info)) {
                info.count -= 1;
                if (info.count <= 0) {
                    const newCard = state.card.filter((item) => item !== info);
                    return {
                        ...state,
                        card: [...newCard],
                    }
                }
                else {
                    return {
                        ...state,
                    }
                }

            } else {
                return {
                    ...state,
                }
            }


        case actionType.DELETEALL:
            return {
                ...state,
                card: [],
                card2: []
            }


        case actionType.COUNTANDPRICE:
            let c = 0;
            let p = 0;
            state.card.map((data) => {
                c += data.count;
                p += data.count * data.price;
                return (c, p);
            })

            return {
                ...state,
                count: c,
                price: p
            }

        case actionType.SORTPRICEDOWN:

            if (info.up) {
                return {
                    ...state
                }

            } else {
                if (info.down) {

                    var res = state.products.sort((a, b) => a.price - b.price);

                    return {
                        ...state,
                        products: [...res]
                    }

                } else {
                    if (state.priceFromTo.length) {
                        return {
                            ...state,
                            products: [...state.priceFromTo]
                        }
                    } else {
                        return {
                            ...state,
                            products: [...state.unsortedProducts]
                        }
                    }
                }
            }

        case actionType.SORTPRICEUP:

            if (info.down) {

                return {
                    ...state
                }

            } else {
                if (info.up) {

                    res = state.products.sort((a, b) => b.price - a.price);

                    return {
                        ...state,
                        products: [...res]
                    }

                } else {
                    if (state.priceFromTo.length) {
                        return {
                            ...state,
                            products: [...state.priceFromTo]
                        }
                    } else {
                        return {
                            ...state,
                            products: [...state.unsortedProducts]
                        }
                    }
                }
            }

        case actionType.PRICEFROMTO:
            if (info.to === "") {
                if (info.from !== "") {

                    const products = [...state.unsortedProducts]

                    const newProducts = products.filter((data) => {
                        return (data.price > info.from)
                    })

                    return {
                        ...state,
                        products: [...newProducts],
                        priceFromTo: [...newProducts]
                    }

                }
                else {
                    return {
                        ...state,
                        products: [...state.unsortedProducts]
                    }
                }

            } else {

                const products = [...state.unsortedProducts]

                const newProducts = products.filter((data) => {
                    return (data.price > info.from && data.price < info.to)
                })

                return {
                    ...state,
                    products: [...newProducts],
                    priceFromTo: [...newProducts]
                }

            }

        case actionType.CARDPERPAGE:

            return {
                ...state,
                cardPerPage: info
            }

        default:
            return state;
    }
}



export { initState, reducer, actionType };