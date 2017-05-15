/*
 * Simple Expense Management Application
 * Developed by Luis Gutierrez 
 */

/* REQUIREMENTS */

Basic requirements of the app are:
1. Login required, only allowed user is "demo" and password is "demo"
2. Be able to add a new expense, by default they are set to a status of "new".
3. Expenses can be edited or removed while in the "new" status.
4. Changing a expense to a "reimbursed" status makes it non-editable and disables delete.
5. Data is not stored, any changes are lost on refresh or on closing the browser.
 
/* DESING */
 This application was done with a very basic design in mind just to give a little bit of presentation but not overextending on it.
 For this reason I used a minified bootstrap.css file to quickly add styles.


/* ASSUMPTIONS */
I'm making the basic assumption that we would want our input fields to at least have some level of validation, this is why the following rules where applied:
	- All fields are required to add an expense, the "Add Expense" button is disabled if any of the fields are empty, including the comments which should be used to describe the expense.
	- "Total" field must be a number, no characters should be allowed.
	- Date should be formatted as date, using a drop down date picker for this to improve on user experience.
	- If an existing expense is modified to an invalid value, it can't be changed to reimbursed until a valid value is entered.
	- Login screen will show an error if login fails and redirect immediately to the Expense Application on successful login.
	- Trying to go back to the login screen will redirect immediately to the Expense Application if the user is already logged in.
	
 /* GENERAL NOTES */
 The html code was kept simple and short, meta tags and SEO techniques weren't part of the implementation of this application.
 I used minified css and js files since it's a good practice to helps websites have faster download times and better performance.
 For the application js I prefer to use a single js file for small portions of code, it's a better practice to separate controllers and service handlers into different JS files but that also makes making changes a unnecessarily more elaborate task for small projects.
 index.html makes use of templates to include the header and footer portions of the code.
 
 
 