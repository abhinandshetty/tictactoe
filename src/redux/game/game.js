const ADD_MOVE = "ADD_MOVE";
const DECIDE_WINNER = "DECIDE_WINNER";
const MODE = "MODE";
const PIECE = "PIECE";

const initialState = {
    xMoves: [],
    oMoves: [],
    noOfMoves: 0,
    winner : null,
    seriesWinner : {
        xMoves : 0,
        oMoves : 0 
    },
    mode: '',
    piece: ''
}

export const decideWinner = (user,moves) => dispatch => {
    if(moves.length>2) {
        if((moves.includes(1) && moves.includes(2) && moves.includes(3)) || 
        (moves.includes(4) && moves.includes(5) && moves.includes(6)) || 
        (moves.includes(7) && moves.includes(8) && moves.includes(9)) ||
        (moves.includes(1) && moves.includes(4) && moves.includes(7)) ||
        (moves.includes(2) && moves.includes(5) && moves.includes(8)) ||
        (moves.includes(3) && moves.includes(6) && moves.includes(9)) ||
        (moves.includes(1) && moves.includes(5) && moves.includes(9)) ||
        (moves.includes(3) && moves.includes(5) && moves.includes(7))
        ) {
            dispatch({
                type: DECIDE_WINNER,
                payload : {
                    winner : user
                }
            })
        }
        
    }
    
}

export const addMove = (user = '', moves = []) => dispatch => {
    dispatch({
        type: ADD_MOVE,
        payload: { [user] : moves }
    })
}

export const selectMode = (mode='SINGLE') => dispatch => {
    dispatch({
        type: MODE,
        payload: { mode : mode }
    })
}

export const selectPiece = (peice='X') => dispatch => {
    dispatch({
        type: PIECE,
        payload: { peice : peice }
    })
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVE:
            return {
                ...state,
                ...action.payload,
                winner: null,
                noOfMoves: state.noOfMoves + 1
            }
        case DECIDE_WINNER:
            return {
                ...initialState,
                ...action.payload,
                seriesWinner : {
                    ...state.seriesWinner,
                    [Object.values(action.payload)[0]] : state.seriesWinner[Object.values(action.payload)[0]]+1
                }
            }
        case MODE:
        case PIECE:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export default gameReducer;

