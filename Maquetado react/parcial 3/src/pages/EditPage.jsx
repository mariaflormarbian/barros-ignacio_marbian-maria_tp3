function EditPage(){
    return (
<section id="contact" className="full-height px-lg-5">

<div className="container">

    <div className="row justify-content-center text-center">
        <div className="col-lg-8 pb-4">
            <h6 className="text-brand">Modificar</h6>
            <h1>(Nombre del proyecto)</h1>
        </div>

        <div className="col-lg-8">

            <form action=" <%= (project) ? `/admin/projects/${project._id}/editar` : '/admin/projects/nuevo' %>" method="post" enctype="application/x-www-form-urlencoded" className="row g-lg-3 gy-3">

                <div className="form-group col-md-6">
                    <label className="visually-hidden" for="name">Nombre del Proyecto</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="form-control" 
                        placeholder="Nombre del Proyecto"
                        value="<%= (project) ? project.name : '' %>"
                    / >
                </div>

                <div className="form-group col-md-6">
                    <label className="visually-hidden" for="link">Link del Repositorio</label>
                    <input 
                        type="text" 
                        name="link" 
                        id="link" 
                        className="form-control" 
                        placeholder="Link del Repositorio"
                        value="<%= (project) ? project.link : '' %>"
                   / >
                </div>

                <div className="form-group col-md-9">
                    <label className="visually-hidden" for="img">Link de la imagen</label>
                    <input 
                        type="text" 
                        name="img"
                        id="img"
                        className="form-control" 
                        placeholder="Link de la imagen"
                        value="<%= (project) ? project.img : '' %>"
                    / >
                </div>

                <div className="form-group form-switch col-md-3">

                    <input 
                        type="checkbox" 
                        name="public"
                        id="public"
                        className="form-check-input" 
                    / >
                    <label for="public" className="form-check-label">Public</label>

                </div>

                <div className="form-group col-12">
                    <label className="visually-hidden" for="description">Descripcion del Proyecto</label>
                    <textarea 
                        name="description" 
                        id="description"
                        rows="4" 
                        className="form-control"
                        placeholder="Descripcion del Proyecto">(Descripcion del proyecto)</textarea>
                </div>

                <div className="form-group col-12 d-grid">
                    <button type="submit" className="btn btn-brand">Actualizar</button>
                </div>

            </form>

        </div>

    </div>

</div>

</section>

    )
}

export default EditPage