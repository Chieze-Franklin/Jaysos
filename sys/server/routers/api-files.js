var checksCtrlr = require("bolt-internal-checks");

var express = require('express');

var apiFilesCtrlr = require('../controllers/api-files');

var router = express.Router();

//TODO: GET: / //gets all files by criteria
//TODO: GET: /:file //gets the file info of a file that can be served by any app

//gets the file info of the file with the specified name
router.get('/:app/:file', apiFilesCtrlr.getAppFile);

module.exports = router;