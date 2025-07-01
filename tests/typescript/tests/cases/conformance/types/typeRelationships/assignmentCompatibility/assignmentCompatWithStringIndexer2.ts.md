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
        "start": 376,
        "end": 384
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
              "start": 401,
              "end": 402
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
                    "start": 403,
                    "end": 404
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 417
                    },
                    "typeArguments": null,
                    "start": 413,
                    "end": 417
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 403,
                  "end": 417
                }
              ],
              "start": 402,
              "end": 418
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
                          "start": 433,
                          "end": 439
                        },
                        "start": 431,
                        "end": 439
                      },
                      "start": 430,
                      "end": 439
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
                        "start": 442,
                        "end": 443
                      },
                      "typeArguments": null,
                      "start": 442,
                      "end": 443
                    },
                    "start": 440,
                    "end": 443
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 429,
                  "end": 444
                }
              ],
              "start": 419,
              "end": 450
            },
            "declare": false,
            "start": 391,
            "end": 450
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
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
                  "start": 476,
                  "end": 477
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
                        "start": 478,
                        "end": 482
                      },
                      "typeArguments": null,
                      "start": 478,
                      "end": 482
                    }
                  ],
                  "start": 477,
                  "end": 483
                },
                "start": 476,
                "end": 483
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
                          "start": 498,
                          "end": 504
                        },
                        "start": 496,
                        "end": 504
                      },
                      "start": 495,
                      "end": 504
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
                        "start": 507,
                        "end": 514
                      },
                      "typeArguments": null,
                      "start": 507,
                      "end": 514
                    },
                    "start": 505,
                    "end": 514
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 494,
                  "end": 515
                }
              ],
              "start": 484,
              "end": 527
            },
            "declare": false,
            "start": 456,
            "end": 527
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
                                  "start": 547,
                                  "end": 553
                                },
                                "start": 545,
                                "end": 553
                              },
                              "start": 544,
                              "end": 553
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
                                "start": 556,
                                "end": 563
                              },
                              "typeArguments": null,
                              "start": 556,
                              "end": 563
                            },
                            "start": 554,
                            "end": 563
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 543,
                          "end": 564
                        }
                      ],
                      "start": 541,
                      "end": 566
                    },
                    "start": 539,
                    "end": 566
                  },
                  "start": 537,
                  "end": 566
                },
                "init": null,
                "definite": false,
                "start": 537,
                "end": 566
              }
            ],
            "declare": false,
            "start": 533,
            "end": 567
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
                        "start": 580,
                        "end": 581
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
                              "start": 582,
                              "end": 586
                            },
                            "typeArguments": null,
                            "start": 582,
                            "end": 586
                          }
                        ],
                        "start": 581,
                        "end": 587
                      },
                      "start": 580,
                      "end": 587
                    },
                    "start": 578,
                    "end": 587
                  },
                  "start": 576,
                  "end": 587
                },
                "init": null,
                "definite": false,
                "start": 576,
                "end": 587
              }
            ],
            "declare": false,
            "start": 572,
            "end": 588
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
                "start": 593,
                "end": 595
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 600
              },
              "start": 593,
              "end": 600
            },
            "directive": null,
            "start": 593,
            "end": 601
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
                "start": 612,
                "end": 614
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 619
              },
              "start": 612,
              "end": 619
            },
            "directive": null,
            "start": 612,
            "end": 620
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 647
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
                  "start": 656,
                  "end": 657
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
                        "start": 658,
                        "end": 662
                      },
                      "typeArguments": null,
                      "start": 658,
                      "end": 662
                    }
                  ],
                  "start": 657,
                  "end": 663
                },
                "start": 656,
                "end": 663
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
                          "start": 678,
                          "end": 684
                        },
                        "start": 676,
                        "end": 684
                      },
                      "start": 675,
                      "end": 684
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
                        "start": 687,
                        "end": 695
                      },
                      "typeArguments": null,
                      "start": 687,
                      "end": 695
                    },
                    "start": 685,
                    "end": 695
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 674,
                  "end": 696
                }
              ],
              "start": 664,
              "end": 708
            },
            "declare": false,
            "start": 635,
            "end": 708
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
                                  "start": 728,
                                  "end": 734
                                },
                                "start": 726,
                                "end": 734
                              },
                              "start": 725,
                              "end": 734
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
                                "start": 737,
                                "end": 745
                              },
                              "typeArguments": null,
                              "start": 737,
                              "end": 745
                            },
                            "start": 735,
                            "end": 745
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 724,
                          "end": 746
                        }
                      ],
                      "start": 722,
                      "end": 748
                    },
                    "start": 720,
                    "end": 748
                  },
                  "start": 718,
                  "end": 748
                },
                "init": null,
                "definite": false,
                "start": 718,
                "end": 748
              }
            ],
            "declare": false,
            "start": 714,
            "end": 749
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
                "start": 754,
                "end": 756
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 759,
                "end": 761
              },
              "start": 754,
              "end": 761
            },
            "directive": null,
            "start": 754,
            "end": 762
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
                "start": 773,
                "end": 775
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 780
              },
              "start": 773,
              "end": 780
            },
            "directive": null,
            "start": 773,
            "end": 781
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 808
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
                    "start": 809,
                    "end": 810
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 823
                    },
                    "typeArguments": null,
                    "start": 819,
                    "end": 823
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 809,
                  "end": 823
                }
              ],
              "start": 808,
              "end": 824
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
                                        "start": 851,
                                        "end": 857
                                      },
                                      "start": 849,
                                      "end": 857
                                    },
                                    "start": 848,
                                    "end": 857
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
                                      "start": 860,
                                      "end": 867
                                    },
                                    "typeArguments": null,
                                    "start": 860,
                                    "end": 867
                                  },
                                  "start": 858,
                                  "end": 867
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 847,
                                "end": 868
                              }
                            ],
                            "start": 845,
                            "end": 870
                          },
                          "start": 843,
                          "end": 870
                        },
                        "start": 841,
                        "end": 870
                      },
                      "init": null,
                      "definite": false,
                      "start": 841,
                      "end": 870
                    }
                  ],
                  "declare": false,
                  "start": 837,
                  "end": 871
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
                              "start": 888,
                              "end": 889
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
                                    "start": 890,
                                    "end": 891
                                  },
                                  "typeArguments": null,
                                  "start": 890,
                                  "end": 891
                                }
                              ],
                              "start": 889,
                              "end": 892
                            },
                            "start": 888,
                            "end": 892
                          },
                          "start": 886,
                          "end": 892
                        },
                        "start": 884,
                        "end": 892
                      },
                      "init": null,
                      "definite": false,
                      "start": 884,
                      "end": 892
                    }
                  ],
                  "declare": false,
                  "start": 880,
                  "end": 893
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
                      "start": 902,
                      "end": 904
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 907,
                      "end": 909
                    },
                    "start": 902,
                    "end": 909
                  },
                  "directive": null,
                  "start": 902,
                  "end": 910
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
                      "start": 928,
                      "end": 930
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 933,
                      "end": 935
                    },
                    "start": 928,
                    "end": 935
                  },
                  "directive": null,
                  "start": 928,
                  "end": 936
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
                                        "start": 969,
                                        "end": 975
                                      },
                                      "start": 967,
                                      "end": 975
                                    },
                                    "start": 966,
                                    "end": 975
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
                                      "start": 978,
                                      "end": 986
                                    },
                                    "typeArguments": null,
                                    "start": 978,
                                    "end": 986
                                  },
                                  "start": 976,
                                  "end": 986
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 965,
                                "end": 987
                              }
                            ],
                            "start": 963,
                            "end": 989
                          },
                          "start": 961,
                          "end": 989
                        },
                        "start": 959,
                        "end": 989
                      },
                      "init": null,
                      "definite": false,
                      "start": 959,
                      "end": 989
                    }
                  ],
                  "declare": false,
                  "start": 955,
                  "end": 990
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
                      "start": 999,
                      "end": 1001
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1004,
                      "end": 1006
                    },
                    "start": 999,
                    "end": 1006
                  },
                  "directive": null,
                  "start": 999,
                  "end": 1007
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
                      "start": 1025,
                      "end": 1027
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1030,
                      "end": 1032
                    },
                    "start": 1025,
                    "end": 1032
                  },
                  "directive": null,
                  "start": 1025,
                  "end": 1033
                }
              ],
              "start": 827,
              "end": 1048
            },
            "expression": false,
            "start": 796,
            "end": 1048
          }
        ],
        "start": 385,
        "end": 1050
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 369,
      "end": 1050
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 1050
}
```
