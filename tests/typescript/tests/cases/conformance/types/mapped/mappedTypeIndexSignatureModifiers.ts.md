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
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  "start": 91,
                  "end": 99
                },
                "start": 88,
                "end": 99
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 78,
            "end": 109
          }
        ],
        "start": 72,
        "end": 111
      },
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 128
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 133
              },
              "typeArguments": null,
              "start": 129,
              "end": 133
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 145
                },
                "typeArguments": null,
                "start": 141,
                "end": 145
              },
              "start": 135,
              "end": 145
            }
          ],
          "start": 128,
          "end": 146
        },
        "start": 124,
        "end": 146
      },
      "declare": false,
      "start": 112,
      "end": 146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
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
              "name": "concreteProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 183,
                  "end": 190
                },
                "start": 183,
                "end": 190
              },
              "start": 181,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 191
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  },
                  "start": 209,
                  "end": 217
                },
                "start": 206,
                "end": 217
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 220,
                "end": 226
              },
              "start": 218,
              "end": 226
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 196,
            "end": 227
          }
        ],
        "start": 163,
        "end": 229
      },
      "declare": false,
      "start": 148,
      "end": 229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 239
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 246
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 251
              },
              "typeArguments": null,
              "start": 247,
              "end": 251
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 263
                },
                "typeArguments": null,
                "start": 259,
                "end": 263
              },
              "start": 253,
              "end": 263
            }
          ],
          "start": 246,
          "end": 264
        },
        "start": 242,
        "end": 264
      },
      "declare": false,
      "start": 230,
      "end": 264
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 280
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 302,
                    "end": 308
                  },
                  "start": 300,
                  "end": 308
                },
                "start": 297,
                "end": 308
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 287,
            "end": 318
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 338,
                    "end": 344
                  },
                  "start": 336,
                  "end": 344
                },
                "start": 333,
                "end": 344
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 347,
                  "end": 352
                },
                "start": 347,
                "end": 352
              },
              "start": 345,
              "end": 352
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 323,
            "end": 353
          }
        ],
        "start": 281,
        "end": 355
      },
      "declare": false,
      "start": 266,
      "end": 355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 368,
          "end": 372
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj3",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 377
              },
              "typeArguments": null,
              "start": 373,
              "end": 377
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 389
                },
                "typeArguments": null,
                "start": 385,
                "end": 389
              },
              "start": 379,
              "end": 389
            }
          ],
          "start": 372,
          "end": 390
        },
        "start": 368,
        "end": 390
      },
      "declare": false,
      "start": 356,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj4",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 406
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 419,
                    "end": 425
                  },
                  "start": 417,
                  "end": 425
                },
                "start": 414,
                "end": 425
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 428,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 413,
            "end": 435
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 455,
                    "end": 461
                  },
                  "start": 453,
                  "end": 461
                },
                "start": 450,
                "end": 461
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 464,
                  "end": 469
                },
                "start": 464,
                "end": 469
              },
              "start": 462,
              "end": 469
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 440,
            "end": 470
          }
        ],
        "start": 407,
        "end": 472
      },
      "declare": false,
      "start": 392,
      "end": 472
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res4",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 482
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 485,
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
                "name": "Obj4",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 494
              },
              "typeArguments": null,
              "start": 490,
              "end": 494
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 506
                },
                "typeArguments": null,
                "start": 502,
                "end": 506
              },
              "start": 496,
              "end": 506
            }
          ],
          "start": 489,
          "end": 507
        },
        "start": 485,
        "end": 507
      },
      "declare": false,
      "start": 473,
      "end": 507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj5",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
        "end": 523
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 545,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                },
                "start": 540,
                "end": 551
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 554,
                "end": 560
              },
              "start": 552,
              "end": 560
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 530,
            "end": 561
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 572,
                    "end": 578
                  },
                  "start": 570,
                  "end": 578
                },
                "start": 567,
                "end": 578
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 581,
                  "end": 586
                },
                "start": 581,
                "end": 586
              },
              "start": 579,
              "end": 586
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 566,
            "end": 587
          }
        ],
        "start": 524,
        "end": 589
      },
      "declare": false,
      "start": 509,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res5",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 599
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 606
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 611
              },
              "typeArguments": null,
              "start": 607,
              "end": 611
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 623
                },
                "typeArguments": null,
                "start": 619,
                "end": 623
              },
              "start": 613,
              "end": 623
            }
          ],
          "start": 606,
          "end": 624
        },
        "start": 602,
        "end": 624
      },
      "declare": false,
      "start": 590,
      "end": 624
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 639
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
              "start": 640,
              "end": 641
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 640,
            "end": 641
          }
        ],
        "start": 639,
        "end": 642
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 649
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
              "start": 659,
              "end": 660
            },
            "typeArguments": null,
            "start": 659,
            "end": 660
          },
          "start": 653,
          "end": 660
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
              "start": 663,
              "end": 664
            },
            "typeArguments": null,
            "start": 663,
            "end": 664
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "typeArguments": null,
            "start": 665,
            "end": 666
          },
          "start": 663,
          "end": 667
        },
        "optional": false,
        "readonly": null,
        "start": 645,
        "end": 670
      },
      "declare": false,
      "start": 626,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj6",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 686
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 708,
                        "end": 714
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 720,
                        "end": 722
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 714,
                        "end": 720
                      }
                    ],
                    "start": 708,
                    "end": 722
                  },
                  "start": 706,
                  "end": 722
                },
                "start": 703,
                "end": 722
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 725,
                  "end": 730
                },
                "start": 725,
                "end": 730
              },
              "start": 723,
              "end": 730
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 693,
            "end": 731
          }
        ],
        "start": 687,
        "end": 733
      },
      "declare": false,
      "start": 672,
      "end": 733
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res6",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 743
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 754
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 759
              },
              "typeArguments": null,
              "start": 755,
              "end": 759
            }
          ],
          "start": 754,
          "end": 760
        },
        "start": 746,
        "end": 760
      },
      "declare": false,
      "start": 734,
      "end": 760
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj7",
        "optional": false,
        "typeAnnotation": null,
        "start": 772,
        "end": 776
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 789,
                    "end": 795
                  },
                  "start": 787,
                  "end": 795
                },
                "start": 784,
                "end": 795
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 798,
                "end": 804
              },
              "start": 796,
              "end": 804
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 783,
            "end": 805
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 825,
                        "end": 831
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 837,
                        "end": 839
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 831,
                        "end": 837
                      }
                    ],
                    "start": 825,
                    "end": 839
                  },
                  "start": 823,
                  "end": 839
                },
                "start": 820,
                "end": 839
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 842,
                  "end": 847
                },
                "start": 842,
                "end": 847
              },
              "start": 840,
              "end": 847
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 810,
            "end": 848
          }
        ],
        "start": 777,
        "end": 850
      },
      "declare": false,
      "start": 762,
      "end": 850
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res7",
        "optional": false,
        "typeAnnotation": null,
        "start": 856,
        "end": 860
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 871
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 876
              },
              "typeArguments": null,
              "start": 872,
              "end": 876
            }
          ],
          "start": 871,
          "end": 877
        },
        "start": 863,
        "end": 877
      },
      "declare": false,
      "start": 851,
      "end": 877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj8",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 893
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 915,
                    "end": 921
                  },
                  "start": 913,
                  "end": 921
                },
                "start": 910,
                "end": 921
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 924,
                "end": 930
              },
              "start": 922,
              "end": 930
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 900,
            "end": 931
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 942,
                        "end": 948
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 954,
                        "end": 956
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      }
                    ],
                    "start": 942,
                    "end": 956
                  },
                  "start": 940,
                  "end": 956
                },
                "start": 937,
                "end": 956
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 959,
                  "end": 964
                },
                "start": 959,
                "end": 964
              },
              "start": 957,
              "end": 964
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 936,
            "end": 965
          }
        ],
        "start": 894,
        "end": 967
      },
      "declare": false,
      "start": 879,
      "end": 967
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res8",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 977
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 980,
          "end": 988
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj8",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 993
              },
              "typeArguments": null,
              "start": 989,
              "end": 993
            }
          ],
          "start": 988,
          "end": 994
        },
        "start": 980,
        "end": 994
      },
      "declare": false,
      "start": 968,
      "end": 994
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrippingPick",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1014
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
              "start": 1015,
              "end": 1016
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1015,
            "end": 1016
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
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
                  "start": 1034,
                  "end": 1035
                },
                "typeArguments": null,
                "start": 1034,
                "end": 1035
              },
              "start": 1028,
              "end": 1035
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1018,
            "end": 1035
          }
        ],
        "start": 1014,
        "end": 1036
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1052,
          "end": 1053
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1058
          },
          "typeArguments": null,
          "start": 1057,
          "end": 1058
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
              "start": 1061,
              "end": 1062
            },
            "typeArguments": null,
            "start": 1061,
            "end": 1062
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1064
            },
            "typeArguments": null,
            "start": 1063,
            "end": 1064
          },
          "start": 1061,
          "end": 1065
        },
        "optional": false,
        "readonly": "-",
        "start": 1039,
        "end": 1068
      },
      "declare": false,
      "start": 996,
      "end": 1068
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1084
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1106,
                    "end": 1112
                  },
                  "start": 1104,
                  "end": 1112
                },
                "start": 1101,
                "end": 1112
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1115,
                "end": 1121
              },
              "start": 1113,
              "end": 1121
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1091,
            "end": 1122
          }
        ],
        "start": 1085,
        "end": 1124
      },
      "declare": false,
      "start": 1070,
      "end": 1124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1137,
          "end": 1150
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1155
              },
              "typeArguments": null,
              "start": 1151,
              "end": 1155
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1167
                },
                "typeArguments": null,
                "start": 1163,
                "end": 1167
              },
              "start": 1157,
              "end": 1167
            }
          ],
          "start": 1150,
          "end": 1168
        },
        "start": 1137,
        "end": 1168
      },
      "declare": false,
      "start": 1125,
      "end": 1168
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1185
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1207,
                    "end": 1213
                  },
                  "start": 1205,
                  "end": 1213
                },
                "start": 1202,
                "end": 1213
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1216,
                "end": 1222
              },
              "start": 1214,
              "end": 1222
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1192,
            "end": 1223
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1243,
                    "end": 1249
                  },
                  "start": 1241,
                  "end": 1249
                },
                "start": 1238,
                "end": 1249
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1252,
                  "end": 1257
                },
                "start": 1252,
                "end": 1257
              },
              "start": 1250,
              "end": 1257
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1228,
            "end": 1258
          }
        ],
        "start": 1186,
        "end": 1260
      },
      "declare": false,
      "start": 1170,
      "end": 1260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1271
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1287
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1288,
              "end": 1293
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1306
                },
                "typeArguments": null,
                "start": 1301,
                "end": 1306
              },
              "start": 1295,
              "end": 1306
            }
          ],
          "start": 1287,
          "end": 1307
        },
        "start": 1274,
        "end": 1307
      },
      "declare": false,
      "start": 1261,
      "end": 1307
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1319,
        "end": 1324
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1337,
                    "end": 1343
                  },
                  "start": 1335,
                  "end": 1343
                },
                "start": 1332,
                "end": 1343
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1346,
                "end": 1352
              },
              "start": 1344,
              "end": 1352
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1331,
            "end": 1353
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1373,
                    "end": 1379
                  },
                  "start": 1371,
                  "end": 1379
                },
                "start": 1368,
                "end": 1379
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1382,
                  "end": 1387
                },
                "start": 1382,
                "end": 1387
              },
              "start": 1380,
              "end": 1387
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1358,
            "end": 1388
          }
        ],
        "start": 1325,
        "end": 1390
      },
      "declare": false,
      "start": 1309,
      "end": 1390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1401
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1404,
          "end": 1417
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj11",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1423
              },
              "typeArguments": null,
              "start": 1418,
              "end": 1423
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1436
                },
                "typeArguments": null,
                "start": 1431,
                "end": 1436
              },
              "start": 1425,
              "end": 1436
            }
          ],
          "start": 1417,
          "end": 1437
        },
        "start": 1404,
        "end": 1437
      },
      "declare": false,
      "start": 1391,
      "end": 1437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1454
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1476,
                    "end": 1482
                  },
                  "start": 1474,
                  "end": 1482
                },
                "start": 1471,
                "end": 1482
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
              },
              "start": 1483,
              "end": 1491
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1461,
            "end": 1492
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1503,
                    "end": 1509
                  },
                  "start": 1501,
                  "end": 1509
                },
                "start": 1498,
                "end": 1509
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1512,
                  "end": 1517
                },
                "start": 1512,
                "end": 1517
              },
              "start": 1510,
              "end": 1517
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1497,
            "end": 1518
          }
        ],
        "start": 1455,
        "end": 1520
      },
      "declare": false,
      "start": 1439,
      "end": 1520
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1534,
          "end": 1547
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj12",
                "optional": false,
                "typeAnnotation": null,
                "start": 1548,
                "end": 1553
              },
              "typeArguments": null,
              "start": 1548,
              "end": 1553
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1566
                },
                "typeArguments": null,
                "start": 1561,
                "end": 1566
              },
              "start": 1555,
              "end": 1566
            }
          ],
          "start": 1547,
          "end": 1567
        },
        "start": 1534,
        "end": 1567
      },
      "declare": false,
      "start": 1521,
      "end": 1567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrippingIdentity",
        "optional": false,
        "typeAnnotation": null,
        "start": 1574,
        "end": 1591
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
              "start": 1592,
              "end": 1593
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1592,
            "end": 1593
          }
        ],
        "start": 1591,
        "end": 1594
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1610,
          "end": 1611
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
              "start": 1621,
              "end": 1622
            },
            "typeArguments": null,
            "start": 1621,
            "end": 1622
          },
          "start": 1615,
          "end": 1622
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
              "start": 1625,
              "end": 1626
            },
            "typeArguments": null,
            "start": 1625,
            "end": 1626
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1628
            },
            "typeArguments": null,
            "start": 1627,
            "end": 1628
          },
          "start": 1625,
          "end": 1629
        },
        "optional": false,
        "readonly": "-",
        "start": 1597,
        "end": 1632
      },
      "declare": false,
      "start": 1569,
      "end": 1632
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1644,
        "end": 1649
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false,
                        "start": 1671,
                        "end": 1677
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1683,
                        "end": 1685
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1677,
                        "end": 1683
                      }
                    ],
                    "start": 1671,
                    "end": 1685
                  },
                  "start": 1669,
                  "end": 1685
                },
                "start": 1666,
                "end": 1685
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1688,
                  "end": 1693
                },
                "start": 1688,
                "end": 1693
              },
              "start": 1686,
              "end": 1693
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 1656,
            "end": 1694
          }
        ],
        "start": 1650,
        "end": 1696
      },
      "declare": false,
      "start": 1634,
      "end": 1696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1702,
        "end": 1707
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrippingIdentity",
          "optional": false,
          "typeAnnotation": null,
          "start": 1710,
          "end": 1727
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj13",
                "optional": false,
                "typeAnnotation": null,
                "start": 1728,
                "end": 1733
              },
              "typeArguments": null,
              "start": 1728,
              "end": 1733
            }
          ],
          "start": 1727,
          "end": 1734
        },
        "start": 1710,
        "end": 1734
      },
      "declare": false,
      "start": 1697,
      "end": 1734
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1734
}
```
