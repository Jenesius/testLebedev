"use strict";

export default new class localStorage{

    constructor() {
        this._obj = [];

        this._update();
    }
    _update(){

            let _tmp =  window.localStorage.getItem('favoriteDogs').split('@');


            if (_tmp[0] === "" || _tmp.length === 0){
                this._obj = [];
                return;
            }


            this._obj = _tmp.map((elem) => {
                let _tmp = elem.split(',');

                return {
                    name: _tmp[0],
                    url: _tmp[1]
                };
            });
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
        return this._obj.findIndex((elem) => {
            return elem.url === newFavorite.url;
        });
    }

    addFavorite(newFavorite){
        if (this._checkIn(newFavorite) === -1){
            window.localStorage.setItem('favoriteDogs', this._arrToString() +  this._objToString(newFavorite) );
            this._update();
        }
    }
    removeFavorite(newFavorite){
        let pos = this._checkIn(newFavorite);

        if (pos !== -1){

            this._obj.splice(pos, 1);
            let _tmp = this._arrToString();

            let _tmp1 = '';
            if (_tmp[_tmp.length - 1] === '@' )
                _tmp1 = _tmp.slice(0, -1);

            window.localStorage.setItem('favoriteDogs', _tmp1);
        }
    }
    updateFavorite(newFavorite){
        newFavorite = {
            name: newFavorite.name,
            url: newFavorite.url
        };
        if (this._checkIn(newFavorite) !== -1){
            this.removeFavorite(newFavorite)
        }else{
            this.addFavorite(newFavorite);
        }
    }
    getList(){
        return this._obj;
    }

}