//prompt = require("prompt-sync")();
let arr =[19,98,53,69,75,99,101];
var temp=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
         if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        
    }
}
for(let i=0;i<arr.length;i++)
{
    console.log("\n"+arr[i]);
}

