guestname=[];
function submit(){
    var displayguestnamearray=[];
    for (var j=1;j<=4;j++) {
        var namesofguests=document.getElementById("guest_person_1").value;
guestname.push(namesofguests);
    }
    for (var g=0;g<guestname.length;g++) {
        displayguestnamearray.push("<h4>name-"+guestname[g]+"</h4>");
        
    }
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
    function sorting() { guestname.sort();
    console.log(guestname);
    }
    function searching()
    var s=document.getElementById("rows").value;
    var found=0;
    var j;
    for(j=0; j<guestname.length; j++)
        {
if(s==guestname[j]){
    found=found+1;
}
        } 
        document.getElementById("p2").innerHTML="name found"+found+" time/s;
        console.log("found name"+found" time/s");
}
