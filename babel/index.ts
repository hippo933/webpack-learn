import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'
import * as fs from 'fs'
import { resolve } from 'path';

const code = fs.readFileSync(resolve(__dirname,'./es6.js')).toString()
const ast = parse(code, {sourceType: 'module'})
traverse(ast,{
  enter: (item) => {
    if (item.node.type === 'VariableDeclaration') {
      item.node.kind = 'var'
    }
  }
})

const result = generator(ast)
fs.writeFileSync(resolve(__dirname, 'es5.js'), result.code)




