function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function arithProg(a, d, n) {
    return a + (n - 1) * d;
}

function geomProg(a, r, n) {
    return a * Math.pow(r, n - 1);
}