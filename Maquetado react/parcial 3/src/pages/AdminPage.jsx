

function AdminPage(){
    return (
<section className="full-height px-lg-5">

<div className="container">

    <div className="row pb-4">
        <div className="col-lg-8">
            <h6 className="text-brand">ADMINISTRAR PROYECTOS</h6>
            <h1>Mis Proyectos</h1>
        </div>
    </div>

    <div className="row gy-5">

        <div className="col-lg-12">

            <div className="cards">

                <div className="card-single bg-base p-4 rounded-4">

                    <div>
                        <p className="h3">
                            {/* <%= projects.length %> */}
                        </p>
                        <span>Proyectos</span>
                    </div>
                    <div>
                        <span className="las la-code ps-2"></span>
                    </div>

                </div>

                <div className="card-single bg-base p-4 rounded-4">
                    <div>
                        <p className="h3">
                            {/* <%= projects.filter(obj=> obj.public === false).length %> */}
                        </p>
                        <span>Ocultos</span>
                    </div>
                    <div>
                        <span className="las la-eye-slash ps-2"></span>
                    </div>

                </div>

            </div>

            <div className="mt-4">

                <div>

                    <div>

                        <div className="pb-4">

                            <a href="/admin/projects/nuevo" className="btn btn-brand">Agregar Proyecto</a>

                        </div>

                        <div className="bg-base">

                            <table className="table">

                                <thead>

                                    <tr>
                                        <th scope="col">
                                            Proyecto
                                        </th>
                                        <th scope="col">
                                            Link
                                        </th>
                                        <th scope="col">
                                            Imagen
                                        </th>
                                        <th scope="col">
                                            Mostrar
                                        </th>
                                        <th scope="col">
                                            Acciones
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>
{/* 
                                    <% projects.forEach(element=> { %>

                                        <tr>

                                            <td>
                                                <%= element.name %>
                                            </td>
                                            <td>
                                                <%= element.link %>
                                            </td>
                                            <td>
                                                <img src="<%= element.img %>" className="img-table">
                                            </td>

                                            <td>
                                                <%- (element.public) ? '<i className="las la-eye"></i>'
                                                    : '<i className="las la-eye-slash"></i>' %>
                                            </td>

                                            <td>

                                                <form action="/admin/projects/<%= element._id %>/editar" className="pb-3 pt-3" method="get">

                                                    <button type="submit" className="btn btn-success">Editar</button>

                                                </form>

                                                <form action="/admin/projects/<%= element._id %>/eliminar" className="pb-3 pt-3" method="get">

                                                    <button type="submit" className="btn btn-danger">Eliminar</button>

                                                </form>

                                                <form action="/admin/projects/<%= element._id %>/publicar" className="pb-3 pt-3" method="post">

                                                    <input className="visually-hidden" type="number" name="public" id="public" value="<%= (element.public) ? 1 : 0 %>">

                                                    <button id="butonPublic" type="submit" className="btn btn-primary"><%= (element.public) ? 'Ocultar' : 'Mostrar' %></button>

                                                </form>

                                            </td>

                                        </tr>

                                        <% }); %> */}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

</section>
    
    )
}

export default AdminPage