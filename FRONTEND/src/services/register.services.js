
async function create(product) {
    return fetch('http://localhost:2022/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
}

export {
    create
}