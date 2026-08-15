/* =========================================
   DOMAINS PAGE + DOMAIN DETAILS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (
            document.getElementById("domainsGrid")
        ) {
            initDomainExplorer();
        }

        if (
            document.getElementById("domainDetails")
        ) {
            initDomainDetails();
        }

    }
);


/* =========================================
   DOMAIN EXPLORER
========================================= */

function initDomainExplorer() {

    const grid =
        document.getElementById(
            "domainsGrid"
        );

    const search =
        document.getElementById(
            "domainSearch"
        );

    const filters =
        document.getElementById(
            "filterButtons"
        );

    const count =
        document.getElementById(
            "resultCount"
        );

    const empty =
        document.getElementById(
            "emptyState"
        );

    const favoritesToggle =
        document.getElementById(
            "favoritesToggle"
        );


    let currentFilter = "all";

    let favoritesOnly = false;


    function render() {

        const query =
            search.value
                .trim()
                .toLowerCase();


        const favorites =
            window.PlacementHub
                ? PlacementHub.getFavorites()
                : [];


        let results =
            domainsData.filter(domain => {

                const searchable = [

                    domain.name,

                    domain.shortName,

                    domain.description,

                    ...(domain.skills || []),

                    ...(domain.tools || [])

                ]
                    .join(" ")
                    .toLowerCase();


                const matchesSearch =
                    !query ||
                    searchable.includes(query);


                const matchesFilter =
                    currentFilter === "all" ||
                    domain.category ===
                    currentFilter;


                const matchesFavorite =
                    !favoritesOnly ||
                    favorites.includes(domain.id);


                return (
                    matchesSearch &&
                    matchesFilter &&
                    matchesFavorite
                );

            });


        grid.innerHTML =
            results
                .map(domain =>
                    PlacementHub.createDomainCard(
                        domain
                    )
                )
                .join("");


        count.textContent =
            `${results.length} ${
                results.length === 1
                    ? "domain"
                    : "domains"
            }`;


        empty.classList.toggle(
            "visible",
            results.length === 0
        );


        PlacementHub.attachFavoriteEvents(
            grid
        );


        grid
            .querySelectorAll(".domain-card")
            .forEach((card, index) => {

                card.style.animationDelay =
                    `${index * 0.04}s`;

                card.classList.add(
                    "scale-in"
                );

            });

    }


    search.addEventListener(
        "input",
        render
    );


    filters
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    filters
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );


                    button.classList.add(
                        "active"
                    );


                    currentFilter =
                        button.dataset.filter;


                    render();

                }
            );

        });


    favoritesToggle.addEventListener(
        "click",
        () => {

            favoritesOnly =
                !favoritesOnly;

            favoritesToggle.classList.toggle(
                "active",
                favoritesOnly
            );

            favoritesToggle.textContent =
                favoritesOnly
                    ? "★ Showing Favorites"
                    : "★ Favorites";

            render();

        }
    );


    render();

}


/* =========================================
   DOMAIN DETAILS
========================================= */

function initDomainDetails() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id") ||
        "ai-ml";


    const domain =
        domainsData.find(
            item => item.id === id
        );


    if (!domain) {

        showDomainNotFound();

        return;

    }


    renderDomainDetails(domain);

}


/* =========================================
   RENDER DETAILS
========================================= */

function renderDomainDetails(domain) {

    document.title =
        `${domain.name} | Placement Hub 2027`;


    setText(
        "domainTitle",
        domain.name
    );

    setText(
        "domainDescription",
        domain.description
    );

    setText(
        "domainCategory",
        getCategoryName(
            domain.category
        )
    );

    setText(
        "domainIcon",
        domain.icon
    );

    setText(
        "demandValue",
        domain.market.level
    );

    setText(
        "salaryValue",
        domain.salary
    );

    setText(
        "difficultyValue",
        domain.difficulty
    );

    setText(
        "growthValue",
        domain.growth
    );

    setText(
        "whatIs",
        domain.whatIs
    );

    setText(
        "aiImpact",
        domain.aiImpact
    );

    renderBulletList(
        "whyChoose",
        domain.whyChoose
    );

    renderTags(
        "skills",
        domain.skills
    );

    renderTags(
        "tools",
        domain.tools
    );

    renderMarket(
        domain.market
    );

    renderRoadmap(
        domain.roadmap
    );

    renderResources(
        domain.resources
    );

    renderProject(
        domain.project
    );

    renderBulletList(
        "certifications",
        domain.certifications
    );

    renderCompanies(
        domain.companies
    );

    renderBulletList(
        "placementStrategy",
        domain.placementStrategy
    );

    renderBulletList(
        "futureGrowth",
        domain.futureGrowth
    );

    setText(
        "dayInLife",
        domain.dayInLife
    );


    setProgress(
        "demandProgress",
        domain.market.score
    );

    setProgress(
        "growthProgress",
        domain.market.growth
    );

    setProgress(
        "aiProgress",
        domain.market.aiRelevance
    );


    initDetailFavorite(
        domain.id
    );

}


/* =========================================
   FAVORITE DETAIL BUTTON
========================================= */

