import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.data.map((el, i) => (
          <li key={i}>{`${el.userName} (${el.age} years old)`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
