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
        "name": "DeprecationOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "typeParameters": null,
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
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              },
              "start": 63,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 73
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              },
              "start": 83,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 92
          }
        ],
        "start": 29,
        "end": 94
      },
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 120
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 122
          }
        ],
        "start": 120,
        "end": 123
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "typeArguments": null,
            "start": 127,
            "end": 128
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 137,
            "end": 140
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "typeArguments": null,
                    "start": 147,
                    "end": 148
                  },
                  "start": 145,
                  "end": 148
                },
                "start": 144,
                "end": 148
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
              },
              "start": 150,
              "end": 157
            },
            "start": 143,
            "end": 157
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          },
          "start": 127,
          "end": 165
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 186,
                    "end": 187
                  },
                  "start": 180,
                  "end": 187
                },
                "start": 178,
                "end": 187
              },
              "start": 177,
              "end": 187
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 192,
              "end": 196
            },
            "start": 189,
            "end": 196
          },
          "start": 176,
          "end": 196
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "typeArguments": null,
          "start": 200,
          "end": 201
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 204,
          "end": 209
        },
        "start": 126,
        "end": 209
      },
      "declare": false,
      "start": 96,
      "end": 210
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadDefinitions",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 236
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 252
        },
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 256,
          "end": 262
        },
        "nameType": null,
        "typeAnnotation": {
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
                "start": 269,
                "end": 273
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 275,
                    "end": 278
                  },
                  "start": 275,
                  "end": 280
                },
                "start": 273,
                "end": 280
              },
              "value": null,
              "start": 266,
              "end": 280
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 285,
              "end": 288
            },
            "start": 282,
            "end": 288
          },
          "start": 265,
          "end": 288
        },
        "optional": false,
        "readonly": true,
        "start": 239,
        "end": 291
      },
      "declare": false,
      "start": 212,
      "end": 292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBinder",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 313
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
              "start": 314,
              "end": 315
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 343
              },
              "typeArguments": null,
              "start": 324,
              "end": 343
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 314,
            "end": 343
          }
        ],
        "start": 313,
        "end": 344
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 374
                    }
                  ],
                  "start": 372,
                  "end": 375
                },
                "start": 354,
                "end": 375
              },
              "start": 352,
              "end": 375
            },
            "start": 348,
            "end": 375
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 392
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
                        "start": 393,
                        "end": 394
                      },
                      "typeArguments": null,
                      "start": 393,
                      "end": 394
                    }
                  ],
                  "start": 392,
                  "end": 395
                },
                "start": 380,
                "end": 395
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 398,
                "end": 407
              }
            ],
            "start": 380,
            "end": 407
          },
          "start": 377,
          "end": 407
        },
        "start": 347,
        "end": 407
      },
      "declare": false,
      "start": 294,
      "end": 408
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 427
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
              "start": 428,
              "end": 429
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 457
              },
              "typeArguments": null,
              "start": 438,
              "end": 457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 428,
            "end": 457
          }
        ],
        "start": 427,
        "end": 458
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 468
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                  "start": 475,
                  "end": 476
                },
                "typeArguments": null,
                "start": 475,
                "end": 476
              },
              "start": 469,
              "end": 476
            },
            {
              "type": "TSNumberKeyword",
              "start": 478,
              "end": 484
            }
          ],
          "start": 468,
          "end": 485
        },
        "start": 461,
        "end": 485
      },
      "declare": false,
      "start": 410,
      "end": 486
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 511
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
              "start": 512,
              "end": 513
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 541
              },
              "typeArguments": null,
              "start": 522,
              "end": 541
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 512,
            "end": 541
          }
        ],
        "start": 511,
        "end": 542
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 555
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
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 560
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OverloadKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 576
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
                          "start": 577,
                          "end": 578
                        },
                        "typeArguments": null,
                        "start": 577,
                        "end": 578
                      }
                    ],
                    "start": 576,
                    "end": 579
                  },
                  "start": 564,
                  "end": 579
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
                      "start": 582,
                      "end": 583
                    },
                    "typeArguments": null,
                    "start": 582,
                    "end": 583
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 585
                    },
                    "typeArguments": null,
                    "start": 584,
                    "end": 585
                  },
                  "start": 582,
                  "end": 586
                },
                "optional": false,
                "readonly": null,
                "start": 556,
                "end": 589
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
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
                    }
                  ],
                  "start": 602,
                  "end": 605
                },
                "start": 590,
                "end": 605
              },
              "start": 556,
              "end": 606
            }
          ],
          "start": 555,
          "end": 607
        },
        "start": 545,
        "end": 607
      },
      "declare": false,
      "start": 488,
      "end": 608
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 661
              },
              "typeArguments": null,
              "start": 642,
              "end": 661
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 661
          }
        ],
        "start": 631,
        "end": 662
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 684
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
                  "start": 685,
                  "end": 686
                },
                "typeArguments": null,
                "start": 685,
                "end": 686
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
                    "start": 693,
                    "end": 694
                  },
                  "typeArguments": null,
                  "start": 693,
                  "end": 694
                },
                "start": 687,
                "end": 694
              },
              "start": 685,
              "end": 695
            }
          ],
          "start": 684,
          "end": 696
        },
        "start": 665,
        "end": 696
      },
      "declare": false,
      "start": 610,
      "end": 697
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBinders",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 719
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
              "start": 720,
              "end": 721
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 749
              },
              "typeArguments": null,
              "start": 730,
              "end": 749
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 720,
            "end": 749
          }
        ],
        "start": 719,
        "end": 750
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 757
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 773
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
                  "start": 774,
                  "end": 775
                },
                "typeArguments": null,
                "start": 774,
                "end": 775
              }
            ],
            "start": 773,
            "end": 776
          },
          "start": 761,
          "end": 776
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OverloadParameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 804
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
                          "start": 805,
                          "end": 806
                        },
                        "typeArguments": null,
                        "start": 805,
                        "end": 806
                      }
                    ],
                    "start": 804,
                    "end": 807
                  },
                  "start": 786,
                  "end": 807
                },
                "start": 784,
                "end": 807
              },
              "start": 780,
              "end": 807
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 812,
                  "end": 819
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 822,
                  "end": 831
                }
              ],
              "start": 812,
              "end": 831
            },
            "start": 809,
            "end": 831
          },
          "start": 779,
          "end": 831
        },
        "optional": false,
        "readonly": null,
        "start": 753,
        "end": 834
      },
      "declare": false,
      "start": 699,
      "end": 835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadDeprecations",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 862
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
              "start": 863,
              "end": 864
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 892
              },
              "typeArguments": null,
              "start": 873,
              "end": 892
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 863,
            "end": 892
          }
        ],
        "start": 862,
        "end": 893
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 899,
          "end": 900
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 916
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
                  "start": 917,
                  "end": 918
                },
                "typeArguments": null,
                "start": 917,
                "end": 918
              }
            ],
            "start": 916,
            "end": 919
          },
          "start": 904,
          "end": 919
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeprecationOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 941
          },
          "typeArguments": null,
          "start": 923,
          "end": 941
        },
        "optional": true,
        "readonly": null,
        "start": 896,
        "end": 944
      },
      "declare": false,
      "start": 837,
      "end": 945
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createOverload",
        "optional": false,
        "typeAnnotation": null,
        "start": 964,
        "end": 978
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
              "start": 979,
              "end": 980
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 1008
              },
              "typeArguments": null,
              "start": 989,
              "end": 1008
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 979,
            "end": 1008
          }
        ],
        "start": 978,
        "end": 1009
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1016,
              "end": 1022
            },
            "start": 1014,
            "end": 1022
          },
          "start": 1010,
          "end": 1022
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "overloads",
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
                "start": 1035,
                "end": 1036
              },
              "typeArguments": null,
              "start": 1035,
              "end": 1036
            },
            "start": 1033,
            "end": 1036
          },
          "start": 1024,
          "end": 1036
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1061
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
                      "start": 1062,
                      "end": 1063
                    },
                    "typeArguments": null,
                    "start": 1062,
                    "end": 1063
                  }
                ],
                "start": 1061,
                "end": 1064
              },
              "start": 1046,
              "end": 1064
            },
            "start": 1044,
            "end": 1064
          },
          "start": 1038,
          "end": 1064
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deprecations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDeprecations",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1101
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
                      "start": 1102,
                      "end": 1103
                    },
                    "typeArguments": null,
                    "start": 1102,
                    "end": 1103
                  }
                ],
                "start": 1101,
                "end": 1104
              },
              "start": 1081,
              "end": 1104
            },
            "start": 1079,
            "end": 1104
          },
          "start": 1066,
          "end": 1104
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionToIntersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1126
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
                    "start": 1127,
                    "end": 1128
                  },
                  "typeArguments": null,
                  "start": 1127,
                  "end": 1128
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
                      "start": 1135,
                      "end": 1136
                    },
                    "typeArguments": null,
                    "start": 1135,
                    "end": 1136
                  },
                  "start": 1129,
                  "end": 1136
                },
                "start": 1127,
                "end": 1137
              }
            ],
            "start": 1126,
            "end": 1138
          },
          "start": 1107,
          "end": 1138
        },
        "start": 1105,
        "end": 1138
      },
      "body": null,
      "expression": false,
      "start": 947,
      "end": 1139
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createBinder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1170
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
              "start": 1171,
              "end": 1172
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1181,
                "end": 1200
              },
              "typeArguments": null,
              "start": 1181,
              "end": 1200
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1171,
            "end": 1200
          }
        ],
        "start": 1170,
        "end": 1201
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "overloads",
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
                "start": 1213,
                "end": 1214
              },
              "typeArguments": null,
              "start": 1213,
              "end": 1214
            },
            "start": 1211,
            "end": 1214
          },
          "start": 1202,
          "end": 1214
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "typeAnnotation": null,
                "start": 1224,
                "end": 1239
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
                      "start": 1240,
                      "end": 1241
                    },
                    "typeArguments": null,
                    "start": 1240,
                    "end": 1241
                  }
                ],
                "start": 1239,
                "end": 1242
              },
              "start": 1224,
              "end": 1242
            },
            "start": 1222,
            "end": 1242
          },
          "start": 1216,
          "end": 1242
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadBinder",
            "optional": false,
            "typeAnnotation": null,
            "start": 1245,
            "end": 1259
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
                  "start": 1260,
                  "end": 1261
                },
                "typeArguments": null,
                "start": 1260,
                "end": 1261
              }
            ],
            "start": 1259,
            "end": 1262
          },
          "start": 1245,
          "end": 1262
        },
        "start": 1243,
        "end": 1262
      },
      "body": null,
      "expression": false,
      "start": 1141,
      "end": 1263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1290
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload",
              "optional": false,
              "typeAnnotation": null,
              "start": 1297,
              "end": 1305
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1306,
                    "end": 1307
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadDefinitions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1335
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1335
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1306,
                  "end": 1335
                }
              ],
              "start": 1305,
              "end": 1336
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "overloads",
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
                      "start": 1348,
                      "end": 1349
                    },
                    "typeArguments": null,
                    "start": 1348,
                    "end": 1349
                  },
                  "start": 1346,
                  "end": 1349
                },
                "start": 1337,
                "end": 1349
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BindableOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1375
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
                        "start": 1376,
                        "end": 1377
                      },
                      "typeArguments": null,
                      "start": 1376,
                      "end": 1377
                    }
                  ],
                  "start": 1375,
                  "end": 1378
                },
                "start": 1352,
                "end": 1378
              },
              "start": 1350,
              "end": 1378
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1297,
            "end": 1379
          }
        ],
        "start": 1291,
        "end": 1381
      },
      "declare": false,
      "start": 1265,
      "end": 1381
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BindableOverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1393,
        "end": 1416
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
              "start": 1417,
              "end": 1418
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1427,
                "end": 1446
              },
              "typeArguments": null,
              "start": 1427,
              "end": 1446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1417,
            "end": 1446
          }
        ],
        "start": 1416,
        "end": 1447
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
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1454,
              "end": 1458
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "binder",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadBinders",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1467,
                      "end": 1482
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
                            "start": 1483,
                            "end": 1484
                          },
                          "typeArguments": null,
                          "start": 1483,
                          "end": 1484
                        }
                      ],
                      "start": 1482,
                      "end": 1485
                    },
                    "start": 1467,
                    "end": 1485
                  },
                  "start": 1465,
                  "end": 1485
                },
                "start": 1459,
                "end": 1485
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BoundOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1488,
                  "end": 1508
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
                        "start": 1509,
                        "end": 1510
                      },
                      "typeArguments": null,
                      "start": 1509,
                      "end": 1510
                    }
                  ],
                  "start": 1508,
                  "end": 1511
                },
                "start": 1488,
                "end": 1511
              },
              "start": 1486,
              "end": 1511
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1454,
            "end": 1512
          }
        ],
        "start": 1448,
        "end": 1514
      },
      "declare": false,
      "start": 1383,
      "end": 1514
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FinishableOverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1551
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
              "start": 1552,
              "end": 1553
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1581
              },
              "typeArguments": null,
              "start": 1562,
              "end": 1581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1552,
            "end": 1581
          }
        ],
        "start": 1551,
        "end": 1582
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
              "name": "finish",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1595
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
                  "name": "OverloadFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1599,
                  "end": 1615
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
                        "start": 1616,
                        "end": 1617
                      },
                      "typeArguments": null,
                      "start": 1616,
                      "end": 1617
                    }
                  ],
                  "start": 1615,
                  "end": 1618
                },
                "start": 1599,
                "end": 1618
              },
              "start": 1597,
              "end": 1618
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1589,
            "end": 1619
          }
        ],
        "start": 1583,
        "end": 1621
      },
      "declare": false,
      "start": 1516,
      "end": 1621
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoundOverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1633,
        "end": 1653
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
              "start": 1654,
              "end": 1655
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1664,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1664,
              "end": 1683
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1654,
            "end": 1683
          }
        ],
        "start": 1653,
        "end": 1684
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "FinishableOverloadBuilder",
            "optional": false,
            "typeAnnotation": null,
            "start": 1693,
            "end": 1718
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
                  "start": 1719,
                  "end": 1720
                },
                "typeArguments": null,
                "start": 1719,
                "end": 1720
              }
            ],
            "start": 1718,
            "end": 1721
          },
          "start": 1693,
          "end": 1721
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "deprecate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1728,
              "end": 1737
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deprecations",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadDeprecations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1752,
                      "end": 1772
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
                            "start": 1773,
                            "end": 1774
                          },
                          "typeArguments": null,
                          "start": 1773,
                          "end": 1774
                        }
                      ],
                      "start": 1772,
                      "end": 1775
                    },
                    "start": 1752,
                    "end": 1775
                  },
                  "start": 1750,
                  "end": 1775
                },
                "start": 1738,
                "end": 1775
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FinishableOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1778,
                  "end": 1803
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
                        "start": 1804,
                        "end": 1805
                      },
                      "typeArguments": null,
                      "start": 1804,
                      "end": 1805
                    }
                  ],
                  "start": 1803,
                  "end": 1806
                },
                "start": 1778,
                "end": 1806
              },
              "start": 1776,
              "end": 1806
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1728,
            "end": 1807
          }
        ],
        "start": 1722,
        "end": 1809
      },
      "declare": false,
      "start": 1623,
      "end": 1809
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "buildOverload",
        "optional": false,
        "typeAnnotation": null,
        "start": 1828,
        "end": 1841
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1848,
              "end": 1854
            },
            "start": 1846,
            "end": 1854
          },
          "start": 1842,
          "end": 1854
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadBuilder",
            "optional": false,
            "typeAnnotation": null,
            "start": 1857,
            "end": 1872
          },
          "typeArguments": null,
          "start": 1857,
          "end": 1872
        },
        "start": 1855,
        "end": 1872
      },
      "body": null,
      "expression": false,
      "start": 1811,
      "end": 1873
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 1886,
        "end": 1896
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 1903,
              "end": 1920
            },
            "initializer": null,
            "computed": false,
            "start": 1903,
            "end": 1920
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Modifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 1926,
              "end": 1934
            },
            "initializer": null,
            "computed": false,
            "start": 1926,
            "end": 1934
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 1940,
              "end": 1952
            },
            "initializer": null,
            "computed": false,
            "start": 1940,
            "end": 1952
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AssertClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 1958,
              "end": 1970
            },
            "initializer": null,
            "computed": false,
            "start": 1958,
            "end": 1970
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Decorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1976,
              "end": 1985
            },
            "initializer": null,
            "computed": false,
            "start": 1976,
            "end": 1985
          }
        ],
        "start": 1897,
        "end": 1987
      },
      "const": true,
      "declare": false,
      "start": 1875,
      "end": 1987
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 1999,
        "end": 2003
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2010,
              "end": 2014
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2016,
                  "end": 2026
                },
                "typeArguments": null,
                "start": 2016,
                "end": 2026
              },
              "start": 2014,
              "end": 2026
            },
            "accessibility": null,
            "static": false,
            "start": 2010,
            "end": 2027
          }
        ],
        "start": 2004,
        "end": 2029
      },
      "declare": false,
      "start": 1989,
      "end": 2029
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Declaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 2041,
        "end": 2052
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2065
          },
          "typeArguments": null,
          "start": 2061,
          "end": 2065
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
              "name": "_declarationBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2068,
              "end": 2085
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2087,
                "end": 2090
              },
              "start": 2085,
              "end": 2090
            },
            "accessibility": null,
            "static": false,
            "start": 2068,
            "end": 2090
          }
        ],
        "start": 2066,
        "end": 2092
      },
      "declare": false,
      "start": 2031,
      "end": 2092
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statement",
        "optional": false,
        "typeAnnotation": null,
        "start": 2103,
        "end": 2112
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2121,
            "end": 2125
          },
          "typeArguments": null,
          "start": 2121,
          "end": 2125
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
              "name": "_statementBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              },
              "start": 2143,
              "end": 2148
            },
            "accessibility": null,
            "static": false,
            "start": 2128,
            "end": 2148
          }
        ],
        "start": 2126,
        "end": 2150
      },
      "declare": false,
      "start": 2093,
      "end": 2150
    },
    {
      "type": "EmptyStatement",
      "start": 2150,
      "end": 2151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2162,
        "end": 2172
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2181,
            "end": 2185
          },
          "typeArguments": null,
          "start": 2181,
          "end": 2185
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
              "name": "_expressionBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2188,
              "end": 2204
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2206,
                "end": 2209
              },
              "start": 2204,
              "end": 2209
            },
            "accessibility": null,
            "static": false,
            "start": 2188,
            "end": 2210
          }
        ],
        "start": 2186,
        "end": 2212
      },
      "declare": false,
      "start": 2152,
      "end": 2212
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 2224,
        "end": 2241
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Statement",
            "optional": false,
            "typeAnnotation": null,
            "start": 2250,
            "end": 2259
          },
          "typeArguments": null,
          "start": 2250,
          "end": 2259
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2278
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportDeclaration",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2279,
                    "end": 2296
                  },
                  "start": 2268,
                  "end": 2296
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2296
              },
              "start": 2266,
              "end": 2296
            },
            "accessibility": null,
            "static": false,
            "start": 2262,
            "end": 2297
          }
        ],
        "start": 2260,
        "end": 2299
      },
      "declare": false,
      "start": 2214,
      "end": 2299
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Modifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 2310,
        "end": 2318
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2327,
            "end": 2331
          },
          "typeArguments": null,
          "start": 2327,
          "end": 2331
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2334,
              "end": 2338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2340,
                    "end": 2350
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2351,
                    "end": 2359
                  },
                  "start": 2340,
                  "end": 2359
                },
                "typeArguments": null,
                "start": 2340,
                "end": 2359
              },
              "start": 2338,
              "end": 2359
            },
            "accessibility": null,
            "static": false,
            "start": 2334,
            "end": 2360
          }
        ],
        "start": 2332,
        "end": 2362
      },
      "declare": false,
      "start": 2300,
      "end": 2362
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Decorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 2373,
        "end": 2382
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2391,
            "end": 2395
          },
          "typeArguments": null,
          "start": 2391,
          "end": 2395
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2398,
              "end": 2402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2404,
                    "end": 2414
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decorator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2415,
                    "end": 2424
                  },
                  "start": 2404,
                  "end": 2424
                },
                "typeArguments": null,
                "start": 2404,
                "end": 2424
              },
              "start": 2402,
              "end": 2424
            },
            "accessibility": null,
            "static": false,
            "start": 2398,
            "end": 2425
          }
        ],
        "start": 2396,
        "end": 2427
      },
      "declare": false,
      "start": 2363,
      "end": 2427
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2438,
        "end": 2450
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 2459,
            "end": 2470
          },
          "typeArguments": null,
          "start": 2459,
          "end": 2470
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2473,
              "end": 2477
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2489
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2490,
                    "end": 2502
                  },
                  "start": 2479,
                  "end": 2502
                },
                "typeArguments": null,
                "start": 2479,
                "end": 2502
              },
              "start": 2477,
              "end": 2502
            },
            "accessibility": null,
            "static": false,
            "start": 2473,
            "end": 2503
          }
        ],
        "start": 2471,
        "end": 2505
      },
      "declare": false,
      "start": 2428,
      "end": 2505
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssertClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2516,
        "end": 2528
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2537,
            "end": 2541
          },
          "typeArguments": null,
          "start": 2537,
          "end": 2541
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2548
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2560
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AssertClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2561,
                    "end": 2573
                  },
                  "start": 2550,
                  "end": 2573
                },
                "typeArguments": null,
                "start": 2550,
                "end": 2573
              },
              "start": 2548,
              "end": 2573
            },
            "accessibility": null,
            "static": false,
            "start": 2544,
            "end": 2574
          }
        ],
        "start": 2542,
        "end": 2576
      },
      "declare": false,
      "start": 2506,
      "end": 2576
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2595,
        "end": 2607
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                "start": 2614,
                "end": 2618
              },
              "typeArguments": null,
              "start": 2614,
              "end": 2618
            },
            "start": 2612,
            "end": 2618
          },
          "start": 2608,
          "end": 2618
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2625
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Expression",
                "optional": false,
                "typeAnnotation": null,
                "start": 2629,
                "end": 2639
              },
              "typeArguments": null,
              "start": 2629,
              "end": 2639
            },
            "start": 2629,
            "end": 2639
          },
          "start": 2621,
          "end": 2639
        },
        "start": 2619,
        "end": 2639
      },
      "body": null,
      "expression": false,
      "start": 2578,
      "end": 2640
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAssertClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2658,
        "end": 2672
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                "start": 2679,
                "end": 2683
              },
              "typeArguments": null,
              "start": 2679,
              "end": 2683
            },
            "start": 2677,
            "end": 2683
          },
          "start": 2673,
          "end": 2683
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2686,
            "end": 2690
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AssertClause",
                "optional": false,
                "typeAnnotation": null,
                "start": 2694,
                "end": 2706
              },
              "typeArguments": null,
              "start": 2694,
              "end": 2706
            },
            "start": 2694,
            "end": 2706
          },
          "start": 2686,
          "end": 2706
        },
        "start": 2684,
        "end": 2706
      },
      "body": null,
      "expression": false,
      "start": 2641,
      "end": 2707
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isImportClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2725,
        "end": 2739
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                "start": 2746,
                "end": 2750
              },
              "typeArguments": null,
              "start": 2746,
              "end": 2750
            },
            "start": 2744,
            "end": 2750
          },
          "start": 2740,
          "end": 2750
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2753,
            "end": 2757
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImportClause",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2773
              },
              "typeArguments": null,
              "start": 2761,
              "end": 2773
            },
            "start": 2761,
            "end": 2773
          },
          "start": 2753,
          "end": 2773
        },
        "start": 2751,
        "end": 2773
      },
      "body": null,
      "expression": false,
      "start": 2708,
      "end": 2774
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isModifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 2792,
        "end": 2802
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                "start": 2809,
                "end": 2813
              },
              "typeArguments": null,
              "start": 2809,
              "end": 2813
            },
            "start": 2807,
            "end": 2813
          },
          "start": 2803,
          "end": 2813
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2816,
            "end": 2820
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 2824,
                "end": 2832
              },
              "typeArguments": null,
              "start": 2824,
              "end": 2832
            },
            "start": 2824,
            "end": 2832
          },
          "start": 2816,
          "end": 2832
        },
        "start": 2814,
        "end": 2832
      },
      "body": null,
      "expression": false,
      "start": 2775,
      "end": 2833
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 2851,
        "end": 2862
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
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
                "start": 2869,
                "end": 2873
              },
              "typeArguments": null,
              "start": 2869,
              "end": 2873
            },
            "start": 2867,
            "end": 2873
          },
          "start": 2863,
          "end": 2873
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2876,
            "end": 2880
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Decorator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2884,
                "end": 2893
              },
              "typeArguments": null,
              "start": 2884,
              "end": 2893
            },
            "start": 2884,
            "end": 2893
          },
          "start": 2876,
          "end": 2893
        },
        "start": 2874,
        "end": 2893
      },
      "body": null,
      "expression": false,
      "start": 2834,
      "end": 2894
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
            "name": "updateImportDeclaration",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2948,
                              "end": 2965
                            },
                            "typeArguments": null,
                            "start": 2948,
                            "end": 2965
                          },
                          "start": 2946,
                          "end": 2965
                        },
                        "start": 2942,
                        "end": 2965
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Modifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2987,
                                      "end": 2995
                                    },
                                    "typeArguments": null,
                                    "start": 2987,
                                    "end": 2995
                                  },
                                  "start": 2987,
                                  "end": 2997
                                },
                                "start": 2978,
                                "end": 2997
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3000,
                                "end": 3009
                              }
                            ],
                            "start": 2978,
                            "end": 3009
                          },
                          "start": 2976,
                          "end": 3009
                        },
                        "start": 2967,
                        "end": 3009
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "importClause",
                        "optional": false,
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
                                  "name": "ImportClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3025,
                                  "end": 3037
                                },
                                "typeArguments": null,
                                "start": 3025,
                                "end": 3037
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3040,
                                "end": 3049
                              }
                            ],
                            "start": 3025,
                            "end": 3049
                          },
                          "start": 3023,
                          "end": 3049
                        },
                        "start": 3011,
                        "end": 3049
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3068,
                              "end": 3078
                            },
                            "typeArguments": null,
                            "start": 3068,
                            "end": 3078
                          },
                          "start": 3066,
                          "end": 3078
                        },
                        "start": 3051,
                        "end": 3078
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertClause",
                        "optional": false,
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
                                  "name": "AssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3094,
                                  "end": 3106
                                },
                                "typeArguments": null,
                                "start": 3094,
                                "end": 3106
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3109,
                                "end": 3118
                              }
                            ],
                            "start": 3094,
                            "end": 3118
                          },
                          "start": 3092,
                          "end": 3118
                        },
                        "start": 3080,
                        "end": 3118
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3121,
                          "end": 3138
                        },
                        "typeArguments": null,
                        "start": 3121,
                        "end": 3138
                      },
                      "start": 3119,
                      "end": 3138
                    },
                    "start": 2941,
                    "end": 3139
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3151,
                              "end": 3168
                            },
                            "typeArguments": null,
                            "start": 3151,
                            "end": 3168
                          },
                          "start": 3149,
                          "end": 3168
                        },
                        "start": 3145,
                        "end": 3168
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "decorators",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Decorator",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3191,
                                      "end": 3200
                                    },
                                    "typeArguments": null,
                                    "start": 3191,
                                    "end": 3200
                                  },
                                  "start": 3191,
                                  "end": 3202
                                },
                                "start": 3182,
                                "end": 3202
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3205,
                                "end": 3214
                              }
                            ],
                            "start": 3182,
                            "end": 3214
                          },
                          "start": 3180,
                          "end": 3214
                        },
                        "start": 3170,
                        "end": 3214
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Modifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3236,
                                      "end": 3244
                                    },
                                    "typeArguments": null,
                                    "start": 3236,
                                    "end": 3244
                                  },
                                  "start": 3236,
                                  "end": 3246
                                },
                                "start": 3227,
                                "end": 3246
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3249,
                                "end": 3258
                              }
                            ],
                            "start": 3227,
                            "end": 3258
                          },
                          "start": 3225,
                          "end": 3258
                        },
                        "start": 3216,
                        "end": 3258
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "importClause",
                        "optional": false,
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
                                  "name": "ImportClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3274,
                                  "end": 3286
                                },
                                "typeArguments": null,
                                "start": 3274,
                                "end": 3286
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3289,
                                "end": 3298
                              }
                            ],
                            "start": 3274,
                            "end": 3298
                          },
                          "start": 3272,
                          "end": 3298
                        },
                        "start": 3260,
                        "end": 3298
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3317,
                              "end": 3327
                            },
                            "typeArguments": null,
                            "start": 3317,
                            "end": 3327
                          },
                          "start": 3315,
                          "end": 3327
                        },
                        "start": 3300,
                        "end": 3327
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertClause",
                        "optional": false,
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
                                  "name": "AssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3343,
                                  "end": 3355
                                },
                                "typeArguments": null,
                                "start": 3343,
                                "end": 3355
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3358,
                                "end": 3367
                              }
                            ],
                            "start": 3343,
                            "end": 3367
                          },
                          "start": 3341,
                          "end": 3367
                        },
                        "start": 3329,
                        "end": 3367
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3370,
                          "end": 3387
                        },
                        "typeArguments": null,
                        "start": 3370,
                        "end": 3387
                      },
                      "start": 3368,
                      "end": 3387
                    },
                    "start": 3144,
                    "end": 3388
                  }
                ],
                "start": 2935,
                "end": 3390
              },
              "start": 2933,
              "end": 3390
            },
            "start": 2910,
            "end": 3390
          },
          "init": null,
          "definite": false,
          "start": 2910,
          "end": 3390
        }
      ],
      "declare": true,
      "start": 2896,
      "end": 3390
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 3409,
        "end": 3414
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
              "start": 3415,
              "end": 3416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3415,
            "end": 3416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3418,
              "end": 3419
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3428,
                "end": 3429
              },
              "typeArguments": null,
              "start": 3428,
              "end": 3429
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3418,
            "end": 3429
          }
        ],
        "start": 3414,
        "end": 3430
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3447,
                    "end": 3448
                  },
                  "typeArguments": null,
                  "start": 3447,
                  "end": 3448
                },
                "start": 3447,
                "end": 3450
              },
              "start": 3438,
              "end": 3450
            },
            "start": 3436,
            "end": 3450
          },
          "start": 3431,
          "end": 3450
        },
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
                  "name": "element",
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
                        "start": 3472,
                        "end": 3473
                      },
                      "typeArguments": null,
                      "start": 3472,
                      "end": 3473
                    },
                    "start": 3470,
                    "end": 3473
                  },
                  "start": 3463,
                  "end": 3473
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3482,
                      "end": 3488
                    },
                    "start": 3480,
                    "end": 3488
                  },
                  "start": 3475,
                  "end": 3488
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3493,
                    "end": 3500
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3504,
                        "end": 3505
                      },
                      "typeArguments": null,
                      "start": 3504,
                      "end": 3505
                    },
                    "start": 3504,
                    "end": 3505
                  },
                  "start": 3493,
                  "end": 3505
                },
                "start": 3490,
                "end": 3505
              },
              "start": 3462,
              "end": 3505
            },
            "start": 3460,
            "end": 3505
          },
          "start": 3452,
          "end": 3505
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3508,
            "end": 3513
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3526,
                    "end": 3527
                  },
                  "typeArguments": null,
                  "start": 3526,
                  "end": 3527
                },
                "start": 3526,
                "end": 3529
              },
              "start": 3517,
              "end": 3529
            },
            "start": 3517,
            "end": 3529
          },
          "start": 3508,
          "end": 3529
        },
        "start": 3506,
        "end": 3529
      },
      "body": null,
      "expression": false,
      "start": 3392,
      "end": 3530
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 3548,
        "end": 3553
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
              "start": 3554,
              "end": 3555
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3554,
            "end": 3555
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3557,
              "end": 3558
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3567,
                "end": 3568
              },
              "typeArguments": null,
              "start": 3567,
              "end": 3568
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3557,
            "end": 3568
          }
        ],
        "start": 3553,
        "end": 3569
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3586,
                        "end": 3587
                      },
                      "typeArguments": null,
                      "start": 3586,
                      "end": 3587
                    },
                    "start": 3586,
                    "end": 3589
                  },
                  "start": 3577,
                  "end": 3589
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3592,
                  "end": 3601
                }
              ],
              "start": 3577,
              "end": 3601
            },
            "start": 3575,
            "end": 3601
          },
          "start": 3570,
          "end": 3601
        },
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
                  "name": "element",
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
                        "start": 3623,
                        "end": 3624
                      },
                      "typeArguments": null,
                      "start": 3623,
                      "end": 3624
                    },
                    "start": 3621,
                    "end": 3624
                  },
                  "start": 3614,
                  "end": 3624
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3633,
                      "end": 3639
                    },
                    "start": 3631,
                    "end": 3639
                  },
                  "start": 3626,
                  "end": 3639
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3644,
                    "end": 3651
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3655,
                        "end": 3656
                      },
                      "typeArguments": null,
                      "start": 3655,
                      "end": 3656
                    },
                    "start": 3655,
                    "end": 3656
                  },
                  "start": 3644,
                  "end": 3656
                },
                "start": 3641,
                "end": 3656
              },
              "start": 3613,
              "end": 3656
            },
            "start": 3611,
            "end": 3656
          },
          "start": 3603,
          "end": 3656
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3659,
            "end": 3664
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3677,
                        "end": 3678
                      },
                      "typeArguments": null,
                      "start": 3677,
                      "end": 3678
                    },
                    "start": 3677,
                    "end": 3680
                  },
                  "start": 3668,
                  "end": 3680
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3683,
                  "end": 3692
                }
              ],
              "start": 3668,
              "end": 3692
            },
            "start": 3668,
            "end": 3692
          },
          "start": 3659,
          "end": 3692
        },
        "start": 3657,
        "end": 3692
      },
      "body": null,
      "expression": false,
      "start": 3531,
      "end": 3693
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 3711,
        "end": 3716
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
              "start": 3717,
              "end": 3718
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3717,
            "end": 3718
          }
        ],
        "start": 3716,
        "end": 3719
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3736,
                        "end": 3737
                      },
                      "typeArguments": null,
                      "start": 3736,
                      "end": 3737
                    },
                    "start": 3736,
                    "end": 3739
                  },
                  "start": 3727,
                  "end": 3739
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3742,
                  "end": 3751
                }
              ],
              "start": 3727,
              "end": 3751
            },
            "start": 3725,
            "end": 3751
          },
          "start": 3720,
          "end": 3751
        },
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
                  "name": "element",
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
                        "start": 3773,
                        "end": 3774
                      },
                      "typeArguments": null,
                      "start": 3773,
                      "end": 3774
                    },
                    "start": 3771,
                    "end": 3774
                  },
                  "start": 3764,
                  "end": 3774
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3783,
                      "end": 3789
                    },
                    "start": 3781,
                    "end": 3789
                  },
                  "start": 3776,
                  "end": 3789
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3794,
                  "end": 3801
                },
                "start": 3791,
                "end": 3801
              },
              "start": 3763,
              "end": 3801
            },
            "start": 3761,
            "end": 3801
          },
          "start": 3753,
          "end": 3801
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 3804,
          "end": 3811
        },
        "start": 3802,
        "end": 3811
      },
      "body": null,
      "expression": false,
      "start": 3694,
      "end": 3812
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 3831,
        "end": 3838
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
              "type": "TSAnyKeyword",
              "start": 3846,
              "end": 3849
            },
            "start": 3844,
            "end": 3849
          },
          "start": 3839,
          "end": 3849
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 3852,
            "end": 3857
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3870,
                  "end": 3877
                },
                "start": 3870,
                "end": 3879
              },
              "start": 3861,
              "end": 3879
            },
            "start": 3861,
            "end": 3879
          },
          "start": 3852,
          "end": 3879
        },
        "start": 3850,
        "end": 3879
      },
      "body": null,
      "expression": false,
      "start": 3814,
      "end": 3880
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
            "name": "DISALLOW_DECORATORS",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeprecationOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3917,
                  "end": 3935
                },
                "typeArguments": null,
                "start": 3917,
                "end": 3935
              },
              "start": 3915,
              "end": 3935
            },
            "start": 3896,
            "end": 3935
          },
          "init": null,
          "definite": false,
          "start": 3896,
          "end": 3935
        }
      ],
      "declare": true,
      "start": 3882,
      "end": 3936
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "buildOverload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3938,
                          "end": 3951
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "updateImportDeclaration",
                            "raw": "\"updateImportDeclaration\"",
                            "start": 3952,
                            "end": 3977
                          }
                        ],
                        "optional": false,
                        "start": 3938,
                        "end": 3978
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3984,
                        "end": 3992
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3938,
                      "end": 3992
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
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 4003,
                              "end": 4004
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4011,
                                        "end": 4028
                                      },
                                      "typeArguments": null,
                                      "start": 4011,
                                      "end": 4028
                                    },
                                    "start": 4009,
                                    "end": 4028
                                  },
                                  "start": 4005,
                                  "end": 4028
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Modifier",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4050,
                                                "end": 4058
                                              },
                                              "typeArguments": null,
                                              "start": 4050,
                                              "end": 4058
                                            },
                                            "start": 4050,
                                            "end": 4060
                                          },
                                          "start": 4041,
                                          "end": 4060
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4063,
                                          "end": 4072
                                        }
                                      ],
                                      "start": 4041,
                                      "end": 4072
                                    },
                                    "start": 4039,
                                    "end": 4072
                                  },
                                  "start": 4030,
                                  "end": 4072
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
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
                                            "name": "ImportClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4088,
                                            "end": 4100
                                          },
                                          "typeArguments": null,
                                          "start": 4088,
                                          "end": 4100
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4103,
                                          "end": 4112
                                        }
                                      ],
                                      "start": 4088,
                                      "end": 4112
                                    },
                                    "start": 4086,
                                    "end": 4112
                                  },
                                  "start": 4074,
                                  "end": 4112
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4131,
                                        "end": 4141
                                      },
                                      "typeArguments": null,
                                      "start": 4131,
                                      "end": 4141
                                    },
                                    "start": 4129,
                                    "end": 4141
                                  },
                                  "start": 4114,
                                  "end": 4141
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
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
                                            "name": "AssertClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4157,
                                            "end": 4169
                                          },
                                          "typeArguments": null,
                                          "start": 4157,
                                          "end": 4169
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4172,
                                          "end": 4181
                                        }
                                      ],
                                      "start": 4157,
                                      "end": 4181
                                    },
                                    "start": 4155,
                                    "end": 4181
                                  },
                                  "start": 4143,
                                  "end": 4181
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4184,
                                    "end": 4201
                                  },
                                  "typeArguments": null,
                                  "start": 4184,
                                  "end": 4201
                                },
                                "start": 4182,
                                "end": 4201
                              },
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
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4223,
                                        "end": 4246
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4247,
                                          "end": 4251
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4253,
                                          "end": 4262
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4264,
                                          "end": 4276
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4278,
                                          "end": 4293
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4295,
                                          "end": 4307
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4223,
                                      "end": 4308
                                    },
                                    "start": 4216,
                                    "end": 4309
                                  }
                                ],
                                "start": 4202,
                                "end": 4319
                              },
                              "expression": false,
                              "start": 4004,
                              "end": 4319
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4003,
                            "end": 4319
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 4330,
                              "end": 4331
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4338,
                                        "end": 4355
                                      },
                                      "typeArguments": null,
                                      "start": 4338,
                                      "end": 4355
                                    },
                                    "start": 4336,
                                    "end": 4355
                                  },
                                  "start": 4332,
                                  "end": 4355
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_decorators",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Decorator",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4379,
                                                "end": 4388
                                              },
                                              "typeArguments": null,
                                              "start": 4379,
                                              "end": 4388
                                            },
                                            "start": 4379,
                                            "end": 4390
                                          },
                                          "start": 4370,
                                          "end": 4390
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4393,
                                          "end": 4402
                                        }
                                      ],
                                      "start": 4370,
                                      "end": 4402
                                    },
                                    "start": 4368,
                                    "end": 4402
                                  },
                                  "start": 4357,
                                  "end": 4402
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Modifier",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4424,
                                                "end": 4432
                                              },
                                              "typeArguments": null,
                                              "start": 4424,
                                              "end": 4432
                                            },
                                            "start": 4424,
                                            "end": 4434
                                          },
                                          "start": 4415,
                                          "end": 4434
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4437,
                                          "end": 4446
                                        }
                                      ],
                                      "start": 4415,
                                      "end": 4446
                                    },
                                    "start": 4413,
                                    "end": 4446
                                  },
                                  "start": 4404,
                                  "end": 4446
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
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
                                            "name": "ImportClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4462,
                                            "end": 4474
                                          },
                                          "typeArguments": null,
                                          "start": 4462,
                                          "end": 4474
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4477,
                                          "end": 4486
                                        }
                                      ],
                                      "start": 4462,
                                      "end": 4486
                                    },
                                    "start": 4460,
                                    "end": 4486
                                  },
                                  "start": 4448,
                                  "end": 4486
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4505,
                                        "end": 4515
                                      },
                                      "typeArguments": null,
                                      "start": 4505,
                                      "end": 4515
                                    },
                                    "start": 4503,
                                    "end": 4515
                                  },
                                  "start": 4488,
                                  "end": 4515
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
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
                                            "name": "AssertClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4531,
                                            "end": 4543
                                          },
                                          "typeArguments": null,
                                          "start": 4531,
                                          "end": 4543
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4546,
                                          "end": 4555
                                        }
                                      ],
                                      "start": 4531,
                                      "end": 4555
                                    },
                                    "start": 4529,
                                    "end": 4555
                                  },
                                  "start": 4517,
                                  "end": 4555
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4558,
                                    "end": 4575
                                  },
                                  "typeArguments": null,
                                  "start": 4558,
                                  "end": 4575
                                },
                                "start": 4556,
                                "end": 4575
                              },
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
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4597,
                                        "end": 4620
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4621,
                                          "end": 4625
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4627,
                                          "end": 4636
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4638,
                                          "end": 4650
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4652,
                                          "end": 4667
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4669,
                                          "end": 4681
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4597,
                                      "end": 4682
                                    },
                                    "start": 4590,
                                    "end": 4683
                                  }
                                ],
                                "start": 4576,
                                "end": 4693
                              },
                              "expression": false,
                              "start": 4331,
                              "end": 4693
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4330,
                            "end": 4693
                          }
                        ],
                        "start": 3993,
                        "end": 4700
                      }
                    ],
                    "optional": false,
                    "start": 3938,
                    "end": 4701
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4707,
                    "end": 4711
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3938,
                  "end": 4711
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
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4722,
                          "end": 4723
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4729,
                                  "end": 4738
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4740,
                                  "end": 4752
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4754,
                                  "end": 4769
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4771,
                                  "end": 4783
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4785,
                                  "end": 4790
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4726,
                              "end": 4791
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4809,
                                      "end": 4814
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4819,
                                      "end": 4828
                                    },
                                    "start": 4809,
                                    "end": 4828
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4846,
                                        "end": 4855
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4860,
                                        "end": 4869
                                      },
                                      "start": 4846,
                                      "end": 4869
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4873,
                                        "end": 4878
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4879,
                                          "end": 4888
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isModifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4890,
                                          "end": 4900
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4873,
                                      "end": 4901
                                    },
                                    "start": 4846,
                                    "end": 4901
                                  },
                                  "start": 4808,
                                  "end": 4902
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4919,
                                      "end": 4931
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4936,
                                      "end": 4945
                                    },
                                    "start": 4919,
                                    "end": 4945
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4950,
                                        "end": 4957
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4958,
                                          "end": 4970
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4950,
                                      "end": 4971
                                    },
                                    "prefix": true,
                                    "start": 4949,
                                    "end": 4971
                                  },
                                  "start": 4919,
                                  "end": 4971
                                },
                                "start": 4808,
                                "end": 4972
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4989,
                                    "end": 5004
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5009,
                                    "end": 5018
                                  },
                                  "start": 4989,
                                  "end": 5018
                                },
                                "operator": "||",
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5022,
                                    "end": 5034
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5035,
                                      "end": 5050
                                    }
                                  ],
                                  "optional": false,
                                  "start": 5022,
                                  "end": 5051
                                },
                                "start": 4989,
                                "end": 5051
                              },
                              "start": 4808,
                              "end": 5052
                            },
                            "operator": "&&",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5069,
                                  "end": 5081
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5086,
                                  "end": 5095
                                },
                                "start": 5069,
                                "end": 5095
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5099,
                                  "end": 5113
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5114,
                                    "end": 5126
                                  }
                                ],
                                "optional": false,
                                "start": 5099,
                                "end": 5127
                              },
                              "start": 5069,
                              "end": 5127
                            },
                            "start": 4808,
                            "end": 5128
                          },
                          "id": null,
                          "generator": false,
                          "start": 4725,
                          "end": 5128
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 4722,
                        "end": 5128
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5139,
                          "end": 5140
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorators",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5146,
                                  "end": 5156
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5158,
                                  "end": 5167
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5169,
                                  "end": 5181
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5183,
                                  "end": 5198
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5200,
                                  "end": 5212
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5143,
                              "end": 5213
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "decorators",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5231,
                                        "end": 5241
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5246,
                                        "end": 5255
                                      },
                                      "start": 5231,
                                      "end": 5255
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5259,
                                        "end": 5264
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "decorators",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5265,
                                          "end": 5275
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isDecorator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5277,
                                          "end": 5288
                                        }
                                      ],
                                      "optional": false,
                                      "start": 5259,
                                      "end": 5289
                                    },
                                    "start": 5231,
                                    "end": 5289
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5307,
                                        "end": 5316
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5321,
                                        "end": 5330
                                      },
                                      "start": 5307,
                                      "end": 5330
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5334,
                                        "end": 5341
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5342,
                                          "end": 5351
                                        }
                                      ],
                                      "optional": false,
                                      "start": 5334,
                                      "end": 5352
                                    },
                                    "start": 5307,
                                    "end": 5352
                                  },
                                  "start": 5230,
                                  "end": 5353
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5370,
                                      "end": 5382
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5387,
                                      "end": 5396
                                    },
                                    "start": 5370,
                                    "end": 5396
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isImportClause",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5400,
                                      "end": 5414
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "importClause",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5415,
                                        "end": 5427
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5400,
                                    "end": 5428
                                  },
                                  "start": 5370,
                                  "end": 5428
                                },
                                "start": 5230,
                                "end": 5429
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5446,
                                    "end": 5461
                                  },
                                  "operator": "!==",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5466,
                                    "end": 5475
                                  },
                                  "start": 5446,
                                  "end": 5475
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5479,
                                    "end": 5491
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5492,
                                      "end": 5507
                                    }
                                  ],
                                  "optional": false,
                                  "start": 5479,
                                  "end": 5508
                                },
                                "start": 5446,
                                "end": 5508
                              },
                              "start": 5230,
                              "end": 5509
                            },
                            "operator": "&&",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5526,
                                  "end": 5538
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5543,
                                  "end": 5552
                                },
                                "start": 5526,
                                "end": 5552
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5556,
                                  "end": 5570
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5571,
                                    "end": 5583
                                  }
                                ],
                                "optional": false,
                                "start": 5556,
                                "end": 5584
                              },
                              "start": 5526,
                              "end": 5584
                            },
                            "start": 5230,
                            "end": 5585
                          },
                          "id": null,
                          "generator": false,
                          "start": 5142,
                          "end": 5585
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 5139,
                        "end": 5585
                      }
                    ],
                    "start": 4712,
                    "end": 5592
                  }
                ],
                "optional": false,
                "start": 3938,
                "end": 5593
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deprecate",
                "optional": false,
                "typeAnnotation": null,
                "start": 5599,
                "end": 5608
              },
              "optional": false,
              "computed": false,
              "start": 3938,
              "end": 5608
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5619,
                      "end": 5620
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DISALLOW_DECORATORS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5622,
                      "end": 5641
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5619,
                    "end": 5641
                  }
                ],
                "start": 5609,
                "end": 5647
              }
            ],
            "optional": false,
            "start": 3938,
            "end": 5648
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "finish",
            "optional": false,
            "typeAnnotation": null,
            "start": 5654,
            "end": 5660
          },
          "optional": false,
          "computed": false,
          "start": 3938,
          "end": 5660
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3938,
        "end": 5662
      },
      "directive": null,
      "start": 3938,
      "end": 5663
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
            "name": "modifiers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Modifier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5700,
                          "end": 5708
                        },
                        "typeArguments": null,
                        "start": 5700,
                        "end": 5708
                      },
                      "start": 5700,
                      "end": 5710
                    },
                    "start": 5691,
                    "end": 5710
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Decorator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5722,
                          "end": 5731
                        },
                        "typeArguments": null,
                        "start": 5722,
                        "end": 5731
                      },
                      "start": 5722,
                      "end": 5733
                    },
                    "start": 5713,
                    "end": 5733
                  }
                ],
                "start": 5691,
                "end": 5733
              },
              "start": 5689,
              "end": 5733
            },
            "start": 5680,
            "end": 5733
          },
          "init": null,
          "definite": false,
          "start": 5680,
          "end": 5733
        }
      ],
      "declare": true,
      "start": 5666,
      "end": 5734
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5745,
        "end": 5748
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 5757,
                "end": 5762
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5763,
                  "end": 5772
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isModifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5774,
                  "end": 5784
                }
              ],
              "optional": false,
              "start": 5757,
              "end": 5785
            },
            "directive": null,
            "start": 5757,
            "end": 5786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 5791,
                "end": 5796
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5797,
                  "end": 5806
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5808,
                  "end": 5819
                }
              ],
              "optional": false,
              "start": 5791,
              "end": 5820
            },
            "directive": null,
            "start": 5791,
            "end": 5821
          }
        ],
        "start": 5751,
        "end": 5823
      },
      "expression": false,
      "start": 5736,
      "end": 5823
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5823
}
```
