import React, { Component, PropTypes } from 'react'

class Loading extends Component {
  // static propTypes = {
  //   show: PropTypes.boolean.isRequired
  // }
  static defaultProps = {
    show: false
  }

  render() {
    const styleObj = {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      backgroundColor: '#000',
      opacity: 0.5,
      display: this.props.show ? 'block' : 'none',
      color: '#fff',
      textAlign: 'center'

    };
    return (
      <div style={styleObj} >Loading....</div>
    );
  }
}


export default Loading
