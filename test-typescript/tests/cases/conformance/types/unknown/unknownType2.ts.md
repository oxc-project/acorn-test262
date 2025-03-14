__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5433,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "isUnknown",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 20,
        "end": 52,
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 20,
          "end": 27
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 37,
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 47,
          "end": 52,
          "literal": {
            "type": "Literal",
            "start": 47,
            "end": 52,
            "raw": "false",
            "value": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 40,
          "end": 44,
          "literal": {
            "type": "Literal",
            "start": 40,
            "end": 44,
            "raw": "true",
            "value": true
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 86,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 65,
        "decorators": [],
        "name": "isTrue",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 84,
        "end": 85,
        "typeName": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 80,
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "start": 76,
              "end": 80,
              "literal": {
                "type": "Literal",
                "start": 76,
                "end": 80,
                "raw": "true",
                "value": true
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 88,
      "end": 129,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 105,
        "decorators": [],
        "name": "SomeResponse",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 108,
        "end": 128,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 108,
            "end": 113,
            "literal": {
              "type": "Literal",
              "start": 108,
              "end": 113,
              "raw": "'yes'",
              "value": "yes"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 116,
            "end": 120,
            "literal": {
              "type": "Literal",
              "start": 116,
              "end": 120,
              "raw": "'no'",
              "value": "no"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 123,
            "end": 128,
            "literal": {
              "type": "Literal",
              "start": 123,
              "end": 128,
              "raw": "'idk'",
              "value": "idk"
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 172,
            "decorators": [],
            "name": "validate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 172,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 144,
                "end": 172,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 145,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 148,
                        "end": 155
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 172,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 172,
                      "decorators": [],
                      "name": "SomeResponse",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 175,
            "end": 219,
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "start": 180,
              "end": 219,
              "alternate": {
                "type": "Literal",
                "start": 214,
                "end": 219,
                "raw": "'idk'",
                "value": "idk"
              },
              "consequent": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "LogicalExpression",
                "start": 181,
                "end": 206,
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "start": 181,
                  "end": 192,
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 187,
                    "end": 192,
                    "raw": "'yes'",
                    "value": "yes"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 196,
                  "end": 206,
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 202,
                    "end": 206,
                    "raw": "'no'",
                    "value": "no"
                  }
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 250,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 250,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 243,
                "end": 250
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 253,
            "end": 262,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 298,
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 285,
                "end": 298,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 292,
                  "end": 298
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 335,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 335,
            "decorators": [],
            "name": "symbNonUnique",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 335,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 329,
                "end": 335
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 338,
      "end": 384,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 351,
        "end": 384,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 357,
            "end": 382,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 363,
                "end": 381,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 381,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 378,
                      "end": 380,
                      "raw": "10",
                      "value": 10
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 367,
                    "end": 377,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "decorators": [],
                      "name": "u",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 377,
                      "decorators": [],
                      "name": "toString",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 342,
        "end": 349,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 342,
          "end": 343,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 348,
          "end": 349,
          "raw": "5",
          "value": 5
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 386,
      "end": 453,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 417,
        "end": 453,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 429,
                "end": 450,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 446,
                  "decorators": [],
                  "name": "someBool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 446,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 439,
                      "end": 446
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 390,
        "end": 415,
        "operator": "||",
        "left": {
          "type": "BinaryExpression",
          "start": 390,
          "end": 400,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 396,
            "end": 400,
            "raw": "true",
            "value": true
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 404,
          "end": 415,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 410,
            "end": 415,
            "raw": "false",
            "value": false
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 455,
      "end": 511,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 476,
        "end": 511,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 482,
            "end": 509,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 488,
                "end": 508,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 504,
                  "decorators": [],
                  "name": "undef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 495,
                      "end": 504
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 508,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 459,
        "end": 474,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 465,
          "end": 474,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 513,
      "end": 562,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 529,
        "end": 562,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 535,
            "end": 560,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 541,
                "end": 559,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 555,
                  "decorators": [],
                  "name": "someNull",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 549,
                    "end": 555,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 551,
                      "end": 555
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 559,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 517,
        "end": 527,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 517,
          "end": 518,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 523,
          "end": 527,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 564,
      "end": 623,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 580,
        "end": 623,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 586,
            "end": 621,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 592,
                "end": 620,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 616,
                  "decorators": [],
                  "name": "symbolAlias",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 603,
                    "end": 616,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 605,
                      "end": 616,
                      "exprName": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 616,
                        "decorators": [],
                        "name": "symb",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 568,
        "end": 578,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 568,
          "end": 569,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 574,
          "end": 578,
          "decorators": [],
          "name": "symb",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 625,
      "end": 686,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 642,
        "end": 686,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 648,
            "end": 684,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 657,
              "end": 684,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 663,
                "end": 684,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 664,
                    "end": 683,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 673,
                      "end": 683,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 674,
                          "end": 682,
                          "exprName": {
                            "type": "Identifier",
                            "start": 681,
                            "end": 682,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 673,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 657,
                "end": 663,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 629,
        "end": 640,
        "argument": {
          "type": "BinaryExpression",
          "start": 631,
          "end": 639,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 631,
            "end": 632,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 637,
            "end": 639,
            "raw": "42",
            "value": 42
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 688,
      "end": 746,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 702,
        "end": 746,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 708,
            "end": 744,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 713,
              "end": 714,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 717,
              "end": 744,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 723,
                "end": 744,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 724,
                    "end": 743,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 733,
                      "end": 743,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 734,
                          "end": 742,
                          "exprName": {
                            "type": "Identifier",
                            "start": 741,
                            "end": 742,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 724,
                      "end": 733,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 717,
                "end": 723,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 692,
        "end": 700,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 692,
          "end": 693,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 698,
          "end": 700,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 748,
      "end": 805,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 761,
        "end": 805,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 767,
            "end": 803,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 772,
              "end": 773,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 776,
              "end": 803,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 782,
                "end": 803,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 783,
                    "end": 802,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 792,
                      "end": 802,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 793,
                          "end": 801,
                          "exprName": {
                            "type": "Identifier",
                            "start": 800,
                            "end": 801,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 783,
                      "end": 792,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 776,
                "end": 782,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 752,
        "end": 759,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 752,
          "end": 753,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 757,
          "end": 759,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 807,
      "end": 866,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 822,
        "end": 866,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 828,
            "end": 864,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 833,
              "end": 834,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 837,
              "end": 864,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 843,
                "end": 864,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 844,
                    "end": 863,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 853,
                      "end": 863,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 854,
                          "end": 862,
                          "exprName": {
                            "type": "Identifier",
                            "start": 861,
                            "end": 862,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 844,
                      "end": 853,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 837,
                "end": 843,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 811,
        "end": 820,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 811,
          "end": 812,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 816,
          "end": 820,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 868,
      "end": 929,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 885,
        "end": 929,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 891,
            "end": 927,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 900,
              "end": 927,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 906,
                "end": 927,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 907,
                    "end": 926,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 916,
                      "end": 926,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 917,
                          "end": 925,
                          "exprName": {
                            "type": "Identifier",
                            "start": 924,
                            "end": 925,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 907,
                      "end": 916,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 900,
                "end": 906,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 872,
        "end": 883,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 872,
          "end": 873,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 877,
          "end": 883,
          "decorators": [],
          "name": "Object",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 945,
          "end": 960,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 945,
            "end": 960,
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 952,
              "end": 960,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 954,
                "end": 960
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 962,
      "end": 994,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 993,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 993,
            "decorators": [],
            "name": "aBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 984,
              "end": 993,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 986,
                "end": 993
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 995,
      "end": 1025,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1009,
          "end": 1024,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1009,
            "end": 1024,
            "decorators": [],
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1016,
              "end": 1024,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1018,
                "end": 1024
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1026,
      "end": 1057,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1040,
          "end": 1056,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1040,
            "end": 1056,
            "decorators": [],
            "name": "anObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1048,
              "end": 1056,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 1050,
                "end": 1056
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1058,
      "end": 1103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1072,
          "end": 1102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1072,
            "end": 1102,
            "decorators": [],
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1087,
              "end": 1102,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1089,
                "end": 1102,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1091,
                    "end": 1100,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1091,
                      "end": 1092,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1092,
                      "end": 1100,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1094,
                        "end": 1100
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1104,
      "end": 1156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1118,
          "end": 1155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1118,
            "end": 1155,
            "decorators": [],
            "name": "aUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1124,
              "end": 1155,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1126,
                "end": 1155,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1126,
                    "end": 1139,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1128,
                        "end": 1137,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1128,
                          "end": 1129,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1129,
                          "end": 1137,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1131,
                            "end": 1137
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1142,
                    "end": 1155,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1144,
                        "end": 1153,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1144,
                          "end": 1145,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1145,
                          "end": 1153,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1147,
                            "end": 1153
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1157,
      "end": 1217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1171,
          "end": 1216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1171,
            "end": 1216,
            "decorators": [],
            "name": "anIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1185,
              "end": 1216,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1187,
                "end": 1216,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1187,
                    "end": 1200,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1189,
                        "end": 1198,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1189,
                          "end": 1190,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1190,
                          "end": 1198,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1192,
                            "end": 1198
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1203,
                    "end": 1216,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1205,
                        "end": 1214,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1205,
                          "end": 1206,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1206,
                          "end": 1214,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1208,
                            "end": 1214
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1218,
      "end": 1256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1232,
          "end": 1255,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1232,
            "end": 1255,
            "decorators": [],
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1241,
              "end": 1255,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1243,
                "end": 1255,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1246,
                  "end": 1255,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1249,
                    "end": 1255
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 1258,
      "end": 1309,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1277,
        "end": 1309,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1283,
            "end": 1307,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1287,
                "end": 1306,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1287,
                  "end": 1302,
                  "decorators": [],
                  "name": "uString",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1294,
                    "end": 1302,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1296,
                      "end": 1302
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1306,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1262,
        "end": 1275,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1262,
          "end": 1263,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1268,
          "end": 1275,
          "decorators": [],
          "name": "aString",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1311,
      "end": 1364,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1331,
        "end": 1364,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1337,
            "end": 1362,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1341,
                "end": 1361,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1357,
                  "decorators": [],
                  "name": "uString",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1348,
                    "end": 1357,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1350,
                      "end": 1357
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1361,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1315,
        "end": 1329,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1315,
          "end": 1316,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1321,
          "end": 1329,
          "decorators": [],
          "name": "aBoolean",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1366,
      "end": 1417,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1385,
        "end": 1417,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1391,
            "end": 1415,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1395,
                "end": 1414,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1395,
                  "end": 1410,
                  "decorators": [],
                  "name": "uNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1402,
                    "end": 1410,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1404,
                      "end": 1410
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1414,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1370,
        "end": 1383,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1370,
          "end": 1371,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1376,
          "end": 1383,
          "decorators": [],
          "name": "aNumber",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1419,
      "end": 1471,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1439,
        "end": 1471,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1445,
            "end": 1469,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1449,
                "end": 1468,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1464,
                  "decorators": [],
                  "name": "uObject",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1456,
                    "end": 1464,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1458,
                      "end": 1464
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1467,
                  "end": 1468,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1423,
        "end": 1437,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1423,
          "end": 1424,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1429,
          "end": 1437,
          "decorators": [],
          "name": "anObject",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1473,
      "end": 1539,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1500,
        "end": 1539,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1506,
            "end": 1537,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1510,
                "end": 1536,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1510,
                  "end": 1532,
                  "decorators": [],
                  "name": "uObjectLiteral",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1524,
                    "end": 1532,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1526,
                      "end": 1532
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1535,
                  "end": 1536,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1477,
        "end": 1498,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1477,
          "end": 1478,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1483,
          "end": 1498,
          "decorators": [],
          "name": "anObjectLiteral",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1541,
      "end": 1620,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1559,
        "end": 1620,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1565,
            "end": 1618,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1570,
              "end": 1588,
              "decorators": [],
              "name": "unionDoesNotNarrow",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1591,
              "end": 1618,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1597,
                "end": 1618,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1598,
                    "end": 1617,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1607,
                      "end": 1617,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 1608,
                          "end": 1616,
                          "exprName": {
                            "type": "Identifier",
                            "start": 1615,
                            "end": 1616,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1598,
                      "end": 1607,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1591,
                "end": 1597,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1545,
        "end": 1557,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1545,
          "end": 1546,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1551,
          "end": 1557,
          "decorators": [],
          "name": "aUnion",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1622,
      "end": 1716,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1648,
        "end": 1716,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1654,
            "end": 1714,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1659,
              "end": 1684,
              "decorators": [],
              "name": "intersectionDoesNotNarrow",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1687,
              "end": 1714,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1693,
                "end": 1714,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1694,
                    "end": 1713,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1703,
                      "end": 1713,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 1704,
                          "end": 1712,
                          "exprName": {
                            "type": "Identifier",
                            "start": 1711,
                            "end": 1712,
                            "decorators": [],
                            "name": "u",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1694,
                      "end": 1703,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1687,
                "end": 1693,
                "decorators": [],
                "name": "isTrue",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1626,
        "end": 1646,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1626,
          "end": 1627,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1632,
          "end": 1646,
          "decorators": [],
          "name": "anIntersection",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1718,
      "end": 1773,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1739,
        "end": 1773,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1745,
            "end": 1771,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1749,
                "end": 1770,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1749,
                  "end": 1766,
                  "decorators": [],
                  "name": "uFunction",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1758,
                    "end": 1766,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1760,
                      "end": 1766
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1769,
                  "end": 1770,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1722,
        "end": 1737,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1722,
          "end": 1723,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1728,
          "end": 1737,
          "decorators": [],
          "name": "aFunction",
          "optional": false
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1775,
      "end": 1814,
      "body": {
        "type": "TSEnumBody",
        "start": 1791,
        "end": 1814,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1797,
            "end": 1798,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1797,
              "end": 1798,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1804,
            "end": 1805,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1804,
              "end": 1805,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1811,
            "end": 1812,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1811,
              "end": 1812,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1780,
        "end": 1790,
        "decorators": [],
        "name": "NumberEnum",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1816,
      "end": 1873,
      "body": {
        "type": "TSEnumBody",
        "start": 1832,
        "end": 1873,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1838,
            "end": 1845,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1838,
              "end": 1839,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 1842,
              "end": 1845,
              "raw": "\"A\"",
              "value": "A"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1851,
            "end": 1858,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1851,
              "end": 1852,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 1855,
              "end": 1858,
              "raw": "\"B\"",
              "value": "B"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1864,
            "end": 1871,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1864,
              "end": 1865,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 1868,
              "end": 1871,
              "raw": "\"C\"",
              "value": "C"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1821,
        "end": 1831,
        "decorators": [],
        "name": "StringEnum",
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 1875,
      "end": 1949,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1917,
        "end": 1949,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1923,
            "end": 1947,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1927,
                "end": 1946,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1927,
                  "end": 1942,
                  "decorators": [],
                  "name": "enumObj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1934,
                    "end": 1942,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1936,
                      "end": 1942
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1945,
                  "end": 1946,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 1879,
        "end": 1915,
        "operator": "||",
        "left": {
          "type": "BinaryExpression",
          "start": 1879,
          "end": 1895,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 1879,
            "end": 1880,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1885,
            "end": 1895,
            "decorators": [],
            "name": "NumberEnum",
            "optional": false
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 1899,
          "end": 1915,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 1899,
            "end": 1900,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1905,
            "end": 1915,
            "decorators": [],
            "name": "StringEnum",
            "optional": false
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1951,
      "end": 2006,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1975,
        "end": 2006,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1981,
            "end": 2004,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1985,
                "end": 2004,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1985,
                  "end": 2000,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1986,
                    "end": 2000,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1988,
                      "end": 2000,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1988,
                        "end": 2000,
                        "left": {
                          "type": "Identifier",
                          "start": 1988,
                          "end": 1998,
                          "decorators": [],
                          "name": "NumberEnum",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1999,
                          "end": 2000,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2003,
                  "end": 2004,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1955,
        "end": 1973,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 1955,
          "end": 1956,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1961,
          "end": 1973,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1961,
            "end": 1971,
            "decorators": [],
            "name": "NumberEnum",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1972,
            "end": 1973,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 2008,
      "end": 2063,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2032,
        "end": 2063,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2038,
            "end": 2061,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2042,
                "end": 2061,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2042,
                  "end": 2057,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2043,
                    "end": 2057,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2045,
                      "end": 2057,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 2045,
                        "end": 2057,
                        "left": {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2055,
                          "decorators": [],
                          "name": "StringEnum",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2056,
                          "end": 2057,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2060,
                  "end": 2061,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2012,
        "end": 2030,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 2012,
          "end": 2013,
          "decorators": [],
          "name": "u",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 2018,
          "end": 2030,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2018,
            "end": 2028,
            "decorators": [],
            "name": "StringEnum",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2029,
            "end": 2030,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2065,
      "end": 2425,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2101,
        "end": 2425,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2107,
            "end": 2380,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2128,
                "end": 2204,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2159,
                    "end": 2185,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2165,
                        "end": 2184,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2165,
                          "end": 2180,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2166,
                            "end": 2180,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2168,
                              "end": 2180,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2168,
                                "end": 2180,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2168,
                                  "end": 2178,
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2179,
                                  "end": 2180,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2183,
                          "end": 2184,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2198,
                    "end": 2204,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2133,
                  "end": 2145,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2133,
                    "end": 2143,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2144,
                    "end": 2145,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2213,
                "end": 2289,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2244,
                    "end": 2270,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2250,
                        "end": 2269,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2250,
                          "end": 2265,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2251,
                            "end": 2265,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2253,
                              "end": 2265,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2253,
                                "end": 2265,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2253,
                                  "end": 2263,
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2264,
                                  "end": 2265,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2268,
                          "end": 2269,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2283,
                    "end": 2289,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2218,
                  "end": 2230,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2218,
                    "end": 2228,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2229,
                    "end": 2230,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2298,
                "end": 2374,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2329,
                    "end": 2355,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2335,
                        "end": 2354,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2335,
                          "end": 2350,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2336,
                            "end": 2350,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2338,
                              "end": 2350,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2338,
                                "end": 2350,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2338,
                                  "end": 2348,
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2349,
                                  "end": 2350,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2353,
                          "end": 2354,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2368,
                    "end": 2374,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2303,
                  "end": 2315,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2303,
                    "end": 2313,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2314,
                    "end": 2315,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 2115,
              "end": 2116,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 2385,
            "end": 2423,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 2390,
              "end": 2393,
              "decorators": [],
              "name": "End",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2396,
              "end": 2423,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2402,
                "end": 2423,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2403,
                    "end": 2422,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2412,
                      "end": 2422,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 2413,
                          "end": 2421,
                          "exprName": {
                            "type": "Identifier",
                            "start": 2420,
                            "end": 2421,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2403,
                      "end": 2412,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2396,
                "end": 2402,
                "decorators": [],
                "name": "isTrue",
                "optional": false
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
        "start": 2074,
        "end": 2088,
        "decorators": [],
        "name": "switchTestEnum",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2089,
          "end": 2099,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2090,
            "end": 2099,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2092,
              "end": 2099
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2427,
      "end": 2841,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2470,
        "end": 2841,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2476,
            "end": 2796,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2497,
                "end": 2554,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2528,
                    "end": 2554,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2534,
                        "end": 2553,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2534,
                          "end": 2549,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2535,
                            "end": 2549,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2537,
                              "end": 2549,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 2537,
                                "end": 2549,
                                "left": {
                                  "type": "Identifier",
                                  "start": 2537,
                                  "end": 2547,
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 2548,
                                  "end": 2549,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2552,
                          "end": 2553,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2502,
                  "end": 2514,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2502,
                    "end": 2512,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2513,
                    "end": 2514,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2563,
                "end": 2635,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2594,
                    "end": 2635,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2600,
                        "end": 2634,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2600,
                          "end": 2630,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2601,
                            "end": 2630,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2603,
                              "end": 2630,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2603,
                                  "end": 2615,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 2603,
                                    "end": 2615,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2603,
                                      "end": 2613,
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2614,
                                      "end": 2615,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2618,
                                  "end": 2630,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 2618,
                                    "end": 2630,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2618,
                                      "end": 2628,
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2629,
                                      "end": 2630,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2633,
                          "end": 2634,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2568,
                  "end": 2580,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2568,
                    "end": 2578,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2579,
                    "end": 2580,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 2644,
                "end": 2790,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2675,
                    "end": 2731,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2681,
                        "end": 2730,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2681,
                          "end": 2726,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2682,
                            "end": 2726,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2684,
                              "end": 2726,
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2684,
                                  "end": 2696,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 2684,
                                    "end": 2696,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2684,
                                      "end": 2694,
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2695,
                                      "end": 2696,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2699,
                                  "end": 2711,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 2699,
                                    "end": 2711,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2699,
                                      "end": 2709,
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2710,
                                      "end": 2711,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 2714,
                                  "end": 2726,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 2714,
                                    "end": 2726,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2714,
                                      "end": 2724,
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2725,
                                      "end": 2726,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2729,
                          "end": 2730,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2744,
                    "end": 2770,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2750,
                        "end": 2769,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2750,
                          "end": 2765,
                          "decorators": [],
                          "name": "all",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2753,
                            "end": 2765,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2755,
                              "end": 2765,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2755,
                                "end": 2765,
                                "decorators": [],
                                "name": "StringEnum",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2768,
                          "end": 2769,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2783,
                    "end": 2790,
                    "argument": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 2649,
                  "end": 2661,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2649,
                    "end": 2659,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2660,
                    "end": 2661,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 2484,
              "end": 2485,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 2801,
            "end": 2839,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 2806,
              "end": 2809,
              "decorators": [],
              "name": "End",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2812,
              "end": 2839,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2818,
                "end": 2839,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2819,
                    "end": 2838,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2828,
                      "end": 2838,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 2829,
                          "end": 2837,
                          "exprName": {
                            "type": "Identifier",
                            "start": 2836,
                            "end": 2837,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2819,
                      "end": 2828,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2812,
                "end": 2818,
                "decorators": [],
                "name": "isTrue",
                "optional": false
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
        "start": 2436,
        "end": 2457,
        "decorators": [],
        "name": "switchTestCollectEnum",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2458,
          "end": 2468,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2459,
            "end": 2468,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2461,
              "end": 2468
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2843,
      "end": 3693,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2883,
        "end": 3693,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2889,
            "end": 3648,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2910,
                "end": 2966,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2930,
                    "end": 2947,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2936,
                        "end": 2946,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2936,
                          "end": 2942,
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2939,
                            "end": 2942,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 2941,
                              "end": 2942,
                              "literal": {
                                "type": "Literal",
                                "start": 2941,
                                "end": 2942,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 2945,
                          "end": 2946,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2960,
                    "end": 2966,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2915,
                  "end": 2916,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SwitchCase",
                "start": 2975,
                "end": 3031,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2995,
                    "end": 3012,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3001,
                        "end": 3011,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3001,
                          "end": 3007,
                          "decorators": [],
                          "name": "two",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3004,
                            "end": 3007,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 3006,
                              "end": 3007,
                              "literal": {
                                "type": "Literal",
                                "start": 3006,
                                "end": 3007,
                                "raw": "2",
                                "value": 2
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3010,
                          "end": 3011,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3025,
                    "end": 3031,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2980,
                  "end": 2981,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "SwitchCase",
                "start": 3040,
                "end": 3098,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3060,
                    "end": 3079,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3066,
                        "end": 3078,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3066,
                          "end": 3074,
                          "decorators": [],
                          "name": "three",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3071,
                            "end": 3074,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 3073,
                              "end": 3074,
                              "literal": {
                                "type": "Literal",
                                "start": 3073,
                                "end": 3074,
                                "raw": "3",
                                "value": 3
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3077,
                          "end": 3078,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3092,
                    "end": 3098,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3045,
                  "end": 3046,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "SwitchCase",
                "start": 3107,
                "end": 3167,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3130,
                    "end": 3148,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3136,
                        "end": 3147,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3136,
                          "end": 3143,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3137,
                            "end": 3143,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 3139,
                              "end": 3143,
                              "literal": {
                                "type": "Literal",
                                "start": 3139,
                                "end": 3143,
                                "raw": "true",
                                "value": true
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3146,
                          "end": 3147,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3161,
                    "end": 3167,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3112,
                  "end": 3116,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "SwitchCase",
                "start": 3176,
                "end": 3238,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3200,
                    "end": 3219,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3206,
                        "end": 3218,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3206,
                          "end": 3214,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3207,
                            "end": 3214,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 3209,
                              "end": 3214,
                              "literal": {
                                "type": "Literal",
                                "start": 3209,
                                "end": 3214,
                                "raw": "false",
                                "value": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3217,
                          "end": 3218,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3232,
                    "end": 3238,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3181,
                  "end": 3186,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 3247,
                "end": 3305,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3269,
                    "end": 3286,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3275,
                        "end": 3285,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3275,
                          "end": 3281,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3276,
                            "end": 3281,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 3278,
                              "end": 3281,
                              "literal": {
                                "type": "Literal",
                                "start": 3278,
                                "end": 3281,
                                "raw": "\"A\"",
                                "value": "A"
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3284,
                          "end": 3285,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3299,
                    "end": 3305,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3252,
                  "end": 3255,
                  "raw": "\"A\"",
                  "value": "A"
                }
              },
              {
                "type": "SwitchCase",
                "start": 3314,
                "end": 3388,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3342,
                    "end": 3369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3348,
                        "end": 3368,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3348,
                          "end": 3364,
                          "decorators": [],
                          "name": "undef",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3353,
                            "end": 3364,
                            "typeAnnotation": {
                              "type": "TSUndefinedKeyword",
                              "start": 3355,
                              "end": 3364
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3367,
                          "end": 3368,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3382,
                    "end": 3388,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 3319,
                  "end": 3328,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 3397,
                "end": 3460,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3420,
                    "end": 3441,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3426,
                        "end": 3440,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3426,
                          "end": 3436,
                          "decorators": [],
                          "name": "llun",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3430,
                            "end": 3436,
                            "typeAnnotation": {
                              "type": "TSNullKeyword",
                              "start": 3432,
                              "end": 3436
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3439,
                          "end": 3440,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3454,
                    "end": 3460,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3402,
                  "end": 3406,
                  "raw": "null",
                  "value": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 3469,
                "end": 3548,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3492,
                    "end": 3529,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3498,
                        "end": 3528,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3498,
                          "end": 3524,
                          "decorators": [],
                          "name": "anotherSymbol",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3511,
                            "end": 3524,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 3513,
                              "end": 3524,
                              "exprName": {
                                "type": "Identifier",
                                "start": 3520,
                                "end": 3524,
                                "decorators": [],
                                "name": "symb",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3527,
                          "end": 3528,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3542,
                    "end": 3548,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 3474,
                  "end": 3478,
                  "decorators": [],
                  "name": "symb",
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 3557,
                "end": 3642,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3589,
                    "end": 3623,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3595,
                        "end": 3622,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3595,
                          "end": 3618,
                          "decorators": [],
                          "name": "nonUniqueSymbol",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3610,
                            "end": 3618,
                            "typeAnnotation": {
                              "type": "TSSymbolKeyword",
                              "start": 3612,
                              "end": 3618
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3621,
                          "end": 3622,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3636,
                    "end": 3642,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 3562,
                  "end": 3575,
                  "decorators": [],
                  "name": "symbNonUnique",
                  "optional": false
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 2897,
              "end": 2898,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 3653,
            "end": 3691,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 3658,
              "end": 3661,
              "decorators": [],
              "name": "End",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3664,
              "end": 3691,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3670,
                "end": 3691,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3671,
                    "end": 3690,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3680,
                      "end": 3690,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 3681,
                          "end": 3689,
                          "exprName": {
                            "type": "Identifier",
                            "start": 3688,
                            "end": 3689,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3671,
                      "end": 3680,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3664,
                "end": 3670,
                "decorators": [],
                "name": "isTrue",
                "optional": false
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
        "start": 2852,
        "end": 2870,
        "decorators": [],
        "name": "switchTestLiterals",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2871,
          "end": 2881,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2872,
            "end": 2881,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2874,
              "end": 2881
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3695,
      "end": 4076,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3770,
        "end": 4076,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 3776,
            "end": 4031,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 3797,
                "end": 3807,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 3802,
                  "end": 3806,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "SwitchCase",
                "start": 3816,
                "end": 3883,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3840,
                    "end": 3864,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3846,
                        "end": 3863,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3846,
                          "end": 3859,
                          "decorators": [],
                          "name": "bool",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3850,
                            "end": 3859,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 3852,
                              "end": 3859
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3862,
                          "end": 3863,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3877,
                    "end": 3883,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3821,
                  "end": 3826,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 3892,
                "end": 3954,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3912,
                    "end": 3935,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3918,
                        "end": 3934,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3918,
                          "end": 3930,
                          "decorators": [],
                          "name": "obj1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3922,
                            "end": 3930,
                            "typeAnnotation": {
                              "type": "TSObjectKeyword",
                              "start": 3924,
                              "end": 3930
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3933,
                          "end": 3934,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3948,
                    "end": 3954,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 3897,
                  "end": 3898,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 3963,
                "end": 4025,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3983,
                    "end": 4006,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3989,
                        "end": 4005,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 3989,
                          "end": 4001,
                          "decorators": [],
                          "name": "obj2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3993,
                            "end": 4001,
                            "typeAnnotation": {
                              "type": "TSObjectKeyword",
                              "start": 3995,
                              "end": 4001
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 4004,
                          "end": 4005,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "BreakStatement",
                    "start": 4019,
                    "end": 4025,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 3968,
                  "end": 3969,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 3784,
              "end": 3785,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 4036,
            "end": 4074,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 4041,
              "end": 4044,
              "decorators": [],
              "name": "End",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4047,
              "end": 4074,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4053,
                "end": 4074,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4054,
                    "end": 4073,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4063,
                      "end": 4073,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 4064,
                          "end": 4072,
                          "exprName": {
                            "type": "Identifier",
                            "start": 4071,
                            "end": 4072,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4054,
                      "end": 4063,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4047,
                "end": 4053,
                "decorators": [],
                "name": "isTrue",
                "optional": false
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
        "start": 3704,
        "end": 3721,
        "decorators": [],
        "name": "switchTestObjects",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3722,
          "end": 3732,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3723,
            "end": 3732,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3725,
              "end": 3732
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3734,
          "end": 3747,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3735,
            "end": 3747,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3737,
              "end": 3747,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3740,
                "end": 3747,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3743,
                  "end": 3747
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3749,
          "end": 3768,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3750,
            "end": 3768,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3752,
              "end": 3768,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3754,
                  "end": 3766,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3754,
                    "end": 3758,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3758,
                    "end": 3766,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3760,
                      "end": 3766
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 4078,
      "end": 4382,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4128,
        "end": 4382,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4134,
            "end": 4299,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4155,
                "end": 4166,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 4160,
                  "end": 4165,
                  "raw": "'yes'",
                  "value": "yes"
                }
              },
              {
                "type": "SwitchCase",
                "start": 4175,
                "end": 4185,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 4180,
                  "end": 4184,
                  "raw": "'no'",
                  "value": "no"
                }
              },
              {
                "type": "SwitchCase",
                "start": 4194,
                "end": 4227,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4218,
                    "end": 4227,
                    "argument": {
                      "type": "Identifier",
                      "start": 4225,
                      "end": 4226,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 4199,
                  "end": 4204,
                  "raw": "'idk'",
                  "value": "idk"
                }
              },
              {
                "type": "SwitchCase",
                "start": 4236,
                "end": 4293,
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "start": 4257,
                    "end": 4293,
                    "argument": {
                      "type": "NewExpression",
                      "start": 4263,
                      "end": 4292,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 4273,
                          "end": 4291,
                          "raw": "'unknown response'",
                          "value": "unknown response"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 4267,
                        "end": 4272,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 4142,
              "end": 4143,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 4342,
            "end": 4380,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 4347,
              "end": 4350,
              "decorators": [],
              "name": "End",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4353,
              "end": 4380,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4359,
                "end": 4380,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4360,
                    "end": 4379,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4369,
                      "end": 4379,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 4370,
                          "end": 4378,
                          "exprName": {
                            "type": "Identifier",
                            "start": 4377,
                            "end": 4378,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4360,
                      "end": 4369,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4353,
                "end": 4359,
                "decorators": [],
                "name": "isTrue",
                "optional": false
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
        "start": 4087,
        "end": 4101,
        "decorators": [],
        "name": "switchResponse",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4102,
          "end": 4112,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4103,
            "end": 4112,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4105,
              "end": 4112
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4113,
        "end": 4127,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4115,
          "end": 4127,
          "typeName": {
            "type": "Identifier",
            "start": 4115,
            "end": 4127,
            "decorators": [],
            "name": "SomeResponse",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4384,
      "end": 4716,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4439,
        "end": 4716,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4445,
            "end": 4633,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4466,
                "end": 4477,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 4471,
                  "end": 4476,
                  "raw": "'yes'",
                  "value": "yes"
                }
              },
              {
                "type": "SwitchCase",
                "start": 4486,
                "end": 4496,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 4491,
                  "end": 4495,
                  "raw": "'no'",
                  "value": "no"
                }
              },
              {
                "type": "SwitchCase",
                "start": 4505,
                "end": 4540,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4531,
                    "end": 4540,
                    "argument": {
                      "type": "Identifier",
                      "start": 4538,
                      "end": 4539,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 4510,
                  "end": 4517,
                  "raw": "'maybe'",
                  "value": "maybe"
                }
              },
              {
                "type": "SwitchCase",
                "start": 4558,
                "end": 4627,
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "start": 4579,
                    "end": 4627,
                    "argument": {
                      "type": "NewExpression",
                      "start": 4585,
                      "end": 4626,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 4595,
                          "end": 4625,
                          "raw": "'Can you repeat the question?'",
                          "value": "Can you repeat the question?"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 4589,
                        "end": 4594,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 4453,
              "end": 4454,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 4676,
            "end": 4714,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 4681,
              "end": 4684,
              "decorators": [],
              "name": "End",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4687,
              "end": 4714,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4693,
                "end": 4714,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4694,
                    "end": 4713,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4703,
                      "end": 4713,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 4704,
                          "end": 4712,
                          "exprName": {
                            "type": "Identifier",
                            "start": 4711,
                            "end": 4712,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4694,
                      "end": 4703,
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4687,
                "end": 4693,
                "decorators": [],
                "name": "isTrue",
                "optional": false
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
        "start": 4393,
        "end": 4412,
        "decorators": [],
        "name": "switchResponseWrong",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4413,
          "end": 4423,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4414,
            "end": 4423,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4416,
              "end": 4423
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4424,
        "end": 4438,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4426,
          "end": 4438,
          "typeName": {
            "type": "Identifier",
            "start": 4426,
            "end": 4438,
            "decorators": [],
            "name": "SomeResponse",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4740,
      "end": 4876,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4784,
        "end": 4876,
        "body": [
          {
            "type": "IfStatement",
            "start": 4788,
            "end": 4862,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4834,
              "end": 4862,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 4840,
                  "end": 4858,
                  "argument": {
                    "type": "NewExpression",
                    "start": 4846,
                    "end": 4857,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 4850,
                      "end": 4855,
                      "decorators": [],
                      "name": "Error",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 4792,
              "end": 4832,
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "start": 4792,
                "end": 4807,
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "start": 4792,
                  "end": 4793,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 4798,
                  "end": 4807,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 4811,
                "end": 4832,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 4811,
                  "end": 4819,
                  "argument": {
                    "type": "Identifier",
                    "start": 4818,
                    "end": 4819,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 4824,
                  "end": 4832,
                  "raw": "'string'",
                  "value": "string"
                }
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 4865,
            "end": 4874,
            "argument": {
              "type": "Identifier",
              "start": 4872,
              "end": 4873,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4749,
        "end": 4751,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4752,
          "end": 4762,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4753,
            "end": 4762,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4755,
              "end": 4762
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4763,
        "end": 4783,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4765,
          "end": 4783,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 4765,
              "end": 4771
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 4774,
              "end": 4783
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4878,
      "end": 5428,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4913,
        "end": 5428,
        "body": [
          {
            "type": "IfStatement",
            "start": 4919,
            "end": 4990,
            "alternate": {
              "type": "BlockStatement",
              "start": 4954,
              "end": 4990,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4964,
                  "end": 4984,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4970,
                      "end": 4983,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 4970,
                        "end": 4979,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4971,
                          "end": 4979,
                          "typeAnnotation": {
                            "type": "TSObjectKeyword",
                            "start": 4973,
                            "end": 4979
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 4982,
                        "end": 4983,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4941,
              "end": 4944,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4923,
              "end": 4939,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 4923,
                "end": 4924,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 4929,
                "end": 4939,
                "decorators": [],
                "name": "NumberEnum",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4996,
            "end": 5075,
            "alternate": {
              "type": "BlockStatement",
              "start": 5033,
              "end": 5075,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 5043,
                  "end": 5069,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 5049,
                      "end": 5068,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 5049,
                        "end": 5064,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5050,
                          "end": 5064,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5052,
                            "end": 5064,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 5052,
                              "end": 5064,
                              "left": {
                                "type": "Identifier",
                                "start": 5052,
                                "end": 5062,
                                "decorators": [],
                                "name": "NumberEnum",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 5063,
                                "end": 5064,
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 5067,
                        "end": 5068,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5020,
              "end": 5023,
              "body": []
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5000,
              "end": 5018,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 5000,
                "end": 5001,
                "decorators": [],
                "name": "u",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 5006,
                "end": 5018,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 5006,
                  "end": 5016,
                  "decorators": [],
                  "name": "NumberEnum",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 5017,
                  "end": 5018,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5082,
            "end": 5239,
            "alternate": {
              "type": "BlockStatement",
              "start": 5163,
              "end": 5239,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 5173,
                  "end": 5233,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 5179,
                      "end": 5232,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 5179,
                        "end": 5227,
                        "decorators": [],
                        "name": "aOrB",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5183,
                          "end": 5227,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 5185,
                            "end": 5227,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 5185,
                                "end": 5197,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5185,
                                  "end": 5197,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5185,
                                    "end": 5195,
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5196,
                                    "end": 5197,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 5200,
                                "end": 5212,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5200,
                                  "end": 5212,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5200,
                                    "end": 5210,
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5211,
                                    "end": 5212,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 5215,
                                "end": 5227,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5215,
                                  "end": 5227,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5215,
                                    "end": 5225,
                                    "decorators": [],
                                    "name": "StringEnum",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5226,
                                    "end": 5227,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 5231,
                        "end": 5232,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5150,
              "end": 5153,
              "body": []
            },
            "test": {
              "type": "LogicalExpression",
              "start": 5086,
              "end": 5148,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 5086,
                "end": 5126,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 5086,
                  "end": 5104,
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 5086,
                    "end": 5087,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 5092,
                    "end": 5104,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5092,
                      "end": 5102,
                      "decorators": [],
                      "name": "NumberEnum",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5103,
                      "end": 5104,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 5108,
                  "end": 5126,
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 5108,
                    "end": 5109,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 5114,
                    "end": 5126,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5114,
                      "end": 5124,
                      "decorators": [],
                      "name": "NumberEnum",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5125,
                      "end": 5126,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 5130,
                "end": 5148,
                "operator": "!==",
                "left": {
                  "type": "Identifier",
                  "start": 5130,
                  "end": 5131,
                  "decorators": [],
                  "name": "u",
                  "optional": false
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 5136,
                  "end": 5148,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5136,
                    "end": 5146,
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5147,
                    "end": 5148,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 5266,
            "end": 5426,
            "alternate": {
              "type": "BlockStatement",
              "start": 5350,
              "end": 5426,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 5360,
                  "end": 5420,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 5366,
                      "end": 5419,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 5366,
                        "end": 5414,
                        "decorators": [],
                        "name": "aOrB",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5370,
                          "end": 5414,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 5372,
                            "end": 5414,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 5372,
                                "end": 5384,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5372,
                                  "end": 5384,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5372,
                                    "end": 5382,
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5383,
                                    "end": 5384,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 5387,
                                "end": 5399,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5387,
                                  "end": 5399,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5387,
                                    "end": 5397,
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5398,
                                    "end": 5399,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 5402,
                                "end": 5414,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 5402,
                                  "end": 5414,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5402,
                                    "end": 5412,
                                    "decorators": [],
                                    "name": "StringEnum",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5413,
                                    "end": 5414,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 5418,
                        "end": 5419,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5337,
              "end": 5340,
              "body": []
            },
            "test": {
              "type": "UnaryExpression",
              "start": 5270,
              "end": 5335,
              "argument": {
                "type": "LogicalExpression",
                "start": 5272,
                "end": 5334,
                "operator": "||",
                "left": {
                  "type": "LogicalExpression",
                  "start": 5272,
                  "end": 5312,
                  "operator": "||",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 5272,
                    "end": 5290,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 5272,
                      "end": 5273,
                      "decorators": [],
                      "name": "u",
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 5278,
                      "end": 5290,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 5278,
                        "end": 5288,
                        "decorators": [],
                        "name": "NumberEnum",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 5289,
                        "end": 5290,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 5294,
                    "end": 5312,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 5294,
                      "end": 5295,
                      "decorators": [],
                      "name": "u",
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 5300,
                      "end": 5312,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 5300,
                        "end": 5310,
                        "decorators": [],
                        "name": "NumberEnum",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 5311,
                        "end": 5312,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 5316,
                  "end": 5334,
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "start": 5316,
                    "end": 5317,
                    "decorators": [],
                    "name": "u",
                    "optional": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 5322,
                    "end": 5334,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 5322,
                      "end": 5332,
                      "decorators": [],
                      "name": "StringEnum",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 5333,
                      "end": 5334,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4887,
        "end": 4899,
        "decorators": [],
        "name": "notNotEquals",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4900,
          "end": 4910,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4901,
            "end": 4910,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4903,
              "end": 4910
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
