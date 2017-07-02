var express = require('express'),
    router  = express.Router(),
    galleryController  = require("../../server/controllers/galleryController");
    favoritesController  = require("../../server/controllers/favoritesController");

router.get('/getFavoritesList', favoritesController.getFavoritesList);
router.post('/saveFavoriteItem', favoritesController.saveFavoriteItem);
router.post('/inFavorite', favoritesController.inFavorite);


module.exports = router;