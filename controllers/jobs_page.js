// import fetch from 'node-fetch';
const axios = require('axios')
module.exports.jobPage = async (req, res) => {
    try {
        const response = await axios.get(`https://remotive.com/api/remote-jobs`);
        const jobsData = await response.data;
        return res.render('companies', {
            title: "Jobs Page",
            body: jobsData.jobs
        });
    } catch (error) {
        // Handle errors here
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

