
function ServicesPage(){
    return (

        <section id="services" className="full-height px-lg-5">

        <div className="container">
    
            <div className="row pb-4" data-aos="fade-up">
                <div className="col-lg-8">
                    <h6 className="text-brand">SERVICIOS</h6>
                    <h1>Servicios que brindo</h1>
                </div>
            </div>
    
            <div className="row gy-4">
    
                <div className="col-md-4" data-aos="fade-up">
                    <div className="service p-4 bg-base rounded-4 shadow-effect">
                        <div className="iconbox rounded-4">
                            <i className="las la-feather"></i>
                        </div>
                        <h5 className="mt-4 mb-2">UX Design</h5>
                        <p>Elaboro experiencias agradables y de alto rendimiento adaptadas y centradas en la conversión.</p>
                        <a href="#" className="link-custom">Leer Más</a>
                    </div>
                </div>
    
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="service p-4 bg-base rounded-4 shadow-effect">
                        <div className="iconbox rounded-4">
                            <i className="las la-pencil-ruler"></i>
                        </div>
                        <h5 className="mt-4 mb-2">Branding</h5>
                        <p>Gestion y coordinacion de una estrategia para aportar valor de mercado y una ventaja competitiva a una marca.</p>
                        <a href="#" className="link-custom">Leer Más</a>
                    </div>
                </div>
    
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="service p-4 bg-base rounded-4 shadow-effect">
                        <div className="iconbox rounded-4">
                            <i className="las la-laptop-code"></i>
                        </div>
                        <h5 className="mt-4 mb-2">Web Designing</h5>
                        <p>Diseño y desarrolo de una sitio web adaptable a todo tamaño de pantalla y a cualquier necesidad.</p>
                        <a href="#" className="link-custom">Leer Más</a>
                    </div>
                </div>
    
            </div>
    
        </div>
    
    </section>
    
    )
}

export default ServicesPage