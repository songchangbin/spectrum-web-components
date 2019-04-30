/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require('path');
const merge = require('webpack-merge');
const createConfig = require('@open-wc/building-webpack/modern-and-legacy-config');

const configOptions = {
    entry: path.resolve(__dirname, './src/main.ts'),
    indexHTML: path.resolve(__dirname, './index.html'),
};

module.exports = merge(createConfig(configOptions), {
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, 'src/components')],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'src/components')],
                loader: 'raw-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            /* your options here */
                        },
                    },
                ],
            },
        ],
    },
});
