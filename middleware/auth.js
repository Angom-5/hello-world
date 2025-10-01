//ensure the user is aunthenticated
exports.ensureauthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login')
};

//ensure user is a sales agent
exports.ensureMember = (req, res, next) => {
  if (req.session.user && req.session.user.role ==="Member") {
    return next();
  }
  res.redirect("/sign-up");
};

exports.ensureManager= (req, res, next) => {
  if (req.session.user && req.session.user.role === "Manager") {
    return next();
  }
  res.redirect("/login");
};

exports.ensureAttendant = (req, res, next) => {
  if (req.session.user && req.session.user.role === "Attendant") {
    return next();
  }
  res.redirect("/login");
};

