import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

  const modalClasses = [classes.myModal];
  if(visible) {
    modalClasses.push(classes.active);
  };

  return(
    <div className={modalClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;