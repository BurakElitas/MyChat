const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');

//models
const User=require('../models/user');

passport.use(new GoogleStrategy({
    clientID:'616961098281-boop8iapr53htte23lvjodgvl78h4m1a.apps.googleusercontent.com',
    clientSecret:'80uNPMYn1W_Zq4o8yCsumf-d',
    callbackURL:'/auth/google/callback'
},((accessToken,refreshToken,profile,done)=>{
    const data=profile._json;
    User.findOrCreate({
        'googleId':data.sub
    },{
        name:data.given_name,
        surname:data.family_name,
        profilePhotoUrl: data.picture,
    },(err,user)=>{
        return done(err,user);
    })

})
));

passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
});


module.exports=passport;