# IT23216464

### Project Overview
This repository contains the automated test suite for Assignment 1 of the IT3040-ITPM module. It identifies 24 positive and 10 negative functional test scenarios for the Swift Translator (Singlish to Sinhala) web application.

### Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (v18 or higher)

npm (comes with Node.js)

### Installation
1.Clone the repository:

git clone <your-git-repo-link>
cd <your-folder-name>


2.Install dependencies:

npm install


3.Install Playwright Browser:

npx playwright install


### Running the Tests
You can execute the test suite using the following commands:

•Run all tests (headless):

npx playwright test

•Run tests and view the report:

npx playwright show-report

•Run tests in headed mode (to see the browser):

npx playwright test --headed
