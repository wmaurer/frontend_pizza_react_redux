import cuid from 'cuid';
import { ADD_PIZZA, REMOVE_PIZZA, INCREMENT_PIZZA, DECREMENT_PIZZA } from '../constants/ActionTypes';

export default function reducers(state = [], action) {
    switch (action.type) {
        case ADD_PIZZA:
            return [
                ...state,
                { name: action.name, count: 1, id: cuid() }
            ];
        case REMOVE_PIZZA:
            return state.filter(pizza => pizza.id !== action.id);
        case INCREMENT_PIZZA:
            return state.map(pizza =>
                pizza.id == action.id ?
                    Object.assign({}, pizza, { count: pizza.count + 1 }) :
                    pizza
            );
        case DECREMENT_PIZZA:
            return state.map(pizza =>
                pizza.id == action.id ?
                    Object.assign({}, pizza, { count: pizza.count > 1 ? pizza.count - 1 : 1 }) :
                    pizza
            );
        default:
            return state;
    }
}
