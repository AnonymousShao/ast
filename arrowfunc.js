// 直接使用babel来实现
// babel-core， 转换

//修改 ast babel-types

const babel = require('babel-core');
const t = require('babel-types');

const code = `const sum = (a, b) => {return a + b;}`;
const ArrowPlugin = {
  visitor:{
    ArrowFunctionExpression: (path) => {
      const node = path.node;
      const { params, body } = node;
      const func = t.functionExpression(null, params, body, false, false);
      path.replaceWith(func);
    }
  }
};
const r = babel.transform(code, {
  plugins: [
    ArrowPlugin
  ]
});
console.log(r.code);
