// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
function renderLicenseBadge(license) {
  if (license !== "none"){
  return `![github license](https://img.shields.io/badge/license-${license}-blue.png)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n* [License](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
  This project is licensed under the ${license} license.
    `
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge (data.license)}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
