
const curState =  (state={curState: null}, action) => {
    switch(action.type) {
      case 'GET':
        return Object.assign({}, state, {curState: 'get'});
      case 'Modify':
        return Object.assign({}, state, {curState: 'modify'});;
      default:
        return state;
    }
};

export default curState;
