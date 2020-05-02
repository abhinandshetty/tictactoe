import React from 'react';
import Score from './Score';
import GameBlock from './GameBlock';

const  BaseContainer = () => (
    <div className="container mx-auto">
        <div className="card-bg mx-auto mt-5 pt-5">
        <Score />
        <GameBlock />
 
        </div>
    </div>
); 

export default BaseContainer
