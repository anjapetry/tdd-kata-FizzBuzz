function main() {
    let result = "";
    for (let i = 0; i < 100; i++) {
        result += "abc\n"
    }
    return result.trim();
}

module.exports = main;