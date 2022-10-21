step1(10, function(result1,err){
    if(err)
    return;
    {
        step2(result1, function(result2, err){
            if (err)
            return;
            {
                step3(result2, function(result3, err){
                    if(err)
                    return;{
                        console.log(result3)
                    }
                })
            }
        })
    }
})







function step1(value,callback){

    callback(value+10,false)

}
function step2(value,callback){

    callback(value+10,false)

}
function step3(value,callback){

    callback(value+10,false)

}