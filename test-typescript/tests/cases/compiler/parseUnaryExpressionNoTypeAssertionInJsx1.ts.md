__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 16,
            "raw": "\"oops\"",
            "value": "oops",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 28,
            "end": 40,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 30,
              "end": 40,
              "expression": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            },
            "operator": "+",
            "prefix": true
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
