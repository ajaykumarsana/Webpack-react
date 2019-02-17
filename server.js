const express = require('express');
const WDM = require('webpack-dev-middleware');
const webpack = require('webpack');
const wconfig = require('./webpack.config');
const app = express();
app.use(WDM(webpack(wconfig)));
app.listen(3500,()=>  console.log('Listening...'));