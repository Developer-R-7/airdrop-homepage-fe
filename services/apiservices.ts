import axios from "axios";

const API = "http://localhost:5050";

export const validateAddress = async (wallet: `0x${string}` | undefined) => {
  try {
    const data = await axios.get(`${API}/api/user/validate/wallet/${wallet}`);
    return data.data;
  } catch (err: any) {
    console.log("Validate Address Error");
    console.log(err.message);
    return { sucess: false };
  }
};

export const createUser = async (data: any) => {
  try {
    const response = await axios.post(`${API}/api/user/`, data);
    return response.data;
  } catch (err: any) {
    console.log("Create User Error");
    console.log(err.message);
    return { sucess: false };
  }
};

export const getCompany = async () => {
  try {
    const response = await axios.get(`${API}/api/company/airdrop/ongoing`);
    return response.data;
  } catch (err: any) {
    console.log("Create User Error");
    console.log(err.message);
    return { sucess: false };
  }
};
