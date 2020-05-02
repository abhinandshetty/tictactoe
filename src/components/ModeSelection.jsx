import React from 'react'
import {
    Link
} from 'react-router-dom';

function ModeSelection() {
    return (
        <div className="container mx-auto mt-5">
            <div className="m-auto" style={{ width: 300, height: '400px' }}>
                <div className="row" style={{ marginLeft: 45 }}>
                    <div className="block-x ml-3" style={{ fontSize: 130 }}></div>
                    <div className="block-o mr-3" style={{ fontSize: 130 }}></div>
                </div>

                <div className="row mt-5">
                    <h6 className="m-auto">Choose your play mode</h6>
                </div>
                <div className="row mt-5">
                    <Link to="/piece-selection" className="btn btn-primary m-auto custom-btn" style={{ width: 150 }}>
                        With AI
                    </Link>
                </div>
                <div className="row mt-3">
                    <Link to="/piece-selection" className="btn bg-white m-auto custom-btn" style={{ width: 150 }}>
                        With a friend
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModeSelection
