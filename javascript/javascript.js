
function changebg1(){

    document.body.style.backgroundImage="linear-gradient(#0785CE, #A1A3C5)"

}
function changebg2(){

    document.body.style.backgroundImage="linear-gradient(#CE5937, #C59237)"
}

function changebg3(){
    
    document.body.style.background=color1.value;

}

function changename(){
    var getname = prompt("Enter new Name");
    if ( getname === ""){}
    else if (getname){
        document.getElementById("name").innerHTML=getname;
    }
    else{}
}
function check(){
    if (document.getElementById("input").style.display="none"){
        document.getElementById("input").style.display="block";
    }
        let li = document.createElement("li");
        let ad1 = document.getElementById("input").value;
        let ad2 = document.createTextNode(ad1);
        li.appendChild(ad2);
    if( ad1 == ""){

    }else if(ad1){
        document.getElementById("skills").appendChild(li);
    }
    document.getElementById("input").value="";
    let xbutton = document.createElement("button");
    var x = document.createTextNode("X");
    xbutton.className="button4";
    xbutton.appendChild(x);
    li.appendChild(xbutton);
    let M = document.getElementsByClassName("button4");
    for (k = 0; k < M.length; k++) {
        M[k].onclick = function () {
            this.parentElement.style.display="none"
        }
    }
}