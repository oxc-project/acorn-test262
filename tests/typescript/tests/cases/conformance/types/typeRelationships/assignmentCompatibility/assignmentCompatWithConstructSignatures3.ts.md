__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 102
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
              },
              "start": 108,
              "end": 116
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 105,
            "end": 117
          }
        ],
        "start": 103,
        "end": 119
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 119
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 133
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 149,
            "end": 161
          }
        ],
        "start": 147,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 163
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 178
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 194
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 197,
            "end": 209
          }
        ],
        "start": 195,
        "end": 211
      },
      "abstract": false,
      "declare": false,
      "start": 164,
      "end": 211
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 230
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 243
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 250
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 246,
            "end": 259
          }
        ],
        "start": 244,
        "end": 261
      },
      "abstract": false,
      "declare": false,
      "start": 212,
      "end": 261
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      },
                      "start": 276,
                      "end": 284
                    },
                    "start": 275,
                    "end": 284
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 289,
                      "end": 295
                    },
                    "start": 289,
                    "end": 297
                  },
                  "start": 286,
                  "end": 297
                },
                "start": 270,
                "end": 297
              },
              "start": 268,
              "end": 297
            },
            "start": 267,
            "end": 297
          },
          "init": null,
          "definite": false,
          "start": 267,
          "end": 297
        }
      ],
      "declare": false,
      "start": 263,
      "end": 298
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSNumberKeyword",
                        "start": 315,
                        "end": 321
                      },
                      "start": 313,
                      "end": 321
                    },
                    "start": 312,
                    "end": 321
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 326,
                      "end": 332
                    },
                    "start": 326,
                    "end": 334
                  },
                  "start": 323,
                  "end": 334
                },
                "start": 307,
                "end": 334
              },
              "start": 305,
              "end": 334
            },
            "start": 303,
            "end": 334
          },
          "init": null,
          "definite": false,
          "start": 303,
          "end": 334
        }
      ],
      "declare": false,
      "start": 299,
      "end": 335
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSNumberKeyword",
                        "start": 352,
                        "end": 358
                      },
                      "start": 350,
                      "end": 358
                    },
                    "start": 349,
                    "end": 358
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 363,
                    "end": 367
                  },
                  "start": 360,
                  "end": 367
                },
                "start": 344,
                "end": 367
              },
              "start": 342,
              "end": 367
            },
            "start": 340,
            "end": 367
          },
          "init": null,
          "definite": false,
          "start": 340,
          "end": 367
        }
      ],
      "declare": false,
      "start": 336,
      "end": 368
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSStringKeyword",
                        "start": 385,
                        "end": 391
                      },
                      "start": 383,
                      "end": 391
                    },
                    "start": 382,
                    "end": 391
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 396,
                        "end": 402
                      },
                      "start": 394,
                      "end": 402
                    },
                    "start": 393,
                    "end": 402
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 407,
                    "end": 413
                  },
                  "start": 404,
                  "end": 413
                },
                "start": 377,
                "end": 413
              },
              "start": 375,
              "end": 413
            },
            "start": 373,
            "end": 413
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 413
        }
      ],
      "declare": false,
      "start": 369,
      "end": 414
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 437,
                                "end": 443
                              },
                              "start": 435,
                              "end": 443
                            },
                            "start": 432,
                            "end": 443
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 448,
                            "end": 454
                          },
                          "start": 445,
                          "end": 454
                        },
                        "start": 431,
                        "end": 454
                      },
                      "start": 429,
                      "end": 454
                    },
                    "start": 428,
                    "end": 454
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 459,
                    "end": 465
                  },
                  "start": 456,
                  "end": 465
                },
                "start": 423,
                "end": 465
              },
              "start": 421,
              "end": 465
            },
            "start": 419,
            "end": 465
          },
          "init": null,
          "definite": false,
          "start": 419,
          "end": 465
        }
      ],
      "declare": false,
      "start": 415,
      "end": 466
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
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
                                  "start": 489,
                                  "end": 493
                                },
                                "typeArguments": null,
                                "start": 489,
                                "end": 493
                              },
                              "start": 487,
                              "end": 493
                            },
                            "start": 484,
                            "end": 493
                          }
                        ],
                        "returnType": {
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
                          "start": 495,
                          "end": 505
                        },
                        "start": 483,
                        "end": 505
                      },
                      "start": 481,
                      "end": 505
                    },
                    "start": 480,
                    "end": 505
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 510,
                      "end": 514
                    },
                    "typeArguments": null,
                    "start": 510,
                    "end": 514
                  },
                  "start": 507,
                  "end": 514
                },
                "start": 475,
                "end": 514
              },
              "start": 473,
              "end": 514
            },
            "start": 471,
            "end": 514
          },
          "init": null,
          "definite": false,
          "start": 471,
          "end": 514
        }
      ],
      "declare": false,
      "start": 467,
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
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
                                  "start": 538,
                                  "end": 542
                                },
                                "typeArguments": null,
                                "start": 538,
                                "end": 542
                              },
                              "start": 536,
                              "end": 542
                            },
                            "start": 533,
                            "end": 542
                          }
                        ],
                        "returnType": {
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
                          "start": 544,
                          "end": 554
                        },
                        "start": 532,
                        "end": 554
                      },
                      "start": 530,
                      "end": 554
                    },
                    "start": 529,
                    "end": 554
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 563,
                              "end": 567
                            },
                            "typeArguments": null,
                            "start": 563,
                            "end": 567
                          },
                          "start": 561,
                          "end": 567
                        },
                        "start": 560,
                        "end": 567
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 579
                        },
                        "typeArguments": null,
                        "start": 572,
                        "end": 579
                      },
                      "start": 569,
                      "end": 579
                    },
                    "start": 559,
                    "end": 579
                  },
                  "start": 556,
                  "end": 579
                },
                "start": 524,
                "end": 579
              },
              "start": 522,
              "end": 579
            },
            "start": 520,
            "end": 579
          },
          "init": null,
          "definite": false,
          "start": 520,
          "end": 579
        }
      ],
      "declare": false,
      "start": 516,
      "end": 580
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
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
                                  "start": 603,
                                  "end": 607
                                },
                                "typeArguments": null,
                                "start": 603,
                                "end": 607
                              },
                              "start": 601,
                              "end": 607
                            },
                            "start": 598,
                            "end": 607
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 619
                            },
                            "typeArguments": null,
                            "start": 612,
                            "end": 619
                          },
                          "start": 609,
                          "end": 619
                        },
                        "start": 597,
                        "end": 619
                      },
                      "start": 595,
                      "end": 619
                    },
                    "start": 594,
                    "end": 619
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
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
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
                                  "start": 631,
                                  "end": 635
                                },
                                "typeArguments": null,
                                "start": 631,
                                "end": 635
                              },
                              "start": 629,
                              "end": 635
                            },
                            "start": 625,
                            "end": 635
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 640,
                              "end": 647
                            },
                            "typeArguments": null,
                            "start": 640,
                            "end": 647
                          },
                          "start": 637,
                          "end": 647
                        },
                        "start": 624,
                        "end": 647
                      },
                      "start": 622,
                      "end": 647
                    },
                    "start": 621,
                    "end": 647
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 656,
                              "end": 660
                            },
                            "typeArguments": null,
                            "start": 656,
                            "end": 660
                          },
                          "start": 654,
                          "end": 660
                        },
                        "start": 653,
                        "end": 660
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 672
                        },
                        "typeArguments": null,
                        "start": 665,
                        "end": 672
                      },
                      "start": 662,
                      "end": 672
                    },
                    "start": 652,
                    "end": 672
                  },
                  "start": 649,
                  "end": 672
                },
                "start": 589,
                "end": 672
              },
              "start": 587,
              "end": 672
            },
            "start": 585,
            "end": 672
          },
          "init": null,
          "definite": false,
          "start": 585,
          "end": 672
        }
      ],
      "declare": false,
      "start": 581,
      "end": 673
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
            "name": "a9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
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
                                  "start": 696,
                                  "end": 700
                                },
                                "typeArguments": null,
                                "start": 696,
                                "end": 700
                              },
                              "start": 694,
                              "end": 700
                            },
                            "start": 691,
                            "end": 700
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 705,
                              "end": 712
                            },
                            "typeArguments": null,
                            "start": 705,
                            "end": 712
                          },
                          "start": 702,
                          "end": 712
                        },
                        "start": 690,
                        "end": 712
                      },
                      "start": 688,
                      "end": 712
                    },
                    "start": 687,
                    "end": 712
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
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
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
                                  "start": 724,
                                  "end": 728
                                },
                                "typeArguments": null,
                                "start": 724,
                                "end": 728
                              },
                              "start": 722,
                              "end": 728
                            },
                            "start": 718,
                            "end": 728
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 733,
                              "end": 740
                            },
                            "typeArguments": null,
                            "start": 733,
                            "end": 740
                          },
                          "start": 730,
                          "end": 740
                        },
                        "start": 717,
                        "end": 740
                      },
                      "start": 715,
                      "end": 740
                    },
                    "start": 714,
                    "end": 740
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 749,
                              "end": 753
                            },
                            "typeArguments": null,
                            "start": 749,
                            "end": 753
                          },
                          "start": 747,
                          "end": 753
                        },
                        "start": 746,
                        "end": 753
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 765
                        },
                        "typeArguments": null,
                        "start": 758,
                        "end": 765
                      },
                      "start": 755,
                      "end": 765
                    },
                    "start": 745,
                    "end": 765
                  },
                  "start": 742,
                  "end": 765
                },
                "start": 682,
                "end": 765
              },
              "start": 680,
              "end": 765
            },
            "start": 678,
            "end": 765
          },
          "init": null,
          "definite": false,
          "start": 678,
          "end": 765
        }
      ],
      "declare": false,
      "start": 674,
      "end": 766
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
            "name": "a10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 785
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 787,
                            "end": 794
                          },
                          "typeArguments": null,
                          "start": 787,
                          "end": 794
                        },
                        "start": 787,
                        "end": 796
                      },
                      "start": 785,
                      "end": 796
                    },
                    "value": null,
                    "start": 781,
                    "end": 796
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 801,
                      "end": 808
                    },
                    "typeArguments": null,
                    "start": 801,
                    "end": 808
                  },
                  "start": 798,
                  "end": 808
                },
                "start": 776,
                "end": 808
              },
              "start": 774,
              "end": 808
            },
            "start": 771,
            "end": 808
          },
          "init": null,
          "definite": false,
          "start": 771,
          "end": 808
        }
      ],
      "declare": false,
      "start": 767,
      "end": 809
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
            "name": "a11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 829,
                              "end": 832
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 834,
                                "end": 840
                              },
                              "start": 832,
                              "end": 840
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 829,
                            "end": 840
                          }
                        ],
                        "start": 827,
                        "end": 842
                      },
                      "start": 825,
                      "end": 842
                    },
                    "start": 824,
                    "end": 842
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 849,
                              "end": 852
                            },
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
                            "accessibility": null,
                            "static": false,
                            "start": 849,
                            "end": 861
                          },
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
                              "start": 862,
                              "end": 865
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 867,
                                "end": 873
                              },
                              "start": 865,
                              "end": 873
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 862,
                            "end": 873
                          }
                        ],
                        "start": 847,
                        "end": 875
                      },
                      "start": 845,
                      "end": 875
                    },
                    "start": 844,
                    "end": 875
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 880,
                      "end": 884
                    },
                    "typeArguments": null,
                    "start": 880,
                    "end": 884
                  },
                  "start": 877,
                  "end": 884
                },
                "start": 819,
                "end": 884
              },
              "start": 817,
              "end": 884
            },
            "start": 814,
            "end": 884
          },
          "init": null,
          "definite": false,
          "start": 814,
          "end": 884
        }
      ],
      "declare": false,
      "start": 810,
      "end": 885
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
            "name": "a12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 908
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
                                "start": 909,
                                "end": 913
                              },
                              "typeArguments": null,
                              "start": 909,
                              "end": 913
                            }
                          ],
                          "start": 908,
                          "end": 914
                        },
                        "start": 903,
                        "end": 914
                      },
                      "start": 901,
                      "end": 914
                    },
                    "start": 900,
                    "end": 914
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 919,
                          "end": 924
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 925,
                                "end": 933
                              },
                              "typeArguments": null,
                              "start": 925,
                              "end": 933
                            }
                          ],
                          "start": 924,
                          "end": 934
                        },
                        "start": 919,
                        "end": 934
                      },
                      "start": 917,
                      "end": 934
                    },
                    "start": 916,
                    "end": 934
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 944
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 945,
                            "end": 952
                          },
                          "typeArguments": null,
                          "start": 945,
                          "end": 952
                        }
                      ],
                      "start": 944,
                      "end": 953
                    },
                    "start": 939,
                    "end": 953
                  },
                  "start": 936,
                  "end": 953
                },
                "start": 895,
                "end": 953
              },
              "start": 893,
              "end": 953
            },
            "start": 890,
            "end": 953
          },
          "init": null,
          "definite": false,
          "start": 890,
          "end": 953
        }
      ],
      "declare": false,
      "start": 886,
      "end": 954
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
            "name": "a13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 972,
                          "end": 977
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
                                "start": 978,
                                "end": 982
                              },
                              "typeArguments": null,
                              "start": 978,
                              "end": 982
                            }
                          ],
                          "start": 977,
                          "end": 983
                        },
                        "start": 972,
                        "end": 983
                      },
                      "start": 970,
                      "end": 983
                    },
                    "start": 969,
                    "end": 983
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 988,
                          "end": 993
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 994,
                                "end": 1001
                              },
                              "typeArguments": null,
                              "start": 994,
                              "end": 1001
                            }
                          ],
                          "start": 993,
                          "end": 1002
                        },
                        "start": 988,
                        "end": 1002
                      },
                      "start": 986,
                      "end": 1002
                    },
                    "start": 985,
                    "end": 1002
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1012
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1013,
                            "end": 1020
                          },
                          "typeArguments": null,
                          "start": 1013,
                          "end": 1020
                        }
                      ],
                      "start": 1012,
                      "end": 1021
                    },
                    "start": 1007,
                    "end": 1021
                  },
                  "start": 1004,
                  "end": 1021
                },
                "start": 964,
                "end": 1021
              },
              "start": 962,
              "end": 1021
            },
            "start": 959,
            "end": 1021
          },
          "init": null,
          "definite": false,
          "start": 959,
          "end": 1021
        }
      ],
      "declare": false,
      "start": 955,
      "end": 1022
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
            "name": "a14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1042,
                              "end": 1043
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1045,
                                "end": 1051
                              },
                              "start": 1043,
                              "end": 1051
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1042,
                            "end": 1052
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1053,
                              "end": 1054
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1056,
                                "end": 1062
                              },
                              "start": 1054,
                              "end": 1062
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1053,
                            "end": 1062
                          }
                        ],
                        "start": 1040,
                        "end": 1064
                      },
                      "start": 1038,
                      "end": 1064
                    },
                    "start": 1037,
                    "end": 1064
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1075
                    },
                    "typeArguments": null,
                    "start": 1069,
                    "end": 1075
                  },
                  "start": 1066,
                  "end": 1075
                },
                "start": 1032,
                "end": 1075
              },
              "start": 1030,
              "end": 1075
            },
            "start": 1027,
            "end": 1075
          },
          "init": null,
          "definite": false,
          "start": 1027,
          "end": 1075
        }
      ],
      "declare": false,
      "start": 1023,
      "end": 1076
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
            "name": "a15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSNumberKeyword",
                            "start": 1100,
                            "end": 1106
                          },
                          "start": 1098,
                          "end": 1106
                        },
                        "start": 1097,
                        "end": 1106
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1109,
                          "end": 1115
                        },
                        "start": 1109,
                        "end": 1117
                      },
                      "start": 1107,
                      "end": 1117
                    },
                    "start": 1092,
                    "end": 1118
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSStringKeyword",
                            "start": 1131,
                            "end": 1137
                          },
                          "start": 1129,
                          "end": 1137
                        },
                        "start": 1128,
                        "end": 1137
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1140,
                          "end": 1146
                        },
                        "start": 1140,
                        "end": 1148
                      },
                      "start": 1138,
                      "end": 1148
                    },
                    "start": 1123,
                    "end": 1149
                  }
                ],
                "start": 1086,
                "end": 1151
              },
              "start": 1084,
              "end": 1151
            },
            "start": 1081,
            "end": 1151
          },
          "init": null,
          "definite": false,
          "start": 1081,
          "end": 1151
        }
      ],
      "declare": false,
      "start": 1077,
      "end": 1151
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
            "name": "a16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 1172,
                            "end": 1173
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1182,
                              "end": 1189
                            },
                            "typeArguments": null,
                            "start": 1182,
                            "end": 1189
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1172,
                          "end": 1189
                        }
                      ],
                      "start": 1171,
                      "end": 1190
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1194,
                              "end": 1195
                            },
                            "typeArguments": null,
                            "start": 1194,
                            "end": 1195
                          },
                          "start": 1192,
                          "end": 1195
                        },
                        "start": 1191,
                        "end": 1195
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1198,
                          "end": 1204
                        },
                        "start": 1198,
                        "end": 1206
                      },
                      "start": 1196,
                      "end": 1206
                    },
                    "start": 1167,
                    "end": 1207
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1217,
                            "end": 1218
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1227,
                              "end": 1231
                            },
                            "typeArguments": null,
                            "start": 1227,
                            "end": 1231
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1217,
                          "end": 1231
                        }
                      ],
                      "start": 1216,
                      "end": 1232
                    },
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1236,
                              "end": 1237
                            },
                            "typeArguments": null,
                            "start": 1236,
                            "end": 1237
                          },
                          "start": 1234,
                          "end": 1237
                        },
                        "start": 1233,
                        "end": 1237
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1240,
                          "end": 1246
                        },
                        "start": 1240,
                        "end": 1248
                      },
                      "start": 1238,
                      "end": 1248
                    },
                    "start": 1212,
                    "end": 1249
                  }
                ],
                "start": 1161,
                "end": 1251
              },
              "start": 1159,
              "end": 1251
            },
            "start": 1156,
            "end": 1251
          },
          "init": null,
          "definite": false,
          "start": 1156,
          "end": 1251
        }
      ],
      "declare": false,
      "start": 1152,
      "end": 1251
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
            "name": "a17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1283,
                                    "end": 1289
                                  },
                                  "start": 1281,
                                  "end": 1289
                                },
                                "start": 1280,
                                "end": 1289
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1294,
                                "end": 1300
                              },
                              "start": 1291,
                              "end": 1300
                            },
                            "start": 1275,
                            "end": 1300
                          },
                          "start": 1273,
                          "end": 1300
                        },
                        "start": 1272,
                        "end": 1300
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1303,
                          "end": 1309
                        },
                        "start": 1303,
                        "end": 1311
                      },
                      "start": 1301,
                      "end": 1311
                    },
                    "start": 1267,
                    "end": 1312
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1333,
                                    "end": 1339
                                  },
                                  "start": 1331,
                                  "end": 1339
                                },
                                "start": 1330,
                                "end": 1339
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1344,
                                "end": 1350
                              },
                              "start": 1341,
                              "end": 1350
                            },
                            "start": 1325,
                            "end": 1350
                          },
                          "start": 1323,
                          "end": 1350
                        },
                        "start": 1322,
                        "end": 1350
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1353,
                          "end": 1359
                        },
                        "start": 1353,
                        "end": 1361
                      },
                      "start": 1351,
                      "end": 1361
                    },
                    "start": 1317,
                    "end": 1362
                  }
                ],
                "start": 1261,
                "end": 1364
              },
              "start": 1259,
              "end": 1364
            },
            "start": 1256,
            "end": 1364
          },
          "init": null,
          "definite": false,
          "start": 1256,
          "end": 1364
        }
      ],
      "declare": false,
      "start": 1252,
      "end": 1365
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
            "name": "a18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1407,
                                        "end": 1413
                                      },
                                      "start": 1405,
                                      "end": 1413
                                    },
                                    "start": 1404,
                                    "end": 1413
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1416,
                                    "end": 1422
                                  },
                                  "start": 1414,
                                  "end": 1422
                                },
                                "start": 1399,
                                "end": 1423
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1440,
                                        "end": 1446
                                      },
                                      "start": 1438,
                                      "end": 1446
                                    },
                                    "start": 1437,
                                    "end": 1446
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1449,
                                    "end": 1455
                                  },
                                  "start": 1447,
                                  "end": 1455
                                },
                                "start": 1432,
                                "end": 1456
                              }
                            ],
                            "start": 1389,
                            "end": 1462
                          },
                          "start": 1387,
                          "end": 1462
                        },
                        "start": 1386,
                        "end": 1462
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1465,
                          "end": 1468
                        },
                        "start": 1465,
                        "end": 1470
                      },
                      "start": 1463,
                      "end": 1470
                    },
                    "start": 1381,
                    "end": 1471
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1502,
                                        "end": 1509
                                      },
                                      "start": 1500,
                                      "end": 1509
                                    },
                                    "start": 1499,
                                    "end": 1509
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1512,
                                    "end": 1519
                                  },
                                  "start": 1510,
                                  "end": 1519
                                },
                                "start": 1494,
                                "end": 1520
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
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
                                          "name": "Date",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1537,
                                          "end": 1541
                                        },
                                        "typeArguments": null,
                                        "start": 1537,
                                        "end": 1541
                                      },
                                      "start": 1535,
                                      "end": 1541
                                    },
                                    "start": 1534,
                                    "end": 1541
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1544,
                                      "end": 1548
                                    },
                                    "typeArguments": null,
                                    "start": 1544,
                                    "end": 1548
                                  },
                                  "start": 1542,
                                  "end": 1548
                                },
                                "start": 1529,
                                "end": 1549
                              }
                            ],
                            "start": 1484,
                            "end": 1555
                          },
                          "start": 1482,
                          "end": 1555
                        },
                        "start": 1481,
                        "end": 1555
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1558,
                          "end": 1561
                        },
                        "start": 1558,
                        "end": 1563
                      },
                      "start": 1556,
                      "end": 1563
                    },
                    "start": 1476,
                    "end": 1564
                  }
                ],
                "start": 1375,
                "end": 1566
              },
              "start": 1373,
              "end": 1566
            },
            "start": 1370,
            "end": 1566
          },
          "init": null,
          "definite": false,
          "start": 1370,
          "end": 1566
        }
      ],
      "declare": false,
      "start": 1366,
      "end": 1566
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1580,
                        "end": 1581
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1580,
                      "end": 1581
                    }
                  ],
                  "start": 1579,
                  "end": 1582
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1586,
                          "end": 1587
                        },
                        "typeArguments": null,
                        "start": 1586,
                        "end": 1587
                      },
                      "start": 1584,
                      "end": 1587
                    },
                    "start": 1583,
                    "end": 1587
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1592,
                        "end": 1593
                      },
                      "typeArguments": null,
                      "start": 1592,
                      "end": 1593
                    },
                    "start": 1592,
                    "end": 1595
                  },
                  "start": 1589,
                  "end": 1595
                },
                "start": 1575,
                "end": 1595
              },
              "start": 1573,
              "end": 1595
            },
            "start": 1572,
            "end": 1595
          },
          "init": null,
          "definite": false,
          "start": 1572,
          "end": 1595
        }
      ],
      "declare": false,
      "start": 1568,
      "end": 1596
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
          "start": 1598,
          "end": 1599
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1602,
          "end": 1603
        },
        "start": 1598,
        "end": 1603
      },
      "directive": null,
      "start": 1598,
      "end": 1604
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
          "start": 1611,
          "end": 1612
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1615,
          "end": 1616
        },
        "start": 1611,
        "end": 1616
      },
      "directive": null,
      "start": 1611,
      "end": 1617
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1637,
                        "end": 1638
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1637,
                      "end": 1638
                    }
                  ],
                  "start": 1636,
                  "end": 1639
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1643,
                          "end": 1644
                        },
                        "typeArguments": null,
                        "start": 1643,
                        "end": 1644
                      },
                      "start": 1641,
                      "end": 1644
                    },
                    "start": 1640,
                    "end": 1644
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1649,
                      "end": 1655
                    },
                    "start": 1649,
                    "end": 1657
                  },
                  "start": 1646,
                  "end": 1657
                },
                "start": 1632,
                "end": 1657
              },
              "start": 1630,
              "end": 1657
            },
            "start": 1628,
            "end": 1657
          },
          "init": null,
          "definite": false,
          "start": 1628,
          "end": 1657
        }
      ],
      "declare": false,
      "start": 1624,
      "end": 1658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1660,
          "end": 1662
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1665,
          "end": 1667
        },
        "start": 1660,
        "end": 1667
      },
      "directive": null,
      "start": 1660,
      "end": 1668
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
          "start": 1676,
          "end": 1678
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1681,
          "end": 1683
        },
        "start": 1676,
        "end": 1683
      },
      "directive": null,
      "start": 1676,
      "end": 1684
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1704,
                        "end": 1705
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1704,
                      "end": 1705
                    }
                  ],
                  "start": 1703,
                  "end": 1706
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1710,
                          "end": 1711
                        },
                        "typeArguments": null,
                        "start": 1710,
                        "end": 1711
                      },
                      "start": 1708,
                      "end": 1711
                    },
                    "start": 1707,
                    "end": 1711
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1716,
                      "end": 1717
                    },
                    "typeArguments": null,
                    "start": 1716,
                    "end": 1717
                  },
                  "start": 1713,
                  "end": 1717
                },
                "start": 1699,
                "end": 1717
              },
              "start": 1697,
              "end": 1717
            },
            "start": 1695,
            "end": 1717
          },
          "init": null,
          "definite": false,
          "start": 1695,
          "end": 1717
        }
      ],
      "declare": false,
      "start": 1691,
      "end": 1718
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
          "start": 1720,
          "end": 1722
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1725,
          "end": 1727
        },
        "start": 1720,
        "end": 1727
      },
      "directive": null,
      "start": 1720,
      "end": 1728
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
          "start": 1735,
          "end": 1737
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1740,
          "end": 1742
        },
        "start": 1735,
        "end": 1742
      },
      "directive": null,
      "start": 1735,
      "end": 1743
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1763,
                        "end": 1764
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1763,
                      "end": 1764
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1766,
                        "end": 1767
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1766,
                      "end": 1767
                    }
                  ],
                  "start": 1762,
                  "end": 1768
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1772,
                          "end": 1773
                        },
                        "typeArguments": null,
                        "start": 1772,
                        "end": 1773
                      },
                      "start": 1770,
                      "end": 1773
                    },
                    "start": 1769,
                    "end": 1773
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1778,
                          "end": 1779
                        },
                        "typeArguments": null,
                        "start": 1778,
                        "end": 1779
                      },
                      "start": 1776,
                      "end": 1779
                    },
                    "start": 1775,
                    "end": 1779
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1784,
                      "end": 1785
                    },
                    "typeArguments": null,
                    "start": 1784,
                    "end": 1785
                  },
                  "start": 1781,
                  "end": 1785
                },
                "start": 1758,
                "end": 1785
              },
              "start": 1756,
              "end": 1785
            },
            "start": 1754,
            "end": 1785
          },
          "init": null,
          "definite": false,
          "start": 1754,
          "end": 1785
        }
      ],
      "declare": false,
      "start": 1750,
      "end": 1786
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1788,
          "end": 1790
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1793,
          "end": 1795
        },
        "start": 1788,
        "end": 1795
      },
      "directive": null,
      "start": 1788,
      "end": 1796
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
          "start": 1803,
          "end": 1805
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1808,
          "end": 1810
        },
        "start": 1803,
        "end": 1810
      },
      "directive": null,
      "start": 1803,
      "end": 1811
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1831,
                        "end": 1832
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1831,
                      "end": 1832
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1834,
                        "end": 1835
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1834,
                      "end": 1835
                    }
                  ],
                  "start": 1830,
                  "end": 1836
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                            "name": "arg",
                            "optional": false,
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
                                  "start": 1846,
                                  "end": 1847
                                },
                                "typeArguments": null,
                                "start": 1846,
                                "end": 1847
                              },
                              "start": 1844,
                              "end": 1847
                            },
                            "start": 1841,
                            "end": 1847
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1852,
                              "end": 1853
                            },
                            "typeArguments": null,
                            "start": 1852,
                            "end": 1853
                          },
                          "start": 1849,
                          "end": 1853
                        },
                        "start": 1840,
                        "end": 1853
                      },
                      "start": 1838,
                      "end": 1853
                    },
                    "start": 1837,
                    "end": 1853
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1858,
                      "end": 1859
                    },
                    "typeArguments": null,
                    "start": 1858,
                    "end": 1859
                  },
                  "start": 1855,
                  "end": 1859
                },
                "start": 1826,
                "end": 1859
              },
              "start": 1824,
              "end": 1859
            },
            "start": 1822,
            "end": 1859
          },
          "init": null,
          "definite": false,
          "start": 1822,
          "end": 1859
        }
      ],
      "declare": false,
      "start": 1818,
      "end": 1860
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1862,
          "end": 1864
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1867,
          "end": 1869
        },
        "start": 1862,
        "end": 1869
      },
      "directive": null,
      "start": 1862,
      "end": 1870
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1877,
          "end": 1879
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1882,
          "end": 1884
        },
        "start": 1877,
        "end": 1884
      },
      "directive": null,
      "start": 1877,
      "end": 1885
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1905,
                        "end": 1906
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1915,
                          "end": 1919
                        },
                        "typeArguments": null,
                        "start": 1915,
                        "end": 1919
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1905,
                      "end": 1919
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1921,
                        "end": 1922
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1931,
                          "end": 1938
                        },
                        "typeArguments": null,
                        "start": 1931,
                        "end": 1938
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1921,
                      "end": 1938
                    }
                  ],
                  "start": 1904,
                  "end": 1939
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                            "name": "arg",
                            "optional": false,
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
                                  "start": 1949,
                                  "end": 1950
                                },
                                "typeArguments": null,
                                "start": 1949,
                                "end": 1950
                              },
                              "start": 1947,
                              "end": 1950
                            },
                            "start": 1944,
                            "end": 1950
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1955,
                              "end": 1956
                            },
                            "typeArguments": null,
                            "start": 1955,
                            "end": 1956
                          },
                          "start": 1952,
                          "end": 1956
                        },
                        "start": 1943,
                        "end": 1956
                      },
                      "start": 1941,
                      "end": 1956
                    },
                    "start": 1940,
                    "end": 1956
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1961,
                      "end": 1962
                    },
                    "typeArguments": null,
                    "start": 1961,
                    "end": 1962
                  },
                  "start": 1958,
                  "end": 1962
                },
                "start": 1900,
                "end": 1962
              },
              "start": 1898,
              "end": 1962
            },
            "start": 1896,
            "end": 1962
          },
          "init": null,
          "definite": false,
          "start": 1896,
          "end": 1962
        }
      ],
      "declare": false,
      "start": 1892,
      "end": 1963
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1965,
          "end": 1967
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1970,
          "end": 1972
        },
        "start": 1965,
        "end": 1972
      },
      "directive": null,
      "start": 1965,
      "end": 1973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1980,
          "end": 1982
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1985,
          "end": 1987
        },
        "start": 1980,
        "end": 1987
      },
      "directive": null,
      "start": 1980,
      "end": 1988
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2008,
                        "end": 2009
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2018,
                          "end": 2022
                        },
                        "typeArguments": null,
                        "start": 2018,
                        "end": 2022
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2008,
                      "end": 2022
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2024,
                        "end": 2025
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2034,
                          "end": 2041
                        },
                        "typeArguments": null,
                        "start": 2034,
                        "end": 2041
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2024,
                      "end": 2041
                    }
                  ],
                  "start": 2007,
                  "end": 2042
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                            "name": "arg",
                            "optional": false,
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
                                  "start": 2052,
                                  "end": 2053
                                },
                                "typeArguments": null,
                                "start": 2052,
                                "end": 2053
                              },
                              "start": 2050,
                              "end": 2053
                            },
                            "start": 2047,
                            "end": 2053
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2058,
                              "end": 2059
                            },
                            "typeArguments": null,
                            "start": 2058,
                            "end": 2059
                          },
                          "start": 2055,
                          "end": 2059
                        },
                        "start": 2046,
                        "end": 2059
                      },
                      "start": 2044,
                      "end": 2059
                    },
                    "start": 2043,
                    "end": 2059
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 2068,
                              "end": 2069
                            },
                            "typeArguments": null,
                            "start": 2068,
                            "end": 2069
                          },
                          "start": 2066,
                          "end": 2069
                        },
                        "start": 2065,
                        "end": 2069
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2074,
                          "end": 2075
                        },
                        "typeArguments": null,
                        "start": 2074,
                        "end": 2075
                      },
                      "start": 2071,
                      "end": 2075
                    },
                    "start": 2064,
                    "end": 2075
                  },
                  "start": 2061,
                  "end": 2075
                },
                "start": 2003,
                "end": 2075
              },
              "start": 2001,
              "end": 2075
            },
            "start": 1999,
            "end": 2075
          },
          "init": null,
          "definite": false,
          "start": 1999,
          "end": 2075
        }
      ],
      "declare": false,
      "start": 1995,
      "end": 2076
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2078,
          "end": 2080
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2083,
          "end": 2085
        },
        "start": 2078,
        "end": 2085
      },
      "directive": null,
      "start": 2078,
      "end": 2086
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2093,
          "end": 2095
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2098,
          "end": 2100
        },
        "start": 2093,
        "end": 2100
      },
      "directive": null,
      "start": 2093,
      "end": 2101
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
            "name": "b8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2121,
                        "end": 2122
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2131,
                          "end": 2135
                        },
                        "typeArguments": null,
                        "start": 2131,
                        "end": 2135
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2121,
                      "end": 2135
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2137,
                        "end": 2138
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2147,
                          "end": 2154
                        },
                        "typeArguments": null,
                        "start": 2147,
                        "end": 2154
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2137,
                      "end": 2154
                    }
                  ],
                  "start": 2120,
                  "end": 2155
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                            "name": "arg",
                            "optional": false,
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
                                  "start": 2165,
                                  "end": 2166
                                },
                                "typeArguments": null,
                                "start": 2165,
                                "end": 2166
                              },
                              "start": 2163,
                              "end": 2166
                            },
                            "start": 2160,
                            "end": 2166
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2171,
                              "end": 2172
                            },
                            "typeArguments": null,
                            "start": 2171,
                            "end": 2172
                          },
                          "start": 2168,
                          "end": 2172
                        },
                        "start": 2159,
                        "end": 2172
                      },
                      "start": 2157,
                      "end": 2172
                    },
                    "start": 2156,
                    "end": 2172
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
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
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
                                  "start": 2184,
                                  "end": 2185
                                },
                                "typeArguments": null,
                                "start": 2184,
                                "end": 2185
                              },
                              "start": 2182,
                              "end": 2185
                            },
                            "start": 2178,
                            "end": 2185
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2190,
                              "end": 2191
                            },
                            "typeArguments": null,
                            "start": 2190,
                            "end": 2191
                          },
                          "start": 2187,
                          "end": 2191
                        },
                        "start": 2177,
                        "end": 2191
                      },
                      "start": 2175,
                      "end": 2191
                    },
                    "start": 2174,
                    "end": 2191
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 2200,
                              "end": 2201
                            },
                            "typeArguments": null,
                            "start": 2200,
                            "end": 2201
                          },
                          "start": 2198,
                          "end": 2201
                        },
                        "start": 2197,
                        "end": 2201
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2206,
                          "end": 2207
                        },
                        "typeArguments": null,
                        "start": 2206,
                        "end": 2207
                      },
                      "start": 2203,
                      "end": 2207
                    },
                    "start": 2196,
                    "end": 2207
                  },
                  "start": 2193,
                  "end": 2207
                },
                "start": 2116,
                "end": 2207
              },
              "start": 2114,
              "end": 2207
            },
            "start": 2112,
            "end": 2207
          },
          "init": null,
          "definite": false,
          "start": 2112,
          "end": 2207
        }
      ],
      "declare": false,
      "start": 2108,
      "end": 2208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2209,
          "end": 2211
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2214,
          "end": 2216
        },
        "start": 2209,
        "end": 2216
      },
      "directive": null,
      "start": 2209,
      "end": 2217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2224,
          "end": 2226
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2229,
          "end": 2231
        },
        "start": 2224,
        "end": 2231
      },
      "directive": null,
      "start": 2224,
      "end": 2232
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
            "name": "b9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2252,
                        "end": 2253
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2262,
                          "end": 2266
                        },
                        "typeArguments": null,
                        "start": 2262,
                        "end": 2266
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2252,
                      "end": 2266
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2268,
                        "end": 2269
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2278,
                          "end": 2285
                        },
                        "typeArguments": null,
                        "start": 2278,
                        "end": 2285
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2268,
                      "end": 2285
                    }
                  ],
                  "start": 2251,
                  "end": 2286
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                            "name": "arg",
                            "optional": false,
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
                                  "start": 2296,
                                  "end": 2297
                                },
                                "typeArguments": null,
                                "start": 2296,
                                "end": 2297
                              },
                              "start": 2294,
                              "end": 2297
                            },
                            "start": 2291,
                            "end": 2297
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2302,
                              "end": 2303
                            },
                            "typeArguments": null,
                            "start": 2302,
                            "end": 2303
                          },
                          "start": 2299,
                          "end": 2303
                        },
                        "start": 2290,
                        "end": 2303
                      },
                      "start": 2288,
                      "end": 2303
                    },
                    "start": 2287,
                    "end": 2303
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
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg2",
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
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2317,
                                      "end": 2320
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2322,
                                        "end": 2328
                                      },
                                      "start": 2320,
                                      "end": 2328
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2317,
                                    "end": 2329
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2330,
                                      "end": 2334
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2336,
                                        "end": 2342
                                      },
                                      "start": 2334,
                                      "end": 2342
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2330,
                                    "end": 2342
                                  }
                                ],
                                "start": 2315,
                                "end": 2344
                              },
                              "start": 2313,
                              "end": 2344
                            },
                            "start": 2309,
                            "end": 2344
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2349,
                              "end": 2350
                            },
                            "typeArguments": null,
                            "start": 2349,
                            "end": 2350
                          },
                          "start": 2346,
                          "end": 2350
                        },
                        "start": 2308,
                        "end": 2350
                      },
                      "start": 2306,
                      "end": 2350
                    },
                    "start": 2305,
                    "end": 2350
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 2359,
                              "end": 2360
                            },
                            "typeArguments": null,
                            "start": 2359,
                            "end": 2360
                          },
                          "start": 2357,
                          "end": 2360
                        },
                        "start": 2356,
                        "end": 2360
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2365,
                          "end": 2366
                        },
                        "typeArguments": null,
                        "start": 2365,
                        "end": 2366
                      },
                      "start": 2362,
                      "end": 2366
                    },
                    "start": 2355,
                    "end": 2366
                  },
                  "start": 2352,
                  "end": 2366
                },
                "start": 2247,
                "end": 2366
              },
              "start": 2245,
              "end": 2366
            },
            "start": 2243,
            "end": 2366
          },
          "init": null,
          "definite": false,
          "start": 2243,
          "end": 2366
        }
      ],
      "declare": false,
      "start": 2239,
      "end": 2367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2369,
          "end": 2371
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2374,
          "end": 2376
        },
        "start": 2369,
        "end": 2376
      },
      "directive": null,
      "start": 2369,
      "end": 2377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2384,
          "end": 2386
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2389,
          "end": 2391
        },
        "start": 2384,
        "end": 2391
      },
      "directive": null,
      "start": 2384,
      "end": 2392
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
            "name": "b10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2413,
                        "end": 2414
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2423,
                          "end": 2430
                        },
                        "typeArguments": null,
                        "start": 2423,
                        "end": 2430
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2413,
                      "end": 2430
                    }
                  ],
                  "start": 2412,
                  "end": 2431
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2435,
                      "end": 2436
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2438,
                            "end": 2439
                          },
                          "typeArguments": null,
                          "start": 2438,
                          "end": 2439
                        },
                        "start": 2438,
                        "end": 2441
                      },
                      "start": 2436,
                      "end": 2441
                    },
                    "value": null,
                    "start": 2432,
                    "end": 2441
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2446,
                      "end": 2447
                    },
                    "typeArguments": null,
                    "start": 2446,
                    "end": 2447
                  },
                  "start": 2443,
                  "end": 2447
                },
                "start": 2408,
                "end": 2447
              },
              "start": 2406,
              "end": 2447
            },
            "start": 2403,
            "end": 2447
          },
          "init": null,
          "definite": false,
          "start": 2403,
          "end": 2447
        }
      ],
      "declare": false,
      "start": 2399,
      "end": 2448
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2450,
          "end": 2453
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2456,
          "end": 2459
        },
        "start": 2450,
        "end": 2459
      },
      "directive": null,
      "start": 2450,
      "end": 2460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2467,
          "end": 2470
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2473,
          "end": 2476
        },
        "start": 2467,
        "end": 2476
      },
      "directive": null,
      "start": 2467,
      "end": 2477
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
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2498,
                        "end": 2499
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2508,
                          "end": 2512
                        },
                        "typeArguments": null,
                        "start": 2508,
                        "end": 2512
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2498,
                      "end": 2512
                    }
                  ],
                  "start": 2497,
                  "end": 2513
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2517,
                          "end": 2518
                        },
                        "typeArguments": null,
                        "start": 2517,
                        "end": 2518
                      },
                      "start": 2515,
                      "end": 2518
                    },
                    "start": 2514,
                    "end": 2518
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                          "start": 2523,
                          "end": 2524
                        },
                        "typeArguments": null,
                        "start": 2523,
                        "end": 2524
                      },
                      "start": 2521,
                      "end": 2524
                    },
                    "start": 2520,
                    "end": 2524
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2529,
                      "end": 2530
                    },
                    "typeArguments": null,
                    "start": 2529,
                    "end": 2530
                  },
                  "start": 2526,
                  "end": 2530
                },
                "start": 2493,
                "end": 2530
              },
              "start": 2491,
              "end": 2530
            },
            "start": 2488,
            "end": 2530
          },
          "init": null,
          "definite": false,
          "start": 2488,
          "end": 2530
        }
      ],
      "declare": false,
      "start": 2484,
      "end": 2531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2533,
          "end": 2536
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2539,
          "end": 2542
        },
        "start": 2533,
        "end": 2542
      },
      "directive": null,
      "start": 2533,
      "end": 2543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2550,
          "end": 2553
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2556,
          "end": 2559
        },
        "start": 2550,
        "end": 2559
      },
      "directive": null,
      "start": 2550,
      "end": 2560
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
            "name": "b12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2581,
                        "end": 2582
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2591,
                          "end": 2596
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
                                "start": 2597,
                                "end": 2601
                              },
                              "typeArguments": null,
                              "start": 2597,
                              "end": 2601
                            }
                          ],
                          "start": 2596,
                          "end": 2602
                        },
                        "start": 2591,
                        "end": 2602
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2581,
                      "end": 2602
                    }
                  ],
                  "start": 2580,
                  "end": 2603
                },
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2607,
                          "end": 2612
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
                                "start": 2613,
                                "end": 2617
                              },
                              "typeArguments": null,
                              "start": 2613,
                              "end": 2617
                            }
                          ],
                          "start": 2612,
                          "end": 2618
                        },
                        "start": 2607,
                        "end": 2618
                      },
                      "start": 2605,
                      "end": 2618
                    },
                    "start": 2604,
                    "end": 2618
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                          "start": 2623,
                          "end": 2624
                        },
                        "typeArguments": null,
                        "start": 2623,
                        "end": 2624
                      },
                      "start": 2621,
                      "end": 2624
                    },
                    "start": 2620,
                    "end": 2624
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2629,
                      "end": 2634
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2635,
                            "end": 2642
                          },
                          "typeArguments": null,
                          "start": 2635,
                          "end": 2642
                        }
                      ],
                      "start": 2634,
                      "end": 2643
                    },
                    "start": 2629,
                    "end": 2643
                  },
                  "start": 2626,
                  "end": 2643
                },
                "start": 2576,
                "end": 2643
              },
              "start": 2574,
              "end": 2643
            },
            "start": 2571,
            "end": 2643
          },
          "init": null,
          "definite": false,
          "start": 2571,
          "end": 2643
        }
      ],
      "declare": false,
      "start": 2567,
      "end": 2644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2646,
          "end": 2649
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2652,
          "end": 2655
        },
        "start": 2646,
        "end": 2655
      },
      "directive": null,
      "start": 2646,
      "end": 2656
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2663,
          "end": 2666
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2669,
          "end": 2672
        },
        "start": 2663,
        "end": 2672
      },
      "directive": null,
      "start": 2663,
      "end": 2673
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
            "name": "b13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2694,
                        "end": 2695
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2704,
                          "end": 2709
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2710,
                                "end": 2717
                              },
                              "typeArguments": null,
                              "start": 2710,
                              "end": 2717
                            }
                          ],
                          "start": 2709,
                          "end": 2718
                        },
                        "start": 2704,
                        "end": 2718
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2694,
                      "end": 2718
                    }
                  ],
                  "start": 2693,
                  "end": 2719
                },
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2723,
                          "end": 2728
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
                                "start": 2729,
                                "end": 2733
                              },
                              "typeArguments": null,
                              "start": 2729,
                              "end": 2733
                            }
                          ],
                          "start": 2728,
                          "end": 2734
                        },
                        "start": 2723,
                        "end": 2734
                      },
                      "start": 2721,
                      "end": 2734
                    },
                    "start": 2720,
                    "end": 2734
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                          "start": 2739,
                          "end": 2740
                        },
                        "typeArguments": null,
                        "start": 2739,
                        "end": 2740
                      },
                      "start": 2737,
                      "end": 2740
                    },
                    "start": 2736,
                    "end": 2740
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2745,
                      "end": 2746
                    },
                    "typeArguments": null,
                    "start": 2745,
                    "end": 2746
                  },
                  "start": 2742,
                  "end": 2746
                },
                "start": 2689,
                "end": 2746
              },
              "start": 2687,
              "end": 2746
            },
            "start": 2684,
            "end": 2746
          },
          "init": null,
          "definite": false,
          "start": 2684,
          "end": 2746
        }
      ],
      "declare": false,
      "start": 2680,
      "end": 2747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2749,
          "end": 2752
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2755,
          "end": 2758
        },
        "start": 2749,
        "end": 2758
      },
      "directive": null,
      "start": 2749,
      "end": 2759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2766,
          "end": 2769
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2772,
          "end": 2775
        },
        "start": 2766,
        "end": 2775
      },
      "directive": null,
      "start": 2766,
      "end": 2776
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
            "name": "b14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2797,
                        "end": 2798
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2797,
                      "end": 2798
                    }
                  ],
                  "start": 2796,
                  "end": 2799
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2805,
                              "end": 2806
                            },
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
                                  "start": 2808,
                                  "end": 2809
                                },
                                "typeArguments": null,
                                "start": 2808,
                                "end": 2809
                              },
                              "start": 2806,
                              "end": 2809
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2805,
                            "end": 2810
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2811,
                              "end": 2812
                            },
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
                                  "start": 2814,
                                  "end": 2815
                                },
                                "typeArguments": null,
                                "start": 2814,
                                "end": 2815
                              },
                              "start": 2812,
                              "end": 2815
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2811,
                            "end": 2815
                          }
                        ],
                        "start": 2803,
                        "end": 2817
                      },
                      "start": 2801,
                      "end": 2817
                    },
                    "start": 2800,
                    "end": 2817
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2822,
                      "end": 2823
                    },
                    "typeArguments": null,
                    "start": 2822,
                    "end": 2823
                  },
                  "start": 2819,
                  "end": 2823
                },
                "start": 2792,
                "end": 2823
              },
              "start": 2790,
              "end": 2823
            },
            "start": 2787,
            "end": 2823
          },
          "init": null,
          "definite": false,
          "start": 2787,
          "end": 2823
        }
      ],
      "declare": false,
      "start": 2783,
      "end": 2824
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2826,
          "end": 2829
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2832,
          "end": 2835
        },
        "start": 2826,
        "end": 2835
      },
      "directive": null,
      "start": 2826,
      "end": 2836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2843,
          "end": 2846
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2849,
          "end": 2852
        },
        "start": 2843,
        "end": 2852
      },
      "directive": null,
      "start": 2843,
      "end": 2853
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
            "name": "b15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2874,
                        "end": 2875
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2874,
                      "end": 2875
                    }
                  ],
                  "start": 2873,
                  "end": 2876
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2880,
                          "end": 2881
                        },
                        "typeArguments": null,
                        "start": 2880,
                        "end": 2881
                      },
                      "start": 2878,
                      "end": 2881
                    },
                    "start": 2877,
                    "end": 2881
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2886,
                        "end": 2887
                      },
                      "typeArguments": null,
                      "start": 2886,
                      "end": 2887
                    },
                    "start": 2886,
                    "end": 2889
                  },
                  "start": 2883,
                  "end": 2889
                },
                "start": 2869,
                "end": 2889
              },
              "start": 2867,
              "end": 2889
            },
            "start": 2864,
            "end": 2889
          },
          "init": null,
          "definite": false,
          "start": 2864,
          "end": 2889
        }
      ],
      "declare": false,
      "start": 2860,
      "end": 2890
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 2892,
          "end": 2895
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 2898,
          "end": 2901
        },
        "start": 2892,
        "end": 2901
      },
      "directive": null,
      "start": 2892,
      "end": 2902
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 2909,
          "end": 2912
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 2915,
          "end": 2918
        },
        "start": 2909,
        "end": 2918
      },
      "directive": null,
      "start": 2909,
      "end": 2919
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
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 2940,
                        "end": 2941
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2950,
                          "end": 2954
                        },
                        "typeArguments": null,
                        "start": 2950,
                        "end": 2954
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2940,
                      "end": 2954
                    }
                  ],
                  "start": 2939,
                  "end": 2955
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2959,
                          "end": 2960
                        },
                        "typeArguments": null,
                        "start": 2959,
                        "end": 2960
                      },
                      "start": 2957,
                      "end": 2960
                    },
                    "start": 2956,
                    "end": 2960
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2965,
                      "end": 2971
                    },
                    "start": 2965,
                    "end": 2973
                  },
                  "start": 2962,
                  "end": 2973
                },
                "start": 2935,
                "end": 2973
              },
              "start": 2933,
              "end": 2973
            },
            "start": 2930,
            "end": 2973
          },
          "init": null,
          "definite": false,
          "start": 2930,
          "end": 2973
        }
      ],
      "declare": false,
      "start": 2926,
      "end": 2974
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 2975,
          "end": 2978
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 2981,
          "end": 2984
        },
        "start": 2975,
        "end": 2984
      },
      "directive": null,
      "start": 2975,
      "end": 2985
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 2992,
          "end": 2995
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 2998,
          "end": 3001
        },
        "start": 2992,
        "end": 3001
      },
      "directive": null,
      "start": 2992,
      "end": 3002
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
            "name": "b17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 3023,
                        "end": 3024
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3023,
                      "end": 3024
                    }
                  ],
                  "start": 3022,
                  "end": 3025
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3037,
                                  "end": 3038
                                },
                                "typeArguments": null,
                                "start": 3037,
                                "end": 3038
                              },
                              "start": 3035,
                              "end": 3038
                            },
                            "start": 3034,
                            "end": 3038
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3043,
                              "end": 3044
                            },
                            "typeArguments": null,
                            "start": 3043,
                            "end": 3044
                          },
                          "start": 3040,
                          "end": 3044
                        },
                        "start": 3029,
                        "end": 3044
                      },
                      "start": 3027,
                      "end": 3044
                    },
                    "start": 3026,
                    "end": 3044
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3049,
                        "end": 3050
                      },
                      "typeArguments": null,
                      "start": 3049,
                      "end": 3050
                    },
                    "start": 3049,
                    "end": 3052
                  },
                  "start": 3046,
                  "end": 3052
                },
                "start": 3018,
                "end": 3052
              },
              "start": 3016,
              "end": 3052
            },
            "start": 3013,
            "end": 3052
          },
          "init": null,
          "definite": false,
          "start": 3013,
          "end": 3052
        }
      ],
      "declare": false,
      "start": 3009,
      "end": 3053
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3060,
          "end": 3063
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3066,
          "end": 3069
        },
        "start": 3060,
        "end": 3069
      },
      "directive": null,
      "start": 3060,
      "end": 3070
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3077,
          "end": 3080
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3083,
          "end": 3086
        },
        "start": 3077,
        "end": 3086
      },
      "directive": null,
      "start": 3077,
      "end": 3087
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
            "name": "b18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 3108,
                        "end": 3109
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3108,
                      "end": 3109
                    }
                  ],
                  "start": 3107,
                  "end": 3110
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3122,
                                  "end": 3123
                                },
                                "typeArguments": null,
                                "start": 3122,
                                "end": 3123
                              },
                              "start": 3120,
                              "end": 3123
                            },
                            "start": 3119,
                            "end": 3123
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3128,
                              "end": 3129
                            },
                            "typeArguments": null,
                            "start": 3128,
                            "end": 3129
                          },
                          "start": 3125,
                          "end": 3129
                        },
                        "start": 3114,
                        "end": 3129
                      },
                      "start": 3112,
                      "end": 3129
                    },
                    "start": 3111,
                    "end": 3129
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3134,
                        "end": 3135
                      },
                      "typeArguments": null,
                      "start": 3134,
                      "end": 3135
                    },
                    "start": 3134,
                    "end": 3137
                  },
                  "start": 3131,
                  "end": 3137
                },
                "start": 3103,
                "end": 3137
              },
              "start": 3101,
              "end": 3137
            },
            "start": 3098,
            "end": 3137
          },
          "init": null,
          "definite": false,
          "start": 3098,
          "end": 3137
        }
      ],
      "declare": false,
      "start": 3094,
      "end": 3138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3140,
          "end": 3143
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3146,
          "end": 3149
        },
        "start": 3140,
        "end": 3149
      },
      "directive": null,
      "start": 3140,
      "end": 3150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3157,
          "end": 3160
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3163,
          "end": 3166
        },
        "start": 3157,
        "end": 3166
      },
      "directive": null,
      "start": 3157,
      "end": 3167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 3173
}
```
