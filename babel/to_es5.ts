import * as fs from 'fs'
import { resolve } from 'path';
import  * as babel  from '@babel/core';

const code = fs.readFileSync(resolve(__dirname,'./es6.js')).toString()


const ast = babel.parse(code, {sourceType: 'module'})
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})

fs.writeFileSync(resolve(__dirname, 'es5.js'), result.code)




