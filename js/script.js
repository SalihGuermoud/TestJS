// Our Array 
const oppoStatus = [
	{
	  "K_OPPO_STATUS": 1,
	  "STATUS": "1. Initial Contact",
	  "SUCCESS": 0
	},
	{
	  "K_OPPO_STATUS": 2,
	  "STATUS": "2. Demonstration",
	  "SUCCESS": 25
	},
	{
	  "K_OPPO_STATUS": 3,
	  "STATUS": "3. Proposal",
	  "SUCCESS": 50
	},
	{
	  "K_OPPO_STATUS": 4,
	  "STATUS": "4. Negotiation",
	  "SUCCESS": 75
	},
	{
	  "K_OPPO_STATUS": 5,
	  "STATUS": "5. Order",
	  "SUCCESS": 100
	}
  ];
  
  // Selections of our HTML elements
  const select = document.querySelector("select");
  const form = document.querySelector("form");
  const output = document.querySelector("div");
  const button = document.querySelector("button");
  
  // Create a FormComponent class
  const FormComponent = class {
	constructor(tabJSON) {
	  this.tabJSON = tabJSON;
	}
  
	// We create options of our form based on the oppoStatus array
	fillList() {
	  this.tabJSON.forEach(element => {
		const option = document.createElement("option");
		option.value = element.K_OPPO_STATUS;
		option.text = element.STATUS;
		select.appendChild(option);
	  });
	}
  
	// We recover selected value and we put it on the input
	fillInput() {
	  select.addEventListener("change", () => {
		const selectValue = select.value;
		let inputText;
  
		for (const status of oppoStatus) {
		  if (status.K_OPPO_STATUS == selectValue) {
			inputText = status.SUCCESS;
			break;
		  }
		}
  
		document.querySelector("input").value = inputText;
	  });
	}
  
	// Display JSON data when we click on the Submit button
	displayJSON() {
	  button.addEventListener("click", (event) => {
		event.preventDefault();
  
		const inputValue = select.value;
		const selection = oppoStatus[inputValue - 1];
  
		if (selection) {
		  const statusJSON = JSON.stringify(selection.K_OPPO_STATUS);
		  const successJSON = JSON.stringify(selection.SUCCESS);
		  const selectionJSON = `{"status":${statusJSON}, "success":${successJSON}}`;
		  output.textContent = selectionJSON;
		}
	  });
	}
  
	// start() function containing the other functions
	start() {
	  this.fillList();
	  this.fillInput();
	  this.displayJSON();
	}
  }
  
  // We create an instance of FormComponent
  const fc = new FormComponent(oppoStatus);
  
  // We call the start function of the FormComponent class
  fc.start();
  