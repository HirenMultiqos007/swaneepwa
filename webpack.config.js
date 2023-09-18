var workboxPlugin = require('workbox-webpack-plugin');
                 plugins: [
                    new cleanPlugin([dist]),


new CopyWebpackPlugin([
                        // {output}/to/file.txt
                        { from: path.join(__dirname,'/index.html'), to: path.join(__dirname, '', 'www'), },
                        { from: path.join(__dirname,'/manifest.json'), to: path.join(__dirname, '', 'www'), },
                        { from: path.join(__dirname,'/.htaccess'), to: path.join(__dirname, '', 'www'), },
                        { from: path.join(__dirname,'/src/assets'), to: path.join(__dirname, '', 'www/src/assets') },

                    ]),
                    new UglifyJSPlugin(),
                    new workboxPlugin.GenerateSW({
                        swDest: 'sw.js',
                        clientsClaim: true,
                        skipWaiting: true,
                        globDirectory: dist,
                        globPatterns: ['**/*.{html,js,css,png,svg,jpg,gif,json}'],
                        globIgnores: [
                        "**/node_modules/**/*"
                          ],

                        runtimeCaching: [{
                        urlPattern: new RegExp('https://staging.multiqos.com:8012/api/v1/user/'),
                        handler: 'networkFirst',
                            options: {
                              cacheName: 'helloOne-api-cache',
                              networkTimeoutSeconds: 10
                          }
                        },
                        // {
                        // urlPattern: 'https://serverURl/images/users/(.*)',
                        // handler: 'cacheFirst',
                        //     options: {
                        //     cacheName: 'helloOne-mk-images-cache',
                        //     expiration: {
                        //       maxEntries: 2,
                        //       maxAgeSeconds: 7 * 24 * 60 * 60,
                        //     }
                        //   }
                        // }

                        ]
                    })
                    ]