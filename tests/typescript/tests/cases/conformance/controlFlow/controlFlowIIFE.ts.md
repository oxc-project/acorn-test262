__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1199,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 34,
        "decorators": [],
        "name": "getStringOrNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 53,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 38,
          "end": 53,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            },
            {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
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
        "start": 70,
        "end": 216,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 76,
            "end": 104,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 84,
                  "end": 103,
                  "callee": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 101,
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 109,
            "end": 214,
            "test": {
              "type": "BinaryExpression",
              "start": 113,
              "end": 134,
              "left": {
                "type": "UnaryExpression",
                "start": 113,
                "end": 121,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 126,
                "end": 134,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 136,
              "end": 214,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 146,
                  "end": 208,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 150,
                      "end": 207,
                      "id": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 154,
                        "end": 207,
                        "callee": {
                          "type": "FunctionExpression",
                          "start": 154,
                          "end": 205,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 165,
                            "end": 205,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 179,
                                "end": 195,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 186,
                                  "end": 194,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 186,
                                    "end": 187,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 194,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
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
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 218,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 229,
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
        "start": 232,
        "end": 380,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 238,
            "end": 266,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 242,
                "end": 265,
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 246,
                  "end": 265,
                  "callee": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 263,
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 271,
            "end": 378,
            "test": {
              "type": "BinaryExpression",
              "start": 275,
              "end": 296,
              "left": {
                "type": "UnaryExpression",
                "start": 275,
                "end": 283,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 288,
                "end": 296,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 298,
              "end": 378,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 308,
                  "end": 372,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 312,
                      "end": 371,
                      "id": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 316,
                        "end": 371,
                        "callee": {
                          "type": "FunctionExpression",
                          "start": 317,
                          "end": 368,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 328,
                            "end": 368,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 342,
                                "end": 358,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 349,
                                  "end": 357,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 349,
                                    "end": 350,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 351,
                                    "end": 357,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
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
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 382,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 393,
        "decorators": [],
        "name": "f3",
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
        "start": 396,
        "end": 538,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 402,
            "end": 430,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 406,
                "end": 429,
                "id": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 407,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 410,
                  "end": 429,
                  "callee": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 427,
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 435,
            "end": 449,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 439,
                "end": 448,
                "id": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 448,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 440,
                    "end": 448,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 454,
            "end": 536,
            "test": {
              "type": "BinaryExpression",
              "start": 458,
              "end": 479,
              "left": {
                "type": "UnaryExpression",
                "start": 458,
                "end": 466,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 466,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 471,
                "end": 479,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 481,
              "end": 536,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 491,
                  "end": 530,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 495,
                      "end": 529,
                      "id": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 496,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 499,
                        "end": 529,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 500,
                          "end": 521,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 500,
                              "end": 501,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BinaryExpression",
                            "start": 505,
                            "end": 521,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 505,
                              "end": 517,
                              "left": {
                                "type": "MemberExpression",
                                "start": 505,
                                "end": 513,
                                "object": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 506,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 507,
                                  "end": 513,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 516,
                                "end": 517,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "start": 520,
                              "end": 521,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "id": null,
                          "generator": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "AssignmentExpression",
                            "start": 523,
                            "end": 528,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 523,
                              "end": 524,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 527,
                              "end": 528,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 598,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 597,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 597,
            "decorators": [],
            "name": "maybeNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 577,
              "end": 597,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 579,
                "end": 597,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 579,
                    "end": 585
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 588,
                    "end": 597
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 599,
      "end": 640,
      "expression": {
        "type": "CallExpression",
        "start": 599,
        "end": 639,
        "callee": {
          "type": "FunctionExpression",
          "start": 600,
          "end": 636,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 612,
            "end": 636,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 618,
                "end": 634,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 618,
                  "end": 633,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 629,
                    "decorators": [],
                    "name": "maybeNumber",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 632,
                    "end": 633,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
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
      "start": 641,
      "end": 655,
      "expression": {
        "type": "UpdateExpression",
        "start": 641,
        "end": 654,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 641,
          "end": 652,
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 656,
      "end": 709,
      "test": {
        "type": "BinaryExpression",
        "start": 660,
        "end": 685,
        "left": {
          "type": "Identifier",
          "start": 660,
          "end": 671,
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 676,
          "end": 685,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 687,
        "end": 709,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 693,
            "end": 707,
            "expression": {
              "type": "UpdateExpression",
              "start": 693,
              "end": 706,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 693,
                "end": 704,
                "decorators": [],
                "name": "maybeNumber",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 711,
      "end": 740,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 739,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 719,
              "end": 739,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 721,
                "end": 739,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 730,
                    "end": 739
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 741,
      "end": 799,
      "test": {
        "type": "UnaryExpression",
        "start": 745,
        "end": 750,
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "start": 746,
          "end": 750,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 752,
        "end": 799,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 758,
            "end": 797,
            "argument": {
              "type": "NewExpression",
              "start": 764,
              "end": 796,
              "callee": {
                "type": "Identifier",
                "start": 768,
                "end": 773,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 774,
                  "end": 795,
                  "value": "Test is not defined",
                  "raw": "'Test is not defined'"
                }
              ]
            }
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 800,
      "end": 845,
      "expression": {
        "type": "CallExpression",
        "start": 800,
        "end": 844,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 801,
          "end": 841,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 807,
            "end": 841,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 813,
                "end": 827,
                "expression": {
                  "type": "CallExpression",
                  "start": 813,
                  "end": 826,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 813,
                    "end": 823,
                    "object": {
                      "type": "Identifier",
                      "start": 813,
                      "end": 817,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 818,
                      "end": 823,
                      "decorators": [],
                      "name": "slice",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 824,
                      "end": 825,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 869,
      "end": 955,
      "id": {
        "type": "Identifier",
        "start": 878,
        "end": 880,
        "decorators": [],
        "name": "f4",
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
        "start": 883,
        "end": 955,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 889,
            "end": 903,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 893,
                "end": 902,
                "id": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 902,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 894,
                    "end": 902,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 896,
                      "end": 902
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 908,
            "end": 946,
            "expression": {
              "type": "CallExpression",
              "start": 908,
              "end": 945,
              "callee": {
                "type": "FunctionExpression",
                "start": 909,
                "end": 942,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 920,
                  "end": 942,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 930,
                      "end": 936,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 930,
                        "end": 935,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 930,
                          "end": 931,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 934,
                          "end": 935,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "directive": null
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
            "start": 951,
            "end": 953,
            "expression": {
              "type": "Identifier",
              "start": 951,
              "end": 952,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 957,
      "end": 1080,
      "id": {
        "type": "Identifier",
        "start": 966,
        "end": 968,
        "decorators": [],
        "name": "f5",
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
        "start": 971,
        "end": 1080,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 977,
            "end": 991,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 981,
                "end": 990,
                "id": {
                  "type": "Identifier",
                  "start": 981,
                  "end": 990,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 982,
                    "end": 990,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 984,
                      "end": 990
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 996,
            "end": 1052,
            "expression": {
              "type": "CallExpression",
              "start": 996,
              "end": 1051,
              "callee": {
                "type": "FunctionExpression",
                "start": 997,
                "end": 1048,
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1009,
                  "end": 1048,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1019,
                      "end": 1027,
                      "expression": {
                        "type": "YieldExpression",
                        "start": 1019,
                        "end": 1026,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 1025,
                          "end": 1026,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1036,
                      "end": 1042,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1036,
                        "end": 1041,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1037,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1040,
                          "end": 1041,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "directive": null
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
            "start": 1057,
            "end": 1059,
            "expression": {
              "type": "Identifier",
              "start": 1057,
              "end": 1058,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1082,
      "end": 1199,
      "id": {
        "type": "Identifier",
        "start": 1091,
        "end": 1093,
        "decorators": [],
        "name": "f6",
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
        "start": 1096,
        "end": 1199,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1102,
            "end": 1116,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1106,
                "end": 1115,
                "id": {
                  "type": "Identifier",
                  "start": 1106,
                  "end": 1115,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1107,
                    "end": 1115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1109,
                      "end": 1115
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1121,
            "end": 1171,
            "expression": {
              "type": "CallExpression",
              "start": 1121,
              "end": 1170,
              "callee": {
                "type": "FunctionExpression",
                "start": 1122,
                "end": 1167,
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1139,
                  "end": 1167,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1149,
                      "end": 1161,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1149,
                        "end": 1160,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 1149,
                          "end": 1150,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "AwaitExpression",
                          "start": 1153,
                          "end": 1160,
                          "argument": {
                            "type": "Literal",
                            "start": 1159,
                            "end": 1160,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "directive": null
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
            "start": 1176,
            "end": 1178,
            "expression": {
              "type": "Identifier",
              "start": 1176,
              "end": 1177,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
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
