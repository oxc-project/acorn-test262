__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recurse",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 59
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 87
            },
            "typeArguments": null,
            "start": 80,
            "end": 87
          },
          "start": 74,
          "end": 87
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 97
            },
            "typeArguments": null,
            "start": 90,
            "end": 97
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "typeArguments": null,
            "start": 98,
            "end": 99
          },
          "start": 90,
          "end": 100
        },
        "optional": false,
        "readonly": null,
        "start": 62,
        "end": 102
      },
      "declare": false,
      "start": 47,
      "end": 102
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recurse1",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 117
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 128
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recurse2",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 146
            },
            "typeArguments": null,
            "start": 138,
            "end": 146
          },
          "start": 132,
          "end": 146
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recurse2",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 157
            },
            "typeArguments": null,
            "start": 149,
            "end": 157
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "typeArguments": null,
            "start": 158,
            "end": 159
          },
          "start": 149,
          "end": 160
        },
        "optional": false,
        "readonly": null,
        "start": 120,
        "end": 162
      },
      "declare": false,
      "start": 104,
      "end": 162
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recurse2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 177
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 188
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recurse1",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 206
            },
            "typeArguments": null,
            "start": 198,
            "end": 206
          },
          "start": 192,
          "end": 206
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Recurse1",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 217
            },
            "typeArguments": null,
            "start": 209,
            "end": 217
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 219
            },
            "typeArguments": null,
            "start": 218,
            "end": 219
          },
          "start": 209,
          "end": 220
        },
        "optional": false,
        "readonly": null,
        "start": 180,
        "end": 222
      },
      "declare": false,
      "start": 164,
      "end": 222
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Circular",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 266
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
                "start": 267,
                "end": 268
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 267,
              "end": 268
            }
          ],
          "start": 266,
          "end": 269
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "typeArguments": null,
              "start": 285,
              "end": 286
            },
            "start": 279,
            "end": 286
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circular",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 297
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
                    "start": 298,
                    "end": 299
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 299
                }
              ],
              "start": 297,
              "end": 300
            },
            "start": 289,
            "end": 300
          },
          "optional": false,
          "readonly": null,
          "start": 272,
          "end": 301
        },
        "declare": false,
        "start": 253,
        "end": 302
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 246,
      "end": 302
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tup",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 311
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 315,
            "end": 321
          },
          {
            "type": "TSNumberKeyword",
            "start": 323,
            "end": 329
          },
          {
            "type": "TSNumberKeyword",
            "start": 331,
            "end": 337
          },
          {
            "type": "TSNumberKeyword",
            "start": 339,
            "end": 345
          }
        ],
        "start": 314,
        "end": 346
      },
      "declare": false,
      "start": 303,
      "end": 347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 361
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Circular",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 375
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tup",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 379
                    },
                    "typeArguments": null,
                    "start": 376,
                    "end": 379
                  }
                ],
                "start": 375,
                "end": 380
              },
              "start": 367,
              "end": 380
            },
            "start": 365,
            "end": 380
          },
          "start": 362,
          "end": 380
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "tup",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 386
          },
          "typeArguments": null,
          "start": 383,
          "end": 386
        },
        "start": 381,
        "end": 386
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 401
            },
            "start": 391,
            "end": 402
          }
        ],
        "start": 387,
        "end": 404
      },
      "expression": false,
      "start": 349,
      "end": 404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 433,
        "end": 440
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
              "start": 441,
              "end": 442
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 451,
                "end": 458
              },
              "start": 451,
              "end": 460
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 441,
            "end": 460
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 463
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 462,
            "end": 463
          }
        ],
        "start": 440,
        "end": 464
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 473
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "typeArguments": null,
            "start": 483,
            "end": 484
          },
          "start": 477,
          "end": 484
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "typeArguments": null,
              "start": 487,
              "end": 488
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "typeArguments": null,
              "start": 489,
              "end": 490
            },
            "start": 487,
            "end": 491
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 500,
              "end": 507
            },
            "start": 500,
            "end": 509
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DeepMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 519
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 521
                    },
                    "typeArguments": null,
                    "start": 520,
                    "end": 521
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 522,
                      "end": 523
                    },
                    "typeArguments": null,
                    "start": 522,
                    "end": 523
                  },
                  "start": 520,
                  "end": 524
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "typeArguments": null,
                  "start": 526,
                  "end": 527
                }
              ],
              "start": 519,
              "end": 528
            },
            "start": 512,
            "end": 528
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "typeArguments": null,
            "start": 531,
            "end": 532
          },
          "start": 487,
          "end": 532
        },
        "optional": false,
        "readonly": null,
        "start": 467,
        "end": 535
      },
      "declare": false,
      "start": 428,
      "end": 536
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tpl",
        "optional": false,
        "typeAnnotation": null,
        "start": 543,
        "end": 546
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 550,
            "end": 556
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 559,
                "end": 565
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 568,
                    "end": 574
                  }
                ],
                "start": 567,
                "end": 575
              }
            ],
            "start": 558,
            "end": 576
          }
        ],
        "start": 549,
        "end": 577
      },
      "declare": false,
      "start": 538,
      "end": 578
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null,
        "start": 584,
        "end": 587
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 590,
            "end": 596
          },
          "start": 590,
          "end": 598
        },
        "start": 590,
        "end": 600
      },
      "declare": false,
      "start": 579,
      "end": 601
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 610
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DeepMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 620
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "tpl",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 624
              },
              "typeArguments": null,
              "start": 621,
              "end": 624
            },
            {
              "type": "TSNumberKeyword",
              "start": 626,
              "end": 632
            }
          ],
          "start": 620,
          "end": 633
        },
        "start": 613,
        "end": 633
      },
      "declare": false,
      "start": 603,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DeepMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 678,
          "end": 685
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 689
              },
              "typeArguments": null,
              "start": 686,
              "end": 689
            },
            {
              "type": "TSNumberKeyword",
              "start": 691,
              "end": 697
            }
          ],
          "start": 685,
          "end": 698
        },
        "start": 678,
        "end": 698
      },
      "declare": false,
      "start": 668,
      "end": 699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transform",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 754
          }
        ],
        "start": 752,
        "end": 755
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 762
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "typeArguments": null,
            "start": 772,
            "end": 773
          },
          "start": 766,
          "end": 773
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Transform",
            "optional": false,
            "typeAnnotation": null,
            "start": 776,
            "end": 785
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 787
                  },
                  "typeArguments": null,
                  "start": 786,
                  "end": 787
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 789
                  },
                  "typeArguments": null,
                  "start": 788,
                  "end": 789
                },
                "start": 786,
                "end": 790
              }
            ],
            "start": 785,
            "end": 791
          },
          "start": 776,
          "end": 791
        },
        "optional": false,
        "readonly": null,
        "start": 758,
        "end": 793
      },
      "declare": false,
      "start": 738,
      "end": 794
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 810
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
              "name": "avatar",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 823
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 825,
                "end": 831
              },
              "start": 823,
              "end": 831
            },
            "accessibility": null,
            "static": false,
            "start": 817,
            "end": 832
          }
        ],
        "start": 811,
        "end": 834
      },
      "declare": false,
      "start": 796,
      "end": 834
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Guest",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 851
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
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 869
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 871,
                "end": 877
              },
              "start": 869,
              "end": 877
            },
            "accessibility": null,
            "static": false,
            "start": 858,
            "end": 878
          }
        ],
        "start": 852,
        "end": 880
      },
      "declare": false,
      "start": 836,
      "end": 880
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Product",
        "optional": false,
        "typeAnnotation": null,
        "start": 892,
        "end": 899
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
              "name": "users",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 911
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "User",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 914,
                        "end": 918
                      },
                      "typeArguments": null,
                      "start": 914,
                      "end": 918
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Guest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 921,
                        "end": 926
                      },
                      "typeArguments": null,
                      "start": 921,
                      "end": 926
                    }
                  ],
                  "start": 914,
                  "end": 926
                },
                "start": 913,
                "end": 929
              },
              "start": 911,
              "end": 929
            },
            "accessibility": null,
            "static": false,
            "start": 906,
            "end": 930
          }
        ],
        "start": 900,
        "end": 932
      },
      "declare": false,
      "start": 882,
      "end": 932
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
            "name": "product",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Transform",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 955,
                  "end": 964
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Product",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 965,
                        "end": 972
                      },
                      "typeArguments": null,
                      "start": 965,
                      "end": 972
                    }
                  ],
                  "start": 964,
                  "end": 973
                },
                "start": 955,
                "end": 973
              },
              "start": 953,
              "end": 973
            },
            "start": 946,
            "end": 973
          },
          "init": null,
          "definite": false,
          "start": 946,
          "end": 973
        }
      ],
      "declare": true,
      "start": 934,
      "end": 974
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "product",
          "optional": false,
          "typeAnnotation": null,
          "start": 975,
          "end": 982
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "users",
          "optional": false,
          "typeAnnotation": null,
          "start": 983,
          "end": 988
        },
        "optional": false,
        "computed": false,
        "start": 975,
        "end": 988
      },
      "directive": null,
      "start": 975,
      "end": 989
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Remap1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1067
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
              "start": 1068,
              "end": 1069
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1068,
            "end": 1069
          }
        ],
        "start": 1067,
        "end": 1070
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1077
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1087,
              "end": 1088
            },
            "typeArguments": null,
            "start": 1087,
            "end": 1088
          },
          "start": 1081,
          "end": 1088
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Remap1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1091,
            "end": 1097
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1099
                  },
                  "typeArguments": null,
                  "start": 1098,
                  "end": 1099
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1100,
                    "end": 1101
                  },
                  "typeArguments": null,
                  "start": 1100,
                  "end": 1101
                },
                "start": 1098,
                "end": 1102
              }
            ],
            "start": 1097,
            "end": 1103
          },
          "start": 1091,
          "end": 1103
        },
        "optional": false,
        "readonly": null,
        "start": 1073,
        "end": 1106
      },
      "declare": false,
      "start": 1056,
      "end": 1107
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Remap2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1113,
        "end": 1119
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
              "start": 1120,
              "end": 1121
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1120,
            "end": 1121
          }
        ],
        "start": 1119,
        "end": 1122
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1125,
            "end": 1126
          },
          "typeArguments": null,
          "start": 1125,
          "end": 1126
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 1135,
          "end": 1141
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1147,
            "end": 1148
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1159
              },
              "typeArguments": null,
              "start": 1158,
              "end": 1159
            },
            "start": 1152,
            "end": 1159
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Remap2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1168
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "typeArguments": null,
                    "start": 1169,
                    "end": 1170
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1171,
                      "end": 1172
                    },
                    "typeArguments": null,
                    "start": 1171,
                    "end": 1172
                  },
                  "start": 1169,
                  "end": 1173
                }
              ],
              "start": 1168,
              "end": 1174
            },
            "start": 1162,
            "end": 1174
          },
          "optional": false,
          "readonly": null,
          "start": 1144,
          "end": 1177
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1180,
            "end": 1181
          },
          "typeArguments": null,
          "start": 1180,
          "end": 1181
        },
        "start": 1125,
        "end": 1181
      },
      "declare": false,
      "start": 1108,
      "end": 1182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Remap1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1201
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1202,
                "end": 1208
              },
              "start": 1202,
              "end": 1210
            }
          ],
          "start": 1201,
          "end": 1211
        },
        "start": 1195,
        "end": 1211
      },
      "declare": false,
      "start": 1186,
      "end": 1212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1231,
        "end": 1232
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Remap2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1235,
          "end": 1241
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1242,
                "end": 1248
              },
              "start": 1242,
              "end": 1250
            }
          ],
          "start": 1241,
          "end": 1251
        },
        "start": 1235,
        "end": 1251
      },
      "declare": false,
      "start": 1226,
      "end": 1252
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonOptionalKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1309
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
              "start": 1310,
              "end": 1311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1310,
            "end": 1311
          }
        ],
        "start": 1309,
        "end": 1312
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1319
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1329,
                "end": 1330
              },
              "typeArguments": null,
              "start": 1329,
              "end": 1330
            },
            "start": 1323,
            "end": 1330
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 1333,
              "end": 1342
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1351,
                  "end": 1352
                },
                "typeArguments": null,
                "start": 1351,
                "end": 1352
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1353,
                  "end": 1354
                },
                "typeArguments": null,
                "start": 1353,
                "end": 1354
              },
              "start": 1351,
              "end": 1355
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 1358,
              "end": 1363
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1366,
                "end": 1367
              },
              "typeArguments": null,
              "start": 1366,
              "end": 1367
            },
            "start": 1333,
            "end": 1367
          },
          "optional": false,
          "readonly": null,
          "start": 1315,
          "end": 1369
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1377
            },
            "typeArguments": null,
            "start": 1376,
            "end": 1377
          },
          "start": 1370,
          "end": 1377
        },
        "start": 1315,
        "end": 1378
      },
      "declare": false,
      "start": 1289,
      "end": 1379
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 1385,
        "end": 1390
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
              "start": 1391,
              "end": 1392
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1391,
            "end": 1392
          }
        ],
        "start": 1390,
        "end": 1393
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1399,
          "end": 1400
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NonOptionalKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1404,
            "end": 1419
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
                  "start": 1420,
                  "end": 1421
                },
                "typeArguments": null,
                "start": 1420,
                "end": 1421
              }
            ],
            "start": 1419,
            "end": 1422
          },
          "start": 1404,
          "end": 1422
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1425,
              "end": 1426
            },
            "typeArguments": null,
            "start": 1425,
            "end": 1426
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1428
            },
            "typeArguments": null,
            "start": 1427,
            "end": 1428
          },
          "start": 1425,
          "end": 1429
        },
        "optional": false,
        "readonly": null,
        "start": 1396,
        "end": 1431
      },
      "declare": false,
      "start": 1380,
      "end": 1431
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ListWidget",
          "optional": false,
          "typeAnnotation": null,
          "start": 1450,
          "end": 1460
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
                "type": "Literal",
                "value": "type",
                "raw": "\"type\"",
                "start": 1467,
                "end": 1473
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "list",
                    "raw": "\"list\"",
                    "start": 1475,
                    "end": 1481
                  },
                  "start": 1475,
                  "end": 1481
                },
                "start": 1473,
                "end": 1481
              },
              "accessibility": null,
              "static": false,
              "start": 1467,
              "end": 1482
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "minimum_count",
                "raw": "\"minimum_count\"",
                "start": 1487,
                "end": 1502
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1504,
                  "end": 1510
                },
                "start": 1502,
                "end": 1510
              },
              "accessibility": null,
              "static": false,
              "start": 1487,
              "end": 1511
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "maximum_count",
                "raw": "\"maximum_count\"",
                "start": 1516,
                "end": 1531
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1533,
                  "end": 1539
                },
                "start": 1531,
                "end": 1539
              },
              "accessibility": null,
              "static": false,
              "start": 1516,
              "end": 1540
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "collapsable",
                "raw": "\"collapsable\"",
                "start": 1545,
                "end": 1558
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1561,
                  "end": 1568
                },
                "start": 1559,
                "end": 1568
              },
              "accessibility": null,
              "static": false,
              "start": 1545,
              "end": 1569
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "each",
                "raw": "\"each\"",
                "start": 1613,
                "end": 1619
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Child",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1621,
                    "end": 1626
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ListWidget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1627,
                          "end": 1637
                        },
                        "typeArguments": null,
                        "start": 1627,
                        "end": 1637
                      }
                    ],
                    "start": 1626,
                    "end": 1638
                  },
                  "start": 1621,
                  "end": 1638
                },
                "start": 1619,
                "end": 1638
              },
              "accessibility": null,
              "static": false,
              "start": 1613,
              "end": 1639
            }
          ],
          "start": 1461,
          "end": 1641
        },
        "declare": false,
        "start": 1440,
        "end": 1641
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1433,
      "end": 1641
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListChild",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1657
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Child",
          "optional": false,
          "typeAnnotation": null,
          "start": 1660,
          "end": 1665
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListWidget",
                "optional": false,
                "typeAnnotation": null,
                "start": 1666,
                "end": 1676
              },
              "typeArguments": null,
              "start": 1666,
              "end": 1676
            }
          ],
          "start": 1665,
          "end": 1677
        },
        "start": 1660,
        "end": 1677
      },
      "declare": false,
      "start": 1643,
      "end": 1677
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "ListChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1694,
                  "end": 1703
                },
                "typeArguments": null,
                "start": 1694,
                "end": 1703
              },
              "start": 1692,
              "end": 1703
            },
            "start": 1691,
            "end": 1703
          },
          "init": null,
          "definite": false,
          "start": 1691,
          "end": 1703
        }
      ],
      "declare": true,
      "start": 1679,
      "end": 1704
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1705,
          "end": 1706
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null,
          "start": 1707,
          "end": 1711
        },
        "optional": false,
        "computed": false,
        "start": 1705,
        "end": 1711
      },
      "directive": null,
      "start": 1705,
      "end": 1712
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TV",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1751
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
                "start": 1752,
                "end": 1753
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1752,
              "end": 1753
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1755,
                "end": 1756
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1771,
                    "end": 1772
                  },
                  "typeArguments": null,
                  "start": 1771,
                  "end": 1772
                },
                "start": 1765,
                "end": 1772
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1755,
              "end": 1772
            }
          ],
          "start": 1751,
          "end": 1773
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1776,
                "end": 1777
              },
              "typeArguments": null,
              "start": 1776,
              "end": 1777
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
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
            "end": 1780
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 1789,
              "end": 1795
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1802,
                      "end": 1803
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1802,
                    "end": 1803
                  },
                  "start": 1796,
                  "end": 1803
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 1805,
                  "end": 1808
                }
              ],
              "start": 1795,
              "end": 1809
            },
            "start": 1789,
            "end": 1809
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1812,
              "end": 1813
            },
            "typeArguments": null,
            "start": 1812,
            "end": 1813
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1816,
            "end": 1821
          },
          "start": 1776,
          "end": 1821
        },
        "declare": false,
        "start": 1744,
        "end": 1822
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1737,
      "end": 1822
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectOrArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1836,
          "end": 1849
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
                "start": 1850,
                "end": 1851
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1850,
              "end": 1851
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1853,
                "end": 1854
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1869,
                  "end": 1872
                },
                "start": 1863,
                "end": 1872
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1881,
                  "end": 1884
                },
                "start": 1875,
                "end": 1884
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1853,
              "end": 1884
            }
          ],
          "start": 1849,
          "end": 1885
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1888,
                  "end": 1889
                },
                "typeArguments": null,
                "start": 1888,
                "end": 1889
              },
              "start": 1888,
              "end": 1891
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1894,
                "end": 1900
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1901,
                      "end": 1902
                    },
                    "typeArguments": null,
                    "start": 1901,
                    "end": 1902
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1904,
                          "end": 1905
                        },
                        "typeArguments": null,
                        "start": 1904,
                        "end": 1905
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1914
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1915,
                                "end": 1916
                              },
                              "typeArguments": null,
                              "start": 1915,
                              "end": 1916
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1918,
                                "end": 1919
                              },
                              "typeArguments": null,
                              "start": 1918,
                              "end": 1919
                            }
                          ],
                          "start": 1914,
                          "end": 1920
                        },
                        "start": 1908,
                        "end": 1920
                      },
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1923,
                            "end": 1924
                          },
                          "typeArguments": null,
                          "start": 1923,
                          "end": 1924
                        },
                        "start": 1923,
                        "end": 1926
                      }
                    ],
                    "start": 1904,
                    "end": 1926
                  }
                ],
                "start": 1900,
                "end": 1927
              },
              "start": 1894,
              "end": 1927
            }
          ],
          "start": 1888,
          "end": 1927
        },
        "declare": false,
        "start": 1831,
        "end": 1928
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1824,
      "end": 1928
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThemeValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 1941,
          "end": 1951
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1952,
                "end": 1953
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThemeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1968,
                    "end": 1977
                  },
                  "typeArguments": null,
                  "start": 1968,
                  "end": 1977
                },
                "start": 1962,
                "end": 1977
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1952,
              "end": 1977
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThemeType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1979,
                "end": 1988
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1979,
              "end": 1988
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 1990,
                "end": 1994
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 1997,
                "end": 2000
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1990,
              "end": 2000
            }
          ],
          "start": 1951,
          "end": 2001
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThemeType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2008,
                "end": 2017
              },
              "typeArguments": null,
              "start": 2008,
              "end": 2017
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2018,
                "end": 2019
              },
              "typeArguments": null,
              "start": 2018,
              "end": 2019
            },
            "start": 2008,
            "end": 2020
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 2029,
                "end": 2033
              },
              "typeArguments": null,
              "start": 2029,
              "end": 2033
            },
            "start": 2029,
            "end": 2035
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 2038,
            "end": 2044
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThemeType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2051,
                  "end": 2060
                },
                "typeArguments": null,
                "start": 2051,
                "end": 2060
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2061,
                  "end": 2062
                },
                "typeArguments": null,
                "start": 2061,
                "end": 2062
              },
              "start": 2051,
              "end": 2063
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2072,
                "end": 2078
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2085,
                        "end": 2086
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2085,
                      "end": 2086
                    },
                    "start": 2079,
                    "end": 2086
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TVal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2088,
                      "end": 2092
                    },
                    "typeArguments": null,
                    "start": 2088,
                    "end": 2092
                  }
                ],
                "start": 2078,
                "end": 2093
              },
              "start": 2072,
              "end": 2093
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2096,
                "end": 2097
              },
              "typeArguments": null,
              "start": 2096,
              "end": 2097
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThemeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2113
                  },
                  "typeArguments": null,
                  "start": 2104,
                  "end": 2113
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2114,
                    "end": 2115
                  },
                  "typeArguments": null,
                  "start": 2114,
                  "end": 2115
                },
                "start": 2104,
                "end": 2116
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjectOrArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2125,
                  "end": 2138
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2145,
                          "end": 2146
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2145,
                        "end": 2146
                      },
                      "start": 2139,
                      "end": 2146
                    }
                  ],
                  "start": 2138,
                  "end": 2147
                },
                "start": 2125,
                "end": 2147
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2150,
                  "end": 2151
                },
                "typeArguments": null,
                "start": 2150,
                "end": 2151
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 2154,
                "end": 2159
              },
              "start": 2104,
              "end": 2159
            },
            "start": 2051,
            "end": 2159
          },
          "start": 2008,
          "end": 2159
        },
        "declare": false,
        "start": 1936,
        "end": 2160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1929,
      "end": 2160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2174,
          "end": 2177
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
                "start": 2178,
                "end": 2179
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2178,
              "end": 2179
            }
          ],
          "start": 2177,
          "end": 2180
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2183,
              "end": 2184
            },
            "typeArguments": null,
            "start": 2183,
            "end": 2184
          },
          "extendsType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2197
            },
            "constraint": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2207,
                  "end": 2208
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2207,
                "end": 2208
              },
              "start": 2201,
              "end": 2208
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2211,
              "end": 2214
            },
            "optional": false,
            "readonly": null,
            "start": 2193,
            "end": 2216
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 2219,
              "end": 2220
            },
            "typeArguments": null,
            "start": 2219,
            "end": 2220
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2223,
            "end": 2228
          },
          "start": 2183,
          "end": 2228
        },
        "declare": false,
        "start": 2169,
        "end": 2229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2162,
      "end": 2229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 47,
  "end": 2229
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 47,
    "end": 51,
    "range": [
      47,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 74,
    "end": 79,
    "range": [
      74,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse",
    "start": 80,
    "end": 87,
    "range": [
      80,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse",
    "start": 90,
    "end": 97,
    "range": [
      90,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse1",
    "start": 109,
    "end": 117,
    "range": [
      109,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 129,
    "end": 131,
    "range": [
      129,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 132,
    "end": 137,
    "range": [
      132,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse2",
    "start": 138,
    "end": 146,
    "range": [
      138,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse2",
    "start": 149,
    "end": 157,
    "range": [
      149,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 164,
    "end": 168,
    "range": [
      164,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse2",
    "start": 169,
    "end": 177,
    "range": [
      169,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 189,
    "end": 191,
    "range": [
      189,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 192,
    "end": 197,
    "range": [
      192,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse1",
    "start": 198,
    "end": 206,
    "range": [
      198,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "Recurse1",
    "start": 209,
    "end": 217,
    "range": [
      209,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "Circular",
    "start": 258,
    "end": 266,
    "range": [
      258,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 276,
    "end": 278,
    "range": [
      276,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "Circular",
    "start": 289,
    "end": 297,
    "range": [
      289,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 303,
    "end": 307,
    "range": [
      303,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "tup",
    "start": 308,
    "end": 311,
    "range": [
      308,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 323,
    "end": 329,
    "range": [
      323,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 331,
    "end": 337,
    "range": [
      331,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 339,
    "end": 345,
    "range": [
      339,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 349,
    "end": 357,
    "range": [
      349,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 358,
    "end": 361,
    "range": [
      358,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 362,
    "end": 365,
    "range": [
      362,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "Circular",
    "start": 367,
    "end": 375,
    "range": [
      367,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "tup",
    "start": 376,
    "end": 379,
    "range": [
      376,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "tup",
    "start": 383,
    "end": 386,
    "range": [
      383,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 391,
    "end": 397,
    "range": [
      391,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 398,
    "end": 401,
    "range": [
      398,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepMap",
    "start": 433,
    "end": 440,
    "range": [
      433,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 443,
    "end": 450,
    "range": [
      443,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 451,
    "end": 458,
    "range": [
      451,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 477,
    "end": 482,
    "range": [
      477,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 492,
    "end": 499,
    "range": [
      492,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 500,
    "end": 507,
    "range": [
      500,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepMap",
    "start": 512,
    "end": 519,
    "range": [
      512,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 538,
    "end": 542,
    "range": [
      538,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "tpl",
    "start": 543,
    "end": 546,
    "range": [
      543,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 550,
    "end": 556,
    "range": [
      550,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 559,
    "end": 565,
    "range": [
      559,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 579,
    "end": 583,
    "range": [
      579,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 584,
    "end": 587,
    "range": [
      584,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 590,
    "end": 596,
    "range": [
      590,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 603,
    "end": 607,
    "range": [
      603,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepMap",
    "start": 613,
    "end": 620,
    "range": [
      613,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "tpl",
    "start": 621,
    "end": 624,
    "range": [
      621,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 626,
    "end": 632,
    "range": [
      626,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 668,
    "end": 672,
    "range": [
      668,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 673,
    "end": 675,
    "range": [
      673,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepMap",
    "start": 678,
    "end": 685,
    "range": [
      678,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 686,
    "end": 689,
    "range": [
      686,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 691,
    "end": 697,
    "range": [
      691,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742,
    "range": [
      738,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "Transform",
    "start": 743,
    "end": 752,
    "range": [
      743,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 766,
    "end": 771,
    "range": [
      766,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "Transform",
    "start": 776,
    "end": 785,
    "range": [
      776,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 796,
    "end": 805,
    "range": [
      796,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 806,
    "end": 810,
    "range": [
      806,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "avatar",
    "start": 817,
    "end": 823,
    "range": [
      817,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 836,
    "end": 845,
    "range": [
      836,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "Guest",
    "start": 846,
    "end": 851,
    "range": [
      846,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "displayName",
    "start": 858,
    "end": 869,
    "range": [
      858,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 871,
    "end": 877,
    "range": [
      871,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 882,
    "end": 891,
    "range": [
      882,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "Product",
    "start": 892,
    "end": 899,
    "range": [
      892,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "users",
    "start": 906,
    "end": 911,
    "range": [
      906,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 914,
    "end": 918,
    "range": [
      914,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "Guest",
    "start": 921,
    "end": 926,
    "range": [
      921,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 934,
    "end": 941,
    "range": [
      934,
      941
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 942,
    "end": 945,
    "range": [
      942,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "product",
    "start": 946,
    "end": 953,
    "range": [
      946,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "Transform",
    "start": 955,
    "end": 964,
    "range": [
      955,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "Product",
    "start": 965,
    "end": 972,
    "range": [
      965,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "product",
    "start": 975,
    "end": 982,
    "range": [
      975,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "users",
    "start": 983,
    "end": 988,
    "range": [
      983,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1056,
    "end": 1060,
    "range": [
      1056,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "Remap1",
    "start": 1061,
    "end": 1067,
    "range": [
      1061,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1078,
    "end": 1080,
    "range": [
      1078,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1081,
    "end": 1086,
    "range": [
      1081,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "Remap1",
    "start": 1091,
    "end": 1097,
    "range": [
      1091,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1108,
    "end": 1112,
    "range": [
      1108,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "Remap2",
    "start": 1113,
    "end": 1119,
    "range": [
      1113,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1127,
    "end": 1134,
    "range": [
      1127,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1135,
    "end": 1141,
    "range": [
      1135,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1149,
    "end": 1151,
    "range": [
      1149,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1152,
    "end": 1157,
    "range": [
      1152,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "Remap2",
    "start": 1162,
    "end": 1168,
    "range": [
      1162,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1186,
    "end": 1190,
    "range": [
      1186,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "Remap1",
    "start": 1195,
    "end": 1201,
    "range": [
      1195,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1202,
    "end": 1208,
    "range": [
      1202,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1226,
    "end": 1230,
    "range": [
      1226,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "Remap2",
    "start": 1235,
    "end": 1241,
    "range": [
      1235,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1242,
    "end": 1248,
    "range": [
      1242,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1289,
    "end": 1293,
    "range": [
      1289,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "NonOptionalKeys",
    "start": 1294,
    "end": 1309,
    "range": [
      1294,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1320,
    "end": 1322,
    "range": [
      1320,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1323,
    "end": 1328,
    "range": [
      1323,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1333,
    "end": 1342,
    "range": [
      1333,
      1342
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1343,
    "end": 1350,
    "range": [
      1343,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1358,
    "end": 1363,
    "range": [
      1358,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1370,
    "end": 1375,
    "range": [
      1370,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1380,
    "end": 1384,
    "range": [
      1380,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 1385,
    "end": 1390,
    "range": [
      1385,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "NonOptionalKeys",
    "start": 1404,
    "end": 1419,
    "range": [
      1404,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1433,
    "end": 1439,
    "range": [
      1433,
      1439
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1440,
    "end": 1449,
    "range": [
      1440,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "ListWidget",
    "start": 1450,
    "end": 1460,
    "range": [
      1450,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 1467,
    "end": 1473,
    "range": [
      1467,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "String",
    "value": "\"list\"",
    "start": 1475,
    "end": 1481,
    "range": [
      1475,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "String",
    "value": "\"minimum_count\"",
    "start": 1487,
    "end": 1502,
    "range": [
      1487,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1504,
    "end": 1510,
    "range": [
      1504,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "String",
    "value": "\"maximum_count\"",
    "start": 1516,
    "end": 1531,
    "range": [
      1516,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1533,
    "end": 1539,
    "range": [
      1533,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "String",
    "value": "\"collapsable\"",
    "start": 1545,
    "end": 1558,
    "range": [
      1545,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1561,
    "end": 1568,
    "range": [
      1561,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "String",
    "value": "\"each\"",
    "start": 1613,
    "end": 1619,
    "range": [
      1613,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 1621,
    "end": 1626,
    "range": [
      1621,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "ListWidget",
    "start": 1627,
    "end": 1637,
    "range": [
      1627,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1643,
    "end": 1647,
    "range": [
      1643,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "ListChild",
    "start": 1648,
    "end": 1657,
    "range": [
      1648,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 1660,
    "end": 1665,
    "range": [
      1660,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "ListWidget",
    "start": 1666,
    "end": 1676,
    "range": [
      1666,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1679,
    "end": 1686,
    "range": [
      1679,
      1686
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1687,
    "end": 1690,
    "range": [
      1687,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "ListChild",
    "start": 1694,
    "end": 1703,
    "range": [
      1694,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1707,
    "end": 1711,
    "range": [
      1707,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1737,
    "end": 1743,
    "range": [
      1737,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1744,
    "end": 1748,
    "range": [
      1744,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "TV",
    "start": 1749,
    "end": 1751,
    "range": [
      1749,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1757,
    "end": 1764,
    "range": [
      1757,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1765,
    "end": 1770,
    "range": [
      1765,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1781,
    "end": 1788,
    "range": [
      1781,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1789,
    "end": 1795,
    "range": [
      1789,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1796,
    "end": 1801,
    "range": [
      1796,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1805,
    "end": 1808,
    "range": [
      1805,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1816,
    "end": 1821,
    "range": [
      1816,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1824,
    "end": 1830,
    "range": [
      1824,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1831,
    "end": 1835,
    "range": [
      1831,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectOrArray",
    "start": 1836,
    "end": 1849,
    "range": [
      1836,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1855,
    "end": 1862,
    "range": [
      1855,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1863,
    "end": 1868,
    "range": [
      1863,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1875,
    "end": 1880,
    "range": [
      1875,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1881,
    "end": 1884,
    "range": [
      1881,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1894,
    "end": 1900,
    "range": [
      1894,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1908,
    "end": 1914,
    "range": [
      1908,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1929,
    "end": 1935,
    "range": [
      1929,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1936,
    "end": 1940,
    "range": [
      1936,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "ThemeValue",
    "start": 1941,
    "end": 1951,
    "range": [
      1941,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1954,
    "end": 1961,
    "range": [
      1954,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1962,
    "end": 1967,
    "range": [
      1962,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "ThemeType",
    "start": 1968,
    "end": 1977,
    "range": [
      1968,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "ThemeType",
    "start": 1979,
    "end": 1988,
    "range": [
      1979,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Identifier",
    "value": "TVal",
    "start": 1990,
    "end": 1994,
    "range": [
      1990,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1997,
    "end": 2000,
    "range": [
      1997,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Identifier",
    "value": "ThemeType",
    "start": 2008,
    "end": 2017,
    "range": [
      2008,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2021,
    "end": 2028,
    "range": [
      2021,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "TVal",
    "start": 2029,
    "end": 2033,
    "range": [
      2029,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2038,
    "end": 2044,
    "range": [
      2038,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "ThemeType",
    "start": 2051,
    "end": 2060,
    "range": [
      2051,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2064,
    "end": 2071,
    "range": [
      2064,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2072,
    "end": 2078,
    "range": [
      2072,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2079,
    "end": 2084,
    "range": [
      2079,
      2084
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "TVal",
    "start": 2088,
    "end": 2092,
    "range": [
      2088,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Identifier",
    "value": "ThemeType",
    "start": 2104,
    "end": 2113,
    "range": [
      2104,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2117,
    "end": 2124,
    "range": [
      2117,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectOrArray",
    "start": 2125,
    "end": 2138,
    "range": [
      2125,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2139,
    "end": 2144,
    "range": [
      2139,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2154,
    "end": 2159,
    "range": [
      2154,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2162,
    "end": 2168,
    "range": [
      2162,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2169,
    "end": 2173,
    "range": [
      2169,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2174,
    "end": 2177,
    "range": [
      2174,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2185,
    "end": 2192,
    "range": [
      2185,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2198,
    "end": 2200,
    "range": [
      2198,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2201,
    "end": 2206,
    "range": [
      2201,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2211,
    "end": 2214,
    "range": [
      2211,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2223,
    "end": 2228,
    "range": [
      2223,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  }
]
```
