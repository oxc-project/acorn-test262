__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 24,
                  "end": 27
                },
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "aProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 48
          }
        ],
        "start": 12,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 76,
                  "end": 79
                },
                "start": 76,
                "end": 79
              },
              "start": 74,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 80
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 93,
                "end": 99
              },
              "start": 91,
              "end": 99
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 100
          }
        ],
        "start": 64,
        "end": 102
      },
      "declare": false,
      "start": 52,
      "end": 102
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 115
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 128,
                  "end": 131
                },
                "start": 128,
                "end": 131
              },
              "start": 126,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 132
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 145,
                "end": 151
              },
              "start": 143,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 152
          }
        ],
        "start": 116,
        "end": 154
      },
      "declare": false,
      "start": 104,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 168
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "typeArguments": null,
            "start": 171,
            "end": 172
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "typeArguments": null,
            "start": 175,
            "end": 176
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "typeArguments": null,
            "start": 179,
            "end": 180
          }
        ],
        "start": 171,
        "end": 180
      },
      "declare": false,
      "start": 157,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 195
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 205
              },
              "typeArguments": null,
              "start": 199,
              "end": 205
            },
            "start": 197,
            "end": 205
          },
          "start": 196,
          "end": 205
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 221,
              "end": 225
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
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
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 271,
                              "end": 276
                            },
                            "start": 269,
                            "end": 276
                          },
                          "start": 264,
                          "end": 276
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "definite": false,
                        "start": 264,
                        "end": 280
                      }
                    ],
                    "declare": false,
                    "start": 258,
                    "end": 281
                  }
                ],
                "start": 237,
                "end": 281
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 295,
                    "end": 301
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 306,
                    "end": 309
                  },
                  "start": 295,
                  "end": 309
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 324
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 331
                      },
                      "optional": false,
                      "computed": false,
                      "start": 323,
                      "end": 331
                    },
                    "directive": null,
                    "start": 323,
                    "end": 332
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 345,
                    "end": 351
                  }
                ],
                "start": 290,
                "end": 351
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 366
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 371
                    },
                    "optional": false,
                    "computed": false,
                    "start": 365,
                    "end": 371
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 376,
                    "end": 379
                  },
                  "start": 365,
                  "end": 379
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 394
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 393,
                      "end": 401
                    },
                    "directive": null,
                    "start": 393,
                    "end": 402
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 415,
                    "end": 421
                  }
                ],
                "start": 360,
                "end": 421
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 436
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 441
                    },
                    "optional": false,
                    "computed": false,
                    "start": 435,
                    "end": 441
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 446,
                    "end": 449
                  },
                  "start": 435,
                  "end": 449
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 464
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 471
                      },
                      "optional": false,
                      "computed": false,
                      "start": 463,
                      "end": 471
                    },
                    "directive": null,
                    "start": 463,
                    "end": 472
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 485,
                    "end": 491
                  }
                ],
                "start": 430,
                "end": 491
              }
            ],
            "start": 213,
            "end": 497
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 511,
              "end": 515
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
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
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 561,
                              "end": 566
                            },
                            "start": 559,
                            "end": 566
                          },
                          "start": 554,
                          "end": 566
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 569,
                          "end": 570
                        },
                        "definite": false,
                        "start": 554,
                        "end": 570
                      }
                    ],
                    "declare": false,
                    "start": 548,
                    "end": 571
                  }
                ],
                "start": 527,
                "end": 571
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 586
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 587,
                      "end": 591
                    },
                    "optional": false,
                    "computed": false,
                    "start": 585,
                    "end": 591
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 596,
                    "end": 599
                  },
                  "start": 585,
                  "end": 599
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 615,
                            "end": 616
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "aProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 623
                          },
                          "optional": false,
                          "computed": false,
                          "start": 615,
                          "end": 623
                        },
                        "directive": null,
                        "start": 615,
                        "end": 624
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 637,
                        "end": 643
                      }
                    ],
                    "start": 601,
                    "end": 653
                  }
                ],
                "start": 580,
                "end": 653
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 668
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 669,
                      "end": 673
                    },
                    "optional": false,
                    "computed": false,
                    "start": 667,
                    "end": 673
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 678,
                    "end": 681
                  },
                  "start": 667,
                  "end": 681
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 697,
                            "end": 698
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 699,
                            "end": 705
                          },
                          "optional": false,
                          "computed": false,
                          "start": 697,
                          "end": 705
                        },
                        "directive": null,
                        "start": 697,
                        "end": 706
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 719,
                        "end": 725
                      }
                    ],
                    "start": 683,
                    "end": 735
                  }
                ],
                "start": 662,
                "end": 735
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 750
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 751,
                      "end": 755
                    },
                    "optional": false,
                    "computed": false,
                    "start": 749,
                    "end": 755
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 760,
                    "end": 763
                  },
                  "start": 749,
                  "end": 763
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 779,
                            "end": 780
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 781,
                            "end": 787
                          },
                          "optional": false,
                          "computed": false,
                          "start": 779,
                          "end": 787
                        },
                        "directive": null,
                        "start": 779,
                        "end": 788
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 801,
                        "end": 807
                      }
                    ],
                    "start": 765,
                    "end": 817
                  }
                ],
                "start": 744,
                "end": 817
              }
            ],
            "start": 503,
            "end": 823
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 841,
              "end": 845
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 878,
                        "end": 879
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 880,
                        "end": 886
                      },
                      "optional": false,
                      "computed": false,
                      "start": 878,
                      "end": 886
                    },
                    "directive": null,
                    "start": 878,
                    "end": 887
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 900,
                    "end": 906
                  }
                ],
                "start": 857,
                "end": 906
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 920,
                      "end": 921
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 926
                    },
                    "optional": false,
                    "computed": false,
                    "start": 920,
                    "end": 926
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 931,
                    "end": 934
                  },
                  "start": 920,
                  "end": 934
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 948,
                        "end": 949
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 950,
                        "end": 956
                      },
                      "optional": false,
                      "computed": false,
                      "start": 948,
                      "end": 956
                    },
                    "directive": null,
                    "start": 948,
                    "end": 957
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 970,
                    "end": 976
                  }
                ],
                "start": 915,
                "end": 976
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 990,
                      "end": 991
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 992,
                      "end": 996
                    },
                    "optional": false,
                    "computed": false,
                    "start": 990,
                    "end": 996
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 1001,
                    "end": 1004
                  },
                  "start": 990,
                  "end": 1004
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1018,
                        "end": 1019
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1026
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1018,
                      "end": 1026
                    },
                    "directive": null,
                    "start": 1018,
                    "end": 1027
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1040,
                    "end": 1046
                  }
                ],
                "start": 985,
                "end": 1046
              }
            ],
            "start": 833,
            "end": 1052
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1066,
              "end": 1070
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
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
                          "name": "never",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 1116,
                              "end": 1121
                            },
                            "start": 1114,
                            "end": 1121
                          },
                          "start": 1109,
                          "end": 1121
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1124,
                          "end": 1125
                        },
                        "definite": false,
                        "start": 1109,
                        "end": 1125
                      }
                    ],
                    "declare": false,
                    "start": 1103,
                    "end": 1126
                  }
                ],
                "start": 1082,
                "end": 1126
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1140,
                      "end": 1141
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1142,
                      "end": 1146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1140,
                    "end": 1146
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1151,
                    "end": 1154
                  },
                  "start": 1140,
                  "end": 1154
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1168,
                        "end": 1169
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1170,
                        "end": 1176
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1168,
                      "end": 1176
                    },
                    "directive": null,
                    "start": 1168,
                    "end": 1177
                  }
                ],
                "start": 1135,
                "end": 1177
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1218,
                      "end": 1219
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1220,
                      "end": 1224
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1218,
                    "end": 1224
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1229,
                    "end": 1232
                  },
                  "start": 1218,
                  "end": 1232
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1246,
                        "end": 1247
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1248,
                        "end": 1254
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1246,
                      "end": 1254
                    },
                    "directive": null,
                    "start": 1246,
                    "end": 1255
                  }
                ],
                "start": 1213,
                "end": 1255
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1296,
                      "end": 1297
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1296,
                    "end": 1302
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 1307,
                    "end": 1310
                  },
                  "start": 1296,
                  "end": 1310
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1325
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1326,
                        "end": 1332
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1324,
                      "end": 1332
                    },
                    "directive": null,
                    "start": 1324,
                    "end": 1333
                  }
                ],
                "start": 1291,
                "end": 1333
              }
            ],
            "start": 1058,
            "end": 1339
          }
        ],
        "start": 207,
        "end": 1341
      },
      "expression": false,
      "start": 183,
      "end": 1341
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1341
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 18,
    "end": 22,
    "range": [
      18,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 24,
    "end": 27,
    "range": [
      24,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "aProps",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 52,
    "end": 61,
    "range": [
      52,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 70,
    "end": 74,
    "range": [
      70,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 76,
    "end": 79,
    "range": [
      76,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "bProps",
    "start": 85,
    "end": 91,
    "range": [
      85,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 104,
    "end": 113,
    "range": [
      104,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 122,
    "end": 126,
    "range": [
      122,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "cProps",
    "start": 137,
    "end": 143,
    "range": [
      137,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 157,
    "end": 161,
    "range": [
      157,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191,
    "range": [
      183,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
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
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 199,
    "end": 205,
    "range": [
      199,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 213,
    "end": 219,
    "range": [
      213,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 221,
    "end": 225,
    "range": [
      221,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 237,
    "end": 244,
    "range": [
      237,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 258,
    "end": 263,
    "range": [
      258,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 264,
    "end": 269,
    "range": [
      264,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 271,
    "end": 276,
    "range": [
      271,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 290,
    "end": 294,
    "range": [
      290,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 306,
    "end": 309,
    "range": [
      306,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "aProps",
    "start": 325,
    "end": 331,
    "range": [
      325,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 345,
    "end": 350,
    "range": [
      345,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 367,
    "end": 371,
    "range": [
      367,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 376,
    "end": 379,
    "range": [
      376,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "bProps",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 415,
    "end": 420,
    "range": [
      415,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 430,
    "end": 434,
    "range": [
      430,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 437,
    "end": 441,
    "range": [
      437,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 446,
    "end": 449,
    "range": [
      446,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "cProps",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 485,
    "end": 490,
    "range": [
      485,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 503,
    "end": 509,
    "range": [
      503,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 511,
    "end": 515,
    "range": [
      511,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 527,
    "end": 534,
    "range": [
      527,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 548,
    "end": 553,
    "range": [
      548,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 554,
    "end": 559,
    "range": [
      554,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 561,
    "end": 566,
    "range": [
      561,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 580,
    "end": 584,
    "range": [
      580,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 587,
    "end": 591,
    "range": [
      587,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 592,
    "end": 595,
    "range": [
      592,
      595
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 596,
    "end": 599,
    "range": [
      596,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "aProps",
    "start": 617,
    "end": 623,
    "range": [
      617,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 637,
    "end": 642,
    "range": [
      637,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 662,
    "end": 666,
    "range": [
      662,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 669,
    "end": 673,
    "range": [
      669,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 674,
    "end": 677,
    "range": [
      674,
      677
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 678,
    "end": 681,
    "range": [
      678,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "bProps",
    "start": 699,
    "end": 705,
    "range": [
      699,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 719,
    "end": 724,
    "range": [
      719,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 744,
    "end": 748,
    "range": [
      744,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 751,
    "end": 755,
    "range": [
      751,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 756,
    "end": 759,
    "range": [
      756,
      759
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 760,
    "end": 763,
    "range": [
      760,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "cProps",
    "start": 781,
    "end": 787,
    "range": [
      781,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 801,
    "end": 806,
    "range": [
      801,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 833,
    "end": 839,
    "range": [
      833,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 841,
    "end": 845,
    "range": [
      841,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 857,
    "end": 864,
    "range": [
      857,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "aProps",
    "start": 880,
    "end": 886,
    "range": [
      880,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 900,
    "end": 905,
    "range": [
      900,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 915,
    "end": 919,
    "range": [
      915,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 922,
    "end": 926,
    "range": [
      922,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 927,
    "end": 930,
    "range": [
      927,
      930
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 931,
    "end": 934,
    "range": [
      931,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "bProps",
    "start": 950,
    "end": 956,
    "range": [
      950,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 970,
    "end": 975,
    "range": [
      970,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 985,
    "end": 989,
    "range": [
      985,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 992,
    "end": 996,
    "range": [
      992,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 997,
    "end": 1000,
    "range": [
      997,
      1000
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1001,
    "end": 1004,
    "range": [
      1001,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "cProps",
    "start": 1020,
    "end": 1026,
    "range": [
      1020,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1040,
    "end": 1045,
    "range": [
      1040,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1058,
    "end": 1064,
    "range": [
      1058,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1066,
    "end": 1070,
    "range": [
      1066,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1082,
    "end": 1089,
    "range": [
      1082,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1103,
    "end": 1108,
    "range": [
      1103,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1109,
    "end": 1114,
    "range": [
      1109,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1116,
    "end": 1121,
    "range": [
      1116,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1135,
    "end": 1139,
    "range": [
      1135,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1142,
    "end": 1146,
    "range": [
      1142,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1147,
    "end": 1150,
    "range": [
      1147,
      1150
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1151,
    "end": 1154,
    "range": [
      1151,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "aProps",
    "start": 1170,
    "end": 1176,
    "range": [
      1170,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1213,
    "end": 1217,
    "range": [
      1213,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1220,
    "end": 1224,
    "range": [
      1220,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1225,
    "end": 1228,
    "range": [
      1225,
      1228
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1229,
    "end": 1232,
    "range": [
      1229,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Identifier",
    "value": "bProps",
    "start": 1248,
    "end": 1254,
    "range": [
      1248,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1291,
    "end": 1295,
    "range": [
      1291,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1298,
    "end": 1302,
    "range": [
      1298,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1303,
    "end": 1306,
    "range": [
      1303,
      1306
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1307,
    "end": 1310,
    "range": [
      1307,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "cProps",
    "start": 1326,
    "end": 1332,
    "range": [
      1326,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  }
]
```
