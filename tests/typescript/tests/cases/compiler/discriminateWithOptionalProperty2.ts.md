__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 81,
  "end": 1714,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 121,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 100,
        "decorators": [],
        "name": "PromiseOrValue",
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 113,
              "end": 116,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 115,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 119,
            "end": 120,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 1410,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 342,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 345,
                  "end": 377,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 345,
                    "end": 375,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 353,
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 374,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 360,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 374,
                        "decorators": [],
                        "name": "asyncIterator",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "FunctionDeclaration",
            "start": 382,
            "end": 789,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 477,
              "end": 789,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 483,
                  "end": 528,
                  "alternate": null,
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
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "MemberExpression",
                    "start": 487,
                    "end": 498,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 487,
                      "end": 493,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 498,
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 555,
                                "end": 560,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "AwaitExpression",
                                "start": 562,
                                "end": 590,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 568,
                                  "end": 590,
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "start": 577,
                                      "end": 589,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 577,
                                        "end": 583,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 584,
                                        "end": 589,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 568,
                                    "end": 576,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "start": 592,
                              "end": 603,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 592,
                                "end": 596,
                                "decorators": [],
                                "name": "done",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 598,
                                "end": 603,
                                "raw": "false",
                                "value": false
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "finalizer": null,
                  "handler": {
                    "type": "CatchClause",
                    "start": 613,
                    "end": 785,
                    "body": {
                      "type": "BlockStatement",
                      "start": 627,
                      "end": 785,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 635,
                          "end": 760,
                          "alternate": null,
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
                                      "directive": null,
                                      "expression": {
                                        "type": "AwaitExpression",
                                        "start": 704,
                                        "end": 727,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 710,
                                          "end": 727,
                                          "arguments": [],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 710,
                                            "end": 725,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 710,
                                              "end": 718,
                                              "decorators": [],
                                              "name": "iterator",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 719,
                                              "end": 725,
                                              "decorators": [],
                                              "name": "return",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    }
                                  ]
                                },
                                "finalizer": null,
                                "handler": {
                                  "type": "CatchClause",
                                  "start": 739,
                                  "end": 752,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 750,
                                    "end": 752,
                                    "body": []
                                  },
                                  "param": {
                                    "type": "Identifier",
                                    "start": 746,
                                    "end": 748,
                                    "decorators": [],
                                    "name": "_e",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 639,
                            "end": 676,
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "start": 639,
                              "end": 661,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 646,
                                "end": 661,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 646,
                                  "end": 654,
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 655,
                                  "end": 661,
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "typeof",
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "start": 666,
                              "end": 676,
                              "raw": "\"function\"",
                              "value": "function"
                            }
                          }
                        },
                        {
                          "type": "ThrowStatement",
                          "start": 767,
                          "end": 779,
                          "argument": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 778,
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "param": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 625,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
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
              "start": 397,
              "end": 406,
              "decorators": [],
              "name": "mapResult",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 440,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 418,
                  "end": 440,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 440,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 434,
                      "end": 440,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 435,
                          "end": 436,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 435,
                            "end": 436,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 438,
                          "end": 439,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 438,
                            "end": 439,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 434,
                      "decorators": [],
                      "name": "IteratorResult",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 476,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 447,
                "end": 476,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 454,
                  "end": 476,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 455,
                      "end": 475,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 469,
                        "end": 475,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 470,
                            "end": 471,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 470,
                              "end": 471,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 473,
                            "end": 474,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 473,
                              "end": 474,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 469,
                        "decorators": [],
                        "name": "IteratorResult",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 454,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 816,
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 816,
                    "end": 873,
                    "async": true,
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
                            "arguments": [
                              {
                                "type": "AwaitExpression",
                                "start": 844,
                                "end": 865,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 850,
                                  "end": 865,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 850,
                                    "end": 863,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 850,
                                      "end": 858,
                                      "decorators": [],
                                      "name": "iterator",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 859,
                                      "end": 863,
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 843,
                              "decorators": [],
                              "name": "mapResult",
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
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 879,
                  "end": 1092,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 891,
                    "decorators": [],
                    "name": "return",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 891,
                    "end": 1092,
                    "async": true,
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
                            "alternate": {
                              "type": "ObjectExpression",
                              "start": 1046,
                              "end": 1085,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1048,
                                  "end": 1071,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1048,
                                    "end": 1053,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "TSAsExpression",
                                    "start": 1055,
                                    "end": 1071,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1055,
                                      "end": 1064,
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1068,
                                      "end": 1071
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 1073,
                                  "end": 1083,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1073,
                                    "end": 1077,
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 1079,
                                    "end": 1083,
                                    "raw": "true",
                                    "value": true
                                  }
                                }
                              ]
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "start": 996,
                              "end": 1035,
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "start": 1006,
                                  "end": 1034,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1012,
                                    "end": 1034,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1028,
                                        "end": 1033,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1012,
                                      "end": 1027,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1012,
                                        "end": 1020,
                                        "decorators": [],
                                        "name": "iterator",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1021,
                                        "end": 1027,
                                        "decorators": [],
                                        "name": "return",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 996,
                                "end": 1005,
                                "decorators": [],
                                "name": "mapResult",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 948,
                              "end": 985,
                              "operator": "===",
                              "left": {
                                "type": "UnaryExpression",
                                "start": 948,
                                "end": 970,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 955,
                                  "end": 970,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 955,
                                    "end": 963,
                                    "decorators": [],
                                    "name": "iterator",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 964,
                                    "end": 970,
                                    "decorators": [],
                                    "name": "return",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "operator": "typeof",
                                "prefix": true
                              },
                              "right": {
                                "type": "Literal",
                                "start": 975,
                                "end": 985,
                                "raw": "\"function\"",
                                "value": "function"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 892,
                        "end": 900,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 897,
                          "end": 900,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 899,
                            "end": 900,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 899,
                              "end": 900,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 901,
                      "end": 932,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 903,
                        "end": 932,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 910,
                          "end": 932,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 911,
                              "end": 931,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 925,
                                "end": 931,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 926,
                                    "end": 927,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 926,
                                      "end": 927,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 929,
                                    "end": 930,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 929,
                                      "end": 930,
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 911,
                                "end": 925,
                                "decorators": [],
                                "name": "IteratorResult",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 910,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1098,
                  "end": 1266,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1104,
                    "end": 1109,
                    "decorators": [],
                    "name": "throw",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1109,
                    "end": 1266,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1127,
                      "end": 1266,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 1135,
                          "end": 1241,
                          "alternate": null,
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
                                  "arguments": [
                                    {
                                      "type": "AwaitExpression",
                                      "start": 1204,
                                      "end": 1231,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 1210,
                                        "end": 1231,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 1225,
                                            "end": 1230,
                                            "decorators": [],
                                            "name": "error",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1210,
                                          "end": 1224,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1210,
                                            "end": 1218,
                                            "decorators": [],
                                            "name": "iterator",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1219,
                                            "end": 1224,
                                            "decorators": [],
                                            "name": "throw",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1194,
                                    "end": 1203,
                                    "decorators": [],
                                    "name": "mapResult",
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
                            "start": 1139,
                            "end": 1175,
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "start": 1139,
                              "end": 1160,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 1146,
                                "end": 1160,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1146,
                                  "end": 1154,
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1155,
                                  "end": 1160,
                                  "decorators": [],
                                  "name": "throw",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "typeof",
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1165,
                              "end": 1175,
                              "raw": "\"function\"",
                              "value": "function"
                            }
                          }
                        },
                        {
                          "type": "ThrowStatement",
                          "start": 1248,
                          "end": 1260,
                          "argument": {
                            "type": "Identifier",
                            "start": 1254,
                            "end": 1259,
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1110,
                        "end": 1125,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1116,
                          "end": 1125,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1118,
                            "end": 1125
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1272,
                  "end": 1323,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 1273,
                    "end": 1293,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1273,
                      "end": 1279,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1293,
                      "decorators": [],
                      "name": "asyncIterator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1294,
                    "end": 1323,
                    "async": false,
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
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1329,
                  "end": 1403,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 1336,
                    "end": 1355,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1336,
                      "end": 1342,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1343,
                      "end": 1355,
                      "decorators": [],
                      "name": "asyncDispose",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1356,
                    "end": 1403,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1359,
                      "end": 1403,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1367,
                          "end": 1397,
                          "directive": null,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 1367,
                            "end": 1396,
                            "argument": {
                              "type": "CallExpression",
                              "start": 1373,
                              "end": 1396,
                              "arguments": [
                                {
                                  "type": "TSNonNullExpression",
                                  "start": 1385,
                                  "end": 1395,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 1385,
                                    "end": 1394,
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1373,
                                "end": 1384,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1373,
                                  "end": 1377
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1378,
                                  "end": 1384,
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
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
        "start": 132,
        "end": 148,
        "decorators": [],
        "name": "mapAsyncIterable",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 247,
          "decorators": [],
          "name": "iterable",
          "optional": false,
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 197,
                    "end": 214,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 198,
                        "end": 199,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 201,
                        "end": 202,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 202,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 204,
                        "end": 213
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 197,
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 217,
                  "end": 247,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 230,
                    "end": 247,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 231,
                        "end": 232,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 234,
                        "end": 235,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 237,
                        "end": 246
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 230,
                    "decorators": [],
                    "name": "AsyncIterable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 251,
          "end": 292,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 292,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 261,
              "end": 292,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 270,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 270,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 289,
                    "end": 292,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 290,
                        "end": 291,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 289,
                    "decorators": [],
                    "name": "PromiseOrValue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 295,
        "end": 323,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 297,
          "end": 323,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 311,
            "end": 323,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 312,
                "end": 313,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 315,
                "end": 316,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSVoidKeyword",
                "start": 318,
                "end": 322
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 297,
            "end": 311,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 148,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 150,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 168,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 159,
              "end": 168
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1423,
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1430,
                "end": 1431,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 1433,
                "end": 1434,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1452,
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1460,
                  "end": 1480,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1460,
                    "end": 1466,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1467,
                    "end": 1480,
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1481,
                  "end": 1506,
                  "async": false,
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
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 1510,
                "end": 1651,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1510,
                  "end": 1514,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1514,
                  "end": 1651,
                  "async": false,
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
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1529,
                              "end": 1534,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "MemberExpression",
                              "start": 1537,
                              "end": 1545,
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "start": 1537,
                                "end": 1542,
                                "decorators": [],
                                "name": "items",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 1543,
                                "end": 1544,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1551,
                        "end": 1565,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1551,
                          "end": 1564,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1551,
                            "end": 1562,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1551,
                              "end": 1556,
                              "decorators": [],
                              "name": "items",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1557,
                              "end": 1562,
                              "decorators": [],
                              "name": "shift",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1570,
                        "end": 1647,
                        "argument": {
                          "type": "CallExpression",
                          "start": 1577,
                          "end": 1646,
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
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1601,
                                    "end": 1605,
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "BinaryExpression",
                                    "start": 1607,
                                    "end": 1625,
                                    "operator": "===",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 1607,
                                      "end": 1619,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1607,
                                        "end": 1612,
                                        "decorators": [],
                                        "name": "items",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1613,
                                        "end": 1619,
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 1624,
                                      "end": 1625,
                                      "raw": "0",
                                      "value": 0
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 1633,
                                  "end": 1638,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1633,
                                    "end": 1638,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1633,
                                    "end": 1638,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1577,
                            "end": 1592,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1577,
                              "end": 1584,
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1585,
                              "end": 1592,
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1663,
            "end": 1670,
            "decorators": [],
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1673,
            "end": 1713,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1690,
                "end": 1698,
                "decorators": [],
                "name": "iterable",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1700,
                "end": 1712,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1707,
                  "end": 1712,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1707,
                    "end": 1708,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1711,
                    "end": 1712,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1701,
                    "end": 1702,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1673,
              "end": 1689,
              "decorators": [],
              "name": "mapAsyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
