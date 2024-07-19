function* numberGen() {
    let i = 0
    while (true) {
        yield `${i++}`
    }
}
let gen = numberGen()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);