import React, { Component } from 'react';
import NewPizza from './NewPizza';

export default class Header extends Component {
    render() {
        const { addPizza } = this.props;
        return (
            <header className="mdl-layout__header mdl-layout__header--fixed mdl-color--primary header">
                <div className="header-container">
                    <div className="new-pizza-container">
                        <NewPizza addPizza={addPizza} />
                    </div>
                    <img className="logo" src="/assets/logo.svg"/>
                </div>
            </header>
        );
    }
}
