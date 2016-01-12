import React, { Component } from 'react';

import Pizza from './Pizza';

export default class PizzaList extends Component {
    render() {
        const { pizzas, actions } = this.props;
        return (
            <div className="mdl-layout__content pizzas-container">
                {pizzas.map(pizza =>
                    <Pizza
                        key={pizza.id}
                        pizza={pizza}
                        actions={actions} />
                )}
            </div>
        );
    }
}
