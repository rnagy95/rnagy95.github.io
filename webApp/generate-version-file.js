const { version } = require('./package.json');
const fs = require('fs');

const content = `{"APP_VERSION": "v${version}"}`;

fs.writeFileSync('src/assets/version.json', content);
console.log('Version file generated:', version);
