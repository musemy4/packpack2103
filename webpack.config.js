const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugins = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //entry files
    entry: ['@babel/polyfill', './src/js/main.js', './src/style/main.scss'],
    //컴파일_ 번들링된 js파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },

    //따로 저장하고 싶을시에
    //컴파일 번들링된 css 파일이 저장될 경로와 이름 지정
    // plugins: [
    //     new MiniCssExtractPlugin({filename: '../css/style.css'})
    // ],
    //컴파일 번들링된 html 파일이 저장
    plugins: [
        // new HtmlPlugins({
    //         template: './src/index.html'
    //     }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss', 'css', 'tff']
    },
    module: {
        rules: [ //파일에 대한 정규 표현식 입력
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,  //.js로 끝나는 친구들은 
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader', //이 로더를 사용해라
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    // MiniCssExtractPlugin.loader, //이것이 없으면 자바스크립트 문자열로 변환
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 1000000, //1000kb 미만의 이미지,파일들은 복사하지않고 문자열 형태로 번들 파일에 넣어라
                }
            },
         
                        
        ]},
    
    // devtool: 'source-map', //map파일 같이생성
    mode: 'development'
}