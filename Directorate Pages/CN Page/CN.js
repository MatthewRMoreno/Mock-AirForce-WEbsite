      const buttonData = {
         "mcb-button1": {
           title: "Measurement and Analysis (CNA)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "Assist in process analysis, identification of opportunities for process improvement, identification of process standards and benchmarks, and maintenance of guidlines for consistent unit performance measurement and reporting. In-depth analysis of work processes, integrity in measurement methods, timeliness in reporting, and comprehemsive remarks, describing particular unit support issues requiring further analysis.",
           button: {
             text: "Go to CNA",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Deven Volk",
             description: "Division Chief, CNA",
             email: "deven.volk.1@us.af.mil",
             link: "mailto:%20deven.volk.1@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "Program Development (CND)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "Develop, coordinate, and direct specific network defense courses of action (including computer network Defense Response Actions) in support of assigned networks. Monitor operations subject to the provisions of law, executive orders, and applicable presidential directives.",
           button: {
             text: "GO to CND",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Ms. Miranda Brannon",
             description: "Division Chief, CND",
             email: "miranda.brannon.1@us.af.mil",
             link: "mailto:%20miranda.brannon.1@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "Program Execution (CNE)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptatem vitae, cupiditate quo cum laboriosam modi doloremque commodi tempore, impedit illo temporibus distinctio dicta minima nostrum nulla reprehenderit recusandae optio?",
           button: {
             text: "Go to CNE",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Michael Zapata",
             description: "Division Chief, CNE",
             email: "michael.zapata@us.af.mil",
             link: "mailto:%20michael.zapata@us.af.mil"
           }
         },
         "mcb-button4": {
          title: "Business Operations (CNO)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
          description: "Conduct enterprise resource management and support for AF. A multi-functional team that directly serves top leadership and each member of the Center through numerous processes supporting strategic management and alignment of resources for every program.",
          button: {
            text: "Go to CNO",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
            title: "Ms. Marie Finley",
            description: "Division Chief, CNO",
            email: "tenisha.finley@us.af.mil",
            link: "mailto:%20tenisha.finley@us.af.mil"
          }
        },
        "mcb-button5": {
          title: "Advanced Meter Reading Systems (CNP)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
          description: "Utilize software as a basic platform to integrate all metered buildings on base, allowing users to view energy consumption building-by-building in near-real time. This data enables installation engineers to integrate energy conservation measures into daily asset management decisions.",
          button: {
            text: "Go to CNP",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
            title: "Mr. Dan Gerdes",
            description: "Division Chief, CNP",
            email: "daniel.gerdes.1@us.af.mil",
            link: "mailto:%20daniel.gerdes.1@us.af.mil"
          }
        },
        "mcb-button6": {
          title: "Rates & Resilience (CNR)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
          description: "Develop a common operating picture by collecting data, evaluating policies, and examining resources dedicated to resilience programs and services. Recommend solutions allowing leaders to adapt the programs and services that best serve the needs of AF members and families.",
          button: {
            text: "Go to CNR",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
            title: "Ms. Frederick Cade",
            description: "Division Chief, CNR",
            email: "frederick.cade.2@us.af.mil",
            link: "mailto:%20frederick.cade.2@us.af.mil"
          }
        },
        "mcb-button7": {
          title: "Special Programs (CNS)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
          description: "Rapidly execute streamlined demonstrations, development, test, production, fielding, and sustainment of classified weapon systems to maintain the Nation's strike capability in contested environments.",
          button: {
            text: "Go to CNS",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
            title: "Ms. Lucy Notestine",
            description: "Division Chief, CNS",
            email: "lucinda.notestine@us.af.mil",
            link: "mailto:%20lucinda.notestine@us.af.mil"
          }
        },
        "mcb-button8": {
          title: "Advanced Technologies (CNT)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
          description: "Provide rapid response solutions, mitigating the sustainment challenges faced today and into the future. Engineers and operators collaborate and integrate great ideas with tehcnology, accelerating processes and improving weapon system readiness.",
          button: {
            text: "Go to CNT",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
            title: "Dr. Richard Hartman",
            description: "Division Chief, CNT",
            email: "richard.hartman@us.af.mil",
            link: "mailto:%20richard.hartman@us.af.mil"
          }
        }
       };
     
       // Add event listeners to each button
       document.getElementById("mcb-button1").addEventListener("click", () => {
         event.preventDefault();
         updateBox(buttonData["mcb-button1"]);
       });
     
       document.getElementById("mcb-button2").addEventListener("click", () => {
         event.preventDefault();
         updateBox(buttonData["mcb-button2"]);
       });
     
       document.getElementById("mcb-button3").addEventListener("click", () => {
         event.preventDefault();
         updateBox(buttonData["mcb-button3"]);
       });

       document.getElementById("mcb-button4").addEventListener("click", () => {
        event.preventDefault();
        updateBox(buttonData["mcb-button4"]);
      });
    
      document.getElementById("mcb-button5").addEventListener("click", () => {
        event.preventDefault();
        updateBox(buttonData["mcb-button5"]);
      });
    
      document.getElementById("mcb-button6").addEventListener("click", () => {
        event.preventDefault();
        updateBox(buttonData["mcb-button6"]);
      });

      document.getElementById("mcb-button7").addEventListener("click", () => {
        event.preventDefault();
        updateBox(buttonData["mcb-button7"]);
      });
    
      document.getElementById("mcb-button8").addEventListener("click", () => {
        event.preventDefault();
        updateBox(buttonData["mcb-button8"]);
      });
     
     
       // Update the box with the data for the selected button
       function updateBox(data) {
         const titleEl = document.getElementById("mcb-title");
         const descriptionEl = document.getElementById("mcb-description");
         const imageEl = document.getElementById("mcb-image");
         const buttonEl = document.getElementById("mcb-button");
     
         const greyImage = document.querySelector(".grey-leader-image");
         const greyTitle = document.querySelector(".grey-leader-title");
         const greyDescription = document.querySelector(".grey-leader-description");
         const greyEmail = document.querySelector(".grey-leader-email");
         const greyBox = document.querySelector(".grey-rectangle");
     
     
         // fade out the title, description, and image elements
         titleEl.style.opacity = "0";
         descriptionEl.style.opacity = "0";
         imageEl.style.opacity = "0";
         buttonEl.style.opacity = "0";
     
         greyImage.style.opacity = "0";
         greyTitle.style.opacity = "0";
         greyDescription.style.opacity = "0";
         greyEmail.style.opacity = "0";
         greyBox.style.opacity = "0";
     
     
         // after a delay, update the title, description, and image elements
         setTimeout(() => {
           titleEl.innerText = data.title;
           descriptionEl.innerText = data.description;
           imageEl.src = data.image;
           buttonEl.innerText = data.button.text;
           buttonEl.href = data.button.link;
     
           greyImage.src = data.grey.image;
           greyTitle.innerText = data.grey.title;
           greyDescription.innerText = data.grey.description;
           greyEmail.innerText = data.grey.email;
           greyEmail.href = data.grey.link;
     
           // fade in the title, description, and image elements
           titleEl.style.opacity = "1";
           descriptionEl.style.opacity = "1";
           imageEl.style.opacity = "1";
           buttonEl.style.opacity = "1";
     
           greyImage.style.opacity = "1";
           greyTitle.style.opacity = "1";
           greyDescription.style.opacity = "1";
           greyEmail.style.opacity = "1";
           greyBox.style.opacity = "1";
         }, 500);
       }