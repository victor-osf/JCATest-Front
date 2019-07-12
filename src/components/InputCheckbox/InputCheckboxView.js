import React from 'react';
export class InputCheckbox extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-6">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            name={this.props.label}
            id={this.props.id}
            defaultChecked={this.props.defaultChecked}
            value={this.props.file}
            onClick={this.props.handleChange}
          />
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.label}</label>
        </div>
      </div>
    );
  }
}