// 1.  Change all the uses of the green color to red
const greenToRed = () => {
  //Modifies the primary color to red
  const root = document.documentElement;
  root.style.setProperty("--primary", "#DE1738");

  const els = document.querySelectorAll("*");
  for (let i = 0; i < els.length; i++) {
    if (els[i].className.includes("text-primary")) {
      els[i].classList.remove("text-primary");
      els[i].setAttribute("style", "color: #DE1738");
    } else if (els[i].className.includes("btn-primary")) {
      els[i].classList.remove("btn-primary");
      els[i].setAttribute("style", "background-color: #DE1738; color: white");
    } else if (els[i].className.includes("bg-light")) {
      els[i].classList.remove("bg-light");
      els[i].setAttribute("style", "background-color: #fdefef");
    }
  }
};

// 2. Replace the banner with a static banner. Use the same design to create the header, body and CTA.
// a) Make the header say "Get paid for fixing bugs!"
// b) Make the body say "Unlock your coding potential! Elevate your gig game by offering flawless solutions and get cash-money!"
// c) Just have one, green button that says "Find a bug"
// d) Find a new background image that you think will work with the hero content.
const bannerHandler = () => {
  //Selects the banner container
  const banner = document.querySelector(".owl-stage-outer");

  //Selects and saves the node which contains the wanted carousel item
  const bannerStage = document.querySelector(".owl-stage");
  const bannerStageChild = document.querySelector(".owl-item.active");
  bannerStage.removeChild(bannerStageChild);

  //Removes banner with transition and transformation styles
  bannerStage.remove();

  //Creates new banner without transition and transformation styles and appends saves node
  const newBanner = document.createElement("div");
  newBanner.className = "owl-stage";
  banner.appendChild(newBanner);
  newBanner.appendChild(bannerStageChild);

  //Replaces banner image
  const bannerImg = newBanner.querySelector("img");
  bannerImg.src = "/img/coding-money.jpeg";

  //Modifies banner heading
  const bannerHeading = newBanner.querySelector("h1");
  bannerHeading.innerHTML = "Get paid for fixing bugs!";

  //Modifies banner body
  const bannerPara = newBanner.querySelector("p");
  bannerPara.innerHTML =
    "Unlock your coding potential! Elevate your gig game by offering flawless solutions and get cash-money!";

  //Modifies banner button background
  const bannerFirBtn = newBanner.querySelector(".btn");
  console.log(bannerFirBtn);
  bannerFirBtn.setAttribute("style", "background-color: #00b074 !important");
  bannerFirBtn.innerHTML = "Find a bug";

  //Removes second banner button
  const bannerSecBtn = newBanner.querySelector(".btn-secondary");
  bannerSecBtn.remove();

  //Removes carousel CTA and dots
  const owlNav = document.querySelector(".owl-nav");
  owlNav.remove();
  const owlDots = document.querySelector(".owl-dots");
  owlDots.remove();
};

// 3. Remove the existing search functionality. Apparently, this is flawed and the corperate team don't see it being used much any way.
const searchSectionRemover = () => {
  // Removes search section
  const searchSection = document.querySelector(".bg-primary");
  searchSection.remove();
};

// 4. The apply now button, in the bug listings will also need to be removed. This needs to also work when interacting with the list items. Remember, this needs to only be done in the frontend, using JavaScript.
const applyNowRemover = () => {
  //Selects jobs container
  const jobsContainer = document.querySelector(".tab-content");

  //Removes "apply now" buttons within jobs container
  const applyNowBtns = jobsContainer.querySelectorAll(".btn.btn-primary");
  for (let i = 0; i < applyNowBtns.length; i++) {
    applyNowBtns[i].remove();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    greenToRed();
    applyNowRemover();
  }, 50);

  bannerHandler();

  searchSectionRemover();
});
