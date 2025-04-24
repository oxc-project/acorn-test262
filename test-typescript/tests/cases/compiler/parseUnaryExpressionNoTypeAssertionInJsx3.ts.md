__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
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
            "value": "oops"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 38,
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
            "end": 38,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 30,
              "end": 38,
              "expression": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 31,
                "end": 35,
                "literal": {
                  "type": "Literal",
                  "start": 31,
                  "end": 35,
                  "raw": "1234",
                  "value": 1234
                }
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
