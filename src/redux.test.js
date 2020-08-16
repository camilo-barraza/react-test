import * as actions from './actions'
import * as types from '../../constants/ActionTypes'

describe('actions', () => {
  it.only('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'add_todo',
      payload: text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})