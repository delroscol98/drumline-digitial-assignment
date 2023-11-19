// 1.  Change all the uses of the green color to red
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  root.style.setProperty("--primary", "#DE1738");

  const els = document.querySelectorAll("*");
  for (let i = 0; i < els.length; i++) {
    const backgroundClr = window.getComputedStyle(els[i]).backgroundColor;
    const clr = window.getComputedStyle(els[i]).color;

    if (backgroundClr === "rgb(0, 176, 116)") {
      els[i].setAttribute(
        "style",
        "background-color: #DE1738; border-color: #DE1738"
      );
    }

    if (backgroundClr === "rgb(239, 253, 245)") {
      els[i].setAttribute("style", "background-color: #fdefef !important");
    }

    if (clr === "rgb(0, 176, 116)") {
      els[i].setAttribute("style", "color: #DE1738 !important");
    }
  }
});

/*2. Replace the banner with a static banner. Use the same design to create the header, body and CTA.
    a) Make the header say "Get paid for fixing bugs!"
*/

document.addEventListener("DOMContentLoaded", () => {
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
  const bannerFirBtn = newBanner.querySelector(".btn-primary");
  bannerFirBtn.setAttribute("style", "background-color: #00b074");

  //Removes second banner button
  const bannerSecBtn = newBanner.querySelector(".btn-secondary");
  bannerSecBtn.remove();

  //Removes carousel CTA and dots
  const owlNav = document.querySelector(".owl-nav");
  owlNav.remove();
  const owlDots = document.querySelector(".owl-dots");
  owlDots.remove();
});

/*
    b) Make the body say "Unlock your coding potential! Elevate your gig game by offering flawless solutions and get cash-money!"
    c) Just have one, green button that says "Find a bug"
    d) Find a new background image that you think will work with the hero content.
*/

// 3. Remove the existing search functionality. Apparently, this is flawed and the corperate team don't see it being used much any way.

document.addEventListener("DOMContentLoaded", () => {
  const searchSection = document.querySelector(".bg-primary");
  searchSection.remove();
});
// 4. The apply now button, in the bug listings will also need to be removed. This needs to also work when interacting with the list items. Remember, this needs to only be done in the frontend, using JavaScript.
