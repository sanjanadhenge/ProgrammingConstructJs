prompt = require("prompt-sync")();
var num = parseInt(prompt('Enter Number'));
console.log("Reversing the number");
var a=0, rev=0;
while(num !=0)
{
     a= num %10;
     rev = (rev *10)+ a;
    num = Math.floor(num/10);
}
console.log("After reversing the number---->"+rev);

