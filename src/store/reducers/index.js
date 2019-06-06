/**
 * aqui é feita a combinação de todos os reducers em um grande state formado por todos
 * os reducers dentro do export default
 */

import { combineReducers } from 'redux'

import todos from './todos'

export default combineReducers({
  todos
})
