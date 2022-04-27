function displayImage() {
  const textSecret = document.getElementById("secret");
  const textShares = document.getElementById("shares");
  const textSharesInput = document.getElementById("sharesCombine");
  const textSecretOutput = document.getElementById("showSecret");

  const imageSecret = document.getElementById("imageLoader");
  const imageShares = document.getElementById("myCanvas1");
  const imageSharesInput = document.getElementById("sharesLoader");
  const imageSecretOutput = document.getElementById("myCanvas2");

  const imageBtn = document.getElementById("imageBtn");
  const textBtn = document.getElementById("textBtn");
  const textFileUpload = document.getElementById("textFileUpload");

  const textBtn1 = document.getElementById("textBtn1");
  const imageBtn1 = document.getElementById("imageBtn1");
  const textBtn2 = document.getElementById("textBtn2");
  const imageBtn2 = document.getElementById("imageBtn2");

  textSecret.style.display = "none";
  textShares.style.display = "none";
  textSharesInput.style.display = "none";
  textSecretOutput.style.display = "none";

  imageSecret.style.display = "block";
  imageShares.style.display = "block";
  imageSharesInput.style.display = "block";
  imageSecretOutput.style.display = "block";

  imageBtn.style.backgroundColor = "#000000";
  imageBtn.style.color = "#ffffff";
  textBtn.style.backgroundColor = "#efefef";
  textBtn.style.color = "#000000";
  textFileUpload.style.display = "none";

  textBtn1.style.display = "none";
  imageBtn1.style.display = "block";
  textBtn2.style.display = "none";
  imageBtn2.style.display = "flex";
}

function displayText() {
  const textSecret = document.getElementById("secret");
  const textShares = document.getElementById("shares");
  const textSharesInput = document.getElementById("sharesCombine");
  const textSecretOutput = document.getElementById("showSecret");

  const imageSecret = document.getElementById("imageLoader");
  const imageShares = document.getElementById("myCanvas1");
  const imageSharesInput = document.getElementById("sharesLoader");
  const imageSecretOutput = document.getElementById("myCanvas2");

  const imageBtn = document.getElementById("imageBtn");
  const textBtn = document.getElementById("textBtn");
  const textFileUpload = document.getElementById("textFileUpload");

  const textBtn1 = document.getElementById("textBtn1");
  const imageBtn1 = document.getElementById("imageBtn1");
  const textBtn2 = document.getElementById("textBtn2");
  const imageBtn2 = document.getElementById("imageBtn2");

  textSecret.style.display = "block";
  textShares.style.display = "block";
  textSharesInput.style.display = "block";
  textSecretOutput.style.display = "block";

  imageSecret.style.display = "none";
  imageShares.style.display = "none";
  imageSharesInput.style.display = "none";
  imageSecretOutput.style.display = "none";

  textBtn.style.backgroundColor = "#000000";
  textBtn.style.color = "#ffffff";
  imageBtn.style.backgroundColor = "#efefef";
  imageBtn.style.color = "#000000";
  textFileUpload.style.display = "flex";

  textBtn1.style.display = "block";
  imageBtn1.style.display = "none";
  textBtn2.style.display = "block";
  imageBtn2.style.display = "none";
}