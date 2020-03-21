module.exports = function check(str, bracketsConfig) {

    let arr = str.split('');

    let closeBr = [];
    let openBr = [];

    for (let i = 0; i < bracketsConfig.length; i++)
    {
        openBr.push(bracketsConfig[i][0]);
        closeBr.push(bracketsConfig[i][1]);
    }

   

    console.log(openBr);
    console.log(closeBr);

    for (let i = arr.length-1; i >= 0; i--)
    {
        
        for (let j = 0; j < openBr.length; j++)
        {
            if (arr[i] == openBr[j])
            {
                if (arr[i+1] == closeBr[j])
                {
                    
                    arr.splice(i,2);
                    console.log(arr);
                    i = arr.length-1;
                }
            }
        }
    }

    if (arr.length == 0)
    return true;
    else
    return false;
}
