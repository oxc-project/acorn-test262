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
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 34,
            "end": 53,
            "expression": {
              "type": "Literal",
              "start": 34,
              "end": 36,
              "value": 10,
              "raw": "10"
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 77,
            "end": 96,
            "expression": {
              "type": "Literal",
              "start": 77,
              "end": 79,
              "value": 10,
              "raw": "10"
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
