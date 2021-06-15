
const ADD_ITEM = 'cart/addItem'
const REMOVE_ITEM = 'cart/removeItem'

export const addToCart = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export default function cartReducer(state = {}, action){
    switch(action.type){
        case ADD_ITEM:
            return { ...state, [action.id]: { id: action.id, count: 1 }}
        case REMOVE_ITEM:
            const item = action.id
            return state.filter(produce => produce.id !== item)
        default:
            return state;
    }
}
