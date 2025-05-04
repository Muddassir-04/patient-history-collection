<script>
    function toggleSection(id) {
      const section = document.getElementById(id);
      section.style.display = section.style.display === 'block' ? 'none' : 'block';
    }

    function downloadData() {
        // Patient Profile
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const residence = document.getElementById('residence').value;
        const admission = document.getElementById('admission').value;
        const informant = document.getElementById('informant').value;
        const caretaker = document.getElementById('caretaker').value;
      
        // Chief Complaints
        const checkedComplaints = Array.from(document.querySelectorAll('input[name="complaint"]:checked'))
          .map(el => el.value);
        const otherComplaint = document.getElementById('otherComplaint').value;
        if (otherComplaint) checkedComplaints.push(otherComplaint);
      
        // Combined Text
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
        `;
      
        // Download
        const blob = new Blob([data], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'patient_history.txt';
        link.click();
      }
      
  </script>