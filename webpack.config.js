const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'public');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_URL: JSON.stringify(process.env.API_URL || '/api/'),
      SENTRY_AUTH_TOKEN: JSON.stringify(process.env.SENTRY_AUTH_TOKEN),
      SENTRY_DSN: JSON.stringify(process.env.SENTRY_DSN),
    },
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(srcPath, 'index.html'),
  }),
  !isProd && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'static/css/bundle.[name].[contenthash].css',
  }),
  isProd && new ForkTsCheckerWebpackPlugin(),
  new PreloadWebpackPlugin({
    rel: 'preload',
    fileWhiteList: [/\.(woff2|woff?)$/],
  }),
].filter(Boolean);

const getCssLoader = (withModules = false) => [
  isProd ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: withModules && {
        localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]',
      },
      importLoaders: 1,
      sourceMap: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['autoprefixer'],
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [srcPath],
      },
    },
  },
];

module.exports = {
  entry: path.resolve(srcPath, 'index.tsx'),
  output: {
    filename: 'static/js/bundle.[contenthash].js',
    path: buildPath,
    publicPath: '/',
  },
  devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
  optimization: {
    minimize: isProd,
    minimizer: isProd
      ? [
          new TerserPlugin({
            terserOptions: {
              sourceMap: true,
            },
          }),
        ]
      : [],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.(s?css|sass)$/,
        use: getCssLoader(true),
      },
      {
        test: /\.(s?css|sass)$/,
        exclude: /\.module\.(s?css|sass)$/,
        use: getCssLoader(false),
      },
      {
        test: /\.(component|c).svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              memo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        exclude: /\.(component|c).svg$/,
        type: 'asset',
        generator: {
          filename: 'static/img/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(woff2|woff?)$/,
        type: 'asset',
        generator: {
          filename: 'static/fonts/[name].[contenthash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      components: path.join(srcPath, 'components'),
      config: path.join(srcPath, 'config'),
      img: path.join(srcPath, 'img'),
      pages: path.join(srcPath, 'pages'),
      store: path.join(srcPath, 'store'),
      styles: path.join(srcPath, 'styles'),
      types: path.join(srcPath, 'types'),
      utils: path.join(srcPath, 'utils'),
    },
  },
  plugins,
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    server: 'https',
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'https://magnit-agent-front.ktsdev2.ru',
        secure: true,
      },
    },
  },
};
