import React, { Component } from 'react'
import { connect, useSelector, useDispatch, useStore } from 'react-redux';
import { bindActionCreators } from 'redux'
import { doTest, addTodo } from './actions'
import styled from 'styled-components'

const Blue = styled.div`
  background-color: blue ;
`

const Test = ({ otraVaina, addTodo}) => {
  const mono = useSelector(state => state.mono) + 'polio'
  const dispatch = useDispatch()
  const store = useStore()

  return (<div className='red'>
    redux: {mono}
    <Blue> blue </Blue>
    <div className='d-flex border'>
      <div>camilo</div>
      <div>barraza</div>
    </div>
    <div>
      saga
      <div onClick={() => { dispatch({ type: 'USER_FETCH_REQUESTED', payload: { userId: 1 } }) }}>
        saga trigger
      </div>
    </div>
    <div>
      {otraVaina}
    </div>
    <div onClick={() => { addTodo('hey que ') }}> add todo </div>
    <div onClick={() => {
      dispatch({
        type: 'add_todo',
        payload: 'otro viaje'
      }) }}> add todo2 </div>
  </div>)
}

const mapStateToProps = (state, ownProps) => ({
  mono: state.mono,
  otraVaina: ownProps.testing
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({ doTest, addTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Test)


// export default connect(mapStateToProps, mapDispatchToProps)(Test)