import jwt from 'jsonwebtoken';

function isLogin(req, res, next) {
    const token = req.headers['auth-token'];

    if (!token) {
      return res.status(401).json({ message: 'Acceso denegado' });
    }
  
    try {

      const verified = jwt.verify(token, 'CLAVE_SECRETA');
      req.user = verified;

    } catch (err) {

      return res.status(400).json({ message: 'Token no válido' });

    }

    next();
}

function isAdmin(req, res, next) {
    const role = req.user.role;

    if (role !== 'admin') {
      return res.status(401).json({ message: 'Acceso denegado' });
    }

    next();
}

export{
    isLogin,
    isAdmin
}