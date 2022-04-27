function displayImage() {
  const text_area = document.getElementById("center_Container");
  const image_area = document.getElementById("image_Container");

  text_area.style.display = "none";
  image_area.style.display = "grid";

}

function displayText() {
  const text_area = document.getElementById("center_Container");
  const image_area = document.getElementById("image_Container");

  text_area.style.display = "grid";
  image_area.style.display = "none";
}