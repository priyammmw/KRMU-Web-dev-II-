let pro=new Promise((resolve,reject)=> {
    let proposal="false"
    if(proposal=="true"){
        resolve();
    }
    else{
        reject("proposal rejected");
     })
    pro.then(()=>console.log("proposal accepted")).catch((err)=>console.log(err));