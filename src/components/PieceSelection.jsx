import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { selectPiece } from '../redux/game/game';

function PieceSelection() {
    const dispatch = useDispatch();
    const [piece, setPiece] = useState('X')

    return (
        <div className="container mx-auto mt-5">
            <div className="m-auto" style={{ width: 300, height: '400px' }}>
                <div className="row">
                    <h6 className="m-auto">Pick your side</h6>
                </div>
                <div className="row mx-auto mt-3">
                    <div className="col">
                        <div className="block-x" style={{ fontSize: 130 }}></div>
                    </div>
                    <div className="col">
                        <div className="block-o mr-3" style={{ fontSize: 130 }}></div>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col text-center">
                        <input type="radio" id="X" name="piece" value="X" style={{ width: 25, height: 25 }} checked onClick={()=>setPiece('X')} />
                        <label htmlFor="X"></label>
                    </div>
                    <div className="col text-center">
                        <input type="radio" id="O" name="piece" value="O" style={{ width: 25, height: 25 }} onClick={()=>setPiece('O')}/>
                        <label htmlFor="O"></label>
                    </div>
                </div>

                <div className="row mt-5">
                    <Link to="/gameplay" className="btn bg-white m-auto custom-btn" style={{ width: 150 }} onClick={() => dispatch(selectPiece(piece))}>
                        Continue
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PieceSelection
