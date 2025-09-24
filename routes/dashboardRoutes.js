// const express = require('express');
// const router = express.Router();
// const {
//   ensureauthenticated,
//   ensureManager,
//   ensureAttendant
// } = require("../middleware/auth");


router.get('/dashboard', (req, res) => {
    res.render('userdashboard', { title: 'User Dashboard' });
})


// exports.ensureauthenticated = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }

// router.get('/attendant', ensureAttendant, async (req, res) => {
//     res.render('attendantDashboard', { title: 'Attendant Dashboard' });
// })

router.post("/attendant", async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.redirect("/login");
  } catch (error) {
    res.status(400).send("Sorry something went wrong!");
  }
});


// router.get('/manager'), ensureManager, async (req, res) => {
//     res.render('managerDashboard', { title: 'Manager Dashboard' });
// }

// module.exports = router;