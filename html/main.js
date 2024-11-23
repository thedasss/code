var ready = (callback) => {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

// Set header height on load and on window resize
ready(() => {
    const header = document.querySelector(".header");
    const setHeaderHeight = () => header.style.height = window.innerHeight + "px";
    setHeaderHeight(); // Initial setting
    window.addEventListener("resize", setHeaderHeight); // Adjust on resize
});

// Optional: Display modal with session storage check
ready(() => {
    if (!sessionStorage.getItem("modalShown")) {
        setTimeout(() => {
            $('#demo-modal').modal();
            sessionStorage.setItem("modalShown", "true");
        }, 500);
    }
});
setTimeout(function() {
	$('#demo-modal').modal();
}, 500);