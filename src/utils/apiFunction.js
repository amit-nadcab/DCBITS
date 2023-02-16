import axios from "axios";
import { BASE_URL } from "./config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registration = async (
  refID,
  email,
  password,
  confirm_password
) => {
  try {
    const data = await axios.post(`${BASE_URL}/register-user`, {
      "parent_ref-code": refID,
      email: email,
      password: password,
      confirm_password: confirm_password,
    });
    console.log(data.data.status);
    if (data.data.status == "400") {
      //   alert("Wow Error aya");
      toast.error(data.data.message);
    }
    return data.data;
  } catch (error) {
    toast("Wow Error aya");
    console.log(error, "");
  }
};

export const verifyEmail = async (otp, user_id) => {
  try {
    const data = axios.post(`${BASE_URL}/varifie/email`, {
      otp: otp,
      email: user_id,
    });
    return data;
  } catch (error) {
    toast("Wow Error aya");
    console.log(error, "");
  }
};
