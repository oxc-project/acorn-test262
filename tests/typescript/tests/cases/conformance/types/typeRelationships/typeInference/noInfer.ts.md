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
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 58
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          ],
          "start": 58,
          "end": 66
        },
        "start": 51,
        "end": 66
      },
      "declare": false,
      "start": 40,
      "end": 67
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 86
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 96,
                  "end": 102
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 105,
                  "end": 112
                }
              ],
              "start": 87,
              "end": 112
            }
          ],
          "start": 86,
          "end": 113
        },
        "start": 79,
        "end": 113
      },
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 133
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 134,
              "end": 143
            }
          ],
          "start": 133,
          "end": 144
        },
        "start": 126,
        "end": 144
      },
      "declare": false,
      "start": 115,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 154
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 164
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 165,
                "end": 170
              },
              "start": 165,
              "end": 170
            }
          ],
          "start": 164,
          "end": 171
        },
        "start": 157,
        "end": 171
      },
      "declare": false,
      "start": 146,
      "end": 172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 181
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 191
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo",
                    "cooked": "foo"
                  },
                  "tail": false,
                  "start": 192,
                  "end": 198
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 204,
                  "end": 206
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 198,
                  "end": 204
                }
              ],
              "start": 192,
              "end": 206
            }
          ],
          "start": 191,
          "end": 207
        },
        "start": 184,
        "end": 207
      },
      "declare": false,
      "start": 173,
      "end": 208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 227
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "foo",
                        "cooked": "foo"
                      },
                      "tail": false,
                      "start": 228,
                      "end": 234
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 240,
                      "end": 242
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 234,
                      "end": 240
                    }
                  ],
                  "start": 228,
                  "end": 242
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 245,
                      "end": 248
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "bar",
                        "cooked": "bar"
                      },
                      "tail": true,
                      "start": 254,
                      "end": 259
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  ],
                  "start": 245,
                  "end": 259
                }
              ],
              "start": 228,
              "end": 259
            }
          ],
          "start": 227,
          "end": 260
        },
        "start": 220,
        "end": 260
      },
      "declare": false,
      "start": 209,
      "end": 261
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 270
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 280
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 281,
              "end": 283
            }
          ],
          "start": 280,
          "end": 284
        },
        "start": 273,
        "end": 284
      },
      "declare": false,
      "start": 262,
      "end": 285
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 340
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 350
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 351,
                "end": 357
              },
              "start": 351,
              "end": 359
            }
          ],
          "start": 350,
          "end": 360
        },
        "start": 343,
        "end": 360
      },
      "declare": false,
      "start": 332,
      "end": 361
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 370
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 380
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 386,
                      "end": 392
                    },
                    "start": 384,
                    "end": 392
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 383,
                  "end": 392
                }
              ],
              "start": 381,
              "end": 394
            }
          ],
          "start": 380,
          "end": 395
        },
        "start": 373,
        "end": 395
      },
      "declare": false,
      "start": 362,
      "end": 396
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 451
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
              "start": 452,
              "end": 453
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 452,
            "end": 453
          }
        ],
        "start": 451,
        "end": 454
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 464
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 472
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
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  }
                ],
                "start": 472,
                "end": 475
              },
              "start": 465,
              "end": 475
            }
          ],
          "start": 464,
          "end": 476
        },
        "start": 457,
        "end": 476
      },
      "declare": false,
      "start": 443,
      "end": 477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 486
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
              "start": 487,
              "end": 488
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 487,
            "end": 488
          }
        ],
        "start": 486,
        "end": 489
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 499
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 507
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
                          "start": 508,
                          "end": 509
                        },
                        "typeArguments": null,
                        "start": 508,
                        "end": 509
                      }
                    ],
                    "start": 507,
                    "end": 510
                  },
                  "start": 500,
                  "end": 510
                },
                {
                  "type": "TSStringKeyword",
                  "start": 513,
                  "end": 519
                }
              ],
              "start": 500,
              "end": 519
            }
          ],
          "start": 499,
          "end": 520
        },
        "start": 492,
        "end": 520
      },
      "declare": false,
      "start": 478,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 530
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
              "start": 531,
              "end": 532
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 531,
            "end": 532
          }
        ],
        "start": 530,
        "end": 533
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 543
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 544,
                    "end": 551
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
                          "start": 552,
                          "end": 553
                        },
                        "typeArguments": null,
                        "start": 552,
                        "end": 553
                      }
                    ],
                    "start": 551,
                    "end": 554
                  },
                  "start": 544,
                  "end": 554
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  },
                  "start": 557,
                  "end": 565
                }
              ],
              "start": 544,
              "end": 565
            }
          ],
          "start": 543,
          "end": 566
        },
        "start": 536,
        "end": 566
      },
      "declare": false,
      "start": 522,
      "end": 567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 635
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NoInfer",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 651
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 654,
                      "end": 655
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 657,
                        "end": 663
                      },
                      "start": 655,
                      "end": 663
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 654,
                    "end": 664
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 665,
                      "end": 666
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 668,
                        "end": 674
                      },
                      "start": 666,
                      "end": 674
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 665,
                    "end": 674
                  }
                ],
                "start": 652,
                "end": 676
              }
            ],
            "start": 651,
            "end": 677
          },
          "start": 644,
          "end": 677
        },
        "start": 638,
        "end": 677
      },
      "declare": false,
      "start": 627,
      "end": 678
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 687
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
              "start": 688,
              "end": 689
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 688,
            "end": 689
          }
        ],
        "start": 687,
        "end": 690
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NoInfer",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 706
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
                  "start": 707,
                  "end": 708
                },
                "typeArguments": null,
                "start": 707,
                "end": 708
              }
            ],
            "start": 706,
            "end": 709
          },
          "start": 699,
          "end": 709
        },
        "start": 693,
        "end": 709
      },
      "declare": false,
      "start": 679,
      "end": 710
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 716,
        "end": 719
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
          "start": 725,
          "end": 726
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NoInfer",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 743
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 746,
                        "end": 747
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 749,
                          "end": 755
                        },
                        "start": 747,
                        "end": 755
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 746,
                      "end": 756
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 758
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 760,
                          "end": 766
                        },
                        "start": 758,
                        "end": 766
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 757,
                      "end": 766
                    }
                  ],
                  "start": 744,
                  "end": 768
                }
              ],
              "start": 743,
              "end": 769
            },
            "start": 736,
            "end": 769
          },
          "start": 730,
          "end": 769
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 773
          },
          "typeArguments": null,
          "start": 772,
          "end": 773
        },
        "optional": false,
        "readonly": null,
        "start": 722,
        "end": 775
      },
      "declare": false,
      "start": 711,
      "end": 776
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 799
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
              "start": 800,
              "end": 801
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 810,
              "end": 816
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 800,
            "end": 816
          }
        ],
        "start": 799,
        "end": 817
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
                "start": 821,
                "end": 822
              },
              "typeArguments": null,
              "start": 821,
              "end": 822
            },
            "start": 819,
            "end": 822
          },
          "start": 818,
          "end": 822
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 834
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
                      "start": 835,
                      "end": 836
                    },
                    "typeArguments": null,
                    "start": 835,
                    "end": 836
                  }
                ],
                "start": 834,
                "end": 837
              },
              "start": 827,
              "end": 837
            },
            "start": 825,
            "end": 837
          },
          "start": 824,
          "end": 837
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 840,
          "end": 844
        },
        "start": 838,
        "end": 844
      },
      "body": null,
      "expression": false,
      "start": 778,
      "end": 844
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 866
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
              "start": 867,
              "end": 868
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 877,
              "end": 883
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 867,
            "end": 883
          }
        ],
        "start": 866,
        "end": 884
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
                "start": 888,
                "end": 889
              },
              "typeArguments": null,
              "start": 888,
              "end": 889
            },
            "start": 886,
            "end": 889
          },
          "start": 885,
          "end": 889
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NoInfer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 901
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
                        "start": 902,
                        "end": 903
                      },
                      "typeArguments": null,
                      "start": 902,
                      "end": 903
                    }
                  ],
                  "start": 901,
                  "end": 904
                },
                "start": 894,
                "end": 904
              },
              "start": 894,
              "end": 906
            },
            "start": 892,
            "end": 906
          },
          "start": 891,
          "end": 906
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 909,
          "end": 913
        },
        "start": 907,
        "end": 913
      },
      "body": null,
      "expression": false,
      "start": 845,
      "end": 913
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 931,
        "end": 935
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
              "start": 936,
              "end": 937
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 946,
              "end": 952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 936,
            "end": 952
          }
        ],
        "start": 935,
        "end": 953
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
                "start": 957,
                "end": 958
              },
              "typeArguments": null,
              "start": 957,
              "end": 958
            },
            "start": 955,
            "end": 958
          },
          "start": 954,
          "end": 958
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 963,
                "end": 970
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 972
                      },
                      "typeArguments": null,
                      "start": 971,
                      "end": 972
                    },
                    "start": 971,
                    "end": 974
                  }
                ],
                "start": 970,
                "end": 975
              },
              "start": 963,
              "end": 975
            },
            "start": 961,
            "end": 975
          },
          "start": 960,
          "end": 975
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 978,
          "end": 982
        },
        "start": 976,
        "end": 982
      },
      "body": null,
      "expression": false,
      "start": 914,
      "end": 982
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1004
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
              "start": 1005,
              "end": 1006
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1015,
              "end": 1021
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1005,
            "end": 1021
          }
        ],
        "start": 1004,
        "end": 1022
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
                "start": 1026,
                "end": 1027
              },
              "typeArguments": null,
              "start": 1026,
              "end": 1027
            },
            "start": 1024,
            "end": 1027
          },
          "start": 1023,
          "end": 1027
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "x",
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
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1037,
                        "end": 1044
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
                              "start": 1045,
                              "end": 1046
                            },
                            "typeArguments": null,
                            "start": 1045,
                            "end": 1046
                          }
                        ],
                        "start": 1044,
                        "end": 1047
                      },
                      "start": 1037,
                      "end": 1047
                    },
                    "start": 1035,
                    "end": 1047
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1034,
                  "end": 1047
                }
              ],
              "start": 1032,
              "end": 1049
            },
            "start": 1030,
            "end": 1049
          },
          "start": 1029,
          "end": 1049
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1052,
          "end": 1056
        },
        "start": 1050,
        "end": 1056
      },
      "body": null,
      "expression": false,
      "start": 983,
      "end": 1056
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1078
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
              "start": 1079,
              "end": 1080
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1089,
              "end": 1095
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1079,
            "end": 1095
          }
        ],
        "start": 1078,
        "end": 1096
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
                "start": 1100,
                "end": 1101
              },
              "typeArguments": null,
              "start": 1100,
              "end": 1101
            },
            "start": 1098,
            "end": 1101
          },
          "start": 1097,
          "end": 1101
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1113
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1116,
                          "end": 1117
                        },
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
                              "start": 1119,
                              "end": 1120
                            },
                            "typeArguments": null,
                            "start": 1119,
                            "end": 1120
                          },
                          "start": 1117,
                          "end": 1120
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1116,
                        "end": 1120
                      }
                    ],
                    "start": 1114,
                    "end": 1122
                  }
                ],
                "start": 1113,
                "end": 1123
              },
              "start": 1106,
              "end": 1123
            },
            "start": 1104,
            "end": 1123
          },
          "start": 1103,
          "end": 1123
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1126,
          "end": 1130
        },
        "start": 1124,
        "end": 1130
      },
      "body": null,
      "expression": false,
      "start": 1057,
      "end": 1130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1132,
          "end": 1136
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1137,
            "end": 1142
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1144,
            "end": 1149
          }
        ],
        "optional": false,
        "start": 1132,
        "end": 1150
      },
      "directive": null,
      "start": 1132,
      "end": 1150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1162,
            "end": 1167
          },
          {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 1169,
            "end": 1174
          }
        ],
        "optional": false,
        "start": 1157,
        "end": 1175
      },
      "directive": null,
      "start": 1157,
      "end": 1175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1189
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1190,
            "end": 1195
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1198,
                "end": 1203
              }
            ],
            "start": 1197,
            "end": 1204
          }
        ],
        "optional": false,
        "start": 1185,
        "end": 1205
      },
      "directive": null,
      "start": 1185,
      "end": 1205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1220,
            "end": 1225
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 1228,
                "end": 1233
              }
            ],
            "start": 1227,
            "end": 1234
          }
        ],
        "optional": false,
        "start": 1215,
        "end": 1235
      },
      "directive": null,
      "start": 1215,
      "end": 1235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1245,
          "end": 1249
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1250,
            "end": 1255
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1259,
                  "end": 1260
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 1262,
                  "end": 1267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1259,
                "end": 1267
              }
            ],
            "start": 1257,
            "end": 1269
          }
        ],
        "optional": false,
        "start": 1245,
        "end": 1270
      },
      "directive": null,
      "start": 1245,
      "end": 1270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1280,
          "end": 1284
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 1285,
            "end": 1290
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1295
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 1297,
                  "end": 1302
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1294,
                "end": 1302
              }
            ],
            "start": 1292,
            "end": 1304
          }
        ],
        "optional": false,
        "start": 1280,
        "end": 1305
      },
      "directive": null,
      "start": 1280,
      "end": 1305
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1330,
        "end": 1336
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
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 1339,
              "end": 1343
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1347,
                  "end": 1351
                },
                "start": 1345,
                "end": 1351
              },
              "body": null,
              "expression": false,
              "start": 1343,
              "end": 1351
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1339,
            "end": 1351
          }
        ],
        "start": 1337,
        "end": 1353
      },
      "abstract": false,
      "declare": true,
      "start": 1316,
      "end": 1353
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1371
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1380,
        "end": 1386
      },
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
              "name": "woof",
              "optional": false,
              "typeAnnotation": null,
              "start": 1389,
              "end": 1393
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1397,
                  "end": 1401
                },
                "start": 1395,
                "end": 1401
              },
              "body": null,
              "expression": false,
              "start": 1393,
              "end": 1401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1389,
            "end": 1401
          }
        ],
        "start": 1387,
        "end": 1403
      },
      "abstract": false,
      "declare": true,
      "start": 1354,
      "end": 1403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1432
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
              "start": 1433,
              "end": 1434
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1433,
            "end": 1434
          }
        ],
        "start": 1432,
        "end": 1435
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
          "start": 1436,
          "end": 1444
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "getDefault",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1464,
                    "end": 1471
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
                          "start": 1472,
                          "end": 1473
                        },
                        "typeArguments": null,
                        "start": 1472,
                        "end": 1473
                      }
                    ],
                    "start": 1471,
                    "end": 1474
                  },
                  "start": 1464,
                  "end": 1474
                },
                "start": 1461,
                "end": 1474
              },
              "start": 1458,
              "end": 1474
            },
            "start": 1456,
            "end": 1474
          },
          "start": 1446,
          "end": 1474
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1477,
          "end": 1481
        },
        "start": 1475,
        "end": 1481
      },
      "body": null,
      "expression": false,
      "start": 1404,
      "end": 1482
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 1484,
          "end": 1495
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1506
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1496,
            "end": 1508
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 1520,
                "end": 1526
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1516,
              "end": 1528
            },
            "id": null,
            "generator": false,
            "start": 1510,
            "end": 1528
          }
        ],
        "optional": false,
        "start": 1484,
        "end": 1529
      },
      "directive": null,
      "start": 1484,
      "end": 1530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1548
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 1553,
              "end": 1559
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1549,
            "end": 1561
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null,
                "start": 1573,
                "end": 1576
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1569,
              "end": 1578
            },
            "id": null,
            "generator": false,
            "start": 1563,
            "end": 1578
          }
        ],
        "optional": false,
        "start": 1537,
        "end": 1579
      },
      "directive": null,
      "start": 1537,
      "end": 1580
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 1587,
          "end": 1598
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 1603,
              "end": 1606
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1599,
            "end": 1608
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 1620,
                "end": 1626
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1616,
              "end": 1628
            },
            "id": null,
            "generator": false,
            "start": 1610,
            "end": 1628
          }
        ],
        "optional": false,
        "start": 1587,
        "end": 1629
      },
      "directive": null,
      "start": 1587,
      "end": 1630
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 1658,
        "end": 1669
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
              "start": 1670,
              "end": 1671
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1670,
            "end": 1671
          }
        ],
        "start": 1669,
        "end": 1672
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "actual",
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
                "start": 1681,
                "end": 1682
              },
              "typeArguments": null,
              "start": 1681,
              "end": 1682
            },
            "start": 1679,
            "end": 1682
          },
          "start": 1673,
          "end": 1682
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1701
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
                      "start": 1702,
                      "end": 1703
                    },
                    "typeArguments": null,
                    "start": 1702,
                    "end": 1703
                  }
                ],
                "start": 1701,
                "end": 1704
              },
              "start": 1694,
              "end": 1704
            },
            "start": 1692,
            "end": 1704
          },
          "start": 1684,
          "end": 1704
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 1707,
          "end": 1714
        },
        "start": 1705,
        "end": 1714
      },
      "body": null,
      "expression": false,
      "start": 1641,
      "end": 1715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 1717,
          "end": 1728
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1731,
                  "end": 1732
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1734,
                  "end": 1735
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1731,
                "end": 1735
              }
            ],
            "start": 1729,
            "end": 1737
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1741,
                  "end": 1742
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1744,
                  "end": 1745
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1741,
                "end": 1745
              }
            ],
            "start": 1739,
            "end": 1747
          }
        ],
        "optional": false,
        "start": 1717,
        "end": 1748
      },
      "directive": null,
      "start": 1717,
      "end": 1749
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1762,
            "end": 1763
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1769
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1771,
                  "end": 1772
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1768,
                "end": 1772
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1774,
                  "end": 1775
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1777,
                  "end": 1778
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1774,
                "end": 1778
              }
            ],
            "start": 1766,
            "end": 1780
          },
          "definite": false,
          "start": 1762,
          "end": 1780
        }
      ],
      "declare": false,
      "start": 1756,
      "end": 1781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 1782,
          "end": 1793
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1794,
            "end": 1795
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1800
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1802,
                  "end": 1803
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1799,
                "end": 1803
              }
            ],
            "start": 1797,
            "end": 1805
          }
        ],
        "optional": false,
        "start": 1782,
        "end": 1806
      },
      "directive": null,
      "start": 1782,
      "end": 1807
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1841
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
              "start": 1842,
              "end": 1843
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1842,
            "end": 1843
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1845,
              "end": 1846
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1845,
            "end": 1846
          }
        ],
        "start": 1841,
        "end": 1847
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
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
                        "start": 1862,
                        "end": 1863
                      },
                      "typeArguments": null,
                      "start": 1862,
                      "end": 1863
                    },
                    "start": 1860,
                    "end": 1863
                  },
                  "start": 1855,
                  "end": 1863
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1869
                  },
                  "typeArguments": null,
                  "start": 1868,
                  "end": 1869
                },
                "start": 1865,
                "end": 1869
              },
              "start": 1854,
              "end": 1869
            },
            "start": 1852,
            "end": 1869
          },
          "start": 1848,
          "end": 1869
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1878,
                "end": 1885
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
                      "start": 1886,
                      "end": 1887
                    },
                    "typeArguments": null,
                    "start": 1886,
                    "end": 1887
                  }
                ],
                "start": 1885,
                "end": 1888
              },
              "start": 1878,
              "end": 1888
            },
            "start": 1876,
            "end": 1888
          },
          "start": 1871,
          "end": 1888
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1892
          },
          "typeArguments": null,
          "start": 1891,
          "end": 1892
        },
        "start": 1889,
        "end": 1892
      },
      "body": null,
      "expression": false,
      "start": 1818,
      "end": 1893
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1911,
        "end": 1915
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1925,
                    "end": 1926
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1928,
                      "end": 1934
                    },
                    "start": 1926,
                    "end": 1934
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1925,
                  "end": 1935
                }
              ],
              "start": 1923,
              "end": 1937
            },
            "start": 1921,
            "end": 1937
          },
          "start": 1916,
          "end": 1937
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1940,
          "end": 1946
        },
        "start": 1938,
        "end": 1946
      },
      "body": null,
      "expression": false,
      "start": 1894,
      "end": 1947
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null,
          "start": 1949,
          "end": 1955
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 1956,
            "end": 1960
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1964,
                  "end": 1965
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1967,
                  "end": 1968
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1964,
                "end": 1968
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1970,
                  "end": 1971
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1973,
                  "end": 1974
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1970,
                "end": 1974
              }
            ],
            "start": 1962,
            "end": 1976
          }
        ],
        "optional": false,
        "start": 1949,
        "end": 1977
      },
      "directive": null,
      "start": 1949,
      "end": 1978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1988,
          "end": 1992
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1996
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1998,
                  "end": 1999
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1995,
                "end": 1999
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2001,
                  "end": 2002
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2004,
                  "end": 2005
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2001,
                "end": 2005
              }
            ],
            "start": 1993,
            "end": 2007
          }
        ],
        "optional": false,
        "start": 1988,
        "end": 2008
      },
      "directive": null,
      "start": 1988,
      "end": 2009
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2034
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2035,
              "end": 2040
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2035,
            "end": 2040
          }
        ],
        "start": 2034,
        "end": 2041
      },
      "typeAnnotation": {
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
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2051
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2053,
                  "end": 2058
                },
                "typeArguments": null,
                "start": 2053,
                "end": 2058
              },
              "start": 2051,
              "end": 2058
            },
            "accessibility": null,
            "static": false,
            "start": 2046,
            "end": 2059
          }
        ],
        "start": 2044,
        "end": 2061
      },
      "declare": false,
      "start": 2020,
      "end": 2062
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doWork",
        "optional": false,
        "typeAnnotation": null,
        "start": 2080,
        "end": 2086
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
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2087,
              "end": 2092
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2087,
            "end": 2092
          }
        ],
        "start": 2086,
        "end": 2093
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2114
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2115,
                      "end": 2120
                    },
                    "typeArguments": null,
                    "start": 2115,
                    "end": 2120
                  }
                ],
                "start": 2114,
                "end": 2121
              },
              "start": 2105,
              "end": 2121
            },
            "start": 2103,
            "end": 2121
          },
          "start": 2094,
          "end": 2121
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 2130,
                "end": 2137
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2138,
                      "end": 2143
                    },
                    "typeArguments": null,
                    "start": 2138,
                    "end": 2143
                  }
                ],
                "start": 2137,
                "end": 2144
              },
              "start": 2130,
              "end": 2144
            },
            "start": 2128,
            "end": 2144
          },
          "start": 2123,
          "end": 2144
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2147,
          "end": 2151
        },
        "start": 2145,
        "end": 2151
      },
      "body": null,
      "expression": false,
      "start": 2063,
      "end": 2152
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2173,
                  "end": 2182
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2185,
                            "end": 2188
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2190,
                              "end": 2196
                            },
                            "start": 2188,
                            "end": 2196
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2185,
                          "end": 2196
                        }
                      ],
                      "start": 2183,
                      "end": 2198
                    }
                  ],
                  "start": 2182,
                  "end": 2199
                },
                "start": 2173,
                "end": 2199
              },
              "start": 2171,
              "end": 2199
            },
            "start": 2167,
            "end": 2199
          },
          "init": null,
          "definite": false,
          "start": 2167,
          "end": 2199
        }
      ],
      "declare": true,
      "start": 2153,
      "end": 2200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doWork",
          "optional": false,
          "typeAnnotation": null,
          "start": 2202,
          "end": 2208
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null,
            "start": 2209,
            "end": 2213
          },
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
                  "start": 2217,
                  "end": 2220
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2222,
                  "end": 2224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2217,
                "end": 2224
              }
            ],
            "start": 2215,
            "end": 2226
          }
        ],
        "optional": false,
        "start": 2202,
        "end": 2227
      },
      "directive": null,
      "start": 2202,
      "end": 2228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doWork",
          "optional": false,
          "typeAnnotation": null,
          "start": 2235,
          "end": 2241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null,
            "start": 2242,
            "end": 2246
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2248,
            "end": 2250
          }
        ],
        "optional": false,
        "start": 2235,
        "end": 2251
      },
      "directive": null,
      "start": 2235,
      "end": 2252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mutate",
        "optional": false,
        "typeAnnotation": null,
        "start": 2280,
        "end": 2286
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
              "start": 2287,
              "end": 2288
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2287,
            "end": 2288
          }
        ],
        "start": 2286,
        "end": 2289
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2304,
                        "end": 2311
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
                              "start": 2312,
                              "end": 2313
                            },
                            "typeArguments": null,
                            "start": 2312,
                            "end": 2313
                          }
                        ],
                        "start": 2311,
                        "end": 2314
                      },
                      "start": 2304,
                      "end": 2314
                    },
                    "start": 2302,
                    "end": 2314
                  },
                  "start": 2301,
                  "end": 2314
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
                      "start": 2319,
                      "end": 2325
                    },
                    "start": 2317,
                    "end": 2325
                  },
                  "start": 2316,
                  "end": 2325
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
                    "start": 2330,
                    "end": 2331
                  },
                  "typeArguments": null,
                  "start": 2330,
                  "end": 2331
                },
                "start": 2327,
                "end": 2331
              },
              "start": 2300,
              "end": 2331
            },
            "start": 2298,
            "end": 2331
          },
          "start": 2290,
          "end": 2331
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
            "start": 2334,
            "end": 2335
          },
          "typeArguments": null,
          "start": 2334,
          "end": 2335
        },
        "start": 2332,
        "end": 2335
      },
      "body": null,
      "expression": false,
      "start": 2263,
      "end": 2336
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mutate1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2343,
            "end": 2350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2353,
              "end": 2359
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2361,
                    "end": 2362
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2364,
                    "end": 2365
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2370,
                  "end": 2371
                },
                "id": null,
                "generator": false,
                "start": 2360,
                "end": 2371
              }
            ],
            "optional": false,
            "start": 2353,
            "end": 2372
          },
          "definite": false,
          "start": 2343,
          "end": 2372
        }
      ],
      "declare": false,
      "start": 2337,
      "end": 2373
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExampleClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2401
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
              "start": 2402,
              "end": 2403
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2402,
            "end": 2403
          }
        ],
        "start": 2401,
        "end": 2404
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2405,
        "end": 2407
      },
      "abstract": false,
      "declare": true,
      "start": 2375,
      "end": 2407
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OkClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 2414,
        "end": 2421
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
              "start": 2422,
              "end": 2423
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2422,
            "end": 2423
          }
        ],
        "start": 2421,
        "end": 2424
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2431,
              "end": 2442
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clazz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExampleClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2458,
                          "end": 2470
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
                                "start": 2471,
                                "end": 2472
                              },
                              "typeArguments": null,
                              "start": 2471,
                              "end": 2472
                            }
                          ],
                          "start": 2470,
                          "end": 2473
                        },
                        "start": 2458,
                        "end": 2473
                      },
                      "start": 2456,
                      "end": 2473
                    },
                    "start": 2451,
                    "end": 2473
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2443,
                  "end": 2473
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NoInfer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2491,
                          "end": 2498
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
                                "start": 2499,
                                "end": 2500
                              },
                              "typeArguments": null,
                              "start": 2499,
                              "end": 2500
                            }
                          ],
                          "start": 2498,
                          "end": 2501
                        },
                        "start": 2491,
                        "end": 2501
                      },
                      "start": 2489,
                      "end": 2501
                    },
                    "start": 2483,
                    "end": 2501
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2475,
                  "end": 2501
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2503,
                "end": 2505
              },
              "expression": false,
              "start": 2442,
              "end": 2505
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2431,
            "end": 2505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2515,
              "end": 2520
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "start": 2524,
                    "end": 2525
                  },
                  "typeArguments": null,
                  "start": 2524,
                  "end": 2525
                },
                "start": 2522,
                "end": 2525
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2543,
                        "end": 2547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2548,
                        "end": 2554
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2543,
                      "end": 2554
                    },
                    "start": 2536,
                    "end": 2555
                  }
                ],
                "start": 2526,
                "end": 2567
              },
              "expression": false,
              "start": 2520,
              "end": 2567
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2511,
            "end": 2567
          }
        ],
        "start": 2425,
        "end": 2569
      },
      "abstract": false,
      "declare": false,
      "start": 2408,
      "end": 2569
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OkClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2576,
        "end": 2584
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
              "start": 2585,
              "end": 2586
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2585,
            "end": 2586
          }
        ],
        "start": 2584,
        "end": 2587
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2594,
              "end": 2605
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "clazz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ExampleClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2621,
                          "end": 2633
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
                                "start": 2634,
                                "end": 2635
                              },
                              "typeArguments": null,
                              "start": 2634,
                              "end": 2635
                            }
                          ],
                          "start": 2633,
                          "end": 2636
                        },
                        "start": 2621,
                        "end": 2636
                      },
                      "start": 2619,
                      "end": 2636
                    },
                    "start": 2614,
                    "end": 2636
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2606,
                  "end": 2636
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NoInfer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2653,
                          "end": 2660
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
                                "start": 2661,
                                "end": 2662
                              },
                              "typeArguments": null,
                              "start": 2661,
                              "end": 2662
                            }
                          ],
                          "start": 2660,
                          "end": 2663
                        },
                        "start": 2653,
                        "end": 2663
                      },
                      "start": 2651,
                      "end": 2663
                    },
                    "start": 2645,
                    "end": 2663
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2638,
                  "end": 2663
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2665,
                "end": 2667
              },
              "expression": false,
              "start": 2605,
              "end": 2667
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2594,
            "end": 2667
          }
        ],
        "start": 2588,
        "end": 2669
      },
      "abstract": false,
      "declare": false,
      "start": 2570,
      "end": 2669
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 2669
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 40,
    "end": 44,
    "range": [
      40,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 51,
    "end": 58,
    "range": [
      51,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 73,
    "end": 76,
    "range": [
      73,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 79,
    "end": 86,
    "range": [
      79,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 105,
    "end": 112,
    "range": [
      105,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 120,
    "end": 123,
    "range": [
      120,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 126,
    "end": 133,
    "range": [
      126,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 134,
    "end": 143,
    "range": [
      134,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 146,
    "end": 150,
    "range": [
      146,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 151,
    "end": 154,
    "range": [
      151,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 157,
    "end": 164,
    "range": [
      157,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 165,
    "end": 170,
    "range": [
      165,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 173,
    "end": 177,
    "range": [
      173,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "T04",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 184,
    "end": 191,
    "range": [
      184,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "T05",
    "start": 214,
    "end": 217,
    "range": [
      214,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 220,
    "end": 227,
    "range": [
      220,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 228,
    "end": 234,
    "range": [
      228,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 234,
    "end": 240,
    "range": [
      234,
      240
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Template",
    "value": "}bar`",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 262,
    "end": 266,
    "range": [
      262,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "T06",
    "start": 267,
    "end": 270,
    "range": [
      267,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 273,
    "end": 280,
    "range": [
      273,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 337,
    "end": 340,
    "range": [
      337,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 343,
    "end": 350,
    "range": [
      343,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 362,
    "end": 366,
    "range": [
      362,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 373,
    "end": 380,
    "range": [
      373,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 386,
    "end": 392,
    "range": [
      386,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 443,
    "end": 447,
    "range": [
      443,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 448,
    "end": 451,
    "range": [
      448,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 457,
    "end": 464,
    "range": [
      457,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 465,
    "end": 472,
    "range": [
      465,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 478,
    "end": 482,
    "range": [
      478,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 483,
    "end": 486,
    "range": [
      483,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
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
    "value": ">",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 492,
    "end": 499,
    "range": [
      492,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 500,
    "end": 507,
    "range": [
      500,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 513,
    "end": 519,
    "range": [
      513,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 522,
    "end": 526,
    "range": [
      522,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 544,
    "end": 551,
    "range": [
      544,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 627,
    "end": 631,
    "range": [
      627,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 632,
    "end": 635,
    "range": [
      632,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 644,
    "end": 651,
    "range": [
      644,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 657,
    "end": 663,
    "range": [
      657,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 668,
    "end": 674,
    "range": [
      668,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 679,
    "end": 683,
    "range": [
      679,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 684,
    "end": 687,
    "range": [
      684,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 693,
    "end": 698,
    "range": [
      693,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 699,
    "end": 706,
    "range": [
      699,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 711,
    "end": 715,
    "range": [
      711,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 716,
    "end": 719,
    "range": [
      716,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 727,
    "end": 729,
    "range": [
      727,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 730,
    "end": 735,
    "range": [
      730,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 736,
    "end": 743,
    "range": [
      736,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 749,
    "end": 755,
    "range": [
      749,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 760,
    "end": 766,
    "range": [
      760,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 778,
    "end": 785,
    "range": [
      778,
      785
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 786,
    "end": 794,
    "range": [
      786,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 795,
    "end": 799,
    "range": [
      795,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 802,
    "end": 809,
    "range": [
      802,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 810,
    "end": 816,
    "range": [
      810,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 827,
    "end": 834,
    "range": [
      827,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 840,
    "end": 844,
    "range": [
      840,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 845,
    "end": 852,
    "range": [
      845,
      852
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 853,
    "end": 861,
    "range": [
      853,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 862,
    "end": 866,
    "range": [
      862,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 869,
    "end": 876,
    "range": [
      869,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 877,
    "end": 883,
    "range": [
      877,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 894,
    "end": 901,
    "range": [
      894,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 909,
    "end": 913,
    "range": [
      909,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 914,
    "end": 921,
    "range": [
      914,
      921
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 922,
    "end": 930,
    "range": [
      922,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 931,
    "end": 935,
    "range": [
      931,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 938,
    "end": 945,
    "range": [
      938,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 963,
    "end": 970,
    "range": [
      963,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 978,
    "end": 982,
    "range": [
      978,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 983,
    "end": 990,
    "range": [
      983,
      990
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 991,
    "end": 999,
    "range": [
      991,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1000,
    "end": 1004,
    "range": [
      1000,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1007,
    "end": 1014,
    "range": [
      1007,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1015,
    "end": 1021,
    "range": [
      1015,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1037,
    "end": 1044,
    "range": [
      1037,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1052,
    "end": 1056,
    "range": [
      1052,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1057,
    "end": 1064,
    "range": [
      1057,
      1064
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1065,
    "end": 1073,
    "range": [
      1065,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1074,
    "end": 1078,
    "range": [
      1074,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1081,
    "end": 1088,
    "range": [
      1081,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1089,
    "end": 1095,
    "range": [
      1089,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1106,
    "end": 1113,
    "range": [
      1106,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1126,
    "end": 1130,
    "range": [
      1126,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1132,
    "end": 1136,
    "range": [
      1132,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1137,
    "end": 1142,
    "range": [
      1137,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1144,
    "end": 1149,
    "range": [
      1144,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1157,
    "end": 1161,
    "range": [
      1157,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1162,
    "end": 1167,
    "range": [
      1162,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1169,
    "end": 1174,
    "range": [
      1169,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1185,
    "end": 1189,
    "range": [
      1185,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1190,
    "end": 1195,
    "range": [
      1190,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1198,
    "end": 1203,
    "range": [
      1198,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1215,
    "end": 1219,
    "range": [
      1215,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1220,
    "end": 1225,
    "range": [
      1220,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1228,
    "end": 1233,
    "range": [
      1228,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1245,
    "end": 1249,
    "range": [
      1245,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1250,
    "end": 1255,
    "range": [
      1250,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1262,
    "end": 1267,
    "range": [
      1262,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1285,
    "end": 1290,
    "range": [
      1285,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1297,
    "end": 1302,
    "range": [
      1297,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1316,
    "end": 1323,
    "range": [
      1316,
      1323
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1324,
    "end": 1329,
    "range": [
      1324,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1330,
    "end": 1336,
    "range": [
      1330,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "move",
    "start": 1339,
    "end": 1343,
    "range": [
      1339,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1347,
    "end": 1351,
    "range": [
      1347,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1354,
    "end": 1361,
    "range": [
      1354,
      1361
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1362,
    "end": 1367,
    "range": [
      1362,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1368,
    "end": 1371,
    "range": [
      1368,
      1371
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1372,
    "end": 1379,
    "range": [
      1372,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1380,
    "end": 1386,
    "range": [
      1380,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "woof",
    "start": 1389,
    "end": 1393,
    "range": [
      1389,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1397,
    "end": 1401,
    "range": [
      1397,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1404,
    "end": 1411,
    "range": [
      1404,
      1411
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1412,
    "end": 1420,
    "range": [
      1412,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1421,
    "end": 1432,
    "range": [
      1421,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1436,
    "end": 1441,
    "range": [
      1436,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "getDefault",
    "start": 1446,
    "end": 1456,
    "range": [
      1446,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1461,
    "end": 1463,
    "range": [
      1461,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1464,
    "end": 1471,
    "range": [
      1464,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1477,
    "end": 1481,
    "range": [
      1477,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1484,
    "end": 1495,
    "range": [
      1484,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1496,
    "end": 1499,
    "range": [
      1496,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1500,
    "end": 1506,
    "range": [
      1500,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1513,
    "end": 1515,
    "range": [
      1513,
      1515
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1516,
    "end": 1519,
    "range": [
      1516,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1520,
    "end": 1526,
    "range": [
      1520,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1537,
    "end": 1548,
    "range": [
      1537,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1549,
    "end": 1552,
    "range": [
      1549,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1553,
    "end": 1559,
    "range": [
      1553,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1566,
    "end": 1568,
    "range": [
      1566,
      1568
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1569,
    "end": 1572,
    "range": [
      1569,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1573,
    "end": 1576,
    "range": [
      1573,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 1587,
    "end": 1598,
    "range": [
      1587,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1599,
    "end": 1602,
    "range": [
      1599,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1603,
    "end": 1606,
    "range": [
      1603,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1613,
    "end": 1615,
    "range": [
      1613,
      1615
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1616,
    "end": 1619,
    "range": [
      1616,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 1620,
    "end": 1626,
    "range": [
      1620,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1641,
    "end": 1648,
    "range": [
      1641,
      1648
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1649,
    "end": 1657,
    "range": [
      1649,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "assertEqual",
    "start": 1658,
    "end": 1669,
    "range": [
      1658,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "actual",
    "start": 1673,
    "end": 1679,
    "range": [
      1673,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 1684,
    "end": 1692,
    "range": [
      1684,
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
    "value": "NoInfer",
    "start": 1694,
    "end": 1701,
    "range": [
      1694,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1707,
    "end": 1714,
    "range": [
      1707,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "assertEqual",
    "start": 1717,
    "end": 1728,
    "range": [
      1717,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1756,
    "end": 1761,
    "range": [
      1756,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "assertEqual",
    "start": 1782,
    "end": 1793,
    "range": [
      1782,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1818,
    "end": 1825,
    "range": [
      1818,
      1825
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1826,
    "end": 1834,
    "range": [
      1826,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 1835,
    "end": 1841,
    "range": [
      1835,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1848,
    "end": 1852,
    "range": [
      1848,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1855,
    "end": 1860,
    "range": [
      1855,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1865,
    "end": 1867,
    "range": [
      1865,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1871,
    "end": 1876,
    "range": [
      1871,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1878,
    "end": 1885,
    "range": [
      1878,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1894,
    "end": 1901,
    "range": [
      1894,
      1901
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1902,
    "end": 1910,
    "range": [
      1902,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1911,
    "end": 1915,
    "range": [
      1911,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1916,
    "end": 1921,
    "range": [
      1916,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1928,
    "end": 1934,
    "range": [
      1928,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1940,
    "end": 1946,
    "range": [
      1940,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 1949,
    "end": 1955,
    "range": [
      1949,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1956,
    "end": 1960,
    "range": [
      1956,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1988,
    "end": 1992,
    "range": [
      1988,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2020,
    "end": 2024,
    "range": [
      2020,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2025,
    "end": 2034,
    "range": [
      2025,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2035,
    "end": 2040,
    "range": [
      2035,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2046,
    "end": 2051,
    "range": [
      2046,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2053,
    "end": 2058,
    "range": [
      2053,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2063,
    "end": 2070,
    "range": [
      2063,
      2070
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2071,
    "end": 2079,
    "range": [
      2071,
      2079
    ]
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2080,
    "end": 2086,
    "range": [
      2080,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2087,
    "end": 2092,
    "range": [
      2087,
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
    "value": "(",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2094,
    "end": 2103,
    "range": [
      2094,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2105,
    "end": 2114,
    "range": [
      2105,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2115,
    "end": 2120,
    "range": [
      2115,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2123,
    "end": 2128,
    "range": [
      2123,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2130,
    "end": 2137,
    "range": [
      2130,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2138,
    "end": 2143,
    "range": [
      2138,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2147,
    "end": 2151,
    "range": [
      2147,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2153,
    "end": 2160,
    "range": [
      2153,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2161,
    "end": 2166,
    "range": [
      2161,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 2167,
    "end": 2171,
    "range": [
      2167,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 2173,
    "end": 2182,
    "range": [
      2173,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2185,
    "end": 2188,
    "range": [
      2185,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2190,
    "end": 2196,
    "range": [
      2190,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2202,
    "end": 2208,
    "range": [
      2202,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 2209,
    "end": 2213,
    "range": [
      2209,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2217,
    "end": 2220,
    "range": [
      2217,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2222,
    "end": 2224,
    "range": [
      2222,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "doWork",
    "start": 2235,
    "end": 2241,
    "range": [
      2235,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 2242,
    "end": 2246,
    "range": [
      2242,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2263,
    "end": 2270,
    "range": [
      2263,
      2270
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2271,
    "end": 2279,
    "range": [
      2271,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "mutate",
    "start": 2280,
    "end": 2286,
    "range": [
      2280,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2290,
    "end": 2298,
    "range": [
      2290,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2304,
    "end": 2311,
    "range": [
      2304,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2319,
    "end": 2325,
    "range": [
      2319,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2327,
    "end": 2329,
    "range": [
      2327,
      2329
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2337,
    "end": 2342,
    "range": [
      2337,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "mutate1",
    "start": 2343,
    "end": 2350,
    "range": [
      2343,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "mutate",
    "start": 2353,
    "end": 2359,
    "range": [
      2353,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2360,
    "end": 2361,
    "range": [
      2360,
      2361
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2361,
    "end": 2362,
    "range": [
      2361,
      2362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2367,
    "end": 2369,
    "range": [
      2367,
      2369
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2375,
    "end": 2382,
    "range": [
      2375,
      2382
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2383,
    "end": 2388,
    "range": [
      2383,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "ExampleClass",
    "start": 2389,
    "end": 2401,
    "range": [
      2389,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2408,
    "end": 2413,
    "range": [
      2408,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "OkClass",
    "start": 2414,
    "end": 2421,
    "range": [
      2414,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2431,
    "end": 2442,
    "range": [
      2431,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2443,
    "end": 2450,
    "range": [
      2443,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "clazz",
    "start": 2451,
    "end": 2456,
    "range": [
      2451,
      2456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2456,
    "end": 2457,
    "range": [
      2456,
      2457
    ]
  },
  {
    "type": "Identifier",
    "value": "ExampleClass",
    "start": 2458,
    "end": 2470,
    "range": [
      2458,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2475,
    "end": 2482,
    "range": [
      2475,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 2483,
    "end": 2489,
    "range": [
      2483,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2491,
    "end": 2498,
    "range": [
      2491,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2511,
    "end": 2514,
    "range": [
      2511,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2515,
    "end": 2520,
    "range": [
      2515,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2536,
    "end": 2542,
    "range": [
      2536,
      2542
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2543,
    "end": 2547,
    "range": [
      2543,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 2548,
    "end": 2554,
    "range": [
      2548,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2570,
    "end": 2575,
    "range": [
      2570,
      2575
    ]
  },
  {
    "type": "Identifier",
    "value": "OkClass2",
    "start": 2576,
    "end": 2584,
    "range": [
      2576,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2594,
    "end": 2605,
    "range": [
      2594,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2605,
    "end": 2606,
    "range": [
      2605,
      2606
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2606,
    "end": 2613,
    "range": [
      2606,
      2613
    ]
  },
  {
    "type": "Identifier",
    "value": "clazz",
    "start": 2614,
    "end": 2619,
    "range": [
      2614,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "ExampleClass",
    "start": 2621,
    "end": 2633,
    "range": [
      2621,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2635,
    "end": 2636,
    "range": [
      2635,
      2636
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2638,
    "end": 2644,
    "range": [
      2638,
      2644
    ]
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 2645,
    "end": 2651,
    "range": [
      2645,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 2653,
    "end": 2660,
    "range": [
      2653,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  }
]
```
