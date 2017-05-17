'use strict';
(function () {

    var model = function () {
        var url = "http://www.omdbapi.com/?page=1&s=";
        function getData() {
            return $.get(url + "Matrix", function (data) {
                console.log("Initial data is loaded");
                return data;
            })
        }

       /* function saveData(item) {
            console.log("Data successfuly saved: ");
            console.log(item);
        }

        function updateData(data) {
            console.log("Data successfuly updated: " + data.counter);
            console.log(data);
        }*/

        //add
        function searchData(film) {
            return $.get(url + film, function (data) {
                console.log("Film is searched");
                return data;
            })
        }

        return {
            getData: getData,
           // saveData: saveData,
           // updateData: updateData,
            searchData: searchData
        }
    }

    window.app = window.app || {};
    window.app.model = model();



}())
