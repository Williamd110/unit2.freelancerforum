const freelancers = [
    { name: "Dawson", price: 30, occupation: "gardener" },
    { name: "Emily", price: 51, occupation: "Nurse" },
    { name: "Chad", price: 50, occupation: "teacher" },
    { name: "Jemma", price: 81, occupation: "Loan Shark" },
    { name: "Steve", price: 43, occupation: "teacher" },
    { name: "Erika", price: 76, occupation: "programmer" },
    { name: "Alex", price: 65, occupation: "Artist" },
    { name: "Prof. Copper", price: 150, occupation: "driver" },
  ];

console.log(freelancers);
console.log(freelancers[1]);

let newArray = [];

const getNewFreelancer = (array) => {
    const indexNum = Math.floor(Math.random()* array.length);
    //  return freelancers[indexNum];

    newArray.push(freelancers[indexNum])
    return newArray
}

console.log(getNewFreelancer(freelancers));
console.log(getNewFreelancer(freelancers));

const list = document.querySelector('#Freelancers');


const div = document.querySelector('#avg');
// document.getElementById('avg')**
// look into getelementbyID or class instead?**
// "#" refers for an ID on the HTML page.
//  "." refers to a class.


// const addfreelancer = setInterval(() => {
//     getNewFreelancer(freelancers)
//     console.log(newArray)
//     newArray.forEach(item => {
//         const li = document.createElement('li');
//         // template literal 
//         li.textContent = `${item.name} COST: ${item.price} JOB: ${item.occupation}`;
//         list.appendChild(li);
//      });
    
//      let total = newArray.reduce((accumulator, item)=> accumulator + item.price, 0);
    
//     let avgCost = total / newArray.length;
//     div.textContent = avgCost

   
// }, 1000)
const runTimes = 20;
for (let i = 0; i<runTimes; i++){
    getNewFreelancer(freelancers)
};

let index = 0

const avgPriceArr = [];
// *created separate array to only calculate the avg of what is on screen vs. what was in the "newArray". newArray calculated all 22 iterations at once.
const getTotal = () =>{
    let total = avgPriceArr.reduce((accumulator, item)=> accumulator + item.price, 0);
    return total;
}
// let total = avgPriceArr.reduce((accumulator, item)=> accumulator + item.price, 0);
//  look into function variables to "hoist".

const intervalId = setInterval(() => {

    if (index < newArray.length) {
      const li = document.createElement('li'); // Create an <li> element
      li.textContent = `${newArray[index].name} COST: ${newArray[index].price} JOB: ${newArray[index].occupation}`;
      avgPriceArr.push(newArray[index])
      list.appendChild(li); // Append the <li> to the <ul>
      index++; // Increment the index
      let avgCost = getTotal() / avgPriceArr.length;
      div.textContent = avgCost.toFixed(2);
      console.log(avgPriceArr)
    } 
    
    else {
      clearInterval(intervalId); // Clear the interval when all items are appended
    }
  }, 1000); // Run every 1000ms (1 second)


