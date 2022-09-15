const fs = require('fs');

// const fileData = fs.readFileSync('index.txt', 'utf8');
// fs.writeFileSync('writehere.txt', fileData);

fs.readFile('index.txt', 'utf8', function(error,result){
    if(error){
        console.log(error);
    }
    var file1_data = result;
    // console.log(file1_data);
    fs.readFile('writehere.txt', 'utf8', function(error,result){
        if(error){
            console.log(error);
        }
        var file2_data = result;
    // console.log(file2_data);
    fs.writeFile('thirdfile.txt', `${file1_data} ${file2_data}`, function(error, result){
        if(error){
            console.log(error);
        }else{
            console.log('file written')
        }
    });
    })
    
})