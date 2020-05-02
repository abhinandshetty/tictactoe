import React from 'react';
import Score from './Score';
import GameBlock from './GameBlock';
import SettingsButton from './SettingsButton';

const BaseContainer = () => (
    <div className="container mx-auto">
        <div className="game-card-bg mx-auto mt-5 pt-5">
            <Score />
            <GameBlock />
            <SettingsButton />
        </div>
    </div>
);

export default BaseContainer;
