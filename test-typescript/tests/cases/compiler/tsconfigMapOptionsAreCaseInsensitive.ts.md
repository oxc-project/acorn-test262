other.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 17,
        "raw": "42",
        "value": 42
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 31,
        "raw": "\"./other.js\"",
        "value": "./other.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "Answer",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 43,
            "end": 54,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 43,
              "end": 45,
              "raw": "10",
              "value": 10
            },
            "right": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "decorators": [],
              "name": "Answer",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 73,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 69,
          "end": 70,
          "exported": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
