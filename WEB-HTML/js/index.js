$(function() {


    var arr=["modA","modB","modC"];

    var modA=["aa/aa/aa.c","aa/aa/bb.c","aa/aa/cc.c"];
    var modB=["bb/bb/aa.c","bb/bb/bb.c","bb/bb/cc.c"];
    var modC=["cc/cc/aa.c","cc/cc/bb.c","cc/cc/cc.c"];

    var fileA=["bugs","warning","error"];

    arr.forEach(function(value,index,array){
        $("#moduleTree").append("<li id=module-"+value+"><span class='folder'>"+value+"</span></li>");
    })

    if(modA.length>0){
        var file=1;
        modA.forEach(function(v,i,a){
            console.log(v+","+i)
            $("#module-modA").append("<ul><li id="+file+" class='file'><span class='folder'>"+v+"</span></li></ul>");
            if(fileA.length>0){
                fileA.forEach(function(value,index,array){
                    console.log($("#"+file))
                    $("#"+file).append("<ul><li id='errors'><span>"+value+"</span></li></ul>");
                    console.log(value+","+index)
                })
            }
            file++;
        })
    }



    if(modB.length>0){
        modB.forEach(function(value,index,array){
            $("#module-modB").append("<ul><li id="+value+"><span class='folder'>"+value+"</span></li></ul>");
        })
    }

    if(modC.length>0){
        modC.forEach(function(value,index,array){
            $("#module-modC").append("<ul><li id="+value+"><span class='folder'>"+value+"</span></li></ul>");
        })
    }

});




