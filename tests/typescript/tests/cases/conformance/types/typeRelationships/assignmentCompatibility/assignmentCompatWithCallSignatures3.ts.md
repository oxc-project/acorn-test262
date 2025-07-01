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
