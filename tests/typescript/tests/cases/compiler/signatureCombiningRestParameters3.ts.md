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
        "name": "ExtensionConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 33
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 39
          }
        ],
        "start": 25,
        "end": 40
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 99,
                                  "end": 103
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 105,
                                    "end": 111
                                  },
                                  "start": 103,
                                  "end": 111
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 99,
                                "end": 112
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 123,
                                  "end": 130
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 132,
                                      "end": 139
                                    },
                                    "typeArguments": null,
                                    "start": 132,
                                    "end": 139
                                  },
                                  "start": 130,
                                  "end": 139
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 123,
                                "end": 140
                              }
                            ],
                            "start": 87,
                            "end": 150
                          },
                          "start": 85,
                          "end": 150
                        },
                        "start": 81,
                        "end": 150
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 175
                            },
                            "typeArguments": null,
                            "start": 171,
                            "end": 175
                          },
                          "start": 169,
                          "end": 175
                        },
                        "start": 160,
                        "end": 175
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 194
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 195,
                              "end": 201
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 203,
                              "end": 206
                            }
                          ],
                          "start": 194,
                          "end": 207
                        },
                        "start": 188,
                        "end": 207
                      },
                      "start": 185,
                      "end": 207
                    },
                    "start": 71,
                    "end": 207
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 215,
                    "end": 219
                  }
                ],
                "start": 68,
                "end": 219
              },
              "start": 62,
              "end": 219
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 220
          }
        ],
        "start": 41,
        "end": 222
      },
      "declare": false,
      "start": 0,
      "end": 222
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extension",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
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
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 255
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 258,
              "end": 261
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 261
          }
        ],
        "start": 247,
        "end": 262
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 273,
                "end": 279
              },
              "start": 271,
              "end": 279
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 267,
            "end": 280
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 283,
            "end": 296
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 305
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extension",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 316
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 319,
                    "end": 323
                  }
                ],
                "start": 307,
                "end": 323
              },
              "start": 305,
              "end": 323
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 299,
            "end": 324
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 332
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extension",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 334,
                    "end": 343
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 346,
                    "end": 350
                  }
                ],
                "start": 334,
                "end": 350
              },
              "start": 332,
              "end": 350
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 327,
            "end": 351
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 361
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 370
                },
                "typeArguments": null,
                "start": 363,
                "end": 370
              },
              "start": 361,
              "end": 370
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 354,
            "end": 371
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 380
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtensionConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 397
                },
                "typeArguments": null,
                "start": 382,
                "end": 397
              },
              "start": 380,
              "end": 397
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 374,
            "end": 398
          }
        ],
        "start": 263,
        "end": 400
      },
      "abstract": false,
      "declare": true,
      "start": 224,
      "end": 400
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 420
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 428
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 431,
              "end": 434
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 434
          }
        ],
        "start": 420,
        "end": 435
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 440,
            "end": 453
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 460
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 462,
                "end": 468
              },
              "start": 460,
              "end": 468
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 456,
            "end": 469
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 478
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 484
                    },
                    "typeArguments": null,
                    "start": 480,
                    "end": 484
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 487,
                    "end": 491
                  }
                ],
                "start": 480,
                "end": 491
              },
              "start": 478,
              "end": 491
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 472,
            "end": 492
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 500
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 506
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 506
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 509,
                    "end": 513
                  }
                ],
                "start": 502,
                "end": 513
              },
              "start": 500,
              "end": 513
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 495,
            "end": 514
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 524
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 533
                },
                "typeArguments": null,
                "start": 526,
                "end": 533
              },
              "start": 524,
              "end": 533
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 517,
            "end": 534
          }
        ],
        "start": 436,
        "end": 536
      },
      "abstract": false,
      "declare": true,
      "start": 402,
      "end": 536
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 558
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 566
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 569,
              "end": 572
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 559,
            "end": 572
          }
        ],
        "start": 558,
        "end": 573
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 632,
                                  "end": 636
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 638,
                                    "end": 644
                                  },
                                  "start": 636,
                                  "end": 644
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 632,
                                "end": 645
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 663
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 665,
                                      "end": 672
                                    },
                                    "typeArguments": null,
                                    "start": 665,
                                    "end": 672
                                  },
                                  "start": 663,
                                  "end": 672
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 656,
                                "end": 673
                              }
                            ],
                            "start": 620,
                            "end": 683
                          },
                          "start": 618,
                          "end": 683
                        },
                        "start": 614,
                        "end": 683
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 704,
                              "end": 708
                            },
                            "typeArguments": null,
                            "start": 704,
                            "end": 708
                          },
                          "start": 702,
                          "end": 708
                        },
                        "start": 693,
                        "end": 708
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 721,
                          "end": 727
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 728,
                              "end": 734
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 736,
                              "end": 739
                            }
                          ],
                          "start": 727,
                          "end": 740
                        },
                        "start": 721,
                        "end": 740
                      },
                      "start": 718,
                      "end": 740
                    },
                    "start": 604,
                    "end": 740
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 748,
                    "end": 752
                  }
                ],
                "start": 601,
                "end": 752
              },
              "start": 595,
              "end": 752
            },
            "accessibility": null,
            "static": false,
            "start": 578,
            "end": 753
          }
        ],
        "start": 574,
        "end": 755
      },
      "declare": false,
      "start": 538,
      "end": 755
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mark",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 775
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 783
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 786,
              "end": 789
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 776,
            "end": 789
          }
        ],
        "start": 775,
        "end": 790
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
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 802
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 811
                },
                "typeArguments": null,
                "start": 804,
                "end": 811
              },
              "start": 802,
              "end": 811
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 795,
            "end": 812
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 821
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MarkConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 823,
                  "end": 833
                },
                "typeArguments": null,
                "start": 823,
                "end": 833
              },
              "start": 821,
              "end": 833
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 815,
            "end": 834
          }
        ],
        "start": 791,
        "end": 836
      },
      "abstract": false,
      "declare": true,
      "start": 757,
      "end": 836
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MarkConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 858
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 866
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 869,
              "end": 872
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 859,
            "end": 872
          }
        ],
        "start": 858,
        "end": 873
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 894
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 932,
                                  "end": 936
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 938,
                                    "end": 944
                                  },
                                  "start": 936,
                                  "end": 944
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 932,
                                "end": 945
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 956,
                                  "end": 963
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 965,
                                      "end": 972
                                    },
                                    "typeArguments": null,
                                    "start": 965,
                                    "end": 972
                                  },
                                  "start": 963,
                                  "end": 972
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 956,
                                "end": 973
                              }
                            ],
                            "start": 920,
                            "end": 983
                          },
                          "start": 918,
                          "end": 983
                        },
                        "start": 914,
                        "end": 983
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1004,
                              "end": 1008
                            },
                            "typeArguments": null,
                            "start": 1004,
                            "end": 1008
                          },
                          "start": 1002,
                          "end": 1008
                        },
                        "start": 993,
                        "end": 1008
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1021,
                          "end": 1027
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1028,
                              "end": 1034
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 1036,
                              "end": 1039
                            }
                          ],
                          "start": 1027,
                          "end": 1040
                        },
                        "start": 1021,
                        "end": 1040
                      },
                      "start": 1018,
                      "end": 1040
                    },
                    "start": 904,
                    "end": 1040
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1048,
                    "end": 1052
                  }
                ],
                "start": 901,
                "end": 1052
              },
              "start": 895,
              "end": 1052
            },
            "accessibility": null,
            "static": false,
            "start": 878,
            "end": 1053
          }
        ],
        "start": 874,
        "end": 1055
      },
      "declare": false,
      "start": 838,
      "end": 1055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1071
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
              "name": "ExtensionConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1089
            },
            "typeArguments": null,
            "start": 1074,
            "end": 1089
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NodeConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1092,
              "end": 1102
            },
            "typeArguments": null,
            "start": 1092,
            "end": 1102
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MarkConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1105,
              "end": 1115
            },
            "typeArguments": null,
            "start": 1105,
            "end": 1115
          }
        ],
        "start": 1074,
        "end": 1115
      },
      "declare": false,
      "start": 1057,
      "end": 1116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyExtension",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1134
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
              "name": "Extension",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1146
            },
            "typeArguments": null,
            "start": 1137,
            "end": 1146
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Node",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1153
            },
            "typeArguments": null,
            "start": 1149,
            "end": 1153
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mark",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1160
            },
            "typeArguments": null,
            "start": 1156,
            "end": 1160
          }
        ],
        "start": 1137,
        "end": 1160
      },
      "declare": false,
      "start": 1117,
      "end": 1161
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyExtension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1192
                },
                "typeArguments": null,
                "start": 1180,
                "end": 1192
              },
              "start": 1178,
              "end": 1192
            },
            "start": 1177,
            "end": 1192
          },
          "init": null,
          "definite": false,
          "start": 1177,
          "end": 1192
        }
      ],
      "declare": true,
      "start": 1163,
      "end": 1193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 1200,
        "end": 1210
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
              "start": 1211,
              "end": 1212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1211,
            "end": 1212
          }
        ],
        "start": 1210,
        "end": 1213
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
            "start": 1216,
            "end": 1217
          },
          "typeArguments": null,
          "start": 1216,
          "end": 1217
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1234
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1236,
                  "end": 1239
                },
                "start": 1234,
                "end": 1239
              },
              "value": null,
              "start": 1227,
              "end": 1239
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1244,
              "end": 1247
            },
            "start": 1241,
            "end": 1247
          },
          "start": 1226,
          "end": 1247
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1260
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1272
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
                          "start": 1273,
                          "end": 1274
                        },
                        "typeArguments": null,
                        "start": 1273,
                        "end": 1274
                      }
                    ],
                    "start": 1272,
                    "end": 1275
                  },
                  "start": 1262,
                  "end": 1275
                },
                "start": 1260,
                "end": 1275
              },
              "value": null,
              "start": 1253,
              "end": 1275
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1290
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
                      "start": 1291,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1291,
                    "end": 1292
                  }
                ],
                "start": 1290,
                "end": 1293
              },
              "start": 1280,
              "end": 1293
            },
            "start": 1277,
            "end": 1293
          },
          "start": 1252,
          "end": 1293
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1298,
            "end": 1299
          },
          "typeArguments": null,
          "start": 1298,
          "end": 1299
        },
        "start": 1216,
        "end": 1299
      },
      "declare": false,
      "start": 1195,
      "end": 1300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getExtensionField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1319,
        "end": 1336
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
              "start": 1337,
              "end": 1338
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 1341,
              "end": 1344
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1337,
            "end": 1344
          }
        ],
        "start": 1336,
        "end": 1345
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "extension",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1372
              },
              "typeArguments": null,
              "start": 1360,
              "end": 1372
            },
            "start": 1358,
            "end": 1372
          },
          "start": 1349,
          "end": 1372
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1383,
              "end": 1389
            },
            "start": 1381,
            "end": 1389
          },
          "start": 1376,
          "end": 1389
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemoveThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1394,
            "end": 1404
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
                  "start": 1405,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1405,
                "end": 1406
              }
            ],
            "start": 1404,
            "end": 1407
          },
          "start": 1394,
          "end": 1407
        },
        "start": 1392,
        "end": 1407
      },
      "body": null,
      "expression": false,
      "start": 1302,
      "end": 1408
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
            "name": "extendMarkSchema",
            "optional": false,
            "typeAnnotation": null,
            "start": 1416,
            "end": 1432
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getExtensionField",
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1452
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
                      "name": "AnyConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1462
                    },
                    "typeArguments": null,
                    "start": 1453,
                    "end": 1462
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "extendMarkSchema",
                      "raw": "\"extendMarkSchema\"",
                      "start": 1463,
                      "end": 1481
                    },
                    "start": 1463,
                    "end": 1481
                  },
                  "start": 1453,
                  "end": 1482
                }
              ],
              "start": 1452,
              "end": 1483
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1488
              },
              {
                "type": "Literal",
                "value": "extendMarkSchema",
                "raw": "\"extendMarkSchema\"",
                "start": 1492,
                "end": 1510
              }
            ],
            "optional": false,
            "start": 1435,
            "end": 1513
          },
          "definite": false,
          "start": 1416,
          "end": 1513
        }
      ],
      "declare": false,
      "start": 1410,
      "end": 1514
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
            "name": "extension",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1545
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1546,
                      "end": 1549
                    }
                  ],
                  "start": 1545,
                  "end": 1550
                },
                "start": 1541,
                "end": 1550
              },
              "start": 1539,
              "end": 1550
            },
            "start": 1530,
            "end": 1550
          },
          "init": null,
          "definite": false,
          "start": 1530,
          "end": 1550
        }
      ],
      "declare": true,
      "start": 1516,
      "end": 1551
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "extendMarkSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1573
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendMarkSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 1579,
                "end": 1595
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1605
                }
              ],
              "optional": false,
              "start": 1579,
              "end": 1606
            },
            "directive": null,
            "start": 1579,
            "end": 1607
          }
        ],
        "start": 1575,
        "end": 1618
      },
      "alternate": null,
      "start": 1553,
      "end": 1618
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1620,
      "end": 1630
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1630
}
```
