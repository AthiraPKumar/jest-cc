const fetchData = require("./async");

describe("return data", () => {
    // promise way
    it("should return correct todo data", () => {
        // async should be defined this way
        fetchData(1).then(todo => {
            expect(todo.id).toBe(1);
        })
    })

    // OR

    it("should return correct todo data", async () => {
        // async should be defined this way
        const todo = await fetchData(1);
        expect(todo).toBe(1);
    })
})