      const buttonData = {
         "mcb-button1": {
           title: "BRAC Program Management (CIB)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/analysis-division-picture.png",
           description: "The Department of the Navy Base Realignment and Closure (BRAC) Program Management Office (PMO) is responsible for\: Serving as the primary liaison with localcommunities and redevelopment authorities; Overseeing all base closure, realignment, and care taker activities; Developing and implementing plans, priorities, and procedures for base disposals and their associated environmental cleanups",
           button: {
             text: "Go to CIB",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/Chris-Howard-picture.png",
             title: "Mr. Greg Gangnuss",
             description: "Division Chief, CIB",
             email: "Christopher.howard.60@us.af.mil",
             link: "mailto:%20Christopher.howard.60@us.af.mil"
           }
         },
         "mcb-button2": {
           title: "Air Force Housing (CIM)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-systems-picture.png",
           description: "The Housing Management Division (AFCEC/CIM) is respondible for providing centralized comprehensive Air Force management of military family housing (MFH), unaccompanied housing, privatized housing (PH), leased housing, general officer quarters, housing referral and relocation sevices furnishings management to meet the housing needs of both accompanied and unaccompanied Airmen at over 100 installations.",
           button: {
             text: "GO to CIM",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Col Jimmy Jeoun",
             description: "Division Chief, CIM",
             email: "Dan.medina@us.af.mil",
             link: "mailto:%20Dan.medina@us.af.mil"
           }
         },
         "mcb-button3": {
           title: "Real Property Management (CIT)",
           image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
           description: "AFCEC/CIT serves as the leading provider of full-spectrum real property portfolio management and transactional services to Air Force warfighters and leadership including\:\n- 189 active duty installations\n\t- 1,627 geographically seperated sites\n\t- more than 9 million acre portfolio\n\t- more than 623 million square feet structures.",
           button: {
             text: "Go to CIT",
             link: "enter the link path here"
           },
           grey: {
             image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
             title: "Ms. Judi Tepperman",
             description: "Division Chief, CIT",
             email: "Reggie.romo@us.af.mil",
             link: "mailto:%20Reggie.romo@us.af.mil"
           }
         },
         "mcb-button4": {
          title: "Real Estate Development (CIU)",
          image: "/teams/afcec-portal/PublishingImages/Divisions/CB/business-program-picture.png",
          description: "The Real Estate Development Division is charged with identifying and developing real property value-based transactions. The division forms long-term collaborative efforts with private industry to develop projects that provide economic benefit and foster stronger relations with local communities. Responsibilities include utilities privitization, Enhanced Use Leases and Readiness Environmental Protection Integration (REPI). The division also provides sustained, full-spectrum management of real property value-based portfolio projects at all levels, and ensures lease compliance for value-based transactions and project financials analysis and monitoring.",
          button: {
            text: "Go to CIU",
            link: "enter the link path here"
          },
          grey: {
            image: "/teams/afcec-portal/PublishingImages/Divisions/CB/person-placeholder.png",
            title: "Ms. Debra Harkiewicz",
            description: "Division Chief, CIU",
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