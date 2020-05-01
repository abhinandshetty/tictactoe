import React, { Component } from 'react';
import Score from './Score';
import GameBlock from './GameBlock';

class BaseContainer extends Component {
    

    render() {

        return (
            <div className="container m-auto">
                <Score />
                <GameBlock />
            </div>
        )
    }
}

export default BaseContainer
