// console.log("starting...");
// function doWork() {
//     console.log("working...");
//     setTimeout(() => {
//         console.log("done!");
//     }, 3000);
// }
// doWork();
// console.log("Finished");
// console.log("starting..."); 
// function doWork(cb) {
// setTimeout(() => {
//     cb("working...");
// }, 3000);
// }
// doWork((data) => {
//     console.log(data);
//     console.log("done!");
// }
// );
// console.log("Finished");
// day12---------------------------------------------------

function login(email,pass,cb){
    setTimeout(() => {
        cb({userid:email,isloggedIN:true,message:"login successful"});
    }, 3000);
}
// login("user@example.com", "password", (userdetails) => {
//     console.log(userdetails);
// });
function getvideolist(cb){
    setTimeout(() => {
    cb(["video1", "video2", "video3"]);
    }, 4000);
}
login("user@example.com", "password", (userdetails) => {
    console.log(userdetails);
    getvideolist((videos) => {
    console.log(videos);
})});
function getvideodetails(user,cb){
    setTimeout(() => {
        cb({title:"VideoColorSpace",duration:"2 mins"});
        }, 4000);
}
login("user@example.com", "password", (userdetails) => {
    console.log(userdetails);
    getvideolist(userdetails.userid, (videodetails) => {
    console.log(videodetails);
    getvideodetails(userdetails.userid, (videodetails) => {
        console.log(videodetails);
    }))});
 