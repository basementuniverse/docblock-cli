const fs = require('fs');
const minimist = require('minimist');
const DocBlock = require('docblock');

module.exports = async () => {
  const args = minimist(process.argv.slice(2), {
    string: ['file'],
    alias: {
      file: ['f'],
    },
  });

  if (!('file' in args)) {
    return;
  }

  if (!Array.isArray(args.file)) {
    args.file = [args.file];
  }

  const docBlock = new DocBlock();
  const results = {};
  for (const file of args.file) {
    const contents = fs.readFileSync(file);
    results[file] = docBlock.parse(contents, 'js');
  }

  console.log(JSON.stringify(results, null, 2));
};
