import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    userName: "",
    age: ""
  });

  const [error, setError] = useState({ show: false, msg: "" });

  const inputHandler = (event, name) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: event.target.value
      };
    });
  };

  const btnHandler = (event) => {
    event.preventDefault();
    if (userInput.userName.trim() == "" || userInput.age == "") {
      setError({
        show: true,
        msg: "Please enter Valid name and age(Non empty values)"
      });
      return;
    } else {
      if (Number(userInput.age) <= 0) {
        setError({
          show: true,
          msg: "Please enter Valid age(Age should be greater then zero)"
        });
        return;
      }
      setError(false);
    }
    props.onAdd(userInput);
    setUserInput((prevState) => {
      return {
        userName: "",
        age: ""
      };
    });
  };

  const onModalClose = () => {
    setError(false);
  };

  return (
    <div>
      <form className={classes.input}>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            value={userInput.userName}
            onChange={(event) => inputHandler(event, "userName")}
          />
        </div>
        <div>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            value={userInput.age}
            onChange={(event) => inputHandler(event, "age")}
          />
        </div>
        <div>
          <button onClick={btnHandler} className={classes.button}>
            Add User
          </button>
        </div>
      </form>
      {error.show && <ErrorModal onClose={onModalClose} msg={error.msg} />}
    </div>
  );
};

export default AddUser;
