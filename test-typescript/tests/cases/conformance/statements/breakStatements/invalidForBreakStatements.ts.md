invalidForBreakStatements.ts
```json
{
  "type": "Program",
  "start": 42,
  "end": 414,
  "body": [
    {
      "type": "BreakStatement",
      "start": 42,
      "end": 48,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 72,
      "end": 95,
      "body": {
        "type": "ForStatement",
        "start": 77,
        "end": 95,
        "body": {
          "type": "BreakStatement",
          "start": 85,
          "end": 95,
          "label": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "decorators": [],
            "name": "TWO",
            "optional": false
          }
        },
        "init": null,
        "test": null,
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "ONE",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 127,
      "end": 188,
      "body": {
        "type": "ForStatement",
        "start": 132,
        "end": 188,
        "body": {
          "type": "BlockStatement",
          "start": 140,
          "end": 188,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 146,
              "end": 186,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 150,
                  "end": 186,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 154,
                    "end": 186,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 160,
                      "end": 186,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 170,
                          "end": 180,
                          "label": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 179,
                            "decorators": [],
                            "name": "TWO",
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
          ]
        },
        "init": null,
        "test": null,
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 127,
        "end": 130,
        "decorators": [],
        "name": "TWO",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 190,
      "end": 262,
      "body": {
        "type": "ForStatement",
        "start": 197,
        "end": 262,
        "body": {
          "type": "BlockStatement",
          "start": 205,
          "end": 262,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 211,
              "end": 260,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 215,
                  "end": 260,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 217,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 220,
                    "end": 260,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 232,
                      "end": 260,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 242,
                          "end": 254,
                          "label": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 253,
                            "decorators": [],
                            "name": "THREE",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
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
          ]
        },
        "init": null,
        "test": null,
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 190,
        "end": 195,
        "decorators": [],
        "name": "THREE",
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 281,
      "end": 336,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 336,
        "body": [
          {
            "type": "BreakStatement",
            "start": 295,
            "end": 306,
            "label": {
              "type": "Identifier",
              "start": 301,
              "end": 305,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 311,
            "end": 334,
            "body": {
              "type": "ForStatement",
              "start": 321,
              "end": 334,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
                "body": []
              },
              "init": null,
              "test": null,
              "update": null
            },
            "label": {
              "type": "Identifier",
              "start": 311,
              "end": 315,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          }
        ]
      },
      "init": null,
      "test": null,
      "update": null
    },
    {
      "type": "LabeledStatement",
      "start": 368,
      "end": 385,
      "body": {
        "type": "VariableDeclaration",
        "start": 374,
        "end": 385,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 378,
            "end": 384,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 382,
              "end": 384,
              "raw": "12",
              "value": 12
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "label": {
        "type": "Identifier",
        "start": 368,
        "end": 372,
        "decorators": [],
        "name": "NINE",
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 387,
      "end": 414,
      "body": {
        "type": "BlockStatement",
        "start": 395,
        "end": 414,
        "body": [
          {
            "type": "BreakStatement",
            "start": 401,
            "end": 412,
            "label": {
              "type": "Identifier",
              "start": 407,
              "end": 411,
              "decorators": [],
              "name": "NINE",
              "optional": false
            }
          }
        ]
      },
      "init": null,
      "test": null,
      "update": null
    }
  ],
  "sourceType": "script"
}
```
