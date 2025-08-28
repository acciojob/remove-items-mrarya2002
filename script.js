//your JS code here. If required.
let select = document.querySelector("#colorSelect");
const button  = document.querySelector("input[type='button']");

button.addEventListener("click",()=>{
	let curr = select.value;
	Array.from(select.options).forEach(op => {
		  if (op.value === curr) {
		    op.remove();
	  }
});
})