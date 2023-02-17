import axios from "axios";
import { BASE_URL } from "./config";

import { toast } from "react-toastify";

export const registration = async (refID, email, password, confirm_password, navigate) => {
  try {
    const data = await axios.post(`${BASE_URL}/register-user`, { "parent_ref-code": refID, email: email, password: password, confirm_password: confirm_password, });
    return data.data;
  } catch (error) {
    if (error) {
      toast.error(error?.response?.data?.message);
    }
    console.log(error, "error");
  }
};

export const verifyEmail = async (otp, user_id) => {
  try {
    const data = await axios.post(`${BASE_URL}/varifie/email`, { otp: otp, user_id: user_id, });
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error, "");
  }
};

export const login = async (email, password, navigate) => {
  try {
    const data = await axios.post(`${BASE_URL}/login`, {
      email: email,
      password: password,
    });
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const resendOtp = async (user_id) => {
  try {
    const data = await axios.post(`${BASE_URL}/resend-otp`, {
      user_id: user_id,
    });
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const createWallet = async (user_id) => {
  try {
    const data = await axios.post(`${BASE_URL}/create-wallets-dcbit`, {
      user_id: user_id,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWalletAddress = async (user_id) => {
  try {
    const data = await axios.post(`${BASE_URL}/get-wallets-dcbits`, { user_id: user_id })
    console.log(data.data)
    return data.data
  } catch (error) {
    console.log(error);
  }
}

export const updateWallet = async(user_id)=>{
  try {
      const data = await axios.post(`${BASE_URL}/update-wallet`,{user_id: user_id})
      return data.data
  } catch (error) {
    console.log(error);
  }
}
