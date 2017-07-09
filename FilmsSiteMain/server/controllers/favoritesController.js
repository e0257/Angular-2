    var FavoriteItemModel  = require("../../server/models/FavoriteItem");

    function handleError(res, error) {
        res.statusCode = 500;
        log.error('Internal error(%d): %s',res.statusCode,error.message);
        return res.send({ error: 'Server error' });
    }

    var favoritesController = {

      inFavorite: function (req, res) {
          let itemId =  req.body.filmId;
        return FavoriteItemModel.findOne({'filmId': itemId}).exec(function (err, favoritesList) {
            if (!err) {
                return res.send(favoritesList);
            } else {
               handleError(res, err); 
            }
        });
      },

      getFavoritesList: function (req, res) {
        return FavoriteItemModel.find(function (err, favoritesList) {
            if (!err) {
                return res.send(favoritesList);
            } else {
               handleError(res, err); 
            }
        });
      },

      saveFavoriteItem: function(req, res) {
        //var item = new FavoriteItemModel(req.body);

        console.log(req.body);
        /*console.log(item);
        return res.send({ status: 'OK', item: item });*/

// Find the document

FavoriteItemModel.findOneAndUpdate(
    {filmId: req.body.filmId}, 
    {$set:{status: req.body.status}}, 
    {upsert: true, new: true, setDefaultsOnInsert: true },
    function(err) {
            if (!err) {
                console.log("Favorites item is updated");
                return res.send({ status: 'OK' });
            } else {
                /*new FavoriteItemModel(req.body).save(function (err) {if (!err) {
                console.log("Favorites item is created");
                return res.send({ status: 'OK' });
                 }});*/
               /* res.statusCode = 500;
                res.send({ error: 'Server error' });
                log.error('Internal error(%d): %s',res.statusCode,err.message);*/
            }
        });
        
       /* item.save(function (err) {
            if (!err) {
                console.log("Favorites item is created");
                return res.send({ status: 'OK', item: item });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });*/
 
        }
      }

module.exports = favoritesController;
