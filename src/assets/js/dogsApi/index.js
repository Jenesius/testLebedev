class DogsApi{
    getListDogs(){
        let _url = 'https://dog.ceo/api/breeds/list/all';

        return new Promise((resolve, reject) => {
           fetch(_url)
               .then(res => {
                   return res.json();
               })
               .then(res => {

                   let _arr = [];

                   for(let key in res.message){
                       _arr.push(key);
                   }

                   resolve(_arr);
               })
               .catch(err => {
                   reject(err);
               })
        });
    }
    async getRandomAvatarBreed(breed){
        let _url = `https://dog.ceo/api/breed/${breed}/images/random`;

        let response = await fetch(_url);

        if (response.ok){
            let _tmp = await response.json();

            return  _tmp.message;

        } else {
            //console.error('getRandomAvatar');
        }

    }
    getListAvatarBreed(breed){
        let _url = `https://dog.ceo/api/breed/${breed}/images`;

        return new Promise((resolve, reject) => {
            fetch(_url)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    resolve(res.message);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

export default new DogsApi;