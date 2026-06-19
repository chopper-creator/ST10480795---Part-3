# ST10480795---Part-3
portfolio of evidence 
Tech Bridge Youth Initiative {Website Plan}
1. Website Choice
Name:
Tech Bridge Youth Initiative
Organisation Description:
The Tech Bridge Youth Initiative is a non-profit organization that helps young people
learn about technology. They want to teach kids from areas who do not have access to
computers and technology in school.
The group teaches people about:
• How to use a computer
• How to make software
• How to make websites
• How to market things on the internet
• How to fix basic computer problems
Main Goal:
To help young people get ready for school, jobs and starting their businesses in today’s
digital world we need to close the gap between those who have access, to technology
and those who do not.
2
2. Reasons for Choosing the Organisation:
Technology is important nowadays. Many young people lack digital education. I picked
this website because it will:
• Spread the word about training options
• Make it easy to sign up online
• Help the organization reach people
• Attract partners, sponsors and volunteers
This website is a useful tool, for growth and communication.
3. Website Goals and Objectives
Goals:
• The company wants to teach customers about what the company does and
what the company sells.
• They think it is an idea to have classes that help people learn skills, for using
computers and other digital things.
• The company also wants to help young people learn and grow by using
technology like computers and the internet.
Objectives:
• We need to give simple information
• People should be able to register for programs and events online.
• We must share news, events and stories, about our successes.
• The design needs to be easy to use for everyone.
• We must make sure it works well on computers and mobile phones.
3
4. Timeline and Milestones
Phase Activity Duration
Planning Define goals and target audience 2 weeks
Research Analyse similar websites 3 weeks
Design Create sitemap and layout 3 weeks
Development Build website using HTML & CSS 5 weeks
Testing Fix errors and bugs 2 weeks
Implementation Launch website 1 day
Evaluation Collect feedback Ongoing
5. Budget
Item Estimated Cost (ZAR)
Domain Name R100 – R200/year
Web Hosting R500 – R1000/year
Design Tools Free
Development Tools Free
Images/Graphics Free
Total R600 – R1200/year
4
Home Page (index.html)
Purpose
The Home page is where people first find out about Tech Bridge Youth Initiative. It says
hello to these visitors. Makes them feel welcome on the website of Tech Bridge Youth
Initiative.
Content
• Logo image
• Website title: "Tech Bridge Youth Initiative"
• Navigation menu
Hero section with:
• Heading: "Empowering Youth Through Digital Skills"
• Short description
• "Join Our Program" button
• Welcome section
• Organization description
Programs summary list:
• Computer Literacy Training
• Introduction to Coding
• Website Development
• Digital Marketing Basics
Footer with contact details
Colours
Background
• Dark navy blue
• Dark black-blue gradient
Text
• Light white blue
5
Button
• Gradient blue
Hover Effects
• Bright cyan
6
About Page (about.html)
Purpose
Provides information about the organization.
Content
• Logo
• Navigation menu
• About Us section
• Mission statement
• Vision statement
Information about:
• Digital skills training
• Youth empowerment
• Community development
• Technology education
Footer
Cards
• Dark transparent blue
Headings
• Light white.
7
Programs Page (Programs.html)
Purpose
Shows all training programs offered by Tech Bridge Youth Initiative.
Content
Introduction
Brief explanation of the programs.
Program Cards
1. Computer Literacy Training
2. Introduction to Coding
3. Website Development
4. Digital Marketing Basics
Each card contains:
• Heading
• Description
• Image
8
Events Page (events.html)
Purpose
Displays upcoming events and allows registration.
Content
Events Introduction Card
• Event image
• Description of workshops and conferences
9
Events Table
Event Date Location Description
Coding Bootcamp 10 May 2026 Durban
Community Hall
Coding training
Digital Skills
Workshop
20 May 2026 Online Computer training
Youth Tech
Conference
5 June 2026 Durban City Centre Career guidance
Entrepreneurship
Day
15 June 2026 Local Library
Business skills
Registration Form
Fields:
• Full Name
• Email
• Event Selection
• Register button
Colours
Table Header
• Dark navy.
Table Rows Hover
• Dark blue highlight
10
Contact Page (Contact.html)
Purpose
Allows visitors to contact the organization.
Content
Contact Form
Fields:
• Name
• Email
• Message
Button:
• Send Message
Google Map
Embedded location map.
Footer
Contact information.
Colours
Form Fields
• Dark blue
Focus Effect
• Bright cyan border.
Button
• Blue gradient.
11
Header (All Pages)
Contains
• Logo
• Website name
• Navigation menu
Colours
Background:
• Dark transparent navy.
Text
• Almost white.
Navigation Hover
• Bright cyan
Main Colour Palette
Colour Use
#04060b Dark background
#0f1a32 Main background
#e9edf5 Main text
#4de8ff Hover effects
#00d4ff Buttons
#0a67ff Button gradient
#a8b2c7 Footer text
12
JavaScript
The JavaScript file is used to add interactivity, improve user experience, and create
animations on the Tech Bridge Youth Initiative website. It runs automatically when the
webpage loads and performs several functions.
The JavaScript file is a shared script used across all pages of the Tech Bridge Youth
Initiative website. Its main purpose is to add functionality, interaction, automation,
and animations to the website. Instead of repeating JavaScript code on every page, one
shared JavaScript file controls common features such as the footer year, navigation,
forms, animations, and splash screen.
The whole script is wrapped inside an Immediately Invoked Function Expression
(IIFE): (function () {
 ...
 }) ();
