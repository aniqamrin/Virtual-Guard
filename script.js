function showMore() {
    var additionalServices = document.getElementById("additional-services");
    var button = document.querySelector(".see-more-button");
    
    if (additionalServices.style.display === "none" || additionalServices.style.display === "") {
        additionalServices.style.display = "grid"; // Or "block" if you prefer a different layout
        button.innerText = "See Less";
    } else {
        additionalServices.style.display = "none";
        button.innerText = "See More";
    }
}
