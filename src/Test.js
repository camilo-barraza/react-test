import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { doTest, addTodo } from './actions'

class Test extends Component {

  constructor(props) {
    super(props)  
  }

  greet(){
    this.props.doTest('probando esa vaina')
  }

  render() {
    return ( <div>
      redux: {this.props.mono}
      <div className='test-field'>
        {this.props.otraVaina}
      </div>
      <div onClick={() => { this.props.addTodo('hey que ') }}> add todo </div>
      <div onClick={this.greet.bind(this)} > greet </div>
      <div className='clickable' onClick={() => { this.props.toggle() }}>clickable</div>
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  mono: state.mono,
  otraVaina: ownProps.testing
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({ doTest, addTodo }, dispatch)

export { Test }
export const TestRedux = connect(mapStateToProps, mapDispatchToProps)(Test)


// export default connect(mapStateToProps, mapDispatchToProps)(Test)