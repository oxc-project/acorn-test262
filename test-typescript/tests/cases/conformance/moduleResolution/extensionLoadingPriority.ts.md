__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"a.js\"",
        "value": "a.js"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"a.js.js\"",
        "value": "a.js.js"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 30,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 29,
        "raw": "\"dir/index.ts\"",
        "value": "dir/index.ts"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "raw": "\"dir.js\"",
        "value": "dir.js"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"./a.js\"",
        "value": "./a.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 47,
        "raw": "\"./dir\"",
        "value": "./dir"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 31,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "dir",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
