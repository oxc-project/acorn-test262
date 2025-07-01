__ESTREE_TEST__:PASS:
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
