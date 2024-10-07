      const buttonData = {
         "mcb-button1": {
           title: "Analysis and Requirements Division(CBD)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptatem vitae, cupiditate quo cum laboriosam modi doloremque commodi tempore, impedit illo temporibus distinctio dicta minima nostrum nulla reprehenderit recusandae optio?",
           button: {
             text: "Go to CBD",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Chris Howard",
             description: "Division Chief, CBD",
             email: "Christopher.howard.60@us.af.mil",
             link: "mailto:%20Christopher.howard.60@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "Business Systems Management Division(CBS)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptatem vitae, cupiditate quo cum laboriosam modi doloremque commodi tempore, impedit illo temporibus distinctio dicta minima nostrum nulla reprehenderit recusandae optio?",
           button: {
             text: "GO to CBS",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Dan Medina",
             description: "Division Chief, CBS",
             email: "Dan.medina@us.af.mil",
             link: "mailto:%20Dan.medina@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "Business Systems Program Development Division(CBP)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptatem vitae, cupiditate quo cum laboriosam modi doloremque commodi tempore, impedit illo temporibus distinctio dicta minima nostrum nulla reprehenderit recusandae optio?",
           button: {
             text: "Go to CBP",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Reggie Romo",
             description: "Division Chief, CBP",
             email: "Reggie.romo@us.af.mil",
             link: "mailto:%20Reggie.romo@us.af.mil"
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