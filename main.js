document.getElementById("btn1").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", close);
var popup = document.getElementById("popup");

function btnClicked() {
  let msg =
    "This is A Test:" +
    "<br>" +
    "The sun was setting behind the mountains, casting a warm glow over the valley. The air was crisp and cool, and the leaves on the trees rustled gently in the breeze. As I walked along the path, I could hear the sound of a nearby stream, its gentle babbling providing a soothing background to the peaceful scene. I felt a sense of calm wash over me as I took in the beauty of my surroundings.";
  popup.style.visibility = "visible";
  document.getElementById("output").innerHTML = msg;
}

function close() {
  popup.style.visibility = "hidden";
}
