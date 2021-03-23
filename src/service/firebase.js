import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    };

    postPokemon = (key, pokemon) => {
         this.database.ref(`pokemon/${key}`).set(pokemon)
    };

    addPokemon = async (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database
            .ref('pokemons/' + newKey)
            .set(data).then(() => cb())
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off()
    }
}

export default Firebase;
