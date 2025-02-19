// Handle Form Submission
const employeeForm = document.getElementById('employeeForm');

if (employeeForm) {
    employeeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const employeeData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            designation: document.getElementById('designation').value,
            salary: document.getElementById('salary').value,
            dob: document.getElementById('dob').value,
            address: document.getElementById('address').value,
        };

        localStorage.setItem('employeeData', JSON.stringify(employeeData));
        window.location.href = 'display.html';
    });
}

// Display Employee Data
if (window.location.pathname.includes('display.html')) {
    const employeeDetailsDiv = document.getElementById('employeeDetails');
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));

    if (employeeData) {
        employeeDetailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${employeeData.name}</p>
            <p><strong>Email:</strong> ${employeeData.email}</p>
            <p><strong>Phone:</strong> ${employeeData.phone}</p>
            <p><strong>Designation:</strong> ${employeeData.designation}</p>
            <p><strong>Salary:</strong> ${employeeData.salary}</p>
            <p><strong>Date of Birth:</strong> ${employeeData.dob}</p>
            <p><strong>Address:</strong> ${employeeData.address}</p>
        `;
    } else {
        employeeDetailsDiv.innerHTML = '<p>No employee details found.</p>';
    }
}
