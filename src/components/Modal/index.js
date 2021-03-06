import React from "react";

export default function Modal({ currentPhoto, onClose }) {
  const { name, category, description, index } = currentPhoto;

  return (
    <div class="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Photo Name</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>Photo Description</p>
        <button onClick={onClose} type="button">Close this modal</button>
      </div>
    </div>
  );
}
