prompt = require("prompt-sync")();
var str = String(prompt('Enter string'));
var str2=" ";
let a=0;
for(let i=str.length-1;i>=0;i--)
{
    str2[a]=str[i];
    a++;
}
console.log(str2);
