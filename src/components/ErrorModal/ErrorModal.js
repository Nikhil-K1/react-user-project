import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const btnHandler = (event) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.header}>Invalid Input</div>
        <div className={classes.content}>
          <p>{props.msg}</p>
          <div className={classes.actions}>
            <button onClick={btnHandler} className={classes.button}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
