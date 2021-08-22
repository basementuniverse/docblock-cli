# DocBlock CLI

Parse docblock-style comments into JSON on the command line.

Uses DocBlock internally (https://www.npmjs.com/package/docblock). `docblock-cli` is just a CLI wrapper around this library.

## Install

```bash
npm install @basementuniverse/docblock-cli
```

## Usage

```bash
docblock-cli -f myFile.js -f anotherFile.js
```

This will echo JSON output into your console.
