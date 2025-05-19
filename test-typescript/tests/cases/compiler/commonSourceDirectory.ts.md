__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 131,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 130,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 118,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 129,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 128,
              "end": 129,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 45,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
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
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"bar\"",
        "value": "bar"
      }
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
  "start": 59,
  "end": 116,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 59,
      "end": 83,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 77,
        "end": 82,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 68,
          "end": 69,
          "imported": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 84,
      "end": 108,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 107,
        "raw": "\"bar\"",
        "value": "bar"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 93,
          "end": 94,
          "imported": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 109,
        "end": 114,
        "operator": "+",
        "left": {
          "type": "Identifier",
          "start": 109,
          "end": 110,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "y",
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
