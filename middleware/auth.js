//ensure the user is aunthenticated
exports.ensureautenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login')
};

//ensure user is a sales agent
exports.ensureAgent = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect("/login");
};

