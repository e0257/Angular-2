(function () {

    var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;

    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/

    function bindUpdate() {
        gallery.eventHolder.on(gallery.updateEventName, (event, item) => {
            model.updateData(item);
        });
    }

    //add
    function bindSearch() {
        gallery.eventHolder.on(gallery.searchEventName, (event, item) => {
            let searchFilm = gallery.DOMElements.searchInp.value;
            model.searchData(searchFilm).then(films => {
                console.log(films);
                gallery.items = films;
                gallery.buildGallery();
            });


        });
    }

    function bindEvents() {
        //bindSave();  
        bindUpdate();
        //add
        bindSearch();
    }

    function initGallery(data) {
        gallery = new Gallery(data);
    }

    function init() {
        model.getData().then((data) => {
            initGallery(data);
            bindEvents();
        });
    }
    init();

}())
