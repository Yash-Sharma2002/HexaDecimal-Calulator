function add() {
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    var again1 = hexdec(x)
    var again2 = hexdec(y)
    again3 = again1 + again2
    console.log(again3)
    again3 = dechex(again3)
    z.textContent = "SUM : " + again3 + " H"
    console.log(z.innerHTML)
}

function sub(x, y) {
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    var again1 = hexdec(x)
    var again2 = hexdec(y)
    if(again1<again2){
        z.textContent= "Number 1 is Smaller than Number 2.Please enter valid numbers."
    }else{

    
    again3 = again1 - again2
    console.log(again3)
    again3 = dechex(again3)
    z.textContent = "SUM : " + again3 + " H"
    console.log(z.innerHTML)
}
}
function mul() {
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    var again1 = hexdec(x)
    var again2 = hexdec(y)
    again3 = again1 * again2
    console.log(again3)
    again3 = dechex(again3)
    z.textContent = "SUM : " + again3 + " H"
    console.log(z.innerHTML)
}

function div() {
    var x = parseInt(document.getElementById("inp-1").value)
    var y = parseInt(document.getElementById("inp-2").value)
    let z = document.getElementById("hidden")
    var again1 = hexdec(x)
    var again2 = hexdec(y)
    again3 = again1 / again2
    console.log(again3)
    again3 = dechex(again3)
    z.textContent = "SUM : " + again3 + " H"
    console.log(z.innerHTML)
}
function hexdec(num) {


    var intArr = Array.from(String(num));

    var overall = ''
    for (let i = 0; i < intArr.length; i++) {

        if (intArr[i] < 10) {
            var anum = intArr[i]
        } else if (intArr[i] == 'A') {
            var anum = 10
        } else if (intArr[i] == 'B') {
            var anum = 11
        } else if (intArr[i] == 'c') {
            var anum = 12
        } else if (intArr[i] == 'D') {
            var anum = 13
        } else if (intArr[i] == 'E') {
            var anum = 14
        } else if (intArr[i] == 'F') {
            var anum = 15
        }
        var cnum = ""
        for (let i = 3; i >= 0; i--) {
            let z = Math.pow(2, i)

            if (anum - z >= 0) {
                cnum += "1"
            }
            else {
                cnum += "0"
            }
            anum = anum % z;
        }
        overall += cnum

    }

    let myFunc1 = overall => Number(overall);
    var overallArr = Array.from(String(overall), myFunc1);
    var grand = 0
    var srand = 0
    for (let i = overallArr.length - 1; i >= 0; i--) {
        let zeno = Math.pow(2, grand)

        if (overallArr[i] == 1) {
            srand += zeno
        }
        grand += 1
    }
    console.log(srand)
    return srand
}

function dechex(num) {
    console.log(num)
    // first converting decimal to binary 
    var ssr = ""
    for (let i = 15; i >= 0; i--) {
        let z = Math.pow(2, i)

        if (num - z >= 0) {
            ssr += "1"
        }
        else {
            ssr += "0"
        }
        num = num % z;
    }
    console.log(ssr)
    // making array of binary 
    let myFunc = ssr => Number(ssr);
    var intArr = Array.from(String(ssr), myFunc);
    var g = ''
    for (let i = 0; i < intArr.length; i += 4) {
        var sat = 0
        let b = 0
        for (let j = i + 3; j >= i; j--) {
            let zeno = Math.pow(2, b)

            if (intArr[j] == 1) {
                sat += zeno
            }
            b += 1
        }
        if (sat < 10) {
            g += String(sat)
        }
        else if (sat == 10) {
            g += "A"
        }
        else if (sat == 11) {
            g += 'B'
        }
        else if (sat == 12) {
            g += 'C'
        }
        else if (sat == 13) {
            g += 'D'
        }
        else if (sat == 14) {
            g += 'E'
        }
        else if (sat == 15) {
            g += 'F'
        }
    }
    console.log(g)
    return g
}