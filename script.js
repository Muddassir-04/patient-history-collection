function downloadData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const residence = document.getElementById('residence').value;
  const admission = document.getElementById('admission').value;
  const informant = document.getElementById('informant').value;
  const caretaker = document.getElementById('caretaker').value;

  const checkedComplaints = Array.from(document.querySelectorAll('input[name="complaint"]:checked')).map(el => el.value);
  const otherComplaint = document.getElementById('otherComplaint').value;
  if (otherComplaint) checkedComplaints.push(otherComplaint);

  const illnessDetails = document.getElementById('illnessDetails').value;
  const similarIllness = document.getElementById('similarIllness').value;
  const surgeries = document.getElementById('surgeries').value;
  const bloodTransfusion = document.getElementById('bloodTransfusion').value;
  const allergies = document.getElementById('allergies').value;
  const otherPastIssues = document.getElementById('otherPastIssues').value;

  const antenatalVisits = document.getElementById('antenatalVisits').value;
  const maternalIllness = document.getElementById('maternalIllness').value;
  const antenatalDrugs = document.getElementById('antenatalDrugs').value;
  const deliveryPlace = document.getElementById('deliveryPlace').value;
  const deliveryType = document.getElementById('deliveryType').value;
  const birthWeight = document.getElementById('birthWeight').value;
  const anyComplications = document.getElementById('anyComplications').value;

  const breastfeeding = document.getElementById('breastfeeding').value;
  const topFeeding = document.getElementById('topFeeding').value;
  const weaningAge = document.getElementById('weaningAge').value;
  const currentDiet = document.getElementById('currentDiet').value;

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

  // ✅ Use actual IDs from your HTML
  const parentOccupation = document.getElementById('parentOccupation').value;
  const parentEducation = document.getElementById('parentEducation').value;
  const incomeLevel = document.getElementById('incomeLevel').value;
  const housingType = document.getElementById('housingType').value;
  const waterSource = document.getElementById('waterSource').value;
  const sanitation = document.getElementById('sanitation').value;

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
Parents' Occupation: ${parentOccupation}
Parents' Education: ${parentEducation}
Monthly Income: ${incomeLevel}
Housing Type: ${housingType}
Drinking Water Source: ${waterSource}
Sanitation: ${sanitation}
`;

  const blob = new Blob([data], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'patient_history.txt';
  link.click();
}
