# Cypress-BDD Cucumber Project

Cypress Project build with BDD approach and implemented Cucumber tool, POM and configured reporting tool-HTML and used Jenkins for CI (Continuous Integration).

Cypress Dashboard is configured and also connected with Jenkins. As soon as code check into GitHub, Jenkins Server runs the build and generate report that is also visible on Cypress Dashboard.

#BDD (Behavior Driven Development)

Build 7 feature files & 14 Scenarios.

#POM (Page Object Model)

All the objects of the pages are stored with their separate page name and all these files are stored under one folder name “PageObjects”.

All the test cases are stored in the respective “js” files of their respective folders, named as per the page name.

All the feature files are stored separately with the extension “feature” as per the page name.

HTML report
<img width="1401" alt="Screenshot 2021-03-15 at 13 26 06" src="https://user-images.githubusercontent.com/59764774/111154105-19889400-8593-11eb-9278-846f8d909504.png">

Cypress Dashboard
<img width="1420" alt="Screenshot 2021-03-15 at 13 36 39" src="https://user-images.githubusercontent.com/59764774/111154567-a4698e80-8593-11eb-9eb5-6552a244528b.png">

<img width="1431" alt="Screenshot 2021-03-15 at 13 36 59" src="https://user-images.githubusercontent.com/59764774/111154589-ac293300-8593-11eb-9530-19f9115e932f.png">

CI with Jenkins
<img width="1398" alt="Screenshot 2021-03-15 at 13 43 19" src="https://user-images.githubusercontent.com/59764774/111155310-90725c80-8594-11eb-980b-ac48fb714bd0.png">

<img width="1378" alt="Screenshot 2021-03-15 at 13 43 42" src="https://user-images.githubusercontent.com/59764774/111155333-97996a80-8594-11eb-98d3-59846359c401.png">

After cloning of the project, all the dependencies can be installed by running

npm install
