__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "LabeledStatement",
      "start": 11,
      "end": 104,
      "body": {
        "type": "WhileStatement",
        "start": 17,
        "end": 104,
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 104,
          "body": [
            {
              "type": "IfStatement",
              "start": 36,
              "end": 102,
              "alternate": {
                "type": "BlockStatement",
                "start": 82,
                "end": 102,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 92,
                    "end": 96,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 92,
                      "end": 95,
                      "argument": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 50,
                "end": 72,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 60,
                    "end": 66,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 40,
                "end": 48,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 45,
                  "end": 48,
                  "raw": "100",
                  "value": 100
                }
              }
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 24,
          "end": 28,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 11,
        "end": 15,
        "decorators": [],
        "name": "loop",
        "optional": false
      }
    },
    {
      "type": "BlockStatement",
      "start": 105,
      "end": 119,
      "body": [
        {
          "type": "LabeledStatement",
          "start": 111,
          "end": 117,
          "body": {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 117,
            "expression": {
              "type": "Literal",
              "start": 114,
              "end": 117,
              "raw": "100",
              "value": 100
            }
          },
          "label": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 129,
            "end": 143,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 135,
              "end": 143,
              "body": [
                {
                  "type": "LabeledStatement",
                  "start": 137,
                  "end": 141,
                  "body": {
                    "type": "ExpressionStatement",
                    "start": 140,
                    "end": 141,
                    "expression": {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
