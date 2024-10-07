      const buttonData = {
         "mcb-button1": {
           title: "Air Force Augmentation Program (CXAA)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "Develop, keep viable, operate and optimize a world-class contingency contract tool to leverage force multiplying capabilities from the private sector in meeting Air Force and National Command Authority contingent mission objectives worldwide.",
           button: {
             text: "Go to CXAA",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Wayland Patterson",
             description: "Branch Chief, CXAA",
             email: "wayland.patterson@us.af.mil",
             link: "mailto:%20wayland.patterson@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "Airbase Technologies (CXAE)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "Lead and manage science, technology, research, development, testing, evaluation (RDT&E) and aquisition activities from planing through executing of programs for aquiring systems, equipment, technology, and data to fulfill CE operational needs and requirements for in-garrison, expeditionary, and contingency installations and air bases.",
           button: {
             text: "GO to CXAE",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Brian Skibba",
             description: "Branch Chief, CXAE",
             email: "brian.skibba.1@us.af.mil",
             link: "mailto:%20brian.skibba.1@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "Capability Requirements (CXAR)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "Derive Civil Engineer capability requirements",
           button: {
             text: "Go to CXAR",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Kenneth Knox",
             description: "Branch Chief, CXAR",
             email: "kenneth.knox.6@us.af.mil",
             link: "mailto:%20kenneth.knox.6@us.af.mil"
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