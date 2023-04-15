const arr = ["Start to hacking program.....",
            "Initializing hacked program.....", 
            "Connecting to facebook...",
            "Facebook mobile number find to gejet....",
            "Mobile number are find to successfully.....",
            "Username find to using number.....",
            "Username successfully find....",
            "Featching facebook password.......",
            "Finding to match username with password.....",
            "Password are successfully fetch.....",
            "Facebook username and password are successfully fetch....",
            "Facebook login successfully.....",
            "Facebook account are successfully haked....",
            "Connected facebook to instragram account feaching....",
            "Instragram attcach facebook successfully find....",
            "Instragram username successfully fetch....",
            "Instragram password are successfully fetch....",
            "Instragram login success.....",
            "Instragram account are hacked..."];

let interval = setInterval(hacked,2000);
let i=0;
function hacked() {
    document.getElementById("line").innerHTML += "> "+ arr[i] + "<br>" + "<br>";
    i++;
    if (i>=arr.length) {
        clearInterval(interval);
    }
}
let hack = ()=>{
    alert("Your laptop are hacked another accounts of which mobile are touch this laptop");
}

/*for (let i = 0; i < arr.length; i++) {
    setTimeout(function(){
        document.getElementById("line").innerHTML += arr[i] + "<br>";
    },2000*i);
}*/
/*const sleep = async(sec)=>{
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve(true);
        },sec*1000)
    })
}
const hack = async (message)=>{
    await sleep(2);
    console.log(message);
}
const print = async ()=>{
    for (let i = 0; i < arr.length; i++) {
        await hack(arr[i]);
    }
}
print();*/