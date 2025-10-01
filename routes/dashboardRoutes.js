const express = require('express');
const router = express.Router();
const {
  ensureauthenticated,
  ensureManager,
  ensureAttendant
} = require("../middleware/auth");


router.get('/dashboard', (req, res) => {
    res.render('userDashboard', { title: 'User Dashboard' });
})


router.get('/attendant', ensureauthenticated, ensureAttendant, async (req, res) => {
    res.render('attendantDashboard', { title: 'Attendant Dashboard' });
})

router.post(
  "/attendant",
  ensureauthenticated,
  ensureAttendant,
  async (req, res) => {
    try {
      const user = new userModel(req.body);
      await user.save();
      res.redirect("/login");
    } catch (error) {
      res.status(400).send("Sorry something went wrong!");
    }
  }
);


router.get('/manager', ensureauthenticated, ensureManager, async (req, res) => {
    res.render('managerDashboard', { title: 'Manager Dashboard' });
})

module.exports = router;