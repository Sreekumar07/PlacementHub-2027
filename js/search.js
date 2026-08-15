/* =========================================
   GLOBAL SEARCH
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initHomeSearch();

    }
);


function initHomeSearch() {

    const input =
        document.getElementById(
            "homeSearch"
        );

    const button =
        document.getElementById(
            "homeSearchButton"
        );


    if (!input || !button) {
        return;
    }


    function search() {

        const query =
            input.value.trim();


        if (!query) {

            window.location.href =
                "domains.html";

            return;

        }


        window.location.href =
            `domains.html?search=${
                encodeURIComponent(query)
            }`;

    }


    button.addEventListener(
        "click",
        search
    );


    input.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                search();

            }

        }
    );

}
