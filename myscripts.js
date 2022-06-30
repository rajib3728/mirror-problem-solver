function fun1()
{
    var a=document.getElementById("in1").value;
    var b=document.getElementById("in2").value;
    var c=document.getElementById("in3").value;
    var e=document.getElementById("res");
    var f=document.getElementsByName("mirror");
    if (a=="" && b=="" || c=="" && b=="" || a=="" && c=="")
    {
     e.innerHTML="Please provide any two value !"
    }
    else{
        if(a>0)
        {
            e.innerHTML="Please provide -ve number!(u)" ; 
        }
        else{
            if(c=="" && b!="" && a!="")
            {
                for(i = 0; i < f.length; i++) {
                    if(f[i].checked) 
                    { 
                     var d=parseFloat(a)*parseFloat(b)/(parseFloat(a)+parseFloat(b));
                     e.innerHTML="focus length for "+f[i].value+" mirror :"+d;
                    }
                }   
            }
            else if(c!="" && a=="" && b!="")
            {
                for(i = 0; i < f.length; i++) {
                    if(f[i].value=="convex") 
                    { 
                var h=parseFloat(c)*parseFloat(b)/(parseFloat(b)-parseFloat(c));
                e.innerHTML="Object distance "+h+" from "+f[i].value+" mirror";
                    }
                    else{
                        var h=-parseFloat(c)*parseFloat(b)/(parseFloat(b)+parseFloat(c));
                        e.innerHTML="Object distance "+h+" from "+f[i].value+" mirror";  
                    }
                }
            }
            else
            {
                for(i = 0; i < f.length; i++) {
                    if(f[i].value=="convex") 
                    { 
                var h=parseFloat(c)*parseFloat(a)/(parseFloat(a)-parseFloat(c));
                e.innerHTML="image distance "+h;
                    }
                    else
                    {
                        var h=parseFloat(c)*parseFloat(a)/(parseFloat(a)-parseFloat(c));
                        e.innerHTML="image distance "+h;
                    }
                }
            }
        }
    }

}