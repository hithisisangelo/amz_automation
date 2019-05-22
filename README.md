# amz_automation
How to run
Install testcafe via npm
With Command npm install -g testcafe

```
run the tests with 
testcafe chrome amz_sanity.js -e 
to run in headless please run this command
testcafe "chrome:headless" amz_sanity.js -e
or just simply run
npm test
```

# set up with cicd travis ci
We setted up travis by adding a .travis.yml file for configurations
And then we added a {}script tag in our package.json to make sure npm test runs 
View :
https://travis-ci.org/hithisisangelo/amz_automation
For build summary and results
