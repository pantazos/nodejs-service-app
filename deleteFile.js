const fs = require('fs');

// delete a file
fs.unlink('uploads/image.jpg', (err) => {
    if (err) {
        throw err;
    }

    console.log("The file is just deleted from file system!");
});