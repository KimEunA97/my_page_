const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './page/index.html', // JS 진입점 파일 경로
  },
  output: {
    filename: 'bundle.js', // 번들 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일 출력 경로
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader', // HTML 파일을 로드하도록 설정
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // JavaScript 파일을 번들링할 때 사용할 로더
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // CSS 파일을 번들링할 때 사용할 로더
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './page/index.html', // HTML 템플릿 파일 경로
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // 추출된 CSS 파일 이름
    }),
  ],
};
