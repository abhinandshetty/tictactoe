import React from 'react';
import Score from './Score';
import GameBlock from './GameBlock';

const  BaseContainer = () => (
    <div className="container mx-auto mt-5">
        <Score />
        <GameBlock />
    </div>
); 

export default BaseContainer
