import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [ showModal, setShowModal ] = useState(false);

  function deleteHandler() {
    console.log("deleted - " + props.text);
    setShowModal(true);
  };

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>DELETE</button>
      </div>
      { showModal ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null }
      { showModal && <Backdrop onClick={closeModalHandler} /> }
    </div>
  );
}

export default Todo;
