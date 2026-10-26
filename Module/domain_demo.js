const domain = require("domain");

// Create a new domain
const d = domain.create();

// Handle errors
d.on("error", (err) => {
    console.error("Domain caught an error:", err.message);
});

// Run code inside domain
d.run(() => {

    setTimeout(() => {
        console.log("This will run without errors.");

        // Generate an error
        throw new Error("Something went wrong!");

    }, 1000);

    setTimeout(() => {
        console.log("Another operation running fine.");
    }, 1500);
});

console.log("Program is running...");