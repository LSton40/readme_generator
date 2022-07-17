// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    var licenseBadge;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Mozilla':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'GNU GPL v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'GNU AGPL v3.0':
      licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU LGPL v3.0':
      licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'ISC':
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Boost':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Unlicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      licenseBadge = '';
  }
  // renderLicenseLink();
  // renderLicenseSection();
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink;
  switch(license) {
    case 'MIT':
      licenseLink = '[MIT License](https://spdx.org/licenses/MIT.html)';
      break;
    case 'Apache':
      licenseLink = '[Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html)';
      break;
    case 'Mozilla':
      licenseLink = '[Mozilla License 2.0](https://spdx.org/licenses/MPL-2.0.html)';
      break;
    case 'GNU GPL v3.0':
      licenseLink = '[GNU General Public License v3.0](https://spdx.org/licenses/GPL-3.0-or-later.html)';
      break;
    case 'GNU AGPL v3.0':
      licenseLink = '[GNU Affero General Public License v3.0](https://spdx.org/licenses/AGPL-3.0-or-later.html)';
      break;
    case 'GNU LGPL v3.0':
      licenseLink = '[GNU Lesser General Public License v3.0](https://spdx.org/licenses/LGPL-3.0-or-later.html)';
      break;
    case 'ISC':
      licenseLink = '[ISC License](https://spdx.org/licenses/ISC.html)';
      break;
    case 'Boost':
      licenseLink = '[Boost License 1.0](https://spdx.org/licenses/BSL-1.0.html)';
      break;
    case 'Unlicense':
      licenseLink = '[The Unlicense](https://spdx.org/licenses/Unlicense.html)';
      break;
    default:
      licenseLink = '';
  }
  // renderLicenseSection();

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description ${data.description}
    ## Table of Contents
    1. [Installation](##installation)
    2. [Usage](##usage)
    3. [License](##license)
    4. [How to Contribute](##how-to-contribute)
    5. [Tests](##tests)
    6. [Questions](##questions)
    ## Installation ${data.installation}
    ## Usage ${data.usage}
    ## License ${renderLicenseSection(data.license)}
    ## How to Contribute ${data.contribute}
    ## Tests ${data.tests}
    ## Questions ${data.github} ${data.email}
`;
}

module.exports = generateMarkdown;
