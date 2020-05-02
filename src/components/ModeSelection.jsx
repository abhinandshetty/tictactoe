import React, { useEffect } from 'react'
import {
    Link
} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectMode, resetGame } from '../redux/game/game';

const ModeSelection = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetGame());    
    }, []); 
    
    return (
        <div className="container mx-auto mt-5">
            <div className="card-bg m-auto" >
                <div className="row" style={{ marginLeft: 70 }}>
                    <div className="block-x ml-3 icon-font-main"></div>
                    <div className="block-o mr-3 icon-font-main"></div>
                </div>
                <div className="row mt-5">
                    <h6 className="m-auto">Choose your play mode</h6>
                </div>
                <div className="row mt-5">
                    <Link to="/piece-selection" className="btn btn-primary m-auto custom-btn" onClick={()=> dispatch(selectMode('SINGLE'))}>
                        With AI
                    </Link>
                </div>
                <div className="row mt-3">
                    <Link to="/gameplay" className="btn bg-white m-auto custom-btn" onClick={()=> dispatch(selectMode('DOUBLE'))}>
                        With a friend
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModeSelection
