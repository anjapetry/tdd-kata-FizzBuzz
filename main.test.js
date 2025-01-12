const main = require("./main.js");

test("the main function outputs 100 lines", () => {
    const result = main().split("\n");
    expect(result.length).toBe(100);
})


// test.todo('the main function console.logs 100 times', (done) => {
//     const pathTestFunction = path.join(__dirname, './main.js');
//     const testRun = spawn('node', [pathTestFunction]);
//     main();

//     testRun.stdout.on('data', data => {
//         const stdoutData = JSON.parse(data.toString());
//         const lines = stdoutData.replaceAll("\r", "\n").split("\n");
//         expect(lines.length).toBe(100);   
//         testRun.kill("SIGNINT");
//         done();
//     })



// })