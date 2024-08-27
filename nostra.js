var sidenav = document.querySelector(".side-navbar")

function shownavbar(){

    sidenav.style.left= "0"
}
function closenavbar(){

    sidenav.style.left="-60%"
}

// searchbar
document.addEventListener("DOMContentLoaded", function() {
    var productContainer = document.getElementById("product");
    if (productContainer) {
        var productlist = productContainer.querySelectorAll("div");

        var search = document.getElementById("search");
        search.addEventListener("keyup", function(event) {
            var enteredValue = event.target.value.toUpperCase();

            for (var count = 0; count < productlist.length; count++) {
                var productname = productlist[count].querySelector("p").textContent;

                if (productname.toLocaleUpperCase().indexOf(enteredValue) < 0) {
                    productlist[count].style.display = "none";
                } else {
                    productlist[count].style.display = "block";
                }
            }
        });
    } else {
        console.error("Product container not found");
    }
});

