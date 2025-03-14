__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 17,
            "end": 22,
            "expression": {
              "type": "CallExpression",
              "start": 17,
              "end": 21,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 19,
                "decorators": [],
                "name": "R1",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 24,
            "end": 31,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "R1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 58,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 58,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 51,
            "end": 56,
            "expression": {
              "type": "CallExpression",
              "start": 51,
              "end": 55,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 51,
                "end": 53,
                "decorators": [],
                "name": "R2",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "R2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 137,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 137,
        "body": [
          {
            "type": "IfStatement",
            "start": 85,
            "end": 135,
            "alternate": {
              "type": "BlockStatement",
              "start": 120,
              "end": 135,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 124,
                  "end": 132,
                  "expression": {
                    "type": "CallExpression",
                    "start": 124,
                    "end": 131,
                    "arguments": [
                      {
                        "type": "UpdateExpression",
                        "start": 127,
                        "end": 130,
                        "argument": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "operator": "--",
                        "prefix": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 126,
                      "decorators": [],
                      "name": "R3",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 97,
              "end": 113,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 89,
              "end": 95,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "raw": "0",
                "value": 0
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
        "start": 69,
        "end": 71,
        "decorators": [],
        "name": "R3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 80,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 80,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 74,
              "end": 80
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
