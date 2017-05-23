'use strict';
(function () {

    function Gallery(items) {
        this.DOMElements = {
           // saveBtn: document.querySelector("#saveBtn"),
           // refreshBtn: document.querySelector("#refreshBtn"),

            //add
            searchInp: document.querySelector("#searchInp"),
            searchBtn: document.querySelector("#searchBtn"),
            catalog: document.getElementById("catalog")
        };
        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;

        this.eventHolder = $({});
       // this.updateEventName = "update";
        this.init();
        //add
        this.searchEventName = "search";
    }

    Gallery.prototype = {
        init: function () {
            this.buildGallery();
            this.initListeners();
        },
        buildGallery: function () {
            console.log("Gallery is ready");
            console.log(this.items);
            this.loadHTML();
        },
        initListeners: function () {
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });*/
          /*  this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.eventHolder.trigger(this.updateEventName, [{ counter: this.counter++ }]);
            });*/

            //add
            this.DOMElements.searchBtn.addEventListener("click", () => {
                this.eventHolder.trigger(this.searchEventName, this.DOMElements.searchInp.value);
            });
        },

        //add
        loadHTML: function () {
            let fragment = document.createDocumentFragment(),
                arrFilms = this.items.Search || [];
            this.DOMElements.catalog.innerText = "";

            if (arrFilms.length) {
                arrFilms.forEach(film => {

                    let div = document.createElement("div"),
                        img = document.createElement("img");

                    div.className = "card";
                    div.innerText = film.Title;
                    img.src = film.Poster;
                    div.appendChild(img);
                    fragment.appendChild(div);
                });
            }
            else {
                let h1 = document.createElement("h1");
                h1.innerText="По запросу ничего не найдено"; 
                fragment.appendChild(h1);
            }
            this.DOMElements.catalog.appendChild(fragment);

        }

    }

    window.app = window.app || {};
    window.app.Gallery = Gallery;

}());
