import jwt from 'jsonwebtoken';
import * as tokenService from '../../services/tokens.services.js'

function isLogin(req, res, next) {
    const token = req.headers['auth-token'];

    if (!token) {
      return res.status(401).json({ message: 'Acceso denegado' });
    }
  
    try {

      const verified = jwt.verify(token, 'CLAVE_SECRETA');
     tokenService.findByToken(token)
      
     .then(function(token){
      if(!token){
        return res.status(401).json({ message: 'Acceso denegado' });
      }
     req.user = verified;
      next()
      })
      .catch(function(){
        res.status(400).json({message: 'Token invalido'});
      })

    }
    catch (err) {
      res.status(400).json({ message: 'Token invalido' });
    }

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