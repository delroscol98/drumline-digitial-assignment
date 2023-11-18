# Drumline Digital Developer test

Welcome! This project is the starting point for your technical test for drumline digital.


## How this works

You'll receive this project as a zip, install the npm dependancies,
then follow the instructions bellow to finalise the test.

There is also a questionnaire for you to complete, which has a few, HTML/CSS/JS/TS questions.

All told, this should take between 60 and 90 minutes and you can do it in any order.



# The test

## Questionnaire

You can find the link to the [questionnaire here](https://forms.gle/nzx3vi7mrHgfFBqe8)

## Web project

This project emulates a standard way of working at Drumline.

Follow the setup, read the rules and finally, read the instructions.

The instructions are what you need to change.

## Getting setup

1. Install Node JS, if you haven't already. <br/>
   You can find the installer on the [NodeJS website](https://nodejs.org/en)

2. Extract the project to a folder somewhere. <br/>
   If you're not too familiar, I recommend [7zip](https://7-zip.org/) <br/>
	 But most operating systems will have something by default.

3. Open a terminal in the project directory. All operating systems will have something like this. <br/>
   On Windows, you can use `cmd`. just search for it in the start menu. use `dir C:\path\to\project` <br/>
	 On MacOS, search `terminal` in the hot bar. `cd /path/to/project` <br/>
	 On Linux, you know what you are doing. `You got this`.

4. Install the NPM dependancies. <br/>
	 Run this command to install packages `npm install` <br/>
	 You should be good to go now!

6. Start the server using `npm run start` <br/>
	 You will need to reload the page when you change the `inject.js` file.


## Instructions

Corporate has noticed that users are leaving the page at a higher that usual rate.

They assume users aren't able to find easily find any testimonies of how useful the platform is, and so are leaving.

They also think that the rotating banner is distracting and want to stop the rotating, and in its place different content.

### Rules

Follow the instructions to the best of your ability. Don't stress too much on this, as this is more of a conversion starter for the next round of interviews.

1. Do not change existing public or server files, other than the `inject.js` file at the root of the project. <br/>
	 This means, any style, attribute or layout changes should be made in that file using *JS ONLY* <br/>
	 Got any concerns there, let me know. `lawrence@drumlinedigital.com.au` <br/>
	 Failing to follow this rule will result in disqualification.

2. You can use any tools you like, but you will need to maintain this properly. <br/>
	 Consider adding documentation, change logs and comments. <br/>
	 Make sure to add any dependancy requirements, such as package.json changes etc. <br/>
	 Make sure to document any commands to build/transpile/compile any outputs.


### Changes

1. The marketing team thinks that the green does not align with the purpose of the site.
	* change the all uses of the green color to red.

2. Replace the banner with a static banner. Use the same design to create the header, body and CTA.
	* Make the header say "Get paid for fixing bugs!"
	* Make the body say "Unlock your coding potential! Elevate your gig game by offering flawless solutions and get cash-money!"
	* Just have one, green button that says "Find a bug"
	* Find a new background image that you think will work with the hero content.

3. Remove the existing search functionality.
	* Apparently, this is flawed and the corperate team don't see it being used much any way.

4. The apply now button, in the bug listings will also need to be removed.
	* this needs to also work when interacting with the list items.
	* Remember, this needs to only be done in the frontend, using JavaScript.


# Submitting your project

Just zip this project up and send back to `lawrence@drumlinedigital.com.au` via email.