async function findAll() {
  return fetch("http://localhost:2022/api/projects").then((response) =>
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
