__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 12,
      "end": 46,
      "test": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 23,
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 21,
          "end": 23,
          "value": 10,
          "raw": "10"
        }
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
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 43,
        "end": 46,
        "body": []
      }
    },
    {
      "type": "IfStatement",
      "start": 47,
      "end": 156,
      "test": {
        "type": "BinaryExpression",
        "start": 51,
        "end": 58,
        "left": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 56,
          "end": 58,
          "value": 10,
          "raw": "10"
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
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "IfStatement",
        "start": 78,
        "end": 156,
        "test": {
          "type": "BinaryExpression",
          "start": 82,
          "end": 89,
          "left": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 87,
            "end": 89,
            "value": 20,
            "raw": "20"
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
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "directive": null
            }
          ]
        },
        "alternate": {
          "type": "IfStatement",
          "start": 109,
          "end": 156,
          "test": {
            "type": "BinaryExpression",
            "start": 113,
            "end": 120,
            "left": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Literal",
              "start": 118,
              "end": 120,
              "value": 30,
              "raw": "30"
            }
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
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 133,
                    "end": 135,
                    "value": 70,
                    "raw": "70"
                  }
                },
                "directive": null
              }
            ]
          },
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
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "directive": null
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
