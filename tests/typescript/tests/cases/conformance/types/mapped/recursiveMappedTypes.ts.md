__ESTREE_TEST__:PASS:
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
