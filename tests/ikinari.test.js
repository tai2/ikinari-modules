const { spawn, execFileSync } = require("child_process")

const binPath = "../bin/ikinari"

function compile(sourceCode) {
  return execFileSync(binPath, ["-i", "-"], {
    input: sourceCode,
  }).toString()
}

function run(sourceCode) {
  return execFileSync("node", [], {
    input: sourceCode,
  }).toString()
}

test("import from unpkg.com", () => {
  const sourceCode = `
import stringLength from 'https://unpkg.com/string-length'
console.log(stringLength('🐴'))`
  const compiledCode = compile(sourceCode)
  expect(compiledCode).not.toMatch(/^import/)
  expect(run(compiledCode)).toBe("1\n")
})

test("import from stkypack.com", () => {
  const sourceCode = `
import stringLength from 'https://cdn.skypack.dev/string-length'
console.log(stringLength('🐴'))`
  const compiledCode = compile(sourceCode)
  expect(compiledCode).not.toMatch(/^import/)
  expect(run(compiledCode)).toBe("1\n")
})

test("import from node_modules", () => {
  const sourceCode = `
import stringLength from 'string-length'
console.log(stringLength('🐴'))`
  const compiledCode = compile(sourceCode)
  expect(compiledCode).not.toMatch(/^import/)
  expect(run(compiledCode)).toBe("1\n")
})
