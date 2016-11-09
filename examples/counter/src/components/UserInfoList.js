import React, { Component, PropTypes } from 'react'
import UserInfo from './UserInfo';

class UserInfoList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  }

  render() {
    const { list } = this.props;
    const itemList = list.map((item, index) => {
      return (<UserInfo
              key={index}
              age={item.value}
              username={item.name}
              />);

    });
    return (
      <div>
        <h3>成员列表：</h3>
        <ul>
          {itemList}
        </ul>
      </div>
    );
  }
}


export default UserInfoList
