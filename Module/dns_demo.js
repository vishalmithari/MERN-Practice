const dns = require("dns");

dns.lookup("www.google.com", (err, address, family) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("IP Address:", address);
    console.log("IP Version:", family);
});