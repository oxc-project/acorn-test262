invalidForContinueStatements.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 441,
  "body": [
    {
      "type": "ContinueStatement",
      "start": 45,
      "end": 54,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 78,
      "end": 104,
      "body": {
        "type": "ForStatement",
        "start": 83,
        "end": 104,
        "body": {
          "type": "ContinueStatement",
          "start": 91,
          "end": 104,
          "label": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
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
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "ONE",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 139,
      "end": 203,
      "body": {
        "type": "ForStatement",
        "start": 144,
        "end": 203,
        "body": {
          "type": "BlockStatement",
          "start": 152,
          "end": 203,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 158,
              "end": 201,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 162,
                  "end": 201,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 166,
                    "end": 201,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 172,
                      "end": 201,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 182,
                          "end": 195,
                          "label": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 194,
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
        "start": 139,
        "end": 142,
        "decorators": [],
        "name": "TWO",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 205,
      "end": 280,
      "body": {
        "type": "ForStatement",
        "start": 212,
        "end": 280,
        "body": {
          "type": "BlockStatement",
          "start": 220,
          "end": 280,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 226,
              "end": 278,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 230,
                  "end": 278,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 232,
                    "decorators": [],
                    "name": "fn",
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 235,
                    "end": 278,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 247,
                      "end": 278,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 257,
                          "end": 272,
                          "label": {
                            "type": "Identifier",
                            "start": 266,
                            "end": 271,
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
        "start": 205,
        "end": 210,
        "decorators": [],
        "name": "THREE",
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 302,
      "end": 360,
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 360,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 316,
            "end": 330,
            "label": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
              "decorators": [],
              "name": "FIVE",
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 335,
            "end": 358,
            "body": {
              "type": "ForStatement",
              "start": 345,
              "end": 358,
              "body": {
                "type": "BlockStatement",
                "start": 355,
                "end": 358,
                "body": []
              },
              "init": null,
              "test": null,
              "update": null
            },
            "label": {
              "type": "Identifier",
              "start": 335,
              "end": 339,
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
      "start": 392,
      "end": 409,
      "body": {
        "type": "VariableDeclaration",
        "start": 398,
        "end": 409,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 402,
            "end": 408,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 406,
              "end": 408,
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
        "start": 392,
        "end": 396,
        "decorators": [],
        "name": "NINE",
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 411,
      "end": 441,
      "body": {
        "type": "BlockStatement",
        "start": 419,
        "end": 441,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 425,
            "end": 439,
            "label": {
              "type": "Identifier",
              "start": 434,
              "end": 438,
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