function initDetailFavorite(id) {

    const button =
        document.getElementById(
            "favoriteButton"
        );

    if (!button) {
        return;
    }


    function update() {

        const favorites =
            PlacementHub.getFavorites();

        const active =
            favorites.includes(id);


        button.textContent =
            active
                ? "★ Remove from Favorites"
                : "☆ Add to Favorites";

        button.classList.toggle(
            "active",
            active
        );

    }


    button.addEventListener(
        "click",
        () => {

            PlacementHub.toggleFavorite(
                id
            );

            update();

        }
    );


    update();

}


/* =========================================
   MARKET
========================================= */

function renderMarket(market) {

    const container =
        document.getElementById(
            "marketOutlook"
        );

    if (!container) {
        return;
    }


    container.innerHTML = `
        <div class="market-box">

            <span class="market-badge">
                ${escapeHTML(market.level)}
            </span>

            <p>
                ${escapeHTML(market.outlook)}
            </p>

        </div>
    `;

}


/* =========================================
   ROADMAP
========================================= */

function renderRoadmap(steps) {

    const container =
        document.getElementById(
            "careerRoadmap"
        );

    if (!container) {
        return;
    }


    container.innerHTML =
        steps
            .map(
                (step, index) => `
                    <div class="mini-roadmap-item">

                        <strong>
                            Step ${index + 1}
                        </strong>

                        <span>
                            ${escapeHTML(step)}
                        </span>

                    </div>
                `
            )
            .join("");

}


/* =========================================
   RESOURCES
========================================= */

function renderResources(resources) {

    const container =
        document.getElementById(
            "resources"
        );

    if (!container) {
        return;
    }


    const labels = {

        youtube: "YouTube Channels",

        courses: "Free Courses",

        documentation: "Documentation",

        github: "GitHub Projects",

        practice: "Practice Platforms",

        certifications: "Certification Resources"

    };


    container.innerHTML =
        Object.entries(resources)
            .map(
                ([key, values]) => `

                    <div class="resource-card">

                        <h4>
                            ${labels[key] || key}
                        </h4>

                        <p>
                            ${values
                                .map(
                                    item =>
                                        escapeHTML(item)
                                )
                                .join(" • ")
                            }
                        </p>

                    </div>

                `
            )
            .join("");

}


/* =========================================
   PROJECT
========================================= */

function renderProject(project) {

    const container =
        document.getElementById(
            "beginnerProject"
        );

    if (!container) {
        return;
    }


    container.innerHTML = `

        <h3>
            ${escapeHTML(project.title)}
        </h3>

        <p>
            ${escapeHTML(project.description)}
        </p>

        <div class="project-tech">
            STACK:
            ${escapeHTML(project.technologies)}
        </div>

    `;

}


/* =========================================
   COMPANIES
========================================= */

function renderCompanies(companies) {

    const container =
        document.getElementById(
            "companies"
        );

    if (!container) {
        return;
    }


    container.innerHTML =
        companies
            .map(
                company => `
                    <span class="company">
                        ${escapeHTML(company)}
                    </span>
                `
            )
            .join("");

}


/* =========================================
   BULLET LIST
========================================= */

function renderBulletList(
    elementId,
    items
) {

    const container =
        document.getElementById(
            elementId
        );

    if (!container) {
        return;
    }


    container.innerHTML =
        items
            .map(
                item => `
                    <div>
                        ${escapeHTML(item)}
                    </div>
                `
            )
            .join("");

}


/* =========================================
   TAGS
========================================= */

function renderTags(
    elementId,
    items
) {

    const container =
        document.getElementById(
            elementId
        );

    if (!container) {
        return;
    }


    container.innerHTML =
        items
            .map(
                item => `
                    <span class="tag">
                        ${escapeHTML(item)}
                    </span>
                `
            )
            .join("");

}


/* =========================================
   PROGRESS
========================================= */

function setProgress(
    elementId,
    percentage
) {

    const element =
        document.getElementById(
            elementId
        );

    if (!element) {
        return;
    }


    const value =
        Math.min(
            100,
            Math.max(
                0,
                Number(percentage) || 0
            )
        );


    requestAnimationFrame(() => {

        element.style.width =
            `${value}%`;

    });

}


/* =========================================
   HELPERS
========================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent =
            value || "—";
    }

}


function getCategoryName(category) {

    const categories = {

        software: "SOFTWARE DEVELOPMENT",

        data: "DATA & AI",

        infrastructure: "CLOUD & INFRASTRUCTURE",

        design: "DESIGN",

        hardware: "HARDWARE & ROBOTICS",

        business: "BUSINESS & PRODUCT"

    };


    return (
        categories[category] ||
        "TECHNOLOGY"
    );

}


function escapeHTML(value) {

    if (
        window.PlacementHub &&
        PlacementHub.escapeHTML
    ) {
        return PlacementHub.escapeHTML(
            value
        );
    }

    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function showDomainNotFound() {

    const main =
        document.getElementById(
            "domainDetails"
        );

    if (!main) {
        return;
    }


    main.innerHTML = `

        <section class="page-hero">

            <div class="container">

                <a
                    href="domains.html"
                    class="back-link"
                >
                    ← Back to Domains
                </a>

                <span class="section-label">
                    ERROR 404
                </span>

                <h1>
                    Domain Not Found.
                </h1>

                <p>
                    The career domain you requested
                    does not exist.
                </p>

                <br>

                <a
                    href="domains.html"
                    class="btn btn-primary"
                >
                    Explore Domains →
                </a>

            </div>

        </section>

    `;

}