      const tabbedData = {
         "cf-item1": {
           tabInfo: "-Integrated Infrastructure Investment Requirements (I3RP) Planning\n-Built Infrastructure Investment (BII) & Recapitalization\n-Environmental Compliance & Restoration (ECR)\n-Energy Assurance (EA)\n-Real Property and Real Estate Portfolio Management (RP/REPM)\n-CE Enterprise Health Assessment (CE2HA)\n-Integrated Base Response and Recovery (IBRR)",
         },
         "cf-item2": {
           tabInfo: "Core Capability Champion: AF​CEC/CF Director\n\nCore Capability: Provide DA/CA and Design Manager/Construction Manager (DM/CM) capabilities through scalable delivery of integrated Built Infrastructure programs including MILCON and FSRM, technical services, Natural Disaster Recovery (NDR), and nuclear enterprise programs\n\nCritical Responsibilities:\n\n-Military Construction for Air and Space Forces. Manage FSRM and MILCON Design, Construction, and Project Management (CF)\n-Technical Expertise, Data-informed Common Operating Picture, Unified DoD Design Criteria & Specs (CF)\n-Reconstruct Installations after Natural Disaster or Attack (CF)",
         },
         "cf-item3": {
           tabInfo: "-Deliver facility and infrastructure programs, on time and on budget, to enable commanders to increase lethality and modernize infrastructure\n-Improve Program Performance and Technical Support to Installations\n-Develop Exceptional Engineers, Leaders and Followers\n-Strengthen stakeholder partnerships and develop new alliances\n-Ensure CF is organized and resourced to meet current and future mission requirements",
         },
         "cf-item4": {
          tabInfo: "1. Manpower\n2. Program & Project Manager Proficiency\n3. BI COP Update",
        }
       };
     
       // Add event listeners to each button
       document.getElementById("cf-item1").addEventListener("click", () => {
         event.preventDefault();
         updateTabs(tabbedData["cf-item1"]);
       });
     
       document.getElementById("cf-item2").addEventListener("click", () => {
         event.preventDefault();
         updateTabs(tabbedData["cf-item2"]);
       });
     
       document.getElementById("cf-item3").addEventListener("click", () => {
         event.preventDefault();
         updateTabs(tabbedData["cf-item3"]);
       });

       document.getElementById("cf-item4").addEventListener("click", () => {
        event.preventDefault();
        updateTabs(tabbedData["cf-item4"]);
      });
     
     
       // Update the box with the data for the selected button
       function updateTabs(data) {
         const updateInfo = document.getElementById("tab-content");

     
         // fade out the title, description, and image elements
         updateInfo.style.opacity = "0";
     

         // after a delay, update the title, description, and image elements
         setTimeout(() => {
           updateInfo.innerText = data.tabInfo;
     
           // fade in the title, description, and image elements
           updateInfo.style.opacity = "1";
         }, 100);
       }

       //Flip the arrow on click
       document.querySelector('#cf-item1').addEventListener('click', ()=> {
        document.querySelector('#arrow1').classList.add('flip-arrow');
        document.querySelector('#arrow2').classList.remove('flip-arrow');
        document.querySelector('#arrow3').classList.remove('flip-arrow');
        document.querySelector('#arrow4').classList.remove('flip-arrow');
       })
       document.querySelector('#cf-item2').addEventListener('click', ()=> {
        document.querySelector('#arrow2').classList.add('flip-arrow');
        document.querySelector('#arrow1').classList.remove('flip-arrow');
        document.querySelector('#arrow3').classList.remove('flip-arrow');
        document.querySelector('#arrow4').classList.remove('flip-arrow');
       })
       document.querySelector('#cf-item3').addEventListener('click', ()=> {
        document.querySelector('#arrow3').classList.add('flip-arrow');
        document.querySelector('#arrow1').classList.remove('flip-arrow');
        document.querySelector('#arrow2').classList.remove('flip-arrow');
        document.querySelector('#arrow4').classList.remove('flip-arrow');
       })
       document.querySelector('#cf-item4').addEventListener('click', ()=> {
        document.querySelector('#arrow4').classList.add('flip-arrow');
        document.querySelector('#arrow3').classList.remove('flip-arrow');
        document.querySelector('#arrow2').classList.remove('flip-arrow');
        document.querySelector('#arrow1').classList.remove('flip-arrow');
       })