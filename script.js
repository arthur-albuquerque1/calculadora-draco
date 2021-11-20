function calculo() {
    var qdraco = document.getElementById("qdraco1").value
    var vdraco = document.getElementById("valuedraco").value
    var vreal = document.getElementById("valuereal").value
    var daily = qdraco * vdraco * vreal
    var monthly = daily * 30
    monthly = Math.floor(monthly * 100) / 100
    monthly.toFixed(2)  
    daily = Math.floor(daily * 100) / 100
    daily.toFixed(2)
    document.getElementById("resultdaily").innerHTML = (`Seu resultado diário é R$ ${daily}`)
    document.getElementById("resultmonthly").innerHTML = (`Seu resultado mensal é R$ ${monthly}`) 
}


