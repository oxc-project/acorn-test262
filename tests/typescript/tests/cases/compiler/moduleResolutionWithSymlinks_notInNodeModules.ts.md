__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 194,
              "end": 195
            },
            "definite": false,
            "start": 190,
            "end": 195
          }
        ],
        "declare": false,
        "start": 184,
        "end": 196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 177,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 177,
  "end": 197
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./shared/abc",
        "raw": "\"./shared/abc\"",
        "start": 18,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 50
          },
          "importKind": "value",
          "start": 43,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./shared2/abc",
        "raw": "\"./shared2/abc\"",
        "start": 58,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 76
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 81
        },
        "start": 75,
        "end": 81
      },
      "directive": null,
      "start": 75,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
