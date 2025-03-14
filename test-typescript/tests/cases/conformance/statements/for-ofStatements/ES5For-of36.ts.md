ES5For-of36.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 52,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 52,
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
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 48,
            "end": 50,
            "expression": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 23,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 9,
              "end": 23,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 10,
                  "end": 15,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "start": 17,
                  "end": 22,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 21,
                    "end": 22,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
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
        "start": 27,
        "end": 33,
        "elements": [
          {
            "type": "Literal",
            "start": 28,
            "end": 29,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "raw": "3",
            "value": 3
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
