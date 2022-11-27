import '../css/Home.css';

function HomePage(){
    return (

       <section classNameName='Home'>

                <div className="row">

                    <div className="col-lg-10">

                        <h1 className="display-4 fw-bold" data-aos="fade-up">Técnico Superior en <span className="text-brand ">Diseño y Programación Web</span></h1>
                        <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">Soy Ignacio Barros y creo sitios web (frontend/backend).</p>

                        <div data-aos="fade-up" data-aos-delay="600">

                            <a href="/proyectos" className="btn btn-brand me-3">Explora mis proyectos</a>
                            <a href="#" className="link-custom">Cel: (+54) 9 11 3357 - 4710</a>

                        </div>

                    </div>

                </div>

        </section>

    )
}

export default HomePage