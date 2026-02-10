const para=document.createElement("p");
para.textContent="This is a dynamically added paragraph.";
console.log(para)

//append element
document.getElementById("content").appendChild(para);

//remove element
document.querySelector("#content p").remove();

const image=document.createElement("img");
image.setAttribute("src","https://www.bing.com/images/search?view=detailV2&ccid=WaCOgSUg&id=D663EE5AF0B0E20F7DB1CBC1C30014151F849282&thid=OIP.WaCOgSUgMm-RNN1PhMBPWgHaEK&mediaurl=https%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2f7%2fd%2f491909.jpg&exph=1152&expw=2048&q=java&FORM=IRPRST&ck=8B4035D8BAC7FF742DFB292259E56427&selectedIndex=2&itb=0");

image.setAttribute("alt","java");
const gallery=document.getElementById("gallery");
gallery.appendChild(image);

