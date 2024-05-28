import axios from "axios";
console.log(process.env.YT_API_KEY);
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        
        key:'AIzaSyCNAk3CcL0JgdUt2GI0UB56J0g-9KBspGU'
        
    },
   
})

export default request