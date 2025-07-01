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
        "name": "requiredKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 93
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
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 104,
              "end": 110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 110
          }
        ],
        "start": 93,
        "end": 111
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
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
                "start": 130,
                "end": 131
              },
              "typeArguments": null,
              "start": 130,
              "end": 131
            },
            "start": 124,
            "end": 131
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 134,
              "end": 143
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
                  "start": 152,
                  "end": 153
                },
                "typeArguments": null,
                "start": 152,
                "end": 153
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 155
                },
                "typeArguments": null,
                "start": 154,
                "end": 155
              },
              "start": 152,
              "end": 156
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 159,
              "end": 164
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              "typeArguments": null,
              "start": 167,
              "end": 168
            },
            "start": 134,
            "end": 168
          },
          "optional": false,
          "readonly": null,
          "start": 114,
          "end": 171
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
              "start": 178,
              "end": 179
            },
            "typeArguments": null,
            "start": 178,
            "end": 179
          },
          "start": 172,
          "end": 179
        },
        "start": 114,
        "end": 180
      },
      "declare": true,
      "start": 68,
      "end": 181
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "addQuestionMarks",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 212
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
              "start": 216,
              "end": 217
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 226,
              "end": 232
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 232
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
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
                  "start": 252,
                  "end": 253
                },
                "typeArguments": null,
                "start": 252,
                "end": 253
              },
              "start": 246,
              "end": 253
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "requiredKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 268
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
                      "start": 269,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 269,
                    "end": 270
                  }
                ],
                "start": 268,
                "end": 271
              },
              "start": 256,
              "end": 271
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 271
          }
        ],
        "start": 212,
        "end": 273
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pick",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Required",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 289
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
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      }
                    ],
                    "start": 289,
                    "end": 292
                  },
                  "start": 281,
                  "end": 292
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "typeArguments": null,
                  "start": 294,
                  "end": 295
                }
              ],
              "start": 280,
              "end": 296
            },
            "start": 276,
            "end": 296
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 306
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
                    "start": 307,
                    "end": 308
                  },
                  "typeArguments": null,
                  "start": 307,
                  "end": 308
                }
              ],
              "start": 306,
              "end": 309
            },
            "start": 299,
            "end": 309
          }
        ],
        "start": 276,
        "end": 309
      },
      "declare": true,
      "start": 183,
      "end": 310
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 333
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
              "start": 334,
              "end": 335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 335
          }
        ],
        "start": 333,
        "end": 336
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "typeArguments": null,
        "start": 339,
        "end": 340
      },
      "declare": true,
      "start": 312,
      "end": 341
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatten",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 363
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
              "start": 364,
              "end": 365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 364,
            "end": 365
          }
        ],
        "start": 363,
        "end": 366
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 377
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
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
                    "start": 394,
                    "end": 395
                  },
                  "typeArguments": null,
                  "start": 394,
                  "end": 395
                },
                "start": 388,
                "end": 395
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
                    "start": 398,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 398,
                  "end": 399
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "typeArguments": null,
                  "start": 400,
                  "end": 401
                },
                "start": 398,
                "end": 402
              },
              "optional": false,
              "readonly": null,
              "start": 378,
              "end": 405
            }
          ],
          "start": 377,
          "end": 406
        },
        "start": 369,
        "end": 406
      },
      "declare": true,
      "start": 343,
      "end": 407
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodType",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 446
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Output",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 453
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 456,
                "end": 459
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 447,
              "end": 459
            }
          ],
          "start": 446,
          "end": 460
        },
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
                "name": "_output",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 481
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Output",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 489
                  },
                  "typeArguments": null,
                  "start": 483,
                  "end": 489
                },
                "start": 481,
                "end": 489
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 465,
              "end": 490
            }
          ],
          "start": 461,
          "end": 492
        },
        "abstract": true,
        "declare": true,
        "start": 416,
        "end": 492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 409,
      "end": 492
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodLiteral",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 525
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
                "start": 526,
                "end": 527
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 526,
              "end": 527
            }
          ],
          "start": 525,
          "end": 528
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodType",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 544
        },
        "superTypeArguments": {
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
                "start": 545,
                "end": 546
              },
              "typeArguments": null,
              "start": 545,
              "end": 546
            }
          ],
          "start": 544,
          "end": 547
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 548,
          "end": 550
        },
        "abstract": false,
        "declare": true,
        "start": 501,
        "end": 550
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 494,
      "end": 550
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodTypeAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 572,
          "end": 582
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 592
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 593,
                "end": 596
              }
            ],
            "start": 592,
            "end": 597
          },
          "start": 585,
          "end": 597
        },
        "declare": true,
        "start": 559,
        "end": 598
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 552,
      "end": 598
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "baseObjectOutputType",
          "optional": false,
          "typeAnnotation": null,
          "start": 620,
          "end": 640
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 646
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodRawShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 666
                },
                "typeArguments": null,
                "start": 655,
                "end": 666
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 641,
              "end": 666
            }
          ],
          "start": 640,
          "end": 667
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 676
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 691
              },
              "typeArguments": null,
              "start": 686,
              "end": 691
            },
            "start": 680,
            "end": 691
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 699
                },
                "typeArguments": null,
                "start": 694,
                "end": 699
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 701
                },
                "typeArguments": null,
                "start": 700,
                "end": 701
              },
              "start": 694,
              "end": 702
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_output",
                "raw": "\"_output\"",
                "start": 703,
                "end": 712
              },
              "start": 703,
              "end": 712
            },
            "start": 694,
            "end": 713
          },
          "optional": false,
          "readonly": null,
          "start": 670,
          "end": 716
        },
        "declare": true,
        "start": 607,
        "end": 717
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 600,
      "end": 717
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "objectOutputType",
          "optional": false,
          "typeAnnotation": null,
          "start": 739,
          "end": 755
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 761
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodRawShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 781
                },
                "typeArguments": null,
                "start": 770,
                "end": 781
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 756,
              "end": 781
            }
          ],
          "start": 755,
          "end": 782
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "flatten",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 792
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addQuestionMarks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 812
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baseObjectOutputType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 813,
                        "end": 833
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 839
                            },
                            "typeArguments": null,
                            "start": 834,
                            "end": 839
                          }
                        ],
                        "start": 833,
                        "end": 840
                      },
                      "start": 813,
                      "end": 840
                    }
                  ],
                  "start": 812,
                  "end": 841
                },
                "start": 796,
                "end": 841
              }
            ],
            "start": 792,
            "end": 843
          },
          "start": 785,
          "end": 843
        },
        "declare": true,
        "start": 726,
        "end": 844
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 719,
      "end": 844
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ZodRawShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 877
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 888,
                      "end": 894
                    },
                    "start": 886,
                    "end": 894
                  },
                  "start": 885,
                  "end": 894
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ZodTypeAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 907
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 907
                },
                "start": 895,
                "end": 907
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 884,
              "end": 908
            }
          ],
          "start": 880,
          "end": 910
        },
        "declare": true,
        "start": 853,
        "end": 911
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 846,
      "end": 911
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "buildSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 937
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 942
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 951,
                      "end": 957
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 941,
                    "end": 957
                  }
                ],
                "start": 940,
                "end": 958
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "version",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 972
                      },
                      "typeArguments": null,
                      "start": 971,
                      "end": 972
                    },
                    "start": 969,
                    "end": 972
                  },
                  "start": 962,
                  "end": 972
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objectOutputType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 976,
                    "end": 992
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "version",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 997,
                              "end": 1004
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ZodLiteral",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1006,
                                  "end": 1016
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1017,
                                        "end": 1018
                                      },
                                      "typeArguments": null,
                                      "start": 1017,
                                      "end": 1018
                                    }
                                  ],
                                  "start": 1016,
                                  "end": 1019
                                },
                                "start": 1006,
                                "end": 1019
                              },
                              "start": 1004,
                              "end": 1019
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 997,
                            "end": 1020
                          }
                        ],
                        "start": 993,
                        "end": 1022
                      }
                    ],
                    "start": 992,
                    "end": 1023
                  },
                  "start": 976,
                  "end": 1023
                },
                "start": 974,
                "end": 1023
              },
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1028,
                  "end": 1030
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1034,
                  "end": 1037
                },
                "start": 1028,
                "end": 1037
              },
              "id": null,
              "generator": false,
              "start": 940,
              "end": 1038
            },
            "definite": false,
            "start": 926,
            "end": 1038
          }
        ],
        "declare": false,
        "start": 920,
        "end": 1039
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 913,
      "end": 1039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "evaluate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1122
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1123,
            "end": 1124
          }
        ],
        "start": 1122,
        "end": 1125
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 1131,
              "end": 1132
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1142,
                  "end": 1143
                },
                "typeArguments": null,
                "start": 1142,
                "end": 1143
              },
              "start": 1136,
              "end": 1143
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1147
                },
                "typeArguments": null,
                "start": 1146,
                "end": 1147
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1148,
                  "end": 1149
                },
                "typeArguments": null,
                "start": 1148,
                "end": 1149
              },
              "start": 1146,
              "end": 1150
            },
            "optional": false,
            "readonly": null,
            "start": 1128,
            "end": 1152
          },
          {
            "type": "TSUnknownKeyword",
            "start": 1155,
            "end": 1162
          }
        ],
        "start": 1128,
        "end": 1162
      },
      "declare": false,
      "start": 1109,
      "end": 1162
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "entryOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1176,
          "end": 1183
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1184,
                "end": 1185
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1184,
              "end": 1185
            }
          ],
          "start": 1183,
          "end": 1186
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "evaluate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1189,
            "end": 1197
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1207
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "typeArguments": null,
                      "start": 1217,
                      "end": 1218
                    },
                    "start": 1211,
                    "end": 1218
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1224,
                          "end": 1225
                        },
                        "typeArguments": null,
                        "start": 1224,
                        "end": 1225
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1227,
                                "end": 1228
                              },
                              "typeArguments": null,
                              "start": 1227,
                              "end": 1228
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1229,
                                "end": 1230
                              },
                              "typeArguments": null,
                              "start": 1229,
                              "end": 1230
                            },
                            "start": 1227,
                            "end": 1231
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [],
                                "start": 1235,
                                "end": 1237
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 1240,
                                "end": 1244
                              }
                            ],
                            "start": 1235,
                            "end": 1244
                          }
                        ],
                        "start": 1227,
                        "end": 1245
                      }
                    ],
                    "start": 1223,
                    "end": 1246
                  },
                  "optional": "-",
                  "readonly": null,
                  "start": 1203,
                  "end": 1248
                },
                "indexType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1249,
                      "end": 1250
                    },
                    "typeArguments": null,
                    "start": 1249,
                    "end": 1250
                  },
                  "extendsType": {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1268,
                        "end": 1275
                      },
                      "start": 1268,
                      "end": 1277
                    },
                    "start": 1259,
                    "end": 1277
                  },
                  "trueType": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1294,
                            "end": 1295
                          },
                          "typeArguments": null,
                          "start": 1294,
                          "end": 1295
                        },
                        "start": 1288,
                        "end": 1295
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1298,
                        "end": 1304
                      }
                    ],
                    "start": 1288,
                    "end": 1304
                  },
                  "falseType": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1321,
                        "end": 1322
                      },
                      "typeArguments": null,
                      "start": 1321,
                      "end": 1322
                    },
                    "start": 1315,
                    "end": 1322
                  },
                  "start": 1249,
                  "end": 1322
                },
                "start": 1203,
                "end": 1323
              }
            ],
            "start": 1197,
            "end": 1325
          },
          "start": 1189,
          "end": 1325
        },
        "declare": false,
        "start": 1171,
        "end": 1325
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1164,
      "end": 1325
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "entriesOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1339,
          "end": 1348
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1349,
                "end": 1350
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1359,
                "end": 1365
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1349,
              "end": 1365
            }
          ],
          "start": 1348,
          "end": 1366
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "evaluate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1369,
            "end": 1377
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entryOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1385
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1386,
                          "end": 1387
                        },
                        "typeArguments": null,
                        "start": 1386,
                        "end": 1387
                      }
                    ],
                    "start": 1385,
                    "end": 1388
                  },
                  "start": 1378,
                  "end": 1388
                },
                "start": 1378,
                "end": 1390
              }
            ],
            "start": 1377,
            "end": 1391
          },
          "start": 1369,
          "end": 1391
        },
        "declare": false,
        "start": 1334,
        "end": 1391
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1327,
      "end": 1391
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "entriesOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1406,
              "end": 1415
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1419,
                      "end": 1420
                    },
                    "constraint": {
                      "type": "TSObjectKeyword",
                      "start": 1429,
                      "end": 1435
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1419,
                    "end": 1435
                  }
                ],
                "start": 1418,
                "end": 1436
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1440,
                        "end": 1441
                      },
                      "typeArguments": null,
                      "start": 1440,
                      "end": 1441
                    },
                    "start": 1438,
                    "end": 1441
                  },
                  "start": 1437,
                  "end": 1441
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1450,
                      "end": 1456
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1457,
                      "end": 1464
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1450,
                    "end": 1464
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1466
                    }
                  ],
                  "optional": false,
                  "start": 1450,
                  "end": 1467
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entriesOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1471,
                    "end": 1480
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1482
                        },
                        "typeArguments": null,
                        "start": 1481,
                        "end": 1482
                      }
                    ],
                    "start": 1480,
                    "end": 1483
                  },
                  "start": 1471,
                  "end": 1483
                },
                "start": 1450,
                "end": 1483
              },
              "id": null,
              "generator": false,
              "start": 1418,
              "end": 1483
            },
            "definite": false,
            "start": 1406,
            "end": 1483
          }
        ],
        "declare": false,
        "start": 1400,
        "end": 1483
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1393,
      "end": 1483
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 68,
  "end": 1483
}
```
