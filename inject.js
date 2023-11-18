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
    b) Make the body say "Unlock your coding potential! Elevate your gig game by offering flawless solutions and get cash-money!"
    c) Just have one, green button that says "Find a bug"
    d) Find a new background image that you think will work with the hero content.
*/
// 3. Remove the existing search functionality. Apparently, this is flawed and the corperate team don't see it being used much any way.
// 4. The apply now button, in the bug listings will also need to be removed. This needs to also work when interacting with the list items. Remember, this needs to only be done in the frontend, using JavaScript.
