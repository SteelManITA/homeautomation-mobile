var watch = require('@ionic/app-scripts/dist/watch');

module.exports = {
  srcFiles: {
    paths: ['{{SRC}}/**/*.(ts|html|s(c|a)ss)'],
    options: { ignored: ['{{SRC}}/**/*.spec.ts', '{{SRC}}/**/*.e2e.ts', '**/*.DS_Store', '{{SRC}}/index.html'] },
    callback: watch.buildUpdate
  }
};
