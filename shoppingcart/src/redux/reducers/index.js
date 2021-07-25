import { combineReducers } from "redux";
import gioHangReduce from "./user";

const rootReducer = combineReducers({
  //state tổng của ứng dụng
  //combine child reducer (chứa các state con)
  gioHangReduce, //gioHangReduce: gioHangReduce
});

export default rootReducer;
