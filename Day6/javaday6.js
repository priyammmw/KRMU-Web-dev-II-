// const headingElement=document.getElementById('myheading');
// console.log(headingElement);
// headingElement.textContent="New heading";
// headingElement.style.color="blue";
// headingElement.style.backgroundColor="yellow";
// ----------------------------------------------------------------------------------------------------------------

const paragraph=document.querySelector('#content p');

// change the text content of seledted paragraph
paragraph.textContent="The text content has been changed using querySelector";

// change the style of selected paragraph
paragraph.style.color="green";

// select and modify the <h1> element isnide the #content div
const heading=document.querySelector('#content h1');
heading.textContent="Hello,DOM";

// You can also select elements using by tag name
const title=document.querySelector('title');
title.textContent="DOM Manipulation Example";
