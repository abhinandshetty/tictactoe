import React from 'react'
import { useSelector } from "react-redux";

function Score() {
    const scores = useSelector(state => state.game.seriesWinner);

    return (
        <div className="row my-4">
            <div className=" row m-auto" style={{width : 350}}>
                <div className="col-3 m-auto">
                    Player'X'
                </div>
                <div className="col-3 m-auto text-center bg-white score-count">
                    {scores["xMoves"]+"-"+scores["oMoves"]}
                </div>
                <div className="col-3 m-auto">
                    Player'O'
                </div>
            </div>

        </div>


    )
}

export default Score
