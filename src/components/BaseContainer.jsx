import React from 'react';
import Score from './Score';
import GameBlock from './GameBlock';

const  BaseContainer = () => (
    <div className="container m-auto">
        <Score />
        <GameBlock />
    </div>
);

export default BaseContainer
