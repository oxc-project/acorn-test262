__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ICallSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 31
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
                },
                "start": 85,
                "end": 93
              },
              "start": 83,
              "end": 94
            }
          ],
          "start": 32,
          "end": 96
        },
        "declare": false,
        "start": 7,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 96
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ICallSignatureWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 143
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 232,
                      "end": 238
                    },
                    "start": 230,
                    "end": 238
                  },
                  "start": 229,
                  "end": 238
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 287,
                      "end": 293
                    },
                    "start": 285,
                    "end": 293
                  },
                  "start": 284,
                  "end": 293
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 296,
                  "end": 300
                },
                "start": 294,
                "end": 300
              },
              "start": 199,
              "end": 301
            }
          ],
          "start": 144,
          "end": 303
        },
        "declare": false,
        "start": 105,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 98,
      "end": 303
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ICallSignatureWithRestParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 354
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    },
                    "start": 363,
                    "end": 371
                  },
                  "start": 362,
                  "end": 371
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 381
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 383,
                        "end": 389
                      },
                      "start": 383,
                      "end": 391
                    },
                    "start": 381,
                    "end": 391
                  },
                  "value": null,
                  "start": 373,
                  "end": 391
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 394,
                  "end": 400
                },
                "start": 392,
                "end": 400
              },
              "start": 361,
              "end": 401
            }
          ],
          "start": 355,
          "end": 403
        },
        "declare": false,
        "start": 312,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 305,
      "end": 403
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ICallSignatureWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 449
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 460,
                      "end": 466
                    },
                    "start": 458,
                    "end": 466
                  },
                  "start": 457,
                  "end": 466
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 469,
                  "end": 475
                },
                "start": 467,
                "end": 475
              },
              "start": 456,
              "end": 476
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
                      "type": "TSNumberKeyword",
                      "start": 485,
                      "end": 491
                    },
                    "start": 483,
                    "end": 491
                  },
                  "start": 482,
                  "end": 491
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 494,
                  "end": 500
                },
                "start": 492,
                "end": 500
              },
              "start": 481,
              "end": 501
            }
          ],
          "start": 450,
          "end": 503
        },
        "declare": false,
        "start": 412,
        "end": 503
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 405,
      "end": 503
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ICallSignatureWithTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 554
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
                "start": 555,
                "end": 556
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 555,
              "end": 556
            }
          ],
          "start": 554,
          "end": 557
        },
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
                        "start": 613,
                        "end": 614
                      },
                      "typeArguments": null,
                      "start": 613,
                      "end": 614
                    },
                    "start": 611,
                    "end": 614
                  },
                  "start": 610,
                  "end": 614
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 617,
                  "end": 623
                },
                "start": 615,
                "end": 623
              },
              "start": 609,
              "end": 624
            }
          ],
          "start": 558,
          "end": 626
        },
        "declare": false,
        "start": 512,
        "end": 626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 505,
      "end": 626
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ICallSignatureWithOwnTypeParametes",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 679
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
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
                      "start": 687,
                      "end": 688
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ICallSignature",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 711
                      },
                      "typeArguments": null,
                      "start": 697,
                      "end": 711
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 687,
                    "end": 711
                  }
                ],
                "start": 686,
                "end": 712
              },
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
                        "start": 716,
                        "end": 717
                      },
                      "typeArguments": null,
                      "start": 716,
                      "end": 717
                    },
                    "start": 714,
                    "end": 717
                  },
                  "start": 713,
                  "end": 717
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 720,
                  "end": 726
                },
                "start": 718,
                "end": 726
              },
              "start": 686,
              "end": 727
            }
          ],
          "start": 680,
          "end": 729
        },
        "declare": false,
        "start": 635,
        "end": 729
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 628,
      "end": 729
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 730
}
```
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
        "name": "IGlobalCallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 30
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "start": 82,
            "end": 93
          }
        ],
        "start": 31,
        "end": 95
      },
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalCallSignatureWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 141
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 230,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 227,
                "end": 236
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 285,
                    "end": 291
                  },
                  "start": 283,
                  "end": 291
                },
                "start": 282,
                "end": 291
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 294,
                "end": 298
              },
              "start": 292,
              "end": 298
            },
            "start": 197,
            "end": 299
          }
        ],
        "start": 142,
        "end": 301
      },
      "declare": false,
      "start": 97,
      "end": 301
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalCallSignatureWithRestParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 351
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 363,
                    "end": 369
                  },
                  "start": 361,
                  "end": 369
                },
                "start": 360,
                "end": 369
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rests",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 379
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 381,
                      "end": 387
                    },
                    "start": 381,
                    "end": 389
                  },
                  "start": 379,
                  "end": 389
                },
                "value": null,
                "start": 371,
                "end": 389
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 392,
                "end": 398
              },
              "start": 390,
              "end": 398
            },
            "start": 359,
            "end": 399
          }
        ],
        "start": 352,
        "end": 402
      },
      "declare": false,
      "start": 303,
      "end": 402
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalCallSignatureWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 447
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  },
                  "start": 456,
                  "end": 464
                },
                "start": 455,
                "end": 464
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 467,
                "end": 473
              },
              "start": 465,
              "end": 473
            },
            "start": 454,
            "end": 474
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
                    "type": "TSNumberKeyword",
                    "start": 483,
                    "end": 489
                  },
                  "start": 481,
                  "end": 489
                },
                "start": 480,
                "end": 489
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 492,
                "end": 498
              },
              "start": 490,
              "end": 498
            },
            "start": 479,
            "end": 499
          }
        ],
        "start": 448,
        "end": 501
      },
      "declare": false,
      "start": 404,
      "end": 501
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalCallSignatureWithTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 551
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
              "start": 552,
              "end": 553
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 552,
            "end": 553
          }
        ],
        "start": 551,
        "end": 554
      },
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
                      "start": 610,
                      "end": 611
                    },
                    "typeArguments": null,
                    "start": 610,
                    "end": 611
                  },
                  "start": 608,
                  "end": 611
                },
                "start": 607,
                "end": 611
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 614,
                "end": 620
              },
              "start": 612,
              "end": 620
            },
            "start": 606,
            "end": 621
          }
        ],
        "start": 555,
        "end": 623
      },
      "declare": false,
      "start": 503,
      "end": 623
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalCallSignatureWithOwnTypeParametes",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 675
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 683,
                    "end": 684
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IGlobalCallSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 713
                    },
                    "typeArguments": null,
                    "start": 693,
                    "end": 713
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 683,
                  "end": 713
                }
              ],
              "start": 682,
              "end": 714
            },
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
                      "start": 718,
                      "end": 719
                    },
                    "typeArguments": null,
                    "start": 718,
                    "end": 719
                  },
                  "start": 716,
                  "end": 719
                },
                "start": 715,
                "end": 719
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 722,
                "end": 728
              },
              "start": 720,
              "end": 728
            },
            "start": 682,
            "end": 729
          }
        ],
        "start": 676,
        "end": 731
      },
      "declare": false,
      "start": 625,
      "end": 731
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 731
}
```
