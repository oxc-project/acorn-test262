__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 16
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
                  "start": 36,
                  "end": 45
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
                        "start": 64,
                        "end": 66
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
                          "start": 69,
                          "end": 80
                        },
                        "expression": false,
                        "start": 66,
                        "end": 80
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 56,
                      "end": 80
                    }
                  ],
                  "start": 46,
                  "end": 86
                },
                "abstract": false,
                "declare": false,
                "start": 30,
                "end": 86
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 86
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
                "start": 99,
                "end": 109
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 110,
                "end": 117
              },
              "abstract": false,
              "declare": false,
              "start": 93,
              "end": 117
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
                  "start": 140,
                  "end": 149
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
                                "start": 165,
                                "end": 174
                              },
                              "typeArguments": null,
                              "start": 165,
                              "end": 174
                            },
                            "start": 163,
                            "end": 174
                          },
                          "start": 161,
                          "end": 174
                        }
                      ],
                      "returnType": null,
                      "start": 160,
                      "end": 176
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
                                "start": 190,
                                "end": 200
                              },
                              "typeArguments": null,
                              "start": 190,
                              "end": 200
                            },
                            "start": 188,
                            "end": 200
                          },
                          "start": 186,
                          "end": 200
                        }
                      ],
                      "returnType": null,
                      "start": 185,
                      "end": 202
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
                            "start": 215,
                            "end": 224
                          },
                          "typeArguments": null,
                          "start": 215,
                          "end": 224
                        },
                        "start": 213,
                        "end": 224
                      },
                      "start": 211,
                      "end": 225
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
                              "start": 239,
                              "end": 245
                            },
                            "start": 237,
                            "end": 245
                          },
                          "start": 235,
                          "end": 245
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
                            "start": 248,
                            "end": 258
                          },
                          "typeArguments": null,
                          "start": 248,
                          "end": 258
                        },
                        "start": 246,
                        "end": 258
                      },
                      "start": 234,
                      "end": 259
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
                                "start": 278,
                                "end": 287
                              },
                              "typeArguments": null,
                              "start": 278,
                              "end": 287
                            },
                            "start": 276,
                            "end": 287
                          },
                          "start": 274,
                          "end": 287
                        }
                      ],
                      "returnType": null,
                      "start": 269,
                      "end": 289
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
                                "start": 307,
                                "end": 317
                              },
                              "typeArguments": null,
                              "start": 307,
                              "end": 317
                            },
                            "start": 305,
                            "end": 317
                          },
                          "start": 303,
                          "end": 317
                        }
                      ],
                      "returnType": null,
                      "start": 298,
                      "end": 319
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
                            "start": 336,
                            "end": 345
                          },
                          "typeArguments": null,
                          "start": 336,
                          "end": 345
                        },
                        "start": 334,
                        "end": 345
                      },
                      "start": 328,
                      "end": 346
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
                              "start": 364,
                              "end": 370
                            },
                            "start": 362,
                            "end": 370
                          },
                          "start": 360,
                          "end": 370
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
                            "start": 373,
                            "end": 383
                          },
                          "typeArguments": null,
                          "start": 373,
                          "end": 383
                        },
                        "start": 371,
                        "end": 383
                      },
                      "start": 355,
                      "end": 384
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
                              "start": 398,
                              "end": 404
                            },
                            "start": 396,
                            "end": 404
                          },
                          "start": 395,
                          "end": 404
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
                            "start": 407,
                            "end": 416
                          },
                          "typeArguments": null,
                          "start": 407,
                          "end": 416
                        },
                        "start": 405,
                        "end": 416
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 394,
                      "end": 417
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
                              "start": 430,
                              "end": 436
                            },
                            "start": 428,
                            "end": 436
                          },
                          "start": 427,
                          "end": 436
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
                            "start": 439,
                            "end": 449
                          },
                          "typeArguments": null,
                          "start": 439,
                          "end": 449
                        },
                        "start": 437,
                        "end": 449
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 426,
                      "end": 450
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
                        "start": 460,
                        "end": 461
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
                            "start": 463,
                            "end": 472
                          },
                          "typeArguments": null,
                          "start": 463,
                          "end": 472
                        },
                        "start": 461,
                        "end": 472
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 460,
                      "end": 473
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
                        "start": 482,
                        "end": 483
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
                            "start": 485,
                            "end": 495
                          },
                          "typeArguments": null,
                          "start": 485,
                          "end": 495
                        },
                        "start": 483,
                        "end": 495
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 482,
                      "end": 496
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
                        "start": 506,
                        "end": 507
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
                            "start": 510,
                            "end": 519
                          },
                          "typeArguments": null,
                          "start": 510,
                          "end": 519
                        },
                        "start": 508,
                        "end": 519
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 506,
                      "end": 520
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
                        "start": 529,
                        "end": 530
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
                            "start": 533,
                            "end": 543
                          },
                          "typeArguments": null,
                          "start": 533,
                          "end": 543
                        },
                        "start": 531,
                        "end": 543
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 529,
                      "end": 544
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 556
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
                                "start": 561,
                                "end": 570
                              },
                              "typeArguments": null,
                              "start": 561,
                              "end": 570
                            },
                            "start": 559,
                            "end": 570
                          },
                          "start": 557,
                          "end": 570
                        }
                      ],
                      "returnType": null,
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 554,
                      "end": 572
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 581,
                        "end": 583
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
                                "start": 588,
                                "end": 598
                              },
                              "typeArguments": null,
                              "start": 588,
                              "end": 598
                            },
                            "start": 586,
                            "end": 598
                          },
                          "start": 584,
                          "end": 598
                        }
                      ],
                      "returnType": null,
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 581,
                      "end": 600
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 611
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
                            "start": 615,
                            "end": 624
                          },
                          "typeArguments": null,
                          "start": 615,
                          "end": 624
                        },
                        "start": 613,
                        "end": 624
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 609,
                      "end": 625
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 634,
                        "end": 636
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
                            "start": 640,
                            "end": 650
                          },
                          "typeArguments": null,
                          "start": 640,
                          "end": 650
                        },
                        "start": 638,
                        "end": 650
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 634,
                      "end": 651
                    }
                  ],
                  "start": 150,
                  "end": 658
                },
                "declare": false,
                "start": 130,
                "end": 658
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 123,
              "end": 658
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 684
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
                              "start": 700,
                              "end": 709
                            },
                            "typeArguments": null,
                            "start": 700,
                            "end": 709
                          },
                          "start": 698,
                          "end": 709
                        },
                        "start": 696,
                        "end": 709
                      }
                    ],
                    "returnType": null,
                    "start": 695,
                    "end": 711
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
                              "start": 725,
                              "end": 735
                            },
                            "typeArguments": null,
                            "start": 725,
                            "end": 735
                          },
                          "start": 723,
                          "end": 735
                        },
                        "start": 721,
                        "end": 735
                      }
                    ],
                    "returnType": null,
                    "start": 720,
                    "end": 737
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
                          "start": 750,
                          "end": 759
                        },
                        "typeArguments": null,
                        "start": 750,
                        "end": 759
                      },
                      "start": 748,
                      "end": 759
                    },
                    "start": 746,
                    "end": 760
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
                            "start": 774,
                            "end": 780
                          },
                          "start": 772,
                          "end": 780
                        },
                        "start": 770,
                        "end": 780
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
                          "start": 783,
                          "end": 793
                        },
                        "typeArguments": null,
                        "start": 783,
                        "end": 793
                      },
                      "start": 781,
                      "end": 793
                    },
                    "start": 769,
                    "end": 794
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
                              "start": 813,
                              "end": 822
                            },
                            "typeArguments": null,
                            "start": 813,
                            "end": 822
                          },
                          "start": 811,
                          "end": 822
                        },
                        "start": 809,
                        "end": 822
                      }
                    ],
                    "returnType": null,
                    "start": 804,
                    "end": 824
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
                              "start": 842,
                              "end": 852
                            },
                            "typeArguments": null,
                            "start": 842,
                            "end": 852
                          },
                          "start": 840,
                          "end": 852
                        },
                        "start": 838,
                        "end": 852
                      }
                    ],
                    "returnType": null,
                    "start": 833,
                    "end": 854
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
                          "start": 871,
                          "end": 880
                        },
                        "typeArguments": null,
                        "start": 871,
                        "end": 880
                      },
                      "start": 869,
                      "end": 880
                    },
                    "start": 863,
                    "end": 881
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
                            "start": 899,
                            "end": 905
                          },
                          "start": 897,
                          "end": 905
                        },
                        "start": 895,
                        "end": 905
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
                          "start": 908,
                          "end": 918
                        },
                        "typeArguments": null,
                        "start": 908,
                        "end": 918
                      },
                      "start": 906,
                      "end": 918
                    },
                    "start": 890,
                    "end": 919
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
                            "start": 933,
                            "end": 939
                          },
                          "start": 931,
                          "end": 939
                        },
                        "start": 930,
                        "end": 939
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
                          "start": 942,
                          "end": 951
                        },
                        "typeArguments": null,
                        "start": 942,
                        "end": 951
                      },
                      "start": 940,
                      "end": 951
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 929,
                    "end": 952
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
                            "start": 965,
                            "end": 971
                          },
                          "start": 963,
                          "end": 971
                        },
                        "start": 962,
                        "end": 971
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
                          "start": 974,
                          "end": 984
                        },
                        "typeArguments": null,
                        "start": 974,
                        "end": 984
                      },
                      "start": 972,
                      "end": 984
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 961,
                    "end": 985
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
                      "start": 995,
                      "end": 996
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
                          "start": 998,
                          "end": 1007
                        },
                        "typeArguments": null,
                        "start": 998,
                        "end": 1007
                      },
                      "start": 996,
                      "end": 1007
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 995,
                    "end": 1008
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
                      "start": 1017,
                      "end": 1018
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
                          "start": 1020,
                          "end": 1030
                        },
                        "typeArguments": null,
                        "start": 1020,
                        "end": 1030
                      },
                      "start": 1018,
                      "end": 1030
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1017,
                    "end": 1031
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
                      "start": 1041,
                      "end": 1042
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
                          "start": 1045,
                          "end": 1054
                        },
                        "typeArguments": null,
                        "start": 1045,
                        "end": 1054
                      },
                      "start": 1043,
                      "end": 1054
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1041,
                    "end": 1055
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
                      "start": 1064,
                      "end": 1065
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
                          "start": 1068,
                          "end": 1078
                        },
                        "typeArguments": null,
                        "start": 1068,
                        "end": 1078
                      },
                      "start": 1066,
                      "end": 1078
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1064,
                    "end": 1079
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1089,
                      "end": 1091
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
                              "start": 1096,
                              "end": 1105
                            },
                            "typeArguments": null,
                            "start": 1096,
                            "end": 1105
                          },
                          "start": 1094,
                          "end": 1105
                        },
                        "start": 1092,
                        "end": 1105
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1089,
                    "end": 1107
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1116,
                      "end": 1118
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
                              "start": 1123,
                              "end": 1133
                            },
                            "typeArguments": null,
                            "start": 1123,
                            "end": 1133
                          },
                          "start": 1121,
                          "end": 1133
                        },
                        "start": 1119,
                        "end": 1133
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1116,
                    "end": 1135
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1146
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
                          "start": 1150,
                          "end": 1159
                        },
                        "typeArguments": null,
                        "start": 1150,
                        "end": 1159
                      },
                      "start": 1148,
                      "end": 1159
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1144,
                    "end": 1160
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1171
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
                          "start": 1175,
                          "end": 1185
                        },
                        "typeArguments": null,
                        "start": 1175,
                        "end": 1185
                      },
                      "start": 1173,
                      "end": 1185
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1169,
                    "end": 1186
                  }
                ],
                "start": 685,
                "end": 1193
              },
              "declare": false,
              "start": 664,
              "end": 1193
            }
          ],
          "start": 17,
          "end": 1195
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1195
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1207
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
                "start": 1227,
                "end": 1236
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
                      "start": 1255,
                      "end": 1257
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
                        "start": 1260,
                        "end": 1271
                      },
                      "expression": false,
                      "start": 1257,
                      "end": 1271
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1247,
                    "end": 1271
                  }
                ],
                "start": 1237,
                "end": 1277
              },
              "abstract": false,
              "declare": false,
              "start": 1221,
              "end": 1277
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1214,
            "end": 1277
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
              "start": 1290,
              "end": 1300
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1301,
              "end": 1308
            },
            "abstract": false,
            "declare": false,
            "start": 1284,
            "end": 1308
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
                "start": 1331,
                "end": 1340
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
                              "start": 1356,
                              "end": 1365
                            },
                            "typeArguments": null,
                            "start": 1356,
                            "end": 1365
                          },
                          "start": 1354,
                          "end": 1365
                        },
                        "start": 1352,
                        "end": 1365
                      }
                    ],
                    "returnType": null,
                    "start": 1351,
                    "end": 1367
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
                              "start": 1381,
                              "end": 1391
                            },
                            "typeArguments": null,
                            "start": 1381,
                            "end": 1391
                          },
                          "start": 1379,
                          "end": 1391
                        },
                        "start": 1377,
                        "end": 1391
                      }
                    ],
                    "returnType": null,
                    "start": 1376,
                    "end": 1393
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
                          "start": 1406,
                          "end": 1415
                        },
                        "typeArguments": null,
                        "start": 1406,
                        "end": 1415
                      },
                      "start": 1404,
                      "end": 1415
                    },
                    "start": 1402,
                    "end": 1416
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
                            "start": 1430,
                            "end": 1436
                          },
                          "start": 1428,
                          "end": 1436
                        },
                        "start": 1426,
                        "end": 1436
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
                          "start": 1439,
                          "end": 1449
                        },
                        "typeArguments": null,
                        "start": 1439,
                        "end": 1449
                      },
                      "start": 1437,
                      "end": 1449
                    },
                    "start": 1425,
                    "end": 1450
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
                              "start": 1469,
                              "end": 1478
                            },
                            "typeArguments": null,
                            "start": 1469,
                            "end": 1478
                          },
                          "start": 1467,
                          "end": 1478
                        },
                        "start": 1465,
                        "end": 1478
                      }
                    ],
                    "returnType": null,
                    "start": 1460,
                    "end": 1480
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
                              "start": 1498,
                              "end": 1508
                            },
                            "typeArguments": null,
                            "start": 1498,
                            "end": 1508
                          },
                          "start": 1496,
                          "end": 1508
                        },
                        "start": 1494,
                        "end": 1508
                      }
                    ],
                    "returnType": null,
                    "start": 1489,
                    "end": 1510
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
                          "start": 1527,
                          "end": 1536
                        },
                        "typeArguments": null,
                        "start": 1527,
                        "end": 1536
                      },
                      "start": 1525,
                      "end": 1536
                    },
                    "start": 1519,
                    "end": 1537
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
                            "start": 1555,
                            "end": 1561
                          },
                          "start": 1553,
                          "end": 1561
                        },
                        "start": 1551,
                        "end": 1561
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
                          "start": 1564,
                          "end": 1574
                        },
                        "typeArguments": null,
                        "start": 1564,
                        "end": 1574
                      },
                      "start": 1562,
                      "end": 1574
                    },
                    "start": 1546,
                    "end": 1575
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
                            "start": 1589,
                            "end": 1595
                          },
                          "start": 1587,
                          "end": 1595
                        },
                        "start": 1586,
                        "end": 1595
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
                          "start": 1598,
                          "end": 1607
                        },
                        "typeArguments": null,
                        "start": 1598,
                        "end": 1607
                      },
                      "start": 1596,
                      "end": 1607
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1585,
                    "end": 1608
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
                            "start": 1621,
                            "end": 1627
                          },
                          "start": 1619,
                          "end": 1627
                        },
                        "start": 1618,
                        "end": 1627
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
                          "start": 1630,
                          "end": 1640
                        },
                        "typeArguments": null,
                        "start": 1630,
                        "end": 1640
                      },
                      "start": 1628,
                      "end": 1640
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1617,
                    "end": 1641
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
                      "start": 1651,
                      "end": 1652
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
                          "start": 1654,
                          "end": 1663
                        },
                        "typeArguments": null,
                        "start": 1654,
                        "end": 1663
                      },
                      "start": 1652,
                      "end": 1663
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1651,
                    "end": 1664
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
                      "start": 1673,
                      "end": 1674
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
                          "start": 1676,
                          "end": 1686
                        },
                        "typeArguments": null,
                        "start": 1676,
                        "end": 1686
                      },
                      "start": 1674,
                      "end": 1686
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1673,
                    "end": 1687
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
                      "start": 1697,
                      "end": 1698
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
                          "start": 1701,
                          "end": 1710
                        },
                        "typeArguments": null,
                        "start": 1701,
                        "end": 1710
                      },
                      "start": 1699,
                      "end": 1710
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1697,
                    "end": 1711
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
                      "start": 1720,
                      "end": 1721
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
                          "start": 1724,
                          "end": 1734
                        },
                        "typeArguments": null,
                        "start": 1724,
                        "end": 1734
                      },
                      "start": 1722,
                      "end": 1734
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1720,
                    "end": 1735
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1745,
                      "end": 1747
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
                              "start": 1752,
                              "end": 1761
                            },
                            "typeArguments": null,
                            "start": 1752,
                            "end": 1761
                          },
                          "start": 1750,
                          "end": 1761
                        },
                        "start": 1748,
                        "end": 1761
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1745,
                    "end": 1763
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1772,
                      "end": 1774
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
                              "start": 1779,
                              "end": 1789
                            },
                            "typeArguments": null,
                            "start": 1779,
                            "end": 1789
                          },
                          "start": 1777,
                          "end": 1789
                        },
                        "start": 1775,
                        "end": 1789
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1772,
                    "end": 1791
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1802
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
                          "start": 1806,
                          "end": 1815
                        },
                        "typeArguments": null,
                        "start": 1806,
                        "end": 1815
                      },
                      "start": 1804,
                      "end": 1815
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1800,
                    "end": 1816
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1825,
                      "end": 1827
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
                          "start": 1831,
                          "end": 1841
                        },
                        "typeArguments": null,
                        "start": 1831,
                        "end": 1841
                      },
                      "start": 1829,
                      "end": 1841
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1825,
                    "end": 1842
                  }
                ],
                "start": 1341,
                "end": 1849
              },
              "declare": false,
              "start": 1321,
              "end": 1849
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1314,
            "end": 1849
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1865,
              "end": 1875
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
                            "start": 1891,
                            "end": 1900
                          },
                          "typeArguments": null,
                          "start": 1891,
                          "end": 1900
                        },
                        "start": 1889,
                        "end": 1900
                      },
                      "start": 1887,
                      "end": 1900
                    }
                  ],
                  "returnType": null,
                  "start": 1886,
                  "end": 1902
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
                            "start": 1916,
                            "end": 1926
                          },
                          "typeArguments": null,
                          "start": 1916,
                          "end": 1926
                        },
                        "start": 1914,
                        "end": 1926
                      },
                      "start": 1912,
                      "end": 1926
                    }
                  ],
                  "returnType": null,
                  "start": 1911,
                  "end": 1928
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
                        "start": 1941,
                        "end": 1950
                      },
                      "typeArguments": null,
                      "start": 1941,
                      "end": 1950
                    },
                    "start": 1939,
                    "end": 1950
                  },
                  "start": 1937,
                  "end": 1951
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
                          "start": 1965,
                          "end": 1971
                        },
                        "start": 1963,
                        "end": 1971
                      },
                      "start": 1961,
                      "end": 1971
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
                        "start": 1974,
                        "end": 1984
                      },
                      "typeArguments": null,
                      "start": 1974,
                      "end": 1984
                    },
                    "start": 1972,
                    "end": 1984
                  },
                  "start": 1960,
                  "end": 1985
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
                            "start": 2004,
                            "end": 2013
                          },
                          "typeArguments": null,
                          "start": 2004,
                          "end": 2013
                        },
                        "start": 2002,
                        "end": 2013
                      },
                      "start": 2000,
                      "end": 2013
                    }
                  ],
                  "returnType": null,
                  "start": 1995,
                  "end": 2015
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
                            "start": 2033,
                            "end": 2043
                          },
                          "typeArguments": null,
                          "start": 2033,
                          "end": 2043
                        },
                        "start": 2031,
                        "end": 2043
                      },
                      "start": 2029,
                      "end": 2043
                    }
                  ],
                  "returnType": null,
                  "start": 2024,
                  "end": 2045
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
                        "start": 2062,
                        "end": 2071
                      },
                      "typeArguments": null,
                      "start": 2062,
                      "end": 2071
                    },
                    "start": 2060,
                    "end": 2071
                  },
                  "start": 2054,
                  "end": 2072
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
                          "start": 2090,
                          "end": 2096
                        },
                        "start": 2088,
                        "end": 2096
                      },
                      "start": 2086,
                      "end": 2096
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
                        "start": 2099,
                        "end": 2109
                      },
                      "typeArguments": null,
                      "start": 2099,
                      "end": 2109
                    },
                    "start": 2097,
                    "end": 2109
                  },
                  "start": 2081,
                  "end": 2110
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
                          "start": 2124,
                          "end": 2130
                        },
                        "start": 2122,
                        "end": 2130
                      },
                      "start": 2121,
                      "end": 2130
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
                        "start": 2133,
                        "end": 2142
                      },
                      "typeArguments": null,
                      "start": 2133,
                      "end": 2142
                    },
                    "start": 2131,
                    "end": 2142
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2120,
                  "end": 2143
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
                          "start": 2156,
                          "end": 2162
                        },
                        "start": 2154,
                        "end": 2162
                      },
                      "start": 2153,
                      "end": 2162
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
                        "start": 2165,
                        "end": 2175
                      },
                      "typeArguments": null,
                      "start": 2165,
                      "end": 2175
                    },
                    "start": 2163,
                    "end": 2175
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2152,
                  "end": 2176
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
                    "start": 2186,
                    "end": 2187
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
                        "start": 2189,
                        "end": 2198
                      },
                      "typeArguments": null,
                      "start": 2189,
                      "end": 2198
                    },
                    "start": 2187,
                    "end": 2198
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2186,
                  "end": 2199
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
                    "start": 2208,
                    "end": 2209
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
                        "start": 2211,
                        "end": 2221
                      },
                      "typeArguments": null,
                      "start": 2211,
                      "end": 2221
                    },
                    "start": 2209,
                    "end": 2221
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2208,
                  "end": 2222
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
                    "start": 2232,
                    "end": 2233
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
                        "start": 2236,
                        "end": 2245
                      },
                      "typeArguments": null,
                      "start": 2236,
                      "end": 2245
                    },
                    "start": 2234,
                    "end": 2245
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2232,
                  "end": 2246
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
                    "start": 2255,
                    "end": 2256
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
                        "start": 2259,
                        "end": 2269
                      },
                      "typeArguments": null,
                      "start": 2259,
                      "end": 2269
                    },
                    "start": 2257,
                    "end": 2269
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2255,
                  "end": 2270
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2280,
                    "end": 2282
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
                            "start": 2287,
                            "end": 2296
                          },
                          "typeArguments": null,
                          "start": 2287,
                          "end": 2296
                        },
                        "start": 2285,
                        "end": 2296
                      },
                      "start": 2283,
                      "end": 2296
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2280,
                  "end": 2298
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2307,
                    "end": 2309
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
                            "start": 2314,
                            "end": 2324
                          },
                          "typeArguments": null,
                          "start": 2314,
                          "end": 2324
                        },
                        "start": 2312,
                        "end": 2324
                      },
                      "start": 2310,
                      "end": 2324
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2307,
                  "end": 2326
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2335,
                    "end": 2337
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
                        "start": 2341,
                        "end": 2350
                      },
                      "typeArguments": null,
                      "start": 2341,
                      "end": 2350
                    },
                    "start": 2339,
                    "end": 2350
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2335,
                  "end": 2351
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2362
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
                        "start": 2366,
                        "end": 2376
                      },
                      "typeArguments": null,
                      "start": 2366,
                      "end": 2376
                    },
                    "start": 2364,
                    "end": 2376
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2360,
                  "end": 2377
                }
              ],
              "start": 1876,
              "end": 2384
            },
            "declare": false,
            "start": 1855,
            "end": 2384
          }
        ],
        "start": 1208,
        "end": 2386
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1198,
      "end": 2386
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2401,
          "end": 2410
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
                "start": 2425,
                "end": 2427
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
                  "start": 2430,
                  "end": 2437
                },
                "expression": false,
                "start": 2427,
                "end": 2437
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2417,
              "end": 2437
            }
          ],
          "start": 2411,
          "end": 2439
        },
        "abstract": false,
        "declare": false,
        "start": 2395,
        "end": 2439
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2388,
      "end": 2439
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2448,
        "end": 2458
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2459,
        "end": 2462
      },
      "abstract": false,
      "declare": false,
      "start": 2442,
      "end": 2462
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2481,
          "end": 2490
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
                        "start": 2502,
                        "end": 2511
                      },
                      "typeArguments": null,
                      "start": 2502,
                      "end": 2511
                    },
                    "start": 2500,
                    "end": 2511
                  },
                  "start": 2498,
                  "end": 2511
                }
              ],
              "returnType": null,
              "start": 2497,
              "end": 2513
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
                        "name": "C6_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2523,
                        "end": 2533
                      },
                      "typeArguments": null,
                      "start": 2523,
                      "end": 2533
                    },
                    "start": 2521,
                    "end": 2533
                  },
                  "start": 2519,
                  "end": 2533
                }
              ],
              "returnType": null,
              "start": 2518,
              "end": 2535
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
                    "start": 2544,
                    "end": 2553
                  },
                  "typeArguments": null,
                  "start": 2544,
                  "end": 2553
                },
                "start": 2542,
                "end": 2553
              },
              "start": 2540,
              "end": 2554
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
                      "start": 2564,
                      "end": 2570
                    },
                    "start": 2562,
                    "end": 2570
                  },
                  "start": 2560,
                  "end": 2570
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2573,
                    "end": 2583
                  },
                  "typeArguments": null,
                  "start": 2573,
                  "end": 2583
                },
                "start": 2571,
                "end": 2583
              },
              "start": 2559,
              "end": 2584
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
                        "start": 2599,
                        "end": 2608
                      },
                      "typeArguments": null,
                      "start": 2599,
                      "end": 2608
                    },
                    "start": 2597,
                    "end": 2608
                  },
                  "start": 2595,
                  "end": 2608
                }
              ],
              "returnType": null,
              "start": 2590,
              "end": 2610
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
                        "name": "C6_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2624,
                        "end": 2634
                      },
                      "typeArguments": null,
                      "start": 2624,
                      "end": 2634
                    },
                    "start": 2622,
                    "end": 2634
                  },
                  "start": 2620,
                  "end": 2634
                }
              ],
              "returnType": null,
              "start": 2615,
              "end": 2636
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
                    "start": 2649,
                    "end": 2658
                  },
                  "typeArguments": null,
                  "start": 2649,
                  "end": 2658
                },
                "start": 2647,
                "end": 2658
              },
              "start": 2641,
              "end": 2659
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
                      "start": 2673,
                      "end": 2679
                    },
                    "start": 2671,
                    "end": 2679
                  },
                  "start": 2669,
                  "end": 2679
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2682,
                    "end": 2692
                  },
                  "typeArguments": null,
                  "start": 2682,
                  "end": 2692
                },
                "start": 2680,
                "end": 2692
              },
              "start": 2664,
              "end": 2693
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
                      "start": 2703,
                      "end": 2709
                    },
                    "start": 2701,
                    "end": 2709
                  },
                  "start": 2700,
                  "end": 2709
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
                    "start": 2712,
                    "end": 2721
                  },
                  "typeArguments": null,
                  "start": 2712,
                  "end": 2721
                },
                "start": 2710,
                "end": 2721
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 2699,
              "end": 2722
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
                      "start": 2731,
                      "end": 2737
                    },
                    "start": 2729,
                    "end": 2737
                  },
                  "start": 2728,
                  "end": 2737
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2740,
                    "end": 2750
                  },
                  "typeArguments": null,
                  "start": 2740,
                  "end": 2750
                },
                "start": 2738,
                "end": 2750
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 2727,
              "end": 2751
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
                "start": 2757,
                "end": 2758
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
                    "start": 2760,
                    "end": 2769
                  },
                  "typeArguments": null,
                  "start": 2760,
                  "end": 2769
                },
                "start": 2758,
                "end": 2769
              },
              "accessibility": null,
              "static": false,
              "start": 2757,
              "end": 2770
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
                "start": 2775,
                "end": 2776
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2778,
                    "end": 2788
                  },
                  "typeArguments": null,
                  "start": 2778,
                  "end": 2788
                },
                "start": 2776,
                "end": 2788
              },
              "accessibility": null,
              "static": false,
              "start": 2775,
              "end": 2789
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
                "start": 2795,
                "end": 2796
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
                    "start": 2799,
                    "end": 2808
                  },
                  "typeArguments": null,
                  "start": 2799,
                  "end": 2808
                },
                "start": 2797,
                "end": 2808
              },
              "accessibility": null,
              "static": false,
              "start": 2795,
              "end": 2809
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
                "start": 2814,
                "end": 2815
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2818,
                    "end": 2828
                  },
                  "typeArguments": null,
                  "start": 2818,
                  "end": 2828
                },
                "start": 2816,
                "end": 2828
              },
              "accessibility": null,
              "static": false,
              "start": 2814,
              "end": 2829
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2835,
                "end": 2837
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
                        "start": 2842,
                        "end": 2851
                      },
                      "typeArguments": null,
                      "start": 2842,
                      "end": 2851
                    },
                    "start": 2840,
                    "end": 2851
                  },
                  "start": 2838,
                  "end": 2851
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2835,
              "end": 2853
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2858,
                "end": 2860
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
                        "name": "C6_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2865,
                        "end": 2875
                      },
                      "typeArguments": null,
                      "start": 2865,
                      "end": 2875
                    },
                    "start": 2863,
                    "end": 2875
                  },
                  "start": 2861,
                  "end": 2875
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2858,
              "end": 2877
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2882,
                "end": 2884
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
                    "start": 2888,
                    "end": 2897
                  },
                  "typeArguments": null,
                  "start": 2888,
                  "end": 2897
                },
                "start": 2886,
                "end": 2897
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2882,
              "end": 2898
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2903,
                "end": 2905
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
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2909,
                    "end": 2919
                  },
                  "typeArguments": null,
                  "start": 2909,
                  "end": 2919
                },
                "start": 2907,
                "end": 2919
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2903,
              "end": 2920
            }
          ],
          "start": 2491,
          "end": 2923
        },
        "declare": false,
        "start": 2471,
        "end": 2923
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2464,
      "end": 2923
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2935,
        "end": 2945
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
                      "start": 2957,
                      "end": 2966
                    },
                    "typeArguments": null,
                    "start": 2957,
                    "end": 2966
                  },
                  "start": 2955,
                  "end": 2966
                },
                "start": 2953,
                "end": 2966
              }
            ],
            "returnType": null,
            "start": 2952,
            "end": 2968
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
                      "name": "C6_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2978,
                      "end": 2988
                    },
                    "typeArguments": null,
                    "start": 2978,
                    "end": 2988
                  },
                  "start": 2976,
                  "end": 2988
                },
                "start": 2974,
                "end": 2988
              }
            ],
            "returnType": null,
            "start": 2973,
            "end": 2990
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
                  "start": 2999,
                  "end": 3008
                },
                "typeArguments": null,
                "start": 2999,
                "end": 3008
              },
              "start": 2997,
              "end": 3008
            },
            "start": 2995,
            "end": 3009
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
                    "start": 3019,
                    "end": 3025
                  },
                  "start": 3017,
                  "end": 3025
                },
                "start": 3015,
                "end": 3025
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3028,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3028,
                "end": 3038
              },
              "start": 3026,
              "end": 3038
            },
            "start": 3014,
            "end": 3039
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
                      "start": 3054,
                      "end": 3063
                    },
                    "typeArguments": null,
                    "start": 3054,
                    "end": 3063
                  },
                  "start": 3052,
                  "end": 3063
                },
                "start": 3050,
                "end": 3063
              }
            ],
            "returnType": null,
            "start": 3045,
            "end": 3065
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
                      "name": "C6_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3079,
                      "end": 3089
                    },
                    "typeArguments": null,
                    "start": 3079,
                    "end": 3089
                  },
                  "start": 3077,
                  "end": 3089
                },
                "start": 3075,
                "end": 3089
              }
            ],
            "returnType": null,
            "start": 3070,
            "end": 3091
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
                  "start": 3104,
                  "end": 3113
                },
                "typeArguments": null,
                "start": 3104,
                "end": 3113
              },
              "start": 3102,
              "end": 3113
            },
            "start": 3096,
            "end": 3114
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
                    "start": 3128,
                    "end": 3134
                  },
                  "start": 3126,
                  "end": 3134
                },
                "start": 3124,
                "end": 3134
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3137,
                  "end": 3147
                },
                "typeArguments": null,
                "start": 3137,
                "end": 3147
              },
              "start": 3135,
              "end": 3147
            },
            "start": 3119,
            "end": 3148
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
                    "start": 3158,
                    "end": 3164
                  },
                  "start": 3156,
                  "end": 3164
                },
                "start": 3155,
                "end": 3164
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
                  "start": 3167,
                  "end": 3176
                },
                "typeArguments": null,
                "start": 3167,
                "end": 3176
              },
              "start": 3165,
              "end": 3176
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3154,
            "end": 3177
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
                    "start": 3186,
                    "end": 3192
                  },
                  "start": 3184,
                  "end": 3192
                },
                "start": 3183,
                "end": 3192
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3195,
                  "end": 3205
                },
                "typeArguments": null,
                "start": 3195,
                "end": 3205
              },
              "start": 3193,
              "end": 3205
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3182,
            "end": 3206
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
              "start": 3212,
              "end": 3213
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
                  "start": 3215,
                  "end": 3224
                },
                "typeArguments": null,
                "start": 3215,
                "end": 3224
              },
              "start": 3213,
              "end": 3224
            },
            "accessibility": null,
            "static": false,
            "start": 3212,
            "end": 3225
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
              "start": 3230,
              "end": 3231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3233,
                  "end": 3243
                },
                "typeArguments": null,
                "start": 3233,
                "end": 3243
              },
              "start": 3231,
              "end": 3243
            },
            "accessibility": null,
            "static": false,
            "start": 3230,
            "end": 3244
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
              "start": 3250,
              "end": 3251
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
                  "start": 3254,
                  "end": 3263
                },
                "typeArguments": null,
                "start": 3254,
                "end": 3263
              },
              "start": 3252,
              "end": 3263
            },
            "accessibility": null,
            "static": false,
            "start": 3250,
            "end": 3264
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
              "start": 3269,
              "end": 3270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3273,
                  "end": 3283
                },
                "typeArguments": null,
                "start": 3273,
                "end": 3283
              },
              "start": 3271,
              "end": 3283
            },
            "accessibility": null,
            "static": false,
            "start": 3269,
            "end": 3284
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3290,
              "end": 3292
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
                      "start": 3297,
                      "end": 3306
                    },
                    "typeArguments": null,
                    "start": 3297,
                    "end": 3306
                  },
                  "start": 3295,
                  "end": 3306
                },
                "start": 3293,
                "end": 3306
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3290,
            "end": 3308
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3313,
              "end": 3315
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
                      "name": "C6_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3320,
                      "end": 3330
                    },
                    "typeArguments": null,
                    "start": 3320,
                    "end": 3330
                  },
                  "start": 3318,
                  "end": 3330
                },
                "start": 3316,
                "end": 3330
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3313,
            "end": 3332
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3337,
              "end": 3339
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
                  "start": 3343,
                  "end": 3352
                },
                "typeArguments": null,
                "start": 3343,
                "end": 3352
              },
              "start": 3341,
              "end": 3352
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3337,
            "end": 3353
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3358,
              "end": 3360
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
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3364,
                  "end": 3374
                },
                "typeArguments": null,
                "start": 3364,
                "end": 3374
              },
              "start": 3362,
              "end": 3374
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3358,
            "end": 3375
          }
        ],
        "start": 2946,
        "end": 3378
      },
      "declare": false,
      "start": 2925,
      "end": 3378
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3394,
          "end": 3396
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
                  "start": 3420,
                  "end": 3431
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
                        "start": 3442,
                        "end": 3444
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
                          "start": 3448,
                          "end": 3454
                        },
                        "start": 3446,
                        "end": 3454
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3442,
                      "end": 3455
                    }
                  ],
                  "start": 3432,
                  "end": 3461
                },
                "declare": false,
                "start": 3410,
                "end": 3461
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3403,
              "end": 3461
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3477,
                "end": 3489
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
                      "start": 3500,
                      "end": 3502
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
                        "start": 3506,
                        "end": 3512
                      },
                      "start": 3504,
                      "end": 3512
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3500,
                    "end": 3513
                  }
                ],
                "start": 3490,
                "end": 3519
              },
              "declare": false,
              "start": 3467,
              "end": 3519
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3535,
                "end": 3548
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
                    "start": 3557,
                    "end": 3568
                  },
                  "typeArguments": null,
                  "start": 3557,
                  "end": 3568
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 3569,
                "end": 3576
              },
              "declare": false,
              "start": 3525,
              "end": 3576
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3604
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
                    "start": 3613,
                    "end": 3625
                  },
                  "typeArguments": null,
                  "start": 3613,
                  "end": 3625
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 3626,
                "end": 3633
              },
              "declare": false,
              "start": 3581,
              "end": 3633
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
                  "start": 3655,
                  "end": 3667
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
                      "start": 3676,
                      "end": 3687
                    },
                    "typeArguments": null,
                    "start": 3676,
                    "end": 3687
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 3688,
                  "end": 3695
                },
                "declare": false,
                "start": 3645,
                "end": 3695
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3638,
              "end": 3695
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
                  "start": 3717,
                  "end": 3729
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
                      "start": 3738,
                      "end": 3750
                    },
                    "typeArguments": null,
                    "start": 3738,
                    "end": 3750
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 3751,
                  "end": 3758
                },
                "declare": false,
                "start": 3707,
                "end": 3758
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3700,
              "end": 3758
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3774,
                "end": 3787
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
                    "start": 3796,
                    "end": 3808
                  },
                  "typeArguments": null,
                  "start": 3796,
                  "end": 3808
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3810,
                    "end": 3821
                  },
                  "typeArguments": null,
                  "start": 3810,
                  "end": 3821
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 3822,
                "end": 3829
              },
              "declare": false,
              "start": 3764,
              "end": 3829
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
                  "start": 3851,
                  "end": 3863
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
                      "start": 3873,
                      "end": 3885
                    },
                    "typeArguments": null,
                    "start": 3873,
                    "end": 3885
                  },
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3887,
                      "end": 3898
                    },
                    "typeArguments": null,
                    "start": 3887,
                    "end": 3898
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 3899,
                  "end": 3906
                },
                "declare": false,
                "start": 3841,
                "end": 3906
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3834,
              "end": 3906
            }
          ],
          "start": 3397,
          "end": 3908
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 3387,
        "end": 3908
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3380,
      "end": 3908
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3918,
        "end": 3920
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
                "name": "m4_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3944,
                "end": 3955
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
                      "start": 3966,
                      "end": 3968
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
                        "start": 3972,
                        "end": 3978
                      },
                      "start": 3970,
                      "end": 3978
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3966,
                    "end": 3979
                  }
                ],
                "start": 3956,
                "end": 3985
              },
              "declare": false,
              "start": 3934,
              "end": 3985
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3927,
            "end": 3985
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4001,
              "end": 4013
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
                    "start": 4024,
                    "end": 4026
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
                      "start": 4030,
                      "end": 4036
                    },
                    "start": 4028,
                    "end": 4036
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 4024,
                  "end": 4037
                }
              ],
              "start": 4014,
              "end": 4043
            },
            "declare": false,
            "start": 3991,
            "end": 4043
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_C1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4059,
              "end": 4072
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4081,
                  "end": 4092
                },
                "typeArguments": null,
                "start": 4081,
                "end": 4092
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 4093,
              "end": 4100
            },
            "declare": false,
            "start": 4049,
            "end": 4100
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4115,
              "end": 4128
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4137,
                  "end": 4149
                },
                "typeArguments": null,
                "start": 4137,
                "end": 4149
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 4150,
              "end": 4157
            },
            "declare": false,
            "start": 4105,
            "end": 4157
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4179,
                "end": 4191
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4200,
                    "end": 4211
                  },
                  "typeArguments": null,
                  "start": 4200,
                  "end": 4211
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4212,
                "end": 4219
              },
              "declare": false,
              "start": 4169,
              "end": 4219
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4162,
            "end": 4219
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_C4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4241,
                "end": 4253
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4262,
                    "end": 4274
                  },
                  "typeArguments": null,
                  "start": 4262,
                  "end": 4274
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4275,
                "end": 4282
              },
              "declare": false,
              "start": 4231,
              "end": 4282
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4224,
            "end": 4282
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4298,
              "end": 4311
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4320,
                  "end": 4332
                },
                "typeArguments": null,
                "start": 4320,
                "end": 4332
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4334,
                  "end": 4345
                },
                "typeArguments": null,
                "start": 4334,
                "end": 4345
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 4346,
              "end": 4353
            },
            "declare": false,
            "start": 4288,
            "end": 4353
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4375,
                "end": 4387
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4397,
                    "end": 4409
                  },
                  "typeArguments": null,
                  "start": 4397,
                  "end": 4409
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4411,
                    "end": 4422
                  },
                  "typeArguments": null,
                  "start": 4411,
                  "end": 4422
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4423,
                "end": 4430
              },
              "declare": false,
              "start": 4365,
              "end": 4430
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4358,
            "end": 4430
          }
        ],
        "start": 3921,
        "end": 4432
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3911,
      "end": 4432
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4451,
          "end": 4463
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
                "start": 4470,
                "end": 4472
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
                  "start": 4476,
                  "end": 4482
                },
                "start": 4474,
                "end": 4482
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 4470,
              "end": 4483
            }
          ],
          "start": 4464,
          "end": 4485
        },
        "declare": false,
        "start": 4441,
        "end": 4485
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4434,
      "end": 4485
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4497,
        "end": 4510
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
              "start": 4517,
              "end": 4519
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
                "start": 4523,
                "end": 4529
              },
              "start": 4521,
              "end": 4529
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4517,
            "end": 4530
          }
        ],
        "start": 4511,
        "end": 4532
      },
      "declare": false,
      "start": 4487,
      "end": 4532
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4544,
        "end": 4558
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
            "start": 4567,
            "end": 4579
          },
          "typeArguments": null,
          "start": 4567,
          "end": 4579
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4580,
        "end": 4583
      },
      "declare": false,
      "start": 4534,
      "end": 4583
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4594,
        "end": 4608
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 4617,
            "end": 4630
          },
          "typeArguments": null,
          "start": 4617,
          "end": 4630
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4631,
        "end": 4634
      },
      "declare": false,
      "start": 4584,
      "end": 4634
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C3_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4652,
          "end": 4665
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
              "start": 4674,
              "end": 4686
            },
            "typeArguments": null,
            "start": 4674,
            "end": 4686
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 4687,
          "end": 4690
        },
        "declare": false,
        "start": 4642,
        "end": 4690
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4635,
      "end": 4690
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C4_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4708,
          "end": 4721
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4730,
              "end": 4743
            },
            "typeArguments": null,
            "start": 4730,
            "end": 4743
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 4744,
          "end": 4747
        },
        "declare": false,
        "start": 4698,
        "end": 4747
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4691,
      "end": 4747
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4759,
        "end": 4773
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 4782,
            "end": 4795
          },
          "typeArguments": null,
          "start": 4782,
          "end": 4795
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 4797,
            "end": 4809
          },
          "typeArguments": null,
          "start": 4797,
          "end": 4809
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4810,
        "end": 4813
      },
      "declare": false,
      "start": 4749,
      "end": 4813
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C6_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4831,
          "end": 4844
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4854,
              "end": 4867
            },
            "typeArguments": null,
            "start": 4854,
            "end": 4867
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4869,
              "end": 4881
            },
            "typeArguments": null,
            "start": 4869,
            "end": 4881
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 4882,
          "end": 4885
        },
        "declare": false,
        "start": 4821,
        "end": 4885
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4814,
      "end": 4885
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4885
}
```
