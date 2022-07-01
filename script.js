const colors = [
  {
    id: 0,
    bg: "#23afe2",
    class: "blueBtn",
    src: "./assets/BlueUmbrella.png",
  },
  {
    id: 1,
    bg: "#d10d74",
    class: "pinkBtn",
    src: "./assets/PinkUmbrella.png",
  },
  {
    id: 2,
    bg: "#f8ce45",
    class: "yellowBtn",
    src: "./assets/YelloUmbrella.png",
  },

  //   can add more colors and respective images
];

const umbrellaImg = document.querySelector("#umbrella");
const uploadBtn = document.querySelector("#uploadBtn");
const loader = document.querySelector("#loader");
const buttonGrpDiv = document.querySelector("#buttons");
const inputLogo = document.querySelector("#logo");
const btnText = document.querySelector("#hide");
function printBtn() {
  for (var i = 0; i < colors.length; i++) {
    var btn = document.createElement("button");
    btn.style.backgroundColor = colors[i].bg;
    btn.classList.add("circle");
    btn.classList.add(colors[i].class);
    btn.setAttribute("id", `${colors[i].id}`);
    //   const id = colors[i].id;
    btn.addEventListener("click", async (e) => {
      umbrellaImg.style.display = "none";
      document.body.style.backgroundColor = colors[e.target.id].bg;
      uploadBtn.style.backgroundColor = colors[e.target.id].bg;
      const url = colors[e.target.id].src;
      const loaderUrl = "./assets/loader_icon.svg";
      loader.src = loaderUrl;
      umbrellaImg.src = await colors[e.target.id].src;
    });
    umbrellaImg.addEventListener("load", () => {
      loader.src = "";
      umbrellaImg.style.display = "block";
    });
    buttonGrpDiv.appendChild(btn);
  }
}

const fileHandler = (e) => {
  //validate file size
  if (e.target.files[0].size > 5242880) {
    alert("Upload a file smaller than 5MB");
  } else {
    const file = e.target.files[0];

    // get filename and update button text
    inputLogo.innerHTML = file.name;
    btnText.innerHTML = file.name;
    btnText.style.margin = " auto";
    btnText.style.height = "3rem";
    document.querySelector("#uploadBtn").style.textAlign = "center";
    //read file
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      document.getElementById("selectedLogo").src = event.target.result;
    });

    reader.readAsDataURL(file);
  }
};

inputLogo.addEventListener("change", fileHandler);
