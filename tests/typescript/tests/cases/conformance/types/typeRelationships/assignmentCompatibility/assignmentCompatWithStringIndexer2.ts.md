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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 69
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 84
          }
        ],
        "start": 70,
        "end": 86
      },
      "declare": false,
      "start": 55,
      "end": 86
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 104
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 117
          },
          "typeArguments": null,
          "start": 113,
          "end": 117
        }
      ],
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              },
              "start": 123,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 120,
            "end": 132
          }
        ],
        "start": 118,
        "end": 134
      },
      "declare": false,
      "start": 87,
      "end": 134
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 153
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 169
          },
          "typeArguments": null,
          "start": 162,
          "end": 169
        }
      ],
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              },
              "start": 175,
              "end": 183
            },
            "accessibility": null,
            "static": false,
            "start": 172,
            "end": 184
          }
        ],
        "start": 170,
        "end": 186
      },
      "declare": false,
      "start": 135,
      "end": 186
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 210,
                    "end": 216
                  },
                  "start": 208,
                  "end": 216
                },
                "start": 207,
                "end": 216
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 223
                },
                "typeArguments": null,
                "start": 219,
                "end": 223
              },
              "start": 217,
              "end": 223
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 206,
            "end": 224
          }
        ],
        "start": 200,
        "end": 226
      },
      "declare": false,
      "start": 188,
      "end": 226
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "typeArguments": null,
                "start": 235,
                "end": 236
              },
              "start": 233,
              "end": 236
            },
            "start": 232,
            "end": 236
          },
          "init": null,
          "definite": false,
          "start": 232,
          "end": 236
        }
      ],
      "declare": false,
      "start": 228,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 252,
                            "end": 258
                          },
                          "start": 250,
                          "end": 258
                        },
                        "start": 249,
                        "end": 258
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 261,
                          "end": 268
                        },
                        "typeArguments": null,
                        "start": 261,
                        "end": 268
                      },
                      "start": 259,
                      "end": 268
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 248,
                    "end": 269
                  }
                ],
                "start": 246,
                "end": 271
              },
              "start": 244,
              "end": 271
            },
            "start": 243,
            "end": 271
          },
          "init": null,
          "definite": false,
          "start": 243,
          "end": 271
        }
      ],
      "declare": false,
      "start": 239,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 273
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 277
        },
        "start": 272,
        "end": 277
      },
      "directive": null,
      "start": 272,
      "end": 278
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 286
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 290
        },
        "start": 285,
        "end": 290
      },
      "directive": null,
      "start": 285,
      "end": 291
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 316,
                            "end": 322
                          },
                          "start": 314,
                          "end": 322
                        },
                        "start": 313,
                        "end": 322
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 333
                        },
                        "typeArguments": null,
                        "start": 325,
                        "end": 333
                      },
                      "start": 323,
                      "end": 333
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 312,
                    "end": 334
                  }
                ],
                "start": 310,
                "end": 336
              },
              "start": 308,
              "end": 336
            },
            "start": 306,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 336
        }
      ],
      "declare": false,
      "start": 302,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 338
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 343
        },
        "start": 337,
        "end": 343
      },
      "directive": null,
      "start": 337,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 353
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 357
        },
        "start": 351,
        "end": 357
      },
      "directive": null,
      "start": 351,
      "end": 358
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 379,
        "end": 387
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
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
                    "start": 406,
                    "end": 407
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 416,
                    "end": 420
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 406,
                  "end": 420
                }
              ],
              "start": 405,
              "end": 421
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 436,
                          "end": 442
                        },
                        "start": 434,
                        "end": 442
                      },
                      "start": 433,
                      "end": 442
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "typeArguments": null,
                      "start": 445,
                      "end": 446
                    },
                    "start": 443,
                    "end": 446
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 432,
                  "end": 447
                }
              ],
              "start": 422,
              "end": 453
            },
            "declare": false,
            "start": 394,
            "end": 453
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 480
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 485
                      },
                      "typeArguments": null,
                      "start": 481,
                      "end": 485
                    }
                  ],
                  "start": 480,
                  "end": 486
                },
                "start": 479,
                "end": 486
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 501,
                          "end": 507
                        },
                        "start": 499,
                        "end": 507
                      },
                      "start": 498,
                      "end": 507
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 517
                      },
                      "typeArguments": null,
                      "start": 510,
                      "end": 517
                    },
                    "start": 508,
                    "end": 517
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 497,
                  "end": 518
                }
              ],
              "start": 487,
              "end": 530
            },
            "declare": false,
            "start": 459,
            "end": 530
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 550,
                                  "end": 556
                                },
                                "start": 548,
                                "end": 556
                              },
                              "start": 547,
                              "end": 556
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 559,
                                "end": 566
                              },
                              "typeArguments": null,
                              "start": 559,
                              "end": 566
                            },
                            "start": 557,
                            "end": 566
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 546,
                          "end": 567
                        }
                      ],
                      "start": 544,
                      "end": 569
                    },
                    "start": 542,
                    "end": 569
                  },
                  "start": 540,
                  "end": 569
                },
                "init": null,
                "definite": false,
                "start": 540,
                "end": 569
              }
            ],
            "declare": false,
            "start": 536,
            "end": 570
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 583,
                        "end": 584
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 589
                            },
                            "typeArguments": null,
                            "start": 585,
                            "end": 589
                          }
                        ],
                        "start": 584,
                        "end": 590
                      },
                      "start": 583,
                      "end": 590
                    },
                    "start": 581,
                    "end": 590
                  },
                  "start": 579,
                  "end": 590
                },
                "init": null,
                "definite": false,
                "start": 579,
                "end": 590
              }
            ],
            "declare": false,
            "start": 575,
            "end": 591
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 598
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 603
              },
              "start": 596,
              "end": 603
            },
            "directive": null,
            "start": 596,
            "end": 604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 617
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 622
              },
              "start": 615,
              "end": 622
            },
            "directive": null,
            "start": 615,
            "end": 623
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 660
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 661,
                      "end": 665
                    }
                  ],
                  "start": 660,
                  "end": 666
                },
                "start": 659,
                "end": 666
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 681,
                          "end": 687
                        },
                        "start": 679,
                        "end": 687
                      },
                      "start": 678,
                      "end": 687
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 690,
                        "end": 698
                      },
                      "typeArguments": null,
                      "start": 690,
                      "end": 698
                    },
                    "start": 688,
                    "end": 698
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 677,
                  "end": 699
                }
              ],
              "start": 667,
              "end": 711
            },
            "declare": false,
            "start": 638,
            "end": 711
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 731,
                                  "end": 737
                                },
                                "start": 729,
                                "end": 737
                              },
                              "start": 728,
                              "end": 737
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 740,
                                "end": 748
                              },
                              "typeArguments": null,
                              "start": 740,
                              "end": 748
                            },
                            "start": 738,
                            "end": 748
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 727,
                          "end": 749
                        }
                      ],
                      "start": 725,
                      "end": 751
                    },
                    "start": 723,
                    "end": 751
                  },
                  "start": 721,
                  "end": 751
                },
                "init": null,
                "definite": false,
                "start": 721,
                "end": 751
              }
            ],
            "declare": false,
            "start": 717,
            "end": 752
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 759
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 764
              },
              "start": 757,
              "end": 764
            },
            "directive": null,
            "start": 757,
            "end": 765
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 778
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 781,
                "end": 783
              },
              "start": 776,
              "end": 783
            },
            "directive": null,
            "start": 776,
            "end": 784
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 811
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 812,
                    "end": 813
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 826
                    },
                    "typeArguments": null,
                    "start": 822,
                    "end": 826
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 812,
                  "end": 826
                }
              ],
              "start": 811,
              "end": 827
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 854,
                                        "end": 860
                                      },
                                      "start": 852,
                                      "end": 860
                                    },
                                    "start": 851,
                                    "end": 860
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 863,
                                      "end": 870
                                    },
                                    "typeArguments": null,
                                    "start": 863,
                                    "end": 870
                                  },
                                  "start": 861,
                                  "end": 870
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 850,
                                "end": 871
                              }
                            ],
                            "start": 848,
                            "end": 873
                          },
                          "start": 846,
                          "end": 873
                        },
                        "start": 844,
                        "end": 873
                      },
                      "init": null,
                      "definite": false,
                      "start": 844,
                      "end": 873
                    }
                  ],
                  "declare": false,
                  "start": 840,
                  "end": 874
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 891,
                              "end": 892
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 893,
                                    "end": 894
                                  },
                                  "typeArguments": null,
                                  "start": 893,
                                  "end": 894
                                }
                              ],
                              "start": 892,
                              "end": 895
                            },
                            "start": 891,
                            "end": 895
                          },
                          "start": 889,
                          "end": 895
                        },
                        "start": 887,
                        "end": 895
                      },
                      "init": null,
                      "definite": false,
                      "start": 887,
                      "end": 895
                    }
                  ],
                  "declare": false,
                  "start": 883,
                  "end": 896
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 907
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 912
                    },
                    "start": 905,
                    "end": 912
                  },
                  "directive": null,
                  "start": 905,
                  "end": 913
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 931,
                      "end": 933
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 936,
                      "end": 938
                    },
                    "start": 931,
                    "end": 938
                  },
                  "directive": null,
                  "start": 931,
                  "end": 939
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b4",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 972,
                                        "end": 978
                                      },
                                      "start": 970,
                                      "end": 978
                                    },
                                    "start": 969,
                                    "end": 978
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 981,
                                      "end": 989
                                    },
                                    "typeArguments": null,
                                    "start": 981,
                                    "end": 989
                                  },
                                  "start": 979,
                                  "end": 989
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 968,
                                "end": 990
                              }
                            ],
                            "start": 966,
                            "end": 992
                          },
                          "start": 964,
                          "end": 992
                        },
                        "start": 962,
                        "end": 992
                      },
                      "init": null,
                      "definite": false,
                      "start": 962,
                      "end": 992
                    }
                  ],
                  "declare": false,
                  "start": 958,
                  "end": 993
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1002,
                      "end": 1004
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1009
                    },
                    "start": 1002,
                    "end": 1009
                  },
                  "directive": null,
                  "start": 1002,
                  "end": 1010
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1028,
                      "end": 1030
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1033,
                      "end": 1035
                    },
                    "start": 1028,
                    "end": 1035
                  },
                  "directive": null,
                  "start": 1028,
                  "end": 1036
                }
              ],
              "start": 830,
              "end": 1051
            },
            "expression": false,
            "start": 799,
            "end": 1051
          }
        ],
        "start": 388,
        "end": 1053
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 369,
      "end": 1053
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 1053
}
```
