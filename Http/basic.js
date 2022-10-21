// const http = require('http')

// const server = http.createServer((req,res) => {
// const url = req.url
// if(url === '/'){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write('<h1>Good Morning</h1>')
//     res.end()
// }

// else if(url === '/about'){
//     res.writeContinue(200,{'content-type':'text/html'})
//     res.write('<h1>Ganesh Full Stack Developer</h1>')
//     res.end()
// }
// else{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write('<h1>Page not found</h1>')
// }


// })
// server.listen('4500')
// let arr = Array(6).fill().map((_, i) => Array(i+1).fill(1));
// for (let i = 2; i < arr.length; i++) {
//   let currArr = arr[i];
//   let prevArr = arr[i-1];
//   for (let j = 1; j < currArr.length-1; j++) {
//   	currArr[j] = prevArr[j] + prevArr[j-1];
//   }
// }
// console.log(arr);

// var reverseWords = function (stringToReverse) {
 
//     var splitString = stringToReverse.split(' '); //split only on space
//     var reversedStringArray = [];
    
//     // reverse the array
//     for (var i = 0; i < splitString.length; i++) {
//        reversedStringArray.unshift(splitString[i]);
//     }
//     // array looks fine, want to test the join now
    
//     var reversedString = reversedStringArray.join(' '); // return joined string from reversed array
   
//     return reversedString;
//    }