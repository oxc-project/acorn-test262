__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 348,
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
            "optional": false,
            "typeAnnotation": null
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
      "type": "SwitchStatement",
      "start": 12,
      "end": 167,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 29,
          "end": 64,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 45,
              "end": 49,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 45,
                "end": 48,
                "argument": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "++",
                "prefix": false
              }
            },
            {
              "type": "BreakStatement",
              "start": 58,
              "end": 64,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "raw": "5",
            "value": 5
          }
        },
        {
          "type": "SwitchCase",
          "start": 69,
          "end": 133,
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 86,
              "end": 133,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 100,
                  "end": 104,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 100,
                    "end": 103,
                    "argument": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 101,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "--",
                    "prefix": false
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 117,
                  "end": 123,
                  "label": null
                }
              ]
            }
          ],
          "test": {
            "type": "Literal",
            "start": 74,
            "end": 76,
            "raw": "10",
            "value": 10
          }
        },
        {
          "type": "SwitchCase",
          "start": 138,
          "end": 165,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 155,
              "end": 165,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 155,
                "end": 164,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 159,
                  "end": 164,
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 162,
                    "end": 164,
                    "raw": "10",
                    "value": 10
                  }
                }
              }
            }
          ],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "SwitchStatement",
      "start": 168,
      "end": 348,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 185,
          "end": 220,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 201,
              "end": 205,
              "directive": null,
              "expression": {
                "type": "UpdateExpression",
                "start": 201,
                "end": 204,
                "argument": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "++",
                "prefix": false
              }
            },
            {
              "type": "BreakStatement",
              "start": 214,
              "end": 220,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "raw": "5",
            "value": 5
          }
        },
        {
          "type": "SwitchCase",
          "start": 225,
          "end": 289,
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 242,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 256,
                  "end": 260,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 256,
                    "end": 259,
                    "argument": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "--",
                    "prefix": false
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 273,
                  "end": 279,
                  "label": null
                }
              ]
            }
          ],
          "test": {
            "type": "Literal",
            "start": 230,
            "end": 232,
            "raw": "10",
            "value": 10
          }
        },
        {
          "type": "SwitchCase",
          "start": 294,
          "end": 346,
          "consequent": [
            {
              "type": "BlockStatement",
              "start": 311,
              "end": 346,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 325,
                  "end": 336,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 325,
                    "end": 335,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 326,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 329,
                      "end": 335,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 330,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 333,
                        "end": 335,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  }
                }
              ]
            }
          ],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
