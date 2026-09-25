/* ==================================================
   EDIT YOUR PORTFOLIO HERE
================================================== */


const portfolio = {


    /* YOUR NAME */

    name: "Your Name",


    /* INTRODUCTION */

    introduction:
        "My personal portfolio, learning journey, and creative work.",


    /* ABOUT ME */

    about:
        "Hello! I'm Your Name. This portfolio is a collection of my experiences, projects, interests, and the things I have learned along the way.",



    /* ==================================================
       YOUR SUBJECTS
    ================================================== */

    subjects: [


        {

            name: "Mathematics",

            description:
                "My journey through numbers, problem solving, and analytical thinking.",

            experience:
                "Write about your experience with Mathematics here.",

            work:
                "Add your Mathematics projects, activities, achievements, or reflections here."

        },


        {

            name: "Science",

            description:
                "Exploring the world through curiosity, experiments, and discovery.",

            experience:
                "Write about your experience with Science here.",

            work:
                "Add your Science projects, experiments, or activities here."

        },


        {

            name: "English",

            description:
                "A collection of my work involving communication, writing, literature, and creativity.",

            experience:
                "Write about your experience with English here.",

            work:
                "Add essays, presentations, creative writing, or other work here."

        },


        {

            name: "ICT",

            description:
                "Exploring technology, digital creativity, design, and programming.",

            experience:
                "Write about your experience with ICT here.",

            work:
                "Add websites, designs, coding projects, or digital work here."

        }


    ]


};



/* ==================================================
   DO NOT EDIT BELOW THIS LINE
================================================== */


/* ==================================================
   INSERT PERSONAL INFORMATION
================================================== */


document
    .getElementById("intro-name")
    .textContent =
    portfolio.name;


document
    .getElementById("intro-description")
    .textContent =
    portfolio.introduction;


document
    .getElementById("header-name")
    .textContent =
    portfolio.name;


document
    .getElementById("about-name")
    .textContent =
    portfolio.name;


document
    .getElementById("about-description")
    .textContent =
    portfolio.about;



/* ==================================================
   CREATE FLOWERS
================================================== */


const garden =
    document.getElementById("garden-area");


const butterfly =
    document.getElementById("main-butterfly");


const positions = [

    {
        left: "7%",
        top: "15%"
    },

    {
        left: "38%",
        top: "4%"
    },

    {
        left: "70%",
        top: "20%"
    },

    {
        left: "43%",
        top: "62%"
    }

];


portfolio.subjects.forEach(
    (subject, index) => {


        const flower =
            document.createElement("div");


        flower.className =
            "flower-wrapper";


        const position =
            positions[
                index %
                positions.length
            ];


        flower.style.left =
            position.left;


        flower.style.top =
            position.top;


        flower.innerHTML = `

            <div class="flower">

                <div class="petal one"></div>

                <div class="petal two"></div>

                <div class="petal three"></div>

                <div class="petal four"></div>

                <div class="petal five"></div>

                <div class="flower-center"></div>

                <div class="stem"></div>

            </div>

            <div class="flower-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="flower-name">
                ${subject.name}
            </div>

        `;


        flower.addEventListener(
            "click",
            () => {

                goToSubject(
                    index,
                    flower
                );

            }
        );


        garden.appendChild(flower);

    }
);



/* ==================================================
   ENTER PORTFOLIO
================================================== */


document
    .getElementById("enter-button")
    .addEventListener(
        "click",
        () => {


            const intro =
                document.getElementById("intro");


            intro.classList.add(
                "fade-out"
            );


            setTimeout(
                () => {

                    intro.classList.add(
                        "hidden"
                    );


                    document
                        .getElementById("portfolio")
                        .classList.remove(
                            "hidden"
                        );

                },

                800
            );

        }
    );



/* ==================================================
   BUTTERFLY → FLOWER
================================================== */


function goToSubject(
    index,
    flower
) {


    const flowerRect =
        flower.getBoundingClientRect();


    const gardenRect =
        garden.getBoundingClientRect();


    const targetX =
        flowerRect.left -
        gardenRect.left +
        flowerRect.width / 2;


    const targetY =
        flowerRect.top -
        gardenRect.top +
        20;


    /*
       Move butterfly
    */


    butterfly.style.left =
        `${targetX - 32}px`;


    butterfly.style.top =
        `${targetY - 20}px`;


    butterfly.style.transform =
        "rotate(8deg) scale(1.05)";


    /*
       Wait for butterfly
       to reach flower
    */


    setTimeout(
        () => {

            bloomTransition(
                index
            );

        },

        1300
    );

}



/* ==================================================
   BLOOM TRANSITION
================================================== */


function bloomTransition(
    index
) {


    const transition =
        document.getElementById(
            "transition"
        );


    transition.classList.add(
        "active"
    );


    setTimeout(
        () => {

            showSubject(
                index
            );


            transition.classList.remove(
                "active"
            );


        },

        900
    );

}



/* ==================================================
   SHOW SUBJECT
================================================== */


function showSubject(
    index
) {


    const subject =
        portfolio.subjects[index];


    document
        .getElementById(
            "subject-number"
        )
        .textContent =
        `SUBJECT ${String(index + 1).padStart(2, "0")}`;


    document
        .getElementById(
            "subject-title"
        )
        .textContent =
        subject.name;


    document
        .getElementById(
            "subject-description"
        )
        .textContent =
        subject.description;


    document
        .getElementById(
            "subject-experience"
        )
        .textContent =
        subject.experience;


    document
        .getElementById(
            "subject-work"
        )
        .textContent =
        subject.work;


    document
        .getElementById(
            "garden"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "subject-page"
        )
        .classList.remove(
            "hidden"
        );


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );

}



/* ==================================================
   BACK TO GARDEN
================================================== */


document
    .getElementById(
        "back-button"
    )
    .addEventListener(
        "click",
        () => {


            document
                .getElementById(
                    "subject-page"
                )
                .classList.add(
                    "hidden"
                );


            document
                .getElementById(
                    "garden"
                )
                .classList.remove(
                    "hidden"
                );


            butterfly.style.left =
                "46%";


            butterfly.style.top =
                "52%";


            butterfly.style.transform =
                "rotate(0deg) scale(1)";


            window.scrollTo(
                {
                    top: 0,
                    behavior: "smooth"
                }
            );

        }
    );



/* ==================================================
   ABOUT
================================================== */


document
    .getElementById(
        "about-button"
    )
    .addEventListener(
        "click",
        () => {


            document
                .getElementById(
                    "garden"
                )
                .classList.add(
                    "hidden"
                );


            document
                .getElementById(
                    "about-page"
                )
                .classList.remove(
                    "hidden"
                );


            window.scrollTo(
                {
                    top: 0,
                    behavior: "smooth"
                }
            );

        }
    );



/* ==================================================
   CLOSE ABOUT
================================================== */


document
    .getElementById(
        "about-back"
    )
    .addEventListener(
        "click",
        () => {


            document
                .getElementById(
                    "about-page"
                )
                .classList.add(
                    "hidden"
                );


            document
                .getElementById(
                    "garden"
                )
                .classList.remove(
                    "hidden"
                );

        }
    );
