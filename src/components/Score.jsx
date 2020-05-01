import React from 'react'

function Score() {
    return (
        <div className="row my-4">
            <div className=" row m-auto" style={{width : 300}}>
                <div className="col-3 m-auto">
                    Player1
                </div>
                <div className="col-3 m-auto text-center bg-white score-count" style={{borderRadius: 20}}>
                    1-1
                </div>
                <div className="col-3 m-auto">
                    Player2
                </div>
            </div>

        </div>


    )
}

export default Score
