const fs = require('fs');

// retrieve the file details
try {
    const stats = fs.statSync('uploads/image.jpg');

    // print file with the last modified date
    console.log(`File Data Last Modified: ${stats.mtime}`);
    console.log(`File Status Last Modified: ${stats.ctime}`);
} catch (error) {
    // print if error is occurred
    console.log(error);
}