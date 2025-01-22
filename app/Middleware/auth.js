const jwt= require('jsonwebtoken')
const knex= require('../../database/knex.config')

async function authentication (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(400).json({ res:false,message: "unauthorized" });
  }
  const token = await req.headers.authorization.split(" ")[1];
  const decodedJwtToken = jwt.decode(token);
  const user=await knex('users').where('id',decodedJwtToken.sub).first()
 if(!user){
  return res.status(400).json({
    res:false,
    message: "unauthorized",
  });
 }
  const isRevoked =await knex('access_tokens').where('userId',user.id).where('id',decodedJwtToken.jti).first()
  if (!user || !isRevoked ) {
    return res.status(400).json({
      res:false,
      message: "unauthorized",
    });
  }
  if( isRevoked.revoked === 1){
    return res.status(400).json({
      res:false,
      message: "unauthorized",
    });
  }
  req.user = {
    id: user.id,
    jti: decodedJwtToken.jti
  };
  return next();

}

module.exports = authentication