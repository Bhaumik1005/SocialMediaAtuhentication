const router = require("express").Router();
const passport = require("passport");


router.get("/facebook", passport.authenticate("facebook", { scope: ["profile", "email"] }), (req, res) => { });

router.get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
          return res.send(req.user);
})


router.get("/github", passport.authenticate("github", { scope: [ 'user:email' ] }));

router.get("/github/callback", passport.authenticate("github"), (req, res) => {
          return res.send(req.user);
})


router.get("/linkedin", passport.authenticate("linkedin"), (req, res) => { });

router.get("/linkedin/callback", passport.authenticate("linkedin"), (req, res) => {
          return res.send(req.user);
})

router.get("/instagram", passport.authenticate("instagram", (error, success) => {
          console.log("ERROR =======", error);
          console.log("SUCCESS =======", success);
}));

router.get("/instagram/callback", passport.authenticate("instagram"), (req, res) => {
          console.log("RES ===========", res)
          res.redirect('https://wwww.google.com');
})


module.exports = router;