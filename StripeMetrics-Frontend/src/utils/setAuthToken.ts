import axios from "axios";

export const setAuthToken = (token: string | null) => {
  if(token) {
    
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}