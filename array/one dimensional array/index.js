function highScores(scores){
    let max = scores[0];
    for(let x = 1; x < scores.length; x++){
        if(max < scores[x]){
            max = scores[x];
        }
    }
    return max;
}

let scores = [30, 20,70,10,100,80]
let maxScores =  highScores(scores);
console.log(maxScores);