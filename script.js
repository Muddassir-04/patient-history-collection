// script.js

// Function to toggle the visibility of a section's content
function toggleSection(sectionId) {
  const content = document.getElementById(sectionId);
  const header = content.previousElementSibling; // Get the section header
  const isOpen = content.classList.contains("open");

  if (isOpen) {
    content.classList.remove("open");
    header.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    header.classList.remove("active");
  } else {
    content.classList.add("open");
    content.style.display = "block"; // Ensure display is block when opening
    header.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "false");
    header.classList.add("active");
  }
}

// Function to collect form data and download it as a JSON file
function downloadData() {
  // Collect data from all form fields
  const formData = {
    patientProfile: {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      residence: document.getElementById("residence").value,
      admission: document.getElementById("admission").value,
      informant: document.getElementById("informant").value,
      caretaker: document.getElementById("caretaker").value,
    },
    chiefComplaints: {
      complaints: Array.from(document.querySelectorAll('input[name="complaint"]:checked')).map(
        (checkbox) => checkbox.value
      ),
      otherComplaint: document.getElementById("otherComplaint").value,
    },
    illnessHistory: {
      illnessDetails: document.getElementById("illnessDetails").value,
    },
    pastHistory: {
      similarIllness: document.getElementById("similarIllness").value,
      surgeries: document.getElementById("surgeries").value,
      bloodTransfusion: document.getElementById("bloodTransfusion").value,
      allergies: document.getElementById("allergies").value,
      otherPastIssues: document.getElementById("otherPastIssues").value,
    },
    antenatalBirth: {
      antenatalVisits: document.getElementById("antenatalVisits").value,
      maternalIllness: document.getElementById("maternalIllness").value,
      antenatalDrugs: document.getElementById("antenatalDrugs").value,
      deliveryPlace: document.getElementById("deliveryPlace").value,
      deliveryType: document.getElementById("deliveryType").value,
      birthWeight: document.getElementById("birthWeight").value,
      anyComplications: document.getElementById("anyComplications").value,
    },
    feedingHistory: {
      breastfeeding: document.getElementById("breastfeeding").value,
      topFeeding: document.getElementById("topFeeding").value,
      weaningAge: document.getElementById("weaningAge").value,
      currentDiet: document.getElementById("currentDiet").value,
    },
    immunizationHistory: {
      immunizationStatus: document.getElementById("immunizationStatus").value,
      missingVaccines: document.getElementById("missingVaccines").value,
      adverseEvents: document.getElementById("adverseEvents").value,
    },
    developmentalHistory: {
      milestones: document.getElementById("milestones").value,
      delayedMilestones: document.getElementById("delayedMilestones").value,
      currentDevelopment: document.getElementById("currentDevelopment").value,
    },
    familyHistory: {
      familyMembersIll: document.getElementById("familyMembersIll").value,
      hereditaryConditions: document.getElementById("hereditaryConditions").value,
      familyStructure: document.getElementById("familyStructure").value,
      numberOfSiblings: document.getElementById("numberOfSiblings").value,
    },
    socioeconomicHistory: {
      parentEducation: document.getElementById("parentEducation").value,
      parentOccupation: document.getElementById("parentOccupation").value,
      incomeLevel: document.getElementById("incomeLevel").value,
      housingType: document.getElementById("housingType").value,
      waterSource: document.getElementById("waterSource").value,
      sanitation: document.getElementById("sanitation").value,
    },
  };

  // Convert form data to JSON string
  const jsonData = JSON.stringify(formData, null, 2);

  // Create a downloadable file
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "patient_history.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}