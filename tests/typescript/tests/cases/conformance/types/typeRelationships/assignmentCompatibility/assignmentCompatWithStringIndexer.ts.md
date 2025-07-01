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
        "start": 372,
        "end": 380
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
              "start": 393,
              "end": 394
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
                    "start": 395,
                    "end": 396
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 409
                    },
                    "typeArguments": null,
                    "start": 405,
                    "end": 409
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 395,
                  "end": 409
                }
              ],
              "start": 394,
              "end": 410
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
                          "start": 425,
                          "end": 431
                        },
                        "start": 423,
                        "end": 431
                      },
                      "start": 422,
                      "end": 431
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
                        "start": 434,
                        "end": 435
                      },
                      "typeArguments": null,
                      "start": 434,
                      "end": 435
                    },
                    "start": 432,
                    "end": 435
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 421,
                  "end": 436
                }
              ],
              "start": 411,
              "end": 442
            },
            "abstract": false,
            "declare": false,
            "start": 387,
            "end": 442
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
              "start": 454,
              "end": 455
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
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
                    "start": 466,
                    "end": 470
                  },
                  "typeArguments": null,
                  "start": 466,
                  "end": 470
                }
              ],
              "start": 465,
              "end": 471
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
                          "start": 486,
                          "end": 492
                        },
                        "start": 484,
                        "end": 492
                      },
                      "start": 483,
                      "end": 492
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
                        "start": 495,
                        "end": 502
                      },
                      "typeArguments": null,
                      "start": 495,
                      "end": 502
                    },
                    "start": 493,
                    "end": 502
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 482,
                  "end": 503
                }
              ],
              "start": 472,
              "end": 515
            },
            "abstract": false,
            "declare": false,
            "start": 448,
            "end": 515
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
                                  "start": 535,
                                  "end": 541
                                },
                                "start": 533,
                                "end": 541
                              },
                              "start": 532,
                              "end": 541
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
                                "start": 544,
                                "end": 551
                              },
                              "typeArguments": null,
                              "start": 544,
                              "end": 551
                            },
                            "start": 542,
                            "end": 551
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 531,
                          "end": 552
                        }
                      ],
                      "start": 529,
                      "end": 554
                    },
                    "start": 527,
                    "end": 554
                  },
                  "start": 525,
                  "end": 554
                },
                "init": null,
                "definite": false,
                "start": 525,
                "end": 554
              }
            ],
            "declare": false,
            "start": 521,
            "end": 555
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
                        "start": 568,
                        "end": 569
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
                              "start": 570,
                              "end": 574
                            },
                            "typeArguments": null,
                            "start": 570,
                            "end": 574
                          }
                        ],
                        "start": 569,
                        "end": 575
                      },
                      "start": 568,
                      "end": 575
                    },
                    "start": 566,
                    "end": 575
                  },
                  "start": 564,
                  "end": 575
                },
                "init": null,
                "definite": false,
                "start": 564,
                "end": 575
              }
            ],
            "declare": false,
            "start": 560,
            "end": 576
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
                "start": 581,
                "end": 583
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 588
              },
              "start": 581,
              "end": 588
            },
            "directive": null,
            "start": 581,
            "end": 589
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
                "start": 600,
                "end": 602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 607
              },
              "start": 600,
              "end": 607
            },
            "directive": null,
            "start": 600,
            "end": 608
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
              "start": 629,
              "end": 631
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 641
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
                    "start": 642,
                    "end": 646
                  },
                  "typeArguments": null,
                  "start": 642,
                  "end": 646
                }
              ],
              "start": 641,
              "end": 647
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
                          "start": 662,
                          "end": 668
                        },
                        "start": 660,
                        "end": 668
                      },
                      "start": 659,
                      "end": 668
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
                        "start": 671,
                        "end": 679
                      },
                      "typeArguments": null,
                      "start": 671,
                      "end": 679
                    },
                    "start": 669,
                    "end": 679
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 658,
                  "end": 680
                }
              ],
              "start": 648,
              "end": 692
            },
            "abstract": false,
            "declare": false,
            "start": 623,
            "end": 692
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
                                  "start": 712,
                                  "end": 718
                                },
                                "start": 710,
                                "end": 718
                              },
                              "start": 709,
                              "end": 718
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
                                "start": 721,
                                "end": 729
                              },
                              "typeArguments": null,
                              "start": 721,
                              "end": 729
                            },
                            "start": 719,
                            "end": 729
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 708,
                          "end": 730
                        }
                      ],
                      "start": 706,
                      "end": 732
                    },
                    "start": 704,
                    "end": 732
                  },
                  "start": 702,
                  "end": 732
                },
                "init": null,
                "definite": false,
                "start": 702,
                "end": 732
              }
            ],
            "declare": false,
            "start": 698,
            "end": 733
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
                "start": 738,
                "end": 740
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 745
              },
              "start": 738,
              "end": 745
            },
            "directive": null,
            "start": 738,
            "end": 746
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
                "start": 757,
                "end": 759
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 792
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
                    "start": 793,
                    "end": 794
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 803,
                      "end": 807
                    },
                    "typeArguments": null,
                    "start": 803,
                    "end": 807
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 793,
                  "end": 807
                }
              ],
              "start": 792,
              "end": 808
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
                                        "start": 835,
                                        "end": 841
                                      },
                                      "start": 833,
                                      "end": 841
                                    },
                                    "start": 832,
                                    "end": 841
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
                                      "start": 844,
                                      "end": 851
                                    },
                                    "typeArguments": null,
                                    "start": 844,
                                    "end": 851
                                  },
                                  "start": 842,
                                  "end": 851
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 831,
                                "end": 852
                              }
                            ],
                            "start": 829,
                            "end": 854
                          },
                          "start": 827,
                          "end": 854
                        },
                        "start": 825,
                        "end": 854
                      },
                      "init": null,
                      "definite": false,
                      "start": 825,
                      "end": 854
                    }
                  ],
                  "declare": false,
                  "start": 821,
                  "end": 855
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
                              "start": 872,
                              "end": 873
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
                                    "start": 874,
                                    "end": 875
                                  },
                                  "typeArguments": null,
                                  "start": 874,
                                  "end": 875
                                }
                              ],
                              "start": 873,
                              "end": 876
                            },
                            "start": 872,
                            "end": 876
                          },
                          "start": 870,
                          "end": 876
                        },
                        "start": 868,
                        "end": 876
                      },
                      "init": null,
                      "definite": false,
                      "start": 868,
                      "end": 876
                    }
                  ],
                  "declare": false,
                  "start": 864,
                  "end": 877
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
                      "start": 886,
                      "end": 888
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 891,
                      "end": 893
                    },
                    "start": 886,
                    "end": 893
                  },
                  "directive": null,
                  "start": 886,
                  "end": 894
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
                      "start": 912,
                      "end": 914
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 919
                    },
                    "start": 912,
                    "end": 919
                  },
                  "directive": null,
                  "start": 912,
                  "end": 920
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
                                        "start": 953,
                                        "end": 959
                                      },
                                      "start": 951,
                                      "end": 959
                                    },
                                    "start": 950,
                                    "end": 959
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
                                      "start": 962,
                                      "end": 970
                                    },
                                    "typeArguments": null,
                                    "start": 962,
                                    "end": 970
                                  },
                                  "start": 960,
                                  "end": 970
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 949,
                                "end": 971
                              }
                            ],
                            "start": 947,
                            "end": 973
                          },
                          "start": 945,
                          "end": 973
                        },
                        "start": 943,
                        "end": 973
                      },
                      "init": null,
                      "definite": false,
                      "start": 943,
                      "end": 973
                    }
                  ],
                  "declare": false,
                  "start": 939,
                  "end": 974
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
                      "start": 983,
                      "end": 985
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 990
                    },
                    "start": 983,
                    "end": 990
                  },
                  "directive": null,
                  "start": 983,
                  "end": 991
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
                      "start": 1009,
                      "end": 1011
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1014,
                      "end": 1016
                    },
                    "start": 1009,
                    "end": 1016
                  },
                  "directive": null,
                  "start": 1009,
                  "end": 1017
                }
              ],
              "start": 811,
              "end": 1032
            },
            "expression": false,
            "start": 780,
            "end": 1032
          }
        ],
        "start": 381,
        "end": 1034
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 365,
      "end": 1034
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 1034
}
```
