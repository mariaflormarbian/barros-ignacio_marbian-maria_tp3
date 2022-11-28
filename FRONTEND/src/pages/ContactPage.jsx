function ContactPage() {
  return (
    <section id="contact" className="full-height px-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4">
            <h6 className="text-brand">CONTACTO</h6>
            <h1>¿Interesado en trabajar juntos? Hablemos</h1>
          </div>

          <div className="col-lg-8">
            <form action="#" className="row g-lg-3 gy-3">
              <div className="form-group col-md-6">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese su email"
                />
              </div>

              <div className="form-group col-12">
                <label>Asunto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese el asunto"
                />
              </div>

              <div className="form-group col-12">
                <label>Comentario</label>
                <textarea
                  name="mensaje"
                  rows="4"
                  className="form-control"
                  placeholder="Ingrese sú mensaje"
                ></textarea>
              </div>

              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">
                  Contactar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
