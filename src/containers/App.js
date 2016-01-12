import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PizzaActions from '../actions/pizzas';
import Header from '../components/Header';
import PizzaList from '../components/PizzaList';

export default class App extends Component {
    render() {
        const { pizzas, dispatch } = this.props;
        const actions = bindActionCreators(PizzaActions, dispatch);
        return (
            <div className="mdl-layout__container">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <Header addPizza={actions.addPizza}/>
                    <PizzaList pizzas={pizzas} actions={actions} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
