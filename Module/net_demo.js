const net = require("net");

const server = net.createServer(function(connection) {

    console.log("Client connected");

    connection.on("end", function() {
        console.log("Client disconnected");
    });

    connection.write("Hello World!\r\n");

    connection.pipe(connection);
});

server.listen(8080, function() {
    console.log("Server is listening on port 8080");
});