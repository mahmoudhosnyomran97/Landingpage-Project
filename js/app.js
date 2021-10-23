//defining consts
const navBar = document.getElementById("navbar__list"); //saving my ul nav inside a const navbar
const sections = Array.from(document.querySelectorAll("section")); //saving my sections into a sections const and converting it into an array so i can use a for of loop on it

//dynamically create a navbar and adding items to it
function createNavItem(){
    for(section of sections){
        navItem = document.createElement("li");
        navItem.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class = "menu__link">${section.dataset.nav}</a>`;
        navBar.appendChild(navItem);

    }
}
//starting the creating function
createNavItem();

//using the getBoundingClientRect for styling the active states using foEach
window.onscroll = function(){
    document.querySelectorAll("section").forEach(function (active) {
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) 
        {
            active.classList.add("your-active-class");
        }
        else {
            active.classList.remove("your-active-class");
        }
    });
};

//using eventListener so when the user click on a list from the navbar it scroll him smoothly to the section he clicked on
navBar.addEventListener("click", (toSection) => {
    toSection.preventDefault();
    if (toSection.target.dataset.nav)
    {
        document.getElementById(`${toSection.target.dataset.nav}`)
            .scrollIntoView({behavior: "smooth"});
        setTimeout(() => {
            location.hash = `${toSection.target.dataset.nav}`; }, 170);
    }
});




