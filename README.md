## What

ikinari-modules bundles JavaScript files that import remote modules.
You don't need to prepare a package.json. It provides maximum easiness.

## Install

```
npm install -g ikinari-modules
```

or

```
yarn global add ikinari-modules
```

## Usage

```
echo "import stringLength from 'https://unpkg.com/string-length'; \
console.log(stringLength('🐴'))" \
| ikinari -i - \
| node

- → stdout...
1
```

ikinari-modules is a really thin wrapper of rollup's CLI. You can use [all options](https://rollupjs.org/guide/en/#command-line-flags)
of it except for `--config`.
