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
        "name": "ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 74
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 89,
                      "end": 95
                    },
                    "start": 89,
                    "end": 95
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 98,
                      "end": 105
                    },
                    "start": 98,
                    "end": 105
                  }
                ],
                "start": 89,
                "end": 105
              },
              "start": 87,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 106
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 117,
                "end": 120
              },
              "start": 115,
              "end": 120
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 121
          }
        ],
        "start": 75,
        "end": 123
      },
      "declare": false,
      "start": 57,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodString",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 144
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 160
          },
          "typeArguments": null,
          "start": 153,
          "end": 160
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 175,
                  "end": 182
                },
                "start": 175,
                "end": 182
              },
              "start": 173,
              "end": 182
            },
            "accessibility": null,
            "static": false,
            "start": 165,
            "end": 183
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 194,
                "end": 200
              },
              "start": 192,
              "end": 200
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 201
          }
        ],
        "start": 161,
        "end": 203
      },
      "declare": false,
      "start": 125,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 218
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 227
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 228,
              "end": 234
            },
            {
              "type": "TSAnyKeyword",
              "start": 236,
              "end": 239
            }
          ],
          "start": 227,
          "end": 240
        },
        "start": 221,
        "end": 240
      },
      "declare": false,
      "start": 205,
      "end": 241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prettify",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 255
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
              "start": 256,
              "end": 257
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 257
          }
        ],
        "start": 255,
        "end": 258
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
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
                  "start": 275,
                  "end": 276
                },
                "typeArguments": null,
                "start": 275,
                "end": 276
              },
              "start": 269,
              "end": 276
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
                  "start": 279,
                  "end": 280
                },
                "typeArguments": null,
                "start": 279,
                "end": 280
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "typeArguments": null,
                "start": 281,
                "end": 282
              },
              "start": 279,
              "end": 283
            },
            "optional": false,
            "readonly": null,
            "start": 261,
            "end": 285
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 288,
            "end": 290
          }
        ],
        "start": 261,
        "end": 290
      },
      "declare": false,
      "start": 242,
      "end": 291
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 312
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
              "start": 313,
              "end": 318
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 335
              },
              "typeArguments": null,
              "start": 327,
              "end": 335
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 335
          }
        ],
        "start": 312,
        "end": 336
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 347
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 358,
                    "end": 359
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
                        "start": 369,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 374
                    },
                    "start": 363,
                    "end": 374
                  },
                  "nameType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 383
                        },
                        "typeArguments": null,
                        "start": 378,
                        "end": 383
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        },
                        "typeArguments": null,
                        "start": 384,
                        "end": 385
                      },
                      "start": 378,
                      "end": 386
                    },
                    "extendsType": {
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 397,
                            "end": 405
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 407,
                                "end": 413
                              },
                              "start": 407,
                              "end": 413
                            },
                            "start": 405,
                            "end": 413
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 397,
                          "end": 413
                        }
                      ],
                      "start": 395,
                      "end": 415
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 425
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 425
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 434,
                      "end": 439
                    },
                    "start": 378,
                    "end": 439
                  },
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
                          "start": 443,
                          "end": 448
                        },
                        "typeArguments": null,
                        "start": 443,
                        "end": 448
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 450
                        },
                        "typeArguments": null,
                        "start": 449,
                        "end": 450
                      },
                      "start": 443,
                      "end": 451
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 452,
                        "end": 460
                      },
                      "start": 452,
                      "end": 460
                    },
                    "start": 443,
                    "end": 461
                  },
                  "optional": true,
                  "readonly": null,
                  "start": 351,
                  "end": 466
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 477
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
                        "start": 487,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 487,
                      "end": 492
                    },
                    "start": 481,
                    "end": 492
                  },
                  "nameType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 496,
                          "end": 501
                        },
                        "typeArguments": null,
                        "start": 496,
                        "end": 501
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 502,
                          "end": 503
                        },
                        "typeArguments": null,
                        "start": 502,
                        "end": 503
                      },
                      "start": 496,
                      "end": 504
                    },
                    "extendsType": {
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 523
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 525,
                                "end": 531
                              },
                              "start": 525,
                              "end": 531
                            },
                            "start": 523,
                            "end": 531
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 515,
                          "end": 531
                        }
                      ],
                      "start": 513,
                      "end": 533
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 542,
                      "end": 547
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 557
                      },
                      "typeArguments": null,
                      "start": 556,
                      "end": 557
                    },
                    "start": 496,
                    "end": 557
                  },
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
                          "start": 560,
                          "end": 565
                        },
                        "typeArguments": null,
                        "start": 560,
                        "end": 565
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 566,
                          "end": 567
                        },
                        "typeArguments": null,
                        "start": 566,
                        "end": 567
                      },
                      "start": 560,
                      "end": 568
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 569,
                        "end": 577
                      },
                      "start": 569,
                      "end": 577
                    },
                    "start": 560,
                    "end": 578
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 469,
                  "end": 583
                }
              ],
              "start": 351,
              "end": 583
            }
          ],
          "start": 347,
          "end": 585
        },
        "start": 339,
        "end": 585
      },
      "declare": false,
      "start": 292,
      "end": 586
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 606
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
              "start": 607,
              "end": 608
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 625
              },
              "typeArguments": null,
              "start": 617,
              "end": 625
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 607,
            "end": 625
          }
        ],
        "start": 606,
        "end": 626
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 642
          },
          "typeArguments": null,
          "start": 635,
          "end": 642
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 655
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 657,
                  "end": 664
                },
                "start": 657,
                "end": 664
              },
              "start": 655,
              "end": 664
            },
            "accessibility": null,
            "static": false,
            "start": 647,
            "end": 665
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 668,
              "end": 674
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferObjectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 691
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
                        "start": 692,
                        "end": 693
                      },
                      "typeArguments": null,
                      "start": 692,
                      "end": 693
                    }
                  ],
                  "start": 691,
                  "end": 694
                },
                "start": 676,
                "end": 694
              },
              "start": 674,
              "end": 694
            },
            "accessibility": null,
            "static": false,
            "start": 668,
            "end": 695
          }
        ],
        "start": 643,
        "end": 697
      },
      "declare": false,
      "start": 587,
      "end": 697
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 720
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
              "start": 721,
              "end": 722
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 738
              },
              "typeArguments": null,
              "start": 731,
              "end": 738
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 721,
            "end": 738
          }
        ],
        "start": 720,
        "end": 739
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 755
          },
          "typeArguments": null,
          "start": 748,
          "end": 755
        }
      ],
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 768
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "\"true\"",
                  "start": 770,
                  "end": 776
                },
                "start": 770,
                "end": 776
              },
              "start": 768,
              "end": 776
            },
            "accessibility": null,
            "static": false,
            "start": 760,
            "end": 777
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 786
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                        "start": 788,
                        "end": 789
                      },
                      "typeArguments": null,
                      "start": 788,
                      "end": 789
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 790,
                        "end": 798
                      },
                      "start": 790,
                      "end": 798
                    },
                    "start": 788,
                    "end": 799
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 802,
                    "end": 811
                  }
                ],
                "start": 788,
                "end": 811
              },
              "start": 786,
              "end": 811
            },
            "accessibility": null,
            "static": false,
            "start": 780,
            "end": 812
          }
        ],
        "start": 756,
        "end": 814
      },
      "declare": false,
      "start": 699,
      "end": 814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 839
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
              "start": 840,
              "end": 841
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 858
              },
              "typeArguments": null,
              "start": 850,
              "end": 858
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 840,
            "end": 858
          }
        ],
        "start": 839,
        "end": 859
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
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
                "start": 867,
                "end": 868
              },
              "typeArguments": null,
              "start": 867,
              "end": 868
            },
            "start": 865,
            "end": 868
          },
          "start": 860,
          "end": 868
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 871,
            "end": 880
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
                  "start": 881,
                  "end": 882
                },
                "typeArguments": null,
                "start": 881,
                "end": 882
              }
            ],
            "start": 880,
            "end": 883
          },
          "start": 871,
          "end": 883
        },
        "start": 869,
        "end": 883
      },
      "body": null,
      "expression": false,
      "start": 816,
      "end": 884
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 908
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodString",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 921
          },
          "typeArguments": null,
          "start": 912,
          "end": 921
        },
        "start": 910,
        "end": 921
      },
      "body": null,
      "expression": false,
      "start": 885,
      "end": 922
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 948
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
              "start": 949,
              "end": 950
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 966
              },
              "typeArguments": null,
              "start": 959,
              "end": 966
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 949,
            "end": 966
          }
        ],
        "start": 948,
        "end": 967
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "schema",
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
                "start": 976,
                "end": 977
              },
              "typeArguments": null,
              "start": 976,
              "end": 977
            },
            "start": 974,
            "end": 977
          },
          "start": 968,
          "end": 977
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 991
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
                  "start": 992,
                  "end": 993
                },
                "typeArguments": null,
                "start": 992,
                "end": 993
              }
            ],
            "start": 991,
            "end": 994
          },
          "start": 980,
          "end": 994
        },
        "start": 978,
        "end": 994
      },
      "body": null,
      "expression": false,
      "start": 923,
      "end": 995
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
            "name": "Category",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1011
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1020
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1025,
                      "end": 1029
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1037
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1031,
                      "end": 1039
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1025,
                    "end": 1039
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1053
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
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "optional",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1069,
                                "end": 1077
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Category",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1078,
                                  "end": 1086
                                }
                              ],
                              "optional": false,
                              "start": 1069,
                              "end": 1087
                            },
                            "start": 1062,
                            "end": 1088
                          }
                        ],
                        "start": 1056,
                        "end": 1092
                      },
                      "expression": false,
                      "start": 1053,
                      "end": 1092
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1043,
                    "end": 1092
                  }
                ],
                "start": 1021,
                "end": 1095
              }
            ],
            "optional": false,
            "start": 1014,
            "end": 1096
          },
          "definite": false,
          "start": 1003,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 997,
      "end": 1097
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1097
}
```
