const express = require( 'express' );
const router = express.Router();
const { createProfile, getAllProfile, getProfile,updateProfile, deleteProfile} = require( '../controllers/studentController' )
const upload = require('../utils/multer')


router.post( '/profiles', upload.fields( [ { name: "profileImage", maxCount: 1 } ] ), createProfile )
router.get("/getall", getAllProfile)
router.get("/:id", getProfile)
router.put( '/profiles/:id', upload.fields( [ { name: "profileImage", maxCount: 1 } ] ), updateProfile )
router.delete("/profiles/:id", deleteProfile)

module.exports = router;