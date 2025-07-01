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
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassT",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 73
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
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 73,
        "end": 76
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 77,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassT",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 107
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
                "start": 108,
                "end": 109
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 108,
              "end": 109
            }
          ],
          "start": 107,
          "end": 110
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 111,
          "end": 114
        },
        "abstract": false,
        "declare": false,
        "start": 89,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 114
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 247
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
                "start": 248,
                "end": 249
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 270
                },
                "typeArguments": null,
                "start": 258,
                "end": 270
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 248,
              "end": 270
            }
          ],
          "start": 247,
          "end": 271
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 286
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
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
                        "start": 292,
                        "end": 293
                      },
                      "typeArguments": null,
                      "start": 292,
                      "end": 293
                    },
                    "start": 290,
                    "end": 293
                  },
                  "start": 287,
                  "end": 293
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
                    "start": 296,
                    "end": 297
                  },
                  "typeArguments": null,
                  "start": 296,
                  "end": 297
                },
                "start": 294,
                "end": 297
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 278,
              "end": 298
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 321
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 337
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
                          "start": 338,
                          "end": 339
                        },
                        "typeArguments": null,
                        "start": 338,
                        "end": 339
                      }
                    ],
                    "start": 337,
                    "end": 340
                  },
                  "start": 325,
                  "end": 340
                },
                "start": 323,
                "end": 340
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 312,
              "end": 341
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 364
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 381
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 394
                        },
                        "typeArguments": null,
                        "start": 382,
                        "end": 394
                      }
                    ],
                    "start": 381,
                    "end": 395
                  },
                  "start": 368,
                  "end": 395
                },
                "start": 366,
                "end": 395
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 355,
              "end": 396
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 419
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 436
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 437,
                          "end": 448
                        },
                        "typeArguments": null,
                        "start": 437,
                        "end": 448
                      }
                    ],
                    "start": 436,
                    "end": 449
                  },
                  "start": 423,
                  "end": 449
                },
                "start": 421,
                "end": 449
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 410,
              "end": 450
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 473
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 489
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 490,
                          "end": 502
                        },
                        "typeArguments": null,
                        "start": 490,
                        "end": 502
                      }
                    ],
                    "start": 489,
                    "end": 503
                  },
                  "start": 477,
                  "end": 503
                },
                "start": 475,
                "end": 503
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 464,
              "end": 504
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 526
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 542
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 543,
                          "end": 554
                        },
                        "typeArguments": null,
                        "start": 543,
                        "end": 554
                      }
                    ],
                    "start": 542,
                    "end": 555
                  },
                  "start": 530,
                  "end": 555
                },
                "start": 528,
                "end": 555
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 517,
              "end": 556
            }
          ],
          "start": 272,
          "end": 570
        },
        "declare": false,
        "start": 197,
        "end": 570
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 190,
      "end": 570
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 589,
          "end": 628
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
                "start": 629,
                "end": 630
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 650
                },
                "typeArguments": null,
                "start": 639,
                "end": 650
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 629,
              "end": 650
            }
          ],
          "start": 628,
          "end": 651
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 666
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
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
                        "start": 672,
                        "end": 673
                      },
                      "typeArguments": null,
                      "start": 672,
                      "end": 673
                    },
                    "start": 670,
                    "end": 673
                  },
                  "start": 667,
                  "end": 673
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
                    "start": 676,
                    "end": 677
                  },
                  "typeArguments": null,
                  "start": 676,
                  "end": 677
                },
                "start": 674,
                "end": 677
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 658,
              "end": 678
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 704
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 720
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
                          "start": 721,
                          "end": 722
                        },
                        "typeArguments": null,
                        "start": 721,
                        "end": 722
                      }
                    ],
                    "start": 720,
                    "end": 723
                  },
                  "start": 708,
                  "end": 723
                },
                "start": 706,
                "end": 723
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 695,
              "end": 724
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 750
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 767
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 768,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 768,
                        "end": 780
                      }
                    ],
                    "start": 767,
                    "end": 781
                  },
                  "start": 754,
                  "end": 781
                },
                "start": 752,
                "end": 781
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 741,
              "end": 782
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 805
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 822
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 834
                        },
                        "typeArguments": null,
                        "start": 823,
                        "end": 834
                      }
                    ],
                    "start": 822,
                    "end": 835
                  },
                  "start": 809,
                  "end": 835
                },
                "start": 807,
                "end": 835
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 796,
              "end": 836
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 859
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 875
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 876,
                          "end": 888
                        },
                        "typeArguments": null,
                        "start": 876,
                        "end": 888
                      }
                    ],
                    "start": 875,
                    "end": 889
                  },
                  "start": 863,
                  "end": 889
                },
                "start": 861,
                "end": 889
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 850,
              "end": 890
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 903,
                "end": 912
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 916,
                    "end": 928
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 940
                        },
                        "typeArguments": null,
                        "start": 929,
                        "end": 940
                      }
                    ],
                    "start": 928,
                    "end": 941
                  },
                  "start": 916,
                  "end": 941
                },
                "start": 914,
                "end": 941
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 903,
              "end": 942
            }
          ],
          "start": 652,
          "end": 956
        },
        "declare": false,
        "start": 579,
        "end": 956
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 572,
      "end": 956
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 968,
        "end": 1009
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
              "start": 1010,
              "end": 1011
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1020,
                "end": 1032
              },
              "typeArguments": null,
              "start": 1020,
              "end": 1032
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1010,
            "end": 1032
          }
        ],
        "start": 1009,
        "end": 1033
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1040,
              "end": 1048
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                      "start": 1054,
                      "end": 1055
                    },
                    "typeArguments": null,
                    "start": 1054,
                    "end": 1055
                  },
                  "start": 1052,
                  "end": 1055
                },
                "start": 1049,
                "end": 1055
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
                  "start": 1058,
                  "end": 1059
                },
                "typeArguments": null,
                "start": 1058,
                "end": 1059
              },
              "start": 1056,
              "end": 1059
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1040,
            "end": 1060
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1077,
              "end": 1086
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1102
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
                        "start": 1103,
                        "end": 1104
                      },
                      "typeArguments": null,
                      "start": 1103,
                      "end": 1104
                    }
                  ],
                  "start": 1102,
                  "end": 1105
                },
                "start": 1090,
                "end": 1105
              },
              "start": 1088,
              "end": 1105
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1077,
            "end": 1106
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1132
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
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1136,
                  "end": 1149
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1162
                      },
                      "typeArguments": null,
                      "start": 1150,
                      "end": 1162
                    }
                  ],
                  "start": 1149,
                  "end": 1163
                },
                "start": 1136,
                "end": 1163
              },
              "start": 1134,
              "end": 1163
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1123,
            "end": 1164
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1190
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
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1207
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1208,
                        "end": 1219
                      },
                      "typeArguments": null,
                      "start": 1208,
                      "end": 1219
                    }
                  ],
                  "start": 1207,
                  "end": 1220
                },
                "start": 1194,
                "end": 1220
              },
              "start": 1192,
              "end": 1220
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1181,
            "end": 1221
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1247
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1251,
                  "end": 1263
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1276
                      },
                      "typeArguments": null,
                      "start": 1264,
                      "end": 1276
                    }
                  ],
                  "start": 1263,
                  "end": 1277
                },
                "start": 1251,
                "end": 1277
              },
              "start": 1249,
              "end": 1277
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1238,
            "end": 1278
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1303
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1319
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1320,
                        "end": 1331
                      },
                      "typeArguments": null,
                      "start": 1320,
                      "end": 1331
                    }
                  ],
                  "start": 1319,
                  "end": 1332
                },
                "start": 1307,
                "end": 1332
              },
              "start": 1305,
              "end": 1332
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1294,
            "end": 1333
          }
        ],
        "start": 1034,
        "end": 1347
      },
      "declare": false,
      "start": 958,
      "end": 1347
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1399
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
              "start": 1400,
              "end": 1401
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1421
              },
              "typeArguments": null,
              "start": 1410,
              "end": 1421
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1400,
            "end": 1421
          }
        ],
        "start": 1399,
        "end": 1422
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1429,
              "end": 1437
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                      "start": 1443,
                      "end": 1444
                    },
                    "typeArguments": null,
                    "start": 1443,
                    "end": 1444
                  },
                  "start": 1441,
                  "end": 1444
                },
                "start": 1438,
                "end": 1444
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
                  "start": 1447,
                  "end": 1448
                },
                "typeArguments": null,
                "start": 1447,
                "end": 1448
              },
              "start": 1445,
              "end": 1448
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1429,
            "end": 1449
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1475
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1491
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
                        "start": 1492,
                        "end": 1493
                      },
                      "typeArguments": null,
                      "start": 1492,
                      "end": 1493
                    }
                  ],
                  "start": 1491,
                  "end": 1494
                },
                "start": 1479,
                "end": 1494
              },
              "start": 1477,
              "end": 1494
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1466,
            "end": 1495
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1538
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1539,
                        "end": 1551
                      },
                      "typeArguments": null,
                      "start": 1539,
                      "end": 1551
                    }
                  ],
                  "start": 1538,
                  "end": 1552
                },
                "start": 1525,
                "end": 1552
              },
              "start": 1523,
              "end": 1552
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1512,
            "end": 1553
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1570,
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1596
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1597,
                        "end": 1608
                      },
                      "typeArguments": null,
                      "start": 1597,
                      "end": 1608
                    }
                  ],
                  "start": 1596,
                  "end": 1609
                },
                "start": 1583,
                "end": 1609
              },
              "start": 1581,
              "end": 1609
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1570,
            "end": 1610
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1636
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1652
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1653,
                        "end": 1665
                      },
                      "typeArguments": null,
                      "start": 1653,
                      "end": 1665
                    }
                  ],
                  "start": 1652,
                  "end": 1666
                },
                "start": 1640,
                "end": 1666
              },
              "start": 1638,
              "end": 1666
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1627,
            "end": 1667
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1683,
              "end": 1692
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1708
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1709,
                        "end": 1720
                      },
                      "typeArguments": null,
                      "start": 1709,
                      "end": 1720
                    }
                  ],
                  "start": 1708,
                  "end": 1721
                },
                "start": 1696,
                "end": 1721
              },
              "start": 1694,
              "end": 1721
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1683,
            "end": 1722
          }
        ],
        "start": 1423,
        "end": 1736
      },
      "declare": false,
      "start": 1349,
      "end": 1736
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 1755,
          "end": 1808
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
                "start": 1809,
                "end": 1810
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1809,
              "end": 1810
            }
          ],
          "start": 1808,
          "end": 1811
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1826
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
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
                        "start": 1832,
                        "end": 1833
                      },
                      "typeArguments": null,
                      "start": 1832,
                      "end": 1833
                    },
                    "start": 1830,
                    "end": 1833
                  },
                  "start": 1827,
                  "end": 1833
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
                    "start": 1836,
                    "end": 1837
                  },
                  "typeArguments": null,
                  "start": 1836,
                  "end": 1837
                },
                "start": 1834,
                "end": 1837
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1818,
              "end": 1838
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1864
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1880
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
                          "start": 1881,
                          "end": 1882
                        },
                        "typeArguments": null,
                        "start": 1881,
                        "end": 1882
                      }
                    ],
                    "start": 1880,
                    "end": 1883
                  },
                  "start": 1868,
                  "end": 1883
                },
                "start": 1866,
                "end": 1883
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1855,
              "end": 1884
            }
          ],
          "start": 1812,
          "end": 1898
        },
        "declare": false,
        "start": 1745,
        "end": 1898
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1738,
      "end": 1898
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1964
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
              "start": 1965,
              "end": 1966
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1965,
            "end": 1966
          }
        ],
        "start": 1964,
        "end": 1967
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1974,
              "end": 1982
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                      "start": 1988,
                      "end": 1989
                    },
                    "typeArguments": null,
                    "start": 1988,
                    "end": 1989
                  },
                  "start": 1986,
                  "end": 1989
                },
                "start": 1983,
                "end": 1989
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
                  "start": 1992,
                  "end": 1993
                },
                "typeArguments": null,
                "start": 1992,
                "end": 1993
              },
              "start": 1990,
              "end": 1993
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1974,
            "end": 1994
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2011,
              "end": 2020
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2024,
                  "end": 2036
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
                        "start": 2037,
                        "end": 2038
                      },
                      "typeArguments": null,
                      "start": 2037,
                      "end": 2038
                    }
                  ],
                  "start": 2036,
                  "end": 2039
                },
                "start": 2024,
                "end": 2039
              },
              "start": 2022,
              "end": 2039
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2011,
            "end": 2040
          }
        ],
        "start": 1968,
        "end": 2054
      },
      "declare": false,
      "start": 1900,
      "end": 2054
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2054
}
```
