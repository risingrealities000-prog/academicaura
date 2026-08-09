/* =========================================================
   ACADEMICAURA
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.querySelector(".menu-button");

    const mobileNav =
        document.querySelector(".mobile-nav");


    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("open");


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        /* Close menu when a navigation link is selected */

        const mobileLinks =
            mobileNav.querySelectorAll(
                ".mobile-nav-link"
            );


        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("open");


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });


        /* Close menu with Escape key */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    mobileNav.classList.contains("open")
                ) {

                    mobileNav.classList.remove("open");


                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuButton.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                    menuButton.focus();

                }

            }
        );

    }

});