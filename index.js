// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"}
    
  ]

    const superbowlWin = (record) => {
      const foundResult = record.find(element => element.result === "W")
        return foundResult ? foundResult.year : undefined;
      }
      console.log(superbowlWin(record))
  
