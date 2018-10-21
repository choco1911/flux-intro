var path = require('path')

module.exports = {
    devServer: {
  	  port: 3333 
    },
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [ path.join(__dirname, 'src') ],
                use:  [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [ path.join(__dirname, 'src') ],
                use: [
                        { loader: 'style-loader'},
			{ loader: 'css-loader'}
		]
            }
        ]
    }
}
