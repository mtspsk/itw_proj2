const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
       console.log(entry);
       const targetElement = entry.target; // Get the observed element
       if (entry.isIntersecting && targetElement.classList.contains("hidden-left")) {
           targetElement.classList.add('show-left');
       } else if (entry.isIntersecting && targetElement.classList.contains("hidden-bottom")) {
         targetElement.classList.add('show-bottom');
     }
   });
});

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
const hiddenBottomElements = document.querySelectorAll('.hidden-bottom');

hiddenBottomElements.forEach((el) => observer.observe(el));
hiddenLeftElements.forEach((el) => observer.observe(el));


const handleOnMouseMove = e => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

document.querySelectorAll(".highlightable").forEach(card => {
  card.addEventListener("mousemove", e => handleOnMouseMove(e));
});



const scrollableElements = document.querySelectorAll(".scroll");

scrollableElements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const clickedElementId = this.id;
    if (clickedElementId === "about_nav" || clickedElementId === "about_dropdown") {
      const aboutMeElement = document.getElementById("about-me-heading");
      aboutMeElement.scrollIntoView({ behavior: 'smooth', block: "center"});
    }
    else if(clickedElementId === "edu_nav" || clickedElementId === "edu_dropdown") {
      const eduElement = document.getElementById("edu-heading");
      eduElement.scrollIntoView({ behavior: 'smooth', block: "center"});
    }else if(clickedElementId === "exp_nav" || clickedElementId === "exp_dropdown") {
      const expElement = document.getElementById("exp-heading");
      expElement.scrollIntoView({ behavior: 'smooth', block: "center" });
      console.log("exp");
    }
    else if(clickedElementId === "contact_nav" || clickedElementId === "contact_dropdown") {
      const contactElement = document.getElementById("contact");
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

var button = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

function toggleDropdownId() {
    if (window.innerWidth > 920) {
        dropdownContent.id = 'myDropdown';
    }
}

window.addEventListener('resize', toggleDropdownId);

button.addEventListener('click', function() {
    if (dropdownContent.id === 'myDropdown') {
        dropdownContent.removeAttribute('id');
    } else {
        dropdownContent.id = 'myDropdown';
    }
});
toggleDropdownId();