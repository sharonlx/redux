import React, { Component, PropTypes } from 'react'

class UserInfo extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  }

  render() {
    const { username, age } = this.props;
    return (
      <li>姓名：{username} | 年龄: {age}</li>
    );
  }
}


export default UserInfo
