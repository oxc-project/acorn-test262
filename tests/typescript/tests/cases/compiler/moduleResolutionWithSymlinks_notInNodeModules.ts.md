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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 184,
        "end": 196,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 190,
            "end": 195,
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
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 32,
        "value": "./shared/abc",
        "raw": "\"./shared/abc\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 74,
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
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 50,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 73,
        "value": "./shared2/abc",
        "raw": "\"./shared2/abc\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 82,
      "expression": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 81,
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 81,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
