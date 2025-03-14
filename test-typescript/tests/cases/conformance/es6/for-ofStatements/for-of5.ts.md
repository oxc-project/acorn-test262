__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 45,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 16,
      "end": 45,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 45,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 41,
            "end": 43,
            "expression": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 26,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
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
        "type": "ArrayExpression",
        "start": 30,
        "end": 33,
        "elements": [
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "raw": "0",
            "value": 0
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
