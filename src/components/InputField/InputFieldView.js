import React from 'react';
export class InputField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'col-md-' + (this.props.colSize || '6') + ' mb-3'}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="input-group">
                    {this.props.isEmail
                        ? (
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                        )
                        : null}
                    <input
                        type="text"
                        className="form-control"
                        id={this.props.id}
                        defaultValue={this.props.defaultValue}/>
                </div>
            </div>
        );
    }
}