"use strict";

export default new class localStorage{

    constructor() {
        this._obj = [];

        this._update();
    }

    _update(){
        try{
            let _tmp =  window.localStorage.getItem('favoriteDogs').split('@');



            this._obj = _tmp.map((elem) => {
                let _tmp = elem.split(',');

                return {
                    name: _tmp[0],
                    url: _tmp[1]
                };
            });



        } catch (e) {
            this._obj = [];
        }



    }
    _arrToString(){
        let result = '';



        this._obj.forEach(elem => {


            result += (this._objToString(elem) + '@');


        });



        return result;
    }
    _objToString(newFavorite){





        return `${newFavorite.name},${newFavorite.url}`;
    }
    _checkIn(newFavorite){
        return this._obj.find((elem) => {
            return elem.url === newFavorite.url;
        });
    }

    addFavorite(newFavorite){
        if (!this._checkIn(newFavorite)){

            window.localStorage.setItem('favoriteDogs', this._arrToString() +  this._objToString(newFavorite) );
            this._update();

        }
    }
    removeFavorite(newFavorite){
        if (this._checkIn(newFavorite)){



            let pos = this._obj.indexOf(newFavorite);
            this._obj.splice(pos, 1);
            window.localStorage.setItem('favoriteDogs', this._arrToString());
        }
    }
    updateFavorite(newFavorite){
        newFavorite = {
            name: newFavorite.name,
            url: newFavorite.url
        };


 // eslint-disable-next-line no-console
        console.log(newFavorite, this._obj[0]);
        if (this._checkIn(newFavorite)){
            this.removeFavorite(newFavorite)
        }else{
            this.addFavorite(newFavorite);
        }
    }
    getList(){
        return this._obj;
    }

}