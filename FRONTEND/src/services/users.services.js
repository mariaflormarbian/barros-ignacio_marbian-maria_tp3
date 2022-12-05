
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
    return fetch('http://localhost:2022/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password)
    })
      .then((reponse) => {
        console.log(reponse);
        if(reponse.ok){
            return reponse.json()

        }else {
            throw new Error("Error al iniciar sesión");
        }
    })
}

export {
    create,
    login
}