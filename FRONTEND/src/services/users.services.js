
async function create(user) {
    return fetch('http://localhost:2022/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
}

async function login(email, password) {

    const user = {
        email: email,
        password: password
    }

    return fetch('http://localhost:2022/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
      .then((response) => {

        if(response.ok){
            return response.json()
        }else {
            throw new Error("Error al iniciar sesión");
        }
    })
}

export {
    create,
    login
}