/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Instit from '../api/instit/instit.model';
import Ecole from '../api/ecole/ecole.model';
import Rattachement from '../api/rattachement/rattachement.model';

var moment = require('moment');

Thing.find({}).remove()
.then(() => {
    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
        'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
        'Stylus, Sass, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
    }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
    }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
    }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
    }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
    });
});

User.find({}).remove()
.then(() => {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
    }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
    })
    .then(() => {
        console.log('finished populating users');
    });
});

Instit.find({}).remove()
.then(() => {
    Instit.create({
        _id: 1,
        firstName: 'FirstName 1',
        lastName: 'LastName 1',
        //birthDate: new Date('12/04/75','MM/DD/YY')
        birthDate: new Date(moment('12/04/75',"DD/MM/YY"))
    }, {
        _id: 2,
        firstName: 'FirstName 2',
        lastName: 'LastName 2',
        //birthDate: new Date('01/02/81','MM/DD/YY')
        birthDate: new Date(moment('01/02/81',"DD/MM/YY"))
    },{
        _id: 3,
        firstName: 'FirstName 3',
        lastName: 'LastName 3',
        //birthDate: new Date('24/09/62','MM/DD/YY')
        birthDate: new Date(moment('24/09/62',"DD/MM/YY"))
    },{
        _id: 4,
        firstName: 'FirstName 4',
        lastName: 'LastName 4',
        //birthDate: new Date('12/11/88','MM/DD/YY')
        birthDate:  new Date(moment('12/11/88',"DD/MM/YY"))
    })
    .then(() => {
        console.log('finished populating instit');
    });
});


Ecole.find({}).remove()
.then(() => {
    Ecole.create({
        _id:'0790353E',
        name: 'Ecole élémentaire publique',
        numero: null,
        complement: null,
        adresse: 'Grand\'rue',
        codePostal: 79270,
        ville:'Sansais',
        longitude: -0.5864199999999755,
        latitude: 46.274812
    },{
        _id:'0790551V',
        name: 'Elémentaire Ferdinand-Buisson',
        numero: 12,
        complement: null,
        adresse: 'avenue de la Magdeleine',
        codePostal: 79100,
        ville:'Thouars',
        longitude:  -0.211499,
        latitude: 46.976762
    },{
        _id:'0790548S',
        name: 'Groupe scolaire Paul-Bert',
        numero: 6,
        complement: null,
        adresse: 'rue Louis Braille',
        codePostal: 79100,
        ville:'Thouars',
        longitude:-0.215143,
        latitude:46.991300
    },{
        _id:'0790552W',
        name: 'Groupe scolaire Anatole France',
        numero: 10,
        complement: null,
        adresse: 'rue Anatole-France',
        codePostal: 79100,
        ville:'Thouars',
        longitude: -0.209506,
        latitude:46.983434
    },{
        _id:'0790473K',
        name: 'École publique \"Bonneval\"',
        numero: 21,
        complement: null,
        adresse: 'rue des Petits Bournais',
        codePostal: 79100,
        ville:'Saint-Jean de Thouars',
        longitude:-0.216464,
        latitude:46.962085
    },{
        _id:'0790482V',
        name: 'École publique \"Arc-en-ciel\"',
        numero: 2,
        complement: null,
        adresse: 'rue du Lavoir - Vrères - ',
        codePostal: 79100,
        ville:'Saint-Léger de Montbrun',
        longitude:-0.119485,
        latitude:46.994438
    },{
        _id:'0790346X',
        name: 'École Maurice Martinon',
        numero: 1,
        complement: null,
        adresse: 'rue des écoles',
        codePostal: 79100,
        ville:'Sainte-Verge',
        longitude:-0.210522,
        latitude:47.007516
    })
    .then(() => {
        console.log('finished populating ecole');
    });
});


Rattachement.find({}).remove()
.then(() => {
    Rattachement.create({
        id:1,
        ecole:"0790551V",
        instit:1
    })
    .then(() => {
        console.log('finished populating rattachement');
    });
});
