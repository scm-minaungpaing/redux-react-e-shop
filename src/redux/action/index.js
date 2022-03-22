// Add item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// Add delete from Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

