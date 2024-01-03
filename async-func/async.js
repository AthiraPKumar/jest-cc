// its going to make an http req to fetch some data

// how tohandle asyndc response ?? - put await

const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    //console.log(results);
    return results.data;
}

fetchData(1);
module.exports = fetchData;