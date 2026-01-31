# IT23216464 - R. M. R. T. Rajapakshe

### Project Overview
This repository contains the automated test suite for Assignment 1 of the IT3040-ITPM module. It identifies 24 positive and 10 negative functional test scenarios for the Swift Translator (Singlish to Sinhala) web application. <br>

### Prerequisites
Before running the tests, ensure you have the following installed:<br>

Node.js (v18 or higher)

npm (comes with Node.js)<br>

### Installation
1.Clone the repository:<br>

git clone <your-git-repo-link>
cd <your-folder-name><br><br>


2.Install dependencies:<br>

npm install<br><br>


3.Install Playwright Browser:<br>

npx playwright install<br><br>


### Running the Tests
You can execute the test suite using the following commands:<br>

- Run all tests (headless):<br>

npx playwright test<br><br>

- Run tests and view the report:<br>

npx playwright show-report<br><br>

- Run tests in headed mode (to see the browser):<br>

npx playwright test --headed<br><br>
