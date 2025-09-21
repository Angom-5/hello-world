//ensure the user is aunthenticated
exports.ensureautenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login')
};

//ensure user is a sales agent
exports.ensureAgent = (req, res, next) => {
  if (req.session.user && req.session.user.role ==="Manager") {
    return next();
  }
  res.redirect("/");
};

exports.ensureManager= (req, res, next) => {
  if (req.session.user && req.session.user.role === "Member") {
    return next();
  }
  res.redirect("/");
};

exports.ensureAdministrator = (req, res, next) => {
  if (req.session.user && req.session.user.role === "Attendant") {
    return next();
  }
  res.redirect("/");
};

