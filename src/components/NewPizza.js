import React, { Component } from 'react';

export default class NewPizza extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || ''
        };
    }

    handleSubmit(e) {
        const name = e.target.value.trim();
        if (name) {
            this.props.addPizza(name);
            this.setState({ name: '' });
        }
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleKeyDown(e) {
        if (e.which === 13) {
            this.handleSubmit(e);
        }
    }

    render() {
        const { pizzas } = this.props;
        return (
            <div className="new-pizza">
                <div className="mdl-textfield mdl-js-textfield">
                    <input
                        type="text"
                        className="mdl-textfield__input"
                        placeholder="What type of pizza?"
                        autofocus="true"
                        value={this.state.name}
                        onBlur={this.handleSubmit.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={this.handleKeyDown.bind(this)} />
                </div>
            </div>
        );
    }
}
