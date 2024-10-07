// const accordion = document.querySelector(".division-accordion");

// accordion.addEventListener("click", (e) => {
//     const activePanel = e.target.closest(".division-accordion-panel");
//     if (!activePanel) return;
//     toggleAccordion(activePanel);
// });

// function toggleAccordion(panelToActivate) {
//     const buttons = panelToActivate.parentElement.querySelectorAll(".division-accordion-trigger");
//     const contents = panelToActivate.parentElement.querySelectorAll(".division-accordion-content");

//     buttons.forEach((button) => {
//         button.setAttribute('aria-expanded', 'false');
//     });

//     buttons.forEach((content) => {
//         content.setAttribute('aria-hidden', 'true');
//     });

//     panelToActivate
//     .querySelector('.division-accordion-trigger')
//     .setAttribute('aria-expanded', 'true');

//     panelToActivate
//     .querySelector('.division-accordion-content')
//     .setAttribute('aria-hidden', 'false');
// }

// JS for the new divisions section
// Define the data for each button
const buttonData = {
    "mcb-button1": {
      title: "Analysis and Requirements Division(CBD)",
      image: "photos/analysis-division-picture.png",
      description: "The Analysis and Requirements Division plays a crucial role in AFCEC's programs. It manages the organization's workflow, administers knowledge management programs, ensures records management compliance, provides guidance on the Privacy Act, oversees critical programs like inspections and emergency management, and delivers manpower support through HR functions and unit training. It contributes to AFCEC's operations through process improvement, strategic communication, and corporate development.",
      button: {
        text: "Go to CBD",
        link: "enter the link path here"
      },
      grey: {
        image: "photos/Chris-Howard-picture.png",
        title: "Mr. Chris Howard",
        description: "Division Chief, CBD",
        email: "Christopher.howard.60@us.af.mil",
        link: "mailto:%20Christopher.howard.60@us.af.mil"
      }
    },
    "mcb-button2": {
      title: "Business Systems Management Division(CBS)",
      image: "photos/business-systems-picture.png",
      description: "The Business Systems Management Division is primarily responsible for coordinating and implementing the Civil Engineer Enterprise IT Governance process. It addresses operational and functional requirements effectively, ensuring efficient data management across AFCEC. Personnel oversee multiple information management systems, including AFGIMS, EODIMS, AFCEC Administrative Record, ERPIMS, and IIT. Additionally, the division assumes responsibility for the Air Force CE Portal and AFCEC SharePoint solutions, providing oversight and hosting services.",
      button: {
        text: "GO to CBS",
        link: "enter the link path here"
      },
      grey: {
        image: "photos/Chris-Howard-picture.png",
        title: "Mr. Dan Medina",
        description: "Division Chief, CBS",
        email: "Dan.medina@us.af.mil",
        link: "mailto:%20Dan.medina@us.af.mil"
      }
    },
    "mcb-button3": {
      title: "Business Systems Program Development Division(CBP)",
      image: "photos/business-program-picture.png",
      description: "The Business Systems Program Development Division administers Civil Engineer IT requirements within AFCEC. It oversees the organization IT portfolio, manages CE IT functional requirements, system configuration, training, and ensures compliance with IT FIAR standards. The division leads stakeholder engagement for deploying the NexGen IT program, serving as the Authorizing Official Representative for CE Control Systems. CBP personnel support CE IT strategy development, aligning it with the Air Force intent and enhancing mission readiness.",
      button: {
        text: "Go to CBP",
        link: "enter the link path here"
      },
      grey: {
        image: "photos/Chris-Howard-picture.png",
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