const {log} = require('../config')

const calculator = (query, res) => {
    const {x, y, z} = query
    try{
        let result = null
        switch(z) {
            case '+':
                result = x + y
                break;
            case '-':
                result = x - y
                break;
            case '*':
                result = x * y
                break;
            case '/':
                result = x / y
                break;
            default:
                res.send(`
                    <h1>Calculate error occurs</h1>
                `)
                break;
        }
        res.send(`
            <p>Calculate result: ${x} ${z} ${y} = ${result}</p>
        `)
    } catch(err) {
        log.errLog(err)
        res.send(`
            <h2>Error occurs: ${err}<h2>
        `)
    }
}

module.exports = {
    calculator
}

