# Intermediate and advances loop summer 2025

## Week 1

- [recap javaScript](./week1/index.js) 

## Week 2

- [unit testing](./week2/index.js)

### Setup unit testing with jest
1. Create a new folder
1. Navigate to the folder on the terminal and type the following command: 
	1. `npm init`
2. Install [jest](https://jestjs.io/docs/en/getting-started) for testing  
	1. `npm install --save-dev jest`
2. inspect the `package.json` file
2.  add test command in package.json 
    ```json
     "scripts": {
	   "test": "jest"
	  },
    ```
1. If you use git: add a `.gitignore` file and include the node modules folder (see example in this repo)

3. Add a new javaScript file with the name `index.js` and a test for this file with the name `index.test.js`. Jest will run all the files which include `test.js` when the command `npm run test` is executed.
4. Write your code in the `index.js` and the tests in the `index.test.js` file. Remember to export and import the functions!

## Week 3
### Dom manipulation 
This week we started to work on a dynamic book list! We covered how to:
- Add elements dynamically based on a javaScript array of data
- Add event listeners to buttons
- Change text of the button on the click

### interesting things to look into: 
- How to change the style of the books card we have read after a click on the button
- Add input fields to add new books to the list.


