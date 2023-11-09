const micromatch = require('micromatch')
module.exports = {
  '*.js': (files) => {
    // console.log(files)
    // from `files` filter those _NOT_ matching `*test.js`
    // 过滤指定的文件 /test/下的所有js文件
    // const match = micromatch.not(files, ['**/lint-staged.config.js','**/test/*.js'])
    const match = micromatch.not(files, ['**/test/*.js'])
    // const match = micromatch(files, ['**/src/*.js'])
    console.log(match)
    return `eslint ${match.join(' ')}`
    // console.log(micromatch(['foo.js', '/Users/zhichaocao/Documents/project/web-test/src/index.js', 'baz', 'qux'], ['**/*.js', 'b*']))
  },
};


// package.json

// "lint-staged": {
//   "*.{js,jsx,ts,tsx}": [
//     "eslint --fix --max-warnings 0",
//     "prettier --write --ignore-unknown"
//   ],
//   "*.{less}": [
//     "stylelint",
//     "prettier --write --ignore-unknown"
//   ]
// },