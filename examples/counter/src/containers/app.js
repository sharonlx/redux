import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import UserInfoForm from './../components/UserInfoForm';
import UserInfoList from './../components/UserInfoList';
import Loading from './../components/Loading';
import Counter from './../components/Counter';
import { descreaseCounter, inscreaseCounter } from './../actions/counterAction';
import { addListItem, fetchingList} from './../actions/listAction';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    value: state.counter,
    list: state.otherInfo.listState.list,
    curPage: state.otherInfo.listState.curPage,
    isFetch: state.otherInfo.listState.isFetch
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => {
      dispatch(inscreaseCounter(1));
    },
    onDecrement: () => {
      dispatch(descreaseCounter(1));
    },
    onAddPerson: (data) => {
      dispatch(addListItem(data));
    },
    fetchList: (curPage) => {
      dispatch(fetchingList(curPage));
    }
  };
}


class App extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onAddPerson: PropTypes.func.isRequired
  }
  static defaultProps = {
    curPage: 0
  }
  componentDidMount() {
    // debugger
    this.props.fetchList(this.props.curPage);
  }
  render() {
    const { onAddPerson, onIncrement, onDecrement, value, list, isFetch} = this.props;
    
    return (
      <div>
        <UserInfoForm
          onAddPerson={(data) => onAddPerson(data)}
        />
        <UserInfoList list={list} />
        <Counter
          value={value}
          onIncrement={() => onIncrement()}
          onDecrement={() => onDecrement()}
        />
        <Loading show={isFetch} />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