This means the code runs automatically when the JavaScript file loads. It also keeps the
variables inside the script private, preventing conflicts with other scripts that may be
used on the website.
1. Waiting for the Website to Load
The script starts by using:
document.addEventListener('DOMContentLoaded', function () {
This tells the browser to wait until the HTML document has completely loaded before
running the JavaScript.
Purpose:
• Ensures all HTML elements are available before JavaScript tries to access
them.
• Prevents errors caused by trying to modify elements that have not loaded yet.
For example, the script needs the footer, navigation menu, forms, and page sections to
exist before it can change or animate them.
13
2. Automatically Updating the Current Year in the Footer
The first feature updates the copyright year automatically.
The script searches for all HTML elements with the class:
.current year
using:
document.querySelectorAll('.current year');
It then gets the current year from the user's computer using:
var y = new Date().getFullYear();
The Date() function gets the current date, and getFullYear() extracts only the year.
The script then places that year inside every element with the class .current year.
Example:
Before JavaScript:
© current-year Tech Bridge Youth Initiative
After JavaScript:
© 2026 Tech Bridge Youth Initiative
Purpose:
• Keeps the website copyright information updated automatically.
• Saves time because the developer does not need to manually change the
year every year.
• Ensures all pages display the correct year.
14
3. Mobile Navigation Toggle
The script includes a feature for mobile devices.
It searches for a button with the class:
.nav-toggle
and searches for the navigation menu:
nav
If both exist, JavaScript adds a click event.
When the user clicks the menu button:
nav.classList.toggle('open');
The script adds or removes the class:
open
from the navigation menu.
How it works:
Before clicking:
Navigation menu hidden
After clicking:
Navigation menu opens
Clicking again:
Navigation menu closes
Purpose:
• Makes the website easier to use on smartphones and tablets.
• Provides a responsive navigation system.
• Prevents mobile users from struggling with a desktop-style menu.
15
4. Preventing Form Submission During Demonstration
The script controls all forms on the website.
It selects every form using:
document.querySelectorAll('form');
This includes forms such as:
• Event registration form
• Contact form
Normally, submitting a form refreshes the page or sends data to a server.
However, this website is a demonstration project, so JavaScript prevents the default
action:
e.preventDefault();
Purpose:
• Stops the page from refreshing.
• Prevents users from leaving the page during testing.
• Allows the developer to demonstrate the form without needing a database.
5. Changing the Submit Button After Submission
After a user clicks a form submit button, the script finds the button:
button[type="submit"]
It saves the original button text.
Example:
Register
Then changes it to:
Submitted
using:
btn.textContent = 'Submitted';
After 2 seconds, it changes back to the original text.
16
Purpose:
• Gives users confirmation that their action was completed.
• Improves user experience.
• Creates a more realistic website interaction.
6. Adding Animation Classes Automatically
The script automatically applies animation classes to important website elements.
The selected elements include:
.card
section h2
.hero h2
.hero p
.slide
nav a
These represent:
• Program cards
• Section headings
• Hero section text
• Images/slides
• Navigation links
The script checks whether an element already has animation classes.
If not, it adds:
animate-on-scroll
or:
entrance
Purpose:
• Allows elements to animate without manually adding classes to every HTML
element.
• Creates consistent animations throughout the website.
• Reduces repeated coding.
17
7. Creating Different Animation Delays
The script creates a staggered animation effect.
It adds:
reveal-delay-1
reveal-delay-2
reveal-delay-3
depending on the position of the element.
Example:
First card:
Appears first
Second card:
Appears slightly later
Third card:
Appears after the second
Purpose:
• Makes animations smoother.
• Prevents all elements from appearing at the same time.
• Creates a professional website feeling.
18
8. Checking for GSAP Animation Library
The script checks if GSAP exists:
typeof window.gsap !== 'undefined'
GSAP means:
GreenSock Animation Platform
It is a JavaScript animation library used for advanced animations.
If GSAP is available, the website uses it for animations.
If GSAP is not available, the website uses another method called:
IntersectionObserver
Purpose:
• Provides advanced animations when possible.
• Ensures the website still works without external libraries.
9. Section Heading Animations
The script finds all:
section h2
These are the headings of website sections.
When the user scrolls near a heading, GSAP animates it.
The heading:
• Moves upward
• Fades into view
• Appears smoothly
The animation starts when the heading reaches:
85% of the screen height
Purpose:
• Improves page appearance.
• Encourages users to continue scrolling.
19
10. Card and Slide Animations
The script applies animations to:
.card
.slide
These include:
• Program cards
• Event cards
• Image slides
When they appear on screen, they:
• Move upward
• Fade in
• Appear smoothly
Purpose:
• Makes content presentation more engaging.
• Improves visual quality.
11. Navigation Link Animation
The script adds movement when users hover over navigation links.
When the mouse enters:
mouseenter
the link moves upward slightly.
When the mouse leaves:
mouseleave
it returns to its original position.
Purpose:
• Provides feedback when users interact with the menu.
• Makes navigation feel more responsive.
20
12. Error Handling
The GSAP animation code is inside:
try...catch
This means if an error happens with GSAP, the website does not break.
Instead, it runs:
attachIntersectionObserver();
Purpose:
• Improves reliability.
• Ensures animations still work even if GSAP fails.
13. Intersection Observer Animation System
If GSAP is unavailable, the website uses:
IntersectionObserver
This browser feature detects when elements become visible on the screen.
When an element enters the user's view, JavaScript adds:
visible
class.
The CSS then controls the animation.
Example:
Before scrolling:
Card hidden
After scrolling:
Card appears
Purpose:
• Provides a backup animation system.
• Improves browser compatibility.
21
14. Hero Section Automatic Appearance
The script adds a small delay:
setTimeout()
After a short time, the hero elements become visible.
Purpose:
• Ensures the homepage introduction appears smoothly.
• Creates a welcoming effect when visitors open the website.
15. Basic Navigation Hover Animation Without GSAP
If GSAP is unavailable, JavaScript adds another hover effect.
When users hover over navigation links, it adds:
animated
class.
When the mouse leaves, it removes the class.
Purpose:
• Maintains interactive navigation even without GSAP.
22
