import React from 'react';
export class InputCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            value: { id: this.props.id}
        }
        this.handleChecked = this.handleChecked.bind(this);
    }
    handleChecked() {
        this.setState({
            isChecked: !this.state.isChecked
        });
        if (this.state.isChecked) {
            this.state.value.file = this.props.file
        } else 
            this.state.value.file = null
        this.props.handler(this.state.value)
    }
    render() {
        return (
            <div className="col-12 col-lg-6">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        name="specs"
                        id={this.props.id}
                        onClick={ () => this.handleChecked()}/>
                    <label className="custom-control-label" htmlFor={this.props.id}>{this.props.label}</label>
                </div>
            </div>
        );
    }
}