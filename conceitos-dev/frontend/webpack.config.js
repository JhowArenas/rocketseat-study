const path = require('path'); // pega o caminho padrão do projeto

module.exports = {
    //entrada
    entry : path.resolve(__dirname, 'src', 'index.js'), //caminho para o arquivo que tem que pegar os codigos a serem convertidos
    //saida
    output: {
        path: path.resolve(__dirname, 'public'), //caminho diretorio que ira ser mandado o arquivo com os codigos ja convertidos
        filename: 'bundle.js' //arquivo que ira ser gerado com os codigos ja convertidos
    },
    devServer : {
        contentBase: path.resolve(__dirname, 'public') // Qual é o caminho para o diretorio que contem os arquivos publicos da sua aplicação
    },
    module: {
        rules : [
            {
                // Todos os arquivos .js que estão fora da pasta node_modules serão convertidos pelo webpak
                test: /\.js/, //passa o que deve procurar, no caso todos os arquivos com .js no final
                exclude: /node_modules/, // passa a pasta que deve ser uma exeção 
                use: { // define oque ele precisa utilizar
                    loader: 'babel-loader' // no caso o loader do babel
                }
            },
            {
            test: /\.css$/, 
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
            ]
            },
            {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: {
                loader: 'file-loader',
            }
            }
        ]
    }
}