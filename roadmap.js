/* =========================================================
   PLACEMENT HUB 2027
   CAREER ROADMAP ENGINE
   ========================================================= */

"use strict";


/* =========================================================
   ROADMAP DATA
   ========================================================= */

const careerRoadmap = [

    {
        id: 1,
        phase: "START HERE",
        title: "Discover Your Direction",
        description:
            "Understand yourself before choosing what to build.",

        icon: "fa-compass",

        topics: [
            "Identify your interests and strengths",
            "Explore technology career options",
            "Understand different CSE career domains",
            "Compare roles, skills and work styles",
            "Research real-world career opportunities"
        ],

        actions: [
            "Take a career interest assessment",
            "Explore at least 5 career domains",
            "Talk to seniors or working professionals",
            "Read job descriptions from companies",
            "Choose 1–2 domains to explore deeply"
        ],

        output: [
            "Career direction",
            "Domain shortlist",
            "Personal learning goals"
        ]
    },


    {
        id: 2,
        phase: "FOUNDATION",
        title: "Programming Fundamentals",
        description:
            "Build the core programming ability that every technical career depends on.",

        icon: "fa-code",

        topics: [
            "Choose one primary programming language",
            "Variables, data types and operators",
            "Conditions and loops",
            "Functions and modular programming",
            "Arrays, strings and collections",
            "Object-oriented programming",
            "Error handling and debugging"
        ],

        actions: [
            "Solve small coding exercises every day",
            "Build 3–5 beginner programs",
            "Learn how to read documentation",
            "Practice debugging independently",
            "Write clean and understandable code"
        ],

        output: [
            "Strong programming foundation",
            "Problem-solving confidence",
            "5+ small projects"
        ]
    },


    {
        id: 3,
        phase: "CORE KNOWLEDGE",
        title: "Computer Science Fundamentals",
        description:
            "Understand what happens underneath the code you write.",

        icon: "fa-microchip",

        topics: [
            "Data Structures",
            "Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Database Management Systems",
            "Object-Oriented Design",
            "Software Engineering fundamentals"
        ],

        actions: [
            "Study concepts with practical examples",
            "Implement common data structures",
            "Understand HTTP and networking basics",
            "Practice SQL",
            "Build applications using databases",
            "Learn Git and version control"
        ],

        output: [
            "Strong CS fundamentals",
            "SQL knowledge",
            "Git/GitHub workflow",
            "Technical interview foundation"
        ]
    },


    {
        id: 4,
        phase: "SPECIALIZATION",
        title: "Choose Your Career Domain",
        description:
            "Select a specialization based on your interests and the kind of problems you want to solve.",

        icon: "fa-route",

        topics: [
            "AI & Machine Learning",
            "Data Science",
            "Cybersecurity",
            "Cloud Computing",
            "DevOps",
            "Full Stack Development",
            "Backend Development",
            "Mobile Development",
            "UI/UX Design",
            "IoT & Embedded Systems",
            "Robotics & Automation",
            "Product Management",
            "Data Analytics",
            "AR/VR & Spatial Computing",
            "Entrepreneurship & Startups"
        ],

        actions: [
            "Compare your shortlisted domains",
            "Study beginner concepts in each",
            "Build one small experiment",
            "Review real job requirements",
            "Choose one primary specialization"
        ],

        output: [
            "Primary career domain",
            "Secondary skill area",
            "Personal specialization roadmap"
        ]
    },


    {
        id: 5,
        phase: "SPECIALIZATION",
        title: "Build Domain Expertise",
        description:
            "Go beyond tutorials and develop the skills employers actually expect.",

        icon: "fa-layer-group",

        topics: [
            "Master domain fundamentals",
            "Learn industry-standard tools",
            "Understand common architectures",
            "Study real-world use cases",
            "Read technical documentation",
            "Follow current industry developments"
        ],

        actions: [
            "Create a structured domain syllabus",
            "Complete practical courses",
            "Read official documentation",
            "Rebuild examples without tutorials",
            "Follow engineers and researchers",
            "Join relevant communities"
        ],

        output: [
            "Domain-specific skills",
            "Tool familiarity",
            "Industry awareness"
        ]
    },


    {
        id: 6,
        phase: "PRACTICAL SKILLS",
        title: "Learn the Industry Toolchain",
        description:
            "Turn knowledge into a professional workflow.",

        icon: "fa-wrench",

        topics: [
            "Git and GitHub",
            "Command line",
            "IDE and development workflow",
            "Testing and debugging",
            "APIs",
            "Databases",
            "Cloud basics",
            "Deployment",
            "Documentation"
        ],

        actions: [
            "Use Git for every serious project",
            "Create meaningful commits",
            "Work with branches",
            "Consume and build APIs",
            "Deploy at least one project",
            "Write proper README files"
        ],

        output: [
            "Professional development workflow",
            "Deployable projects",
            "GitHub activity"
        ]
    },


    {
        id: 7,
        phase: "BUILD",
        title: "Build Real Projects",
        description:
            "Projects are where knowledge becomes evidence.",

        icon: "fa-laptop-code",

        topics: [
            "Beginner project",
            "Intermediate project",
            "Advanced project",
            "Domain-focused project",
            "Team project",
            "Real-world problem solving"
        ],

        actions: [
            "Start with a small useful product",
            "Avoid tutorial-only projects",
            "Use real datasets or APIs",
            "Add authentication where appropriate",
            "Deploy your work",
            "Document architecture and decisions"
        ],

        output: [
            "3–5 strong projects",
            "1 flagship project",
            "Live demonstrations",
            "Technical portfolio"
        ]
    },


    {
        id: 8,
        phase: "PROOF OF SKILL",
        title: "Build GitHub & Portfolio",
        description:
            "Make your skills visible to recruiters and engineers.",

        icon: "fa-github",

        topics: [
            "GitHub profile",
            "Project documentation",
            "Personal portfolio",
            "Technical writing",
            "Open-source contribution",
            "Project demonstrations"
        ],

        actions: [
            "Clean your GitHub profile",
            "Pin your strongest repositories",
            "Write professional README files",
            "Create a personal portfolio",
            "Contribute to open source",
            "Publish technical learnings"
        ],

        output: [
            "Professional GitHub",
            "Portfolio website",
            "Public proof of work"
        ]
    },


    {
        id: 9,
        phase: "PROBLEM SOLVING",
        title: "DSA & Coding Practice",
        description:
            "Develop the problem-solving ability required for technical interviews.",

        icon: "fa-puzzle-piece",

        topics: [
            "Arrays",
            "Strings",
            "Linked Lists",
            "Stacks and Queues",
            "Trees",
            "Graphs",
            "Hashing",
            "Recursion",
            "Dynamic Programming",
            "Searching and Sorting"
        ],

        actions: [
            "Solve problems consistently",
            "Understand patterns instead of memorizing",
            "Track weak topics",
            "Review failed problems",
            "Practice timed coding",
            "Explain solutions verbally"
        ],

        output: [
            "Strong DSA foundation",
            "Consistent problem-solving habit",
            "Interview confidence"
        ]
    },


    {
        id: 10,
        phase: "PERSONAL BRAND",
        title: "Resume, LinkedIn & Professional Identity",
        description:
            "Present yourself clearly and professionally.",

        icon: "fa-id-card",

        topics: [
            "One-page technical resume",
            "LinkedIn profile",
            "Project storytelling",
            "Achievement documentation",
            "Technical skills positioning",
            "Professional communication"
        ],

        actions: [
            "Create a clean one-page resume",
            "Quantify project impact",
            "Update LinkedIn",
            "Add GitHub and portfolio",
            "Write a strong professional summary",
            "Ask mentors for feedback"
        ],

        output: [
            "Recruiter-friendly resume",
            "Professional LinkedIn",
            "Clear personal brand"
        ]
    },


    {
        id: 11,
        phase: "EXPERIENCE",
        title: "Internships & Real-World Experience",
        description:
            "Move from simulated projects to real engineering environments.",

        icon: "fa-briefcase",

        topics: [
            "Internship applications",
            "Open-source contributions",
            "Freelance projects",
            "Hackathons",
            "Research projects",
            "Team collaboration"
        ],

        actions: [
            "Apply consistently",
            "Customize applications",
            "Participate in hackathons",
            "Contribute to open source",
            "Network with professionals",
            "Learn from rejection"
        ],

        output: [
            "Internship experience",
            "Team experience",
            "Industry exposure",
            "Stronger resume"
        ]
    },


    {
        id: 12,
        phase: "PLACEMENT PREPARATION",
        title: "Placement Strategy",
        description:
            "Turn your skills into a deliberate job-search strategy.",

        icon: "fa-bullseye",

        topics: [
            "Target companies",
            "Job descriptions",
            "Eligibility requirements",
            "Hiring patterns",
            "Application tracking",
            "Placement calendars"
        ],

        actions: [
            "Create a company target list",
            "Group companies by difficulty",
            "Track applications",
            "Prepare company-specific topics",
            "Research hiring processes",
            "Build an application pipeline"
        ],

        output: [
            "Target company list",
            "Application tracker",
            "Personal placement strategy"
        ]
    },


    {
        id: 13,
        phase: "INTERVIEW PREPARATION",
        title: "Technical Interview Preparation",
        description:
            "Prepare to explain, solve and build under interview conditions.",

        icon: "fa-terminal",

        topics: [
            "DSA interviews",
            "CS fundamentals",
            "SQL",
            "System design basics",
            "Domain questions",
            "Project deep dives",
            "Coding rounds"
        ],

        actions: [
            "Take mock interviews",
            "Practice explaining projects",
            "Solve problems under time limits",
            "Review common CS questions",
            "Practice SQL queries",
            "Study basic system design"
        ],

        output: [
            "Interview readiness",
            "Clear technical communication",
            "Strong project explanations"
        ]
    },


    {
        id: 14,
        phase: "FINAL PREPARATION",
        title: "Communication, HR & Behavioral Skills",
        description:
            "Technical skills get you into the conversation. Communication helps you finish it.",

        icon: "fa-comments",

        topics: [
            "Self introduction",
            "STAR method",
            "Behavioral questions",
            "Teamwork examples",
            "Leadership examples",
            "Conflict handling",
            "Professional communication"
        ],

        actions: [
            "Prepare a 60-second introduction",
            "Prepare project stories",
            "Practice common HR questions",
            "Record mock answers",
            "Improve spoken English",
            "Practice with peers"
        ],

        output: [
            "Confident communication",
            "Prepared HR answers",
            "Professional presence"
        ]
    },


    {
        id: 15,
        phase: "LAUNCH",
        title: "Get Hired",
        description:
            "Apply, interview, learn from feedback and keep moving forward.",

        icon: "fa-rocket",

        topics: [
            "Campus placements",
            "Off-campus applications",
            "Referrals",
            "Recruiter outreach",
            "Technical interviews",
            "Offer evaluation"
        ],

        actions: [
            "Apply consistently",
            "Track every application",
            "Follow up professionally",
            "Learn from every interview",
            "Improve weak areas",
            "Evaluate offers carefully"
        ],

        output: [
            "Job offer",
            "First professional role",
            "Career launch"
        ]
    },


    {
        id: 16,
        phase: "BEYOND PLACEMENT",
        title: "Continuous Career Growth",
        description:
            "Getting hired is not the finish line. It is the beginning.",

        icon: "fa-arrow-trend-up",

        topics: [
            "Advanced technical skills",
            "System design",
            "Leadership",
            "Specialization",
            "Professional networking",
            "AI-assisted development",
            "Entrepreneurship"
        ],

        actions: [
            "Keep learning",
            "Build increasingly difficult systems",
            "Develop leadership skills",
            "Mentor others",
            "Follow technology trends",
            "Create products or startups"
        ],

        output: [
            "Long-term career growth",
            "Senior-level capability",
            "Leadership opportunities",
            "Entrepreneurial opportunities"
        ]
    }

];


