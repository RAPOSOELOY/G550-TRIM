function calculate(){

    let t = parseFloat(document.getElementById("FuelMassatTO").value)
    let c = parseFloat(document.getElementById("CG%ZFM").value)
    
    let i = FuelMassatTO.findIndex(x => x > t) - 1
    let j = CG%ZFM.findIndex(x => x > c) - 1
    
    if(i < 0 || j < 0){
    document.getElementById("result").innerText = "Out of range"
    return
    }
    
    let x1 = FuelMassatTO[i]
    let x2 = FuelMassatTO[i+1]
    
    let y1 = CG%ZFM[j]
    let y2 = CG%ZFM[j+1]
    
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
