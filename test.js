const fs = require("fs");
const xml2js = require('xml2js');

// read XML file
fs.readFile("D:\\Node js\\PostJson\\database.xml", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  // convert XML data to JSON object
  xml2js.parseString(data, (err, result) => {
    if (err) {
      throw err;
    }

    // replace `Wipro` with `Wipro Ltd`
    result.database.datas[0].name = 'Wipro Ltd';

// convert JSON object to XML
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    // write updated XML string to a file
    fs.writeFile('new-databases.xml', xml, (err) => {
      if (err) {
        throw err;
      }

      console.log(`Updated XML is written to a new file.`);
    });
  });
});
