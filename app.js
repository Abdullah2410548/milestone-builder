// app.ts
// Getting the elements from the DOM
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var universityInput = document.getElementById('university');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
var previewName = document.getElementById('previewName');
var previewEmail = document.getElementById('previewEmail');
var previewDegree = document.getElementById('previewDegree');
var previewUniversity = document.getElementById('previewUniversity');
var previewExperience = document.getElementById('previewExperience');
var previewSkills = document.getElementById('previewSkills');
// Button to trigger resume generation
var generateResumeButton = document.getElementById('generateResume');
// Event Listener for button click
generateResumeButton.addEventListener('click', function () {
    // Getting the values from the form inputs
    var name = nameInput.value;
    var email = emailInput.value;
    var degree = degreeInput.value;
    var university = universityInput.value;
    var experience = experienceInput.value;
    var skills = skillsInput.value;
    // Updating the preview section with the form data
    previewName.textContent = "Name: ".concat(name);
    previewEmail.textContent = "Email: ".concat(email);
    previewDegree.textContent = "Degree: ".concat(degree);
    previewUniversity.textContent = "University: ".concat(university);
    previewExperience.textContent = "Job Title: ".concat(experience);
    previewSkills.textContent = "Skills: ".concat(skills);
});
