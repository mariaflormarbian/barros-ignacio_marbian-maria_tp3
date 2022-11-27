function RegisterPage(){
    return (
<section id="contact" className="full-height px-lg-5">

<div className="container">

    <div className="row justify-content-center text-center">
        <div className="col-lg-8 pb-4">
            <h1>Registrarse</h1>
        </div>

        <div className="col-lg-8">

            <form action=" <%= (project) ? `/admin/projects/${project._id}/editar` : '/admin/projects/nuevo' %>" method="post" enctype="application/x-www-form-urlencoded" className="row g-lg-3 gy-3">

                <div className="form-group col-md-6">
                    <label className="visually-hidden" for="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Email"                    / >
                </div>

                <div className="form-group col-md-6">
                    <label className="visually-hidden" for="link">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="form-control" 
                        placeholder="Contraseña"
                   / >
                </div>

                <div className="form-group col-12 d-grid">
                    <button type="submit" className="btn btn-brand">Registrar</button>
                </div>

            </form>

        </div>

    </div>

</div>

</section>

    )
}

export default RegisterPage