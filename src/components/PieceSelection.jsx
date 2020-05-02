import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectPiece } from '../redux/game/game';
import SettingsButton from './SettingsButton';

const PieceSelection = () => {
    const dispatch = useDispatch();
    const icons = [
        { class: "block-x", name: "xMoves" },
        { class: "block-o", name: "oMoves" }
    ];
    const [piece, setPiece] = useState('xMoves');

    const renderIcons = () => ( icons.map(icon => (
                <div className="col">
                    <div className={`icon-font-main ${icon.class}`} style={{ opacity: piece === icon.name ? 1 : 0.4 }}></div>
                </div>
            )
        )
    );

    const renderRadioButtons = () => ( icons.map(element => (
                <div className="col text-center">
                    <input type="radio" id={element.name} name="piece" className="custom-radio" checked={piece === element.name} onClick={() => setPiece(element.name)} />
                    <label htmlFor={element.name}></label>
                </div>
            )
        )
    );

    return (
        <div className="container mx-auto mt-5">
            <div className="card-bg m-auto piece-section">
                <div className="row">
                    <h6 className="mx-auto mt-4">Pick your side</h6>
                </div>
                <div className="row mx-auto mt-1">
                    { renderIcons() }
                </div>
                <div className="row mx-auto">
                    { renderRadioButtons() }
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

export default PieceSelection;
