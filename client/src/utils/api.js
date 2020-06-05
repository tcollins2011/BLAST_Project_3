import axios from "axios";

export default {
  saveUser: function(userId) {
    return axios.post("/api/userId", userId);
  },
  
  blast: function(query){
    axios.get(query1)
    .then(res => {
        let RID = res.data.match(/RID =.*\n/)
        console.log(RID[0])
        RID = RID[0].substring(6)
        const query3 = 'https://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Get&RID=' + RID + '&FORMAT_TYPE=TEXT'
        setTimeout(() => {
            console.log('I waited 20 seconds')
            axios.get(query3)
                .then(res => {
                    console.log(res)
                })
        }  
        ,30000)

    })
  }
};