/* =========================================================
   STORAGE
   ========================================================= */

const ROADMAP_STORAGE_KEY =
    "placementHubCareerRoadmapProgress";


function getProgress() {

    try {

        const saved =
            localStorage.getItem(ROADMAP_STORAGE_KEY);

        if (!saved) {
            return {};
        }

        return JSON.parse(saved);

    } catch (error) {

        console.error(
            "Could not read roadmap progress:",
            error
        );

        return {};
    }
}


function saveProgress(progress) {

    try {

        localStorage.setItem(
            ROADMAP_STORAGE_KEY,
            JSON.stringify(progress)
        );

    } catch (error) {

        console.error(
            "Could not save roadmap progress:",
            error
        );
    }
}


/* =========================================================
   RENDER ROADMAP
   ========================================================= */

function renderRoadmap() {

    const container =
        document.getElementById("careerRoadmap");

    if (!container) {
        return;
    }

    const progress = getProgress();

    container.innerHTML = careerRoadmap
        .map((stage, index) => {

            const completed =
                progress[stage.id] === true;

            return `

                <article
                    class="stage ${completed ? "completed" : ""}"
                    data-stage="${stage.id}"
                >

                    <div class="stage-dot">

                        <i class="fa-solid ${stage.icon}"></i>

                        <span class="stage-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                    </div>


                    <div class="stage-card">


                        <!-- HEADER -->

                        <div class="stage-header">

                            <div class="stage-heading">

                                <span class="stage-label">
                                    ${stage.phase}
                                </span>

                                <h3>
                                    ${stage.title}
                                </h3>

                                <p>
                                    ${stage.description}
                                </p>

                            </div>


                            <button
                                type="button"
                                class="complete-btn"
                                data-complete="${stage.id}"
                                aria-label="Mark ${stage.title} complete"
                            >

                                <i class="fa-solid fa-check"></i>

                            </button>

                        </div>


                        <!-- PROGRESS -->

                        <div class="progress-area">

                            <div class="progress-meta">

                                <span>
                                    Stage Progress
                                </span>

                                <strong>
                                    ${completed ? "100%" : "0%"}
                                </strong>

                            </div>

                            <div class="progress-track">

                                <div
                                    class="progress-fill"
                                    style="width:${completed ? "100%" : "0%"}"
                                ></div>

                            </div>

                        </div>


                        <!-- BODY -->

                        <div class="stage-body">

                            <div class="content-grid">


                                <!-- WHAT TO LEARN -->

                                <div class="content-box">

                                    <h4>
                                        <i class="fa-solid fa-book-open"></i>
                                        What to Learn
                                    </h4>

                                    <ul>

                                        ${stage.topics
                                            .map(topic => `
                                                <li>
                                                    <i class="fa-solid fa-circle"></i>
                                                    <span>${topic}</span>
                                                </li>
                                            `)
                                            .join("")}

                                    </ul>

                                </div>


                                <!-- WHAT TO DO -->

                                <div class="content-box">

                                    <h4>
                                        <i class="fa-solid fa-bolt"></i>
                                        What to Do
                                    </h4>

                                    <ul>

                                        ${stage.actions
                                            .map(action => `
                                                <li>
                                                    <i class="fa-solid fa-arrow-right"></i>
                                                    <span>${action}</span>
                                                </li>
                                            `)
                                            .join("")}

                                    </ul>

                                </div>


                                <!-- OUTCOME -->

                                <div class="content-box">

                                    <h4>
                                        <i class="fa-solid fa-flag-checkered"></i>
                                        Expected Outcome
                                    </h4>

                                    <ul>

                                        ${stage.output
                                            .map(item => `
                                                <li>
                                                    <i class="fa-solid fa-check"></i>
                                                    <span>${item}</span>
                                                </li>
                                            `)
                                            .join("")}

                                    </ul>

                                </div>


                                <!-- ACTION CHECKLIST -->

                                <div class="content-box">

                                    <h4>
                                        <i class="fa-solid fa-list-check"></i>
                                        Completion Checklist
                                    </h4>

                                    <ul>

                                        <li>
                                            <i class="fa-solid fa-circle"></i>
                                            Understand the concepts
                                        </li>

                                        <li>
                                            <i class="fa-solid fa-circle"></i>
                                            Practice the skills
                                        </li>

                                        <li>
                                            <i class="fa-solid fa-circle"></i>
                                            Build something
                                        </li>

                                        <li>
                                            <i class="fa-solid fa-circle"></i>
                                            Document your work
                                        </li>

                                        <li>
                                            <i class="fa-solid fa-circle"></i>
                                            Mark the stage complete
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>


                        <!-- FOOTER -->

                        <div class="stage-footer">

                            <button
                                type="button"
                                class="details-btn"
                                data-expand="${stage.id}"
                            >

                                <span>
                                    Explore Stage
                                </span>

                                <i class="fa-solid fa-chevron-down"></i>

                            </button>

                        </div>

                    </div>

                </article>

            `;

        })
        .join("");

    attachEvents();

    updateCompletionState();

    revealStages();
}


