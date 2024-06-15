import { DELETE_ITEM, SET_SEARCH_TERM, EDIT_ITEM,  ADD_CARD} from './action';
import { ecommerce } from '../data'; // Ensure this path is correct

const initialState = {
    items: ecommerce,
     searchTerm: '',
     cards: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
            case EDIT_ITEM:
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? { ...item, ...action.payload } : item
                    )
                };
                case ADD_CARD:
                    return {
                      ...state,
                      items: [...state.items,action.payload ],
                    };
        default:
            return state;
    }
};


export default rootReducer;
