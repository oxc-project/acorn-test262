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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 50,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 48,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 43,
              "end": 47,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 45,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
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
        "end": 20,
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 35,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 35,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 25,
              "end": 35,
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 160,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 160,
        "body": [
          {
            "type": "IfStatement",
            "start": 88,
            "end": 158,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 115,
              "end": 158,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 123,
                  "end": 154,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 123,
                    "end": 153,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 135,
                        "end": 152,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 141,
                          "end": 152,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 141,
                            "end": 150,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 150,
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 134,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 92,
              "end": 113,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 92,
                "end": 100,
                "argument": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 105,
                "end": 113,
                "raw": "'number'",
                "value": "number",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 63,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 269,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 269,
        "body": [
          {
            "type": "IfStatement",
            "start": 203,
            "end": 234,
            "alternate": null,
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
            "test": {
              "type": "UnaryExpression",
              "start": 207,
              "end": 209,
              "argument": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 267,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 239,
              "end": 266,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 251,
                  "end": 265,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 257,
                    "end": 265,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 258,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 265,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 239,
                "end": 250,
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 173,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 174,
          "end": 195,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 271,
      "end": 409,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 409,
        "body": [
          {
            "type": "IfStatement",
            "start": 312,
            "end": 407,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 319,
              "end": 407,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 329,
                  "end": 401,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 329,
                    "end": 400,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 341,
                        "end": 399,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 347,
                          "end": 399,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 361,
                              "end": 389,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 361,
                                "end": 388,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "start": 373,
                                    "end": 387,
                                    "async": false,
                                    "body": {
                                      "type": "MemberExpression",
                                      "start": 379,
                                      "end": 387,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 379,
                                        "end": 380,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 381,
                                        "end": 387,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "expression": true,
                                    "generator": false,
                                    "id": null,
                                    "params": [],
                                    "returnType": null,
                                    "typeParameters": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 372,
                                  "decorators": [],
                                  "name": "doSomething",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 340,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 282,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 283,
          "end": 304,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 559,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 446,
        "end": 559,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 452,
            "end": 460,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 452,
              "end": 459,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 452,
                "end": 457,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 465,
            "end": 557,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 482,
              "end": 557,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 492,
                  "end": 551,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 499,
                    "end": 551,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 513,
                        "end": 541,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 513,
                          "end": 540,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 525,
                              "end": 539,
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "start": 531,
                                "end": 539,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 531,
                                  "end": 532,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 533,
                                  "end": 539,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 513,
                            "end": 524,
                            "decorators": [],
                            "name": "doSomething",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 474,
              "end": 479,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 422,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 423,
          "end": 444,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 561,
      "end": 670,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 596,
        "end": 670,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 602,
            "end": 612,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 602,
              "end": 611,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 606,
                "end": 611,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 617,
            "end": 668,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 624,
              "end": 668,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 634,
                  "end": 662,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 634,
                    "end": 661,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 646,
                        "end": 660,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 652,
                          "end": 660,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 652,
                            "end": 653,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 654,
                            "end": 660,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 645,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 572,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 573,
          "end": 594,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 672,
      "end": 821,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 707,
        "end": 821,
        "body": [
          {
            "type": "IfStatement",
            "start": 713,
            "end": 764,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 720,
              "end": 764,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 730,
                  "end": 758,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 730,
                    "end": 757,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 742,
                        "end": 756,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 748,
                          "end": 756,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 748,
                            "end": 749,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 750,
                            "end": 756,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 741,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 769,
            "end": 779,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 769,
              "end": 778,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 773,
                "end": 778,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 681,
        "end": 683,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 684,
          "end": 705,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 824,
      "end": 941,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 872,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 875,
                  "end": 882,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 876,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 880,
                    "end": 882,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 888,
            "end": 939,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 895,
              "end": 939,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 905,
                  "end": 933,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 905,
                    "end": 932,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 917,
                        "end": 931,
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "start": 923,
                          "end": 931,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 923,
                            "end": 924,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 925,
                            "end": 931,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 916,
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 892,
              "end": 893,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 833,
        "end": 835,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 836,
          "end": 857,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
