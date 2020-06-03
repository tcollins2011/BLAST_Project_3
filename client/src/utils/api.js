import axios from "axios";

export default {
  // Saves a book to the database
  saveUser: function(userId) {
    return axios.post("/api/userId", userId);
  }
};
