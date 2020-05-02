import React from 'react';
import  settings  from '../assets/settings.svg';

const SettingsButton = () => (
    <div className="row mt-5">
        <button className="btn bg-white m-auto settings-btn btn-shadow">
            <img src={settings} className="mb-1"></img>
        </button>
    </div>
);

export default SettingsButton
