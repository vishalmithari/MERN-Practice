const path = require("path");

// Normalize path
console.log(
    "Normalization:",
    path.normalize("/sssit/apl//node/newfolder/tab/..")
);

// Join paths
console.log(
    "Joined Path:",
    path.join("/sssit", "apl", "node", "newfolder", "tab", "..")
);

// Resolve absolute path
console.log(
    "Resolved Path:",
    path.resolve("path_demo.js")
);

// Get extension
console.log(
    "Extension:",
    path.extname("path_demo.js")
);

// Get directory name
console.log(
    "Directory:",
    path.dirname("/sssit/apl/node/path_demo.js")
);

// Get file name
console.log(
    "File Name:",
    path.basename("/sssit/apl/node/path_demo.js")
);