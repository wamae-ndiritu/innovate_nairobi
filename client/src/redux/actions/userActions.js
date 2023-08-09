import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFail,
  logoutUser,
  registerStart,
  registerSuccess,
  registerFail,
} from "../slices/userSlice";
import { URL } from "../../Url";

export const login = async (details, dispatch) => {
  dispatch(loginStart());

  try {
    const { data } = await axios.post(`${URL}/api/members/login`, details);
    dispatch(loginSuccess(data));
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch(loginFail(err.response ? err.response.data.message : err.message));
  }
};

export const logout = (dispatch) => {
  dispatch(logoutUser());
  localStorage.removeItem("userInfo");
};

export const register = async (details, dispatch) => {
  dispatch(registerStart());
  try {
    const { data } = await axios.post(`${URL}/api-v1/institution/`, details);
    dispatch(registerSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(
      registerFail(err.response ? err.response.data.message : err.message)
    );
  }
};
