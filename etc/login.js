function checkuser(){
    let userid=document.getElementById("userid");
    let userpw=document.getElementById("userpw");

    if(userid.value=='hsp'){
        if(userpw.value=='15777435'){
            location.replace("index2.html");
        }
        else{
            alert("wrong Password");
        }
    }
    else{
        alert("wrong user");
    }
};