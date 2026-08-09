/* =========================================================
   ACADEMICAURA
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (!menuToggle || !mobileMenu) {
        return;
    }


    /* =========================
       MOBILE MENU
    ========================== */

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* =========================
       CLOSE MOBILE MENU
       WHEN A NORMAL LINK IS CLICKED
    ========================== */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* =========================
       CLOSE MENU ON ESCAPE
    ========================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("is-open")
        ) {

            mobileMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();

        }

    });


    /* =========================
       CLOSE MENU WHEN
       CLICKING OUTSIDE
    ========================== */

    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mobileMenu.classList.contains("is-open")
        ) {

            mobileMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* =========================
       CURRENT YEAR
    ========================== */

    const yearElement =
        document.querySelector("[data-current-year]");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

});