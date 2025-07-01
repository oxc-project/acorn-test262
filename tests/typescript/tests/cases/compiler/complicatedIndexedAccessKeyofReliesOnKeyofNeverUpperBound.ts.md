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
        "name": "TextChannel",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 39
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "text",
                  "raw": "'text'",
                  "start": 50,
                  "end": 56
                },
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 44,
            "end": 57
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "phoneNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 82
          }
        ],
        "start": 22,
        "end": 84
      },
      "declare": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmailChannel",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 108
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 126
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "email",
                  "raw": "'email'",
                  "start": 137,
                  "end": 144
                },
                "start": 137,
                "end": 144
              },
              "start": 135,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 145
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addres",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 165
          }
        ],
        "start": 109,
        "end": 167
      },
      "declare": false,
      "start": 86,
      "end": 167
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Channel",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 181
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TextChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 195
            },
            "typeArguments": null,
            "start": 184,
            "end": 195
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmailChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 210
            },
            "typeArguments": null,
            "start": 198,
            "end": 210
          }
        ],
        "start": 184,
        "end": 210
      },
      "declare": false,
      "start": 169,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ChannelType",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 236
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Channel",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 246
            },
            "typeArguments": null,
            "start": 239,
            "end": 246
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 261
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 270
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 269,
                      "end": 270
                    },
                    "start": 263,
                    "end": 270
                  },
                  "start": 261,
                  "end": 270
                },
                "accessibility": null,
                "static": false,
                "start": 257,
                "end": 270
              }
            ],
            "start": 255,
            "end": 272
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "typeArguments": null,
            "start": 275,
            "end": 276
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 279,
            "end": 284
          },
          "start": 239,
          "end": 284
        },
        "declare": false,
        "start": 220,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 213,
      "end": 285
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 296
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
              "start": 297,
              "end": 298
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 297,
            "end": 298
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
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
                  "start": 316,
                  "end": 317
                },
                "typeArguments": null,
                "start": 316,
                "end": 317
              },
              "start": 310,
              "end": 317
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 300,
            "end": 317
          }
        ],
        "start": 296,
        "end": 318
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 325
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
                "start": 331,
                "end": 332
              },
              "typeArguments": null,
              "start": 331,
              "end": 332
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
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
                          "start": 353,
                          "end": 354
                        },
                        "typeArguments": null,
                        "start": 353,
                        "end": 354
                      },
                      "start": 347,
                      "end": 354
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 358
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 339,
                    "end": 360
                  },
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 367
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      "typeArguments": null,
                      "start": 371,
                      "end": 372
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 375,
                      "end": 380
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 363,
                    "end": 382
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
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
                            "type": "TSNeverKeyword",
                            "start": 400,
                            "end": 405
                          },
                          "start": 398,
                          "end": 405
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 387,
                        "end": 405
                      }
                    ],
                    "start": 385,
                    "end": 407
                  }
                ],
                "start": 339,
                "end": 407
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
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "start": 409,
                "end": 416
              },
              "start": 338,
              "end": 417
            }
          ],
          "start": 325,
          "end": 419
        },
        "start": 321,
        "end": 419
      },
      "declare": false,
      "start": 287,
      "end": 420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChannelOfType",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ChannelType",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 462
              },
              "typeArguments": null,
              "start": 451,
              "end": 462
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 441,
            "end": 462
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Channel",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 475
              },
              "typeArguments": null,
              "start": 468,
              "end": 475
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 475
          }
        ],
        "start": 440,
        "end": 476
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 480
          },
          "typeArguments": null,
          "start": 479,
          "end": 480
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 495
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
                    "start": 497,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 497,
                  "end": 498
                },
                "start": 495,
                "end": 498
              },
              "accessibility": null,
              "static": false,
              "start": 491,
              "end": 498
            }
          ],
          "start": 489,
          "end": 500
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "typeArguments": null,
          "start": 507,
          "end": 508
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 515,
          "end": 520
        },
        "start": 479,
        "end": 520
      },
      "declare": false,
      "start": 422,
      "end": 521
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewChannel",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 546
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
                "start": 547,
                "end": 548
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Channel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 564
                },
                "typeArguments": null,
                "start": 557,
                "end": 564
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 547,
              "end": 564
            }
          ],
          "start": 546,
          "end": 565
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
                "start": 568,
                "end": 572
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
                      "start": 573,
                      "end": 574
                    },
                    "typeArguments": null,
                    "start": 573,
                    "end": 574
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "type",
                      "raw": "'type'",
                      "start": 576,
                      "end": 582
                    },
                    "start": 576,
                    "end": 582
                  }
                ],
                "start": 572,
                "end": 583
              },
              "start": 568,
              "end": 583
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 597
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Omit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 598,
                      "end": 602
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
                            "start": 603,
                            "end": 604
                          },
                          "typeArguments": null,
                          "start": 603,
                          "end": 604
                        },
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "type",
                                "raw": "'type'",
                                "start": 606,
                                "end": 612
                              },
                              "start": 606,
                              "end": 612
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "id",
                                "raw": "'id'",
                                "start": 615,
                                "end": 619
                              },
                              "start": 615,
                              "end": 619
                            }
                          ],
                          "start": 606,
                          "end": 619
                        }
                      ],
                      "start": 602,
                      "end": 620
                    },
                    "start": 598,
                    "end": 620
                  }
                ],
                "start": 597,
                "end": 621
              },
              "start": 590,
              "end": 621
            },
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
                    "name": "localChannelId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 640
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 642,
                      "end": 648
                    },
                    "start": 640,
                    "end": 648
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 626,
                  "end": 648
                }
              ],
              "start": 624,
              "end": 650
            }
          ],
          "start": 568,
          "end": 650
        },
        "declare": false,
        "start": 531,
        "end": 651
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 524,
      "end": 651
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeNewChannel",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 684
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 685,
                "end": 686
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ChannelType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 706
                },
                "typeArguments": null,
                "start": 695,
                "end": 706
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 685,
              "end": 706
            }
          ],
          "start": 684,
          "end": 707
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
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
                  "start": 714,
                  "end": 715
                },
                "typeArguments": null,
                "start": 714,
                "end": 715
              },
              "start": 712,
              "end": 715
            },
            "start": 708,
            "end": 715
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NewChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 728
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ChannelOfType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 742
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
                          "start": 743,
                          "end": 744
                        },
                        "typeArguments": null,
                        "start": 743,
                        "end": 744
                      }
                    ],
                    "start": 742,
                    "end": 745
                  },
                  "start": 729,
                  "end": 745
                }
              ],
              "start": 728,
              "end": 746
            },
            "start": 718,
            "end": 746
          },
          "start": 716,
          "end": 746
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "localChannelId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 773
                  },
                  "init": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "blahblahblah",
                          "cooked": "blahblahblah"
                        },
                        "tail": true,
                        "start": 776,
                        "end": 790
                      }
                    ],
                    "expressions": [],
                    "start": 776,
                    "end": 790
                  },
                  "definite": false,
                  "start": 759,
                  "end": 790
                }
              ],
              "declare": false,
              "start": 753,
              "end": 791
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 809
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 809
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 805,
                    "end": 809
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localChannelId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 825
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localChannelId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 825
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 811,
                    "end": 825
                  }
                ],
                "start": 803,
                "end": 827
              },
              "start": 796,
              "end": 828
            }
          ],
          "start": 747,
          "end": 830
        },
        "expression": false,
        "start": 661,
        "end": 830
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 654,
      "end": 830
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
            "name": "newTextChannel",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 852
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeNewChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 855,
              "end": 869
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "text",
                "raw": "'text'",
                "start": 870,
                "end": 876
              }
            ],
            "optional": false,
            "start": 855,
            "end": 877
          },
          "definite": false,
          "start": 838,
          "end": 877
        }
      ],
      "declare": false,
      "start": 832,
      "end": 878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "newTextChannel",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 913
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "phoneNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 914,
            "end": 925
          },
          "optional": false,
          "computed": false,
          "start": 899,
          "end": 925
        },
        "right": {
          "type": "Literal",
          "value": "613-555-1234",
          "raw": "'613-555-1234'",
          "start": 928,
          "end": 942
        },
        "start": 899,
        "end": 942
      },
      "directive": null,
      "start": 899,
      "end": 943
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
            "name": "newTextChannel2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NewChannel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 979
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TextChannel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 991
                      },
                      "typeArguments": null,
                      "start": 980,
                      "end": 991
                    }
                  ],
                  "start": 979,
                  "end": 992
                },
                "start": 969,
                "end": 992
              },
              "start": 967,
              "end": 992
            },
            "start": 951,
            "end": 992
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeNewChannel",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 1009
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "text",
                "raw": "'text'",
                "start": 1010,
                "end": 1016
              }
            ],
            "optional": false,
            "start": 995,
            "end": 1017
          },
          "definite": false,
          "start": 951,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 945,
      "end": 1018
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "newTextChannel2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1058,
            "end": 1073
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "phoneNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1074,
            "end": 1085
          },
          "optional": false,
          "computed": false,
          "start": 1058,
          "end": 1085
        },
        "right": {
          "type": "Literal",
          "value": "613-555-1234",
          "raw": "'613-555-1234'",
          "start": 1088,
          "end": 1102
        },
        "start": 1058,
        "end": 1102
      },
      "directive": null,
      "start": 1058,
      "end": 1103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1103
}
```
