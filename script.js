let massMark=120; //kg
let massJohn=90; //kg
let heightMark=1.75; //m
let heightJohn=1.65; //m

BMIJohn=massJohn/(heightJohn*heightJohn); //BMI 
BMIMark=massMark/(heightMark*heightMark);  //BMI

if (BMIJohn>BMIMark) {
    console.log("John\'s BMI is higher than Marks\'s.")
    
} else {

    console.log("Marks\'s BMI is higher than John\'s.")
}