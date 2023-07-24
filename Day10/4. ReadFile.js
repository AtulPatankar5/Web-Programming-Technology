var fs=require("fs")

function readAFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) 
                return reject(error);
            return resolve(data);
        });
    });
}
 
readAFile('./file.txt')
.then(data => console.log(data))
.catch(error => console.error(error));