const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

const code = `function ast() {}`;
const tree = esprima.parseScript(code);
// console.log(tree);

estraverse.traverse(tree, {
  enter: (node) => {
    if (node.type === 'Identifier') {
      node.name = 'shao';
    }
    // console.log('enter', node.type);
  },
  // leave: (node) => {
  //   console.log('leave', node.type);
  // }
});

let r = escodegen.generate(tree);
console.log(r);

// babel babel-plugin-arrow


