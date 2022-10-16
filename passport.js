const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const dotenv= require('dotenv').config();
passport.serializeUser(function (user, done) {
          done(null, user);
});

passport.deserializeUser(function (user, done) {
          done(null, user);
});


passport.use(new FacebookStrategy({
          clientID: process.env.facebookclientID,
          clientSecret: process.env.facebookclientSecret,
          callbackURL: process.env.facebookcallbackURL,
},
          function (accessToken, refreshToken, profile, done) {
                    console.log("accessToken---", accessToken);
                    console.log("profile---", profile);
                    return done(null, profile)
          }))

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.instagramclientID,
      clientSecret: process.env.instagramclientSecret,
      callbackURL: process.env.instagramcallbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("accessToken---", accessToken);
      console.log("profile---", profile);
      return done(null, profile);
    }
  )
);

passport.use(new LinkedInStrategy({
          clientID: process.env.linkedinclientID,
          clientSecret: process.env.linkedinclientSecret,
          callbackURL: process.env.linkedincallbackURL,
},
          function (accessToken, refreshToken, profile, done) {
                    console.log("accessToken---", accessToken);
                    console.log("profile---", profile);
                    return done(null, profile)
          }))


passport.use(new GitHubStrategy({
          clientID: process.env.githubclientID,
          clientSecret:process.env.githubclientSecret,
          callbackURL: process.env.githubcallbackURL
},
          function (accessToken, refreshToken, profile, done) {
                    console.log("accessToken---", accessToken);
                    console.log("profile---", profile);
                    return done(null, profile)
          }
));