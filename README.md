# CICD Setup
  ![License](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description
  This project is a full-stack coding quiz application built with the MERN stack. It features automated CI/CD pipelines using GitHub Actions for running Cypress tests on pull requests and deploying to Render when changes are merged into the main branch. The app includes a MongoDB database, handles user interactions, and dynamically seeds Python-related quiz questions into the database.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Links](#links)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ```
  npm install
  ```

  ## Usage
  To use the project, clone the repository, install dependencies, and set up the required environment variables. The application consists of a backend server and a frontend client, both of which need to be started separately. It uses MongoDB, so ensure the database is running and seed it with quiz questions before use. Cypress tests run automatically on pull requests to the develop branch, and merging into main triggers deployment to Render. Follow the GitFlow workflow by creating feature branches and merging them into develop. If issues arise, check logs in GitHub Actions or Render for debugging.

  ## License
  [MIT License](https://opensource.org/licenses/MIT)

  ## Links
  [Deployed Site](https://cicd-setup-ythk.onrender.com)

  ## Contributing
  To contribute, follow the GitFlow workflow by creating a feature branch from develop, making changes, and submitting a pull request to develop. Ensure your code follows best practices, includes meaningful commit messages, and passes all Cypress tests before submitting. Pull requests should be reviewed before merging. Only develop merges into main for deployment. If adding a new feature, update the README and ensure all required dependencies are installed. For major changes, open an issue to discuss before implementation. If tests or deployment fail, check GitHub Actions logs for troubleshooting.

  ## Tests
  ```
  npm run build && npm run seed && npm run test-component && npm run test-gui
  ```

  ## Questions
  GitHub: [ejmaller7](https://github.com/ejmaller7)
  Email: mallerethan4@gmail.com
