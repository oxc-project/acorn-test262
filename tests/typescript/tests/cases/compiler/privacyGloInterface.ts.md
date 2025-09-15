__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 41
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 62
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 65,
                        "end": 76
                      },
                      "expression": false,
                      "start": 62,
                      "end": 76
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 52,
                    "end": 76
                  }
                ],
                "start": 42,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 82
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 105
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 106,
              "end": 113
            },
            "abstract": false,
            "declare": false,
            "start": 89,
            "end": 113
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 161,
                              "end": 170
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 170
                          },
                          "start": 159,
                          "end": 170
                        },
                        "start": 157,
                        "end": 170
                      }
                    ],
                    "returnType": null,
                    "start": 156,
                    "end": 172
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 196
                            },
                            "typeArguments": null,
                            "start": 186,
                            "end": 196
                          },
                          "start": 184,
                          "end": 196
                        },
                        "start": 182,
                        "end": 196
                      }
                    ],
                    "returnType": null,
                    "start": 181,
                    "end": 198
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 220
                        },
                        "typeArguments": null,
                        "start": 211,
                        "end": 220
                      },
                      "start": 209,
                      "end": 220
                    },
                    "start": 207,
                    "end": 221
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 235,
                            "end": 241
                          },
                          "start": 233,
                          "end": 241
                        },
                        "start": 231,
                        "end": 241
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 254
                        },
                        "typeArguments": null,
                        "start": 244,
                        "end": 254
                      },
                      "start": 242,
                      "end": 254
                    },
                    "start": 230,
                    "end": 255
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 283
                            },
                            "typeArguments": null,
                            "start": 274,
                            "end": 283
                          },
                          "start": 272,
                          "end": 283
                        },
                        "start": 270,
                        "end": 283
                      }
                    ],
                    "returnType": null,
                    "start": 265,
                    "end": 285
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 303,
                              "end": 313
                            },
                            "typeArguments": null,
                            "start": 303,
                            "end": 313
                          },
                          "start": 301,
                          "end": 313
                        },
                        "start": 299,
                        "end": 313
                      }
                    ],
                    "returnType": null,
                    "start": 294,
                    "end": 315
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 341
                        },
                        "typeArguments": null,
                        "start": 332,
                        "end": 341
                      },
                      "start": 330,
                      "end": 341
                    },
                    "start": 324,
                    "end": 342
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 360,
                            "end": 366
                          },
                          "start": 358,
                          "end": 366
                        },
                        "start": 356,
                        "end": 366
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 379
                        },
                        "typeArguments": null,
                        "start": 369,
                        "end": 379
                      },
                      "start": 367,
                      "end": 379
                    },
                    "start": 351,
                    "end": 380
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 403,
                        "end": 412
                      },
                      "start": 401,
                      "end": 412
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 390,
                    "end": 413
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 426,
                            "end": 432
                          },
                          "start": 424,
                          "end": 432
                        },
                        "start": 423,
                        "end": 432
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 435,
                          "end": 445
                        },
                        "typeArguments": null,
                        "start": 435,
                        "end": 445
                      },
                      "start": 433,
                      "end": 445
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 422,
                    "end": 446
                  },
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
                      "start": 456,
                      "end": 457
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 468
                        },
                        "typeArguments": null,
                        "start": 459,
                        "end": 468
                      },
                      "start": 457,
                      "end": 468
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 456,
                    "end": 469
                  },
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
                      "start": 478,
                      "end": 479
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 491
                        },
                        "typeArguments": null,
                        "start": 481,
                        "end": 491
                      },
                      "start": 479,
                      "end": 491
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 478,
                    "end": 492
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 503
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 506,
                          "end": 515
                        },
                        "typeArguments": null,
                        "start": 506,
                        "end": 515
                      },
                      "start": 504,
                      "end": 515
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 502,
                    "end": 516
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 526
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 529,
                          "end": 539
                        },
                        "typeArguments": null,
                        "start": 529,
                        "end": 539
                      },
                      "start": 527,
                      "end": 539
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 525,
                    "end": 540
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 552
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
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
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 557,
                              "end": 566
                            },
                            "typeArguments": null,
                            "start": 557,
                            "end": 566
                          },
                          "start": 555,
                          "end": 566
                        },
                        "start": 553,
                        "end": 566
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 550,
                    "end": 568
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 579
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
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
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 584,
                              "end": 594
                            },
                            "typeArguments": null,
                            "start": 584,
                            "end": 594
                          },
                          "start": 582,
                          "end": 594
                        },
                        "start": 580,
                        "end": 594
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 577,
                    "end": 596
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 607
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 620
                        },
                        "typeArguments": null,
                        "start": 611,
                        "end": 620
                      },
                      "start": 609,
                      "end": 620
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 605,
                    "end": 621
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 632
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 646
                        },
                        "typeArguments": null,
                        "start": 636,
                        "end": 646
                      },
                      "start": 634,
                      "end": 646
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 630,
                    "end": 647
                  }
                ],
                "start": 146,
                "end": 654
              },
              "declare": false,
              "start": 126,
              "end": 654
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 119,
            "end": 654
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 680
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 696,
                            "end": 705
                          },
                          "typeArguments": null,
                          "start": 696,
                          "end": 705
                        },
                        "start": 694,
                        "end": 705
                      },
                      "start": 692,
                      "end": 705
                    }
                  ],
                  "returnType": null,
                  "start": 691,
                  "end": 707
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 721,
                            "end": 731
                          },
                          "typeArguments": null,
                          "start": 721,
                          "end": 731
                        },
                        "start": 719,
                        "end": 731
                      },
                      "start": 717,
                      "end": 731
                    }
                  ],
                  "returnType": null,
                  "start": 716,
                  "end": 733
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 746,
                        "end": 755
                      },
                      "typeArguments": null,
                      "start": 746,
                      "end": 755
                    },
                    "start": 744,
                    "end": 755
                  },
                  "start": 742,
                  "end": 756
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 770,
                          "end": 776
                        },
                        "start": 768,
                        "end": 776
                      },
                      "start": 766,
                      "end": 776
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 779,
                        "end": 789
                      },
                      "typeArguments": null,
                      "start": 779,
                      "end": 789
                    },
                    "start": 777,
                    "end": 789
                  },
                  "start": 765,
                  "end": 790
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 809,
                            "end": 818
                          },
                          "typeArguments": null,
                          "start": 809,
                          "end": 818
                        },
                        "start": 807,
                        "end": 818
                      },
                      "start": 805,
                      "end": 818
                    }
                  ],
                  "returnType": null,
                  "start": 800,
                  "end": 820
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 838,
                            "end": 848
                          },
                          "typeArguments": null,
                          "start": 838,
                          "end": 848
                        },
                        "start": 836,
                        "end": 848
                      },
                      "start": 834,
                      "end": 848
                    }
                  ],
                  "returnType": null,
                  "start": 829,
                  "end": 850
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 867,
                        "end": 876
                      },
                      "typeArguments": null,
                      "start": 867,
                      "end": 876
                    },
                    "start": 865,
                    "end": 876
                  },
                  "start": 859,
                  "end": 877
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 895,
                          "end": 901
                        },
                        "start": 893,
                        "end": 901
                      },
                      "start": 891,
                      "end": 901
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 914
                      },
                      "typeArguments": null,
                      "start": 904,
                      "end": 914
                    },
                    "start": 902,
                    "end": 914
                  },
                  "start": 886,
                  "end": 915
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 929,
                          "end": 935
                        },
                        "start": 927,
                        "end": 935
                      },
                      "start": 926,
                      "end": 935
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 938,
                        "end": 947
                      },
                      "typeArguments": null,
                      "start": 938,
                      "end": 947
                    },
                    "start": 936,
                    "end": 947
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 925,
                  "end": 948
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 961,
                          "end": 967
                        },
                        "start": 959,
                        "end": 967
                      },
                      "start": 958,
                      "end": 967
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 970,
                        "end": 980
                      },
                      "typeArguments": null,
                      "start": 970,
                      "end": 980
                    },
                    "start": 968,
                    "end": 980
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 957,
                  "end": 981
                },
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
                    "start": 991,
                    "end": 992
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 994,
                        "end": 1003
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 1003
                    },
                    "start": 992,
                    "end": 1003
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 991,
                  "end": 1004
                },
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
                    "start": 1013,
                    "end": 1014
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1016,
                        "end": 1026
                      },
                      "typeArguments": null,
                      "start": 1016,
                      "end": 1026
                    },
                    "start": 1014,
                    "end": 1026
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1013,
                  "end": 1027
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1038
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1041,
                        "end": 1050
                      },
                      "typeArguments": null,
                      "start": 1041,
                      "end": 1050
                    },
                    "start": 1039,
                    "end": 1050
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1037,
                  "end": 1051
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1060,
                    "end": 1061
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1064,
                        "end": 1074
                      },
                      "typeArguments": null,
                      "start": 1064,
                      "end": 1074
                    },
                    "start": 1062,
                    "end": 1074
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1060,
                  "end": 1075
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1087
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
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
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1092,
                            "end": 1101
                          },
                          "typeArguments": null,
                          "start": 1092,
                          "end": 1101
                        },
                        "start": 1090,
                        "end": 1101
                      },
                      "start": 1088,
                      "end": 1101
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1085,
                  "end": 1103
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1114
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
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
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1129
                          },
                          "typeArguments": null,
                          "start": 1119,
                          "end": 1129
                        },
                        "start": 1117,
                        "end": 1129
                      },
                      "start": 1115,
                      "end": 1129
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1112,
                  "end": 1131
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1142
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1155
                      },
                      "typeArguments": null,
                      "start": 1146,
                      "end": 1155
                    },
                    "start": 1144,
                    "end": 1155
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1140,
                  "end": 1156
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1165,
                    "end": 1167
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1171,
                        "end": 1181
                      },
                      "typeArguments": null,
                      "start": 1171,
                      "end": 1181
                    },
                    "start": 1169,
                    "end": 1181
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1165,
                  "end": 1182
                }
              ],
              "start": 681,
              "end": 1189
            },
            "declare": false,
            "start": 660,
            "end": 1189
          }
        ],
        "start": 13,
        "end": 1191
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1191
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1208
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1225
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1228,
                "end": 1235
              },
              "expression": false,
              "start": 1225,
              "end": 1235
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1215,
            "end": 1235
          }
        ],
        "start": 1209,
        "end": 1237
      },
      "abstract": false,
      "declare": false,
      "start": 1193,
      "end": 1237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1250,
        "end": 1259
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1280
                    },
                    "typeArguments": null,
                    "start": 1271,
                    "end": 1280
                  },
                  "start": 1269,
                  "end": 1280
                },
                "start": 1267,
                "end": 1280
              }
            ],
            "returnType": null,
            "start": 1266,
            "end": 1282
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1300
                },
                "typeArguments": null,
                "start": 1291,
                "end": 1300
              },
              "start": 1289,
              "end": 1300
            },
            "start": 1287,
            "end": 1301
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1325
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1325
                  },
                  "start": 1314,
                  "end": 1325
                },
                "start": 1312,
                "end": 1325
              }
            ],
            "returnType": null,
            "start": 1307,
            "end": 1327
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1349
                },
                "typeArguments": null,
                "start": 1340,
                "end": 1349
              },
              "start": 1338,
              "end": 1349
            },
            "start": 1332,
            "end": 1350
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1360,
                    "end": 1366
                  },
                  "start": 1358,
                  "end": 1366
                },
                "start": 1357,
                "end": 1366
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1369,
                  "end": 1378
                },
                "typeArguments": null,
                "start": 1369,
                "end": 1378
              },
              "start": 1367,
              "end": 1378
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1356,
            "end": 1379
          },
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
              "start": 1385,
              "end": 1386
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1388,
                  "end": 1397
                },
                "typeArguments": null,
                "start": 1388,
                "end": 1397
              },
              "start": 1386,
              "end": 1397
            },
            "accessibility": null,
            "static": false,
            "start": 1385,
            "end": 1398
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1408,
                  "end": 1417
                },
                "typeArguments": null,
                "start": 1408,
                "end": 1417
              },
              "start": 1406,
              "end": 1417
            },
            "accessibility": null,
            "static": false,
            "start": 1404,
            "end": 1418
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1426
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
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
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1431,
                      "end": 1440
                    },
                    "typeArguments": null,
                    "start": 1431,
                    "end": 1440
                  },
                  "start": 1429,
                  "end": 1440
                },
                "start": 1427,
                "end": 1440
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1424,
            "end": 1442
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1447,
              "end": 1449
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1462
                },
                "typeArguments": null,
                "start": 1453,
                "end": 1462
              },
              "start": 1451,
              "end": 1462
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1447,
            "end": 1463
          }
        ],
        "start": 1260,
        "end": 1465
      },
      "declare": false,
      "start": 1240,
      "end": 1465
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1477,
        "end": 1479
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1503,
                "end": 1514
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1527
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1531,
                        "end": 1537
                      },
                      "start": 1529,
                      "end": 1537
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1525,
                    "end": 1538
                  }
                ],
                "start": 1515,
                "end": 1544
              },
              "declare": false,
              "start": 1493,
              "end": 1544
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1486,
            "end": 1544
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1572
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1585
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1589,
                      "end": 1595
                    },
                    "start": 1587,
                    "end": 1595
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1583,
                  "end": 1596
                }
              ],
              "start": 1573,
              "end": 1602
            },
            "declare": false,
            "start": 1550,
            "end": 1602
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1618,
              "end": 1631
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1651
                },
                "typeArguments": null,
                "start": 1640,
                "end": 1651
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1652,
              "end": 1659
            },
            "declare": false,
            "start": 1608,
            "end": 1659
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1674,
              "end": 1687
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1708
                },
                "typeArguments": null,
                "start": 1696,
                "end": 1708
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1709,
              "end": 1716
            },
            "declare": false,
            "start": 1664,
            "end": 1716
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1738,
                "end": 1750
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1759,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "start": 1759,
                  "end": 1770
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1771,
                "end": 1778
              },
              "declare": false,
              "start": 1728,
              "end": 1778
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1721,
            "end": 1778
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1800,
                "end": 1812
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1821,
                    "end": 1833
                  },
                  "typeArguments": null,
                  "start": 1821,
                  "end": 1833
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1834,
                "end": 1841
              },
              "declare": false,
              "start": 1790,
              "end": 1841
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1783,
            "end": 1841
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1857,
              "end": 1870
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1891
                },
                "typeArguments": null,
                "start": 1879,
                "end": 1891
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1893,
                  "end": 1904
                },
                "typeArguments": null,
                "start": 1893,
                "end": 1904
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1905,
              "end": 1912
            },
            "declare": false,
            "start": 1847,
            "end": 1912
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1946
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1968
                  },
                  "typeArguments": null,
                  "start": 1956,
                  "end": 1968
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1981
                  },
                  "typeArguments": null,
                  "start": 1970,
                  "end": 1981
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1982,
                "end": 1989
              },
              "declare": false,
              "start": 1924,
              "end": 1989
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1917,
            "end": 1989
          }
        ],
        "start": 1480,
        "end": 1991
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1467,
      "end": 1991
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2003,
        "end": 2015
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2022,
              "end": 2024
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2028,
                "end": 2034
              },
              "start": 2026,
              "end": 2034
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2022,
            "end": 2035
          }
        ],
        "start": 2016,
        "end": 2037
      },
      "declare": false,
      "start": 1993,
      "end": 2037
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2049,
        "end": 2062
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2071,
            "end": 2083
          },
          "typeArguments": null,
          "start": 2071,
          "end": 2083
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2084,
        "end": 2087
      },
      "declare": false,
      "start": 2039,
      "end": 2087
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2087
}
```
