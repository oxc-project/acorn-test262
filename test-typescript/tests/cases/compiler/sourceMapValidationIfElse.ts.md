sourceMapValidationIfElse.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
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
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 12,
      "end": 46,
      "alternate": {
        "type": "BlockStatement",
        "start": 43,
        "end": 46,
        "body": []
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 25,
        "end": 37,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 31,
            "end": 35,
            "expression": {
              "type": "UpdateExpression",
              "start": 31,
              "end": 34,
              "argument": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 23,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 21,
          "end": 23,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 47,
      "end": 156,
      "alternate": {
        "type": "IfStatement",
        "start": 78,
        "end": 156,
        "alternate": {
          "type": "IfStatement",
          "start": 109,
          "end": 156,
          "alternate": {
            "type": "BlockStatement",
            "start": 144,
            "end": 156,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 150,
                "end": 154,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 150,
                  "end": 153,
                  "argument": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "operator": "--",
                  "prefix": false
                }
              }
            ]
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 122,
            "end": 138,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 128,
                "end": 136,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 128,
                  "end": 135,
                  "operator": "+=",
                  "left": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 133,
                    "end": 135,
                    "raw": "70",
                    "value": 70
                  }
                }
              }
            ]
          },
          "test": {
            "type": "BinaryExpression",
            "start": 113,
            "end": 120,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 118,
              "end": 120,
              "raw": "30",
              "value": 30
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 91,
          "end": 103,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 97,
              "end": 101,
              "expression": {
                "type": "UpdateExpression",
                "start": 97,
                "end": 100,
                "argument": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "operator": "--",
                "prefix": false
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 82,
          "end": 89,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 87,
            "end": 89,
            "raw": "20",
            "value": 20
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 60,
        "end": 72,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 70,
            "expression": {
              "type": "UpdateExpression",
              "start": 66,
              "end": 69,
              "argument": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 51,
        "end": 58,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 56,
          "end": 58,
          "raw": "10",
          "value": 10
        }
      }
    }
  ],
  "sourceType": "script"
}
```
