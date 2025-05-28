__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 751,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Map",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 91,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 141,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 100,
        "end": 141,
        "id": {
          "type": "Identifier",
          "start": 105,
          "end": 119,
          "decorators": [],
          "name": "ImmutableTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 140,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 135,
            "decorators": [],
            "name": "IImmutableMap",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 135,
            "end": 140,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 136,
                "end": 139
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 238,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 150,
        "end": 238,
        "id": {
          "type": "Identifier",
          "start": 155,
          "end": 169,
          "decorators": [],
          "name": "ImmutableModel",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 169,
          "end": 172,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 170,
              "end": 171,
              "name": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 175,
          "end": 237,
          "key": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 183,
            "end": 190,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 189,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 193,
            "end": 235,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 193,
              "end": 197,
              "objectType": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 220,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 220,
                "decorators": [],
                "name": "ImmutableTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "start": 223,
              "end": 227,
              "objectType": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 230,
              "end": 235
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 395,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 247,
        "end": 395,
        "id": {
          "type": "Identifier",
          "start": 257,
          "end": 270,
          "decorators": [],
          "name": "IImmutableMap",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 270,
          "end": 299,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 271,
              "end": 298,
              "name": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 295,
                  "decorators": [],
                  "name": "ImmutableModel",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 295,
                  "end": 298,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 296,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 308,
            "end": 324,
            "expression": {
              "type": "Identifier",
              "start": 308,
              "end": 311,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 311,
              "end": 324,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 312,
                  "end": 318
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 320,
                  "end": 323
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 325,
          "end": 395,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 331,
              "end": 393,
              "key": {
                "type": "Identifier",
                "start": 331,
                "end": 334,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 334,
                "end": 353,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 335,
                    "end": 352,
                    "name": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 345,
                      "end": 352,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 351,
                        "end": 352,
                        "typeName": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 354,
                  "end": 360,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 357,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 359,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 373,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 369,
                      "end": 373,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 369,
                        "end": 370,
                        "typeName": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 370,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 371,
                        "end": 372,
                        "typeName": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 372,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 374,
                "end": 392,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 376,
                  "end": 392,
                  "typeName": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 389,
                    "decorators": [],
                    "name": "IImmutableMap",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 389,
                    "end": 392,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 390,
                        "end": 391,
                        "typeName": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 391,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 397,
      "end": 447,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 404,
        "end": 447,
        "id": {
          "type": "Identifier",
          "start": 409,
          "end": 424,
          "decorators": [],
          "name": "ImmutableTypes2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 427,
          "end": 446,
          "typeName": {
            "type": "Identifier",
            "start": 427,
            "end": 441,
            "decorators": [],
            "name": "IImmutableMap2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 441,
            "end": 446,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 442,
                "end": 445
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 448,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 468,
        "decorators": [],
        "name": "isImmutableType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 468,
        "end": 471,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 469,
            "end": 470,
            "name": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 474,
        "end": 515,
        "checkType": {
          "type": "TSTupleType",
          "start": 474,
          "end": 477,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 475,
              "end": 476,
              "typeName": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 486,
          "end": 503,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 487,
              "end": 502,
              "typeName": {
                "type": "Identifier",
                "start": 487,
                "end": 502,
                "decorators": [],
                "name": "ImmutableTypes2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 506,
          "end": 507,
          "typeName": {
            "type": "Identifier",
            "start": 506,
            "end": 507,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 510,
          "end": 515
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 517,
      "end": 592,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 524,
        "end": 592,
        "id": {
          "type": "Identifier",
          "start": 529,
          "end": 544,
          "decorators": [],
          "name": "ImmutableModel2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 544,
          "end": 547,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 545,
              "end": 546,
              "name": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 550,
          "end": 591,
          "key": {
            "type": "Identifier",
            "start": 553,
            "end": 554,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 558,
            "end": 565,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 564,
              "end": 565,
              "typeName": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 568,
            "end": 589,
            "typeName": {
              "type": "Identifier",
              "start": 568,
              "end": 583,
              "decorators": [],
              "name": "isImmutableType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 583,
              "end": 589,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 584,
                  "end": 588,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 584,
                    "end": 585,
                    "typeName": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 585,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 586,
                    "end": 587,
                    "typeName": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 593,
      "end": 751,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 600,
        "end": 751,
        "id": {
          "type": "Identifier",
          "start": 610,
          "end": 624,
          "decorators": [],
          "name": "IImmutableMap2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 624,
          "end": 654,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 625,
              "end": 653,
              "name": {
                "type": "Identifier",
                "start": 625,
                "end": 626,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 653,
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 650,
                  "decorators": [],
                  "name": "ImmutableModel2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 650,
                  "end": 653,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 651,
                      "end": 652,
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 663,
            "end": 679,
            "expression": {
              "type": "Identifier",
              "start": 663,
              "end": 666,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 666,
              "end": 679,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 675,
                  "end": 678
                }
              ]
            }
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 680,
          "end": 751,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 686,
              "end": 749,
              "key": {
                "type": "Identifier",
                "start": 686,
                "end": 689,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 689,
                "end": 708,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 690,
                    "end": 707,
                    "name": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 700,
                      "end": 707,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 706,
                        "end": 707,
                        "typeName": {
                          "type": "Identifier",
                          "start": 706,
                          "end": 707,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 709,
                  "end": 715,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 712,
                    "end": 715,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 714,
                      "end": 715,
                      "typeName": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 715,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 717,
                  "end": 728,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 722,
                    "end": 728,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 724,
                      "end": 728,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 724,
                        "end": 725,
                        "typeName": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 725,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 726,
                        "end": 727,
                        "typeName": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 727,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 729,
                "end": 748,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 731,
                  "end": 748,
                  "typeName": {
                    "type": "Identifier",
                    "start": 731,
                    "end": 745,
                    "decorators": [],
                    "name": "IImmutableMap2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 745,
                    "end": 748,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 746,
                        "end": 747,
                        "typeName": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 747,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
