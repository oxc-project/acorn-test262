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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 206,
                    "end": 212
                  },
                  "start": 204,
                  "end": 212
                },
                "start": 203,
                "end": 212
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
                  "start": 215,
                  "end": 219
                },
                "typeArguments": null,
                "start": 215,
                "end": 219
              },
              "start": 213,
              "end": 219
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 202,
            "end": 220
          }
        ],
        "start": 196,
        "end": 222
      },
      "abstract": false,
      "declare": false,
      "start": 188,
      "end": 222
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
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "start": 231,
                "end": 232
              },
              "start": 229,
              "end": 232
            },
            "start": 228,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 228,
          "end": 232
        }
      ],
      "declare": false,
      "start": 224,
      "end": 233
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
                            "start": 248,
                            "end": 254
                          },
                          "start": 246,
                          "end": 254
                        },
                        "start": 245,
                        "end": 254
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
                          "start": 257,
                          "end": 264
                        },
                        "typeArguments": null,
                        "start": 257,
                        "end": 264
                      },
                      "start": 255,
                      "end": 264
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 244,
                    "end": 265
                  }
                ],
                "start": 242,
                "end": 267
              },
              "start": 240,
              "end": 267
            },
            "start": 239,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 267
        }
      ],
      "declare": false,
      "start": 235,
      "end": 267
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
          "start": 268,
          "end": 269
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 273
        },
        "start": 268,
        "end": 273
      },
      "directive": null,
      "start": 268,
      "end": 274
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
          "start": 281,
          "end": 282
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 286
        },
        "start": 281,
        "end": 286
      },
      "directive": null,
      "start": 281,
      "end": 287
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
                            "start": 312,
                            "end": 318
                          },
                          "start": 310,
                          "end": 318
                        },
                        "start": 309,
                        "end": 318
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
                          "start": 321,
                          "end": 329
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 329
                      },
                      "start": 319,
                      "end": 329
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 308,
                    "end": 330
                  }
                ],
                "start": 306,
                "end": 332
              },
              "start": 304,
              "end": 332
            },
            "start": 302,
            "end": 332
          },
          "init": null,
          "definite": false,
          "start": 302,
          "end": 332
        }
      ],
      "declare": false,
      "start": 298,
      "end": 332
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
          "start": 333,
          "end": 334
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 339
        },
        "start": 333,
        "end": 339
      },
      "directive": null,
      "start": 333,
      "end": 340
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
          "start": 347,
          "end": 349
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 353
        },
        "start": 347,
        "end": 353
      },
      "directive": null,
      "start": 347,
      "end": 354
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 383
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
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
                    "start": 398,
                    "end": 399
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 412
                    },
                    "typeArguments": null,
                    "start": 408,
                    "end": 412
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 398,
                  "end": 412
                }
              ],
              "start": 397,
              "end": 413
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
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
                          "start": 428,
                          "end": 434
                        },
                        "start": 426,
                        "end": 434
                      },
                      "start": 425,
                      "end": 434
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
                        "start": 437,
                        "end": 438
                      },
                      "typeArguments": null,
                      "start": 437,
                      "end": 438
                    },
                    "start": 435,
                    "end": 438
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 424,
                  "end": 439
                }
              ],
              "start": 414,
              "end": 445
            },
            "abstract": false,
            "declare": false,
            "start": 390,
            "end": 445
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 458
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "superTypeArguments": {
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
                    "start": 469,
                    "end": 473
                  },
                  "typeArguments": null,
                  "start": 469,
                  "end": 473
                }
              ],
              "start": 468,
              "end": 474
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
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
                          "start": 489,
                          "end": 495
                        },
                        "start": 487,
                        "end": 495
                      },
                      "start": 486,
                      "end": 495
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
                        "start": 498,
                        "end": 505
                      },
                      "typeArguments": null,
                      "start": 498,
                      "end": 505
                    },
                    "start": 496,
                    "end": 505
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 485,
                  "end": 506
                }
              ],
              "start": 475,
              "end": 518
            },
            "abstract": false,
            "declare": false,
            "start": 451,
            "end": 518
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
                                  "start": 538,
                                  "end": 544
                                },
                                "start": 536,
                                "end": 544
                              },
                              "start": 535,
                              "end": 544
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
                                "start": 547,
                                "end": 554
                              },
                              "typeArguments": null,
                              "start": 547,
                              "end": 554
                            },
                            "start": 545,
                            "end": 554
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 534,
                          "end": 555
                        }
                      ],
                      "start": 532,
                      "end": 557
                    },
                    "start": 530,
                    "end": 557
                  },
                  "start": 528,
                  "end": 557
                },
                "init": null,
                "definite": false,
                "start": 528,
                "end": 557
              }
            ],
            "declare": false,
            "start": 524,
            "end": 558
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
                        "start": 571,
                        "end": 572
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
                              "start": 573,
                              "end": 577
                            },
                            "typeArguments": null,
                            "start": 573,
                            "end": 577
                          }
                        ],
                        "start": 572,
                        "end": 578
                      },
                      "start": 571,
                      "end": 578
                    },
                    "start": 569,
                    "end": 578
                  },
                  "start": 567,
                  "end": 578
                },
                "init": null,
                "definite": false,
                "start": 567,
                "end": 578
              }
            ],
            "declare": false,
            "start": 563,
            "end": 579
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
                "start": 584,
                "end": 586
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 591
              },
              "start": 584,
              "end": 591
            },
            "directive": null,
            "start": 584,
            "end": 592
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
                "start": 603,
                "end": 605
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 610
              },
              "start": 603,
              "end": 610
            },
            "directive": null,
            "start": 603,
            "end": 611
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 634
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 644
            },
            "superTypeArguments": {
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
                    "start": 645,
                    "end": 649
                  },
                  "typeArguments": null,
                  "start": 645,
                  "end": 649
                }
              ],
              "start": 644,
              "end": 650
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
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
                          "start": 665,
                          "end": 671
                        },
                        "start": 663,
                        "end": 671
                      },
                      "start": 662,
                      "end": 671
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
                        "start": 674,
                        "end": 682
                      },
                      "typeArguments": null,
                      "start": 674,
                      "end": 682
                    },
                    "start": 672,
                    "end": 682
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 661,
                  "end": 683
                }
              ],
              "start": 651,
              "end": 695
            },
            "abstract": false,
            "declare": false,
            "start": 626,
            "end": 695
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
                                  "start": 715,
                                  "end": 721
                                },
                                "start": 713,
                                "end": 721
                              },
                              "start": 712,
                              "end": 721
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
                                "start": 724,
                                "end": 732
                              },
                              "typeArguments": null,
                              "start": 724,
                              "end": 732
                            },
                            "start": 722,
                            "end": 732
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 711,
                          "end": 733
                        }
                      ],
                      "start": 709,
                      "end": 735
                    },
                    "start": 707,
                    "end": 735
                  },
                  "start": 705,
                  "end": 735
                },
                "init": null,
                "definite": false,
                "start": 705,
                "end": 735
              }
            ],
            "declare": false,
            "start": 701,
            "end": 736
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
                "start": 741,
                "end": 743
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 748
              },
              "start": 741,
              "end": 748
            },
            "directive": null,
            "start": 741,
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
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 762
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 767
              },
              "start": 760,
              "end": 767
            },
            "directive": null,
            "start": 760,
            "end": 768
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 795
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
                    "start": 796,
                    "end": 797
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 806,
                      "end": 810
                    },
                    "typeArguments": null,
                    "start": 806,
                    "end": 810
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 796,
                  "end": 810
                }
              ],
              "start": 795,
              "end": 811
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
                                        "start": 838,
                                        "end": 844
                                      },
                                      "start": 836,
                                      "end": 844
                                    },
                                    "start": 835,
                                    "end": 844
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
                                      "start": 847,
                                      "end": 854
                                    },
                                    "typeArguments": null,
                                    "start": 847,
                                    "end": 854
                                  },
                                  "start": 845,
                                  "end": 854
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 834,
                                "end": 855
                              }
                            ],
                            "start": 832,
                            "end": 857
                          },
                          "start": 830,
                          "end": 857
                        },
                        "start": 828,
                        "end": 857
                      },
                      "init": null,
                      "definite": false,
                      "start": 828,
                      "end": 857
                    }
                  ],
                  "declare": false,
                  "start": 824,
                  "end": 858
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
                              "start": 875,
                              "end": 876
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
                                    "start": 877,
                                    "end": 878
                                  },
                                  "typeArguments": null,
                                  "start": 877,
                                  "end": 878
                                }
                              ],
                              "start": 876,
                              "end": 879
                            },
                            "start": 875,
                            "end": 879
                          },
                          "start": 873,
                          "end": 879
                        },
                        "start": 871,
                        "end": 879
                      },
                      "init": null,
                      "definite": false,
                      "start": 871,
                      "end": 879
                    }
                  ],
                  "declare": false,
                  "start": 867,
                  "end": 880
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
                      "start": 889,
                      "end": 891
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 896
                    },
                    "start": 889,
                    "end": 896
                  },
                  "directive": null,
                  "start": 889,
                  "end": 897
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
                      "start": 915,
                      "end": 917
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 920,
                      "end": 922
                    },
                    "start": 915,
                    "end": 922
                  },
                  "directive": null,
                  "start": 915,
                  "end": 923
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
                                        "start": 956,
                                        "end": 962
                                      },
                                      "start": 954,
                                      "end": 962
                                    },
                                    "start": 953,
                                    "end": 962
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
                                      "start": 965,
                                      "end": 973
                                    },
                                    "typeArguments": null,
                                    "start": 965,
                                    "end": 973
                                  },
                                  "start": 963,
                                  "end": 973
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 952,
                                "end": 974
                              }
                            ],
                            "start": 950,
                            "end": 976
                          },
                          "start": 948,
                          "end": 976
                        },
                        "start": 946,
                        "end": 976
                      },
                      "init": null,
                      "definite": false,
                      "start": 946,
                      "end": 976
                    }
                  ],
                  "declare": false,
                  "start": 942,
                  "end": 977
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
                      "start": 986,
                      "end": 988
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 991,
                      "end": 993
                    },
                    "start": 986,
                    "end": 993
                  },
                  "directive": null,
                  "start": 986,
                  "end": 994
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
                      "start": 1012,
                      "end": 1014
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1017,
                      "end": 1019
                    },
                    "start": 1012,
                    "end": 1019
                  },
                  "directive": null,
                  "start": 1012,
                  "end": 1020
                }
              ],
              "start": 814,
              "end": 1035
            },
            "expression": false,
            "start": 783,
            "end": 1035
          }
        ],
        "start": 384,
        "end": 1037
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 365,
      "end": 1037
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 1037
}
```
