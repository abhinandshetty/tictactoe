import React, { useState } from 'react';
import settings from '../assets/settings.svg';
import CustomModal from './CustomModal';
import { useHistory } from 'react-router-dom';

const SettingsButton = (props) => {
    const [openModal, setOpen] = useState(false);
    const history = useHistory();

    const handleClose = (doRedirect = false) => {
        setOpen(false);
        if(doRedirect) {
            history.push("/mode-selection");
        }
    }
    return (
        <div className="row mt-5">
            <button className="btn bg-white m-auto settings-btn btn-shadow" onClick={()=>setOpen(true)}>
                <img src={settings} className="mb-1"></img>
            </button>
            <CustomModal show={openModal} handleClose={handleClose}>Are you sure you want to quit?</CustomModal>
        </div>
    );
}
export default SettingsButton
