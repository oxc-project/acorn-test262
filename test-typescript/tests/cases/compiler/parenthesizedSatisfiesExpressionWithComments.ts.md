__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 34,
            "end": 53,
            "expression": {
              "type": "Literal",
              "start": 34,
              "end": 36,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 77,
            "end": 96,
            "expression": {
              "type": "Literal",
              "start": 77,
              "end": 79,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
