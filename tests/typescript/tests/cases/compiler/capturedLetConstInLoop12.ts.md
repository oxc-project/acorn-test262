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
        "callee": {
          "type": "FunctionExpression",
          "start": 1,
          "end": 107,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 12,
            "end": 107,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 18,
                "end": 31,
                "expression": {
                  "type": "Literal",
                  "start": 18,
                  "end": 30,
                  "value": "use strict",
                  "raw": "\"use strict\""
                },
                "directive": "use strict"
              },
              {
                "type": "ForStatement",
                "start": 37,
                "end": 105,
                "init": {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 51,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 51,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 50,
                        "end": 51,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 53,
                  "end": 58,
                  "left": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
                    "value": 4,
                    "raw": "4"
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 60,
                  "end": 63,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
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
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 76,
                          "end": 95,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
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
                                  "left": {
                                    "type": "Identifier",
                                    "start": 89,
                                    "end": 90,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "Literal",
                                    "start": 93,
                                    "end": 94,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ]
                            }
                          },
                          "id": null,
                          "generator": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
          },
          "expression": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 229,
        "callee": {
          "type": "FunctionExpression",
          "start": 114,
          "end": 226,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 125,
            "end": 226,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 131,
                "end": 144,
                "expression": {
                  "type": "Literal",
                  "start": 131,
                  "end": 143,
                  "value": "use strict",
                  "raw": "\"use strict\""
                },
                "directive": "use strict"
              },
              {
                "type": "ForStatement",
                "start": 150,
                "end": 224,
                "init": {
                  "type": "VariableDeclaration",
                  "start": 155,
                  "end": 164,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 159,
                      "end": 164,
                      "id": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 163,
                        "end": 164,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 166,
                  "end": 171,
                  "left": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 170,
                    "end": 171,
                    "value": 4,
                    "raw": "4"
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "start": 173,
                  "end": 176,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
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
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 189,
                          "end": 214,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 197,
                                  "end": 200,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 197,
                                    "end": 198,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 199,
                                    "end": 200,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
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
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 205,
                                    "end": 206,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "BinaryExpression",
                                    "start": 207,
                                    "end": 212,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 207,
                                      "end": 208,
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "Literal",
                                      "start": 211,
                                      "end": 212,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            }
                          },
                          "id": null,
                          "generator": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
          },
          "expression": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
