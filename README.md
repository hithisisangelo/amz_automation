# amz_automation
How to run
Install testcafe via npm
With Command npm install -g testcafe
run the commands with 
testcafe chrome amz_sanity.js

# set up with cicd travis ci
Follow these directions if need to change anything
But we added 

"scripts": {
"test":  "testcafe chrome tests/amz_sanity.js"
},

In our package-module so travis-ci will run npm-test and will be able to view results
