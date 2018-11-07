const fse = require('fs-extra')

const componentName = 'coa-component'
fse.copySync('dist', '\\\\webserver1\\inetpub\\static\\Assets\\react-components\\' + componentName);

console.log(`Copied to webserver1: Available at https://static.auburnalabama.org/assets/react-components/${componentName}`)
