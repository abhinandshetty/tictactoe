import { combineReducers } from  'redux';

import  gameReducer  from './game/game';

export default combineReducers({
    game : gameReducer
})