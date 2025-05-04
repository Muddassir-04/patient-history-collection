// Function to gather data and download as a text file
function downloadData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const residence = document.getElementById('residence').value;
  const admission = document.getElementById('admission').value;
  const informant = document.getElementById('informant').value;
  const caretaker = document.getElementById('caretaker').value;

  const checkedComplaints = Array.from(document.querySelectorAll('input[name="complaint"]:checked'))
    .map(el => el.value);
  const otherComplaint = document.getElementById('otherComplaint').value;
  if (otherComplaint) checkedComplaints.push(otherComplaint);

  const illnessDetails = document.getElementById('illnessDetails').value;
  const similarIllness = document.getElementById('similarIllness').value || 'Not specified';
  const surgeries = document.getElementById('surgeries').value || 'Not specified';
  const bloodTransfusion = document.getElementById('bloodTransfusion').value || 'Not specified';
  const allergies = document.getElementById('allergies').value || 'None';
  const otherPastIssues = document.getElementById('otherPastIssues').value || 'None';

  const antenatalVisits = document.getElementById('antenatalVisits').value || 'Not specified';
  const maternalIllness = document.getElementById('maternalIllness').value || 'None';
  const antenatalDrugs = document.getElementById('antenatalDrugs').value || 'None';
  const deliveryPlace = document.getElementById('deliveryPlace').value || 'Not specified';
  const deliveryType = document.getElementById('deliveryType').value || 'Not specified';
  const birthWeight = document.getElementById('birthWeight').value || 'Not specified';
  const anyComplications = document.getElementById('anyComplications').value || 'None';

  const breastfeeding = document.getElementById('breastfeeding').value;
  const topFeeding = document.getElementById('topFeeding').value || 'Not specified';
  const weaningAge = document.getElementById('weaningAge').value || 'Not specified';
  const currentDiet = document.getElementById('currentDiet').value || 'Not specified';

  const immunizationStatus = document.getElementById('immunizationStatus').value;
  const missingVaccines = document.getElementById('missingVaccines').value;
  const adverseEvents = document.getElementById('adverseEvents').value;

  const milestones = document.getElementById('milestones').value;
  const delayedMilestones = document.getElementById('delayedMilestones').value;
  const currentDevelopment = document.getElementById('currentDevelopment').value;

  const familyMembersIll = document.getElementById('familyMembersIll').value;
  const hereditaryConditions = document.getElementById('hereditaryConditions').value;
  const familyStructure = document.getElementById('familyStructure').value;
  const numberOfSiblings = document.getElementById('numberOfSiblings').value;

  const fatherOccupation = document.getElementById('fatherOccupation').value || 'Not specified';
  const motherOccupation = document.getElementById('motherOccupation').value || 'Not specified';
  const educationLevel = document.getElementById('educationLevel').value || 'Not specified';
  const monthlyIncome = document.getElementById('monthlyIncome').value || 'Not specified';
  const housingType = document.getElementById('housingType').value || 'Not specified';
  const waterSupply = document.getElementById('waterSupply').value || 'Not specified';
  const toiletFacility = document.getElementById('toiletFacility').value || 'Not specified';
  const electricityAvailable = document.getElementById('electricityAvailable').value || 'Not specified';
  const socialSupport = document.getElementById('socialSupport').value || 'Not specified';

  const data = `
=== Patient Profile ===
Name: ${name}
Age: ${age}
Area of Residence: ${residence}
Date of Admission: ${admission}
Informant: ${informant}
Care taken by: ${caretaker}

=== Chief Complaints ===
${checkedComplaints.join(', ') || 'None'}

=== History of Present Illness ===
${illnessDetails || 'Not provided'}

=== Past History ===
Similar illness in past: ${similarIllness}
Surgeries: ${surgeries}
Blood transfusion: ${bloodTransfusion}
Allergies: ${allergies}
Other past issues: ${otherPastIssues}

=== Antenatal and Birth History ===
Regular antenatal visits: ${antenatalVisits}
Maternal illness during pregnancy: ${maternalIllness}
Drugs taken during pregnancy: ${antenatalDrugs}
Place of delivery: ${deliveryPlace}
Type of delivery: ${deliveryType}
Birth weight: ${birthWeight} kg
Complications at birth: ${anyComplications}

=== Feeding History ===
Breastfeeding: ${breastfeeding}
Top Feeding: ${topFeeding}
Weaning started at: ${weaningAge} months
Current Diet: ${currentDiet}

=== Immunization History ===
Immunization Status: ${immunizationStatus}
Missing Vaccines: ${missingVaccines}
Adverse Events: ${adverseEvents}

=== Developmental History ===
Milestones on time: ${milestones}
Delayed Milestones: ${delayedMilestones}
Current Developmental Concerns: ${currentDevelopment}

=== Family History ===
Similar Illness in Family: ${familyMembersIll}
Hereditary Conditions: ${hereditaryConditions}
Family Structure: ${familyStructure}
Number of Siblings: ${numberOfSiblings}

=== Socioeconomic History ===
Father's Occupation: ${fatherOccupation}
Mother's Occupation: ${motherOccupation}
Parental Education Level: ${educationLevel}
Monthly Family Income: ${monthlyIncome}
Type of Housing: ${housingType}
Water Supply: ${waterSupply}
Toilet Facility: ${toiletFacility}
Electricity Available: ${electricityAvailable}
Social Support: ${socialSupport}

`;

  const blob = new Blob([data], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'patient_history.txt';
  link.click();
}
