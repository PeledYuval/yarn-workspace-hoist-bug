const _ = require('lodash');

const array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

const keyed = _.keyBy(array, 'dir');

console.log('result: ', JSON.stringify(keyed));