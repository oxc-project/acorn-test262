__ESTREE_TEST__:PASS:
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
