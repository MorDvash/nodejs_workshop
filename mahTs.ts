export function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function arithProg(a: number, d: number, n: number): number {
    return a + (n - 1) * d;
}

export function geomProg(a: number, r: number, n: number): number {
    return a * Math.pow(r, n - 1);
}
