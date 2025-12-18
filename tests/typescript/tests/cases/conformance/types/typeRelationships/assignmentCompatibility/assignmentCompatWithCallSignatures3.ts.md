__ESTREE_TEST__:AST:
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
        "start": 112,
        "end": 116
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
              "start": 119,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
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
            "start": 119,
            "end": 131
          }
        ],
        "start": 117,
        "end": 133
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 133
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
        "start": 140,
        "end": 147
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 160
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
              "start": 163,
              "end": 166
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
              },
              "start": 166,
              "end": 174
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
            "start": 163,
            "end": 175
          }
        ],
        "start": 161,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 134,
      "end": 177
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
        "start": 184,
        "end": 192
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 208
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
              "start": 211,
              "end": 214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
              },
              "start": 214,
              "end": 222
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
            "start": 211,
            "end": 223
          }
        ],
        "start": 209,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 178,
      "end": 225
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
        "start": 232,
        "end": 244
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 257
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
              "start": 260,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 266,
                "end": 272
              },
              "start": 264,
              "end": 272
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
            "start": 260,
            "end": 273
          }
        ],
        "start": 258,
        "end": 275
      },
      "abstract": false,
      "declare": false,
      "start": 226,
      "end": 275
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
                        "type": "TSNumberKeyword",
                        "start": 288,
                        "end": 294
                      },
                      "start": 286,
                      "end": 294
                    },
                    "start": 285,
                    "end": 294
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 299,
                      "end": 305
                    },
                    "start": 299,
                    "end": 307
                  },
                  "start": 296,
                  "end": 307
                },
                "start": 284,
                "end": 307
              },
              "start": 282,
              "end": 307
            },
            "start": 281,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 307
        }
      ],
      "declare": false,
      "start": 277,
      "end": 308
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
                        "type": "TSNumberKeyword",
                        "start": 321,
                        "end": 327
                      },
                      "start": 319,
                      "end": 327
                    },
                    "start": 318,
                    "end": 327
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 332,
                      "end": 338
                    },
                    "start": 332,
                    "end": 340
                  },
                  "start": 329,
                  "end": 340
                },
                "start": 317,
                "end": 340
              },
              "start": 315,
              "end": 340
            },
            "start": 313,
            "end": 340
          },
          "init": null,
          "definite": false,
          "start": 313,
          "end": 340
        }
      ],
      "declare": false,
      "start": 309,
      "end": 341
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
                        "type": "TSNumberKeyword",
                        "start": 354,
                        "end": 360
                      },
                      "start": 352,
                      "end": 360
                    },
                    "start": 351,
                    "end": 360
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 365,
                    "end": 369
                  },
                  "start": 362,
                  "end": 369
                },
                "start": 350,
                "end": 369
              },
              "start": 348,
              "end": 369
            },
            "start": 346,
            "end": 369
          },
          "init": null,
          "definite": false,
          "start": 346,
          "end": 369
        }
      ],
      "declare": false,
      "start": 342,
      "end": 370
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
                        "type": "TSStringKeyword",
                        "start": 383,
                        "end": 389
                      },
                      "start": 381,
                      "end": 389
                    },
                    "start": 380,
                    "end": 389
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
                        "start": 394,
                        "end": 400
                      },
                      "start": 392,
                      "end": 400
                    },
                    "start": 391,
                    "end": 400
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 405,
                    "end": 411
                  },
                  "start": 402,
                  "end": 411
                },
                "start": 379,
                "end": 411
              },
              "start": 377,
              "end": 411
            },
            "start": 375,
            "end": 411
          },
          "init": null,
          "definite": false,
          "start": 375,
          "end": 411
        }
      ],
      "declare": false,
      "start": 371,
      "end": 412
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
                                "start": 431,
                                "end": 437
                              },
                              "start": 429,
                              "end": 437
                            },
                            "start": 426,
                            "end": 437
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 442,
                            "end": 448
                          },
                          "start": 439,
                          "end": 448
                        },
                        "start": 425,
                        "end": 448
                      },
                      "start": 423,
                      "end": 448
                    },
                    "start": 422,
                    "end": 448
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 453,
                    "end": 459
                  },
                  "start": 450,
                  "end": 459
                },
                "start": 421,
                "end": 459
              },
              "start": 419,
              "end": 459
            },
            "start": 417,
            "end": 459
          },
          "init": null,
          "definite": false,
          "start": 417,
          "end": 459
        }
      ],
      "declare": false,
      "start": 413,
      "end": 460
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
                                  "start": 479,
                                  "end": 483
                                },
                                "typeArguments": null,
                                "start": 479,
                                "end": 483
                              },
                              "start": 477,
                              "end": 483
                            },
                            "start": 474,
                            "end": 483
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
                              "start": 488,
                              "end": 495
                            },
                            "typeArguments": null,
                            "start": 488,
                            "end": 495
                          },
                          "start": 485,
                          "end": 495
                        },
                        "start": 473,
                        "end": 495
                      },
                      "start": 471,
                      "end": 495
                    },
                    "start": 470,
                    "end": 495
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
                      "start": 500,
                      "end": 504
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 504
                  },
                  "start": 497,
                  "end": 504
                },
                "start": 469,
                "end": 504
              },
              "start": 467,
              "end": 504
            },
            "start": 465,
            "end": 504
          },
          "init": null,
          "definite": false,
          "start": 465,
          "end": 504
        }
      ],
      "declare": false,
      "start": 461,
      "end": 505
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
                                  "start": 524,
                                  "end": 528
                                },
                                "typeArguments": null,
                                "start": 524,
                                "end": 528
                              },
                              "start": 522,
                              "end": 528
                            },
                            "start": 519,
                            "end": 528
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
                              "start": 533,
                              "end": 540
                            },
                            "typeArguments": null,
                            "start": 533,
                            "end": 540
                          },
                          "start": 530,
                          "end": 540
                        },
                        "start": 518,
                        "end": 540
                      },
                      "start": 516,
                      "end": 540
                    },
                    "start": 515,
                    "end": 540
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
                              "start": 549,
                              "end": 553
                            },
                            "typeArguments": null,
                            "start": 549,
                            "end": 553
                          },
                          "start": 547,
                          "end": 553
                        },
                        "start": 546,
                        "end": 553
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
                          "start": 558,
                          "end": 565
                        },
                        "typeArguments": null,
                        "start": 558,
                        "end": 565
                      },
                      "start": 555,
                      "end": 565
                    },
                    "start": 545,
                    "end": 565
                  },
                  "start": 542,
                  "end": 565
                },
                "start": 514,
                "end": 565
              },
              "start": 512,
              "end": 565
            },
            "start": 510,
            "end": 565
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 565
        }
      ],
      "declare": false,
      "start": 506,
      "end": 566
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
                                  "start": 585,
                                  "end": 589
                                },
                                "typeArguments": null,
                                "start": 585,
                                "end": 589
                              },
                              "start": 583,
                              "end": 589
                            },
                            "start": 580,
                            "end": 589
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
                              "start": 594,
                              "end": 601
                            },
                            "typeArguments": null,
                            "start": 594,
                            "end": 601
                          },
                          "start": 591,
                          "end": 601
                        },
                        "start": 579,
                        "end": 601
                      },
                      "start": 577,
                      "end": 601
                    },
                    "start": 576,
                    "end": 601
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
                                  "start": 613,
                                  "end": 617
                                },
                                "typeArguments": null,
                                "start": 613,
                                "end": 617
                              },
                              "start": 611,
                              "end": 617
                            },
                            "start": 607,
                            "end": 617
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
                              "start": 622,
                              "end": 629
                            },
                            "typeArguments": null,
                            "start": 622,
                            "end": 629
                          },
                          "start": 619,
                          "end": 629
                        },
                        "start": 606,
                        "end": 629
                      },
                      "start": 604,
                      "end": 629
                    },
                    "start": 603,
                    "end": 629
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
                              "start": 638,
                              "end": 642
                            },
                            "typeArguments": null,
                            "start": 638,
                            "end": 642
                          },
                          "start": 636,
                          "end": 642
                        },
                        "start": 635,
                        "end": 642
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
                          "start": 647,
                          "end": 654
                        },
                        "typeArguments": null,
                        "start": 647,
                        "end": 654
                      },
                      "start": 644,
                      "end": 654
                    },
                    "start": 634,
                    "end": 654
                  },
                  "start": 631,
                  "end": 654
                },
                "start": 575,
                "end": 654
              },
              "start": 573,
              "end": 654
            },
            "start": 571,
            "end": 654
          },
          "init": null,
          "definite": false,
          "start": 571,
          "end": 654
        }
      ],
      "declare": false,
      "start": 567,
      "end": 655
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
                                  "start": 674,
                                  "end": 678
                                },
                                "typeArguments": null,
                                "start": 674,
                                "end": 678
                              },
                              "start": 672,
                              "end": 678
                            },
                            "start": 669,
                            "end": 678
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
                              "start": 683,
                              "end": 690
                            },
                            "typeArguments": null,
                            "start": 683,
                            "end": 690
                          },
                          "start": 680,
                          "end": 690
                        },
                        "start": 668,
                        "end": 690
                      },
                      "start": 666,
                      "end": 690
                    },
                    "start": 665,
                    "end": 690
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
                                  "start": 702,
                                  "end": 706
                                },
                                "typeArguments": null,
                                "start": 702,
                                "end": 706
                              },
                              "start": 700,
                              "end": 706
                            },
                            "start": 696,
                            "end": 706
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
                              "start": 711,
                              "end": 718
                            },
                            "typeArguments": null,
                            "start": 711,
                            "end": 718
                          },
                          "start": 708,
                          "end": 718
                        },
                        "start": 695,
                        "end": 718
                      },
                      "start": 693,
                      "end": 718
                    },
                    "start": 692,
                    "end": 718
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
                              "start": 727,
                              "end": 731
                            },
                            "typeArguments": null,
                            "start": 727,
                            "end": 731
                          },
                          "start": 725,
                          "end": 731
                        },
                        "start": 724,
                        "end": 731
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
                          "start": 736,
                          "end": 743
                        },
                        "typeArguments": null,
                        "start": 736,
                        "end": 743
                      },
                      "start": 733,
                      "end": 743
                    },
                    "start": 723,
                    "end": 743
                  },
                  "start": 720,
                  "end": 743
                },
                "start": 664,
                "end": 743
              },
              "start": 662,
              "end": 743
            },
            "start": 660,
            "end": 743
          },
          "init": null,
          "definite": false,
          "start": 660,
          "end": 743
        }
      ],
      "declare": false,
      "start": 656,
      "end": 744
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
                "type": "TSFunctionType",
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
                      "start": 758,
                      "end": 759
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
                            "start": 761,
                            "end": 768
                          },
                          "typeArguments": null,
                          "start": 761,
                          "end": 768
                        },
                        "start": 761,
                        "end": 770
                      },
                      "start": 759,
                      "end": 770
                    },
                    "value": null,
                    "start": 755,
                    "end": 770
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
                      "start": 775,
                      "end": 782
                    },
                    "typeArguments": null,
                    "start": 775,
                    "end": 782
                  },
                  "start": 772,
                  "end": 782
                },
                "start": 754,
                "end": 782
              },
              "start": 752,
              "end": 782
            },
            "start": 749,
            "end": 782
          },
          "init": null,
          "definite": false,
          "start": 749,
          "end": 782
        }
      ],
      "declare": false,
      "start": 745,
      "end": 783
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
                              "start": 799,
                              "end": 802
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 804,
                                "end": 810
                              },
                              "start": 802,
                              "end": 810
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 799,
                            "end": 810
                          }
                        ],
                        "start": 797,
                        "end": 812
                      },
                      "start": 795,
                      "end": 812
                    },
                    "start": 794,
                    "end": 812
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
                              "start": 819,
                              "end": 822
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 824,
                                "end": 830
                              },
                              "start": 822,
                              "end": 830
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 819,
                            "end": 831
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
                              "start": 832,
                              "end": 835
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 837,
                                "end": 843
                              },
                              "start": 835,
                              "end": 843
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 832,
                            "end": 843
                          }
                        ],
                        "start": 817,
                        "end": 845
                      },
                      "start": 815,
                      "end": 845
                    },
                    "start": 814,
                    "end": 845
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
                      "start": 850,
                      "end": 854
                    },
                    "typeArguments": null,
                    "start": 850,
                    "end": 854
                  },
                  "start": 847,
                  "end": 854
                },
                "start": 793,
                "end": 854
              },
              "start": 791,
              "end": 854
            },
            "start": 788,
            "end": 854
          },
          "init": null,
          "definite": false,
          "start": 788,
          "end": 854
        }
      ],
      "declare": false,
      "start": 784,
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
            "name": "a12",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 869,
                          "end": 874
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
                                "start": 875,
                                "end": 879
                              },
                              "typeArguments": null,
                              "start": 875,
                              "end": 879
                            }
                          ],
                          "start": 874,
                          "end": 880
                        },
                        "start": 869,
                        "end": 880
                      },
                      "start": 867,
                      "end": 880
                    },
                    "start": 866,
                    "end": 880
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
                          "start": 885,
                          "end": 890
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
                                "start": 891,
                                "end": 899
                              },
                              "typeArguments": null,
                              "start": 891,
                              "end": 899
                            }
                          ],
                          "start": 890,
                          "end": 900
                        },
                        "start": 885,
                        "end": 900
                      },
                      "start": 883,
                      "end": 900
                    },
                    "start": 882,
                    "end": 900
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
                      "start": 905,
                      "end": 910
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
                            "start": 911,
                            "end": 918
                          },
                          "typeArguments": null,
                          "start": 911,
                          "end": 918
                        }
                      ],
                      "start": 910,
                      "end": 919
                    },
                    "start": 905,
                    "end": 919
                  },
                  "start": 902,
                  "end": 919
                },
                "start": 865,
                "end": 919
              },
              "start": 863,
              "end": 919
            },
            "start": 860,
            "end": 919
          },
          "init": null,
          "definite": false,
          "start": 860,
          "end": 919
        }
      ],
      "declare": false,
      "start": 856,
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
            "name": "a13",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 934,
                          "end": 939
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
                                "start": 940,
                                "end": 944
                              },
                              "typeArguments": null,
                              "start": 940,
                              "end": 944
                            }
                          ],
                          "start": 939,
                          "end": 945
                        },
                        "start": 934,
                        "end": 945
                      },
                      "start": 932,
                      "end": 945
                    },
                    "start": 931,
                    "end": 945
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
                          "start": 950,
                          "end": 955
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
                                "start": 956,
                                "end": 963
                              },
                              "typeArguments": null,
                              "start": 956,
                              "end": 963
                            }
                          ],
                          "start": 955,
                          "end": 964
                        },
                        "start": 950,
                        "end": 964
                      },
                      "start": 948,
                      "end": 964
                    },
                    "start": 947,
                    "end": 964
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
                      "start": 969,
                      "end": 974
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
                            "start": 975,
                            "end": 982
                          },
                          "typeArguments": null,
                          "start": 975,
                          "end": 982
                        }
                      ],
                      "start": 974,
                      "end": 983
                    },
                    "start": 969,
                    "end": 983
                  },
                  "start": 966,
                  "end": 983
                },
                "start": 930,
                "end": 983
              },
              "start": 928,
              "end": 983
            },
            "start": 925,
            "end": 983
          },
          "init": null,
          "definite": false,
          "start": 925,
          "end": 983
        }
      ],
      "declare": false,
      "start": 921,
      "end": 984
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
                              "start": 1000,
                              "end": 1001
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1003,
                                "end": 1009
                              },
                              "start": 1001,
                              "end": 1009
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1000,
                            "end": 1010
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
                              "start": 1011,
                              "end": 1012
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1014,
                                "end": 1020
                              },
                              "start": 1012,
                              "end": 1020
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1011,
                            "end": 1020
                          }
                        ],
                        "start": 998,
                        "end": 1022
                      },
                      "start": 996,
                      "end": 1022
                    },
                    "start": 995,
                    "end": 1022
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
                      "start": 1027,
                      "end": 1033
                    },
                    "typeArguments": null,
                    "start": 1027,
                    "end": 1033
                  },
                  "start": 1024,
                  "end": 1033
                },
                "start": 994,
                "end": 1033
              },
              "start": 992,
              "end": 1033
            },
            "start": 989,
            "end": 1033
          },
          "init": null,
          "definite": false,
          "start": 989,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 985,
      "end": 1034
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
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1054,
                            "end": 1060
                          },
                          "start": 1052,
                          "end": 1060
                        },
                        "start": 1051,
                        "end": 1060
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1063,
                          "end": 1069
                        },
                        "start": 1063,
                        "end": 1071
                      },
                      "start": 1061,
                      "end": 1071
                    },
                    "start": 1050,
                    "end": 1072
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1081,
                            "end": 1087
                          },
                          "start": 1079,
                          "end": 1087
                        },
                        "start": 1078,
                        "end": 1087
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1090,
                          "end": 1096
                        },
                        "start": 1090,
                        "end": 1098
                      },
                      "start": 1088,
                      "end": 1098
                    },
                    "start": 1077,
                    "end": 1099
                  }
                ],
                "start": 1044,
                "end": 1101
              },
              "start": 1042,
              "end": 1101
            },
            "start": 1039,
            "end": 1101
          },
          "init": null,
          "definite": false,
          "start": 1039,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1035,
      "end": 1101
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
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1118,
                            "end": 1119
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1128,
                              "end": 1135
                            },
                            "typeArguments": null,
                            "start": 1128,
                            "end": 1135
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1118,
                          "end": 1135
                        }
                      ],
                      "start": 1117,
                      "end": 1136
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
                              "start": 1140,
                              "end": 1141
                            },
                            "typeArguments": null,
                            "start": 1140,
                            "end": 1141
                          },
                          "start": 1138,
                          "end": 1141
                        },
                        "start": 1137,
                        "end": 1141
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1144,
                          "end": 1150
                        },
                        "start": 1144,
                        "end": 1152
                      },
                      "start": 1142,
                      "end": 1152
                    },
                    "start": 1117,
                    "end": 1153
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1159,
                            "end": 1160
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1169,
                              "end": 1173
                            },
                            "typeArguments": null,
                            "start": 1169,
                            "end": 1173
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1159,
                          "end": 1173
                        }
                      ],
                      "start": 1158,
                      "end": 1174
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
                              "start": 1178,
                              "end": 1179
                            },
                            "typeArguments": null,
                            "start": 1178,
                            "end": 1179
                          },
                          "start": 1176,
                          "end": 1179
                        },
                        "start": 1175,
                        "end": 1179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1182,
                          "end": 1188
                        },
                        "start": 1182,
                        "end": 1190
                      },
                      "start": 1180,
                      "end": 1190
                    },
                    "start": 1158,
                    "end": 1191
                  }
                ],
                "start": 1111,
                "end": 1193
              },
              "start": 1109,
              "end": 1193
            },
            "start": 1106,
            "end": 1193
          },
          "init": null,
          "definite": false,
          "start": 1106,
          "end": 1193
        }
      ],
      "declare": false,
      "start": 1102,
      "end": 1193
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
                    "type": "TSCallSignatureDeclaration",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1217,
                                    "end": 1223
                                  },
                                  "start": 1215,
                                  "end": 1223
                                },
                                "start": 1214,
                                "end": 1223
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1228,
                                "end": 1234
                              },
                              "start": 1225,
                              "end": 1234
                            },
                            "start": 1213,
                            "end": 1234
                          },
                          "start": 1211,
                          "end": 1234
                        },
                        "start": 1210,
                        "end": 1234
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1237,
                          "end": 1243
                        },
                        "start": 1237,
                        "end": 1245
                      },
                      "start": 1235,
                      "end": 1245
                    },
                    "start": 1209,
                    "end": 1246
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1259,
                                    "end": 1265
                                  },
                                  "start": 1257,
                                  "end": 1265
                                },
                                "start": 1256,
                                "end": 1265
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1270,
                                "end": 1276
                              },
                              "start": 1267,
                              "end": 1276
                            },
                            "start": 1255,
                            "end": 1276
                          },
                          "start": 1253,
                          "end": 1276
                        },
                        "start": 1252,
                        "end": 1276
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1279,
                          "end": 1285
                        },
                        "start": 1279,
                        "end": 1287
                      },
                      "start": 1277,
                      "end": 1287
                    },
                    "start": 1251,
                    "end": 1288
                  }
                ],
                "start": 1203,
                "end": 1290
              },
              "start": 1201,
              "end": 1290
            },
            "start": 1198,
            "end": 1290
          },
          "init": null,
          "definite": false,
          "start": 1198,
          "end": 1290
        }
      ],
      "declare": false,
      "start": 1194,
      "end": 1291
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
                    "type": "TSCallSignatureDeclaration",
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 1325,
                                        "end": 1331
                                      },
                                      "start": 1323,
                                      "end": 1331
                                    },
                                    "start": 1322,
                                    "end": 1331
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1334,
                                    "end": 1340
                                  },
                                  "start": 1332,
                                  "end": 1340
                                },
                                "start": 1321,
                                "end": 1341
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 1354,
                                        "end": 1360
                                      },
                                      "start": 1352,
                                      "end": 1360
                                    },
                                    "start": 1351,
                                    "end": 1360
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1363,
                                    "end": 1369
                                  },
                                  "start": 1361,
                                  "end": 1369
                                },
                                "start": 1350,
                                "end": 1370
                              }
                            ],
                            "start": 1311,
                            "end": 1376
                          },
                          "start": 1309,
                          "end": 1376
                        },
                        "start": 1308,
                        "end": 1376
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1379,
                          "end": 1382
                        },
                        "start": 1379,
                        "end": 1384
                      },
                      "start": 1377,
                      "end": 1384
                    },
                    "start": 1307,
                    "end": 1385
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 1408,
                                        "end": 1415
                                      },
                                      "start": 1406,
                                      "end": 1415
                                    },
                                    "start": 1405,
                                    "end": 1415
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1418,
                                    "end": 1425
                                  },
                                  "start": 1416,
                                  "end": 1425
                                },
                                "start": 1404,
                                "end": 1426
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                          "start": 1439,
                                          "end": 1443
                                        },
                                        "typeArguments": null,
                                        "start": 1439,
                                        "end": 1443
                                      },
                                      "start": 1437,
                                      "end": 1443
                                    },
                                    "start": 1436,
                                    "end": 1443
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
                                      "start": 1446,
                                      "end": 1450
                                    },
                                    "typeArguments": null,
                                    "start": 1446,
                                    "end": 1450
                                  },
                                  "start": 1444,
                                  "end": 1450
                                },
                                "start": 1435,
                                "end": 1451
                              }
                            ],
                            "start": 1394,
                            "end": 1457
                          },
                          "start": 1392,
                          "end": 1457
                        },
                        "start": 1391,
                        "end": 1457
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1460,
                          "end": 1463
                        },
                        "start": 1460,
                        "end": 1465
                      },
                      "start": 1458,
                      "end": 1465
                    },
                    "start": 1390,
                    "end": 1466
                  }
                ],
                "start": 1301,
                "end": 1468
              },
              "start": 1299,
              "end": 1468
            },
            "start": 1296,
            "end": 1468
          },
          "init": null,
          "definite": false,
          "start": 1296,
          "end": 1468
        }
      ],
      "declare": false,
      "start": 1292,
      "end": 1468
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
                "type": "TSFunctionType",
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
                        "start": 1478,
                        "end": 1479
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1478,
                      "end": 1479
                    }
                  ],
                  "start": 1477,
                  "end": 1480
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
                          "start": 1484,
                          "end": 1485
                        },
                        "typeArguments": null,
                        "start": 1484,
                        "end": 1485
                      },
                      "start": 1482,
                      "end": 1485
                    },
                    "start": 1481,
                    "end": 1485
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
                        "start": 1490,
                        "end": 1491
                      },
                      "typeArguments": null,
                      "start": 1490,
                      "end": 1491
                    },
                    "start": 1490,
                    "end": 1493
                  },
                  "start": 1487,
                  "end": 1493
                },
                "start": 1477,
                "end": 1493
              },
              "start": 1475,
              "end": 1493
            },
            "start": 1474,
            "end": 1493
          },
          "init": null,
          "definite": false,
          "start": 1474,
          "end": 1493
        }
      ],
      "declare": false,
      "start": 1470,
      "end": 1494
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
          "start": 1496,
          "end": 1497
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1500,
          "end": 1501
        },
        "start": 1496,
        "end": 1501
      },
      "directive": null,
      "start": 1496,
      "end": 1502
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
          "start": 1509,
          "end": 1510
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1513,
          "end": 1514
        },
        "start": 1509,
        "end": 1514
      },
      "directive": null,
      "start": 1509,
      "end": 1515
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
                "type": "TSFunctionType",
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
                        "start": 1531,
                        "end": 1532
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1531,
                      "end": 1532
                    }
                  ],
                  "start": 1530,
                  "end": 1533
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
                          "start": 1537,
                          "end": 1538
                        },
                        "typeArguments": null,
                        "start": 1537,
                        "end": 1538
                      },
                      "start": 1535,
                      "end": 1538
                    },
                    "start": 1534,
                    "end": 1538
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1543,
                      "end": 1549
                    },
                    "start": 1543,
                    "end": 1551
                  },
                  "start": 1540,
                  "end": 1551
                },
                "start": 1530,
                "end": 1551
              },
              "start": 1528,
              "end": 1551
            },
            "start": 1526,
            "end": 1551
          },
          "init": null,
          "definite": false,
          "start": 1526,
          "end": 1551
        }
      ],
      "declare": false,
      "start": 1522,
      "end": 1552
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
          "start": 1554,
          "end": 1556
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1559,
          "end": 1561
        },
        "start": 1554,
        "end": 1561
      },
      "directive": null,
      "start": 1554,
      "end": 1562
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
          "start": 1570,
          "end": 1572
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1575,
          "end": 1577
        },
        "start": 1570,
        "end": 1577
      },
      "directive": null,
      "start": 1570,
      "end": 1578
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
                "type": "TSFunctionType",
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
                        "start": 1594,
                        "end": 1595
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1594,
                      "end": 1595
                    }
                  ],
                  "start": 1593,
                  "end": 1596
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
                          "start": 1600,
                          "end": 1601
                        },
                        "typeArguments": null,
                        "start": 1600,
                        "end": 1601
                      },
                      "start": 1598,
                      "end": 1601
                    },
                    "start": 1597,
                    "end": 1601
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
                      "start": 1606,
                      "end": 1607
                    },
                    "typeArguments": null,
                    "start": 1606,
                    "end": 1607
                  },
                  "start": 1603,
                  "end": 1607
                },
                "start": 1593,
                "end": 1607
              },
              "start": 1591,
              "end": 1607
            },
            "start": 1589,
            "end": 1607
          },
          "init": null,
          "definite": false,
          "start": 1589,
          "end": 1607
        }
      ],
      "declare": false,
      "start": 1585,
      "end": 1608
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
          "start": 1610,
          "end": 1612
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1615,
          "end": 1617
        },
        "start": 1610,
        "end": 1617
      },
      "directive": null,
      "start": 1610,
      "end": 1618
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
          "start": 1625,
          "end": 1627
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1630,
          "end": 1632
        },
        "start": 1625,
        "end": 1632
      },
      "directive": null,
      "start": 1625,
      "end": 1633
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
                "type": "TSFunctionType",
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
                        "start": 1649,
                        "end": 1650
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1649,
                      "end": 1650
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1652,
                        "end": 1653
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1652,
                      "end": 1653
                    }
                  ],
                  "start": 1648,
                  "end": 1654
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
                          "start": 1658,
                          "end": 1659
                        },
                        "typeArguments": null,
                        "start": 1658,
                        "end": 1659
                      },
                      "start": 1656,
                      "end": 1659
                    },
                    "start": 1655,
                    "end": 1659
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
                          "start": 1664,
                          "end": 1665
                        },
                        "typeArguments": null,
                        "start": 1664,
                        "end": 1665
                      },
                      "start": 1662,
                      "end": 1665
                    },
                    "start": 1661,
                    "end": 1665
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
                      "start": 1670,
                      "end": 1671
                    },
                    "typeArguments": null,
                    "start": 1670,
                    "end": 1671
                  },
                  "start": 1667,
                  "end": 1671
                },
                "start": 1648,
                "end": 1671
              },
              "start": 1646,
              "end": 1671
            },
            "start": 1644,
            "end": 1671
          },
          "init": null,
          "definite": false,
          "start": 1644,
          "end": 1671
        }
      ],
      "declare": false,
      "start": 1640,
      "end": 1672
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
          "start": 1674,
          "end": 1676
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1679,
          "end": 1681
        },
        "start": 1674,
        "end": 1681
      },
      "directive": null,
      "start": 1674,
      "end": 1682
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
          "start": 1689,
          "end": 1691
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1694,
          "end": 1696
        },
        "start": 1689,
        "end": 1696
      },
      "directive": null,
      "start": 1689,
      "end": 1697
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
                "type": "TSFunctionType",
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
                        "start": 1713,
                        "end": 1714
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1713,
                      "end": 1714
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1716,
                        "end": 1717
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1716,
                      "end": 1717
                    }
                  ],
                  "start": 1712,
                  "end": 1718
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
                                  "start": 1728,
                                  "end": 1729
                                },
                                "typeArguments": null,
                                "start": 1728,
                                "end": 1729
                              },
                              "start": 1726,
                              "end": 1729
                            },
                            "start": 1723,
                            "end": 1729
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
                              "start": 1734,
                              "end": 1735
                            },
                            "typeArguments": null,
                            "start": 1734,
                            "end": 1735
                          },
                          "start": 1731,
                          "end": 1735
                        },
                        "start": 1722,
                        "end": 1735
                      },
                      "start": 1720,
                      "end": 1735
                    },
                    "start": 1719,
                    "end": 1735
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
                      "start": 1740,
                      "end": 1741
                    },
                    "typeArguments": null,
                    "start": 1740,
                    "end": 1741
                  },
                  "start": 1737,
                  "end": 1741
                },
                "start": 1712,
                "end": 1741
              },
              "start": 1710,
              "end": 1741
            },
            "start": 1708,
            "end": 1741
          },
          "init": null,
          "definite": false,
          "start": 1708,
          "end": 1741
        }
      ],
      "declare": false,
      "start": 1704,
      "end": 1742
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
          "start": 1744,
          "end": 1746
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1751
        },
        "start": 1744,
        "end": 1751
      },
      "directive": null,
      "start": 1744,
      "end": 1752
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
          "start": 1759,
          "end": 1761
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1764,
          "end": 1766
        },
        "start": 1759,
        "end": 1766
      },
      "directive": null,
      "start": 1759,
      "end": 1767
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
                "type": "TSFunctionType",
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
                        "start": 1783,
                        "end": 1784
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1793,
                          "end": 1797
                        },
                        "typeArguments": null,
                        "start": 1793,
                        "end": 1797
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1783,
                      "end": 1797
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1799,
                        "end": 1800
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1809,
                          "end": 1816
                        },
                        "typeArguments": null,
                        "start": 1809,
                        "end": 1816
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1799,
                      "end": 1816
                    }
                  ],
                  "start": 1782,
                  "end": 1817
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
                                  "start": 1827,
                                  "end": 1828
                                },
                                "typeArguments": null,
                                "start": 1827,
                                "end": 1828
                              },
                              "start": 1825,
                              "end": 1828
                            },
                            "start": 1822,
                            "end": 1828
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
                              "start": 1833,
                              "end": 1834
                            },
                            "typeArguments": null,
                            "start": 1833,
                            "end": 1834
                          },
                          "start": 1830,
                          "end": 1834
                        },
                        "start": 1821,
                        "end": 1834
                      },
                      "start": 1819,
                      "end": 1834
                    },
                    "start": 1818,
                    "end": 1834
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
                      "start": 1839,
                      "end": 1840
                    },
                    "typeArguments": null,
                    "start": 1839,
                    "end": 1840
                  },
                  "start": 1836,
                  "end": 1840
                },
                "start": 1782,
                "end": 1840
              },
              "start": 1780,
              "end": 1840
            },
            "start": 1778,
            "end": 1840
          },
          "init": null,
          "definite": false,
          "start": 1778,
          "end": 1840
        }
      ],
      "declare": false,
      "start": 1774,
      "end": 1841
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
          "start": 1843,
          "end": 1845
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1848,
          "end": 1850
        },
        "start": 1843,
        "end": 1850
      },
      "directive": null,
      "start": 1843,
      "end": 1851
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
          "start": 1858,
          "end": 1860
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1863,
          "end": 1865
        },
        "start": 1858,
        "end": 1865
      },
      "directive": null,
      "start": 1858,
      "end": 1866
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
                "type": "TSFunctionType",
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
                        "start": 1882,
                        "end": 1883
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1892,
                          "end": 1896
                        },
                        "typeArguments": null,
                        "start": 1892,
                        "end": 1896
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1882,
                      "end": 1896
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1898,
                        "end": 1899
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1915
                        },
                        "typeArguments": null,
                        "start": 1908,
                        "end": 1915
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1898,
                      "end": 1915
                    }
                  ],
                  "start": 1881,
                  "end": 1916
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
                                  "start": 1926,
                                  "end": 1927
                                },
                                "typeArguments": null,
                                "start": 1926,
                                "end": 1927
                              },
                              "start": 1924,
                              "end": 1927
                            },
                            "start": 1921,
                            "end": 1927
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
                              "start": 1932,
                              "end": 1933
                            },
                            "typeArguments": null,
                            "start": 1932,
                            "end": 1933
                          },
                          "start": 1929,
                          "end": 1933
                        },
                        "start": 1920,
                        "end": 1933
                      },
                      "start": 1918,
                      "end": 1933
                    },
                    "start": 1917,
                    "end": 1933
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
                              "start": 1942,
                              "end": 1943
                            },
                            "typeArguments": null,
                            "start": 1942,
                            "end": 1943
                          },
                          "start": 1940,
                          "end": 1943
                        },
                        "start": 1939,
                        "end": 1943
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
                          "start": 1948,
                          "end": 1949
                        },
                        "typeArguments": null,
                        "start": 1948,
                        "end": 1949
                      },
                      "start": 1945,
                      "end": 1949
                    },
                    "start": 1938,
                    "end": 1949
                  },
                  "start": 1935,
                  "end": 1949
                },
                "start": 1881,
                "end": 1949
              },
              "start": 1879,
              "end": 1949
            },
            "start": 1877,
            "end": 1949
          },
          "init": null,
          "definite": false,
          "start": 1877,
          "end": 1949
        }
      ],
      "declare": false,
      "start": 1873,
      "end": 1950
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
          "start": 1952,
          "end": 1954
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1957,
          "end": 1959
        },
        "start": 1952,
        "end": 1959
      },
      "directive": null,
      "start": 1952,
      "end": 1960
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
          "start": 1967,
          "end": 1969
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1972,
          "end": 1974
        },
        "start": 1967,
        "end": 1974
      },
      "directive": null,
      "start": 1967,
      "end": 1975
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
                "type": "TSFunctionType",
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
                        "start": 1991,
                        "end": 1992
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2001,
                          "end": 2005
                        },
                        "typeArguments": null,
                        "start": 2001,
                        "end": 2005
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1991,
                      "end": 2005
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2007,
                        "end": 2008
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2017,
                          "end": 2024
                        },
                        "typeArguments": null,
                        "start": 2017,
                        "end": 2024
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2007,
                      "end": 2024
                    }
                  ],
                  "start": 1990,
                  "end": 2025
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
                                  "start": 2035,
                                  "end": 2036
                                },
                                "typeArguments": null,
                                "start": 2035,
                                "end": 2036
                              },
                              "start": 2033,
                              "end": 2036
                            },
                            "start": 2030,
                            "end": 2036
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
                              "start": 2041,
                              "end": 2042
                            },
                            "typeArguments": null,
                            "start": 2041,
                            "end": 2042
                          },
                          "start": 2038,
                          "end": 2042
                        },
                        "start": 2029,
                        "end": 2042
                      },
                      "start": 2027,
                      "end": 2042
                    },
                    "start": 2026,
                    "end": 2042
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
                                  "start": 2054,
                                  "end": 2055
                                },
                                "typeArguments": null,
                                "start": 2054,
                                "end": 2055
                              },
                              "start": 2052,
                              "end": 2055
                            },
                            "start": 2048,
                            "end": 2055
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
                              "start": 2060,
                              "end": 2061
                            },
                            "typeArguments": null,
                            "start": 2060,
                            "end": 2061
                          },
                          "start": 2057,
                          "end": 2061
                        },
                        "start": 2047,
                        "end": 2061
                      },
                      "start": 2045,
                      "end": 2061
                    },
                    "start": 2044,
                    "end": 2061
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
                              "start": 2070,
                              "end": 2071
                            },
                            "typeArguments": null,
                            "start": 2070,
                            "end": 2071
                          },
                          "start": 2068,
                          "end": 2071
                        },
                        "start": 2067,
                        "end": 2071
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
                          "start": 2076,
                          "end": 2077
                        },
                        "typeArguments": null,
                        "start": 2076,
                        "end": 2077
                      },
                      "start": 2073,
                      "end": 2077
                    },
                    "start": 2066,
                    "end": 2077
                  },
                  "start": 2063,
                  "end": 2077
                },
                "start": 1990,
                "end": 2077
              },
              "start": 1988,
              "end": 2077
            },
            "start": 1986,
            "end": 2077
          },
          "init": null,
          "definite": false,
          "start": 1986,
          "end": 2077
        }
      ],
      "declare": false,
      "start": 1982,
      "end": 2078
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
          "start": 2079,
          "end": 2081
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2084,
          "end": 2086
        },
        "start": 2079,
        "end": 2086
      },
      "directive": null,
      "start": 2079,
      "end": 2087
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
          "start": 2094,
          "end": 2096
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2099,
          "end": 2101
        },
        "start": 2094,
        "end": 2101
      },
      "directive": null,
      "start": 2094,
      "end": 2102
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
                "type": "TSFunctionType",
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
                        "start": 2118,
                        "end": 2119
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2128,
                          "end": 2132
                        },
                        "typeArguments": null,
                        "start": 2128,
                        "end": 2132
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2118,
                      "end": 2132
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2134,
                        "end": 2135
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2144,
                          "end": 2151
                        },
                        "typeArguments": null,
                        "start": 2144,
                        "end": 2151
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2134,
                      "end": 2151
                    }
                  ],
                  "start": 2117,
                  "end": 2152
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
                                  "start": 2162,
                                  "end": 2163
                                },
                                "typeArguments": null,
                                "start": 2162,
                                "end": 2163
                              },
                              "start": 2160,
                              "end": 2163
                            },
                            "start": 2157,
                            "end": 2163
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
                              "start": 2168,
                              "end": 2169
                            },
                            "typeArguments": null,
                            "start": 2168,
                            "end": 2169
                          },
                          "start": 2165,
                          "end": 2169
                        },
                        "start": 2156,
                        "end": 2169
                      },
                      "start": 2154,
                      "end": 2169
                    },
                    "start": 2153,
                    "end": 2169
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
                                      "start": 2183,
                                      "end": 2186
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2188,
                                        "end": 2194
                                      },
                                      "start": 2186,
                                      "end": 2194
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2183,
                                    "end": 2195
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
                                      "start": 2196,
                                      "end": 2200
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2202,
                                        "end": 2208
                                      },
                                      "start": 2200,
                                      "end": 2208
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2196,
                                    "end": 2208
                                  }
                                ],
                                "start": 2181,
                                "end": 2210
                              },
                              "start": 2179,
                              "end": 2210
                            },
                            "start": 2175,
                            "end": 2210
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
                              "start": 2215,
                              "end": 2216
                            },
                            "typeArguments": null,
                            "start": 2215,
                            "end": 2216
                          },
                          "start": 2212,
                          "end": 2216
                        },
                        "start": 2174,
                        "end": 2216
                      },
                      "start": 2172,
                      "end": 2216
                    },
                    "start": 2171,
                    "end": 2216
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
                              "start": 2225,
                              "end": 2226
                            },
                            "typeArguments": null,
                            "start": 2225,
                            "end": 2226
                          },
                          "start": 2223,
                          "end": 2226
                        },
                        "start": 2222,
                        "end": 2226
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
                          "start": 2231,
                          "end": 2232
                        },
                        "typeArguments": null,
                        "start": 2231,
                        "end": 2232
                      },
                      "start": 2228,
                      "end": 2232
                    },
                    "start": 2221,
                    "end": 2232
                  },
                  "start": 2218,
                  "end": 2232
                },
                "start": 2117,
                "end": 2232
              },
              "start": 2115,
              "end": 2232
            },
            "start": 2113,
            "end": 2232
          },
          "init": null,
          "definite": false,
          "start": 2113,
          "end": 2232
        }
      ],
      "declare": false,
      "start": 2109,
      "end": 2233
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
          "start": 2235,
          "end": 2237
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2240,
          "end": 2242
        },
        "start": 2235,
        "end": 2242
      },
      "directive": null,
      "start": 2235,
      "end": 2243
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
          "start": 2250,
          "end": 2252
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2255,
          "end": 2257
        },
        "start": 2250,
        "end": 2257
      },
      "directive": null,
      "start": 2250,
      "end": 2258
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
                "type": "TSFunctionType",
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
                        "start": 2275,
                        "end": 2276
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2285,
                          "end": 2292
                        },
                        "typeArguments": null,
                        "start": 2285,
                        "end": 2292
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2275,
                      "end": 2292
                    }
                  ],
                  "start": 2274,
                  "end": 2293
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
                      "start": 2297,
                      "end": 2298
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
                            "start": 2300,
                            "end": 2301
                          },
                          "typeArguments": null,
                          "start": 2300,
                          "end": 2301
                        },
                        "start": 2300,
                        "end": 2303
                      },
                      "start": 2298,
                      "end": 2303
                    },
                    "value": null,
                    "start": 2294,
                    "end": 2303
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
                      "start": 2308,
                      "end": 2309
                    },
                    "typeArguments": null,
                    "start": 2308,
                    "end": 2309
                  },
                  "start": 2305,
                  "end": 2309
                },
                "start": 2274,
                "end": 2309
              },
              "start": 2272,
              "end": 2309
            },
            "start": 2269,
            "end": 2309
          },
          "init": null,
          "definite": false,
          "start": 2269,
          "end": 2309
        }
      ],
      "declare": false,
      "start": 2265,
      "end": 2310
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
          "start": 2312,
          "end": 2315
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2318,
          "end": 2321
        },
        "start": 2312,
        "end": 2321
      },
      "directive": null,
      "start": 2312,
      "end": 2322
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
          "start": 2329,
          "end": 2332
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2335,
          "end": 2338
        },
        "start": 2329,
        "end": 2338
      },
      "directive": null,
      "start": 2329,
      "end": 2339
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
                "type": "TSFunctionType",
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
                        "start": 2356,
                        "end": 2357
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2366,
                          "end": 2370
                        },
                        "typeArguments": null,
                        "start": 2366,
                        "end": 2370
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2356,
                      "end": 2370
                    }
                  ],
                  "start": 2355,
                  "end": 2371
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
                          "start": 2375,
                          "end": 2376
                        },
                        "typeArguments": null,
                        "start": 2375,
                        "end": 2376
                      },
                      "start": 2373,
                      "end": 2376
                    },
                    "start": 2372,
                    "end": 2376
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
                          "start": 2381,
                          "end": 2382
                        },
                        "typeArguments": null,
                        "start": 2381,
                        "end": 2382
                      },
                      "start": 2379,
                      "end": 2382
                    },
                    "start": 2378,
                    "end": 2382
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
                      "start": 2387,
                      "end": 2388
                    },
                    "typeArguments": null,
                    "start": 2387,
                    "end": 2388
                  },
                  "start": 2384,
                  "end": 2388
                },
                "start": 2355,
                "end": 2388
              },
              "start": 2353,
              "end": 2388
            },
            "start": 2350,
            "end": 2388
          },
          "init": null,
          "definite": false,
          "start": 2350,
          "end": 2388
        }
      ],
      "declare": false,
      "start": 2346,
      "end": 2389
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
          "start": 2391,
          "end": 2394
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2397,
          "end": 2400
        },
        "start": 2391,
        "end": 2400
      },
      "directive": null,
      "start": 2391,
      "end": 2401
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
          "start": 2408,
          "end": 2411
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2414,
          "end": 2417
        },
        "start": 2408,
        "end": 2417
      },
      "directive": null,
      "start": 2408,
      "end": 2418
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
                "type": "TSFunctionType",
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
                        "start": 2435,
                        "end": 2436
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2445,
                          "end": 2450
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
                                "start": 2451,
                                "end": 2455
                              },
                              "typeArguments": null,
                              "start": 2451,
                              "end": 2455
                            }
                          ],
                          "start": 2450,
                          "end": 2456
                        },
                        "start": 2445,
                        "end": 2456
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2435,
                      "end": 2456
                    }
                  ],
                  "start": 2434,
                  "end": 2457
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
                          "start": 2461,
                          "end": 2466
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
                                "start": 2467,
                                "end": 2471
                              },
                              "typeArguments": null,
                              "start": 2467,
                              "end": 2471
                            }
                          ],
                          "start": 2466,
                          "end": 2472
                        },
                        "start": 2461,
                        "end": 2472
                      },
                      "start": 2459,
                      "end": 2472
                    },
                    "start": 2458,
                    "end": 2472
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
                          "start": 2477,
                          "end": 2478
                        },
                        "typeArguments": null,
                        "start": 2477,
                        "end": 2478
                      },
                      "start": 2475,
                      "end": 2478
                    },
                    "start": 2474,
                    "end": 2478
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
                      "start": 2483,
                      "end": 2488
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
                            "start": 2489,
                            "end": 2496
                          },
                          "typeArguments": null,
                          "start": 2489,
                          "end": 2496
                        }
                      ],
                      "start": 2488,
                      "end": 2497
                    },
                    "start": 2483,
                    "end": 2497
                  },
                  "start": 2480,
                  "end": 2497
                },
                "start": 2434,
                "end": 2497
              },
              "start": 2432,
              "end": 2497
            },
            "start": 2429,
            "end": 2497
          },
          "init": null,
          "definite": false,
          "start": 2429,
          "end": 2497
        }
      ],
      "declare": false,
      "start": 2425,
      "end": 2498
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
          "start": 2500,
          "end": 2503
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2506,
          "end": 2509
        },
        "start": 2500,
        "end": 2509
      },
      "directive": null,
      "start": 2500,
      "end": 2510
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
          "start": 2517,
          "end": 2520
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2523,
          "end": 2526
        },
        "start": 2517,
        "end": 2526
      },
      "directive": null,
      "start": 2517,
      "end": 2527
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
                "type": "TSFunctionType",
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
                        "start": 2544,
                        "end": 2545
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2554,
                          "end": 2559
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
                                "start": 2560,
                                "end": 2567
                              },
                              "typeArguments": null,
                              "start": 2560,
                              "end": 2567
                            }
                          ],
                          "start": 2559,
                          "end": 2568
                        },
                        "start": 2554,
                        "end": 2568
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2544,
                      "end": 2568
                    }
                  ],
                  "start": 2543,
                  "end": 2569
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
                          "start": 2573,
                          "end": 2578
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
                                "start": 2579,
                                "end": 2583
                              },
                              "typeArguments": null,
                              "start": 2579,
                              "end": 2583
                            }
                          ],
                          "start": 2578,
                          "end": 2584
                        },
                        "start": 2573,
                        "end": 2584
                      },
                      "start": 2571,
                      "end": 2584
                    },
                    "start": 2570,
                    "end": 2584
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
                          "start": 2589,
                          "end": 2590
                        },
                        "typeArguments": null,
                        "start": 2589,
                        "end": 2590
                      },
                      "start": 2587,
                      "end": 2590
                    },
                    "start": 2586,
                    "end": 2590
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
                      "start": 2595,
                      "end": 2596
                    },
                    "typeArguments": null,
                    "start": 2595,
                    "end": 2596
                  },
                  "start": 2592,
                  "end": 2596
                },
                "start": 2543,
                "end": 2596
              },
              "start": 2541,
              "end": 2596
            },
            "start": 2538,
            "end": 2596
          },
          "init": null,
          "definite": false,
          "start": 2538,
          "end": 2596
        }
      ],
      "declare": false,
      "start": 2534,
      "end": 2597
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
          "start": 2599,
          "end": 2602
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2605,
          "end": 2608
        },
        "start": 2599,
        "end": 2608
      },
      "directive": null,
      "start": 2599,
      "end": 2609
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
          "start": 2616,
          "end": 2619
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2622,
          "end": 2625
        },
        "start": 2616,
        "end": 2625
      },
      "directive": null,
      "start": 2616,
      "end": 2626
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
                "type": "TSFunctionType",
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
                        "start": 2643,
                        "end": 2644
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2643,
                      "end": 2644
                    }
                  ],
                  "start": 2642,
                  "end": 2645
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
                              "start": 2651,
                              "end": 2652
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
                                  "start": 2654,
                                  "end": 2655
                                },
                                "typeArguments": null,
                                "start": 2654,
                                "end": 2655
                              },
                              "start": 2652,
                              "end": 2655
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2651,
                            "end": 2656
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
                              "start": 2657,
                              "end": 2658
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
                                  "start": 2660,
                                  "end": 2661
                                },
                                "typeArguments": null,
                                "start": 2660,
                                "end": 2661
                              },
                              "start": 2658,
                              "end": 2661
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2657,
                            "end": 2661
                          }
                        ],
                        "start": 2649,
                        "end": 2663
                      },
                      "start": 2647,
                      "end": 2663
                    },
                    "start": 2646,
                    "end": 2663
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
                      "start": 2668,
                      "end": 2669
                    },
                    "typeArguments": null,
                    "start": 2668,
                    "end": 2669
                  },
                  "start": 2665,
                  "end": 2669
                },
                "start": 2642,
                "end": 2669
              },
              "start": 2640,
              "end": 2669
            },
            "start": 2637,
            "end": 2669
          },
          "init": null,
          "definite": false,
          "start": 2637,
          "end": 2669
        }
      ],
      "declare": false,
      "start": 2633,
      "end": 2670
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
          "start": 2672,
          "end": 2675
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2678,
          "end": 2681
        },
        "start": 2672,
        "end": 2681
      },
      "directive": null,
      "start": 2672,
      "end": 2682
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
          "start": 2689,
          "end": 2692
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2695,
          "end": 2698
        },
        "start": 2689,
        "end": 2698
      },
      "directive": null,
      "start": 2689,
      "end": 2699
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
                "type": "TSFunctionType",
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
                        "start": 2716,
                        "end": 2717
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2716,
                      "end": 2717
                    }
                  ],
                  "start": 2715,
                  "end": 2718
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
                          "start": 2722,
                          "end": 2723
                        },
                        "typeArguments": null,
                        "start": 2722,
                        "end": 2723
                      },
                      "start": 2720,
                      "end": 2723
                    },
                    "start": 2719,
                    "end": 2723
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
                        "start": 2728,
                        "end": 2729
                      },
                      "typeArguments": null,
                      "start": 2728,
                      "end": 2729
                    },
                    "start": 2728,
                    "end": 2731
                  },
                  "start": 2725,
                  "end": 2731
                },
                "start": 2715,
                "end": 2731
              },
              "start": 2713,
              "end": 2731
            },
            "start": 2710,
            "end": 2731
          },
          "init": null,
          "definite": false,
          "start": 2710,
          "end": 2731
        }
      ],
      "declare": false,
      "start": 2706,
      "end": 2732
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
          "start": 2734,
          "end": 2737
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 2740,
          "end": 2743
        },
        "start": 2734,
        "end": 2743
      },
      "directive": null,
      "start": 2734,
      "end": 2744
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
          "start": 2751,
          "end": 2754
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 2757,
          "end": 2760
        },
        "start": 2751,
        "end": 2760
      },
      "directive": null,
      "start": 2751,
      "end": 2761
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
                "type": "TSFunctionType",
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
                        "start": 2778,
                        "end": 2779
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2788,
                          "end": 2792
                        },
                        "typeArguments": null,
                        "start": 2788,
                        "end": 2792
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2778,
                      "end": 2792
                    }
                  ],
                  "start": 2777,
                  "end": 2793
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
                          "start": 2797,
                          "end": 2798
                        },
                        "typeArguments": null,
                        "start": 2797,
                        "end": 2798
                      },
                      "start": 2795,
                      "end": 2798
                    },
                    "start": 2794,
                    "end": 2798
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2803,
                      "end": 2809
                    },
                    "start": 2803,
                    "end": 2811
                  },
                  "start": 2800,
                  "end": 2811
                },
                "start": 2777,
                "end": 2811
              },
              "start": 2775,
              "end": 2811
            },
            "start": 2772,
            "end": 2811
          },
          "init": null,
          "definite": false,
          "start": 2772,
          "end": 2811
        }
      ],
      "declare": false,
      "start": 2768,
      "end": 2812
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
          "start": 2813,
          "end": 2816
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 2819,
          "end": 2822
        },
        "start": 2813,
        "end": 2822
      },
      "directive": null,
      "start": 2813,
      "end": 2823
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
          "start": 2830,
          "end": 2833
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 2836,
          "end": 2839
        },
        "start": 2830,
        "end": 2839
      },
      "directive": null,
      "start": 2830,
      "end": 2840
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
                "type": "TSFunctionType",
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
                        "start": 2857,
                        "end": 2858
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2857,
                      "end": 2858
                    }
                  ],
                  "start": 2856,
                  "end": 2859
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
                                  "start": 2867,
                                  "end": 2868
                                },
                                "typeArguments": null,
                                "start": 2867,
                                "end": 2868
                              },
                              "start": 2865,
                              "end": 2868
                            },
                            "start": 2864,
                            "end": 2868
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
                              "start": 2873,
                              "end": 2874
                            },
                            "typeArguments": null,
                            "start": 2873,
                            "end": 2874
                          },
                          "start": 2870,
                          "end": 2874
                        },
                        "start": 2863,
                        "end": 2874
                      },
                      "start": 2861,
                      "end": 2874
                    },
                    "start": 2860,
                    "end": 2874
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
                        "start": 2879,
                        "end": 2880
                      },
                      "typeArguments": null,
                      "start": 2879,
                      "end": 2880
                    },
                    "start": 2879,
                    "end": 2882
                  },
                  "start": 2876,
                  "end": 2882
                },
                "start": 2856,
                "end": 2882
              },
              "start": 2854,
              "end": 2882
            },
            "start": 2851,
            "end": 2882
          },
          "init": null,
          "definite": false,
          "start": 2851,
          "end": 2882
        }
      ],
      "declare": false,
      "start": 2847,
      "end": 2883
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
          "start": 2890,
          "end": 2893
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 2896,
          "end": 2899
        },
        "start": 2890,
        "end": 2899
      },
      "directive": null,
      "start": 2890,
      "end": 2900
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
          "start": 2907,
          "end": 2910
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 2913,
          "end": 2916
        },
        "start": 2907,
        "end": 2916
      },
      "directive": null,
      "start": 2907,
      "end": 2917
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
                "type": "TSFunctionType",
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
                        "start": 2934,
                        "end": 2935
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2934,
                      "end": 2935
                    }
                  ],
                  "start": 2933,
                  "end": 2936
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
                                  "start": 2944,
                                  "end": 2945
                                },
                                "typeArguments": null,
                                "start": 2944,
                                "end": 2945
                              },
                              "start": 2942,
                              "end": 2945
                            },
                            "start": 2941,
                            "end": 2945
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
                              "start": 2950,
                              "end": 2951
                            },
                            "typeArguments": null,
                            "start": 2950,
                            "end": 2951
                          },
                          "start": 2947,
                          "end": 2951
                        },
                        "start": 2940,
                        "end": 2951
                      },
                      "start": 2938,
                      "end": 2951
                    },
                    "start": 2937,
                    "end": 2951
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
                        "start": 2956,
                        "end": 2957
                      },
                      "typeArguments": null,
                      "start": 2956,
                      "end": 2957
                    },
                    "start": 2956,
                    "end": 2959
                  },
                  "start": 2953,
                  "end": 2959
                },
                "start": 2933,
                "end": 2959
              },
              "start": 2931,
              "end": 2959
            },
            "start": 2928,
            "end": 2959
          },
          "init": null,
          "definite": false,
          "start": 2928,
          "end": 2959
        }
      ],
      "declare": false,
      "start": 2924,
      "end": 2960
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
          "start": 2962,
          "end": 2965
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 2968,
          "end": 2971
        },
        "start": 2962,
        "end": 2971
      },
      "directive": null,
      "start": 2962,
      "end": 2972
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
          "start": 2979,
          "end": 2982
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 2985,
          "end": 2988
        },
        "start": 2979,
        "end": 2988
      },
      "directive": null,
      "start": 2979,
      "end": 2989
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 2995
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 148,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 184,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 193,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 232,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 245,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 296,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 329,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 362,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 371,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 439,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 485,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 519,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 524,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 530,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 533,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 555,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 558,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 567,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 591,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 619,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 622,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 644,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 647,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 660,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 680,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 733,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 736,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 755,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 761,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 775,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 824,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 847,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 850,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 856,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 869,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 875,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 885,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 891,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 902,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 905,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 911,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 921,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 934,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 950,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 956,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 966,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 969,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 975,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 985,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1081,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1128,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1144,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1169,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1279,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1363,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1379,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1408,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1418,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1439,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1460,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1487,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1526,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1543,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1554,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1570,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1575,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1589,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1603,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1615,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1625,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1630,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1640,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1644,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1674,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1679,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1689,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1694,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1708,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1744,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1759,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1764,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1778,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1785,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1793,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1801,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1809,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1830,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1836,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1843,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1858,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1863,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1873,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1877,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1884,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1892,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1900,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1908,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1921,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1929,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1935,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1945,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1952,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1957,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1967,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1986,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1993,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2001,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2009,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2017,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2048,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2057,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2063,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2073,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2079,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2084,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2094,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2099,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2109,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2113,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2120,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2128,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2144,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2157,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2165,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2175,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2183,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2188,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2196,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2202,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2212,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2218,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2228,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2235,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2240,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2250,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2255,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2265,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2277,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2285,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2294,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2305,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2312,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2318,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2329,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2335,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2346,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2358,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2366,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2384,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2391,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2397,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2408,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2414,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2425,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2429,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2437,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2445,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2451,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2461,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2467,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2480,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2483,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2489,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2500,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2506,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2517,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2523,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2534,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2538,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2546,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2554,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2560,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2573,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2579,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2592,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2599,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2605,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2616,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2622,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2633,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 2637,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2665,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 2672,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 2678,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 2689,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 2695,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2706,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2710,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2725,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2734,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2740,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2751,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2757,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2768,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2772,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2780,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2788,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2800,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2803,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2813,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2819,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2830,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2836,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2847,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2851,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2870,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2876,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2890,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2896,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2907,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2913,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2924,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 2928,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2947,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2953,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 2962,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 2968,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 2979,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 2985,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2988,
    "end": 2989
  }
]
```
