// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
function renderLicenseBadge(license) {
  if (license !== "none"){
  return `![github license](https://img.shields.io/badge/license-${license}-blue.png)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n* [License](#license)`
    } else {
      return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
  This project is licensed under the ${license} license.
    `
    } else {
      return ""
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

## Installation
Too install necessary dependencies, run the following command:

~~~
${data.installation}
~~~

## Usage

${data.description}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions you can contact me at ${data.email}. You can also fine more projects at [username](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
