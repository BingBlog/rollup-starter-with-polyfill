import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.js',
            format: 'umd',
            name: 'lib'
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                babelrc: false,
                exclude: ['node_modules/**'],
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                browsers: [
                                    'ios > 8',
                                    'android > 4.2',
                                    'and_chr > 38',
                                    'and_ff > 56',
                                    'and_qq > 1.1',
                                    'and_uc > 9',
                                    'ie_mob > 10',
                                    'ie >= 7'
                                ]
                            },
                            loose: true,
                            modules: false,
                            useBuiltIns: 'usage',
                            debug: true
                        }
                    ]
                ]
            })
            // ,
            // terser()
        ]
    }
];
