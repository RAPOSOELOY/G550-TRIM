function calculate(){

    let t = parseFloat(document.getElementById("tom").value)
    let c = parseFloat(document.getElementById("cg").value)
    
    let i = tom.findIndex(x => x > t) - 1
    let j = cg.findIndex(x => x > c) - 1
    
    if(i < 0 || j < 0){
    document.getElementById("result").innerText = "Out of range"
    return
    }
    
    let x1 = tom[i]
    let x2 = tom[i+1]
    
    let y1 = cg[j]
    let y2 = cg[j+1]
    
    let Q11 = values[i][j]
    let Q12 = values[i][j+1]
    let Q21 = values[i+1][j]
    let Q22 = values[i+1][j+1]
    
    let result =
    (Q11 * (x2 - t) * (y2 - c) +
    Q21 * (t - x1) * (y2 - c) +
    Q12 * (x2 - t) * (c - y1) +
    Q22 * (t - x1) * (c - y1)) /
    ((x2 - x1)*(y2 - y1))
    
    document.getElementById("result").innerText =
    "VALUE = " + result.toFixed(2)
    
    }