recursiveInference1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 71,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 69,
            "argument": {
              "type": "ConditionalExpression",
              "start": 32,
              "end": 68,
              "alternate": {
                "type": "BinaryExpression",
                "start": 45,
                "end": 68,
                "operator": "+",
                "left": {
                  "type": "CallExpression",
                  "start": 45,
                  "end": 55,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 49,
                      "end": 54,
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 53,
                        "end": 54,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 48,
                    "decorators": [],
                    "name": "fib",
                    "optional": false
                  },
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 58,
                  "end": 68,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 62,
                      "end": 67,
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 66,
                        "end": 67,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 61,
                    "decorators": [],
                    "name": "fib",
                    "optional": false
                  },
                  "optional": false
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 32,
                "end": 38,
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "fib",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 21,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 82,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 91,
            "arguments": [
              {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "fib",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
