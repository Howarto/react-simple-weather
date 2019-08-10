import React from 'react';
import './css/AddCityPopup.css';
import TextPopup from '../components/TextPopup';

const AddCityPopup = ({ onCancel, onAccept }) => {

  return (
    <div>
      <div className="AddCityPopup" />
      <TextPopup onCancel={ onCancel } onAccept={ onAccept } />
    </div>
  );
};

export default AddCityPopup;