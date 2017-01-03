import React, { PropTypes, Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Notecard extends Component {
    render() {
        return (
            <div className="notecard" >{ this.props.msg }</div>
        )
    }
}

export default Notecard;