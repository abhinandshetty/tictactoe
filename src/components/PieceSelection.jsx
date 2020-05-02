import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { selectPiece } from '../redux/game/game';
import SettingsButton from './SettingsButton';

const PieceSelection = () => {
    const dispatch = useDispatch();
    const [piece, setPiece] = useState('xMoves')

    return (
        <div className="container mx-auto mt-5">
            <div className="card-bg m-auto piece-section">
                <div className="row">
                    <h6 className="mx-auto mt-4">Pick your side</h6>
                </div>
                <div className="row mx-auto mt-1">
                    <div className="col">
                        <div className="block-x icon-font-main" style={{opacity : piece ==='xMoves' ? 1 : 0.4}}></div>
                    </div>
                    <div className="col">
                        <div className="block-o mr-3 icon-font-main" style={{opacity : piece ==='oMoves' ? 1 : 0.4}}></div>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col text-center">
                        <input type="radio" id="X" name="piece" value="X" className="custom-radio" checked={piece==='xMoves'} onClick={()=>setPiece('xMoves')} />
                        <label htmlFor="X"></label>
                    </div>
                    <div className="col text-center">
                        <input type="radio" id="O" name="piece" value="O" className="custom-radio" checked={piece==='oMoves'} onClick={()=>setPiece('oMoves')}/>
                        <label htmlFor="O"></label>
                    </div>
                </div>

                <div className="row mt-5">
                    <Link to="/gameplay" className="btn bg-white m-auto custom-btn btn-shadow" onClick={() => dispatch(selectPiece(piece))}>
                        Continue
                    </Link>
                </div>
                <SettingsButton />
            </div>
        </div>
    )
}

export default PieceSelection
