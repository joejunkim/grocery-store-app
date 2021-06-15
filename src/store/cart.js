// export const addArticle = (newArticle) => {
//     return {
//       type: ADD_ARTICLE,
//       newArticle
//     };
//   };

// const ADD_ARTICLE = 'article/addArticle';

const ADD_ITEM = 'cart/addItem'

export const addToCart = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}

export default function cartReducer(state = {}, action){
    switch(action.type){
        case ADD_ITEM:
            return { ...state, [action.id]: { id: action.id, count: 1 }}
        default:
            return state;
    }
}
