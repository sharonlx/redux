// import fetch from 'isomorphic-fetch'

export const LIST_REQUEST_ACTION = 'LIST_REQUEST_ACTION';
export const LIST_RECEIVE_ACTION = 'LIST_RECEIVE_ACTION';
export const LIST_FETCHING_ACTION = 'LIST_FETCHING_ACTION';
export const LIST_ADD_ITEM_ACTION = 'LIST_FETCHING_ACTION';

export const requestList = (curPage) => {
  return {
    type: LIST_REQUEST_ACTION,
    data: {
      curPage: curPage
    }
  }
}
export const addListItem = (item) => {
  return {
    type: LIST_ADD_ITEM_ACTION,
    data: {
      item: item
    }
  }
}
export const receiveList = (list) => {
  return {
    type: LIST_RECEIVE_ACTION,
    data: {
      list: list
    }
  }
}

export const fetchingList = (curPage) => {
    return (dispatch, getState) => {
      dispatch(requestList(curPage));
      return new Promise((resolve, reject) => {
          const list = [
            {
              name: 'sharon',
              value: '12'
            },
            {
              name: 'songsong',
              value: '14'
            }
          ];
          setTimeout(() => {resolve(list)}, 5000);
      }).then(list => {
        dispatch(receiveList(list))
      });
    }
}
