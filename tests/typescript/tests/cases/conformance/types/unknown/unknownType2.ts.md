__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isUnknown",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 20,
          "end": 27
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeArguments": null,
          "start": 36,
          "end": 37
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 40,
            "end": 44
          },
          "start": 40,
          "end": 44
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 47,
            "end": 52
          },
          "start": 47,
          "end": 52
        },
        "start": 20,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isTrue",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 65
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 76,
                "end": 80
              },
              "start": 76,
              "end": 80
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 66,
            "end": 80
          }
        ],
        "start": 65,
        "end": 81
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 85
        },
        "typeArguments": null,
        "start": 84,
        "end": 85
      },
      "declare": false,
      "start": 54,
      "end": 86
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 105
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "yes",
              "raw": "'yes'",
              "start": 108,
              "end": 113
            },
            "start": 108,
            "end": 113
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "no",
              "raw": "'no'",
              "start": 116,
              "end": 120
            },
            "start": 116,
            "end": 120
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "idk",
              "raw": "'idk'",
              "start": 123,
              "end": 128
            },
            "start": 123,
            "end": 128
          }
        ],
        "start": 108,
        "end": 128
      },
      "declare": false,
      "start": 88,
      "end": 129
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "validate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 148,
                        "end": 155
                      },
                      "start": 146,
                      "end": 155
                    },
                    "start": 145,
                    "end": 155
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SomeResponse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 160,
                    "end": 172
                  },
                  "start": 157,
                  "end": 172
                },
                "start": 144,
                "end": 172
              },
              "start": 142,
              "end": 172
            },
            "start": 134,
            "end": 172
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 182
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "'yes'",
                    "start": 187,
                    "end": 192
                  },
                  "start": 181,
                  "end": 192
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 197
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "'no'",
                    "start": 202,
                    "end": 206
                  },
                  "start": 196,
                  "end": 206
                },
                "start": 181,
                "end": 206
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 211
              },
              "alternate": {
                "type": "Literal",
                "value": "idk",
                "raw": "'idk'",
                "start": 214,
                "end": 219
              },
              "start": 180,
              "end": 219
            },
            "id": null,
            "generator": false,
            "start": 175,
            "end": 219
          },
          "definite": false,
          "start": 134,
          "end": 219
        }
      ],
      "declare": false,
      "start": 130,
      "end": 220
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 243,
                "end": 250
              },
              "start": 241,
              "end": 250
            },
            "start": 240,
            "end": 250
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 262
          },
          "definite": false,
          "start": 240,
          "end": 262
        }
      ],
      "declare": false,
      "start": 234,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 292,
                  "end": 298
                },
                "start": 285,
                "end": 298
              },
              "start": 283,
              "end": 298
            },
            "start": 279,
            "end": 298
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 298
        }
      ],
      "declare": true,
      "start": 265,
      "end": 299
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbNonUnique",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 329,
                "end": 335
              },
              "start": 327,
              "end": 335
            },
            "start": 314,
            "end": 335
          },
          "init": null,
          "definite": false,
          "start": 314,
          "end": 335
        }
      ],
      "declare": true,
      "start": 300,
      "end": 336
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 343
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 348,
          "end": 349
        },
        "start": 342,
        "end": 349
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 368
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 377
                    },
                    "optional": false,
                    "computed": false,
                    "start": 367,
                    "end": 377
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 378,
                      "end": 380
                    }
                  ],
                  "optional": false,
                  "start": 367,
                  "end": 381
                },
                "definite": false,
                "start": 363,
                "end": 381
              }
            ],
            "declare": false,
            "start": 357,
            "end": 382
          }
        ],
        "start": 351,
        "end": 384
      },
      "alternate": null,
      "start": 338,
      "end": 384
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 396,
            "end": 400
          },
          "start": 390,
          "end": 400
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 410,
            "end": 415
          },
          "start": 404,
          "end": 415
        },
        "start": 390,
        "end": 415
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someBool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 439,
                      "end": 446
                    },
                    "start": 437,
                    "end": 446
                  },
                  "start": 429,
                  "end": 446
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 449,
                  "end": 450
                },
                "definite": false,
                "start": 429,
                "end": 450
              }
            ],
            "declare": false,
            "start": 423,
            "end": 451
          }
        ],
        "start": 417,
        "end": 453
      },
      "alternate": null,
      "start": 386,
      "end": 453
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 460
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 474
        },
        "start": 459,
        "end": 474
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 495,
                      "end": 504
                    },
                    "start": 493,
                    "end": 504
                  },
                  "start": 488,
                  "end": 504
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 508
                },
                "definite": false,
                "start": 488,
                "end": 508
              }
            ],
            "declare": false,
            "start": 482,
            "end": 509
          }
        ],
        "start": 476,
        "end": 511
      },
      "alternate": null,
      "start": 455,
      "end": 511
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 517,
          "end": 518
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 523,
          "end": 527
        },
        "start": 517,
        "end": 527
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someNull",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 551,
                      "end": 555
                    },
                    "start": 549,
                    "end": 555
                  },
                  "start": 541,
                  "end": 555
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 559
                },
                "definite": false,
                "start": 541,
                "end": 559
              }
            ],
            "declare": false,
            "start": 535,
            "end": 560
          }
        ],
        "start": 529,
        "end": 562
      },
      "alternate": null,
      "start": 513,
      "end": 562
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 569
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "symb",
          "optional": false,
          "typeAnnotation": null,
          "start": 574,
          "end": 578
        },
        "start": 568,
        "end": 578
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symbolAlias",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "symb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 612,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 605,
                      "end": 616
                    },
                    "start": 603,
                    "end": 616
                  },
                  "start": 592,
                  "end": 616
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "definite": false,
                "start": 592,
                "end": 620
              }
            ],
            "declare": false,
            "start": 586,
            "end": 621
          }
        ],
        "start": 580,
        "end": 623
      },
      "alternate": null,
      "start": 564,
      "end": 623
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 632
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 637,
            "end": 639
          },
          "start": 631,
          "end": 639
        },
        "prefix": true,
        "start": 629,
        "end": 640
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 663
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 673
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 682
                          },
                          "typeArguments": null,
                          "start": 674,
                          "end": 682
                        }
                      ],
                      "start": 673,
                      "end": 683
                    },
                    "start": 664,
                    "end": 683
                  }
                ],
                "start": 663,
                "end": 684
              },
              "start": 657,
              "end": 684
            },
            "declare": false,
            "start": 648,
            "end": 684
          }
        ],
        "start": 642,
        "end": 686
      },
      "alternate": null,
      "start": 625,
      "end": 686
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 693
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 698,
          "end": 700
        },
        "start": 692,
        "end": 700
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 714
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 723
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 724,
                      "end": 733
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 741,
                            "end": 742
                          },
                          "typeArguments": null,
                          "start": 734,
                          "end": 742
                        }
                      ],
                      "start": 733,
                      "end": 743
                    },
                    "start": 724,
                    "end": 743
                  }
                ],
                "start": 723,
                "end": 744
              },
              "start": 717,
              "end": 744
            },
            "declare": false,
            "start": 708,
            "end": 744
          }
        ],
        "start": 702,
        "end": 746
      },
      "alternate": null,
      "start": 688,
      "end": 746
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 752,
          "end": 753
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 757,
          "end": 759
        },
        "start": 752,
        "end": 759
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 782
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 783,
                      "end": 792
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 800,
                            "end": 801
                          },
                          "typeArguments": null,
                          "start": 793,
                          "end": 801
                        }
                      ],
                      "start": 792,
                      "end": 802
                    },
                    "start": 783,
                    "end": 802
                  }
                ],
                "start": 782,
                "end": 803
              },
              "start": 776,
              "end": 803
            },
            "declare": false,
            "start": 767,
            "end": 803
          }
        ],
        "start": 761,
        "end": 805
      },
      "alternate": null,
      "start": 748,
      "end": 805
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 811,
          "end": 812
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 816,
          "end": 820
        },
        "start": 811,
        "end": 820
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 834
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 843
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 844,
                      "end": 853
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 861,
                            "end": 862
                          },
                          "typeArguments": null,
                          "start": 854,
                          "end": 862
                        }
                      ],
                      "start": 853,
                      "end": 863
                    },
                    "start": 844,
                    "end": 863
                  }
                ],
                "start": 843,
                "end": 864
              },
              "start": 837,
              "end": 864
            },
            "declare": false,
            "start": 828,
            "end": 864
          }
        ],
        "start": 822,
        "end": 866
      },
      "alternate": null,
      "start": 807,
      "end": 866
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 872,
          "end": 873
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 877,
          "end": 883
        },
        "start": 872,
        "end": 883
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 897
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 906
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 907,
                      "end": 916
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 924,
                            "end": 925
                          },
                          "typeArguments": null,
                          "start": 917,
                          "end": 925
                        }
                      ],
                      "start": 916,
                      "end": 926
                    },
                    "start": 907,
                    "end": 926
                  }
                ],
                "start": 906,
                "end": 927
              },
              "start": 900,
              "end": 927
            },
            "declare": false,
            "start": 891,
            "end": 927
          }
        ],
        "start": 885,
        "end": 929
      },
      "alternate": null,
      "start": 868,
      "end": 929
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 954,
                "end": 960
              },
              "start": 952,
              "end": 960
            },
            "start": 945,
            "end": 960
          },
          "init": null,
          "definite": false,
          "start": 945,
          "end": 960
        }
      ],
      "declare": true,
      "start": 931,
      "end": 961
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 986,
                "end": 993
              },
              "start": 984,
              "end": 993
            },
            "start": 976,
            "end": 993
          },
          "init": null,
          "definite": false,
          "start": 976,
          "end": 993
        }
      ],
      "declare": true,
      "start": 962,
      "end": 994
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1018,
                "end": 1024
              },
              "start": 1016,
              "end": 1024
            },
            "start": 1009,
            "end": 1024
          },
          "init": null,
          "definite": false,
          "start": 1009,
          "end": 1024
        }
      ],
      "declare": true,
      "start": 995,
      "end": 1025
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 1050,
                "end": 1056
              },
              "start": 1048,
              "end": 1056
            },
            "start": 1040,
            "end": 1056
          },
          "init": null,
          "definite": false,
          "start": 1040,
          "end": 1056
        }
      ],
      "declare": true,
      "start": 1026,
      "end": 1057
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1091,
                      "end": 1092
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1094,
                        "end": 1100
                      },
                      "start": 1092,
                      "end": 1100
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1091,
                    "end": 1100
                  }
                ],
                "start": 1089,
                "end": 1102
              },
              "start": 1087,
              "end": 1102
            },
            "start": 1072,
            "end": 1102
          },
          "init": null,
          "definite": false,
          "start": 1072,
          "end": 1102
        }
      ],
      "declare": true,
      "start": 1058,
      "end": 1103
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1128,
                          "end": 1129
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1131,
                            "end": 1137
                          },
                          "start": 1129,
                          "end": 1137
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1128,
                        "end": 1137
                      }
                    ],
                    "start": 1126,
                    "end": 1139
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1144,
                          "end": 1145
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1147,
                            "end": 1153
                          },
                          "start": 1145,
                          "end": 1153
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1144,
                        "end": 1153
                      }
                    ],
                    "start": 1142,
                    "end": 1155
                  }
                ],
                "start": 1126,
                "end": 1155
              },
              "start": 1124,
              "end": 1155
            },
            "start": 1118,
            "end": 1155
          },
          "init": null,
          "definite": false,
          "start": 1118,
          "end": 1155
        }
      ],
      "declare": true,
      "start": 1104,
      "end": 1156
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1189,
                          "end": 1190
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1192,
                            "end": 1198
                          },
                          "start": 1190,
                          "end": 1198
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1189,
                        "end": 1198
                      }
                    ],
                    "start": 1187,
                    "end": 1200
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1205,
                          "end": 1206
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1208,
                            "end": 1214
                          },
                          "start": 1206,
                          "end": 1214
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1205,
                        "end": 1214
                      }
                    ],
                    "start": 1203,
                    "end": 1216
                  }
                ],
                "start": 1187,
                "end": 1216
              },
              "start": 1185,
              "end": 1216
            },
            "start": 1171,
            "end": 1216
          },
          "init": null,
          "definite": false,
          "start": 1171,
          "end": 1216
        }
      ],
      "declare": true,
      "start": 1157,
      "end": 1217
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1249,
                    "end": 1255
                  },
                  "start": 1246,
                  "end": 1255
                },
                "start": 1243,
                "end": 1255
              },
              "start": 1241,
              "end": 1255
            },
            "start": 1232,
            "end": 1255
          },
          "init": null,
          "definite": false,
          "start": 1232,
          "end": 1255
        }
      ],
      "declare": true,
      "start": 1218,
      "end": 1256
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1262,
          "end": 1263
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aString",
          "optional": false,
          "typeAnnotation": null,
          "start": 1268,
          "end": 1275
        },
        "start": 1262,
        "end": 1275
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "uString",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1296,
                      "end": 1302
                    },
                    "start": 1294,
                    "end": 1302
                  },
                  "start": 1287,
                  "end": 1302
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1305,
                  "end": 1306
                },
                "definite": false,
                "start": 1287,
                "end": 1306
              }
            ],
            "declare": false,
            "start": 1283,
            "end": 1307
          }
        ],
        "start": 1277,
        "end": 1309
      },
      "alternate": null,
      "start": 1258,
      "end": 1309
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1315,
          "end": 1316
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 1321,
          "end": 1329
        },
        "start": 1315,
        "end": 1329
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "uString",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1350,
                      "end": 1357
                    },
                    "start": 1348,
                    "end": 1357
                  },
                  "start": 1341,
                  "end": 1357
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1361
                },
                "definite": false,
                "start": 1341,
                "end": 1361
              }
            ],
            "declare": false,
            "start": 1337,
            "end": 1362
          }
        ],
        "start": 1331,
        "end": 1364
      },
      "alternate": null,
      "start": 1311,
      "end": 1364
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1370,
          "end": 1371
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 1376,
          "end": 1383
        },
        "start": 1370,
        "end": 1383
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "uNumber",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1404,
                      "end": 1410
                    },
                    "start": 1402,
                    "end": 1410
                  },
                  "start": 1395,
                  "end": 1410
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1414
                },
                "definite": false,
                "start": 1395,
                "end": 1414
              }
            ],
            "declare": false,
            "start": 1391,
            "end": 1415
          }
        ],
        "start": 1385,
        "end": 1417
      },
      "alternate": null,
      "start": 1366,
      "end": 1417
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1423,
          "end": 1424
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 1429,
          "end": 1437
        },
        "start": 1423,
        "end": 1437
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "uObject",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1458,
                      "end": 1464
                    },
                    "start": 1456,
                    "end": 1464
                  },
                  "start": 1449,
                  "end": 1464
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1467,
                  "end": 1468
                },
                "definite": false,
                "start": 1449,
                "end": 1468
              }
            ],
            "declare": false,
            "start": 1445,
            "end": 1469
          }
        ],
        "start": 1439,
        "end": 1471
      },
      "alternate": null,
      "start": 1419,
      "end": 1471
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1478
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anObjectLiteral",
          "optional": false,
          "typeAnnotation": null,
          "start": 1483,
          "end": 1498
        },
        "start": 1477,
        "end": 1498
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "uObjectLiteral",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1526,
                      "end": 1532
                    },
                    "start": 1524,
                    "end": 1532
                  },
                  "start": 1510,
                  "end": 1532
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1535,
                  "end": 1536
                },
                "definite": false,
                "start": 1510,
                "end": 1536
              }
            ],
            "declare": false,
            "start": 1506,
            "end": 1537
          }
        ],
        "start": 1500,
        "end": 1539
      },
      "alternate": null,
      "start": 1473,
      "end": 1539
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1545,
          "end": 1546
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 1551,
          "end": 1557
        },
        "start": 1545,
        "end": 1557
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionDoesNotNarrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 1570,
              "end": 1588
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1597
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1598,
                      "end": 1607
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1615,
                            "end": 1616
                          },
                          "typeArguments": null,
                          "start": 1608,
                          "end": 1616
                        }
                      ],
                      "start": 1607,
                      "end": 1617
                    },
                    "start": 1598,
                    "end": 1617
                  }
                ],
                "start": 1597,
                "end": 1618
              },
              "start": 1591,
              "end": 1618
            },
            "declare": false,
            "start": 1565,
            "end": 1618
          }
        ],
        "start": 1559,
        "end": 1620
      },
      "alternate": null,
      "start": 1541,
      "end": 1620
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1626,
          "end": 1627
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anIntersection",
          "optional": false,
          "typeAnnotation": null,
          "start": 1632,
          "end": 1646
        },
        "start": 1626,
        "end": 1646
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectionDoesNotNarrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 1659,
              "end": 1684
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 1687,
                "end": 1693
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1694,
                      "end": 1703
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "u",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1711,
                            "end": 1712
                          },
                          "typeArguments": null,
                          "start": 1704,
                          "end": 1712
                        }
                      ],
                      "start": 1703,
                      "end": 1713
                    },
                    "start": 1694,
                    "end": 1713
                  }
                ],
                "start": 1693,
                "end": 1714
              },
              "start": 1687,
              "end": 1714
            },
            "declare": false,
            "start": 1654,
            "end": 1714
          }
        ],
        "start": 1648,
        "end": 1716
      },
      "alternate": null,
      "start": 1622,
      "end": 1716
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1722,
          "end": 1723
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "aFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 1728,
          "end": 1737
        },
        "start": 1722,
        "end": 1737
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "uFunction",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1760,
                      "end": 1766
                    },
                    "start": 1758,
                    "end": 1766
                  },
                  "start": 1749,
                  "end": 1766
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1769,
                  "end": 1770
                },
                "definite": false,
                "start": 1749,
                "end": 1770
              }
            ],
            "declare": false,
            "start": 1745,
            "end": 1771
          }
        ],
        "start": 1739,
        "end": 1773
      },
      "alternate": null,
      "start": 1718,
      "end": 1773
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1780,
        "end": 1790
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1797,
              "end": 1798
            },
            "initializer": null,
            "computed": false,
            "start": 1797,
            "end": 1798
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1805
            },
            "initializer": null,
            "computed": false,
            "start": 1804,
            "end": 1805
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1812
            },
            "initializer": null,
            "computed": false,
            "start": 1811,
            "end": 1812
          }
        ],
        "start": 1791,
        "end": 1814
      },
      "const": false,
      "declare": false,
      "start": 1775,
      "end": 1814
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1821,
        "end": 1831
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1839
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 1842,
              "end": 1845
            },
            "computed": false,
            "start": 1838,
            "end": 1845
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1851,
              "end": 1852
            },
            "initializer": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 1855,
              "end": 1858
            },
            "computed": false,
            "start": 1851,
            "end": 1858
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1864,
              "end": 1865
            },
            "initializer": {
              "type": "Literal",
              "value": "C",
              "raw": "\"C\"",
              "start": 1868,
              "end": 1871
            },
            "computed": false,
            "start": 1864,
            "end": 1871
          }
        ],
        "start": 1832,
        "end": 1873
      },
      "const": false,
      "declare": false,
      "start": 1816,
      "end": 1873
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 1879,
            "end": 1880
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1885,
            "end": 1895
          },
          "start": 1879,
          "end": 1895
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 1899,
            "end": 1900
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1905,
            "end": 1915
          },
          "start": 1899,
          "end": 1915
        },
        "start": 1879,
        "end": 1915
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "enumObj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 1936,
                      "end": 1942
                    },
                    "start": 1934,
                    "end": 1942
                  },
                  "start": 1927,
                  "end": 1942
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1945,
                  "end": 1946
                },
                "definite": false,
                "start": 1927,
                "end": 1946
              }
            ],
            "declare": false,
            "start": 1923,
            "end": 1947
          }
        ],
        "start": 1917,
        "end": 1949
      },
      "alternate": null,
      "start": 1875,
      "end": 1949
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 1955,
          "end": 1956
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1961,
            "end": 1971
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1972,
            "end": 1973
          },
          "optional": false,
          "computed": false,
          "start": 1961,
          "end": 1973
        },
        "start": 1955,
        "end": 1973
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumberEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1988,
                          "end": 1998
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1999,
                          "end": 2000
                        },
                        "start": 1988,
                        "end": 2000
                      },
                      "typeArguments": null,
                      "start": 1988,
                      "end": 2000
                    },
                    "start": 1986,
                    "end": 2000
                  },
                  "start": 1985,
                  "end": 2000
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2003,
                  "end": 2004
                },
                "definite": false,
                "start": 1985,
                "end": 2004
              }
            ],
            "declare": false,
            "start": 1981,
            "end": 2004
          }
        ],
        "start": 1975,
        "end": 2006
      },
      "alternate": null,
      "start": 1951,
      "end": 2006
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 2012,
          "end": 2013
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 2018,
            "end": 2028
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 2029,
            "end": 2030
          },
          "optional": false,
          "computed": false,
          "start": 2018,
          "end": 2030
        },
        "start": 2012,
        "end": 2030
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StringEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2055
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2056,
                          "end": 2057
                        },
                        "start": 2045,
                        "end": 2057
                      },
                      "typeArguments": null,
                      "start": 2045,
                      "end": 2057
                    },
                    "start": 2043,
                    "end": 2057
                  },
                  "start": 2042,
                  "end": 2057
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2060,
                  "end": 2061
                },
                "definite": false,
                "start": 2042,
                "end": 2061
              }
            ],
            "declare": false,
            "start": 2038,
            "end": 2061
          }
        ],
        "start": 2032,
        "end": 2063
      },
      "alternate": null,
      "start": 2008,
      "end": 2063
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2074,
        "end": 2088
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2092,
              "end": 2099
            },
            "start": 2090,
            "end": 2099
          },
          "start": 2089,
          "end": 2099
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2116
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2133,
                    "end": 2143
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2144,
                    "end": 2145
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2133,
                  "end": 2145
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2168,
                                  "end": 2178
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2179,
                                  "end": 2180
                                },
                                "start": 2168,
                                "end": 2180
                              },
                              "typeArguments": null,
                              "start": 2168,
                              "end": 2180
                            },
                            "start": 2166,
                            "end": 2180
                          },
                          "start": 2165,
                          "end": 2180
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2183,
                          "end": 2184
                        },
                        "definite": false,
                        "start": 2165,
                        "end": 2184
                      }
                    ],
                    "declare": false,
                    "start": 2159,
                    "end": 2185
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2198,
                    "end": 2204
                  }
                ],
                "start": 2128,
                "end": 2204
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2218,
                    "end": 2228
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2229,
                    "end": 2230
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2218,
                  "end": 2230
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2253,
                                  "end": 2263
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2264,
                                  "end": 2265
                                },
                                "start": 2253,
                                "end": 2265
                              },
                              "typeArguments": null,
                              "start": 2253,
                              "end": 2265
                            },
                            "start": 2251,
                            "end": 2265
                          },
                          "start": 2250,
                          "end": 2265
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2268,
                          "end": 2269
                        },
                        "definite": false,
                        "start": 2250,
                        "end": 2269
                      }
                    ],
                    "declare": false,
                    "start": 2244,
                    "end": 2270
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2283,
                    "end": 2289
                  }
                ],
                "start": 2213,
                "end": 2289
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2303,
                    "end": 2313
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2314,
                    "end": 2315
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2303,
                  "end": 2315
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2338,
                                  "end": 2348
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2349,
                                  "end": 2350
                                },
                                "start": 2338,
                                "end": 2350
                              },
                              "typeArguments": null,
                              "start": 2338,
                              "end": 2350
                            },
                            "start": 2336,
                            "end": 2350
                          },
                          "start": 2335,
                          "end": 2350
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2353,
                          "end": 2354
                        },
                        "definite": false,
                        "start": 2335,
                        "end": 2354
                      }
                    ],
                    "declare": false,
                    "start": 2329,
                    "end": 2355
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2368,
                    "end": 2374
                  }
                ],
                "start": 2298,
                "end": 2374
              }
            ],
            "start": 2107,
            "end": 2380
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 2390,
              "end": 2393
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 2396,
                "end": 2402
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2403,
                      "end": 2412
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2420,
                            "end": 2421
                          },
                          "typeArguments": null,
                          "start": 2413,
                          "end": 2421
                        }
                      ],
                      "start": 2412,
                      "end": 2422
                    },
                    "start": 2403,
                    "end": 2422
                  }
                ],
                "start": 2402,
                "end": 2423
              },
              "start": 2396,
              "end": 2423
            },
            "declare": false,
            "start": 2385,
            "end": 2423
          }
        ],
        "start": 2101,
        "end": 2425
      },
      "expression": false,
      "start": 2065,
      "end": 2425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestCollectEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2436,
        "end": 2457
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2461,
              "end": 2468
            },
            "start": 2459,
            "end": 2468
          },
          "start": 2458,
          "end": 2468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2485
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2502,
                    "end": 2512
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2513,
                    "end": 2514
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2502,
                  "end": 2514
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "StringEnum",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2537,
                                  "end": 2547
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2548,
                                  "end": 2549
                                },
                                "start": 2537,
                                "end": 2549
                              },
                              "typeArguments": null,
                              "start": 2537,
                              "end": 2549
                            },
                            "start": 2535,
                            "end": 2549
                          },
                          "start": 2534,
                          "end": 2549
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2552,
                          "end": 2553
                        },
                        "definite": false,
                        "start": 2534,
                        "end": 2553
                      }
                    ],
                    "declare": false,
                    "start": 2528,
                    "end": 2554
                  }
                ],
                "start": 2497,
                "end": 2554
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2578
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2579,
                    "end": 2580
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2568,
                  "end": 2580
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2603,
                                      "end": 2613
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2614,
                                      "end": 2615
                                    },
                                    "start": 2603,
                                    "end": 2615
                                  },
                                  "typeArguments": null,
                                  "start": 2603,
                                  "end": 2615
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2618,
                                      "end": 2628
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2629,
                                      "end": 2630
                                    },
                                    "start": 2618,
                                    "end": 2630
                                  },
                                  "typeArguments": null,
                                  "start": 2618,
                                  "end": 2630
                                }
                              ],
                              "start": 2603,
                              "end": 2630
                            },
                            "start": 2601,
                            "end": 2630
                          },
                          "start": 2600,
                          "end": 2630
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2633,
                          "end": 2634
                        },
                        "definite": false,
                        "start": 2600,
                        "end": 2634
                      }
                    ],
                    "declare": false,
                    "start": 2594,
                    "end": 2635
                  }
                ],
                "start": 2563,
                "end": 2635
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2649,
                    "end": 2659
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2660,
                    "end": 2661
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2649,
                  "end": 2661
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2684,
                                      "end": 2694
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2695,
                                      "end": 2696
                                    },
                                    "start": 2684,
                                    "end": 2696
                                  },
                                  "typeArguments": null,
                                  "start": 2684,
                                  "end": 2696
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2699,
                                      "end": 2709
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2710,
                                      "end": 2711
                                    },
                                    "start": 2699,
                                    "end": 2711
                                  },
                                  "typeArguments": null,
                                  "start": 2699,
                                  "end": 2711
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StringEnum",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2714,
                                      "end": 2724
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2725,
                                      "end": 2726
                                    },
                                    "start": 2714,
                                    "end": 2726
                                  },
                                  "typeArguments": null,
                                  "start": 2714,
                                  "end": 2726
                                }
                              ],
                              "start": 2684,
                              "end": 2726
                            },
                            "start": 2682,
                            "end": 2726
                          },
                          "start": 2681,
                          "end": 2726
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2729,
                          "end": 2730
                        },
                        "definite": false,
                        "start": 2681,
                        "end": 2730
                      }
                    ],
                    "declare": false,
                    "start": 2675,
                    "end": 2731
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "all",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "StringEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2755,
                                "end": 2765
                              },
                              "typeArguments": null,
                              "start": 2755,
                              "end": 2765
                            },
                            "start": 2753,
                            "end": 2765
                          },
                          "start": 2750,
                          "end": 2765
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2768,
                          "end": 2769
                        },
                        "definite": false,
                        "start": 2750,
                        "end": 2769
                      }
                    ],
                    "declare": false,
                    "start": 2744,
                    "end": 2770
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2783,
                    "end": 2790
                  }
                ],
                "start": 2644,
                "end": 2790
              }
            ],
            "start": 2476,
            "end": 2796
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 2806,
              "end": 2809
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 2812,
                "end": 2818
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2819,
                      "end": 2828
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2836,
                            "end": 2837
                          },
                          "typeArguments": null,
                          "start": 2829,
                          "end": 2837
                        }
                      ],
                      "start": 2828,
                      "end": 2838
                    },
                    "start": 2819,
                    "end": 2838
                  }
                ],
                "start": 2818,
                "end": 2839
              },
              "start": 2812,
              "end": 2839
            },
            "declare": false,
            "start": 2801,
            "end": 2839
          }
        ],
        "start": 2470,
        "end": 2841
      },
      "expression": false,
      "start": 2427,
      "end": 2841
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestLiterals",
        "optional": false,
        "typeAnnotation": null,
        "start": 2852,
        "end": 2870
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2874,
              "end": 2881
            },
            "start": 2872,
            "end": 2881
          },
          "start": 2871,
          "end": 2881
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2897,
              "end": 2898
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2915,
                  "end": 2916
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2941,
                                "end": 2942
                              },
                              "start": 2941,
                              "end": 2942
                            },
                            "start": 2939,
                            "end": 2942
                          },
                          "start": 2936,
                          "end": 2942
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2945,
                          "end": 2946
                        },
                        "definite": false,
                        "start": 2936,
                        "end": 2946
                      }
                    ],
                    "declare": false,
                    "start": 2930,
                    "end": 2947
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2960,
                    "end": 2966
                  }
                ],
                "start": 2910,
                "end": 2966
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2980,
                  "end": 2981
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "two",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 3006,
                                "end": 3007
                              },
                              "start": 3006,
                              "end": 3007
                            },
                            "start": 3004,
                            "end": 3007
                          },
                          "start": 3001,
                          "end": 3007
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3010,
                          "end": 3011
                        },
                        "definite": false,
                        "start": 3001,
                        "end": 3011
                      }
                    ],
                    "declare": false,
                    "start": 2995,
                    "end": 3012
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3025,
                    "end": 3031
                  }
                ],
                "start": 2975,
                "end": 3031
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 3045,
                  "end": 3046
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "three",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 3073,
                                "end": 3074
                              },
                              "start": 3073,
                              "end": 3074
                            },
                            "start": 3071,
                            "end": 3074
                          },
                          "start": 3066,
                          "end": 3074
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3077,
                          "end": 3078
                        },
                        "definite": false,
                        "start": 3066,
                        "end": 3078
                      }
                    ],
                    "declare": false,
                    "start": 3060,
                    "end": 3079
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3092,
                    "end": 3098
                  }
                ],
                "start": 3040,
                "end": 3098
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3112,
                  "end": 3116
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 3139,
                                "end": 3143
                              },
                              "start": 3139,
                              "end": 3143
                            },
                            "start": 3137,
                            "end": 3143
                          },
                          "start": 3136,
                          "end": 3143
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3146,
                          "end": 3147
                        },
                        "definite": false,
                        "start": 3136,
                        "end": 3147
                      }
                    ],
                    "declare": false,
                    "start": 3130,
                    "end": 3148
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3161,
                    "end": 3167
                  }
                ],
                "start": 3107,
                "end": 3167
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3181,
                  "end": 3186
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 3209,
                                "end": 3214
                              },
                              "start": 3209,
                              "end": 3214
                            },
                            "start": 3207,
                            "end": 3214
                          },
                          "start": 3206,
                          "end": 3214
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3217,
                          "end": 3218
                        },
                        "definite": false,
                        "start": 3206,
                        "end": 3218
                      }
                    ],
                    "declare": false,
                    "start": 3200,
                    "end": 3219
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3232,
                    "end": 3238
                  }
                ],
                "start": 3176,
                "end": 3238
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 3252,
                  "end": 3255
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "A",
                                "raw": "\"A\"",
                                "start": 3278,
                                "end": 3281
                              },
                              "start": 3278,
                              "end": 3281
                            },
                            "start": 3276,
                            "end": 3281
                          },
                          "start": 3275,
                          "end": 3281
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3284,
                          "end": 3285
                        },
                        "definite": false,
                        "start": 3275,
                        "end": 3285
                      }
                    ],
                    "declare": false,
                    "start": 3269,
                    "end": 3286
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3299,
                    "end": 3305
                  }
                ],
                "start": 3247,
                "end": 3305
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3319,
                  "end": 3328
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undef",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUndefinedKeyword",
                              "start": 3355,
                              "end": 3364
                            },
                            "start": 3353,
                            "end": 3364
                          },
                          "start": 3348,
                          "end": 3364
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3367,
                          "end": 3368
                        },
                        "definite": false,
                        "start": 3348,
                        "end": 3368
                      }
                    ],
                    "declare": false,
                    "start": 3342,
                    "end": 3369
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3382,
                    "end": 3388
                  }
                ],
                "start": 3314,
                "end": 3388
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3402,
                  "end": 3406
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "llun",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNullKeyword",
                              "start": 3432,
                              "end": 3436
                            },
                            "start": 3430,
                            "end": 3436
                          },
                          "start": 3426,
                          "end": 3436
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3439,
                          "end": 3440
                        },
                        "definite": false,
                        "start": 3426,
                        "end": 3440
                      }
                    ],
                    "declare": false,
                    "start": 3420,
                    "end": 3441
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3454,
                    "end": 3460
                  }
                ],
                "start": 3397,
                "end": 3460
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3474,
                  "end": 3478
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherSymbol",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "symb",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3520,
                                "end": 3524
                              },
                              "typeArguments": null,
                              "start": 3513,
                              "end": 3524
                            },
                            "start": 3511,
                            "end": 3524
                          },
                          "start": 3498,
                          "end": 3524
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3527,
                          "end": 3528
                        },
                        "definite": false,
                        "start": 3498,
                        "end": 3528
                      }
                    ],
                    "declare": false,
                    "start": 3492,
                    "end": 3529
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3542,
                    "end": 3548
                  }
                ],
                "start": 3469,
                "end": 3548
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symbNonUnique",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3562,
                  "end": 3575
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nonUniqueSymbol",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSSymbolKeyword",
                              "start": 3612,
                              "end": 3618
                            },
                            "start": 3610,
                            "end": 3618
                          },
                          "start": 3595,
                          "end": 3618
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3621,
                          "end": 3622
                        },
                        "definite": false,
                        "start": 3595,
                        "end": 3622
                      }
                    ],
                    "declare": false,
                    "start": 3589,
                    "end": 3623
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3636,
                    "end": 3642
                  }
                ],
                "start": 3557,
                "end": 3642
              }
            ],
            "start": 2889,
            "end": 3648
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 3658,
              "end": 3661
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 3664,
                "end": 3670
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3671,
                      "end": 3680
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3688,
                            "end": 3689
                          },
                          "typeArguments": null,
                          "start": 3681,
                          "end": 3689
                        }
                      ],
                      "start": 3680,
                      "end": 3690
                    },
                    "start": 3671,
                    "end": 3690
                  }
                ],
                "start": 3670,
                "end": 3691
              },
              "start": 3664,
              "end": 3691
            },
            "declare": false,
            "start": 3653,
            "end": 3691
          }
        ],
        "start": 2883,
        "end": 3693
      },
      "expression": false,
      "start": 2843,
      "end": 3693
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchTestObjects",
        "optional": false,
        "typeAnnotation": null,
        "start": 3704,
        "end": 3721
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3725,
              "end": 3732
            },
            "start": 3723,
            "end": 3732
          },
          "start": 3722,
          "end": 3732
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3743,
                  "end": 3747
                },
                "start": 3740,
                "end": 3747
              },
              "start": 3737,
              "end": 3747
            },
            "start": 3735,
            "end": 3747
          },
          "start": 3734,
          "end": 3747
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3754,
                    "end": 3758
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3760,
                      "end": 3766
                    },
                    "start": 3758,
                    "end": 3766
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3754,
                  "end": 3766
                }
              ],
              "start": 3752,
              "end": 3768
            },
            "start": 3750,
            "end": 3768
          },
          "start": 3749,
          "end": 3768
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3784,
              "end": 3785
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3802,
                  "end": 3806
                },
                "consequent": [],
                "start": 3797,
                "end": 3807
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3821,
                  "end": 3826
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bool",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 3852,
                              "end": 3859
                            },
                            "start": 3850,
                            "end": 3859
                          },
                          "start": 3846,
                          "end": 3859
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3862,
                          "end": 3863
                        },
                        "definite": false,
                        "start": 3846,
                        "end": 3863
                      }
                    ],
                    "declare": false,
                    "start": 3840,
                    "end": 3864
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3877,
                    "end": 3883
                  }
                ],
                "start": 3816,
                "end": 3883
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3897,
                  "end": 3898
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSObjectKeyword",
                              "start": 3924,
                              "end": 3930
                            },
                            "start": 3922,
                            "end": 3930
                          },
                          "start": 3918,
                          "end": 3930
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3933,
                          "end": 3934
                        },
                        "definite": false,
                        "start": 3918,
                        "end": 3934
                      }
                    ],
                    "declare": false,
                    "start": 3912,
                    "end": 3935
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3948,
                    "end": 3954
                  }
                ],
                "start": 3892,
                "end": 3954
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3968,
                  "end": 3969
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSObjectKeyword",
                              "start": 3995,
                              "end": 4001
                            },
                            "start": 3993,
                            "end": 4001
                          },
                          "start": 3989,
                          "end": 4001
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4004,
                          "end": 4005
                        },
                        "definite": false,
                        "start": 3989,
                        "end": 4005
                      }
                    ],
                    "declare": false,
                    "start": 3983,
                    "end": 4006
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4019,
                    "end": 4025
                  }
                ],
                "start": 3963,
                "end": 4025
              }
            ],
            "start": 3776,
            "end": 4031
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 4041,
              "end": 4044
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4047,
                "end": 4053
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4054,
                      "end": 4063
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4071,
                            "end": 4072
                          },
                          "typeArguments": null,
                          "start": 4064,
                          "end": 4072
                        }
                      ],
                      "start": 4063,
                      "end": 4073
                    },
                    "start": 4054,
                    "end": 4073
                  }
                ],
                "start": 4053,
                "end": 4074
              },
              "start": 4047,
              "end": 4074
            },
            "declare": false,
            "start": 4036,
            "end": 4074
          }
        ],
        "start": 3770,
        "end": 4076
      },
      "expression": false,
      "start": 3695,
      "end": 4076
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 4087,
        "end": 4101
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4105,
              "end": 4112
            },
            "start": 4103,
            "end": 4112
          },
          "start": 4102,
          "end": 4112
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeResponse",
            "optional": false,
            "typeAnnotation": null,
            "start": 4115,
            "end": 4127
          },
          "typeArguments": null,
          "start": 4115,
          "end": 4127
        },
        "start": 4113,
        "end": 4127
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4142,
              "end": 4143
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 4160,
                  "end": 4165
                },
                "consequent": [],
                "start": 4155,
                "end": 4166
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 4180,
                  "end": 4184
                },
                "consequent": [],
                "start": 4175,
                "end": 4185
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "idk",
                  "raw": "'idk'",
                  "start": 4199,
                  "end": 4204
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4225,
                      "end": 4226
                    },
                    "start": 4218,
                    "end": 4227
                  }
                ],
                "start": 4194,
                "end": 4227
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4267,
                        "end": 4272
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "unknown response",
                          "raw": "'unknown response'",
                          "start": 4273,
                          "end": 4291
                        }
                      ],
                      "start": 4263,
                      "end": 4292
                    },
                    "start": 4257,
                    "end": 4293
                  }
                ],
                "start": 4236,
                "end": 4293
              }
            ],
            "start": 4134,
            "end": 4299
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 4347,
              "end": 4350
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4353,
                "end": 4359
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4360,
                      "end": 4369
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4377,
                            "end": 4378
                          },
                          "typeArguments": null,
                          "start": 4370,
                          "end": 4378
                        }
                      ],
                      "start": 4369,
                      "end": 4379
                    },
                    "start": 4360,
                    "end": 4379
                  }
                ],
                "start": 4359,
                "end": 4380
              },
              "start": 4353,
              "end": 4380
            },
            "declare": false,
            "start": 4342,
            "end": 4380
          }
        ],
        "start": 4128,
        "end": 4382
      },
      "expression": false,
      "start": 4078,
      "end": 4382
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchResponseWrong",
        "optional": false,
        "typeAnnotation": null,
        "start": 4393,
        "end": 4412
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4416,
              "end": 4423
            },
            "start": 4414,
            "end": 4423
          },
          "start": 4413,
          "end": 4423
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeResponse",
            "optional": false,
            "typeAnnotation": null,
            "start": 4426,
            "end": 4438
          },
          "typeArguments": null,
          "start": 4426,
          "end": 4438
        },
        "start": 4424,
        "end": 4438
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4453,
              "end": 4454
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 4471,
                  "end": 4476
                },
                "consequent": [],
                "start": 4466,
                "end": 4477
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 4491,
                  "end": 4495
                },
                "consequent": [],
                "start": 4486,
                "end": 4496
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "maybe",
                  "raw": "'maybe'",
                  "start": 4510,
                  "end": 4517
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4538,
                      "end": 4539
                    },
                    "start": 4531,
                    "end": 4540
                  }
                ],
                "start": 4505,
                "end": 4540
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4589,
                        "end": 4594
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Can you repeat the question?",
                          "raw": "'Can you repeat the question?'",
                          "start": 4595,
                          "end": 4625
                        }
                      ],
                      "start": 4585,
                      "end": 4626
                    },
                    "start": 4579,
                    "end": 4627
                  }
                ],
                "start": 4558,
                "end": 4627
              }
            ],
            "start": 4445,
            "end": 4633
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 4681,
              "end": 4684
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTrue",
                "optional": false,
                "typeAnnotation": null,
                "start": 4687,
                "end": 4693
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isUnknown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4694,
                      "end": 4703
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4711,
                            "end": 4712
                          },
                          "typeArguments": null,
                          "start": 4704,
                          "end": 4712
                        }
                      ],
                      "start": 4703,
                      "end": 4713
                    },
                    "start": 4694,
                    "end": 4713
                  }
                ],
                "start": 4693,
                "end": 4714
              },
              "start": 4687,
              "end": 4714
            },
            "declare": false,
            "start": 4676,
            "end": 4714
          }
        ],
        "start": 4439,
        "end": 4716
      },
      "expression": false,
      "start": 4384,
      "end": 4716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4749,
        "end": 4751
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4755,
              "end": 4762
            },
            "start": 4753,
            "end": 4762
          },
          "start": 4752,
          "end": 4762
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
          ],
          "start": 4765,
          "end": 4783
        },
        "start": 4763,
        "end": 4783
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4792,
                  "end": 4793
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4798,
                  "end": 4807
                },
                "start": 4792,
                "end": 4807
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4818,
                    "end": 4819
                  },
                  "prefix": true,
                  "start": 4811,
                  "end": 4819
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 4824,
                  "end": 4832
                },
                "start": 4811,
                "end": 4832
              },
              "start": 4792,
              "end": 4832
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4850,
                      "end": 4855
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4846,
                    "end": 4857
                  },
                  "start": 4840,
                  "end": 4858
                }
              ],
              "start": 4834,
              "end": 4862
            },
            "alternate": null,
            "start": 4788,
            "end": 4862
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4872,
              "end": 4873
            },
            "start": 4865,
            "end": 4874
          }
        ],
        "start": 4784,
        "end": 4876
      },
      "expression": false,
      "start": 4740,
      "end": 4876
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notNotEquals",
        "optional": false,
        "typeAnnotation": null,
        "start": 4887,
        "end": 4899
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4903,
              "end": 4910
            },
            "start": 4901,
            "end": 4910
          },
          "start": 4900,
          "end": 4910
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 4923,
                "end": 4924
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 4929,
                "end": 4939
              },
              "start": 4923,
              "end": 4939
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 4941,
              "end": 4944
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSObjectKeyword",
                            "start": 4973,
                            "end": 4979
                          },
                          "start": 4971,
                          "end": 4979
                        },
                        "start": 4970,
                        "end": 4979
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4982,
                        "end": 4983
                      },
                      "definite": false,
                      "start": 4970,
                      "end": 4983
                    }
                  ],
                  "declare": false,
                  "start": 4964,
                  "end": 4984
                }
              ],
              "start": 4954,
              "end": 4990
            },
            "start": 4919,
            "end": 4990
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 5000,
                "end": 5001
              },
              "operator": "!==",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5006,
                  "end": 5016
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5017,
                  "end": 5018
                },
                "optional": false,
                "computed": false,
                "start": 5006,
                "end": 5018
              },
              "start": 5000,
              "end": 5018
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 5020,
              "end": 5023
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NumberEnum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5052,
                                "end": 5062
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5063,
                                "end": 5064
                              },
                              "start": 5052,
                              "end": 5064
                            },
                            "typeArguments": null,
                            "start": 5052,
                            "end": 5064
                          },
                          "start": 5050,
                          "end": 5064
                        },
                        "start": 5049,
                        "end": 5064
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5067,
                        "end": 5068
                      },
                      "definite": false,
                      "start": 5049,
                      "end": 5068
                    }
                  ],
                  "declare": false,
                  "start": 5043,
                  "end": 5069
                }
              ],
              "start": 5033,
              "end": 5075
            },
            "start": 4996,
            "end": 5075
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5086,
                    "end": 5087
                  },
                  "operator": "!==",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5092,
                      "end": 5102
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5103,
                      "end": 5104
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5092,
                    "end": 5104
                  },
                  "start": 5086,
                  "end": 5104
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5108,
                    "end": 5109
                  },
                  "operator": "!==",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumberEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5114,
                      "end": 5124
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5125,
                      "end": 5126
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5114,
                    "end": 5126
                  },
                  "start": 5108,
                  "end": 5126
                },
                "start": 5086,
                "end": 5126
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5130,
                  "end": 5131
                },
                "operator": "!==",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5136,
                    "end": 5146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5147,
                    "end": 5148
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5136,
                  "end": 5148
                },
                "start": 5130,
                "end": 5148
              },
              "start": 5086,
              "end": 5148
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 5150,
              "end": 5153
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aOrB",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5185,
                                    "end": 5195
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5196,
                                    "end": 5197
                                  },
                                  "start": 5185,
                                  "end": 5197
                                },
                                "typeArguments": null,
                                "start": 5185,
                                "end": 5197
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5200,
                                    "end": 5210
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5211,
                                    "end": 5212
                                  },
                                  "start": 5200,
                                  "end": 5212
                                },
                                "typeArguments": null,
                                "start": 5200,
                                "end": 5212
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5215,
                                    "end": 5225
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5226,
                                    "end": 5227
                                  },
                                  "start": 5215,
                                  "end": 5227
                                },
                                "typeArguments": null,
                                "start": 5215,
                                "end": 5227
                              }
                            ],
                            "start": 5185,
                            "end": 5227
                          },
                          "start": 5183,
                          "end": 5227
                        },
                        "start": 5179,
                        "end": 5227
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5231,
                        "end": 5232
                      },
                      "definite": false,
                      "start": 5179,
                      "end": 5232
                    }
                  ],
                  "declare": false,
                  "start": 5173,
                  "end": 5233
                }
              ],
              "start": 5163,
              "end": 5239
            },
            "start": 5082,
            "end": 5239
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5272,
                      "end": 5273
                    },
                    "operator": "===",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5278,
                        "end": 5288
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5289,
                        "end": 5290
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5278,
                      "end": 5290
                    },
                    "start": 5272,
                    "end": 5290
                  },
                  "operator": "||",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5294,
                      "end": 5295
                    },
                    "operator": "===",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NumberEnum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5300,
                        "end": 5310
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5311,
                        "end": 5312
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5300,
                      "end": 5312
                    },
                    "start": 5294,
                    "end": 5312
                  },
                  "start": 5272,
                  "end": 5312
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5316,
                    "end": 5317
                  },
                  "operator": "===",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StringEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5322,
                      "end": 5332
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5333,
                      "end": 5334
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5322,
                    "end": 5334
                  },
                  "start": 5316,
                  "end": 5334
                },
                "start": 5272,
                "end": 5334
              },
              "prefix": true,
              "start": 5270,
              "end": 5335
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 5337,
              "end": 5340
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aOrB",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5372,
                                    "end": 5382
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5383,
                                    "end": 5384
                                  },
                                  "start": 5372,
                                  "end": 5384
                                },
                                "typeArguments": null,
                                "start": 5372,
                                "end": 5384
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "NumberEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5387,
                                    "end": 5397
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5398,
                                    "end": 5399
                                  },
                                  "start": 5387,
                                  "end": 5399
                                },
                                "typeArguments": null,
                                "start": 5387,
                                "end": 5399
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "StringEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5402,
                                    "end": 5412
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5413,
                                    "end": 5414
                                  },
                                  "start": 5402,
                                  "end": 5414
                                },
                                "typeArguments": null,
                                "start": 5402,
                                "end": 5414
                              }
                            ],
                            "start": 5372,
                            "end": 5414
                          },
                          "start": 5370,
                          "end": 5414
                        },
                        "start": 5366,
                        "end": 5414
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5418,
                        "end": 5419
                      },
                      "definite": false,
                      "start": 5366,
                      "end": 5419
                    }
                  ],
                  "declare": false,
                  "start": 5360,
                  "end": 5420
                }
              ],
              "start": 5350,
              "end": 5426
            },
            "start": 5266,
            "end": 5426
          }
        ],
        "start": 4913,
        "end": 5428
      },
      "expression": false,
      "start": 4878,
      "end": 5428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5432
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 5,
    "end": 14,
    "range": [
      5,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 28,
    "end": 35,
    "range": [
      28,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 40,
    "end": 44,
    "range": [
      40,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
    "end": 58,
    "range": [
      54,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 88,
    "end": 92,
    "range": [
      88,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeResponse",
    "start": 93,
    "end": 105,
    "range": [
      93,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 108,
    "end": 113,
    "range": [
      108,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "String",
    "value": "'idk'",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 134,
    "end": 142,
    "range": [
      134,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 148,
    "end": 155,
    "range": [
      148,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 157,
    "end": 159,
    "range": [
      157,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeResponse",
    "start": 160,
    "end": 172,
    "range": [
      160,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179,
    "range": [
      177,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 183,
    "end": 186,
    "range": [
      183,
      186
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 187,
    "end": 192,
    "range": [
      187,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 202,
    "end": 206,
    "range": [
      202,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "String",
    "value": "'idk'",
    "start": 214,
    "end": 219,
    "range": [
      214,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 234,
    "end": 239,
    "range": [
      234,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 253,
    "end": 262,
    "range": [
      253,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "symb",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 285,
    "end": 291,
    "range": [
      285,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 292,
    "end": 298,
    "range": [
      292,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 300,
    "end": 307,
    "range": [
      300,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "symbNonUnique",
    "start": 314,
    "end": 327,
    "range": [
      314,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 329,
    "end": 335,
    "range": [
      329,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362,
    "range": [
      357,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 369,
    "end": 377,
    "range": [
      369,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 378,
    "end": 380,
    "range": [
      378,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 392,
    "end": 395,
    "range": [
      392,
      395
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 396,
    "end": 400,
    "range": [
      396,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 401,
    "end": 403,
    "range": [
      401,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428,
    "range": [
      423,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "someBool",
    "start": 429,
    "end": 437,
    "range": [
      429,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 439,
    "end": 446,
    "range": [
      439,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 455,
    "end": 457,
    "range": [
      455,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 465,
    "end": 474,
    "range": [
      465,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 482,
    "end": 487,
    "range": [
      482,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "undef",
    "start": 488,
    "end": 493,
    "range": [
      488,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 495,
    "end": 504,
    "range": [
      495,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 513,
    "end": 515,
    "range": [
      513,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 535,
    "end": 540,
    "range": [
      535,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "someNull",
    "start": 541,
    "end": 549,
    "range": [
      541,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 551,
    "end": 555,
    "range": [
      551,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 564,
    "end": 566,
    "range": [
      564,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "symb",
    "start": 574,
    "end": 578,
    "range": [
      574,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 586,
    "end": 591,
    "range": [
      586,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "symbolAlias",
    "start": 592,
    "end": 603,
    "range": [
      592,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 605,
    "end": 611,
    "range": [
      605,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "symb",
    "start": 612,
    "end": 616,
    "range": [
      612,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 625,
    "end": 627,
    "range": [
      625,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 637,
    "end": 639,
    "range": [
      637,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 648,
    "end": 652,
    "range": [
      648,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 657,
    "end": 663,
    "range": [
      657,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 664,
    "end": 673,
    "range": [
      664,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 674,
    "end": 680,
    "range": [
      674,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 688,
    "end": 690,
    "range": [
      688,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 694,
    "end": 697,
    "range": [
      694,
      697
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 698,
    "end": 700,
    "range": [
      698,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 708,
    "end": 712,
    "range": [
      708,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 717,
    "end": 723,
    "range": [
      717,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 724,
    "end": 733,
    "range": [
      724,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 734,
    "end": 740,
    "range": [
      734,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 748,
    "end": 750,
    "range": [
      748,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 754,
    "end": 756,
    "range": [
      754,
      756
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 757,
    "end": 759,
    "range": [
      757,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 767,
    "end": 771,
    "range": [
      767,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 776,
    "end": 782,
    "range": [
      776,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 783,
    "end": 792,
    "range": [
      783,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 793,
    "end": 799,
    "range": [
      793,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 807,
    "end": 809,
    "range": [
      807,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 813,
    "end": 815,
    "range": [
      813,
      815
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 816,
    "end": 820,
    "range": [
      816,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 828,
    "end": 832,
    "range": [
      828,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 844,
    "end": 853,
    "range": [
      844,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 854,
    "end": 860,
    "range": [
      854,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 868,
    "end": 870,
    "range": [
      868,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 874,
    "end": 876,
    "range": [
      874,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 877,
    "end": 883,
    "range": [
      877,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 891,
    "end": 895,
    "range": [
      891,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 900,
    "end": 906,
    "range": [
      900,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 907,
    "end": 916,
    "range": [
      907,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 931,
    "end": 938,
    "range": [
      931,
      938
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 939,
    "end": 944,
    "range": [
      939,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "aString",
    "start": 945,
    "end": 952,
    "range": [
      945,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 954,
    "end": 960,
    "range": [
      954,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 962,
    "end": 969,
    "range": [
      962,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 970,
    "end": 975,
    "range": [
      970,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "aBoolean",
    "start": 976,
    "end": 984,
    "range": [
      976,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 986,
    "end": 993,
    "range": [
      986,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 995,
    "end": 1002,
    "range": [
      995,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1003,
    "end": 1008,
    "range": [
      1003,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 1009,
    "end": 1016,
    "range": [
      1009,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1018,
    "end": 1024,
    "range": [
      1018,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1026,
    "end": 1033,
    "range": [
      1026,
      1033
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1034,
    "end": 1039,
    "range": [
      1034,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "anObject",
    "start": 1040,
    "end": 1048,
    "range": [
      1040,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1050,
    "end": 1056,
    "range": [
      1050,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1058,
    "end": 1065,
    "range": [
      1058,
      1065
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1066,
    "end": 1071,
    "range": [
      1066,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "anObjectLiteral",
    "start": 1072,
    "end": 1087,
    "range": [
      1072,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1094,
    "end": 1100,
    "range": [
      1094,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1104,
    "end": 1111,
    "range": [
      1104,
      1111
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1112,
    "end": 1117,
    "range": [
      1112,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "aUnion",
    "start": 1118,
    "end": 1124,
    "range": [
      1118,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1131,
    "end": 1137,
    "range": [
      1131,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1147,
    "end": 1153,
    "range": [
      1147,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1157,
    "end": 1164,
    "range": [
      1157,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1165,
    "end": 1170,
    "range": [
      1165,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "anIntersection",
    "start": 1171,
    "end": 1185,
    "range": [
      1171,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1192,
    "end": 1198,
    "range": [
      1192,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1208,
    "end": 1214,
    "range": [
      1208,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1218,
    "end": 1225,
    "range": [
      1218,
      1225
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1226,
    "end": 1231,
    "range": [
      1226,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 1232,
    "end": 1241,
    "range": [
      1232,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1246,
    "end": 1248,
    "range": [
      1246,
      1248
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1249,
    "end": 1255,
    "range": [
      1249,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1258,
    "end": 1260,
    "range": [
      1258,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1264,
    "end": 1267,
    "range": [
      1264,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "aString",
    "start": 1268,
    "end": 1275,
    "range": [
      1268,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1283,
    "end": 1286,
    "range": [
      1283,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "uString",
    "start": 1287,
    "end": 1294,
    "range": [
      1287,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1296,
    "end": 1302,
    "range": [
      1296,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1311,
    "end": 1313,
    "range": [
      1311,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1317,
    "end": 1320,
    "range": [
      1317,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "aBoolean",
    "start": 1321,
    "end": 1329,
    "range": [
      1321,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1337,
    "end": 1340,
    "range": [
      1337,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "uString",
    "start": 1341,
    "end": 1348,
    "range": [
      1341,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1350,
    "end": 1357,
    "range": [
      1350,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1366,
    "end": 1368,
    "range": [
      1366,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1372,
    "end": 1375,
    "range": [
      1372,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 1376,
    "end": 1383,
    "range": [
      1376,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "uNumber",
    "start": 1395,
    "end": 1402,
    "range": [
      1395,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1404,
    "end": 1410,
    "range": [
      1404,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1419,
    "end": 1421,
    "range": [
      1419,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1425,
    "end": 1428,
    "range": [
      1425,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "anObject",
    "start": 1429,
    "end": 1437,
    "range": [
      1429,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1445,
    "end": 1448,
    "range": [
      1445,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "uObject",
    "start": 1449,
    "end": 1456,
    "range": [
      1449,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1458,
    "end": 1464,
    "range": [
      1458,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1473,
    "end": 1475,
    "range": [
      1473,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1479,
    "end": 1482,
    "range": [
      1479,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "anObjectLiteral",
    "start": 1483,
    "end": 1498,
    "range": [
      1483,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1506,
    "end": 1509,
    "range": [
      1506,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "uObjectLiteral",
    "start": 1510,
    "end": 1524,
    "range": [
      1510,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1526,
    "end": 1532,
    "range": [
      1526,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1541,
    "end": 1543,
    "range": [
      1541,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "aUnion",
    "start": 1551,
    "end": 1557,
    "range": [
      1551,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1565,
    "end": 1569,
    "range": [
      1565,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "unionDoesNotNarrow",
    "start": 1570,
    "end": 1588,
    "range": [
      1570,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 1591,
    "end": 1597,
    "range": [
      1591,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 1598,
    "end": 1607,
    "range": [
      1598,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1608,
    "end": 1614,
    "range": [
      1608,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1622,
    "end": 1624,
    "range": [
      1622,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1628,
    "end": 1631,
    "range": [
      1628,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "anIntersection",
    "start": 1632,
    "end": 1646,
    "range": [
      1632,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1654,
    "end": 1658,
    "range": [
      1654,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "intersectionDoesNotNarrow",
    "start": 1659,
    "end": 1684,
    "range": [
      1659,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 1687,
    "end": 1693,
    "range": [
      1687,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 1694,
    "end": 1703,
    "range": [
      1694,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1704,
    "end": 1710,
    "range": [
      1704,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1718,
    "end": 1720,
    "range": [
      1718,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1724,
    "end": 1727,
    "range": [
      1724,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 1728,
    "end": 1737,
    "range": [
      1728,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1745,
    "end": 1748,
    "range": [
      1745,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "uFunction",
    "start": 1749,
    "end": 1758,
    "range": [
      1749,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1760,
    "end": 1766,
    "range": [
      1760,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1775,
    "end": 1779,
    "range": [
      1775,
      1779
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 1780,
    "end": 1790,
    "range": [
      1780,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1816,
    "end": 1820,
    "range": [
      1816,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 1821,
    "end": 1831,
    "range": [
      1821,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1842,
    "end": 1845,
    "range": [
      1842,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 1855,
    "end": 1858,
    "range": [
      1855,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 1868,
    "end": 1871,
    "range": [
      1868,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1875,
    "end": 1877,
    "range": [
      1875,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1881,
    "end": 1884,
    "range": [
      1881,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 1885,
    "end": 1895,
    "range": [
      1885,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1896,
    "end": 1898,
    "range": [
      1896,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1901,
    "end": 1904,
    "range": [
      1901,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 1905,
    "end": 1915,
    "range": [
      1905,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1923,
    "end": 1926,
    "range": [
      1923,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "enumObj",
    "start": 1927,
    "end": 1934,
    "range": [
      1927,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1936,
    "end": 1942,
    "range": [
      1936,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1951,
    "end": 1953,
    "range": [
      1951,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1957,
    "end": 1960,
    "range": [
      1957,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 1961,
    "end": 1971,
    "range": [
      1961,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1981,
    "end": 1984,
    "range": [
      1981,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 1988,
    "end": 1998,
    "range": [
      1988,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2008,
    "end": 2010,
    "range": [
      2008,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2014,
    "end": 2017,
    "range": [
      2014,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2018,
    "end": 2028,
    "range": [
      2018,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2038,
    "end": 2041,
    "range": [
      2038,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2045,
    "end": 2055,
    "range": [
      2045,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2065,
    "end": 2073,
    "range": [
      2065,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "switchTestEnum",
    "start": 2074,
    "end": 2088,
    "range": [
      2074,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2092,
    "end": 2099,
    "range": [
      2092,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2107,
    "end": 2113,
    "range": [
      2107,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2128,
    "end": 2132,
    "range": [
      2128,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2133,
    "end": 2143,
    "range": [
      2133,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2159,
    "end": 2164,
    "range": [
      2159,
      2164
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2168,
    "end": 2178,
    "range": [
      2168,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2198,
    "end": 2203,
    "range": [
      2198,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2213,
    "end": 2217,
    "range": [
      2213,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2218,
    "end": 2228,
    "range": [
      2218,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2244,
    "end": 2249,
    "range": [
      2244,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2253,
    "end": 2263,
    "range": [
      2253,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2283,
    "end": 2288,
    "range": [
      2283,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2298,
    "end": 2302,
    "range": [
      2298,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2303,
    "end": 2313,
    "range": [
      2303,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2329,
    "end": 2334,
    "range": [
      2329,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2338,
    "end": 2348,
    "range": [
      2338,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2368,
    "end": 2373,
    "range": [
      2368,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2385,
    "end": 2389,
    "range": [
      2385,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 2390,
    "end": 2393,
    "range": [
      2390,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 2396,
    "end": 2402,
    "range": [
      2396,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 2403,
    "end": 2412,
    "range": [
      2403,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2413,
    "end": 2419,
    "range": [
      2413,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2427,
    "end": 2435,
    "range": [
      2427,
      2435
    ]
  },
  {
    "type": "Identifier",
    "value": "switchTestCollectEnum",
    "start": 2436,
    "end": 2457,
    "range": [
      2436,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2461,
    "end": 2468,
    "range": [
      2461,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2476,
    "end": 2482,
    "range": [
      2476,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2497,
    "end": 2501,
    "range": [
      2497,
      2501
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2502,
    "end": 2512,
    "range": [
      2502,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2528,
    "end": 2533,
    "range": [
      2528,
      2533
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2537,
    "end": 2547,
    "range": [
      2537,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2563,
    "end": 2567,
    "range": [
      2563,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2568,
    "end": 2578,
    "range": [
      2568,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2594,
    "end": 2599,
    "range": [
      2594,
      2599
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2603,
    "end": 2613,
    "range": [
      2603,
      2613
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2618,
    "end": 2628,
    "range": [
      2618,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2628,
    "end": 2629,
    "range": [
      2628,
      2629
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2644,
    "end": 2648,
    "range": [
      2644,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2649,
    "end": 2659,
    "range": [
      2649,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2675,
    "end": 2680,
    "range": [
      2675,
      2680
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2684,
    "end": 2694,
    "range": [
      2684,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2699,
    "end": 2709,
    "range": [
      2699,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2714,
    "end": 2724,
    "range": [
      2714,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2744,
    "end": 2749,
    "range": [
      2744,
      2749
    ]
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2750,
    "end": 2753,
    "range": [
      2750,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 2755,
    "end": 2765,
    "range": [
      2755,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2783,
    "end": 2789,
    "range": [
      2783,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2801,
    "end": 2805,
    "range": [
      2801,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 2806,
    "end": 2809,
    "range": [
      2806,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 2812,
    "end": 2818,
    "range": [
      2812,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 2819,
    "end": 2828,
    "range": [
      2819,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2829,
    "end": 2835,
    "range": [
      2829,
      2835
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2843,
    "end": 2851,
    "range": [
      2843,
      2851
    ]
  },
  {
    "type": "Identifier",
    "value": "switchTestLiterals",
    "start": 2852,
    "end": 2870,
    "range": [
      2852,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871,
    "range": [
      2870,
      2871
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2874,
    "end": 2881,
    "range": [
      2874,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2889,
    "end": 2895,
    "range": [
      2889,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2896,
    "end": 2897,
    "range": [
      2896,
      2897
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2910,
    "end": 2914,
    "range": [
      2910,
      2914
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2930,
    "end": 2935,
    "range": [
      2930,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 2936,
    "end": 2939,
    "range": [
      2936,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2960,
    "end": 2965,
    "range": [
      2960,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2975,
    "end": 2979,
    "range": [
      2975,
      2979
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2995,
    "end": 3000,
    "range": [
      2995,
      3000
    ]
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 3001,
    "end": 3004,
    "range": [
      3001,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3011,
    "end": 3012,
    "range": [
      3011,
      3012
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3025,
    "end": 3030,
    "range": [
      3025,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3040,
    "end": 3044,
    "range": [
      3040,
      3044
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3060,
    "end": 3065,
    "range": [
      3060,
      3065
    ]
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 3066,
    "end": 3071,
    "range": [
      3066,
      3071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3092,
    "end": 3097,
    "range": [
      3092,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3107,
    "end": 3111,
    "range": [
      3107,
      3111
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3112,
    "end": 3116,
    "range": [
      3112,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3130,
    "end": 3135,
    "range": [
      3130,
      3135
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3139,
    "end": 3143,
    "range": [
      3139,
      3143
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3161,
    "end": 3166,
    "range": [
      3161,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3176,
    "end": 3180,
    "range": [
      3176,
      3180
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3181,
    "end": 3186,
    "range": [
      3181,
      3186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3186,
    "end": 3187,
    "range": [
      3186,
      3187
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3200,
    "end": 3205,
    "range": [
      3200,
      3205
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3209,
    "end": 3214,
    "range": [
      3209,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3232,
    "end": 3237,
    "range": [
      3232,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3247,
    "end": 3251,
    "range": [
      3247,
      3251
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 3252,
    "end": 3255,
    "range": [
      3252,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3269,
    "end": 3274,
    "range": [
      3269,
      3274
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 3278,
    "end": 3281,
    "range": [
      3278,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3285,
    "end": 3286,
    "range": [
      3285,
      3286
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3299,
    "end": 3304,
    "range": [
      3299,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3314,
    "end": 3318,
    "range": [
      3314,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3319,
    "end": 3328,
    "range": [
      3319,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3342,
    "end": 3347,
    "range": [
      3342,
      3347
    ]
  },
  {
    "type": "Identifier",
    "value": "undef",
    "start": 3348,
    "end": 3353,
    "range": [
      3348,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3355,
    "end": 3364,
    "range": [
      3355,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3382,
    "end": 3387,
    "range": [
      3382,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3397,
    "end": 3401,
    "range": [
      3397,
      3401
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3402,
    "end": 3406,
    "range": [
      3402,
      3406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3406,
    "end": 3407,
    "range": [
      3406,
      3407
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3420,
    "end": 3425,
    "range": [
      3420,
      3425
    ]
  },
  {
    "type": "Identifier",
    "value": "llun",
    "start": 3426,
    "end": 3430,
    "range": [
      3426,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3432,
    "end": 3436,
    "range": [
      3432,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3439,
    "end": 3440,
    "range": [
      3439,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3454,
    "end": 3459,
    "range": [
      3454,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3469,
    "end": 3473,
    "range": [
      3469,
      3473
    ]
  },
  {
    "type": "Identifier",
    "value": "symb",
    "start": 3474,
    "end": 3478,
    "range": [
      3474,
      3478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3492,
    "end": 3497,
    "range": [
      3492,
      3497
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherSymbol",
    "start": 3498,
    "end": 3511,
    "range": [
      3498,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3513,
    "end": 3519,
    "range": [
      3513,
      3519
    ]
  },
  {
    "type": "Identifier",
    "value": "symb",
    "start": 3520,
    "end": 3524,
    "range": [
      3520,
      3524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3525,
    "end": 3526,
    "range": [
      3525,
      3526
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3542,
    "end": 3547,
    "range": [
      3542,
      3547
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3547,
    "end": 3548,
    "range": [
      3547,
      3548
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3557,
    "end": 3561,
    "range": [
      3557,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "symbNonUnique",
    "start": 3562,
    "end": 3575,
    "range": [
      3562,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3589,
    "end": 3594,
    "range": [
      3589,
      3594
    ]
  },
  {
    "type": "Identifier",
    "value": "nonUniqueSymbol",
    "start": 3595,
    "end": 3610,
    "range": [
      3595,
      3610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3610,
    "end": 3611,
    "range": [
      3610,
      3611
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3612,
    "end": 3618,
    "range": [
      3612,
      3618
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3619,
    "end": 3620,
    "range": [
      3619,
      3620
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3636,
    "end": 3641,
    "range": [
      3636,
      3641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3653,
    "end": 3657,
    "range": [
      3653,
      3657
    ]
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 3658,
    "end": 3661,
    "range": [
      3658,
      3661
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3662,
    "end": 3663,
    "range": [
      3662,
      3663
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 3664,
    "end": 3670,
    "range": [
      3664,
      3670
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 3671,
    "end": 3680,
    "range": [
      3671,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3680,
    "end": 3681,
    "range": [
      3680,
      3681
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3681,
    "end": 3687,
    "range": [
      3681,
      3687
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3692,
    "end": 3693,
    "range": [
      3692,
      3693
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3695,
    "end": 3703,
    "range": [
      3695,
      3703
    ]
  },
  {
    "type": "Identifier",
    "value": "switchTestObjects",
    "start": 3704,
    "end": 3721,
    "range": [
      3704,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3722,
    "end": 3723,
    "range": [
      3722,
      3723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3723,
    "end": 3724,
    "range": [
      3723,
      3724
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3725,
    "end": 3732,
    "range": [
      3725,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3732,
    "end": 3733,
    "range": [
      3732,
      3733
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3738,
    "end": 3739,
    "range": [
      3738,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3740,
    "end": 3742,
    "range": [
      3740,
      3742
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3743,
    "end": 3747,
    "range": [
      3743,
      3747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 3754,
    "end": 3758,
    "range": [
      3754,
      3758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3760,
    "end": 3766,
    "range": [
      3760,
      3766
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3767,
    "end": 3768,
    "range": [
      3767,
      3768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3770,
    "end": 3771,
    "range": [
      3770,
      3771
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3776,
    "end": 3782,
    "range": [
      3776,
      3782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3797,
    "end": 3801,
    "range": [
      3797,
      3801
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3802,
    "end": 3806,
    "range": [
      3802,
      3806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3806,
    "end": 3807,
    "range": [
      3806,
      3807
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3816,
    "end": 3820,
    "range": [
      3816,
      3820
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3821,
    "end": 3826,
    "range": [
      3821,
      3826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3826,
    "end": 3827,
    "range": [
      3826,
      3827
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3840,
    "end": 3845,
    "range": [
      3840,
      3845
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 3846,
    "end": 3850,
    "range": [
      3846,
      3850
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3850,
    "end": 3851,
    "range": [
      3850,
      3851
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3852,
    "end": 3859,
    "range": [
      3852,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3877,
    "end": 3882,
    "range": [
      3877,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3892,
    "end": 3896,
    "range": [
      3892,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3912,
    "end": 3917,
    "range": [
      3912,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 3918,
    "end": 3922,
    "range": [
      3918,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3922,
    "end": 3923,
    "range": [
      3922,
      3923
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3924,
    "end": 3930,
    "range": [
      3924,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3931,
    "end": 3932,
    "range": [
      3931,
      3932
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3933,
    "end": 3934,
    "range": [
      3933,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3948,
    "end": 3953,
    "range": [
      3948,
      3953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3953,
    "end": 3954,
    "range": [
      3953,
      3954
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3963,
    "end": 3967,
    "range": [
      3963,
      3967
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3983,
    "end": 3988,
    "range": [
      3983,
      3988
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 3989,
    "end": 3993,
    "range": [
      3989,
      3993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3993,
    "end": 3994,
    "range": [
      3993,
      3994
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3995,
    "end": 4001,
    "range": [
      3995,
      4001
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4002,
    "end": 4003,
    "range": [
      4002,
      4003
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4004,
    "end": 4005,
    "range": [
      4004,
      4005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4005,
    "end": 4006,
    "range": [
      4005,
      4006
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4019,
    "end": 4024,
    "range": [
      4019,
      4024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4024,
    "end": 4025,
    "range": [
      4024,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4036,
    "end": 4040,
    "range": [
      4036,
      4040
    ]
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4041,
    "end": 4044,
    "range": [
      4041,
      4044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4045,
    "end": 4046,
    "range": [
      4045,
      4046
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 4047,
    "end": 4053,
    "range": [
      4047,
      4053
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4053,
    "end": 4054,
    "range": [
      4053,
      4054
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 4054,
    "end": 4063,
    "range": [
      4054,
      4063
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4063,
    "end": 4064,
    "range": [
      4063,
      4064
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4064,
    "end": 4070,
    "range": [
      4064,
      4070
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4071,
    "end": 4072,
    "range": [
      4071,
      4072
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4072,
    "end": 4073,
    "range": [
      4072,
      4073
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4073,
    "end": 4074,
    "range": [
      4073,
      4074
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4075,
    "end": 4076,
    "range": [
      4075,
      4076
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4078,
    "end": 4086,
    "range": [
      4078,
      4086
    ]
  },
  {
    "type": "Identifier",
    "value": "switchResponse",
    "start": 4087,
    "end": 4101,
    "range": [
      4087,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4102,
    "end": 4103,
    "range": [
      4102,
      4103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4105,
    "end": 4112,
    "range": [
      4105,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeResponse",
    "start": 4115,
    "end": 4127,
    "range": [
      4115,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4134,
    "end": 4140,
    "range": [
      4134,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4141,
    "end": 4142,
    "range": [
      4141,
      4142
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4143,
    "end": 4144,
    "range": [
      4143,
      4144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4155,
    "end": 4159,
    "range": [
      4155,
      4159
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 4160,
    "end": 4165,
    "range": [
      4160,
      4165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4165,
    "end": 4166,
    "range": [
      4165,
      4166
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4175,
    "end": 4179,
    "range": [
      4175,
      4179
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 4180,
    "end": 4184,
    "range": [
      4180,
      4184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4184,
    "end": 4185,
    "range": [
      4184,
      4185
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4194,
    "end": 4198,
    "range": [
      4194,
      4198
    ]
  },
  {
    "type": "String",
    "value": "'idk'",
    "start": 4199,
    "end": 4204,
    "range": [
      4199,
      4204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4218,
    "end": 4224,
    "range": [
      4218,
      4224
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4225,
    "end": 4226,
    "range": [
      4225,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 4236,
    "end": 4243,
    "range": [
      4236,
      4243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 4257,
    "end": 4262,
    "range": [
      4257,
      4262
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4263,
    "end": 4266,
    "range": [
      4263,
      4266
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 4267,
    "end": 4272,
    "range": [
      4267,
      4272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "String",
    "value": "'unknown response'",
    "start": 4273,
    "end": 4291,
    "range": [
      4273,
      4291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4291,
    "end": 4292,
    "range": [
      4291,
      4292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4292,
    "end": 4293,
    "range": [
      4292,
      4293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4298,
    "end": 4299,
    "range": [
      4298,
      4299
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4342,
    "end": 4346,
    "range": [
      4342,
      4346
    ]
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4347,
    "end": 4350,
    "range": [
      4347,
      4350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4351,
    "end": 4352,
    "range": [
      4351,
      4352
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 4353,
    "end": 4359,
    "range": [
      4353,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4359,
    "end": 4360,
    "range": [
      4359,
      4360
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 4360,
    "end": 4369,
    "range": [
      4360,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4370,
    "end": 4376,
    "range": [
      4370,
      4376
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4379,
    "end": 4380,
    "range": [
      4379,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4381,
    "end": 4382,
    "range": [
      4381,
      4382
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4384,
    "end": 4392,
    "range": [
      4384,
      4392
    ]
  },
  {
    "type": "Identifier",
    "value": "switchResponseWrong",
    "start": 4393,
    "end": 4412,
    "range": [
      4393,
      4412
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4412,
    "end": 4413,
    "range": [
      4412,
      4413
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4413,
    "end": 4414,
    "range": [
      4413,
      4414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4414,
    "end": 4415,
    "range": [
      4414,
      4415
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4416,
    "end": 4423,
    "range": [
      4416,
      4423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4423,
    "end": 4424,
    "range": [
      4423,
      4424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4424,
    "end": 4425,
    "range": [
      4424,
      4425
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeResponse",
    "start": 4426,
    "end": 4438,
    "range": [
      4426,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4445,
    "end": 4451,
    "range": [
      4445,
      4451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4453,
    "end": 4454,
    "range": [
      4453,
      4454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4454,
    "end": 4455,
    "range": [
      4454,
      4455
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4456,
    "end": 4457,
    "range": [
      4456,
      4457
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4466,
    "end": 4470,
    "range": [
      4466,
      4470
    ]
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 4471,
    "end": 4476,
    "range": [
      4471,
      4476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4476,
    "end": 4477,
    "range": [
      4476,
      4477
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4486,
    "end": 4490,
    "range": [
      4486,
      4490
    ]
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 4491,
    "end": 4495,
    "range": [
      4491,
      4495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4505,
    "end": 4509,
    "range": [
      4505,
      4509
    ]
  },
  {
    "type": "String",
    "value": "'maybe'",
    "start": 4510,
    "end": 4517,
    "range": [
      4510,
      4517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4517,
    "end": 4518,
    "range": [
      4517,
      4518
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4531,
    "end": 4537,
    "range": [
      4531,
      4537
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4538,
    "end": 4539,
    "range": [
      4538,
      4539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4539,
    "end": 4540,
    "range": [
      4539,
      4540
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 4558,
    "end": 4565,
    "range": [
      4558,
      4565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4565,
    "end": 4566,
    "range": [
      4565,
      4566
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 4579,
    "end": 4584,
    "range": [
      4579,
      4584
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4585,
    "end": 4588,
    "range": [
      4585,
      4588
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 4589,
    "end": 4594,
    "range": [
      4589,
      4594
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4594,
    "end": 4595,
    "range": [
      4594,
      4595
    ]
  },
  {
    "type": "String",
    "value": "'Can you repeat the question?'",
    "start": 4595,
    "end": 4625,
    "range": [
      4595,
      4625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4626,
    "end": 4627,
    "range": [
      4626,
      4627
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4676,
    "end": 4680,
    "range": [
      4676,
      4680
    ]
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4681,
    "end": 4684,
    "range": [
      4681,
      4684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Identifier",
    "value": "isTrue",
    "start": 4687,
    "end": 4693,
    "range": [
      4687,
      4693
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4693,
    "end": 4694,
    "range": [
      4693,
      4694
    ]
  },
  {
    "type": "Identifier",
    "value": "isUnknown",
    "start": 4694,
    "end": 4703,
    "range": [
      4694,
      4703
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4703,
    "end": 4704,
    "range": [
      4703,
      4704
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4704,
    "end": 4710,
    "range": [
      4704,
      4710
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4715,
    "end": 4716,
    "range": [
      4715,
      4716
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4740,
    "end": 4748,
    "range": [
      4740,
      4748
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 4749,
    "end": 4751,
    "range": [
      4749,
      4751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4751,
    "end": 4752,
    "range": [
      4751,
      4752
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4752,
    "end": 4753,
    "range": [
      4752,
      4753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4753,
    "end": 4754,
    "range": [
      4753,
      4754
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4755,
    "end": 4762,
    "range": [
      4755,
      4762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4762,
    "end": 4763,
    "range": [
      4762,
      4763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4763,
    "end": 4764,
    "range": [
      4763,
      4764
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4765,
    "end": 4771,
    "range": [
      4765,
      4771
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4772,
    "end": 4773,
    "range": [
      4772,
      4773
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4774,
    "end": 4783,
    "range": [
      4774,
      4783
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4784,
    "end": 4785,
    "range": [
      4784,
      4785
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4788,
    "end": 4790,
    "range": [
      4788,
      4790
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4791,
    "end": 4792,
    "range": [
      4791,
      4792
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4792,
    "end": 4793,
    "range": [
      4792,
      4793
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4794,
    "end": 4797,
    "range": [
      4794,
      4797
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4798,
    "end": 4807,
    "range": [
      4798,
      4807
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4808,
    "end": 4810,
    "range": [
      4808,
      4810
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4811,
    "end": 4817,
    "range": [
      4811,
      4817
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4818,
    "end": 4819,
    "range": [
      4818,
      4819
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4820,
    "end": 4823,
    "range": [
      4820,
      4823
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4824,
    "end": 4832,
    "range": [
      4824,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4834,
    "end": 4835,
    "range": [
      4834,
      4835
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 4840,
    "end": 4845,
    "range": [
      4840,
      4845
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4846,
    "end": 4849,
    "range": [
      4846,
      4849
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 4850,
    "end": 4855,
    "range": [
      4850,
      4855
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4855,
    "end": 4856,
    "range": [
      4855,
      4856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4856,
    "end": 4857,
    "range": [
      4856,
      4857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858,
    "range": [
      4857,
      4858
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4861,
    "end": 4862,
    "range": [
      4861,
      4862
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4865,
    "end": 4871,
    "range": [
      4865,
      4871
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4872,
    "end": 4873,
    "range": [
      4872,
      4873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4873,
    "end": 4874,
    "range": [
      4873,
      4874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4875,
    "end": 4876,
    "range": [
      4875,
      4876
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4878,
    "end": 4886,
    "range": [
      4878,
      4886
    ]
  },
  {
    "type": "Identifier",
    "value": "notNotEquals",
    "start": 4887,
    "end": 4899,
    "range": [
      4887,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4899,
    "end": 4900,
    "range": [
      4899,
      4900
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4901,
    "end": 4902,
    "range": [
      4901,
      4902
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4903,
    "end": 4910,
    "range": [
      4903,
      4910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4910,
    "end": 4911,
    "range": [
      4910,
      4911
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4913,
    "end": 4914,
    "range": [
      4913,
      4914
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4919,
    "end": 4921,
    "range": [
      4919,
      4921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4922,
    "end": 4923,
    "range": [
      4922,
      4923
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4923,
    "end": 4924,
    "range": [
      4923,
      4924
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4925,
    "end": 4928,
    "range": [
      4925,
      4928
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 4929,
    "end": 4939,
    "range": [
      4929,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4939,
    "end": 4940,
    "range": [
      4939,
      4940
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4941,
    "end": 4942,
    "range": [
      4941,
      4942
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4943,
    "end": 4944,
    "range": [
      4943,
      4944
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4949,
    "end": 4953,
    "range": [
      4949,
      4953
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4954,
    "end": 4955,
    "range": [
      4954,
      4955
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4964,
    "end": 4969,
    "range": [
      4964,
      4969
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4970,
    "end": 4971,
    "range": [
      4970,
      4971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4971,
    "end": 4972,
    "range": [
      4971,
      4972
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4973,
    "end": 4979,
    "range": [
      4973,
      4979
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4980,
    "end": 4981,
    "range": [
      4980,
      4981
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4982,
    "end": 4983,
    "range": [
      4982,
      4983
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4983,
    "end": 4984,
    "range": [
      4983,
      4984
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4989,
    "end": 4990,
    "range": [
      4989,
      4990
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4996,
    "end": 4998,
    "range": [
      4996,
      4998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4999,
    "end": 5000,
    "range": [
      4999,
      5000
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5000,
    "end": 5001,
    "range": [
      5000,
      5001
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5002,
    "end": 5005,
    "range": [
      5002,
      5005
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5006,
    "end": 5016,
    "range": [
      5006,
      5016
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5016,
    "end": 5017,
    "range": [
      5016,
      5017
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5017,
    "end": 5018,
    "range": [
      5017,
      5018
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5018,
    "end": 5019,
    "range": [
      5018,
      5019
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5020,
    "end": 5021,
    "range": [
      5020,
      5021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5022,
    "end": 5023,
    "range": [
      5022,
      5023
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5028,
    "end": 5032,
    "range": [
      5028,
      5032
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5033,
    "end": 5034,
    "range": [
      5033,
      5034
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5043,
    "end": 5048,
    "range": [
      5043,
      5048
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5049,
    "end": 5050,
    "range": [
      5049,
      5050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5050,
    "end": 5051,
    "range": [
      5050,
      5051
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5052,
    "end": 5062,
    "range": [
      5052,
      5062
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5062,
    "end": 5063,
    "range": [
      5062,
      5063
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5063,
    "end": 5064,
    "range": [
      5063,
      5064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5065,
    "end": 5066,
    "range": [
      5065,
      5066
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5067,
    "end": 5068,
    "range": [
      5067,
      5068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5068,
    "end": 5069,
    "range": [
      5068,
      5069
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5074,
    "end": 5075,
    "range": [
      5074,
      5075
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5082,
    "end": 5084,
    "range": [
      5082,
      5084
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5085,
    "end": 5086,
    "range": [
      5085,
      5086
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5086,
    "end": 5087,
    "range": [
      5086,
      5087
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5088,
    "end": 5091,
    "range": [
      5088,
      5091
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5092,
    "end": 5102,
    "range": [
      5092,
      5102
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5102,
    "end": 5103,
    "range": [
      5102,
      5103
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5103,
    "end": 5104,
    "range": [
      5103,
      5104
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5105,
    "end": 5107,
    "range": [
      5105,
      5107
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5108,
    "end": 5109,
    "range": [
      5108,
      5109
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5110,
    "end": 5113,
    "range": [
      5110,
      5113
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5114,
    "end": 5124,
    "range": [
      5114,
      5124
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5124,
    "end": 5125,
    "range": [
      5124,
      5125
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5125,
    "end": 5126,
    "range": [
      5125,
      5126
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5127,
    "end": 5129,
    "range": [
      5127,
      5129
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5130,
    "end": 5131,
    "range": [
      5130,
      5131
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5132,
    "end": 5135,
    "range": [
      5132,
      5135
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 5136,
    "end": 5146,
    "range": [
      5136,
      5146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5146,
    "end": 5147,
    "range": [
      5146,
      5147
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5147,
    "end": 5148,
    "range": [
      5147,
      5148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5148,
    "end": 5149,
    "range": [
      5148,
      5149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5150,
    "end": 5151,
    "range": [
      5150,
      5151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5152,
    "end": 5153,
    "range": [
      5152,
      5153
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5158,
    "end": 5162,
    "range": [
      5158,
      5162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5163,
    "end": 5164,
    "range": [
      5163,
      5164
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5173,
    "end": 5178,
    "range": [
      5173,
      5178
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrB",
    "start": 5179,
    "end": 5183,
    "range": [
      5179,
      5183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5183,
    "end": 5184,
    "range": [
      5183,
      5184
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5185,
    "end": 5195,
    "range": [
      5185,
      5195
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5195,
    "end": 5196,
    "range": [
      5195,
      5196
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5196,
    "end": 5197,
    "range": [
      5196,
      5197
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5198,
    "end": 5199,
    "range": [
      5198,
      5199
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5200,
    "end": 5210,
    "range": [
      5200,
      5210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5210,
    "end": 5211,
    "range": [
      5210,
      5211
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5211,
    "end": 5212,
    "range": [
      5211,
      5212
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5213,
    "end": 5214,
    "range": [
      5213,
      5214
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 5215,
    "end": 5225,
    "range": [
      5215,
      5225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5225,
    "end": 5226,
    "range": [
      5225,
      5226
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5226,
    "end": 5227,
    "range": [
      5226,
      5227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5229,
    "end": 5230,
    "range": [
      5229,
      5230
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5231,
    "end": 5232,
    "range": [
      5231,
      5232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5232,
    "end": 5233,
    "range": [
      5232,
      5233
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5238,
    "end": 5239,
    "range": [
      5238,
      5239
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5266,
    "end": 5268,
    "range": [
      5266,
      5268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5269,
    "end": 5270,
    "range": [
      5269,
      5270
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5270,
    "end": 5271,
    "range": [
      5270,
      5271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5271,
    "end": 5272,
    "range": [
      5271,
      5272
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5272,
    "end": 5273,
    "range": [
      5272,
      5273
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5274,
    "end": 5277,
    "range": [
      5274,
      5277
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5278,
    "end": 5288,
    "range": [
      5278,
      5288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5288,
    "end": 5289,
    "range": [
      5288,
      5289
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5289,
    "end": 5290,
    "range": [
      5289,
      5290
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5291,
    "end": 5293,
    "range": [
      5291,
      5293
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5294,
    "end": 5295,
    "range": [
      5294,
      5295
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5296,
    "end": 5299,
    "range": [
      5296,
      5299
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5300,
    "end": 5310,
    "range": [
      5300,
      5310
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5310,
    "end": 5311,
    "range": [
      5310,
      5311
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5311,
    "end": 5312,
    "range": [
      5311,
      5312
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5313,
    "end": 5315,
    "range": [
      5313,
      5315
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5316,
    "end": 5317,
    "range": [
      5316,
      5317
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5318,
    "end": 5321,
    "range": [
      5318,
      5321
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 5322,
    "end": 5332,
    "range": [
      5322,
      5332
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5332,
    "end": 5333,
    "range": [
      5332,
      5333
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5333,
    "end": 5334,
    "range": [
      5333,
      5334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5334,
    "end": 5335,
    "range": [
      5334,
      5335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5335,
    "end": 5336,
    "range": [
      5335,
      5336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5337,
    "end": 5338,
    "range": [
      5337,
      5338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5339,
    "end": 5340,
    "range": [
      5339,
      5340
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5345,
    "end": 5349,
    "range": [
      5345,
      5349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5350,
    "end": 5351,
    "range": [
      5350,
      5351
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5360,
    "end": 5365,
    "range": [
      5360,
      5365
    ]
  },
  {
    "type": "Identifier",
    "value": "aOrB",
    "start": 5366,
    "end": 5370,
    "range": [
      5366,
      5370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5370,
    "end": 5371,
    "range": [
      5370,
      5371
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5372,
    "end": 5382,
    "range": [
      5372,
      5382
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5382,
    "end": 5383,
    "range": [
      5382,
      5383
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5383,
    "end": 5384,
    "range": [
      5383,
      5384
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5385,
    "end": 5386,
    "range": [
      5385,
      5386
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberEnum",
    "start": 5387,
    "end": 5397,
    "range": [
      5387,
      5397
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5397,
    "end": 5398,
    "range": [
      5397,
      5398
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5398,
    "end": 5399,
    "range": [
      5398,
      5399
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5400,
    "end": 5401,
    "range": [
      5400,
      5401
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum",
    "start": 5402,
    "end": 5412,
    "range": [
      5402,
      5412
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5412,
    "end": 5413,
    "range": [
      5412,
      5413
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5413,
    "end": 5414,
    "range": [
      5413,
      5414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5416,
    "end": 5417,
    "range": [
      5416,
      5417
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 5418,
    "end": 5419,
    "range": [
      5418,
      5419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5419,
    "end": 5420,
    "range": [
      5419,
      5420
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5425,
    "end": 5426,
    "range": [
      5425,
      5426
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5427,
    "end": 5428,
    "range": [
      5427,
      5428
    ]
  }
]
```
