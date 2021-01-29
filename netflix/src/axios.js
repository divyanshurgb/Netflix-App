import axios from "axios";

const instnace = axios.create({ 
    baseURL: "https://api.themoviedb.org/3";
});

export defualt instance;