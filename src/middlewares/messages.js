export default function messages(req, res, next) {
  res.locals.erro = req.flash('errors');

  return next();
}