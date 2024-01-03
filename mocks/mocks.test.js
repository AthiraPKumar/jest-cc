const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(results);
    return results.data;
}


const forEach = (items, callback) => {
    for(i=0; i<items.length; i++){
        callback(items[i])
    }
}


it("mock callback", () => {
    const mockcalledBack = jest.fn(x => 42 + x);
    forEach([0, 1], mockcalledBack)

    expect(mockcalledBack.mock.calls.length).toBe(2);
    expect(mockcalledBack.mock.calls[0][0]).toBe(0);
    expect(mockcalledBack.mock.calls[1][0]).toBe(1);

    expect(mockcalledBack.mock.results[0].value).toBe(42);
    expect(mockcalledBack.mock.results[0].value).toBe(43);
})


it("mock callback", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true);
    const results = mock();
    const results1 = mock();
    const results2 = mock();

    expect(results).toBe(true);
    expect(results1).toBe(false);
    expect(results2).toBe("Hello");


})


it("mocks axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Hello my friends"
        }
    })
    const results = await fetchData();
    expect(results.todo).toBe("Hello my friends")
})