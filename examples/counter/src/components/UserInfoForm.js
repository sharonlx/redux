import React, { Component, PropTypes } from 'react'

class UserInfoForm extends Component {
  static propTypes = {
    onAddPerson: PropTypes.func.isRequired
  }
  onAddPerson = () => {
    const name = this.refs.name.value.trim();
    const age = this.refs.age.value.trim();
    this.props.onAddPerson({
      name: name,
      value: age
    });
  }
  render() {

    return (
      <div>
        <p>name:<input type="text" placeholder="请输入姓名" ref="name"/></p>
        <p>age:<input type="text" placeholder="请输入年龄" ref="age"/></p>
        <p>
          <button onClick={this.onAddPerson}>
            添加人物
          </button>
          </p>

      </div>
    )
  }
}


export default UserInfoForm
