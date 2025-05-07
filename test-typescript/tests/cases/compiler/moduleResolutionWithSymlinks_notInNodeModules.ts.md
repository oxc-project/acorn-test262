__ESTREE_TEST__:PASS:
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
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 194,
              "end": 195,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "value": "./shared/abc",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
        "value": "./shared2/abc",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 50,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 82,
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 81,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
