const expenses = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

const chart = document.getElementById("my-chart");
const newBody = document.createElement("tbody");
chart.appendChild(newBody);
//dynamic change the graph
const calculateColumnHeight = (amount, max) =>{
    return amount/max;
}
const updateGraph = () =>{
    expenses.forEach(e=>{
        const newRow = document.createElement("tr");
        const newHead = document.createElement("th");
        const newData = document.createElement("td");
        newBody.appendChild(newRow);
        newRow.appendChild(newHead);
        newRow.appendChild(newData);
        const height = calculateColumnHeight(e.amount,100);
        if(height >= 0.50){
            console.log("here");
            newData.setAttribute("id","green");
        }
        newData.setAttribute("style",`--size:${height}`);
        newData.setAttribute("class","expense");
        newHead.textContent = e.day;
        newData.textContent = `$${e.amount}`;
    })
}
updateGraph();
            