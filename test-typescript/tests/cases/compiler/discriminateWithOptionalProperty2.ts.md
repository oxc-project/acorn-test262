__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 81,
  "end": 1715,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 100,
        "name": "PromiseOrValue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 103,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 106,
        "end": 120,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 106,
            "end": 116,
            "typeName": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 113,
              "end": 116,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 115,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 119,
            "end": 120,
            "typeName": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 1410,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 148,
        "name": "mapAsyncIterable",
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
          "start": 173,
          "end": 247,
          "name": "iterable",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 247,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 183,
              "end": 247,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 183,
                  "end": 214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 197,
                    "name": "AsyncGenerator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 197,
                    "end": 214,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 198,
                        "end": 199,
                        "typeName": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 201,
                        "end": 202,
                        "typeName": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 202,
                          "name": "R",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 204,
                        "end": 213
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 217,
                  "end": 247,
                  "typeName": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 230,
                    "name": "AsyncIterable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 230,
                    "end": 247,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 231,
                        "end": 232,
                        "typeName": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 234,
                        "end": 235,
                        "typeName": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
                          "name": "R",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 237,
                        "end": 246
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 251,
          "end": 292,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 292,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 261,
              "end": 292,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 270,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 272,
                "end": 292,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 292,
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 289,
                    "name": "PromiseOrValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 289,
                    "end": 292,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 290,
                        "end": 291,
                        "typeName": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
        "start": 324,
        "end": 1410,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 328,
            "end": 378,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 334,
                "end": 377,
                "id": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 342,
                  "name": "iterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 345,
                  "end": 377,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 345,
                    "end": 375,
                    "object": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 353,
                      "name": "iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 374,
                      "object": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 360,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 374,
                        "name": "asyncIterator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 382,
            "end": 789,
            "id": {
              "type": "Identifier",
              "start": 397,
              "end": 406,
              "name": "mapResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": true,
            "params": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 440,
                "name": "result",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 418,
                  "end": 440,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 440,
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 434,
                      "name": "IteratorResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 434,
                      "end": 440,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 435,
                          "end": 436,
                          "typeName": {
                            "type": "Identifier",
                            "start": 435,
                            "end": 436,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 438,
                          "end": 439,
                          "typeName": {
                            "type": "Identifier",
                            "start": 438,
                            "end": 439,
                            "name": "R",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 477,
              "end": 789,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 483,
                  "end": 528,
                  "test": {
                    "type": "MemberExpression",
                    "start": 487,
                    "end": 498,
                    "object": {
                      "type": "Identifier",
                      "start": 487,
                      "end": 493,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 498,
                      "name": "done",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 500,
                    "end": 528,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 508,
                        "end": 522,
                        "argument": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 521,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "TryStatement",
                  "start": 534,
                  "end": 785,
                  "block": {
                    "type": "BlockStatement",
                    "start": 538,
                    "end": 612,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 546,
                        "end": 606,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 553,
                          "end": 605,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 555,
                              "end": 590,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 555,
                                "end": 560,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "AwaitExpression",
                                "start": 562,
                                "end": 590,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 568,
                                  "end": 590,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 568,
                                    "end": 576,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "start": 577,
                                      "end": 589,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 577,
                                        "end": 583,
                                        "name": "result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 584,
                                        "end": 589,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 592,
                              "end": 603,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 592,
                                "end": 596,
                                "name": "done",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 598,
                                "end": 603,
                                "value": false,
                                "raw": "false"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "handler": {
                    "type": "CatchClause",
                    "start": 613,
                    "end": 785,
                    "param": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 625,
                      "name": "error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 627,
                      "end": 785,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 635,
                          "end": 760,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 639,
                            "end": 676,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 639,
                              "end": 661,
                              "operator": "typeof",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 646,
                                "end": 661,
                                "object": {
                                  "type": "Identifier",
                                  "start": 646,
                                  "end": 654,
                                  "name": "iterator",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 655,
                                  "end": 661,
                                  "name": "return",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 666,
                              "end": 676,
                              "value": "function",
                              "raw": "\"function\""
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 678,
                            "end": 760,
                            "body": [
                              {
                                "type": "TryStatement",
                                "start": 688,
                                "end": 752,
                                "block": {
                                  "type": "BlockStatement",
                                  "start": 692,
                                  "end": 738,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 704,
                                      "end": 728,
                                      "expression": {
                                        "type": "AwaitExpression",
                                        "start": 704,
                                        "end": 727,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 710,
                                          "end": 727,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 710,
                                            "end": 725,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 710,
                                              "end": 718,
                                              "name": "iterator",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 719,
                                              "end": 725,
                                              "name": "return",
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
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "handler": {
                                  "type": "CatchClause",
                                  "start": 739,
                                  "end": 752,
                                  "param": {
                                    "type": "Identifier",
                                    "start": 746,
                                    "end": 748,
                                    "name": "_e",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 750,
                                    "end": 752,
                                    "body": []
                                  }
                                },
                                "finalizer": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ThrowStatement",
                          "start": 767,
                          "end": 779,
                          "argument": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 778,
                            "name": "error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  "finalizer": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 476,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 447,
                "end": 476,
                "typeName": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 454,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 454,
                  "end": 476,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 455,
                      "end": 475,
                      "typeName": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 469,
                        "name": "IteratorResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 469,
                        "end": 475,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 470,
                            "end": 471,
                            "typeName": {
                              "type": "Identifier",
                              "start": 470,
                              "end": 471,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 473,
                            "end": 474,
                            "typeName": {
                              "type": "Identifier",
                              "start": 473,
                              "end": 474,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 793,
            "end": 1408,
            "argument": {
              "type": "ObjectExpression",
              "start": 800,
              "end": 1407,
              "properties": [
                {
                  "type": "Property",
                  "start": 806,
                  "end": 873,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 816,
                    "name": "next",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 816,
                    "end": 873,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 819,
                      "end": 873,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 827,
                          "end": 867,
                          "argument": {
                            "type": "CallExpression",
                            "start": 834,
                            "end": 866,
                            "callee": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 843,
                              "name": "mapResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "AwaitExpression",
                                "start": 844,
                                "end": 865,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 850,
                                  "end": 865,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 850,
                                    "end": 863,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 850,
                                      "end": 858,
                                      "name": "iterator",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 859,
                                      "end": 863,
                                      "name": "next",
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
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 879,
                  "end": 1092,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 891,
                    "name": "return",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 891,
                    "end": 1092,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 892,
                        "end": 900,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 897,
                          "end": 900,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 899,
                            "end": 900,
                            "typeName": {
                              "type": "Identifier",
                              "start": 899,
                              "end": 900,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 933,
                      "end": 1092,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 941,
                          "end": 1086,
                          "argument": {
                            "type": "ConditionalExpression",
                            "start": 948,
                            "end": 1085,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 948,
                              "end": 985,
                              "left": {
                                "type": "UnaryExpression",
                                "start": 948,
                                "end": 970,
                                "operator": "typeof",
                                "prefix": true,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 955,
                                  "end": 970,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 955,
                                    "end": 963,
                                    "name": "iterator",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 964,
                                    "end": 970,
                                    "name": "return",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 975,
                                "end": 985,
                                "value": "function",
                                "raw": "\"function\""
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "start": 996,
                              "end": 1035,
                              "callee": {
                                "type": "Identifier",
                                "start": 996,
                                "end": 1005,
                                "name": "mapResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "start": 1006,
                                  "end": 1034,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1012,
                                    "end": 1034,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1012,
                                      "end": 1027,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1012,
                                        "end": 1020,
                                        "name": "iterator",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1021,
                                        "end": 1027,
                                        "name": "return",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1028,
                                        "end": 1033,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "alternate": {
                              "type": "ObjectExpression",
                              "start": 1046,
                              "end": 1085,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1048,
                                  "end": 1071,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1048,
                                    "end": 1053,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "start": 1055,
                                    "end": 1071,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1055,
                                      "end": 1064,
                                      "name": "undefined",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1068,
                                      "end": 1071
                                    }
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 1073,
                                  "end": 1083,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1073,
                                    "end": 1077,
                                    "name": "done",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 1079,
                                    "end": 1083,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 901,
                      "end": 932,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 903,
                        "end": 932,
                        "typeName": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 910,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 910,
                          "end": 932,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 911,
                              "end": 931,
                              "typeName": {
                                "type": "Identifier",
                                "start": 911,
                                "end": 925,
                                "name": "IteratorResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 925,
                                "end": 931,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 926,
                                    "end": 927,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 926,
                                      "end": 927,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 929,
                                    "end": 930,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 929,
                                      "end": 930,
                                      "name": "R",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1098,
                  "end": 1266,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1109,
                    "name": "throw",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1109,
                    "end": 1266,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1110,
                        "end": 1125,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1116,
                          "end": 1125,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1118,
                            "end": 1125
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1127,
                      "end": 1266,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 1135,
                          "end": 1241,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1139,
                            "end": 1175,
                            "left": {
                              "type": "UnaryExpression",
                              "start": 1139,
                              "end": 1160,
                              "operator": "typeof",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 1146,
                                "end": 1160,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1146,
                                  "end": 1154,
                                  "name": "iterator",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1155,
                                  "end": 1160,
                                  "name": "throw",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 1165,
                              "end": 1175,
                              "value": "function",
                              "raw": "\"function\""
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1177,
                            "end": 1241,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 1187,
                                "end": 1233,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 1194,
                                  "end": 1232,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1194,
                                    "end": 1203,
                                    "name": "mapResult",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "AwaitExpression",
                                      "start": 1204,
                                      "end": 1231,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 1210,
                                        "end": 1231,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1210,
                                          "end": 1224,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1210,
                                            "end": 1218,
                                            "name": "iterator",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1219,
                                            "end": 1224,
                                            "name": "throw",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 1225,
                                            "end": 1230,
                                            "name": "error",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ThrowStatement",
                          "start": 1248,
                          "end": 1260,
                          "argument": {
                            "type": "Identifier",
                            "start": 1254,
                            "end": 1259,
                            "name": "error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1272,
                  "end": 1323,
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 1273,
                    "end": 1293,
                    "object": {
                      "type": "Identifier",
                      "start": 1273,
                      "end": 1279,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1293,
                      "name": "asyncIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1294,
                    "end": 1323,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1297,
                      "end": 1323,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1305,
                          "end": 1317,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 1312,
                            "end": 1316
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1329,
                  "end": 1403,
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 1336,
                    "end": 1355,
                    "object": {
                      "type": "Identifier",
                      "start": 1336,
                      "end": 1342,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1343,
                      "end": 1355,
                      "name": "asyncDispose",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1356,
                    "end": 1403,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1359,
                      "end": 1403,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1367,
                          "end": 1397,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 1367,
                            "end": 1396,
                            "argument": {
                              "type": "CallExpression",
                              "start": 1373,
                              "end": 1396,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1373,
                                "end": 1384,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1373,
                                  "end": 1377
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1378,
                                  "end": 1384,
                                  "name": "return",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "TSNonNullExpression",
                                  "start": 1385,
                                  "end": 1395,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 1385,
                                    "end": 1394,
                                    "name": "undefined",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
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
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 148,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 150,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 159,
              "end": 168
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 295,
        "end": 323,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 297,
          "end": 323,
          "typeName": {
            "type": "Identifier",
            "start": 297,
            "end": 311,
            "name": "AsyncGenerator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 311,
            "end": 323,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 312,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 315,
                "end": 316,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSVoidKeyword",
                "start": 318,
                "end": 322
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1412,
      "end": 1436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1418,
          "end": 1435,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1423,
            "name": "items",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1426,
            "end": 1435,
            "elements": [
              {
                "type": "Literal",
                "start": 1427,
                "end": 1428,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1430,
                "end": 1431,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 1433,
                "end": 1434,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1438,
      "end": 1655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1444,
          "end": 1654,
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1452,
            "name": "iterable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1455,
            "end": 1654,
            "properties": [
              {
                "type": "Property",
                "start": 1459,
                "end": 1506,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1460,
                  "end": 1480,
                  "object": {
                    "type": "Identifier",
                    "start": 1460,
                    "end": 1466,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1467,
                    "end": 1480,
                    "name": "asyncIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1481,
                  "end": 1506,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1484,
                    "end": 1506,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1490,
                        "end": 1502,
                        "argument": {
                          "type": "ThisExpression",
                          "start": 1497,
                          "end": 1501
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1510,
                "end": 1651,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1510,
                  "end": 1514,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1514,
                  "end": 1651,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1517,
                    "end": 1651,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1523,
                        "end": 1546,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1529,
                            "end": 1545,
                            "id": {
                              "type": "Identifier",
                              "start": 1529,
                              "end": 1534,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 1537,
                              "end": 1545,
                              "object": {
                                "type": "Identifier",
                                "start": 1537,
                                "end": 1542,
                                "name": "items",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Literal",
                                "start": 1543,
                                "end": 1544,
                                "value": 0,
                                "raw": "0"
                              },
                              "computed": true,
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1551,
                        "end": 1565,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1551,
                          "end": 1564,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1551,
                            "end": 1562,
                            "object": {
                              "type": "Identifier",
                              "start": 1551,
                              "end": 1556,
                              "name": "items",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1557,
                              "end": 1562,
                              "name": "shift",
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
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1570,
                        "end": 1647,
                        "argument": {
                          "type": "CallExpression",
                          "start": 1577,
                          "end": 1646,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1577,
                            "end": 1592,
                            "object": {
                              "type": "Identifier",
                              "start": 1577,
                              "end": 1584,
                              "name": "Promise",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1585,
                              "end": 1592,
                              "name": "resolve",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 1593,
                              "end": 1645,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1601,
                                  "end": 1625,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1601,
                                    "end": 1605,
                                    "name": "done",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "BinaryExpression",
                                    "start": 1607,
                                    "end": 1625,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1607,
                                      "end": 1619,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1607,
                                        "end": 1612,
                                        "name": "items",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1613,
                                        "end": 1619,
                                        "name": "length",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Literal",
                                      "start": 1624,
                                      "end": 1625,
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 1633,
                                  "end": 1638,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1633,
                                    "end": 1638,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1633,
                                    "end": 1638,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1657,
      "end": 1714,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1663,
          "end": 1713,
          "id": {
            "type": "Identifier",
            "start": 1663,
            "end": 1670,
            "name": "doubles",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1673,
            "end": 1713,
            "callee": {
              "type": "Identifier",
              "start": 1673,
              "end": 1689,
              "name": "mapAsyncIterable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1690,
                "end": 1698,
                "name": "iterable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1700,
                "end": 1712,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1701,
                    "end": 1702,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 1707,
                  "end": 1712,
                  "left": {
                    "type": "Identifier",
                    "start": 1707,
                    "end": 1708,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1711,
                    "end": 1712,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
