class DogsApi{
    getListDogs(){
        let _url = 'https://dog.ceo/api/breeds/list/all';

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
        });
    }
    // eslint-disable-next-line no-unused-vars
    async getRandomAvatarBreed(breed){
        let _url = `https://dog.ceo/api/breed/${breed}/images/random`;

        let response = await fetch(_url);

        if (response.ok){
            let _tmp = await response.json();

            return  _tmp.message;

        } else {
            // eslint-disable-next-line no-console
            //console.error('getRandomAvatar');
        }


        /*return new Promise((resolve, reject) => {
            fetch(_url)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        })*/
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