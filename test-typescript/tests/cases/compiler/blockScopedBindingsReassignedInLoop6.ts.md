blockScopedBindingsReassignedInLoop6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 221,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 221,
        "body": [
          {
            "type": "ForStatement",
            "start": 20,
            "end": 219,
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 219,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 73,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 77,
                      "end": 96,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 81,
                        "end": 96,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 87,
                          "end": 96,
                          "operator": "+",
                          "left": {
                            "type": "UpdateExpression",
                            "start": 87,
                            "end": 90,
                            "argument": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "operator": "++",
                            "prefix": false
                          },
                          "right": {
                            "type": "UpdateExpression",
                            "start": 93,
                            "end": 96,
                            "argument": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "operator": "++",
                            "prefix": false
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "IfStatement",
                  "start": 106,
                  "end": 213,
                  "alternate": {
                    "type": "IfStatement",
                    "start": 150,
                    "end": 213,
                    "alternate": {
                      "type": "ReturnStatement",
                      "start": 206,
                      "end": 213,
                      "argument": null
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 174,
                      "end": 180,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 174,
                        "end": 179,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 175,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 178,
                          "end": 179,
                          "raw": "5",
                          "value": 5
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 154,
                      "end": 160,
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 159,
                        "end": 160,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 130,
                    "end": 136,
                    "label": null
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 110,
                    "end": 116,
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 115,
                      "end": 116,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 44,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 44,
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 29,
                    "end": 35,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    ],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 38,
                    "end": 44,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 39,
                        "end": 40,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 42,
                        "end": 43,
                        "raw": "2",
                        "value": 2
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 46,
              "end": 51,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "update": {
              "type": "SequenceExpression",
              "start": 53,
              "end": 61,
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "start": 53,
                  "end": 56,
                  "argument": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                },
                {
                  "type": "UpdateExpression",
                  "start": 58,
                  "end": 61,
                  "argument": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "operator": "--",
                  "prefix": true
                }
              ]
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
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 470,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 470,
        "body": [
          {
            "type": "ForStatement",
            "start": 243,
            "end": 468,
            "body": {
              "type": "BlockStatement",
              "start": 312,
              "end": 468,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 322,
                  "end": 346,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 326,
                      "end": 345,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 330,
                        "end": 345,
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 336,
                          "end": 345,
                          "operator": "+",
                          "left": {
                            "type": "UpdateExpression",
                            "start": 336,
                            "end": 339,
                            "argument": {
                              "type": "Identifier",
                              "start": 336,
                              "end": 337,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "operator": "++",
                            "prefix": false
                          },
                          "right": {
                            "type": "UpdateExpression",
                            "start": 342,
                            "end": 345,
                            "argument": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "operator": "++",
                            "prefix": false
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "IfStatement",
                  "start": 355,
                  "end": 462,
                  "alternate": {
                    "type": "IfStatement",
                    "start": 399,
                    "end": 462,
                    "alternate": {
                      "type": "ReturnStatement",
                      "start": 455,
                      "end": 462,
                      "argument": null
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 423,
                      "end": 429,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 423,
                        "end": 428,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 423,
                          "end": 424,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 427,
                          "end": 428,
                          "raw": "5",
                          "value": 5
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 403,
                      "end": 409,
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 408,
                        "end": 409,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 379,
                    "end": 385,
                    "label": null
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 359,
                    "end": 365,
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 364,
                      "end": 365,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 248,
              "end": 293,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 293,
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 252,
                    "end": 271,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "start": 253,
                        "end": 270,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 254,
                            "end": 258,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 254,
                              "end": 255,
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
                              "start": 257,
                              "end": 258,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 260,
                            "end": 269,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 261,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectPattern",
                              "start": 263,
                              "end": 269,
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 264,
                                  "end": 268,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 265,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 267,
                                    "end": 268,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 274,
                    "end": 293,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 275,
                        "end": 292,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 276,
                            "end": 280,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 279,
                              "end": 280,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "Property",
                            "start": 282,
                            "end": 291,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 283,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 285,
                              "end": 291,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 286,
                                  "end": 290,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 287,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 289,
                                    "end": 290,
                                    "raw": "2",
                                    "value": 2
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 295,
              "end": 300,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "update": {
              "type": "SequenceExpression",
              "start": 302,
              "end": 310,
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "start": 302,
                  "end": 305,
                  "argument": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "++",
                  "prefix": true
                },
                {
                  "type": "UpdateExpression",
                  "start": 307,
                  "end": 310,
                  "argument": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 310,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "operator": "--",
                  "prefix": true
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
