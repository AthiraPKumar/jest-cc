let animals = ['elephant', 'Zebra', 'bear', 'tiger'];

beforeAll(() => {
    animals = []
})

afterEach(() => {
    console.log("After All")
    animals = ['elephant', 'Zebra', 'bear', 'tiger'];
})

afterAll(() => {
    console.log("After All")
    animals = ['elephant', 'Zebra', 'bear', 'tiger'];
})


describe("animals array", () => {
    beforeEach(() => {
        // run a piece of code before running all test
        console.log("Before Each")
        animals = ['elephant', 'Zebra', 'bear', 'tiger'];
    })   
    it("should add animal to end of the array", () => {
        animals.push("Aligator");
        expect(animals[animals.length -1]).toBe("Aligator")
    })
    it("should add animal to start of the array", () => {
        animals.unshift("Monkey");
        expect(animals[0]).toBe("Monkey")
    })
    it("initial length of the array should be 4", () => {
        expect(animals.length).toBe(4);
    })
})

describe("testing something else", () => {
    it.only("true should be truthy", () => {
        expect(true).toBeTruthy();
    })
})