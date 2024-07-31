 /* this file for Define the API endpoints for fetching suggestions. */

 const express = require('express');
 const router = express.Router();
 const suggestionsController = require('../controllers/suggestionsController');

 router.post('/', suggestionsController.getSuggestions);

 module.exports = router;