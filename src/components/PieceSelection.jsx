import React from 'react'
import { Link } from 'react-router-dom'

function PieceSelection() {
    return (
        <div className="container mx-auto mt-5">
            <div className="m-auto" style={{ width: 300, height: '400px' }}>
                <div className="row">
                    <h6 className="m-auto">Pick your side</h6>
                </div>
                <div className="row mx-auto mt-3">
                    <div className="col">
                        <div className="block-x" style={{ fontSize: 130 }}>X</div>
                    </div>
                    <div className="col">
                        <div className="block-o mr-3" style={{ fontSize: 130 }}>O</div>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col text-center">
                        <input type="radio" name="preference" id="x" style={{ width: 25, height: 25 }} checked />
                    </div>
                    <div className="col text-center">
                        <input type="radio" name="preference" id="o" style={{ width: 25, height: 25 }} />
                    </div>
                </div>

                <div className="row mt-5">
                    <Link to="/gameplay" className="btn bg-white m-auto custom-btn" style={{ width: 150 }}>
                        Continue
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PieceSelection
