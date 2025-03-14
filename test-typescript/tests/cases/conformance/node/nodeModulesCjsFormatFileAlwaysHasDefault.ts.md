subfolder/index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 37,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 63,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 57,
        "raw": "\"./subfolder/index.js\"",
        "value": "./subfolder/index.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 26,
          "end": 29,
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "mod",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 63,
      "expression": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "mod",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
