const buttonData = {
    "mcb-button1": {
      title: "Disaster Recovery (CFD)",
      image: "CF-images/trigiga.png",
      description: "The AFCEC Facilities Directorate is a key enabler for the United States National Defense Strategy. We serve to design and construct Built Infrastructure which provides the power projection platforms for Air and Space Operations. We oversee DoD and Air Force facilities criteria development while leveraging data-driven business practices to efficiently field construction materials and services. We deliver safe, quality design and construction results, within effectively communicated time and cost parameters, through a diverse staff of military, civilian and contracted team members.",
      button: {
        text: "Go to CFD",
        link: "enter the link path here"
      },
      grey: {
        image: "CF-images/rob-bartlow-small.png",
        title: "Col Rob Bartlow",
        description: "Division Chief, CFD",
        email: "Rob.Bartlow@us.af.mil",
        link: "mailto:%20Rob.Bartlow@us.af.mil"
      }
    },
    "mcb-button2": {
      title: "CONUS MILCON (CFM)",
      image: "CF-images/trigiga.png",
      description: "The Business Systems Management Division is primarily responsible for coordinating and implementing the Civil Engineer Enterprise IT Governance process. It addresses operational and functional requirements effectively, ensuring efficient data management across AFCEC. Personnel oversee multiple information management systems, including AFGIMS, EODIMS, AFCEC Administrative Record, ERPIMS, and IIT. Additionally, the division assumes responsibility for the Air Force CE Portal and AFCEC SharePoint solutions, providing oversight and hosting services.",
      button: {
        text: "GO to CFM",
        link: "enter the link path here"
      },
      grey: {
        image: "CF-images/mike-prazak-small.png",
        title: "Mr. Mike Prazak",
        description: "Division Chief, CFM",
        email: "Dan.medina@us.af.mil",
        link: "mailto:%20Dan.medina@us.af.mil"
      }
    },
    "mcb-button3": {
      title: "Nuclear Enterprise (CFN)",
      image: "CF-images/trigiga.png",
      description: "The Business Systems Program Development Division administers Civil Engineer IT requirements within AFCEC. It oversees the organization IT portfolio, manages CE IT functional requirements, system configuration, training, and ensures compliance with IT FIAR standards. The division leads stakeholder engagement for deploying the NexGen IT program, serving as the Authorizing Official Representative for CE Control Systems. CBP personnel support CE IT strategy development, aligning it with the Air Force intent and enhancing mission readiness.",
      button: {
        text: "Go to CFN",
        link: "enter the link path here"
      },
      grey: {
        image: "CF-images/chris-stoppel-small.png",
        title: "Col Chris Stoppel",
        description: "Division Chief, CFN",
        email: "Reggie.romo@us.af.mil",
        link: "mailto:%20Reggie.romo@us.af.mil"
      }
    },
    "mcb-button4": {
        title: "Strategic Design & Construction (CFS)",
        image: "CF-images/trigiga.png",
        description: "The Business Systems Program Development Division administers Civil Engineer IT requirements within AFCEC. It oversees the organization IT portfolio, manages CE IT functional requirements, system configuration, training, and ensures compliance with IT FIAR standards. The division leads stakeholder engagement for deploying the NexGen IT program, serving as the Authorizing Official Representative for CE Control Systems. CBP personnel support CE IT strategy development, aligning it with the Air Force intent and enhancing mission readiness.",
        button: {
          text: "Go to CFS",
          link: "enter the link path here"
        },
        grey: {
          image: "CF-images/george-nichols-small.png",
          title: "Col George Nichols",
          description: "Division Chief",
          email: "Rob.Bartlow@us.af.mil",
          link: "mailto:%20Rob.Bartlow@us.af.mil"
        }
      },
      "mcb-button5": {
        title: "Technical Services (CFT)",
        image: "CF-images/trigiga.png",
        description: "The Business Systems Program Development Division administers Civil Engineer IT requirements within AFCEC. It oversees the organization IT portfolio, manages CE IT functional requirements, system configuration, training, and ensures compliance with IT FIAR standards. The division leads stakeholder engagement for deploying the NexGen IT program, serving as the Authorizing Official Representative for CE Control Systems. CBP personnel support CE IT strategy development, aligning it with the Air Force intent and enhancing mission readiness.",
        button: {
          text: "Go to CFT",
          link: "enter the link path here"
        },
        grey: {
          image: "CF-images/tim-sullivan-small.png",
          title: "Dr. Tim Sullivan",
          description: "Division Chief, CFT",
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