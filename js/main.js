/* =========================================================
   ACADEMICAURA
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.querySelector(".menu-button");

    const mobileNav =
        document.querySelector(".mobile-nav");


    /* =========================
       MOBILE MENU
    ========================== */

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after selecting a link */

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

});
