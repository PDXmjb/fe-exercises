function Modal({ open, children, toggleModal, title = 'Modal' }) {
  console.log(open);
  if (!open) {
    document.body.style.overflow = 'visible';
    return null;
  } else {
    document.body.style.overflow = 'hidden';
  }

  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) toggleModal();
      }}
      onKeyDown={(e) => {
        console.log(e.key);
        if (e.key === 'Escape') {
          toggleModal();
        }
      }}
    >
      <div className="modal">
        <div className="title-bar">
          <h2 className="title">{title}</h2>
          <button
            className="title-close"
            onClick={(e) => {
              e.stopPropagation();
              toggleModal();
            }}
            type="button"
          >
            X
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
