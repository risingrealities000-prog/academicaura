/* ================================================================
ACADEMICAURA
STEP 1 — MAIN JAVASCRIPT
================================================================ */

document.addEventListener("DOMContentLoaded", () => {

/* ------------------------------------------------------------
   Mobile Navigation
   ------------------------------------------------------------ */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector("#mobile-menu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";


        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );


        if (isOpen) {

            mobileMenu.hidden = true;

        } else {

            mobileMenu.hidden = false;

        }

    });


    /* Close mobile menu when a link is selected */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenu.hidden = true;

        });

    });

}


/* ------------------------------------------------------------
   Current year
   ------------------------------------------------------------ */

const yearElements =
    document.querySelectorAll("[data-current-year]");


yearElements.forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});

});
