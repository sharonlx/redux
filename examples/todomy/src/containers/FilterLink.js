import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import store from '../store/index.js'
// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })


const FilterLink = ({children, filter}) => {
    let state = store.getState();
    let active = false;
    if (filter === state.visibilityFilter) {
        active = true;
    }
    let onClick = ()=> {
        store.dispatch(setVisibilityFilter(filter));
    }
    return (
        <Link active={active} onClick={onClick}>
            {children}
        </Link>
    )
}
export default FilterLink
