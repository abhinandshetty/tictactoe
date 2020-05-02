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
    piece: '',
    turn: '',
}

export const decideWinner = (user,moves, noOfMoves,callback = () => {}) => dispatch => {
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
            });
        } else {
            if(noOfMoves===9) {
                dispatch({
                    type: DECIDE_WINNER,
                    payload : {
                        winner : null
                    }
                })
            }
        }
        
    }
    callback();

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

export const selectPiece = (piece='X') => dispatch => {
    dispatch({
        type: PIECE,
        payload: { piece : piece }
    })
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVE:
            if(!state.winner) {
                return {
                    ...state,
                    ...action.payload,
                    winner: null,
                    turn: state.mode==='SINGLE' ? state.piece===Object.keys(action.payload)[0] : null,
                    noOfMoves: state.noOfMoves + 1
                }
            }
            return {
                ...state,
                noOfMoves: 0,
                xMoves : [],
                oMoves: [],
                turn : state.piece!=='xMoves',
                winner: null
            }

            
        case DECIDE_WINNER:
            return {
                ...state,
                ...action.payload,
                xMoves: [],
                oMoves: [],
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

