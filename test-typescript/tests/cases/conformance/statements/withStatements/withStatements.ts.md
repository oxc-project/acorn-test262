__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "WithStatement",
      "start": 12,
      "end": 56,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 56,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 27,
            "end": 42,
            "expression": {
              "type": "AssignmentExpression",
              "start": 27,
              "end": 42,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 27,
                "end": 31,
                "decorators": [],
                "name": "name",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 34,
                "end": 42,
                "raw": "'twelve'",
                "value": "twelve"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 54,
            "expression": {
              "type": "AssignmentExpression",
              "start": 47,
              "end": 54,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 47,
                "end": 49,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 54,
                "raw": "12",
                "value": 12
              }
            }
          }
        ]
      },
      "object": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
