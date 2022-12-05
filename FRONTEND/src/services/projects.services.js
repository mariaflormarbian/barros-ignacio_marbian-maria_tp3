async function findAll() {
  return fetch("http://localhost:2022/api/projects",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGRlYmRiMmQ0YTJkZGQzN2I5YzkzYyIsImVtYWlsIjoiYnJpYW4uYXByb2JhbWVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjcwMjQ3NTMzfQ.q4TRpjLjDt2-xB3tqUi6AEqsnd_hKzi6RJnNHE92lfg"
    },
  })
  .then((response) =>
    response.json()
  );
}

async function findById(id) {
  console.log(id);
  return fetch(`http://localhost:2022/api/projects/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

async function create(project) {
  return fetch("http://localhost:2022/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  }).then((response) => response.json());
}

async function editById(id, project) {
  return fetch(`http://localhost:2022/api/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  }).then((response) => response.json());
}

async function getProject(id) {
  return fetch(`http://localhost:2022/api/projects/${id}`).then((response) =>
    response.json()
  );
}
async function deleteById(id) {
  console.log(id);
  return fetch(`http://localhost:2022/api/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { findAll, findById, create, editById, getProject, deleteById };
