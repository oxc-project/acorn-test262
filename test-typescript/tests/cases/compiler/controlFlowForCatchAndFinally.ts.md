controlFlowForCatchAndFinally.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1132,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 65,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Page",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 12,
        "end": 64,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 13,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "close",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 35,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 29,
                  "end": 35,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 30,
                      "end": 34
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 29,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 63,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 44,
              "decorators": [],
              "name": "content",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 63,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 55,
                  "end": 63,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 55,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 106,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "decorators": [],
        "name": "Browser",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 81,
        "end": 105,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 82,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "decorators": [],
              "name": "close",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 104,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 98,
                  "end": 104,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 99,
                      "end": 103
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 98,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 107,
      "end": 150,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 129,
        "decorators": [],
        "name": "test1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 149,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 133,
          "end": 149,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 140,
            "end": 149,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 141,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 148,
                  "decorators": [],
                  "name": "Browser",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 133,
            "end": 140,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 203,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 173,
        "decorators": [],
        "name": "test2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 174,
          "end": 186,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 177,
            "end": 186,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 179,
              "end": 186,
              "typeName": {
                "type": "Identifier",
                "start": 179,
                "end": 186,
                "decorators": [],
                "name": "Browser",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 187,
        "end": 202,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 189,
          "end": 202,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 196,
            "end": 202,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 197,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 201,
                  "decorators": [],
                  "name": "Page",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 189,
            "end": 196,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 623,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 243,
        "end": 623,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 249,
            "end": 294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 253,
                "end": 293,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 281,
                  "decorators": [],
                  "name": "browser",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 260,
                    "end": 281,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 262,
                      "end": 281,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 262,
                          "end": 269,
                          "typeName": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 269,
                            "decorators": [],
                            "name": "Browser",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 272,
                          "end": 281
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 293,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 299,
            "end": 338,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 303,
                "end": 337,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 325,
                  "decorators": [],
                  "name": "page",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 307,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 309,
                      "end": 325,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 309,
                          "end": 313,
                          "typeName": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 313,
                            "decorators": [],
                            "name": "Page",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 316,
                          "end": 325
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 337,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 343,
            "end": 621,
            "block": {
              "type": "BlockStatement",
              "start": 347,
              "end": 462,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 381,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 357,
                    "end": 380,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 364,
                      "decorators": [],
                      "name": "browser",
                      "optional": false
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 367,
                      "end": 380,
                      "argument": {
                        "type": "CallExpression",
                        "start": 373,
                        "end": 380,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 378,
                          "decorators": [],
                          "name": "test1",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 390,
                  "end": 418,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 390,
                    "end": 417,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 394,
                      "decorators": [],
                      "name": "page",
                      "optional": false
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 397,
                      "end": 417,
                      "argument": {
                        "type": "CallExpression",
                        "start": 403,
                        "end": 417,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 409,
                            "end": 416,
                            "decorators": [],
                            "name": "browser",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 408,
                          "decorators": [],
                          "name": "test2",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 427,
                  "end": 455,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 434,
                    "end": 454,
                    "argument": {
                      "type": "CallExpression",
                      "start": 440,
                      "end": 454,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 440,
                        "end": 452,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 444,
                          "decorators": [],
                          "name": "page",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 452,
                          "decorators": [],
                          "name": "content",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                },
                {
                  "type": "EmptyStatement",
                  "start": 455,
                  "end": 456
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 471,
              "end": 621,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 481,
                  "end": 540,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 491,
                    "end": 540,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 505,
                        "end": 524,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 505,
                          "end": 523,
                          "argument": {
                            "type": "CallExpression",
                            "start": 511,
                            "end": 523,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 511,
                              "end": 521,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 511,
                                "end": 515,
                                "decorators": [],
                                "name": "page",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 516,
                                "end": 521,
                                "decorators": [],
                                "name": "close",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 489,
                    "decorators": [],
                    "name": "page",
                    "optional": false
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 550,
                  "end": 615,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 563,
                    "end": 615,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 577,
                        "end": 599,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 577,
                          "end": 598,
                          "argument": {
                            "type": "CallExpression",
                            "start": 583,
                            "end": 598,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 583,
                              "end": 596,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 583,
                                "end": 590,
                                "decorators": [],
                                "name": "browser",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 591,
                                "end": 596,
                                "decorators": [],
                                "name": "close",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 561,
                    "decorators": [],
                    "name": "browser",
                    "optional": false
                  }
                }
              ]
            },
            "handler": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 223,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 225,
        "end": 242,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 227,
          "end": 242,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 234,
            "end": 242,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 227,
            "end": 234,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 625,
      "end": 664,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 647,
        "end": 664,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 649,
            "end": 662,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 649,
              "end": 654,
              "decorators": [],
              "name": "abort",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 654,
              "end": 662,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 656,
                "end": 662,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 658,
                  "end": 662
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 639,
        "end": 646,
        "decorators": [],
        "name": "Aborter",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 664,
      "end": 665
    },
    {
      "type": "ClassDeclaration",
      "start": 666,
      "end": 1132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 676,
        "end": 1132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 682,
            "end": 731,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 682,
              "end": 697,
              "decorators": [],
              "name": "abortController",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 697,
              "end": 718,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 699,
                "end": 718,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 699,
                    "end": 706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 699,
                      "end": 706,
                      "decorators": [],
                      "name": "Aborter",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 709,
                    "end": 718
                  }
                ]
              }
            },
            "value": {
              "type": "Identifier",
              "start": 721,
              "end": 730,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 737,
            "end": 1130,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 752,
              "decorators": [],
              "name": "operation",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 752,
              "end": 1130,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 755,
                "end": 1130,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 765,
                    "end": 904,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 805,
                      "end": 904,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 819,
                          "end": 848,
                          "expression": {
                            "type": "CallExpression",
                            "start": 819,
                            "end": 847,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 819,
                              "end": 845,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 819,
                                "end": 839,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 819,
                                  "end": 823
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 824,
                                  "end": 839,
                                  "decorators": [],
                                  "name": "abortController",
                                  "optional": false
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 840,
                                "end": 845,
                                "decorators": [],
                                "name": "abort",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 861,
                          "end": 894,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 861,
                            "end": 893,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 861,
                              "end": 881,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 861,
                                "end": 865
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 866,
                                "end": 881,
                                "decorators": [],
                                "name": "abortController",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 884,
                              "end": 893,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 769,
                      "end": 803,
                      "operator": "!==",
                      "left": {
                        "type": "MemberExpression",
                        "start": 769,
                        "end": 789,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 769,
                          "end": 773
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 774,
                          "end": 789,
                          "decorators": [],
                          "name": "abortController",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 794,
                        "end": 803,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TryStatement",
                    "start": 913,
                    "end": 1124,
                    "block": {
                      "type": "BlockStatement",
                      "start": 917,
                      "end": 978,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 931,
                          "end": 968,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 931,
                            "end": 967,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 931,
                              "end": 951,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 931,
                                "end": 935
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 936,
                                "end": 951,
                                "decorators": [],
                                "name": "abortController",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "NewExpression",
                              "start": 954,
                              "end": 967,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 958,
                                "end": 965,
                                "decorators": [],
                                "name": "Aborter",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    },
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
                      "start": 979,
                      "end": 1124,
                      "body": {
                        "type": "BlockStatement",
                        "start": 993,
                        "end": 1124,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 1007,
                            "end": 1114,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1047,
                              "end": 1114,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1065,
                                  "end": 1094,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1065,
                                    "end": 1093,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1065,
                                      "end": 1091,
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 1065,
                                        "end": 1085,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1065,
                                          "end": 1069
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1070,
                                          "end": 1085,
                                          "decorators": [],
                                          "name": "abortController",
                                          "optional": false
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1086,
                                        "end": 1091,
                                        "decorators": [],
                                        "name": "abort",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1011,
                              "end": 1045,
                              "operator": "!==",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1011,
                                "end": 1031,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1011,
                                  "end": 1015
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1016,
                                  "end": 1031,
                                  "decorators": [],
                                  "name": "abortController",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1036,
                                "end": 1045,
                                "decorators": [],
                                "name": "undefined",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "param": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 991,
                        "decorators": [],
                        "name": "error",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 672,
        "end": 675,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
