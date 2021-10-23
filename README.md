
~At the begining our project landing page we have 5 sections filling the page so we used javascript to dynamically 
create a nav bar by dynamically adding nav items to the nav bar so whenever we want to create a new
section a new nav item get added to the nav bar so how did we do it ?
__________________________________________________________________________________________________________________

-First we declared two constants and saved in one of them our unordered list represnting our navbar and the other 
one saved an array of our sections in the page to be able to iterate on every and single one of them.

-Second we created a function in which we made it create a new nav item into our nav bar for every section exists
in our landing page using for of itteration and create element method to create a new nav item (list item) for
every section and added it into our HTML using inner.html method and then used the append child method to dynamically
add a every section as a nav item into the navbar.

_____________________________________________________________________________________________________________________

~Then we wanted to make the cool animation of the circle circlling behind or in the back of every section appear 
whenever we reach any of the sections on the page so here is how we achieved it :

______________________________________________________________________________________________________________________

-First we used the window on scroll method to make javascript listen and wait for the user whenever he scroll through 
the landing page .

-Second we selected all the sections on the page and made for each active section (which means for each section the 
user is on) there should be added this stylish moving circle in the background other wise like in the header or the 
footer it ahould be removed.

______________________________________________________________________________________________________________________

~So finally we were supposed to make the page jumb to every section smoothly rather than just jumb directly right to 
the section clicked so there is how we gone about it :

_______________________________________________________________________________________________________________________

-First we created an event listener for any click of the user for any of the b=nav items in the navbar.

-Second we prevented the default way of switching between the sections instantly.

-third we made our own switching way which was by getting every section in the page by it's id and then chose the behaviour
of the scrolling and switching to be smooth and just a little bit slow to make it look more dynamic.

___________________________________________________________________________________________________________________________

And that's it for what i have done in this project for the javascript rather than adding a couple more sections to the page 
that's all my work on the project :)