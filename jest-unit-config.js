// require de todo arquivo facilita quando fizermos alterações no arquivo jest principal não precisamos mudar aqui tambem
const config = require('./jest.config')
// e vamos rodar apenas o teste unitário
// que são todos os arquivos com a extensão spec.ts
config.testMatch = ['**/*.spec.ts']
// utilizar a flag -c no package.json para indicar esse caminho de arquivo de configuração
module.exports = config
