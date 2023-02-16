import axios from "axios";
import { BASE_URL } from "./config";

import { toast } from "react-toastify";


export const registration = async (
  refID,
  email,
  password,
  confirm_password,
  navigate
) => {
  try {
    const data = await axios.post(`${BASE_URL}/register-user`, {"parent_ref-code": refID,'email': email,'password': password,'confirm_password': confirm_password});
    console.log(data.data,"reg response");
    if (data.data.status == "400") {
      toast.error(data.data.message);
    }
    return data.data;
  } catch (error) {
    if(error)
    {
      toast.error(error?.response?.data?.message)
    }
    console.log(error,"error");
  }
};

export const verifyEmail = async (otp, user_id,navigate) => {
  try {
    const data = await axios.post(`${BASE_URL}/varifie/email`, { otp: otp, user_id: user_id, });
    console.log(data.data.params.ev, "verify Response");
    if(data.data.params.ev){
      toast.info(data.data.message)
      navigate('/dashboard')
    }
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error, "");
  }
};

export const login = async (email, password,navigate) => {
  try {
    const data = await axios.post(`${BASE_URL}/login`, { email: email, password: password })
    console.log(data.data);
    if(data.data.message === 'Login successfully!' && data?.data?.params?.ev == 1){
      navigate('/dashboard',{state: {user_id: data.data.params.user_id}})
      toast(data.data.message)
    }else if(data.data.message === 'Login successfully!' && data?.data?.params?.ev === false){
        resendOtp(data?.data?.params?.user_id).then((res)=>{
          console.log(res,"resend res");
          if(res?.message === 'Email sent successfully' && res?.status == 200){
            navigate('/verifyEmail',{state:{user_id: data?.data?.params?.user_id}})
          }
        }).catch((err)=>{
          console.log(err);
        })
    }
    return data.data
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

export const resendOtp = async(user_id)=>{
  try {
      const data = await axios.post(`${BASE_URL}/resend-otp`,{user_id: user_id})
      console.log(data.data);
      return data.data
  } catch (error) {
    console.log(error);
  }
}

export const createWallet = async(user_id)=>{
  try {
      const data = await axios.post(`${BASE_URL}/create-wallets-dcbit`,{user_id: user_id})
      console.log(data.data);
      return data.data
  } catch (error) {
    console.log(error);
  }
}