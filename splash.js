document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".splash-container").style.opacity = "0"; 
        setTimeout(() => {
            window.location.href = "home.html"; 
        }, 2000); 
    }, 2000); 
});
