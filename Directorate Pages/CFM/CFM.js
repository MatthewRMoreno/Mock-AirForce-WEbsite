      const buttonData = {
         "mcb-button1": {
           title: "CFMA",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, hic facere error voluptatibus itaque eligendi tempore modi ipsa, tenetur veniam magni nam vero! Quae laboriosam quasi quam non sed.",
           button: {
             text: "Go to CFMA",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Tom Hodges",
             description: "Branch Chief, CFMA",
             email: "tim.hodges@us.af.mil",
             link: "mailto:%20tim.hodges@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "CFMB",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, hic facere error voluptatibus itaque eligendi tempore modi ipsa, tenetur veniam magni nam vero! Quae laboriosam quasi quam non sed.",
           button: {
             text: "GO to CFMB",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Eric Bowden",
             description: "Branch Chief, CFMB",
             email: "eric.bowden@us.af.mil",
             link: "mailto:%20eric.bowden@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "CFMC",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, hic facere error voluptatibus itaque eligendi tempore modi ipsa, tenetur veniam magni nam vero! Quae laboriosam quasi quam non sed.",
           button: {
             text: "Go to CFMC",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Paul Womble",
             description: "Branch Chief, CFMC",
             email: "paul.womble@us.af.mil",
             link: "mailto:%20paul.womble@us.af.mil"
           }
         },
         "mcb-button4": {
          title: "CFMD",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam, hic facere error voluptatibus itaque eligendi tempore modi ipsa, tenetur veniam magni nam vero! Quae laboriosam quasi quam non sed.",
          button: {
            text: "Go to CFMD",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Mr. John Ahem",
            description: "Branch Chief, CFMD",
            email: "john.ahem@us.af.mil",
            link: "mailto:%20john.ahem@us.af.mil"
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