const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route   GET api/profile/me
// @desc    Get current users profile
// @acces   Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/profile/me
// @desc    Create or update user profile
// @acces   Private
router.post('/', [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty()
]], async (req, res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin
      } = req.body;

      //Build profile object
      const profileFields = {};
      profileFields.user = req.user.id;

      if(company) profileFields.company = company;
      if(website) profileFields.website = website;
      if(location) profileFields.location = location;
      if(bio) profileFields.bio = bio;
      if(status) profileFields.status = status;
      if(githubusername) profileFields.githubusername = githubusername;
      if(skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim());
      }

});

module.exports = router;