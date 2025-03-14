__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 24,
            "end": 27,
            "elements": [
              {
                "type": "Literal",
                "start": 25,
                "end": 26,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 29,
      "end": 56,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 56,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 54,
            "expression": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 39,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "v",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
