import axios from "axios";

export const request = async (config, signal) => {
    try {
      const res = await axios.request({ ...config, signal });
      return res.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.log("Request error:", error.message);
      }
    }
  };
  