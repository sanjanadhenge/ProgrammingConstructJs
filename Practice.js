//prompt = require("prompt-sync")();
let arr =[19,98,53,69,75,99,101];
var temp=0;
let newarr = arr.map(Math.abs());
for(let i=0;i<newarr.length;i++)
{
    for(let j=i;j<newarr.length;j++)
    {
         if(newarr[i]>newarr[j])
            {
                temp=newarr[i];
                newarr[i]=newarr[j];
                newarr[j]=temp;
            }
        
    }
}
for(let i=0;i<newarr.length;i++)
{
    console.log("\n"+newarr[i]);
}

