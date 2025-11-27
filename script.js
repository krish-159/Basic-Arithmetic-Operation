let n1 = parseFloat(prompt("Enter no.1"));
while (Number.isNaN(n1)) {
    n1 = parseFloat(prompt("Invalid no. Enter no.1 again"));
}

let n2 = parseFloat(prompt("Enter no.2"));
while (Number.isNaN(n2)) {
    n2 = parseFloat(prompt("Invalid no. Enter no.2 again"));
}
alert(n1+n2)