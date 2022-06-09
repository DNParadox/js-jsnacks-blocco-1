const myNumbers = [1,2,3,4,5,6,7,8,9,10]
console.log(myNumbers);

for (let i = 0; i < myNumbers.length; i++) {
    const controlloArray = myNumbers[i]

    let evenorodd;
    if(controlloArray  % 2 === 0) {
        console.log(controlloArray);
        document.getElementById('green').innerHTML = controlloArray + " "

    } else if (controlloArray % 2 !== 0) {
        console.log(controlloArray)
    }


    }

     
    

