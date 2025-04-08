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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 118,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 128,
              "end": 129,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 49,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "bar",
        "raw": "\"bar\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 46,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 68,
          "end": 69,
          "imported": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 77,
        "end": 82,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 84,
      "end": 108,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 93,
          "end": 94,
          "imported": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 107,
        "value": "bar",
        "raw": "\"bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 115,
      "expression": {
        "type": "BinaryExpression",
        "start": 109,
        "end": 114,
        "left": {
          "type": "Identifier",
          "start": 109,
          "end": 110,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
