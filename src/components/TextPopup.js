import React from 'react';
import './css/TextPopup.css';

const TextPopup = ({ onCancel = () => {}, onAccept }) => {

  const inputRef = React.createRef();

  const handleAccept = () => {
    const value = inputRef.current.value;
    onAccept(value);
  };

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      handleAccept();
    }
  };

  return (
    <div onKeyDown={ handleKeyDown } className="TextPopup">
      <input
        ref={  inputRef }
        className="TextPopup__input"
        placeholder="City,CountryCode"
        type="text"
        id="name"
        name="name"
        autoFocus={ true }
        required
      />
      <div className="TextPopup__controls">
        <div onClick={ onCancel } className="TextPopup__controls__cancel">Cancel</div>
        <div onClick={ handleAccept } className="TextPopup__controls__accept">OK</div>
      </div>
    </div>
  );
};


export default TextPopup;