function buytickets () {


let startdate = document.getElementById('startdate').value
let finishdate = document.getElementById('finishdate').value

if(startdate && finishdate){
document.getElementById('flightdate').innerText = `departue ${startdate} - arrive ${finishdate}`
} else {
    document.getElementById('flightdate').innerText = `choose date`
}

}
