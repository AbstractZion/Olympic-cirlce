canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="orange";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(230,230,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(290,200,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(350,230,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(390,200,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    //taking color from the input box
    //additional activity starts
    color=document.getElementById("color").value;
    console.log(color);
    //additional activity ends
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X= "+mouse_x+",Y= "+mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}