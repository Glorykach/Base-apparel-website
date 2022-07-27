function SUBMIT(){
    if (document.getElementById("EmailId").value==""){
    document.getElementById("EmailId").style.background="url('./Images/icon-error.svg') 98% 40% no-repeat";
    document.getElementById("WarningText").style.display="block";
    document.getElementById("EmailId").style.border="1px solid red";
    
}
}
function Remove(){
    if (document.getElementById("EmailId").value!=""){
        document.getElementById("EmailId").style.background="url('./Images/icon-error.svg') 380005px 10px no-repeat";
        document.getElementById("WarningText").style.display="none";
        document.getElementById("EmailId").style.border="1px solid black";
        
    }
}
function SUBMIT2(){
    if (document.getElementById("EmailId").value==""){
        document.getElementById("EmailId").style.background="url('./Images/icon-error.svg') 75% 50% no-repeat";
        document.getElementById("WarningText").style.display="block";
        document.getElementById("EmailId").style.border="1px solid #F96464";
        
    }
}

