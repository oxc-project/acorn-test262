__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 254,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 254,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 25,
            "end": 252,
            "body": {
              "type": "WhileStatement",
              "start": 33,
              "end": 252,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 252,
                "body": [
                  {
                    "type": "LabeledStatement",
                    "start": 56,
                    "end": 246,
                    "body": {
                      "type": "ForStatement",
                      "start": 64,
                      "end": 246,
                      "body": {
                        "type": "BlockStatement",
                        "start": 93,
                        "end": 246,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 107,
                            "end": 165,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 120,
                              "end": 165,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 138,
                                  "end": 151,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 144,
                                    "end": 150,
                                    "decorators": [],
                                    "name": "__call",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 111,
                              "end": 118,
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "start": 111,
                                "end": 112,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 117,
                                "end": 118,
                                "raw": "3",
                                "value": 3
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "start": 178,
                            "end": 236,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 191,
                              "end": 236,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 209,
                                  "end": 222,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 215,
                                    "end": 221,
                                    "decorators": [],
                                    "name": "aLabel",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 182,
                              "end": 189,
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 188,
                                "end": 189,
                                "raw": "5",
                                "value": 5
                              }
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 69,
                        "end": 78,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 73,
                            "end": 78,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "decorators": [],
                              "name": "i",
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 77,
                              "end": 78,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 80,
                        "end": 86,
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 84,
                          "end": 86,
                          "raw": "10",
                          "value": 10
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 88,
                        "end": 91,
                        "argument": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "operator": "++",
                        "prefix": false
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 62,
                      "decorators": [],
                      "name": "aLabel",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Literal",
                "start": 40,
                "end": 44,
                "raw": "true",
                "value": true
              }
            },
            "label": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "__call",
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
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "doThing",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 265,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 264,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 255,
          "end": 262,
          "decorators": [],
          "name": "doThing",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
