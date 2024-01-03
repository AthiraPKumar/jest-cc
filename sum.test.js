// testing synchronous functions
const sum = require("./sum")
 describe("example testes", () => {
    it("should add 1 + 2 equals to 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3)
    })

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    })  
 })

 describe("truthy or falsey", () => {
    it("null", () => {
        const n = null; 
        expect(n).toBeFalsy();
    })
 })
 describe("numbers", () => {
    it("two plus two", () => {
        const val = 2 + 2;
        expect(val).toBe(4);
        expect(val).toBeGreaterThan(3);
    })

    it("adding flaots", ()=> {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
    })
 })

 describe("strings", () => {
    it("there is no I in team", () => {
        // tomatch is for regular expression
        expect("team").not.toMatch('/I/')
    })
 })
 
 describe("arrays", () => {
    it("check shoppingList", () => {
        const shoppingList = ['Diapers','Towels','Detergent','Shampoo']
        expect(shoppingList).toContain('Detergent')
    })
 })


 function compileAndErrorCode() {
    throw new Error ("you are using the wrong JDK")
 }

 describe("exceptions", () => {
    it("compiling android goes as expected", () => {
        expect(() => compileAndErrorCode()).toThrow(
            "you are using the wrong JDK"
        )
    })
 })


 // testing async functions