/* =========================================================
   EVENTS
   ========================================================= */

function attachEvents() {

    const completeButtons =
        document.querySelectorAll(
            "[data-complete]"
        );

    completeButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const id =
                    Number(
                        button.dataset.complete
                    );

                toggleStage(id);
            }
        );

    });


    const expandButtons =
        document.querySelectorAll(
            "[data-expand]"
        );

    expandButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        button.dataset.expand
                    );

                const stage =
                    document.querySelector(
                        `[data-stage="${id}"]`
                    );

                if (!stage) {
                    return;
                }

                stage.classList.toggle(
                    "open"
                );

                const label =
                    button.querySelector("span");

                if (
                    stage.classList.contains("open")
                ) {

                    label.textContent =
                        "Hide Stage";

                } else {

                    label.textContent =
                        "Explore Stage";
                }

            }
        );

    });

}


/* =========================================================
   COMPLETE / UNCOMPLETE
   ========================================================= */

function toggleStage(id) {

    const progress = getProgress();

    progress[id] =
        progress[id] !== true;

    saveProgress(progress);

    renderRoadmap();

    const stage =
        careerRoadmap.find(
            item => item.id === id
        );

    if (stage && progress[id] === true) {

        showNotification(
            `✓ ${stage.title} completed`
        );

    } else if (stage) {

        showNotification(
            `${stage.title} marked as incomplete`
        );
    }
}


