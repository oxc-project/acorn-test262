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
              "start": 124,
              "end": 125
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 128,
              "end": 129
            },
            "definite": false,
            "start": 124,
            "end": 129
          }
        ],
        "declare": false,
        "start": 118,
        "end": 130
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 111,
  "end": 131
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 44,
                    "end": 45
                  },
                  "definite": false,
                  "start": 40,
                  "end": 45
                }
              ],
              "declare": false,
              "start": 34,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 46
          }
        ],
        "start": 21,
        "end": 48
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
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
            "start": 68,
            "end": 69
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "importKind": "value",
          "start": 68,
          "end": 69
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 77,
        "end": 82
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 83
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "importKind": "value",
          "start": 93,
          "end": 94
        }
      ],
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 102,
        "end": 107
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 84,
      "end": 108
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
          "start": 109,
          "end": 110
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "start": 109,
        "end": 114
      },
      "directive": null,
      "start": 109,
      "end": 115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 59,
  "end": 116
}
```
