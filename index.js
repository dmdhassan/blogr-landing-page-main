var reveal = document.querySelectorAll(".reveal");

function revealAt() {
     for (var i = 0; i < reveal.length; i++) {
     var deviceHeight = window.innerHeight;
     var elementTop = reveal[i].getBoundingClientRect().top;
     
     if (elementTop <= deviceHeight - 150) {
          reveal[i].classList.add("active");
     } else {
          reveal[i].classList.remove("active");
     }
}

}

window.addEventListener("scroll", revealAt)
