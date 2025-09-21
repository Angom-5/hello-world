const express = require("express");
const router = express.Router();
const {
  ensureauthenticated,
  ensureManager,
  ensureAdministrator,
} = require("../middleware/auth");

const UserModel = require("../models/userModel");
const passport = require("passport");
const userModel = require("../models/userModel");

//home route
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

//sign-in route
router.get("/sign-in", (req, res) => {
  res.render("signin");
});

//login route
router.get("/login", (req, res) => {
  res.render("login");
});

//adding to the database
router.post("/sign-in", async (req, res) => {
  try {
    const user = new userModel(req.body);
    console.log(req.body);
    let existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("Already registered email!");
    } else {
      await userModel.register(user, req.body.password, (error) => {
        if (error) {
          throw error;
        }
        res.redirect("/login");
      });
    }
    user.save();
  } catch (error) {
    res.status(400).send("Sorry something went wrong!");
  }
});


router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.session.user = req.user;
    let role = req.user.role;
    if (role === "Attendant") {
      res.redirect("/attendant");
    } else if (role === "Manager") {
      res.redirect("/manager");
    } else if (role === "Member") {
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  }
);

//logout route
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).send("Error logging out!")
      }
      res.redirect('/');
    })
  }
});


router.post("/logout", (req, res) => {
  req.logout((error) => {
    if (error) {
      return res.status(500).send("Error logging out!");
    }
    res.redirect("/");
  });
});

//create a list of users
router.post("/sign-in", async (req, res) => {
  try {
    let users = await userModel.find().sort({ $natural: -1 });
    res.render("usertable", { users });
  } catch (error) {
    res.status(400).send("Sorry something went wrong!");
  }
});

//delete route
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    await userModel.deleteOne({ _id: req.body.id });
    res.redirect('/sign-in');
  } catch (error) {
    res.status(400).send("Unable to delete user!");
  }
})

module.exports = router;