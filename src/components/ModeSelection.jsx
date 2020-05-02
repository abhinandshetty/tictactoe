import React from 'react'

function ModeSelection() {
    return (
        <div className="container mx-auto mt-5">
            <div className="m-auto" style={{ width: 300, height: '400px' }}>
                <div className="row" style={{marginLeft:40}}>
                    <div className="block-x ml-3" style={{ fontSize: 130 }}>X</div>
                    <div className="block-o mr-3" style={{ fontSize: 130 }}>O</div>
                </div>

                <div className="row mt-5">
                    <h6 className="m-auto">Choose your play mode</h6>
                </div>
                <div className="row mt-5">
                    <button className="btn btn-primary m-auto custom-btn" style={{width: 150}}>With AI</button>
                </div>
                <div className="row mt-3">
                    <button className="btn bg-white m-auto custom-btn" style={{width: 150}}>With a friend</button>
                </div>
            </div>
        </div>
    )
}

export default ModeSelection
