const buttons = document.querySelectorAll('button'); //all buttons 16
const textBox = document.querySelector('.display'); //text box

//featching 1-by-1 button 
buttons.forEach( function(bt) 
{
	bt.addEventListener('click', calculate); //adding event to 16
} );


function calculate(bt)		 
{
	const clickedBtValue = bt.target.value;	 
	if (clickedBtValue === "AC")
    {
		textBox.value = "";	//textBox cleared
	} 	 
	else if(clickedBtValue === "=") 
	{
		if(textBox.value !== "")
        {
			textBox.value = eval(textBox.value);
		}
	} 
    else 
    {
		textBox.value = textBox.value + clickedBtValue;	  
	}
}
