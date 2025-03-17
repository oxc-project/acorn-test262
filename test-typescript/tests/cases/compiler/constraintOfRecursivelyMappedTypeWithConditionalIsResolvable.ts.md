__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 752,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "name": "Map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
          "name": "ImmutableTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "IImmutableMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "ImmutableModel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 178,
            "end": 190,
            "name": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "name": "ImmutableTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          "optional": null,
          "readonly": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "IImmutableMap",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 295,
                  "name": "ImmutableModel",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                  "name": "key",
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
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 373,
                  "name": "value",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "IImmutableMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "ImmutableTypes2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "IImmutableMap2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 448,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 468,
        "name": "isImmutableType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "ImmutableTypes2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "ImmutableModel2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 553,
            "end": 565,
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
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
              "name": "isImmutableType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": null,
          "readonly": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 553,
            "end": 554,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "IImmutableMap2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 653,
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 650,
                  "name": "ImmutableModel2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "name": "set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                  "name": "key",
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
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 717,
                  "end": 728,
                  "name": "value",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "IImmutableMap2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
