// app.ts

// Getting the elements from the DOM
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const universityInput = document.getElementById('university') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

const previewName = document.getElementById('previewName') as HTMLHeadingElement;
const previewEmail = document.getElementById('previewEmail') as HTMLParagraphElement;
const previewDegree = document.getElementById('previewDegree') as HTMLParagraphElement;
const previewUniversity = document.getElementById('previewUniversity') as HTMLParagraphElement;
const previewExperience = document.getElementById('previewExperience') as HTMLParagraphElement;
const previewSkills = document.getElementById('previewSkills') as HTMLParagraphElement;

// Button to trigger resume generation
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;

// Event Listener for button click
generateResumeButton.addEventListener('click', () => {
  // Getting the values from the form inputs
  const name = nameInput.value;
  const email = emailInput.value;
  const degree = degreeInput.value;
  const university = universityInput.value;
  const experience = experienceInput.value;
  const skills = skillsInput.value;

  // Updating the preview section with the form data
  previewName.textContent = `Name: ${name}`;
  previewEmail.textContent = `Email: ${email}`;
  previewDegree.textContent = `Degree: ${degree}`;
  previewUniversity.textContent = `University: ${university}`;
  previewExperience.textContent = `Job Title: ${experience}`;
  previewSkills.textContent = `Skills: ${skills}`;
});
