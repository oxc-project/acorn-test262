__ESTREE_TEST__:PASS:
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
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "BreakStatement",
          "start": 85,
          "end": 95,
          "label": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "name": "ONE",
        "typeAnnotation": null,
        "decorators": [],
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
        "init": null,
        "test": null,
        "update": null,
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
                  "id": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 154,
                    "end": 186,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "TWO",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 127,
        "end": 130,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
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
        "init": null,
        "test": null,
        "update": null,
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
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 217,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 220,
                    "end": 260,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "THREE",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 190,
        "end": 195,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 281,
      "end": 336,
      "init": null,
      "test": null,
      "update": null,
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
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
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
              "init": null,
              "test": null,
              "update": null,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
                "body": []
              }
            },
            "label": {
              "type": "Identifier",
              "start": 311,
              "end": 315,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
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
            "id": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 382,
              "end": 384,
              "value": 12,
              "raw": "12"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 368,
        "end": 372,
        "name": "NINE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 387,
      "end": 414,
      "init": null,
      "test": null,
      "update": null,
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
              "name": "NINE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
