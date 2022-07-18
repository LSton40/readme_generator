// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge;
  switch(license) {
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU Lesser General Public License v3.0':
      licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'ISC License':
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Boost Software License 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'The Unlicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  switch(license) {
    case 'MIT License':
      licenseLink = '[MIT License](https://spdx.org/licenses/MIT.html)';
      break;
    case 'Apache License 2.0':
      licenseLink = '[Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html)';
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = '[Mozilla License 2.0](https://spdx.org/licenses/MPL-2.0.html)';
      break;
    case 'GNU General Public License v3.0':
      licenseLink = '[GNU General Public License v3.0](https://spdx.org/licenses/GPL-3.0-or-later.html)';
      break;
    case 'GNU Affero General Public License v3.0':
      licenseLink = '[GNU Affero General Public License v3.0](https://spdx.org/licenses/AGPL-3.0-or-later.html)';
      break;
    case 'GNU Lesser General Public License v3.0':
      licenseLink = '[GNU Lesser General Public License v3.0](https://spdx.org/licenses/LGPL-3.0-or-later.html)';
      break;
    case 'ISC License':
      licenseLink = '[ISC License](https://spdx.org/licenses/ISC.html)';
      break;
    case 'Boost Software License 1.0':
      licenseLink = '[Boost License 1.0](https://spdx.org/licenses/BSL-1.0.html)';
      break;
    case 'The Unlicense':
      licenseLink = '[The Unlicense](https://spdx.org/licenses/Unlicense.html)';
      break;
    default:
      licenseLink = '';
  }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the terms of ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

By: ${data.name}  

${renderLicenseBadge(data.license)}  

## Description  
    
${data.description}  

## Table of Contents  

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [How to Contribute](#how-to-contribute)  
- [Tests](#tests)  
- [Questions](#questions)  

## Installation  
    
${data.installation}  

## Usage  
${data.usage}  

## License  
    
${renderLicenseSection(data.license)}  

Copyright (c) ${data.year} ${data.name}.  

## How to Contribute  
  
${data.contribute}  

## Tests  
    
${data.tests}  

## Questions  
    
[${data.github} GitHub](https://github.com/${data.github})  

If you have any questions, please contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;