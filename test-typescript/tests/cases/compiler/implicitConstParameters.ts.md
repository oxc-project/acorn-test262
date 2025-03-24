__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 941,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "name": "doSomething",
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
          "start": 21,
          "end": 35,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 35,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 25,
              "end": 35,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 31,
                  "end": 35
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 50,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 48,
            "expression": {
              "type": "CallExpression",
              "start": 43,
              "end": 47,
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 45,
                "name": "cb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
      "start": 52,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 63,
        "name": "fn",
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
          "start": 64,
          "end": 82,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 82,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 67,
              "end": 82,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 160,
        "body": [
          {
            "type": "IfStatement",
            "start": 88,
            "end": 158,
            "test": {
              "type": "BinaryExpression",
              "start": 92,
              "end": 113,
              "left": {
                "type": "UnaryExpression",
                "start": 92,
                "end": 100,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 105,
                "end": 113,
                "value": "number",
                "raw": "'number'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 115,
              "end": 158,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 123,
                  "end": 154,
                  "expression": {
                    "type": "CallExpression",
                    "start": 123,
                    "end": 153,
                    "callee": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 134,
                      "name": "doSomething",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 135,
                        "end": 152,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "CallExpression",
                          "start": 141,
                          "end": 152,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 141,
                            "end": 150,
                            "object": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 150,
                              "name": "toFixed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 173,
        "name": "f1",
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
          "start": 174,
          "end": 195,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 195,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 177,
              "end": 195,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 177,
                  "end": 183
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 186,
                  "end": 195
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 269,
        "body": [
          {
            "type": "IfStatement",
            "start": 203,
            "end": 234,
            "test": {
              "type": "UnaryExpression",
              "start": 207,
              "end": 209,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 211,
              "end": 234,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 221,
                  "end": 228,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 267,
            "expression": {
              "type": "CallExpression",
              "start": 239,
              "end": 266,
              "callee": {
                "type": "Identifier",
                "start": 239,
                "end": 250,
                "name": "doSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 251,
                  "end": 265,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "MemberExpression",
                    "start": 257,
                    "end": 265,
                    "object": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 258,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 265,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "start": 271,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 282,
        "name": "f2",
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
          "start": 283,
          "end": 304,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 284,
            "end": 304,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 286,
              "end": 304,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 286,
                  "end": 292
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 295,
                  "end": 304
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 409,
        "body": [
          {
            "type": "IfStatement",
            "start": 312,
            "end": 407,
            "test": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 319,
              "end": 407,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 329,
                  "end": 401,
                  "expression": {
                    "type": "CallExpression",
                    "start": 329,
                    "end": 400,
                    "callee": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 340,
                      "name": "doSomething",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 341,
                        "end": 399,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 347,
                          "end": 399,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 361,
                              "end": 389,
                              "expression": {
                                "type": "CallExpression",
                                "start": 361,
                                "end": 388,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 372,
                                  "name": "doSomething",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 373,
                                    "end": 387,
                                    "id": null,
                                    "expression": true,
                                    "generator": false,
                                    "async": false,
                                    "params": [],
                                    "body": {
                                      "type": "MemberExpression",
                                      "start": 379,
                                      "end": 387,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 379,
                                        "end": 380,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 381,
                                        "end": 387,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "typeParameters": null,
                                    "returnType": null
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 422,
        "name": "f3",
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
          "start": 423,
          "end": 444,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 424,
            "end": 444,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 426,
              "end": 444,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 426,
                  "end": 432
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 435,
                  "end": 444
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 446,
        "end": 559,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 452,
            "end": 460,
            "expression": {
              "type": "CallExpression",
              "start": 452,
              "end": 459,
              "callee": {
                "type": "Identifier",
                "start": 452,
                "end": 457,
                "name": "inner",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 465,
            "end": 557,
            "id": {
              "type": "Identifier",
              "start": 474,
              "end": 479,
              "name": "inner",
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
              "start": 482,
              "end": 557,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 492,
                  "end": 551,
                  "test": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 499,
                    "end": 551,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 513,
                        "end": 541,
                        "expression": {
                          "type": "CallExpression",
                          "start": 513,
                          "end": 540,
                          "callee": {
                            "type": "Identifier",
                            "start": 513,
                            "end": 524,
                            "name": "doSomething",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 525,
                              "end": 539,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "MemberExpression",
                                "start": 531,
                                "end": 539,
                                "object": {
                                  "type": "Identifier",
                                  "start": 531,
                                  "end": 532,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 533,
                                  "end": 539,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 561,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 572,
        "name": "f4",
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
          "start": 573,
          "end": 594,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 594,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 576,
              "end": 594,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 576,
                  "end": 582
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 585,
                  "end": 594
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 596,
        "end": 670,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 602,
            "end": 612,
            "expression": {
              "type": "AssignmentExpression",
              "start": 602,
              "end": 611,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 606,
                "end": 611,
                "value": "abc",
                "raw": "\"abc\""
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 617,
            "end": 668,
            "test": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 624,
              "end": 668,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 634,
                  "end": 662,
                  "expression": {
                    "type": "CallExpression",
                    "start": 634,
                    "end": 661,
                    "callee": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 645,
                      "name": "doSomething",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 646,
                        "end": 660,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "start": 652,
                          "end": 660,
                          "object": {
                            "type": "Identifier",
                            "start": 652,
                            "end": 653,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 654,
                            "end": 660,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 672,
      "end": 821,
      "id": {
        "type": "Identifier",
        "start": 681,
        "end": 683,
        "name": "f5",
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
          "start": 684,
          "end": 705,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 685,
            "end": 705,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 687,
              "end": 705,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 687,
                  "end": 693
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 696,
                  "end": 705
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 707,
        "end": 821,
        "body": [
          {
            "type": "IfStatement",
            "start": 713,
            "end": 764,
            "test": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 720,
              "end": 764,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 730,
                  "end": 758,
                  "expression": {
                    "type": "CallExpression",
                    "start": 730,
                    "end": 757,
                    "callee": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 741,
                      "name": "doSomething",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 742,
                        "end": 756,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "start": 748,
                          "end": 756,
                          "object": {
                            "type": "Identifier",
                            "start": 748,
                            "end": 749,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 750,
                            "end": 756,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 769,
            "end": 779,
            "expression": {
              "type": "AssignmentExpression",
              "start": 769,
              "end": 778,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 773,
                "end": 778,
                "value": "abc",
                "raw": "\"abc\""
              }
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
      "start": 824,
      "end": 941,
      "id": {
        "type": "Identifier",
        "start": 833,
        "end": 835,
        "name": "f6",
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
          "start": 836,
          "end": 857,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 837,
            "end": 857,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 839,
              "end": 857,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 839,
                  "end": 845
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 848,
                  "end": 857
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 859,
        "end": 941,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 865,
            "end": 883,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 871,
                "end": 882,
                "id": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 872,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 875,
                  "end": 882,
                  "left": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 876,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 880,
                    "end": 882,
                    "value": "",
                    "raw": "\"\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 888,
            "end": 939,
            "test": {
              "type": "Identifier",
              "start": 892,
              "end": 893,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 895,
              "end": 939,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 905,
                  "end": 933,
                  "expression": {
                    "type": "CallExpression",
                    "start": 905,
                    "end": 932,
                    "callee": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 916,
                      "name": "doSomething",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 917,
                        "end": 931,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "start": 923,
                          "end": 931,
                          "object": {
                            "type": "Identifier",
                            "start": 923,
                            "end": 924,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 925,
                            "end": 931,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
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
