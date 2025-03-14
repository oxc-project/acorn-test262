noImplicitAnyLoopCrash.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 18,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 16,
              "end": 18,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "WhileStatement",
      "start": 29,
      "end": 66,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 66,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 64,
            "expression": {
              "type": "AssignmentExpression",
              "start": 45,
              "end": 63,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 51,
                "end": 63,
                "argument": {
                  "type": "CallExpression",
                  "start": 52,
                  "end": 63,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 56,
                      "end": 62,
                      "argument": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 62,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                },
                "operator": "~",
                "prefix": true
              }
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 36,
        "end": 37,
        "raw": "1",
        "value": 1
      }
    }
  ],
  "sourceType": "script"
}
```
