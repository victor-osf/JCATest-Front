import React from 'react';
export class InputCheckbox extends React.Component {
    constructor(props) {
        super(props);
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
                        value={"'" + this.props.id + "' : '" + this.props.file + "'"}/>
                    <label className="custom-control-label" htmlFor={this.props.id}>{this.props.label}</label>
                </div>
            </div>
        );
    }
}