import axios from "axios";

export default {
  saveUser: function(userId) {
    return axios.post("/api/userId", userId);
  }
  
};
