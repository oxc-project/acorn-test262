__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 44,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 29,
                    "end": 35,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
              "kind": "let",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
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
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 77,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 81,
                        "end": 96,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 252,
                  "end": 293,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 252,
                    "end": 271,
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "start": 253,
                        "end": 270,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 254,
                            "end": 258,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 254,
                              "end": 255,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 257,
                              "end": 258,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 260,
                            "end": 269,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 261,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "start": 263,
                              "end": 269,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 264,
                                  "end": 268,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 264,
                                    "end": 265,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 267,
                                    "end": 268,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "decorators": [],
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 279,
                              "end": 280,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 282,
                            "end": 291,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 283,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 287,
                                    "name": "c",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 289,
                                    "end": 290,
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "let",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 299,
                "end": 300,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
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
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 326,
                      "end": 345,
                      "id": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 330,
                        "end": 345,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
