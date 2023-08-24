function parimpar(n) {
    if (n%2==0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimpar(223))

function soma(n1=0, n2=0) {
    return (n1 + n2)
}
console.log(soma(2))

let v = function(x) {
    return x*2
}

console.log(v(5))

function fatorial(n) {
    let fat = 1
    for(let c=n; c>1; c--) {
        fat*=c
    }
    return fat
}
console.log(fatorial(5))

function fatorial2(n) {
    if (n==1){
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))