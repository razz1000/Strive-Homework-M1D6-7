

let geth1 = document.getElementsByTagName("h1")[0];

geth1.style.color = "blue";



//EX7: Write a function to change the h1 text to something else

let h1Tag = document.getElementsByTagName("h1")[0];

let functionToChangeH1 = (namechange) => {
    h1Tag.innerText = namechange;
}

functionToChangeH1("Peters shop"); //Changes the H1 to Peters shop

//END : EX7: Write a function to change the h1 text to something else


// EX8: Write a function to change the page background color

let pageBackground = document.getElementsByTagName("body")[0];

let changeBackgroundColorOfBody = (color) => {
    pageBackground.style.backgroundColor = color;
}

changeBackgroundColorOfBody("lightblue");


// ENDEX8: Write a function to change the page background color


//EX9: Write a function to change the footer address with a fake one

let footerAddress = document.getElementsByClassName("footer-class")[0];

let changeFooterAddressText = (footerText) => {
    footerAddress.innerText = footerText
}

changeFooterAddressText("This is the new address");

// END : EX9: Write a function to change the footer address with a fake one


//EX10: Write a function to add a CSS class to every Amazon link


 let addClassToAmazonLinks = () => {

    let amazonlinks = document.querySelectorAll("a");
    for (let i = 0; i < amazonlinks.length; i++) {
        amazonlinks[i].href = "www.google.com"
        amazonlinks[i].classList.add("new-class")
    }
}

addClassToAmazonLinks();
 


// END : EX10: Write a function to add a CSS class to every Amazon link

//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
/* let ion = document.getElementsByClassName("amazon")

let toggleImages = () => {
    for (let i = 0; i < ion.length; i++) {
        ion[i].style.display = "none";
    }
}
 */

function setImageVisible(amazon2) {
    let img = document.querySelector(".amazon");
    if (amazon2 === "hidden") {
        img.style.visibility = "hidden"      
    } else {
        img.style.visibility = "visible"
    }
}

setImageVisible("hidden")


//END: EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image


//EX12: Write a function to color the price of the products in a different one every time it's invoked

let cardColor = document.getElementsByClassName("price")[0,1,2,3,4];
let cardColorChangeOnClick = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

    cardColor.style.backgroundColor = color;
}


cardColorChangeOnClick();


// END EX12: Write a function to color the price of the products in a different one every time it's invoked













