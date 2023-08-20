// code your solution here
  /*   let superbowlWin = record.find(function superbowlWin(record){
        if (record.result === "W") {
            return record.year;
        } else {
            return undefined;
        }
    })

    // const superbowlWin = (array.resilt ==="W") => array.year
    result.find(superbowlWin);
 */

/* 
const superbowlWin = record.find((record.result === "W") => record.year);       */


function superbowlWin(record) {
    let winYear = record.find(entry => entry.result === "W");
    return winYear ? winYear.year : undefined;

}