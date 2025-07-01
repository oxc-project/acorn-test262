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
        "name": "TakeString",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "start": 19,
            "end": 28
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          },
          "start": 30,
          "end": 36
        },
        "start": 18,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 183
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 184,
              "end": 185
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 220
                },
                "typeArguments": null,
                "start": 210,
                "end": 220
              },
              "optional": false,
              "readonly": null,
              "start": 194,
              "end": 221
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 221
          }
        ],
        "start": 183,
        "end": 222
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 228,
                "end": 229
              },
              "typeArguments": null,
              "start": 228,
              "end": 229
            },
            "start": 226,
            "end": 229
          },
          "start": 223,
          "end": 229
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 232,
          "end": 236
        },
        "start": 230,
        "end": 236
      },
      "body": null,
      "expression": false,
      "start": 159,
      "end": 237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 262
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 263,
              "end": 264
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 276
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
                    "start": 286,
                    "end": 287
                  },
                  "typeArguments": null,
                  "start": 286,
                  "end": 287
                },
                "start": 280,
                "end": 287
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 300
                },
                "typeArguments": null,
                "start": 290,
                "end": 300
              },
              "optional": false,
              "readonly": null,
              "start": 273,
              "end": 301
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 301
          }
        ],
        "start": 262,
        "end": 302
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 308,
                "end": 309
              },
              "typeArguments": null,
              "start": 308,
              "end": 309
            },
            "start": 306,
            "end": 309
          },
          "start": 303,
          "end": 309
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 312,
          "end": 316
        },
        "start": 310,
        "end": 316
      },
      "body": null,
      "expression": false,
      "start": 238,
      "end": 317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped3",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 342
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 343,
              "end": 344
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 366,
                  "end": 369
                },
                "start": 360,
                "end": 369
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 382
                },
                "typeArguments": null,
                "start": 372,
                "end": 382
              },
              "optional": false,
              "readonly": null,
              "start": 353,
              "end": 383
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 383
          }
        ],
        "start": 342,
        "end": 384
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 390,
                "end": 391
              },
              "typeArguments": null,
              "start": 390,
              "end": 391
            },
            "start": 388,
            "end": 391
          },
          "start": 385,
          "end": 391
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 394,
          "end": 398
        },
        "start": 392,
        "end": 398
      },
      "body": null,
      "expression": false,
      "start": 318,
      "end": 399
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped4",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 424
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 425,
              "end": 426
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 425,
            "end": 426
          }
        ],
        "start": 424,
        "end": 427
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 434
                  },
                  "typeArguments": null,
                  "start": 433,
                  "end": 434
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
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
                        "start": 450,
                        "end": 451
                      },
                      "typeArguments": null,
                      "start": 450,
                      "end": 451
                    },
                    "start": 444,
                    "end": 451
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 454,
                    "end": 464
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 437,
                  "end": 465
                }
              ],
              "start": 433,
              "end": 465
            },
            "start": 431,
            "end": 465
          },
          "start": 428,
          "end": 465
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 468,
          "end": 472
        },
        "start": 466,
        "end": 472
      },
      "body": null,
      "expression": false,
      "start": 400,
      "end": 473
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped5",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 498
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 499,
              "end": 500
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 499,
            "end": 500
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 503
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
                  "start": 518,
                  "end": 519
                },
                "typeArguments": null,
                "start": 518,
                "end": 519
              },
              "start": 512,
              "end": 519
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 502,
            "end": 519
          }
        ],
        "start": 498,
        "end": 520
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "typeArguments": null,
                  "start": 526,
                  "end": 527
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 533
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 538
                    },
                    "typeArguments": null,
                    "start": 537,
                    "end": 538
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 551
                    },
                    "typeArguments": null,
                    "start": 541,
                    "end": 551
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 530,
                  "end": 552
                }
              ],
              "start": 526,
              "end": 552
            },
            "start": 524,
            "end": 552
          },
          "start": 521,
          "end": 552
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 555,
          "end": 559
        },
        "start": 553,
        "end": 559
      },
      "body": null,
      "expression": false,
      "start": 474,
      "end": 560
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped6",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 585
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 586,
              "end": 587
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 596,
              "end": 602
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 586,
            "end": 602
          }
        ],
        "start": 585,
        "end": 603
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "typeArguments": null,
                "start": 616,
                "end": 617
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 620,
                  "end": 630
                },
                "typeArguments": null,
                "start": 620,
                "end": 630
              },
              "optional": false,
              "readonly": null,
              "start": 609,
              "end": 631
            },
            "start": 607,
            "end": 631
          },
          "start": 604,
          "end": 631
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 634,
          "end": 638
        },
        "start": 632,
        "end": 638
      },
      "body": null,
      "expression": false,
      "start": 561,
      "end": 639
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped7",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 664
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 665,
              "end": 666
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 681,
                "end": 684
              },
              "start": 675,
              "end": 684
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 665,
            "end": 684
          }
        ],
        "start": 664,
        "end": 685
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 694
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 699
                },
                "typeArguments": null,
                "start": 698,
                "end": 699
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 712
                },
                "typeArguments": null,
                "start": 702,
                "end": 712
              },
              "optional": false,
              "readonly": null,
              "start": 691,
              "end": 713
            },
            "start": 689,
            "end": 713
          },
          "start": 686,
          "end": 713
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 716,
          "end": 720
        },
        "start": 714,
        "end": 720
      },
      "body": null,
      "expression": false,
      "start": 640,
      "end": 721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped8",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 746
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 747,
              "end": 748
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 757,
                "end": 762
              },
              "start": 757,
              "end": 762
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 747,
            "end": 762
          }
        ],
        "start": 746,
        "end": 763
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 772
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 776,
                  "end": 777
                },
                "typeArguments": null,
                "start": 776,
                "end": 777
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 780,
                  "end": 790
                },
                "typeArguments": null,
                "start": 780,
                "end": 790
              },
              "optional": false,
              "readonly": null,
              "start": 769,
              "end": 791
            },
            "start": 767,
            "end": 791
          },
          "start": 764,
          "end": 791
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 794,
          "end": 798
        },
        "start": 792,
        "end": 798
      },
      "body": null,
      "expression": false,
      "start": 722,
      "end": 799
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapped9",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 824
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 825,
              "end": 826
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 835,
                    "end": 840
                  },
                  "start": 835,
                  "end": 840
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 841,
                    "end": 846
                  },
                  "start": 841,
                  "end": 846
                }
              ],
              "start": 835,
              "end": 846
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 825,
            "end": 846
          }
        ],
        "start": 824,
        "end": 847
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                },
                "typeArguments": null,
                "start": 860,
                "end": 861
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 874
                },
                "typeArguments": null,
                "start": 864,
                "end": 874
              },
              "optional": false,
              "readonly": null,
              "start": 853,
              "end": 875
            },
            "start": 851,
            "end": 875
          },
          "start": 848,
          "end": 875
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 878,
          "end": 882
        },
        "start": 876,
        "end": 882
      },
      "body": null,
      "expression": false,
      "start": 800,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped1",
          "optional": false,
          "typeAnnotation": null,
          "start": 885,
          "end": 892
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 897
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 899,
                      "end": 900
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 904,
                    "end": 906
                  },
                  "id": null,
                  "generator": false,
                  "start": 899,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 894,
                "end": 906
              }
            ],
            "start": 893,
            "end": 907
          }
        ],
        "optional": false,
        "start": 885,
        "end": 908
      },
      "directive": null,
      "start": 885,
      "end": 909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped2",
          "optional": false,
          "typeAnnotation": null,
          "start": 910,
          "end": 917
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 922
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 925
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 929,
                    "end": 931
                  },
                  "id": null,
                  "generator": false,
                  "start": 924,
                  "end": 931
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 919,
                "end": 931
              }
            ],
            "start": 918,
            "end": 932
          }
        ],
        "optional": false,
        "start": 910,
        "end": 933
      },
      "directive": null,
      "start": 910,
      "end": 934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped3",
          "optional": false,
          "typeAnnotation": null,
          "start": 935,
          "end": 942
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 947
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 949,
                      "end": 950
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 954,
                    "end": 956
                  },
                  "id": null,
                  "generator": false,
                  "start": 949,
                  "end": 956
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 944,
                "end": 956
              }
            ],
            "start": 943,
            "end": 957
          }
        ],
        "optional": false,
        "start": 935,
        "end": 958
      },
      "directive": null,
      "start": 935,
      "end": 959
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped4",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 967
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 972
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 975
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 979,
                    "end": 981
                  },
                  "id": null,
                  "generator": false,
                  "start": 974,
                  "end": 981
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 969,
                "end": 981
              }
            ],
            "start": 968,
            "end": 982
          }
        ],
        "optional": false,
        "start": 960,
        "end": 983
      },
      "directive": null,
      "start": 960,
      "end": 984
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped5",
          "optional": false,
          "typeAnnotation": null,
          "start": 985,
          "end": 992
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 997
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1000
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1004,
                    "end": 1006
                  },
                  "id": null,
                  "generator": false,
                  "start": 999,
                  "end": 1006
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 994,
                "end": 1006
              }
            ],
            "start": 993,
            "end": 1007
          }
        ],
        "optional": false,
        "start": 985,
        "end": 1008
      },
      "directive": null,
      "start": 985,
      "end": 1009
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1010,
          "end": 1017
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1022
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1025
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1029,
                    "end": 1031
                  },
                  "id": null,
                  "generator": false,
                  "start": 1024,
                  "end": 1031
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1019,
                "end": 1031
              }
            ],
            "start": 1018,
            "end": 1032
          }
        ],
        "optional": false,
        "start": 1010,
        "end": 1033
      },
      "directive": null,
      "start": 1010,
      "end": 1034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1035,
          "end": 1042
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1047
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1049,
                      "end": 1050
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1054,
                    "end": 1056
                  },
                  "id": null,
                  "generator": false,
                  "start": 1049,
                  "end": 1056
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1044,
                "end": 1056
              }
            ],
            "start": 1043,
            "end": 1057
          }
        ],
        "optional": false,
        "start": 1035,
        "end": 1058
      },
      "directive": null,
      "start": 1035,
      "end": 1059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1060,
          "end": 1067
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1072
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1075
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1079,
                    "end": 1081
                  },
                  "id": null,
                  "generator": false,
                  "start": 1074,
                  "end": 1081
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1069,
                "end": 1081
              }
            ],
            "start": 1068,
            "end": 1082
          }
        ],
        "optional": false,
        "start": 1060,
        "end": 1083
      },
      "directive": null,
      "start": 1060,
      "end": 1084
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1085,
          "end": 1092
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1094,
                  "end": 1097
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1104,
                    "end": 1106
                  },
                  "id": null,
                  "generator": false,
                  "start": 1099,
                  "end": 1106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1094,
                "end": 1106
              }
            ],
            "start": 1093,
            "end": 1107
          }
        ],
        "optional": false,
        "start": 1085,
        "end": 1108
      },
      "directive": null,
      "start": 1085,
      "end": 1109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1109
}
```
