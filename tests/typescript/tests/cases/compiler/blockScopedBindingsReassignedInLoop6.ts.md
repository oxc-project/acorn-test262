__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 475,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 221,
        "body": [
          {
            "type": "ForStatement",
            "start": 20,
            "end": 219,
            "init": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 44,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 44,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
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
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 42,
                        "end": 43,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 46,
              "end": 51,
              "left": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "UpdateExpression",
                  "start": 58,
                  "end": 61,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 219,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 73,
                  "end": 97,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 77,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 81,
                        "end": 96,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 87,
                          "end": 96,
                          "left": {
                            "type": "UpdateExpression",
                            "start": 87,
                            "end": 90,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "UpdateExpression",
                            "start": 93,
                            "end": 96,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "id": null,
                        "generator": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 106,
                  "end": 213,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 110,
                    "end": 116,
                    "left": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 115,
                      "end": 116,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 130,
                    "end": 136,
                    "label": null
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 150,
                    "end": 213,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 154,
                      "end": 160,
                      "left": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 159,
                        "end": 160,
                        "value": 2,
                        "raw": "2"
                      }
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 178,
                          "end": 179,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "directive": null
                    },
                    "alternate": {
                      "type": "ReturnStatement",
                      "start": 206,
                      "end": 213,
                      "argument": null
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 470,
        "body": [
          {
            "type": "ForStatement",
            "start": 243,
            "end": 468,
            "init": {
              "type": "VariableDeclaration",
              "start": 248,
              "end": 293,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 293,
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 254,
                            "end": 258,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 254,
                              "end": 255,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 257,
                              "end": 258,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 260,
                            "end": 269,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 261,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "start": 263,
                              "end": 269,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 264,
                                  "end": 268,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 265,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 267,
                                    "end": 268,
                                    "decorators": [],
                                    "name": "y",
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 279,
                              "end": 280,
                              "value": 1,
                              "raw": "1"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 282,
                            "end": 291,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 283,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 285,
                              "end": 291,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 286,
                                  "end": 290,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 287,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 289,
                                    "end": 290,
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 295,
              "end": 300,
              "left": {
                "type": "Identifier",
                "start": 295,
                "end": 296,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "UpdateExpression",
                  "start": 307,
                  "end": 310,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 310,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 312,
              "end": 468,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 322,
                  "end": 346,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 326,
                      "end": 345,
                      "id": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 330,
                        "end": 345,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 336,
                          "end": 345,
                          "left": {
                            "type": "UpdateExpression",
                            "start": 336,
                            "end": 339,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 336,
                              "end": 337,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "UpdateExpression",
                            "start": 342,
                            "end": 345,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "id": null,
                        "generator": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 355,
                  "end": 462,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 359,
                    "end": 365,
                    "left": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 364,
                      "end": 365,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 379,
                    "end": 385,
                    "label": null
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 399,
                    "end": 462,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 403,
                      "end": 409,
                      "left": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 408,
                        "end": 409,
                        "value": 2,
                        "raw": "2"
                      }
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 427,
                          "end": 428,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "directive": null
                    },
                    "alternate": {
                      "type": "ReturnStatement",
                      "start": 455,
                      "end": 462,
                      "argument": null
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
