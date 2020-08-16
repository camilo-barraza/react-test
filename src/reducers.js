export default (state = {}, action) => {
  const { payload, type } = action 
  switch (type) {
    case 'test':
      return {
        mono: payload
      }
    case 'USER_FETCH_SUCCEEDED':
      return {
        ...state,
        sagaTriggered: true
      }
    case 'coleto':
      return { 
        mono: 'coleto'
      }
    case 'add_todo':
      return { 
        mono: state.mono,
        todo: payload
      }
  }
  return {
    mono: 'cole'
  }
}