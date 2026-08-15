/* =========================================
   PLACEMENT HUB 2027
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileNavigation();

    initRevealAnimations();

    initFeaturedDomains();

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

function initMobileNavigation() {

    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", () => {

        nav.classList.toggle("open");

        const isOpen = nav.classList.contains("open");

        toggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        toggle.textContent =
            isOpen ? "✕" : "☰";

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            toggle.textContent = "☰";

        });

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        elements.forEach(el => {
            el.style.opacity = "1";
        });

        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "scale-in"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );

    elements.forEach(el => {
        observer.observe(el);
    });

}


/* =========================================
   FEATURED DOMAINS
========================================= */

function initFeaturedDomains() {

    const container =
        document.getElementById(
            "featuredDomains"
        );

    if (!container ||
        typeof domainsData === "undefined") {
        return;
    }

    const featuredIds = [
        "ai-ml",
        "full-stack",
        "cybersecurity",
        "cloud",
        "data-science",
        "backend"
    ];

    const featured =
        featuredIds
            .map(id =>
                domainsData.find(
                    domain => domain.id === id
                )
            )
            .filter(Boolean);


    container.innerHTML =
        featured
            .map(createDomainCard)
            .join("");


    attachFavoriteEvents(container);

}


/* =========================================
   DOMAIN CARD
========================================= */

function createDomainCard(domain) {

    const isFavorite =
        getFavorites().includes(domain.id);

    const demandClass =
        domain.market.level
            .toLowerCase()
            .replaceAll(" ", "-");


    return `
        <article
            class="domain-card reveal"
            data-domain-id="${domain.id}"
            data-category="${domain.category}"
            data-color="${domain.color || "purple"}"
        >

            <div class="domain-card-top">

                <div class="domain-icon">
                    ${escapeHTML(domain.icon)}
                </div>

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite="${domain.id}"
                    aria-label="Favorite ${escapeHTML(domain.name)}"
                    title="Add to favorites"
                >
                    ${isFavorite ? "★" : "☆"}
                </button>

            </div>

            <h3>
                ${escapeHTML(domain.name)}
            </h3>

            <p>
                ${escapeHTML(domain.description)}
            </p>

            <div class="domain-meta">

                <span class="demand ${demandClass}">
                    <span class="demand-dot"></span>
                    ${escapeHTML(domain.market.level)}
                </span>

                <a
                    href="domain-details.html?id=${encodeURIComponent(domain.id)}"
                    class="view-details"
                >
                    View Details →
                </a>

            </div>

        </article>
    `;
}


/* =========================================
   FAVORITES
========================================= */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "placementHubFavorites"
            )
        ) || [];

    } catch (error) {

        console.warn(
            "Could not read favorites.",
            error
        );

        return [];

    }

}


function saveFavorites(favorites) {

    try {

        localStorage.setItem(
            "placementHubFavorites",
            JSON.stringify(favorites)
        );

    } catch (error) {

        console.warn(
            "Could not save favorites.",
            error
        );

    }

}


function toggleFavorite(id) {

    const favorites = getFavorites();

    const index =
        favorites.indexOf(id);

    if (index === -1) {

        favorites.push(id);

    } else {

        favorites.splice(index, 1);

    }

    saveFavorites(favorites);

    return favorites;
}


function attachFavoriteEvents(container) {

    container
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const id =
                        button.dataset.favorite;

                    const favorites =
                        toggleFavorite(id);

                    const active =
                        favorites.includes(id);

                    button.classList.toggle(
                        "active",
                        active
                    );

                    button.textContent =
                        active ? "★" : "☆";

                }
            );

        });

}


/* =========================================
   UTILITIES
========================================= */

function escapeHTML(value) {

    if (value === null ||
        value === undefined) {
        return "";
    }

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


window.PlacementHub = {

    getFavorites,

    saveFavorites,

    toggleFavorite,

    createDomainCard,

    attachFavoriteEvents,

    escapeHTML

};