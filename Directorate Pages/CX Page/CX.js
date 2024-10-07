      const buttonData = {
         "mcb-button1": {
           title: "Requirements & Acquisition (CXA)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "Derive Requirements, develop material solutions and provide contingency support to enable the Air Force Engineer mission. Operate and optimize a world-class contingency contract tool to leverage force multiplying capabilities from the private sector in meeting Air Force and National Command Authority contingent mission objectives worldwide.",
           button: {
             text: "Go to CXA",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Craig Mellerski",
             description: "Division Chief, CXA",
             email: "craig.mellerski@us.af.mil",
             link: "mailto:%20robert.mellerski@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "Explosive Ordinance Disposal (CXD)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "Detect, identify, recover, disarm and dispose of unsafe explosives and ordnance Conduct nuclear weapon response Analyze unknown munitions and explosives for intellegence agencies. Conduct demolition of hazardous munitions, pyrotechnics, and retrograde explosies using detonation and burning techniques.",
           button: {
             text: "GO to CXD",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Lt Col Peter Choi",
             description: "Division Chief, CXD",
             email: "peter.choi@us.af.mil",
             link: "mailto:%20peter.choi@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "Joint EOD Technology (CXE)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "CXE provides Air force representatoin within the all-services Department of Defense EOD technology program. The division develops and approves joint EOD specialized tools, equipment, procedures and technical data for EOD use.",
           button: {
             text: "Go to CXE",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Capt Mark Elliott",
             description: "Division Chief, CXE",
             email: "mark.elliot@us.af.mil",
             link: "mailto:%20mark.elliot@us.af.mil"
           }
         },
         "mcb-button4": {
          title: "Fire Emergency Services (CXF)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
          description: "CXF asssists USAF/A7CXR staff in the development of policy providing functional oversight; provides technical services to the major commands and basenFES personnel; advocates for resources; develops plans and programs to facilitate policy execution; and centrally manages procurement of AF-wide FES purchases.",
          button: {
            text: "Go to CXF",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Mr. Robin Shaw",
            description: "Division Chief, CXF",
            email: "robin.shaw.1@us.af.mil",
            link: "mailto:%20robin.shaw.1@us.af.mil"
          }
        },
        "mcb-button5": {
          title: "Emergency Management (CXR)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
          description: "Provides the AF with an incident management system that is consisted with multiple, broad approach to domestic incident management while remaining flexible to the military unique mission requirements.",
          button: {
            text: "Go to CXR",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Mr. Mike Connors",
            description: "Division Chief, CXR",
            email: "harley.connors.1@us.af.mil",
            link: "mailto:%20harley.connors.1@us.af.mil"
          }
        },
        "mcb-button6": {
          title: "Expeditionary Engineering (CXX)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
          description: "Provides direct oversight of the organizing, training, and equipping of the AF RED HORSE program. Implements force structure plans, policies and programs including Unit Type Code development and deployment planning in accordance with AFI.",
          button: {
            text: "Go to CXX",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Lt Col Khary Davis",
            description: "Division Chief, CXX",
            email: "khary.davis@us.af.mil",
            link: "mailto:%20khary.davis@us.af.mil"
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