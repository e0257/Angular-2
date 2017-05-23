(function () {

    var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;

    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/

    /*function bindUpdate() {
        gallery.eventHolder.on(gallery.updateEventName, (event, item) => {
            model.updateData(item);
        });
    }*/

    //add
    function bindSearch() {
        gallery.eventHolder.on(gallery.searchEventName, (event, searchFilm) => {
          //  let searchFilm = gallery.DOMElements.searchInp.value;
            model.searchData(searchFilm).then(films => {
                console.log(films);
                gallery.items = films;
                gallery.buildGallery();
            });


        });
    }

    function bindEvents() {
        //bindSave();  
        //bindUpdate();

        //add
        bindSearch();
    }

    function initGallery(films) {
        gallery = new Gallery(films);
    }

    function init() {
        model.getData().then((films) => {
            initGallery(films);
            bindEvents();
        });
    }
    init();

}())
