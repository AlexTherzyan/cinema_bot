
// удобный вывод информации в json
function debug(obj = {}) {

    return JSON.stringify(obj, null, 4 )

}

module.exports = debug