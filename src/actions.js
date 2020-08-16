export const doTest = (payload) => {
  return dispatch => {
    dispatch({
      type: 'test',
      payload
    })
  }
}

export function addTodo(text) {
  return {
    type: 'add_todo',
    payload: text
  }
}