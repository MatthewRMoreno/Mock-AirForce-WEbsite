      const buttonData = {
         "mcb-button1": {
           title: "Asset Visibilty (COA)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "Tailored training of base personnel pn Asset Mgt applicatoins and procedures, standardize Asset Mgt processes. Validate projects, data and scope, support AFCAMP, IPL and POM builds. Gather lessons learned for best practices and apply them to future training.",
           button: {
             text: "Go to COA",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Mike Clawson",
             description: "Division Chief, COA",
             email: "michael.clawson@us.af.mil",
             link: "mailto:%20michael.clawson@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "Force Development (COF)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "Holistic, learner-centered approach that deliberately connects our Airmen's training, education and experiences throughout their careers to develop the Airmen to succeed. Serves as the foundation of excellence in ensuring the continuos professional development of all personnel assigned to safety staffs and/or supporting safety thoughout the Air Force.",
           button: {
             text: "GO to COF",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "CSMgt Edward C. Fitzgerald",
             description: "Division Chief, COF",
             email: "edward.fitzgerald.2@us.af.mil",
             link: "mailto:%20edward.fitzgerald.2@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "CEMIRT (COM)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "CEMIRT provides Air Force-wide specialized maintenance, installations and repair support on electrical distribution and power generation systems; aircraft arresting systems; industrial control systems; and heating, venitlating and air condition systems during peacetime and emergency response3 operations.",
           button: {
             text: "Go to COM",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Mr. Jeremy Gutierrez",
             description: "Division Chief, COM",
             email: "jeremy.gutierrez.1@us.af.mil",
             link: "mailto:%20jeremy.gutierrez.1@us.af.mil"
           }
         },
         "mcb-button4": {
          title: "Operations Maintenance (COO)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
          description: "COO is responsible for rightsizing the preventuve maintenance program and standardizing operations flight work task priorities to esnure Air Force critical infrastructure remains functional.",
          button: {
            text: "GO to COO",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Lt Col Adam Strecker",
            description: "Division Chief, COO",
            email: "adam.strecker@us.af.mil",
            link: "mailto:%20adam.strecker@us.af.mil"
          }
        },
        "mcb-button5": {
          title: "Engineer (COS)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
          description: "Provide superior technical recommendations, decision, and products with a highly skilled community of people. Influences, deploys, and implements career and manpower management processes used to organize, maintain and equip scientist aand engineer workforce.",
          button: {
            text: "GO to COS",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Mr. Robert Gill",
            description: "Division Chief, COS",
            email: "robert.gill@us.af.mil",
            link: "mailto:%20robert.gill@us.af.mil"
          }
        },
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