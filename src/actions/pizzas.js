import * as types from '../constants/ActionTypes';

export function addPizza(name) {
    return { type: types.ADD_PIZZA, name };
}

export function removePizza(id) {
    return { type: types.REMOVE_PIZZA, id };
}

export function incrementPizza(id) {
    return { type: types.INCREMENT_PIZZA, id };
}

export function decrementPizza(id) {
    return { type: types.DECREMENT_PIZZA, id };
}
