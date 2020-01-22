import testList from "./testList";
import testListAvatarBreed from "./testListAvatarBreed";
// eslint-disable-next-line no-unused-vars
import testRandomAvatar from "./testRandomAvatar";


class DogsApi{
    get listDogs(){
        return testList();
    }
    // eslint-disable-next-line no-unused-vars
    getRandomAvatarBreed(breed){
        return  "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5055.jpg";
        // eslint-disable-next-line no-unreachable
        //return testRandomAvatar();
    }
    get listAvatarBreed(){
        return testListAvatarBreed();
    }
}

export default new DogsApi;