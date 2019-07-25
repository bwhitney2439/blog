import { combineReducers } from "redux";
<<<<<<< HEAD
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
=======
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
>>>>>>> 0580e9aef55443c4f107eb4db2e19f39491dd61d
});
