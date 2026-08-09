/* ================================================================
   ACADEMICAURA
   STEP 2 — HEADER + MOBILE NAVIGATION
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
       MOBILE NAVIGATION
       ============================================================ */

    const menuButton =
        document.querySelector(".menu-button");

    const mobileMenu =
        document.querySelector("#mobile-menu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                menuButton.getAttribute("aria-expanded") === "true";


            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        });


        function openMobileMenu() {

            mobileMenu.hidden = false;

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            menuButton.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

            document.body.classList.add(
                "mobile-menu-open"
            );

        }


        function closeMobileMenu() {

            mobileMenu.hidden = true;

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            document.body.classList.remove(
                "mobile-menu-open"
            );

        }


        /* Close menu when a navigation link is clicked */

        const mobileLinks =
            mobileMenu.querySelectorAll(
                ".mobile-nav-link"
            );


        mobileLinks.forEach((link) => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


        /* Close menu with Escape */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    menuButton.getAttribute(
                        "aria-expanded"
                    ) === "true"
                ) {

                    closeMobileMenu();

                    menuButton.focus();

                }

            }
        );


        /* Close menu if screen becomes desktop size */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 760 &&
                    menuButton.getAttribute(
                        "aria-expanded"
                    ) === "true"
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* ============================================================
       SEARCH BUTTON
       ============================================================ */

    const searchButton =
        document.querySelector(".search-button");


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            () => {

                /*
                 * Global search will be implemented
                 * in a later AcademicAura stage.
                 */

                console.log(
                    "AcademicAura search will be available soon."
                );

            }
        );

    }


    /* ============================================================
       CURRENT YEAR
       ============================================================ */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });

});