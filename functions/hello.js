exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'HEROPY',
            age: 66,
            email: 'theseon@gmail.com'
        })
    }
}