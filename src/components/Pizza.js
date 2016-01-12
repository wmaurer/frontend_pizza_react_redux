import React, { Component } from 'react';

export default class Pizza extends Component {
    render() {
        const { pizza, actions: { incrementPizza, decrementPizza, removePizza } } = this.props;
        return (
            <div className="mdl-card mdl-shadow--2dp pizza-card">
                <div className="mdl-card__title">
                    <h2 className="pizza-title">{ pizza.count } x {pizza.name}</h2>
                </div>
                <div className="mdl-card__actions pizza-actions">
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect pizza-action-button" onClick={() => decrementPizza(pizza.id)}>
                        <i className="material-icons">remove</i>
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect pizza-action-button" onClick={() => incrementPizza(pizza.id)}>
                        <i className="material-icons">add</i>
                    </button>
                </div>
                <div className="mdl-card__menu">
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={() => removePizza(pizza.id)}>
                    <i className="material-icons">delete</i>
                  </button>
                </div>
            </div>
        );
    }
}
