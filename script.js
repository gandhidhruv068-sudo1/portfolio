// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


// =====================================================
// CLOSE MOBILE MENU
// =====================================================

document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 130;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =====================================================
// SCROLL REVEAL
// =====================================================

const revealElements =
    document.querySelectorAll(
        ".skill-card," +
        ".technology-card," +
        ".project-card," +
        ".service-card," +
        ".about-card," +
        ".why-box," +
        ".contact-box"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "reveal"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =====================================================
// DYNAMIC YEAR
// =====================================================

const yearText =
    document.querySelector(
        "footer p"
    );


if (yearText) {

    yearText.textContent =
        `© ${new Date().getFullYear()} Dhruv Gandhi. Front-End Web Developer.`;

}


// =====================================================
// BUTTON EFFECT
// =====================================================

document
    .querySelectorAll(
        ".primary-btn, .secondary-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                this.style.transform =
                    "scale(0.97)";

                setTimeout(() => {

                    this.style.transform = "";

                }, 150);

            }
        );

    });