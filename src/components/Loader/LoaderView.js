import Component from 'react';
// import './LoaderStyle.css';

export class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      enabled: false
    }
  }
  render() {
    return (
      <div className="lds-grid-container">
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default Loader;