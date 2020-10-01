const fs = require("fs");

// Read company.json file
fs.readFile("company.json", function(err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const company = JSON.parse(data);
    company[0]['company name'] = 'Wipro Ltd';

    console.log(company);
    fs.writeFile('new-company.json', company, (err) => {
        if (err) {
            throw err;
        }

        console.log(`Updated json is written to a new file.`);
    });

});
