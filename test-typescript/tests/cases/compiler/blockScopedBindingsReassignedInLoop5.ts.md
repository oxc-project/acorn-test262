blockScopedBindingsReassignedInLoop5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 129,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 129,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 46,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 69,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 54,
                  "end": 69,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 60,
                    "end": 69,
                    "operator": "+",
                    "left": {
                      "type": "UpdateExpression",
                      "start": 60,
                      "end": 63,
                      "argument": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    },
                    "right": {
                      "type": "UpdateExpression",
                      "start": 66,
                      "end": 69,
                      "argument": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  "expression": true,
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
            "type": "IfStatement",
            "start": 75,
            "end": 127,
            "alternate": {
              "type": "ExpressionStatement",
              "start": 121,
              "end": 127,
              "expression": {
                "type": "AssignmentExpression",
                "start": 121,
                "end": 126,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 125,
                  "end": 126,
                  "raw": "5",
                  "value": 5
                }
              }
            },
            "consequent": {
              "type": "BreakStatement",
              "start": 96,
              "end": 102,
              "label": null
            },
            "test": {
              "type": "BinaryExpression",
              "start": 79,
              "end": 85,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 16,
            "end": 21,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 28,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      },
      "update": {
        "type": "SequenceExpression",
        "start": 30,
        "end": 38,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 30,
            "end": 33,
            "argument": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "operator": "++",
            "prefix": true
          },
          {
            "type": "UpdateExpression",
            "start": 35,
            "end": 38,
            "argument": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "operator": "--",
            "prefix": true
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
