// Function to toggle visibility of the form content
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

// Function to gather data and download as a text file
function downloadData() {
  // Section 1: Patient Profile
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const residence = document.getElementById('residence').value;
  const admission = document.getElementById('admission').value;
  const informant = document.getElementById('informant').value;
  const caretaker = document.getElementById('caretaker').value;

  // Section 2: Chief Complaints
  const checkedComplaints = Array.from(document.querySelectorAll('input[name="complaint"]:checked'))
    .map(el => el.value);
  const otherComplaint = document.getElementById('otherComplaint').value;
  if (otherComplaint) checkedComplaints.push(otherComplaint);

  // Section 3: History of Present Illness
  const illnessDetails = document.getElementById('illnessDetails').value;

  // Section 4: Past History
  const similarIllness = document.getElementById('similarIllness').value || 'Not specified';
  const surgeries = document.getElementById('surgeries').value || 'Not specified';
  const bloodTransfusion = document.getElementById('bloodTransfusion').value || 'Not specified';
  const allergies = document.getElementById('allergies').value || 'None';
  const otherPastIssues = document.getElementById('otherPastIssues').value || 'None';

  // Section 5: Antenatal and Birth History
  const antenatalVisits = document.getElementById('antenatalVisits').value || 'Not specified';
  const maternalIllness = document.getElementById('maternalIllness').value || 'None';
  const antenatalDrugs = document.getElementById('antenatalDrugs').value || 'None';
  const deliveryPlace = document.getElementById('deliveryPlace').value || 'Not specified';
  const deliveryType = document.getElementById('deliveryType').value || 'Not specified';
  const birthWeight = document.getElementById('birthWeight').value || 'Not specified';
  const anyComplications = document.getElementById('anyComplications').value || 'None';

  // Combine data
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
`;

  // Create a downloadable .txt file
  const blob = new Blob([data], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'patient_history.txt';
  link.click();
}
