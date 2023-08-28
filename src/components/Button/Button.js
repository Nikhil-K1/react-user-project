import classes from "./Button.module.css";

const Button = (props) => {
  const btnHandler = (event) => {
    event.preventDefault();
    console.log(props.data);
  };

  return (
    <button onClick={btnHandler} className={classes.button}>
      Add User
    </button>
  );
};

export default Button;
