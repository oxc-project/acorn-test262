__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 34,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            },
            "start": 34,
            "end": 53
          },
          "definite": false,
          "start": 20,
          "end": 54
        }
      ],
      "declare": false,
      "start": 14,
      "end": 55
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 77,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            },
            "start": 77,
            "end": 96
          },
          "definite": false,
          "start": 62,
          "end": 98
        }
      ],
      "declare": false,
      "start": 56,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
