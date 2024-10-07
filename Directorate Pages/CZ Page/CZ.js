      const buttonData = {
         "mcb-button1": {
           title: "Compliance Program Management (CZC)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "The Compliance division provides Headquarters Air Force (HAF), Major Commands (MAJCOMs), and installations with environmental compliance support. The division delivers the compliance programming and execution expertise, environmental reporting and analysis, core knowledge, and leadership required to ensure Air Force installations comply with environmental regulatory programs related to air quality, water quality, hazardous waste generation, and natural and cultural resource managements.",
           button: {
             text: "Go to CZC",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Dale Clark",
             description: "Division Chief, CZC",
             email: "john.clark.7@us.af.mil",
             link: "mailto:%20john.clark.7@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "National Environmental Policy Act Division (CZN)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "The National Environmental Policy Act (NEPA) Division executes all Air Force activites pertaining to the Environmental Impact Analysis Process (EIAP) to ensure environmental considerations are factored into proposed Air Force activities.",
           button: {
             text: "GO to CZN",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Ms. Melissa Markell",
             description: "Division Chief, CZN",
             email: "melissa.markell@us.af.mil",
             link: "mailto:%20melissa.markell@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "Operations Division (CZO)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "The Operations division is organized in alignment with 20 sections directly supporting installations located in the continental United States, Alaska, the Pacific, and Europe. The division provides direct installation support by planning and programming requirements, developing permits and plans, and executing projects. The sections of each branch serve as installation advocates and are the office of primary responsibility for execution, addressing regional issues, or leading regional enterprise initiatives. Sections also develop, acquire, and oversee contracts in their regions.",
           button: {
             text: "Go to CZO",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Ben Kindt",
             description: "Division Chief, CZO",
             email: "benjamin.kidt.1@us.af.mil",
             link: "mailto:%20benjamin.kidt.1@us.af.mil"
           }
         },
         "mcb-button4": {
          title: "Legislative and Regulatory Engagement Division (CZP)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
          description: "The Legislative and Regulatory Engagement Division (AFCEC/CZP) is specifically tasked to interface with stakeholders adn regulatory agencies on impacts to the Department of Defense (DoD) and Air Force mission.",
          button: {
            text: "Go to CZP",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
            title: "Mr. Rob Backlund",
            description: "Division Chief, CZP",
            email: "robert.backlund@us.af.mil",
            link: "mailto:%20robert.backlund@us.af.mil"
          }
        },
        "mcb-button5": {
          title: "Restoration Division (CZR)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
          description: "The Environmental Restoration Division provides Headquarters Air Force, Environmental Management Directorate, major commands, and installations (active and Base Realignment and Closure [BRAC]) with environmental remediation support. The division provides the restoration programming and execution expertise, core knowledge, and leadership required to transform Air Force environmental liabilities into operational assets.Initiatives include remedial process optimizatoin, performance-based management, and technology transfer.",
          button: {
            text: "GO to CZR",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Mr. Kenny Johnson",
            description: "Division Chief, CZR",
            email: "kenny.johnson@us.af.mil",
            link: "mailto:%20kenny.johnson@us.af.mil@us.af.mil"
          }
        },
        "mcb-button6": {
          title: "Technical Support Division (CZT)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
          description: "The Tehcnical Support Division contains the Air Force technical and regulatory subject matter experts for most Air Force environmental programs. CZT offers technical ecpertise and consultatoin services in environmental chemistry, hydrogenology, risk assessment, toxicology, remedial engineering, air and water program compliance, natural and cultural resource management, and regulatory criteria.",
          button: {
            text: "Go to CZT",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Dr. G. Cornell Long",
            description: "Division Chief, CZT",
            email: "guy.long@us.af.mil",
            link: "mailto:%20guy.long@us.af.mil"
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