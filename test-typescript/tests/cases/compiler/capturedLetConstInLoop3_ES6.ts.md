__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 3450,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 16,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "name": "use",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 43,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 43,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "name": "foo0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 190,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 69,
            "end": 175,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 74,
              "end": 79,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 79,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 83,
              "end": 85,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 87,
              "end": 175,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 97,
                  "end": 107,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 101,
                      "end": 106,
                      "id": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 116,
                  "end": 146,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 117,
                    "end": 144,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 128,
                      "end": 144,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 130,
                          "end": 142,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 137,
                            "end": 142,
                            "left": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 155,
                  "end": 169,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 156,
                    "end": 167,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 162,
                      "end": 167,
                      "left": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 163,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 188,
            "expression": {
              "type": "CallExpression",
              "start": 181,
              "end": 187,
              "callee": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 338,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 207,
        "name": "foo0_1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 338,
        "body": [
          {
            "type": "ForInStatement",
            "start": 217,
            "end": 323,
            "left": {
              "type": "VariableDeclaration",
              "start": 222,
              "end": 227,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 226,
                  "end": 227,
                  "id": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 231,
              "end": 233,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 235,
              "end": 323,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 245,
                  "end": 255,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 249,
                      "end": 254,
                      "id": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 250,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 264,
                  "end": 294,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 265,
                    "end": 292,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 276,
                      "end": 292,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 278,
                          "end": 290,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 285,
                            "end": 290,
                            "left": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 286,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 289,
                              "end": 290,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 303,
                  "end": 317,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 304,
                    "end": 315,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 310,
                      "end": 315,
                      "left": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 329,
            "end": 336,
            "expression": {
              "type": "CallExpression",
              "start": 329,
              "end": 335,
              "callee": {
                "type": "Identifier",
                "start": 329,
                "end": 332,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 340,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 353,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 354,
          "end": 355,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 494,
        "body": [
          {
            "type": "ForStatement",
            "start": 363,
            "end": 479,
            "init": {
              "type": "VariableDeclaration",
              "start": 368,
              "end": 377,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 372,
                  "end": 377,
                  "id": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 373,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 376,
                    "end": 377,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 379,
              "end": 384,
              "left": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 383,
                "end": 384,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 386,
              "end": 389,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 388,
                "end": 389,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 391,
              "end": 479,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 401,
                  "end": 411,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 405,
                      "end": 410,
                      "id": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 406,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 410,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 420,
                  "end": 450,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 421,
                    "end": 448,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 432,
                      "end": 448,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 434,
                          "end": 446,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 441,
                            "end": 446,
                            "left": {
                              "type": "Identifier",
                              "start": 441,
                              "end": 442,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 445,
                              "end": 446,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 459,
                  "end": 473,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 460,
                    "end": 471,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 466,
                      "end": 471,
                      "left": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 467,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 471,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 485,
            "end": 492,
            "expression": {
              "type": "CallExpression",
              "start": 485,
              "end": 491,
              "callee": {
                "type": "Identifier",
                "start": 485,
                "end": 488,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 496,
      "end": 661,
      "id": {
        "type": "Identifier",
        "start": 505,
        "end": 509,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 510,
          "end": 511,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 513,
        "end": 661,
        "body": [
          {
            "type": "WhileStatement",
            "start": 519,
            "end": 642,
            "test": {
              "type": "BinaryExpression",
              "start": 526,
              "end": 533,
              "left": {
                "type": "Literal",
                "start": 526,
                "end": 527,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 535,
              "end": 642,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 545,
                  "end": 555,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 549,
                      "end": 554,
                      "id": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 550,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 553,
                        "end": 554,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 564,
                  "end": 574,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 568,
                      "end": 573,
                      "id": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 569,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 573,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 583,
                  "end": 613,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 584,
                    "end": 611,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 595,
                      "end": 611,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 597,
                          "end": 609,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 604,
                            "end": 609,
                            "left": {
                              "type": "Identifier",
                              "start": 604,
                              "end": 605,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 609,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 622,
                  "end": 636,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 623,
                    "end": 634,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 629,
                      "end": 634,
                      "left": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 633,
                        "end": 634,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 652,
            "end": 659,
            "expression": {
              "type": "CallExpression",
              "start": 652,
              "end": 658,
              "callee": {
                "type": "Identifier",
                "start": 652,
                "end": 655,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 663,
      "end": 824,
      "id": {
        "type": "Identifier",
        "start": 672,
        "end": 676,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 677,
          "end": 678,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 680,
        "end": 824,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 686,
            "end": 805,
            "body": {
              "type": "BlockStatement",
              "start": 689,
              "end": 788,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 699,
                  "end": 705,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 703,
                      "end": 704,
                      "id": {
                        "type": "Identifier",
                        "start": 703,
                        "end": 704,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 714,
                  "end": 720,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 718,
                      "end": 719,
                      "id": {
                        "type": "Identifier",
                        "start": 718,
                        "end": 719,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 729,
                  "end": 759,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 730,
                    "end": 757,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 741,
                      "end": 757,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 743,
                          "end": 755,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 750,
                            "end": 755,
                            "left": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 751,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 754,
                              "end": 755,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 768,
                  "end": 782,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 769,
                    "end": 780,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 775,
                      "end": 780,
                      "left": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 776,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 779,
                        "end": 780,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 796,
              "end": 803,
              "left": {
                "type": "Literal",
                "start": 796,
                "end": 797,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 802,
                "end": 803,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 815,
            "end": 822,
            "expression": {
              "type": "CallExpression",
              "start": 815,
              "end": 821,
              "callee": {
                "type": "Identifier",
                "start": 815,
                "end": 818,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 819,
                  "end": 820,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 826,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 835,
        "end": 839,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 840,
          "end": 841,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 843,
        "end": 1003,
        "body": [
          {
            "type": "ForStatement",
            "start": 849,
            "end": 984,
            "init": {
              "type": "VariableDeclaration",
              "start": 854,
              "end": 863,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 858,
                  "end": 863,
                  "id": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 859,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 862,
                    "end": 863,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 865,
              "end": 870,
              "left": {
                "type": "Identifier",
                "start": 865,
                "end": 866,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 869,
                "end": 870,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 872,
              "end": 875,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 874,
                "end": 875,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 877,
              "end": 984,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 887,
                  "end": 897,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 891,
                      "end": 896,
                      "id": {
                        "type": "Identifier",
                        "start": 891,
                        "end": 892,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 896,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 906,
                  "end": 916,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 910,
                      "end": 915,
                      "id": {
                        "type": "Identifier",
                        "start": 910,
                        "end": 911,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 914,
                        "end": 915,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 925,
                  "end": 955,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 926,
                    "end": 953,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 937,
                      "end": 953,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 939,
                          "end": 951,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 946,
                            "end": 951,
                            "left": {
                              "type": "Identifier",
                              "start": 946,
                              "end": 947,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 950,
                              "end": 951,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 964,
                  "end": 978,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 965,
                    "end": 976,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 971,
                      "end": 976,
                      "left": {
                        "type": "Identifier",
                        "start": 971,
                        "end": 972,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 975,
                        "end": 976,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 994,
            "end": 1001,
            "expression": {
              "type": "CallExpression",
              "start": 994,
              "end": 1000,
              "callee": {
                "type": "Identifier",
                "start": 994,
                "end": 997,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 998,
                  "end": 999,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1005,
      "end": 1178,
      "id": {
        "type": "Identifier",
        "start": 1014,
        "end": 1018,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1019,
          "end": 1020,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1022,
        "end": 1178,
        "body": [
          {
            "type": "ForStatement",
            "start": 1028,
            "end": 1159,
            "init": {
              "type": "VariableDeclaration",
              "start": 1033,
              "end": 1049,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1037,
                  "end": 1042,
                  "id": {
                    "type": "Identifier",
                    "start": 1037,
                    "end": 1038,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1041,
                    "end": 1042,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 1044,
                  "end": 1049,
                  "id": {
                    "type": "Identifier",
                    "start": 1044,
                    "end": 1045,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1048,
                    "end": 1049,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1051,
              "end": 1056,
              "left": {
                "type": "Identifier",
                "start": 1051,
                "end": 1052,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 1055,
                "end": 1056,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1058,
              "end": 1061,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1060,
                "end": 1061,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1063,
              "end": 1159,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1073,
                  "end": 1083,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1077,
                      "end": 1082,
                      "id": {
                        "type": "Identifier",
                        "start": 1077,
                        "end": 1078,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1081,
                        "end": 1082,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1092,
                  "end": 1126,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1093,
                    "end": 1124,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1104,
                      "end": 1124,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1106,
                          "end": 1122,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1113,
                            "end": 1122,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1113,
                              "end": 1118,
                              "left": {
                                "type": "Identifier",
                                "start": 1113,
                                "end": 1114,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1117,
                                "end": 1118,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1121,
                              "end": 1122,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1135,
                  "end": 1153,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1136,
                    "end": 1151,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1142,
                      "end": 1151,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1142,
                        "end": 1147,
                        "left": {
                          "type": "Identifier",
                          "start": 1142,
                          "end": 1143,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1146,
                          "end": 1147,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1150,
                        "end": 1151,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1169,
            "end": 1176,
            "expression": {
              "type": "CallExpression",
              "start": 1169,
              "end": 1175,
              "callee": {
                "type": "Identifier",
                "start": 1169,
                "end": 1172,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1174,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1181,
      "end": 1352,
      "id": {
        "type": "Identifier",
        "start": 1190,
        "end": 1194,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1195,
          "end": 1196,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1198,
        "end": 1352,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1204,
            "end": 1334,
            "test": {
              "type": "BinaryExpression",
              "start": 1211,
              "end": 1218,
              "left": {
                "type": "Literal",
                "start": 1211,
                "end": 1212,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1217,
                "end": 1218,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1220,
              "end": 1334,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1230,
                  "end": 1239,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1234,
                      "end": 1235,
                      "id": {
                        "type": "Identifier",
                        "start": 1234,
                        "end": 1235,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 1237,
                      "end": 1238,
                      "id": {
                        "type": "Identifier",
                        "start": 1237,
                        "end": 1238,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1248,
                  "end": 1258,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1252,
                      "end": 1257,
                      "id": {
                        "type": "Identifier",
                        "start": 1252,
                        "end": 1253,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1256,
                        "end": 1257,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1267,
                  "end": 1301,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1268,
                    "end": 1299,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1279,
                      "end": 1299,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1281,
                          "end": 1297,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1288,
                            "end": 1297,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1288,
                              "end": 1293,
                              "left": {
                                "type": "Identifier",
                                "start": 1288,
                                "end": 1289,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1292,
                                "end": 1293,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1296,
                              "end": 1297,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1310,
                  "end": 1328,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1311,
                    "end": 1326,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1317,
                      "end": 1326,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1317,
                        "end": 1322,
                        "left": {
                          "type": "Identifier",
                          "start": 1317,
                          "end": 1318,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1321,
                          "end": 1322,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1325,
                        "end": 1326,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1344,
            "end": 1350,
            "expression": {
              "type": "CallExpression",
              "start": 1344,
              "end": 1350,
              "callee": {
                "type": "Identifier",
                "start": 1344,
                "end": 1347,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1349,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1354,
      "end": 1530,
      "id": {
        "type": "Identifier",
        "start": 1363,
        "end": 1367,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1368,
          "end": 1369,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1371,
        "end": 1530,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 1377,
            "end": 1511,
            "body": {
              "type": "BlockStatement",
              "start": 1380,
              "end": 1494,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1390,
                  "end": 1399,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1394,
                      "end": 1395,
                      "id": {
                        "type": "Identifier",
                        "start": 1394,
                        "end": 1395,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 1397,
                      "end": 1398,
                      "id": {
                        "type": "Identifier",
                        "start": 1397,
                        "end": 1398,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1408,
                  "end": 1418,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1412,
                      "end": 1417,
                      "id": {
                        "type": "Identifier",
                        "start": 1412,
                        "end": 1413,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1416,
                        "end": 1417,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1427,
                  "end": 1461,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1428,
                    "end": 1459,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1439,
                      "end": 1459,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1441,
                          "end": 1457,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1448,
                            "end": 1457,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1448,
                              "end": 1453,
                              "left": {
                                "type": "Identifier",
                                "start": 1448,
                                "end": 1449,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1452,
                                "end": 1453,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1456,
                              "end": 1457,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1470,
                  "end": 1488,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1471,
                    "end": 1486,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1477,
                      "end": 1486,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1477,
                        "end": 1482,
                        "left": {
                          "type": "Identifier",
                          "start": 1477,
                          "end": 1478,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1482,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1485,
                        "end": 1486,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1502,
              "end": 1509,
              "left": {
                "type": "Literal",
                "start": 1502,
                "end": 1503,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1508,
                "end": 1509,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1521,
            "end": 1528,
            "expression": {
              "type": "CallExpression",
              "start": 1521,
              "end": 1527,
              "callee": {
                "type": "Identifier",
                "start": 1521,
                "end": 1524,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1525,
                  "end": 1526,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1533,
      "end": 1718,
      "id": {
        "type": "Identifier",
        "start": 1542,
        "end": 1546,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1547,
          "end": 1548,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1550,
        "end": 1718,
        "body": [
          {
            "type": "ForStatement",
            "start": 1556,
            "end": 1699,
            "init": {
              "type": "VariableDeclaration",
              "start": 1561,
              "end": 1570,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1565,
                  "end": 1570,
                  "id": {
                    "type": "Identifier",
                    "start": 1565,
                    "end": 1566,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1569,
                    "end": 1570,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1572,
              "end": 1577,
              "left": {
                "type": "Identifier",
                "start": 1572,
                "end": 1573,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 1576,
                "end": 1577,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1579,
              "end": 1582,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1581,
                "end": 1582,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1584,
              "end": 1699,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1594,
                  "end": 1604,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1598,
                      "end": 1603,
                      "id": {
                        "type": "Identifier",
                        "start": 1598,
                        "end": 1599,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1602,
                        "end": 1603,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1613,
                  "end": 1623,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1617,
                      "end": 1622,
                      "id": {
                        "type": "Identifier",
                        "start": 1617,
                        "end": 1618,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1621,
                        "end": 1622,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1632,
                  "end": 1666,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1633,
                    "end": 1664,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1644,
                      "end": 1664,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1646,
                          "end": 1662,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1653,
                            "end": 1662,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1653,
                              "end": 1658,
                              "left": {
                                "type": "Identifier",
                                "start": 1653,
                                "end": 1654,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 1657,
                                "end": 1658,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1661,
                              "end": 1662,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1675,
                  "end": 1693,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1676,
                    "end": 1691,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1682,
                      "end": 1691,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1682,
                        "end": 1687,
                        "left": {
                          "type": "Identifier",
                          "start": 1682,
                          "end": 1683,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 1686,
                          "end": 1687,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1690,
                        "end": 1691,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1709,
            "end": 1716,
            "expression": {
              "type": "CallExpression",
              "start": 1709,
              "end": 1715,
              "callee": {
                "type": "Identifier",
                "start": 1709,
                "end": 1712,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1713,
                  "end": 1714,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1730,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1739,
        "end": 1745,
        "name": "foo0_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1746,
          "end": 1747,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1749,
        "end": 1878,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1755,
            "end": 1863,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 1760,
              "end": 1767,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1766,
                  "end": 1767,
                  "id": {
                    "type": "Identifier",
                    "start": 1766,
                    "end": 1767,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1771,
              "end": 1773,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 1775,
              "end": 1863,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1785,
                  "end": 1795,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1789,
                      "end": 1794,
                      "id": {
                        "type": "Identifier",
                        "start": 1789,
                        "end": 1790,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1793,
                        "end": 1794,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1804,
                  "end": 1834,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1805,
                    "end": 1832,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1816,
                      "end": 1832,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1818,
                          "end": 1830,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1825,
                            "end": 1830,
                            "left": {
                              "type": "Identifier",
                              "start": 1825,
                              "end": 1826,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1829,
                              "end": 1830,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1843,
                  "end": 1857,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1844,
                    "end": 1855,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 1850,
                      "end": 1855,
                      "left": {
                        "type": "Identifier",
                        "start": 1850,
                        "end": 1851,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1854,
                        "end": 1855,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1869,
            "end": 1876,
            "expression": {
              "type": "CallExpression",
              "start": 1869,
              "end": 1875,
              "callee": {
                "type": "Identifier",
                "start": 1869,
                "end": 1872,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1874,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1880,
      "end": 2030,
      "id": {
        "type": "Identifier",
        "start": 1889,
        "end": 1897,
        "name": "foo0_1_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1898,
          "end": 1899,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1901,
        "end": 2030,
        "body": [
          {
            "type": "ForInStatement",
            "start": 1907,
            "end": 2015,
            "left": {
              "type": "VariableDeclaration",
              "start": 1912,
              "end": 1919,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1918,
                  "end": 1919,
                  "id": {
                    "type": "Identifier",
                    "start": 1918,
                    "end": 1919,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1923,
              "end": 1925,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 1927,
              "end": 2015,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1937,
                  "end": 1947,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1941,
                      "end": 1946,
                      "id": {
                        "type": "Identifier",
                        "start": 1941,
                        "end": 1942,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1945,
                        "end": 1946,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1956,
                  "end": 1986,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 1957,
                    "end": 1984,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1968,
                      "end": 1984,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1970,
                          "end": 1982,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 1977,
                            "end": 1982,
                            "left": {
                              "type": "Identifier",
                              "start": 1977,
                              "end": 1978,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 1981,
                              "end": 1982,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1995,
                  "end": 2009,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 1996,
                    "end": 2007,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2002,
                      "end": 2007,
                      "left": {
                        "type": "Identifier",
                        "start": 2002,
                        "end": 2003,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2006,
                        "end": 2007,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2021,
            "end": 2028,
            "expression": {
              "type": "CallExpression",
              "start": 2021,
              "end": 2027,
              "callee": {
                "type": "Identifier",
                "start": 2021,
                "end": 2024,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2025,
                  "end": 2026,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2032,
      "end": 2186,
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2047,
        "name": "foo1_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2048,
          "end": 2049,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2051,
        "end": 2186,
        "body": [
          {
            "type": "ForStatement",
            "start": 2057,
            "end": 2171,
            "init": {
              "type": "VariableDeclaration",
              "start": 2062,
              "end": 2073,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2068,
                  "end": 2073,
                  "id": {
                    "type": "Identifier",
                    "start": 2068,
                    "end": 2069,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2072,
                    "end": 2073,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2075,
              "end": 2080,
              "left": {
                "type": "Identifier",
                "start": 2075,
                "end": 2076,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 2079,
                "end": 2080,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2083,
              "end": 2171,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2093,
                  "end": 2103,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2097,
                      "end": 2102,
                      "id": {
                        "type": "Identifier",
                        "start": 2097,
                        "end": 2098,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2101,
                        "end": 2102,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2112,
                  "end": 2142,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2113,
                    "end": 2140,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2124,
                      "end": 2140,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2126,
                          "end": 2138,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2133,
                            "end": 2138,
                            "left": {
                              "type": "Identifier",
                              "start": 2133,
                              "end": 2134,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2137,
                              "end": 2138,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2151,
                  "end": 2165,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2152,
                    "end": 2163,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2158,
                      "end": 2163,
                      "left": {
                        "type": "Identifier",
                        "start": 2158,
                        "end": 2159,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2162,
                        "end": 2163,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2177,
            "end": 2184,
            "expression": {
              "type": "CallExpression",
              "start": 2177,
              "end": 2183,
              "callee": {
                "type": "Identifier",
                "start": 2177,
                "end": 2180,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2181,
                  "end": 2182,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2188,
      "end": 2357,
      "id": {
        "type": "Identifier",
        "start": 2197,
        "end": 2203,
        "name": "foo2_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2204,
          "end": 2205,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2207,
        "end": 2357,
        "body": [
          {
            "type": "WhileStatement",
            "start": 2213,
            "end": 2338,
            "test": {
              "type": "BinaryExpression",
              "start": 2220,
              "end": 2227,
              "left": {
                "type": "Literal",
                "start": 2220,
                "end": 2221,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2226,
                "end": 2227,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 2229,
              "end": 2338,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2239,
                  "end": 2251,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2245,
                      "end": 2250,
                      "id": {
                        "type": "Identifier",
                        "start": 2245,
                        "end": 2246,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2249,
                        "end": 2250,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2260,
                  "end": 2270,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2264,
                      "end": 2269,
                      "id": {
                        "type": "Identifier",
                        "start": 2264,
                        "end": 2265,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2268,
                        "end": 2269,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2279,
                  "end": 2309,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2280,
                    "end": 2307,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2291,
                      "end": 2307,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2293,
                          "end": 2305,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2300,
                            "end": 2305,
                            "left": {
                              "type": "Identifier",
                              "start": 2300,
                              "end": 2301,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2304,
                              "end": 2305,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2318,
                  "end": 2332,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2319,
                    "end": 2330,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2325,
                      "end": 2330,
                      "left": {
                        "type": "Identifier",
                        "start": 2325,
                        "end": 2326,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2329,
                        "end": 2330,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2348,
            "end": 2355,
            "expression": {
              "type": "CallExpression",
              "start": 2348,
              "end": 2354,
              "callee": {
                "type": "Identifier",
                "start": 2348,
                "end": 2351,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2353,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2359,
      "end": 2528,
      "id": {
        "type": "Identifier",
        "start": 2368,
        "end": 2374,
        "name": "foo3_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2375,
          "end": 2376,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2378,
        "end": 2528,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 2384,
            "end": 2509,
            "body": {
              "type": "BlockStatement",
              "start": 2387,
              "end": 2492,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2397,
                  "end": 2409,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2403,
                      "end": 2408,
                      "id": {
                        "type": "Identifier",
                        "start": 2403,
                        "end": 2404,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2407,
                        "end": 2408,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2418,
                  "end": 2424,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2422,
                      "end": 2423,
                      "id": {
                        "type": "Identifier",
                        "start": 2422,
                        "end": 2423,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2433,
                  "end": 2463,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2434,
                    "end": 2461,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2445,
                      "end": 2461,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2447,
                          "end": 2459,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2454,
                            "end": 2459,
                            "left": {
                              "type": "Identifier",
                              "start": 2454,
                              "end": 2455,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2458,
                              "end": 2459,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2472,
                  "end": 2486,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2473,
                    "end": 2484,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2479,
                      "end": 2484,
                      "left": {
                        "type": "Identifier",
                        "start": 2479,
                        "end": 2480,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2483,
                        "end": 2484,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2500,
              "end": 2507,
              "left": {
                "type": "Literal",
                "start": 2500,
                "end": 2501,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2506,
                "end": 2507,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2519,
            "end": 2526,
            "expression": {
              "type": "CallExpression",
              "start": 2519,
              "end": 2525,
              "callee": {
                "type": "Identifier",
                "start": 2519,
                "end": 2522,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2523,
                  "end": 2524,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2530,
      "end": 2709,
      "id": {
        "type": "Identifier",
        "start": 2539,
        "end": 2545,
        "name": "foo4_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2546,
          "end": 2547,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2549,
        "end": 2709,
        "body": [
          {
            "type": "ForStatement",
            "start": 2555,
            "end": 2690,
            "init": {
              "type": "VariableDeclaration",
              "start": 2560,
              "end": 2571,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2566,
                  "end": 2571,
                  "id": {
                    "type": "Identifier",
                    "start": 2566,
                    "end": 2567,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2570,
                    "end": 2571,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2573,
              "end": 2578,
              "left": {
                "type": "Identifier",
                "start": 2573,
                "end": 2574,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 2577,
                "end": 2578,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2581,
              "end": 2690,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2591,
                  "end": 2601,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2595,
                      "end": 2600,
                      "id": {
                        "type": "Identifier",
                        "start": 2595,
                        "end": 2596,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2599,
                        "end": 2600,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2610,
                  "end": 2622,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2616,
                      "end": 2621,
                      "id": {
                        "type": "Identifier",
                        "start": 2616,
                        "end": 2617,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2620,
                        "end": 2621,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2631,
                  "end": 2661,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2632,
                    "end": 2659,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2643,
                      "end": 2659,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2645,
                          "end": 2657,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2652,
                            "end": 2657,
                            "left": {
                              "type": "Identifier",
                              "start": 2652,
                              "end": 2653,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2656,
                              "end": 2657,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2670,
                  "end": 2684,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2671,
                    "end": 2682,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2677,
                      "end": 2682,
                      "left": {
                        "type": "Identifier",
                        "start": 2677,
                        "end": 2678,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2681,
                        "end": 2682,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2700,
            "end": 2707,
            "expression": {
              "type": "CallExpression",
              "start": 2700,
              "end": 2706,
              "callee": {
                "type": "Identifier",
                "start": 2700,
                "end": 2703,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2704,
                  "end": 2705,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2711,
      "end": 2884,
      "id": {
        "type": "Identifier",
        "start": 2720,
        "end": 2726,
        "name": "foo5_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2727,
          "end": 2728,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2730,
        "end": 2884,
        "body": [
          {
            "type": "ForStatement",
            "start": 2736,
            "end": 2865,
            "init": {
              "type": "VariableDeclaration",
              "start": 2741,
              "end": 2759,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2747,
                  "end": 2752,
                  "id": {
                    "type": "Identifier",
                    "start": 2747,
                    "end": 2748,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2751,
                    "end": 2752,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 2754,
                  "end": 2759,
                  "id": {
                    "type": "Identifier",
                    "start": 2754,
                    "end": 2755,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2758,
                    "end": 2759,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2761,
              "end": 2766,
              "left": {
                "type": "Identifier",
                "start": 2761,
                "end": 2762,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 2765,
                "end": 2766,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2769,
              "end": 2865,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2779,
                  "end": 2789,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2783,
                      "end": 2788,
                      "id": {
                        "type": "Identifier",
                        "start": 2783,
                        "end": 2784,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2787,
                        "end": 2788,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2798,
                  "end": 2832,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2799,
                    "end": 2830,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2810,
                      "end": 2830,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2812,
                          "end": 2828,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2819,
                            "end": 2828,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2819,
                              "end": 2824,
                              "left": {
                                "type": "Identifier",
                                "start": 2819,
                                "end": 2820,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 2823,
                                "end": 2824,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 2827,
                              "end": 2828,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2841,
                  "end": 2859,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 2842,
                    "end": 2857,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 2848,
                      "end": 2857,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2848,
                        "end": 2853,
                        "left": {
                          "type": "Identifier",
                          "start": 2848,
                          "end": 2849,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 2852,
                          "end": 2853,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2856,
                        "end": 2857,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2875,
            "end": 2882,
            "expression": {
              "type": "CallExpression",
              "start": 2875,
              "end": 2881,
              "callee": {
                "type": "Identifier",
                "start": 2875,
                "end": 2878,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2879,
                  "end": 2880,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2887,
      "end": 3070,
      "id": {
        "type": "Identifier",
        "start": 2896,
        "end": 2902,
        "name": "foo6_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2903,
          "end": 2904,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2906,
        "end": 3070,
        "body": [
          {
            "type": "WhileStatement",
            "start": 2912,
            "end": 3052,
            "test": {
              "type": "BinaryExpression",
              "start": 2919,
              "end": 2926,
              "left": {
                "type": "Literal",
                "start": 2919,
                "end": 2920,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2925,
                "end": 2926,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 2928,
              "end": 3052,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2938,
                  "end": 2957,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2944,
                      "end": 2949,
                      "id": {
                        "type": "Identifier",
                        "start": 2944,
                        "end": 2945,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2948,
                        "end": 2949,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 2951,
                      "end": 2956,
                      "id": {
                        "type": "Identifier",
                        "start": 2951,
                        "end": 2952,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 2955,
                        "end": 2956,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2966,
                  "end": 2976,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2970,
                      "end": 2975,
                      "id": {
                        "type": "Identifier",
                        "start": 2970,
                        "end": 2971,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 2974,
                        "end": 2975,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2985,
                  "end": 3019,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2986,
                    "end": 3017,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2997,
                      "end": 3017,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2999,
                          "end": 3015,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3006,
                            "end": 3015,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3006,
                              "end": 3011,
                              "left": {
                                "type": "Identifier",
                                "start": 3006,
                                "end": 3007,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 3010,
                                "end": 3011,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3014,
                              "end": 3015,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3028,
                  "end": 3046,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3029,
                    "end": 3044,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3035,
                      "end": 3044,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3035,
                        "end": 3040,
                        "left": {
                          "type": "Identifier",
                          "start": 3035,
                          "end": 3036,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 3039,
                          "end": 3040,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3043,
                        "end": 3044,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3062,
            "end": 3068,
            "expression": {
              "type": "CallExpression",
              "start": 3062,
              "end": 3068,
              "callee": {
                "type": "Identifier",
                "start": 3062,
                "end": 3065,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3066,
                  "end": 3067,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3072,
      "end": 3260,
      "id": {
        "type": "Identifier",
        "start": 3081,
        "end": 3087,
        "name": "foo7_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3088,
          "end": 3089,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3091,
        "end": 3260,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 3097,
            "end": 3241,
            "body": {
              "type": "BlockStatement",
              "start": 3100,
              "end": 3224,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3110,
                  "end": 3129,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3116,
                      "end": 3121,
                      "id": {
                        "type": "Identifier",
                        "start": 3116,
                        "end": 3117,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3120,
                        "end": 3121,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 3123,
                      "end": 3128,
                      "id": {
                        "type": "Identifier",
                        "start": 3123,
                        "end": 3124,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3127,
                        "end": 3128,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3138,
                  "end": 3148,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3142,
                      "end": 3147,
                      "id": {
                        "type": "Identifier",
                        "start": 3142,
                        "end": 3143,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3146,
                        "end": 3147,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3157,
                  "end": 3191,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3158,
                    "end": 3189,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 3169,
                      "end": 3189,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3171,
                          "end": 3187,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3178,
                            "end": 3187,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3178,
                              "end": 3183,
                              "left": {
                                "type": "Identifier",
                                "start": 3178,
                                "end": 3179,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 3182,
                                "end": 3183,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3186,
                              "end": 3187,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3200,
                  "end": 3218,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3201,
                    "end": 3216,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3207,
                      "end": 3216,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3207,
                        "end": 3212,
                        "left": {
                          "type": "Identifier",
                          "start": 3207,
                          "end": 3208,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 3211,
                          "end": 3212,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3215,
                        "end": 3216,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3232,
              "end": 3239,
              "left": {
                "type": "Literal",
                "start": 3232,
                "end": 3233,
                "value": 1,
                "raw": "1"
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 3238,
                "end": 3239,
                "value": 1,
                "raw": "1"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3251,
            "end": 3258,
            "expression": {
              "type": "CallExpression",
              "start": 3251,
              "end": 3257,
              "callee": {
                "type": "Identifier",
                "start": 3251,
                "end": 3254,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3255,
                  "end": 3256,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3263,
      "end": 3450,
      "id": {
        "type": "Identifier",
        "start": 3272,
        "end": 3278,
        "name": "foo8_c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3279,
          "end": 3280,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3282,
        "end": 3450,
        "body": [
          {
            "type": "ForStatement",
            "start": 3288,
            "end": 3431,
            "init": {
              "type": "VariableDeclaration",
              "start": 3293,
              "end": 3304,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3299,
                  "end": 3304,
                  "id": {
                    "type": "Identifier",
                    "start": 3299,
                    "end": 3300,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3303,
                    "end": 3304,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3306,
              "end": 3311,
              "left": {
                "type": "Identifier",
                "start": 3306,
                "end": 3307,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 3310,
                "end": 3311,
                "value": 1,
                "raw": "1"
              }
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 3314,
              "end": 3431,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3324,
                  "end": 3336,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3330,
                      "end": 3335,
                      "id": {
                        "type": "Identifier",
                        "start": 3330,
                        "end": 3331,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 3334,
                        "end": 3335,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3345,
                  "end": 3355,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3349,
                      "end": 3354,
                      "id": {
                        "type": "Identifier",
                        "start": 3349,
                        "end": 3350,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3353,
                        "end": 3354,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3364,
                  "end": 3398,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 3365,
                    "end": 3396,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 3376,
                      "end": 3396,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3378,
                          "end": 3394,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3385,
                            "end": 3394,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3385,
                              "end": 3390,
                              "left": {
                                "type": "Identifier",
                                "start": 3385,
                                "end": 3386,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 3389,
                                "end": 3390,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 3393,
                              "end": 3394,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3407,
                  "end": 3425,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 3408,
                    "end": 3423,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BinaryExpression",
                      "start": 3414,
                      "end": 3423,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 3414,
                        "end": 3419,
                        "left": {
                          "type": "Identifier",
                          "start": 3414,
                          "end": 3415,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 3418,
                          "end": 3419,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3422,
                        "end": 3423,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3441,
            "end": 3448,
            "expression": {
              "type": "CallExpression",
              "start": 3441,
              "end": 3447,
              "callee": {
                "type": "Identifier",
                "start": 3441,
                "end": 3444,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3445,
                  "end": 3446,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
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
