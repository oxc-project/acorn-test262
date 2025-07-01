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
        "start": 7,
        "end": 9
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
                "start": 29,
                "end": 38
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
                      "start": 57,
                      "end": 59
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
                        "start": 62,
                        "end": 73
                      },
                      "expression": false,
                      "start": 59,
                      "end": 73
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 49,
                    "end": 73
                  }
                ],
                "start": 39,
                "end": 79
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 79
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
              "start": 92,
              "end": 102
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 103,
              "end": 110
            },
            "abstract": false,
            "declare": false,
            "start": 86,
            "end": 110
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
                "start": 133,
                "end": 142
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
                              "start": 158,
                              "end": 167
                            },
                            "typeArguments": null,
                            "start": 158,
                            "end": 167
                          },
                          "start": 156,
                          "end": 167
                        },
                        "start": 154,
                        "end": 167
                      }
                    ],
                    "returnType": null,
                    "start": 153,
                    "end": 169
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
                              "start": 183,
                              "end": 193
                            },
                            "typeArguments": null,
                            "start": 183,
                            "end": 193
                          },
                          "start": 181,
                          "end": 193
                        },
                        "start": 179,
                        "end": 193
                      }
                    ],
                    "returnType": null,
                    "start": 178,
                    "end": 195
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
                          "start": 208,
                          "end": 217
                        },
                        "typeArguments": null,
                        "start": 208,
                        "end": 217
                      },
                      "start": 206,
                      "end": 217
                    },
                    "start": 204,
                    "end": 218
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
                            "start": 232,
                            "end": 238
                          },
                          "start": 230,
                          "end": 238
                        },
                        "start": 228,
                        "end": 238
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
                          "start": 241,
                          "end": 251
                        },
                        "typeArguments": null,
                        "start": 241,
                        "end": 251
                      },
                      "start": 239,
                      "end": 251
                    },
                    "start": 227,
                    "end": 252
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
                              "start": 271,
                              "end": 280
                            },
                            "typeArguments": null,
                            "start": 271,
                            "end": 280
                          },
                          "start": 269,
                          "end": 280
                        },
                        "start": 267,
                        "end": 280
                      }
                    ],
                    "returnType": null,
                    "start": 262,
                    "end": 282
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
                              "start": 300,
                              "end": 310
                            },
                            "typeArguments": null,
                            "start": 300,
                            "end": 310
                          },
                          "start": 298,
                          "end": 310
                        },
                        "start": 296,
                        "end": 310
                      }
                    ],
                    "returnType": null,
                    "start": 291,
                    "end": 312
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
                          "start": 329,
                          "end": 338
                        },
                        "typeArguments": null,
                        "start": 329,
                        "end": 338
                      },
                      "start": 327,
                      "end": 338
                    },
                    "start": 321,
                    "end": 339
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
                            "start": 357,
                            "end": 363
                          },
                          "start": 355,
                          "end": 363
                        },
                        "start": 353,
                        "end": 363
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
                          "start": 366,
                          "end": 376
                        },
                        "typeArguments": null,
                        "start": 366,
                        "end": 376
                      },
                      "start": 364,
                      "end": 376
                    },
                    "start": 348,
                    "end": 377
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
                            "start": 391,
                            "end": 397
                          },
                          "start": 389,
                          "end": 397
                        },
                        "start": 388,
                        "end": 397
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
                          "start": 400,
                          "end": 409
                        },
                        "typeArguments": null,
                        "start": 400,
                        "end": 409
                      },
                      "start": 398,
                      "end": 409
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 387,
                    "end": 410
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
                            "start": 423,
                            "end": 429
                          },
                          "start": 421,
                          "end": 429
                        },
                        "start": 420,
                        "end": 429
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
                          "start": 432,
                          "end": 442
                        },
                        "typeArguments": null,
                        "start": 432,
                        "end": 442
                      },
                      "start": 430,
                      "end": 442
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 419,
                    "end": 443
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
                      "start": 453,
                      "end": 454
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
                          "start": 456,
                          "end": 465
                        },
                        "typeArguments": null,
                        "start": 456,
                        "end": 465
                      },
                      "start": 454,
                      "end": 465
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 453,
                    "end": 466
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
                      "start": 475,
                      "end": 476
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
                          "start": 478,
                          "end": 488
                        },
                        "typeArguments": null,
                        "start": 478,
                        "end": 488
                      },
                      "start": 476,
                      "end": 488
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 475,
                    "end": 489
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
                      "start": 499,
                      "end": 500
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
                          "start": 503,
                          "end": 512
                        },
                        "typeArguments": null,
                        "start": 503,
                        "end": 512
                      },
                      "start": 501,
                      "end": 512
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 499,
                    "end": 513
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
                      "start": 522,
                      "end": 523
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
                          "start": 526,
                          "end": 536
                        },
                        "typeArguments": null,
                        "start": 526,
                        "end": 536
                      },
                      "start": 524,
                      "end": 536
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 522,
                    "end": 537
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 549
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
                              "start": 554,
                              "end": 563
                            },
                            "typeArguments": null,
                            "start": 554,
                            "end": 563
                          },
                          "start": 552,
                          "end": 563
                        },
                        "start": 550,
                        "end": 563
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 547,
                    "end": 565
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 574,
                      "end": 576
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
                              "start": 581,
                              "end": 591
                            },
                            "typeArguments": null,
                            "start": 581,
                            "end": 591
                          },
                          "start": 579,
                          "end": 591
                        },
                        "start": 577,
                        "end": 591
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 574,
                    "end": 593
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 604
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
                          "start": 608,
                          "end": 617
                        },
                        "typeArguments": null,
                        "start": 608,
                        "end": 617
                      },
                      "start": 606,
                      "end": 617
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 602,
                    "end": 618
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 627,
                      "end": 629
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
                          "start": 633,
                          "end": 643
                        },
                        "typeArguments": null,
                        "start": 633,
                        "end": 643
                      },
                      "start": 631,
                      "end": 643
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 627,
                    "end": 644
                  }
                ],
                "start": 143,
                "end": 651
              },
              "declare": false,
              "start": 123,
              "end": 651
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 116,
            "end": 651
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 677
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
                            "start": 693,
                            "end": 702
                          },
                          "typeArguments": null,
                          "start": 693,
                          "end": 702
                        },
                        "start": 691,
                        "end": 702
                      },
                      "start": 689,
                      "end": 702
                    }
                  ],
                  "returnType": null,
                  "start": 688,
                  "end": 704
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
                            "start": 718,
                            "end": 728
                          },
                          "typeArguments": null,
                          "start": 718,
                          "end": 728
                        },
                        "start": 716,
                        "end": 728
                      },
                      "start": 714,
                      "end": 728
                    }
                  ],
                  "returnType": null,
                  "start": 713,
                  "end": 730
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
                        "start": 743,
                        "end": 752
                      },
                      "typeArguments": null,
                      "start": 743,
                      "end": 752
                    },
                    "start": 741,
                    "end": 752
                  },
                  "start": 739,
                  "end": 753
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
                          "start": 767,
                          "end": 773
                        },
                        "start": 765,
                        "end": 773
                      },
                      "start": 763,
                      "end": 773
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
                        "start": 776,
                        "end": 786
                      },
                      "typeArguments": null,
                      "start": 776,
                      "end": 786
                    },
                    "start": 774,
                    "end": 786
                  },
                  "start": 762,
                  "end": 787
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
                            "start": 806,
                            "end": 815
                          },
                          "typeArguments": null,
                          "start": 806,
                          "end": 815
                        },
                        "start": 804,
                        "end": 815
                      },
                      "start": 802,
                      "end": 815
                    }
                  ],
                  "returnType": null,
                  "start": 797,
                  "end": 817
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
                            "start": 835,
                            "end": 845
                          },
                          "typeArguments": null,
                          "start": 835,
                          "end": 845
                        },
                        "start": 833,
                        "end": 845
                      },
                      "start": 831,
                      "end": 845
                    }
                  ],
                  "returnType": null,
                  "start": 826,
                  "end": 847
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
                        "start": 864,
                        "end": 873
                      },
                      "typeArguments": null,
                      "start": 864,
                      "end": 873
                    },
                    "start": 862,
                    "end": 873
                  },
                  "start": 856,
                  "end": 874
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
                          "start": 892,
                          "end": 898
                        },
                        "start": 890,
                        "end": 898
                      },
                      "start": 888,
                      "end": 898
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
                        "start": 901,
                        "end": 911
                      },
                      "typeArguments": null,
                      "start": 901,
                      "end": 911
                    },
                    "start": 899,
                    "end": 911
                  },
                  "start": 883,
                  "end": 912
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
                          "start": 926,
                          "end": 932
                        },
                        "start": 924,
                        "end": 932
                      },
                      "start": 923,
                      "end": 932
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
                        "start": 935,
                        "end": 944
                      },
                      "typeArguments": null,
                      "start": 935,
                      "end": 944
                    },
                    "start": 933,
                    "end": 944
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 922,
                  "end": 945
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
                          "start": 958,
                          "end": 964
                        },
                        "start": 956,
                        "end": 964
                      },
                      "start": 955,
                      "end": 964
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
                        "start": 967,
                        "end": 977
                      },
                      "typeArguments": null,
                      "start": 967,
                      "end": 977
                    },
                    "start": 965,
                    "end": 977
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 954,
                  "end": 978
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
                    "start": 988,
                    "end": 989
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
                        "start": 991,
                        "end": 1000
                      },
                      "typeArguments": null,
                      "start": 991,
                      "end": 1000
                    },
                    "start": 989,
                    "end": 1000
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 988,
                  "end": 1001
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
                    "start": 1010,
                    "end": 1011
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
                        "start": 1013,
                        "end": 1023
                      },
                      "typeArguments": null,
                      "start": 1013,
                      "end": 1023
                    },
                    "start": 1011,
                    "end": 1023
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1010,
                  "end": 1024
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
                    "start": 1034,
                    "end": 1035
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
                        "start": 1038,
                        "end": 1047
                      },
                      "typeArguments": null,
                      "start": 1038,
                      "end": 1047
                    },
                    "start": 1036,
                    "end": 1047
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1034,
                  "end": 1048
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
                    "start": 1057,
                    "end": 1058
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
                        "start": 1061,
                        "end": 1071
                      },
                      "typeArguments": null,
                      "start": 1061,
                      "end": 1071
                    },
                    "start": 1059,
                    "end": 1071
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1057,
                  "end": 1072
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1084
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
                            "start": 1089,
                            "end": 1098
                          },
                          "typeArguments": null,
                          "start": 1089,
                          "end": 1098
                        },
                        "start": 1087,
                        "end": 1098
                      },
                      "start": 1085,
                      "end": 1098
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1082,
                  "end": 1100
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1109,
                    "end": 1111
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
                            "start": 1116,
                            "end": 1126
                          },
                          "typeArguments": null,
                          "start": 1116,
                          "end": 1126
                        },
                        "start": 1114,
                        "end": 1126
                      },
                      "start": 1112,
                      "end": 1126
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1109,
                  "end": 1128
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1139
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
                        "start": 1143,
                        "end": 1152
                      },
                      "typeArguments": null,
                      "start": 1143,
                      "end": 1152
                    },
                    "start": 1141,
                    "end": 1152
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1137,
                  "end": 1153
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1164
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
                        "start": 1168,
                        "end": 1178
                      },
                      "typeArguments": null,
                      "start": 1168,
                      "end": 1178
                    },
                    "start": 1166,
                    "end": 1178
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1162,
                  "end": 1179
                }
              ],
              "start": 678,
              "end": 1186
            },
            "declare": false,
            "start": 657,
            "end": 1186
          }
        ],
        "start": 10,
        "end": 1188
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1188
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
        "start": 1196,
        "end": 1205
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
              "start": 1220,
              "end": 1222
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
                "start": 1225,
                "end": 1232
              },
              "expression": false,
              "start": 1222,
              "end": 1232
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1212,
            "end": 1232
          }
        ],
        "start": 1206,
        "end": 1234
      },
      "abstract": false,
      "declare": false,
      "start": 1190,
      "end": 1234
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1247,
        "end": 1256
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
                      "start": 1268,
                      "end": 1277
                    },
                    "typeArguments": null,
                    "start": 1268,
                    "end": 1277
                  },
                  "start": 1266,
                  "end": 1277
                },
                "start": 1264,
                "end": 1277
              }
            ],
            "returnType": null,
            "start": 1263,
            "end": 1279
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
                  "start": 1288,
                  "end": 1297
                },
                "typeArguments": null,
                "start": 1288,
                "end": 1297
              },
              "start": 1286,
              "end": 1297
            },
            "start": 1284,
            "end": 1298
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
                      "start": 1313,
                      "end": 1322
                    },
                    "typeArguments": null,
                    "start": 1313,
                    "end": 1322
                  },
                  "start": 1311,
                  "end": 1322
                },
                "start": 1309,
                "end": 1322
              }
            ],
            "returnType": null,
            "start": 1304,
            "end": 1324
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
                  "start": 1337,
                  "end": 1346
                },
                "typeArguments": null,
                "start": 1337,
                "end": 1346
              },
              "start": 1335,
              "end": 1346
            },
            "start": 1329,
            "end": 1347
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
                    "start": 1357,
                    "end": 1363
                  },
                  "start": 1355,
                  "end": 1363
                },
                "start": 1354,
                "end": 1363
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
                  "start": 1366,
                  "end": 1375
                },
                "typeArguments": null,
                "start": 1366,
                "end": 1375
              },
              "start": 1364,
              "end": 1375
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1353,
            "end": 1376
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
              "start": 1382,
              "end": 1383
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
                  "start": 1385,
                  "end": 1394
                },
                "typeArguments": null,
                "start": 1385,
                "end": 1394
              },
              "start": 1383,
              "end": 1394
            },
            "accessibility": null,
            "static": false,
            "start": 1382,
            "end": 1395
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
              "start": 1401,
              "end": 1402
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
                  "start": 1405,
                  "end": 1414
                },
                "typeArguments": null,
                "start": 1405,
                "end": 1414
              },
              "start": 1403,
              "end": 1414
            },
            "accessibility": null,
            "static": false,
            "start": 1401,
            "end": 1415
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1421,
              "end": 1423
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
                      "start": 1428,
                      "end": 1437
                    },
                    "typeArguments": null,
                    "start": 1428,
                    "end": 1437
                  },
                  "start": 1426,
                  "end": 1437
                },
                "start": 1424,
                "end": 1437
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1421,
            "end": 1439
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1446
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
                  "start": 1450,
                  "end": 1459
                },
                "typeArguments": null,
                "start": 1450,
                "end": 1459
              },
              "start": 1448,
              "end": 1459
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1444,
            "end": 1460
          }
        ],
        "start": 1257,
        "end": 1462
      },
      "declare": false,
      "start": 1237,
      "end": 1462
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1473
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
                "start": 1497,
                "end": 1508
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
                      "start": 1519,
                      "end": 1521
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
                        "start": 1525,
                        "end": 1531
                      },
                      "start": 1523,
                      "end": 1531
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1519,
                    "end": 1532
                  }
                ],
                "start": 1509,
                "end": 1538
              },
              "declare": false,
              "start": 1487,
              "end": 1538
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1480,
            "end": 1538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1554,
              "end": 1566
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
                    "start": 1577,
                    "end": 1579
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
                      "start": 1583,
                      "end": 1589
                    },
                    "start": 1581,
                    "end": 1589
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1577,
                  "end": 1590
                }
              ],
              "start": 1567,
              "end": 1596
            },
            "declare": false,
            "start": 1544,
            "end": 1596
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1625
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
                  "start": 1634,
                  "end": 1645
                },
                "typeArguments": null,
                "start": 1634,
                "end": 1645
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1646,
              "end": 1653
            },
            "declare": false,
            "start": 1602,
            "end": 1653
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1681
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
                  "start": 1690,
                  "end": 1702
                },
                "typeArguments": null,
                "start": 1690,
                "end": 1702
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1703,
              "end": 1710
            },
            "declare": false,
            "start": 1658,
            "end": 1710
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
                "start": 1732,
                "end": 1744
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
                    "start": 1753,
                    "end": 1764
                  },
                  "typeArguments": null,
                  "start": 1753,
                  "end": 1764
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1765,
                "end": 1772
              },
              "declare": false,
              "start": 1722,
              "end": 1772
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1715,
            "end": 1772
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
                "start": 1794,
                "end": 1806
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
                    "start": 1815,
                    "end": 1827
                  },
                  "typeArguments": null,
                  "start": 1815,
                  "end": 1827
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1828,
                "end": 1835
              },
              "declare": false,
              "start": 1784,
              "end": 1835
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1777,
            "end": 1835
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1851,
              "end": 1864
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
                  "start": 1873,
                  "end": 1885
                },
                "typeArguments": null,
                "start": 1873,
                "end": 1885
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1887,
                  "end": 1898
                },
                "typeArguments": null,
                "start": 1887,
                "end": 1898
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1899,
              "end": 1906
            },
            "declare": false,
            "start": 1841,
            "end": 1906
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
                "start": 1928,
                "end": 1940
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
                    "start": 1950,
                    "end": 1962
                  },
                  "typeArguments": null,
                  "start": 1950,
                  "end": 1962
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1975
                  },
                  "typeArguments": null,
                  "start": 1964,
                  "end": 1975
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1976,
                "end": 1983
              },
              "declare": false,
              "start": 1918,
              "end": 1983
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1911,
            "end": 1983
          }
        ],
        "start": 1474,
        "end": 1985
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1464,
      "end": 1985
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1997,
        "end": 2009
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
              "start": 2016,
              "end": 2018
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
                "start": 2022,
                "end": 2028
              },
              "start": 2020,
              "end": 2028
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2016,
            "end": 2029
          }
        ],
        "start": 2010,
        "end": 2031
      },
      "declare": false,
      "start": 1987,
      "end": 2031
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2056
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
            "start": 2065,
            "end": 2077
          },
          "typeArguments": null,
          "start": 2065,
          "end": 2077
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2078,
        "end": 2081
      },
      "declare": false,
      "start": 2033,
      "end": 2081
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2081
}
```
