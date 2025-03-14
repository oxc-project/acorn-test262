/shared/abc.ts
```json
{
  "type": "Program",
  "start": 177,
  "end": 197,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 177,
      "end": 196,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 184,
        "end": 196,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 190,
            "end": 195,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 194,
              "end": 195,
              "raw": "0",
              "value": 0
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
/src/app.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 32,
        "raw": "\"./shared/abc\"",
        "value": "./shared/abc"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 74,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 73,
        "raw": "\"./shared2/abc\"",
        "value": "./shared2/abc"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 43,
          "end": 50,
          "imported": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 50,
            "decorators": [],
            "name": "x2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 82,
      "expression": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 81,
        "operator": "+",
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 81,
          "decorators": [],
          "name": "x2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
