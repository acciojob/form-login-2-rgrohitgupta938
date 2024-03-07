document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const pNo = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    alert(`First Name: ${fName} Last Name: ${lName} Phone Number: ${pNo} Email ID: ${email}`);
});
