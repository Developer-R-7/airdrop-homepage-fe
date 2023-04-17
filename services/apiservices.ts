import axios from "axios";

const API = "https://airdrop-be-production.up.railway.app";

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