/* =========================================================
   OVERALL COMPLETION
   ========================================================= */

function updateCompletionState() {

    const progress = getProgress();

    const completed =
        careerRoadmap.filter(
            stage => progress[stage.id] === true
        ).length;

    const total =
        careerRoadmap.length;

    const percentage =
        Math.round(
            (completed / total) * 100
        );


    const statusText =
        percentage === 0
            ? "Start your journey"
            : percentage < 25
                ? "Building your foundation"
                : percentage < 50
                    ? "Finding your direction"
                    : percentage < 75
                        ? "Developing career strength"
                        : percentage < 100
                            ? "Almost career ready"
                            : "Career roadmap completed";


    const existingStatus =
        document.querySelector(
            "[data-roadmap-status]"
        );

    if (existingStatus) {
        existingStatus.textContent =
            statusText;
    }


    const percentageElements =
        document.querySelectorAll(
            "[data-progress-percentage]"
        );

    percentageElements.forEach(element => {

        element.textContent =
            `${percentage}%`;

    });


    const progressBars =
        document.querySelectorAll(
            "[data-overall-progress]"
        );

    progressBars.forEach(bar => {

        bar.style.width =
            `${percentage}%`;

    });


    const completedElements =
        document.querySelectorAll(
            "[data-completed-stages]"
        );

    completedElements.forEach(element => {

        element.textContent =
            completed;

    });


    const totalElements =
        document.querySelectorAll(
            "[data-total-stages]"
        );

    totalElements.forEach(element => {

        element.textContent =
            total;

    });
}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

function revealStages() {

    const stages =
        document.querySelectorAll(
            ".stage"
        );

    if (!("IntersectionObserver" in window)) {

        stages.forEach(stage => {

            stage.style.opacity = "1";
            stage.style.transform =
                "translateY(0)";

        });

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    stages.forEach((stage, index) => {

        stage.style.opacity = "0";

        stage.style.transform =
            "translateY(25px)";

        stage.style.transition =
            `opacity .6s ease ${index * 0.04}s,
             transform .6s ease ${index * 0.04}s`;

        observer.observe(stage);

    });
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    let notification =
        document.querySelector(
            ".roadmap-notification"
        );


    if (!notification) {

        notification =
            document.createElement("div");

        notification.className =
            "roadmap-notification";

        document.body.appendChild(
            notification
        );
    }


    notification.textContent =
        message;

    notification.classList.add(
        "show"
    );


    clearTimeout(
        window.roadmapNotificationTimer
    );


    window.roadmapNotificationTimer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 2500);
}


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            document
                .querySelectorAll(
                    ".stage.open"
                )
                .forEach(stage => {

                    stage.classList.remove(
                        "open"
                    );

                });
        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderRoadmap();

    }
);