c:/root/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 41,
        "raw": "\"@speedy/folder1/testing\"",
        "value": "@speedy/folder1/testing"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
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
c:/root/folder1/dist/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 17,
              "end": 22,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 17,
                "end": 18,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 21,
                "end": 22,
                "raw": "2",
                "value": 2
              }
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
