__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 111,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 110,
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "start": 1,
          "end": 107,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 12,
            "end": 107,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 18,
                "end": 31,
                "directive": "use strict",
                "expression": {
                  "type": "Literal",
                  "start": 18,
                  "end": 30,
                  "raw": "\"use strict\"",
                  "value": "use strict"
                }
              },
              {
                "type": "ForStatement",
                "start": 37,
                "end": 105,
                "body": {
                  "type": "BlockStatement",
                  "start": 65,
                  "end": 105,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 75,
                      "end": 99,
                      "expression": {
                        "type": "CallExpression",
                        "start": 75,
                        "end": 98,
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 76,
                          "end": 95,
                          "async": false,
                          "body": {
                            "type": "AssignmentExpression",
                            "start": 82,
                            "end": 95,
                            "operator": "=",
                            "left": {
                              "type": "ArrayPattern",
                              "start": 82,
                              "end": 85,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 83,
                                  "end": 84,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false
                                }
                              ],
                              "optional": false
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "start": 88,
                              "end": 95,
                              "elements": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 89,
                                  "end": 94,
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 89,
                                    "end": 90,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 93,
                                    "end": 94,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              ]
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 51,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 51,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 50,
                        "end": 51,
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
                  "start": 53,
                  "end": 58,
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
                    "raw": "4",
                    "value": 4
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 60,
                  "end": 63,
                  "argument": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
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
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 229,
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "start": 114,
          "end": 226,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 125,
            "end": 226,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 131,
                "end": 144,
                "directive": "use strict",
                "expression": {
                  "type": "Literal",
                  "start": 131,
                  "end": 143,
                  "raw": "\"use strict\"",
                  "value": "use strict"
                }
              },
              {
                "type": "ForStatement",
                "start": 150,
                "end": 224,
                "body": {
                  "type": "BlockStatement",
                  "start": 178,
                  "end": 224,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 188,
                      "end": 218,
                      "expression": {
                        "type": "CallExpression",
                        "start": 188,
                        "end": 217,
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 189,
                          "end": 214,
                          "async": false,
                          "body": {
                            "type": "AssignmentExpression",
                            "start": 196,
                            "end": 213,
                            "operator": "=",
                            "left": {
                              "type": "ObjectPattern",
                              "start": 196,
                              "end": 201,
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 197,
                                  "end": 200,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 197,
                                    "end": 198,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 199,
                                    "end": 200,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "right": {
                              "type": "ObjectExpression",
                              "start": 204,
                              "end": 213,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 205,
                                  "end": 212,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 205,
                                    "end": 206,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "BinaryExpression",
                                    "start": 207,
                                    "end": 212,
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 207,
                                      "end": 208,
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 211,
                                      "end": 212,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "VariableDeclaration",
                  "start": 155,
                  "end": 164,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 159,
                      "end": 164,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 163,
                        "end": 164,
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
                  "start": 166,
                  "end": 171,
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 170,
                    "end": 171,
                    "raw": "4",
                    "value": 4
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 173,
                  "end": 176,
                  "argument": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
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
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
