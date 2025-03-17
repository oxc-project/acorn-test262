__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 243,
  "end": 1722,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 267,
        "name": "spected",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 359,
          "end": 369,
          "name": "spec",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 369,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 365,
              "end": 369,
              "typeName": {
                "type": "Identifier",
                "start": 365,
                "end": 369,
                "name": "SPEC",
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
          "start": 371,
          "end": 387,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 387,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 387,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 387,
                "name": "ROOTINPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 267,
        "end": 358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 268,
            "end": 277,
            "name": {
              "type": "Identifier",
              "start": 268,
              "end": 277,
              "name": "ROOTINPUT",
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
            "start": 279,
            "end": 357,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "SPEC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 292,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 292,
                "end": 301,
                "name": "SpecValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 301,
                "end": 323,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 302,
                    "end": 311,
                    "typeName": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 311,
                      "name": "ROOTINPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 313,
                    "end": 322,
                    "typeName": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 322,
                      "name": "ROOTINPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 326,
              "end": 357,
              "typeName": {
                "type": "Identifier",
                "start": 326,
                "end": 335,
                "name": "SpecValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 335,
                "end": 357,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 336,
                    "end": 345,
                    "typeName": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 345,
                      "name": "ROOTINPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 347,
                    "end": 356,
                    "typeName": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 356,
                      "name": "ROOTINPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 388,
        "end": 413,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 390,
          "end": 413,
          "typeName": {
            "type": "Identifier",
            "start": 390,
            "end": 396,
            "name": "Result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 396,
            "end": 413,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 397,
                "end": 406,
                "typeName": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 406,
                  "name": "ROOTINPUT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 408,
                "end": 412,
                "typeName": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 412,
                  "name": "SPEC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 416,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 430,
        "name": "Predicate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 430,
        "end": 448,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 431,
            "end": 436,
            "name": {
              "type": "Identifier",
              "start": 431,
              "end": 436,
              "name": "INPUT",
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
            "start": 438,
            "end": 447,
            "name": {
              "type": "Identifier",
              "start": 438,
              "end": 447,
              "name": "ROOTINPUT",
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
        "type": "TSFunctionType",
        "start": 451,
        "end": 495,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 452,
            "end": 464,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 457,
              "end": 464,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 459,
                "end": 464,
                "typeName": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 464,
                  "name": "INPUT",
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
            "start": 466,
            "end": 483,
            "name": "inputs",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 483,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 483,
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 483,
                  "name": "ROOTINPUT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 485,
          "end": 495,
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 488,
            "end": 495
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 498,
      "end": 637,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 511,
        "name": "ErrorMsg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 511,
        "end": 518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 512,
            "end": 517,
            "name": {
              "type": "Identifier",
              "start": 512,
              "end": 517,
              "name": "INPUT",
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
        "type": "TSUnionType",
        "start": 525,
        "end": 636,
        "types": [
          {
            "type": "TSUnionType",
            "start": 528,
            "end": 590,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 528,
                "end": 534
              },
              {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              },
              {
                "type": "TSBooleanKeyword",
                "start": 546,
                "end": 553
              },
              {
                "type": "TSSymbolKeyword",
                "start": 556,
                "end": 562
              },
              {
                "type": "TSNullKeyword",
                "start": 565,
                "end": 569
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 572,
                "end": 581
              },
              {
                "type": "TSObjectKeyword",
                "start": 584,
                "end": 590
              }
            ]
          },
          {
            "type": "TSFunctionType",
            "start": 599,
            "end": 635,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 600,
                "end": 612,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 605,
                  "end": 612,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 607,
                    "end": 612,
                    "typeName": {
                      "type": "Identifier",
                      "start": 607,
                      "end": 612,
                      "name": "INPUT",
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
                "start": 614,
                "end": 627,
                "name": "field",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 619,
                  "end": 627,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 621,
                    "end": 627
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 635,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 632,
                "end": 635
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 639,
      "end": 729,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 646,
        "end": 729,
        "id": {
          "type": "Identifier",
          "start": 651,
          "end": 655,
          "name": "Spec",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 655,
          "end": 679,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 656,
              "end": 661,
              "name": {
                "type": "Identifier",
                "start": 656,
                "end": 661,
                "name": "INPUT",
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
              "start": 663,
              "end": 678,
              "name": {
                "type": "Identifier",
                "start": 663,
                "end": 672,
                "name": "ROOTINPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 675,
                "end": 678
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 682,
          "end": 728,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 683,
              "end": 710,
              "typeName": {
                "type": "Identifier",
                "start": 683,
                "end": 692,
                "name": "Predicate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 692,
                "end": 710,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 693,
                    "end": 698,
                    "typeName": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 698,
                      "name": "INPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 700,
                    "end": 709,
                    "typeName": {
                      "type": "Identifier",
                      "start": 700,
                      "end": 709,
                      "name": "ROOTINPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 712,
              "end": 727,
              "typeName": {
                "type": "Identifier",
                "start": 712,
                "end": 720,
                "name": "ErrorMsg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 720,
                "end": 727,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 721,
                    "end": 726,
                    "typeName": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 726,
                      "name": "INPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
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
      "start": 731,
      "end": 809,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 738,
        "end": 809,
        "id": {
          "type": "Identifier",
          "start": 743,
          "end": 752,
          "name": "SpecArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 752,
          "end": 776,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 753,
              "end": 758,
              "name": {
                "type": "Identifier",
                "start": 753,
                "end": 758,
                "name": "INPUT",
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
              "start": 760,
              "end": 775,
              "name": {
                "type": "Identifier",
                "start": 760,
                "end": 769,
                "name": "ROOTINPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 772,
                "end": 775
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 779,
          "end": 808,
          "typeName": {
            "type": "Identifier",
            "start": 779,
            "end": 784,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 784,
            "end": 808,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 785,
                "end": 807,
                "typeName": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 789,
                  "name": "Spec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 789,
                  "end": 807,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 790,
                      "end": 795,
                      "typeName": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 795,
                        "name": "INPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 797,
                      "end": 806,
                      "typeName": {
                        "type": "Identifier",
                        "start": 797,
                        "end": 806,
                        "name": "ROOTINPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 811,
      "end": 1110,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 818,
        "end": 1110,
        "id": {
          "type": "Identifier",
          "start": 823,
          "end": 835,
          "name": "SpecFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 835,
          "end": 859,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 836,
              "end": 841,
              "name": {
                "type": "Identifier",
                "start": 836,
                "end": 841,
                "name": "INPUT",
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
              "start": 843,
              "end": 858,
              "name": {
                "type": "Identifier",
                "start": 843,
                "end": 852,
                "name": "ROOTINPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 855,
                "end": 858
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 862,
          "end": 1109,
          "checkType": {
            "type": "TSTupleType",
            "start": 862,
            "end": 869,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 863,
                "end": 868,
                "typeName": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 868,
                  "name": "INPUT",
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
            "start": 878,
            "end": 902,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 879,
                "end": 901,
                "typeName": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 892,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 892,
                  "end": 901,
                  "params": [
                    {
                      "type": "TSInferType",
                      "start": 893,
                      "end": 900,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 899,
                        "end": 900,
                        "name": {
                          "type": "Identifier",
                          "start": 899,
                          "end": 900,
                          "name": "U",
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
                    }
                  ]
                }
              }
            ]
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 909,
            "end": 965,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 910,
                "end": 922,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 915,
                  "end": 922,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 917,
                    "end": 922,
                    "typeName": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 922,
                      "name": "INPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 924,
              "end": 965,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 927,
                "end": 965,
                "typeName": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 940,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 940,
                  "end": 965,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 941,
                      "end": 964,
                      "typeName": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 950,
                        "name": "SpecArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 950,
                        "end": 964,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 951,
                            "end": 952,
                            "typeName": {
                              "type": "Identifier",
                              "start": 951,
                              "end": 952,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 954,
                            "end": 963,
                            "typeName": {
                              "type": "Identifier",
                              "start": 954,
                              "end": 963,
                              "name": "ROOTINPUT",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 972,
            "end": 1109,
            "checkType": {
              "type": "TSTupleType",
              "start": 972,
              "end": 979,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 973,
                  "end": 978,
                  "typeName": {
                    "type": "Identifier",
                    "start": 973,
                    "end": 978,
                    "name": "INPUT",
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
              "start": 988,
              "end": 996,
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 989,
                  "end": 995
                }
              ]
            },
            "trueType": {
              "type": "TSFunctionType",
              "start": 1007,
              "end": 1053,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1020,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1013,
                    "end": 1020,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1015,
                      "end": 1020,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1015,
                        "end": 1020,
                        "name": "INPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1022,
                "end": 1053,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1025,
                  "end": 1053,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1035,
                    "name": "SpecObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1035,
                    "end": 1053,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1036,
                        "end": 1041,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1041,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1043,
                        "end": 1052,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1043,
                          "end": 1052,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "falseType": {
              "type": "TSFunctionType",
              "start": 1064,
              "end": 1109,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1065,
                  "end": 1077,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1070,
                    "end": 1077,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1072,
                      "end": 1077,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1072,
                        "end": 1077,
                        "name": "INPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1079,
                "end": 1109,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1082,
                  "end": 1109,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1091,
                    "name": "SpecArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1091,
                    "end": 1109,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1092,
                        "end": 1097,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1092,
                          "end": 1097,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1099,
                        "end": 1108,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1099,
                          "end": 1108,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
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
      "start": 1112,
      "end": 1227,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1119,
        "end": 1227,
        "id": {
          "type": "Identifier",
          "start": 1124,
          "end": 1134,
          "name": "SpecObject",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1134,
          "end": 1158,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1135,
              "end": 1140,
              "name": {
                "type": "Identifier",
                "start": 1135,
                "end": 1140,
                "name": "INPUT",
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
              "start": 1142,
              "end": 1157,
              "name": {
                "type": "Identifier",
                "start": 1142,
                "end": 1151,
                "name": "ROOTINPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 1154,
                "end": 1157
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1161,
          "end": 1226,
          "typeName": {
            "type": "Identifier",
            "start": 1161,
            "end": 1168,
            "name": "Partial",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1168,
            "end": 1226,
            "params": [
              {
                "type": "TSMappedType",
                "start": 1169,
                "end": 1225,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1171,
                  "end": 1189,
                  "name": {
                    "type": "Identifier",
                    "start": 1171,
                    "end": 1174,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1178,
                    "end": 1189,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1184,
                      "end": 1189,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1184,
                        "end": 1189,
                        "name": "INPUT",
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
                  "start": 1192,
                  "end": 1224,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1192,
                    "end": 1201,
                    "name": "SpecValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1201,
                    "end": 1224,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 1202,
                        "end": 1212,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1202,
                          "end": 1207,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1202,
                            "end": 1207,
                            "name": "INPUT",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1208,
                          "end": 1211,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1208,
                            "end": 1211,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1214,
                        "end": 1223,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1214,
                          "end": 1223,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 1178,
                  "end": 1189,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1184,
                    "end": 1189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1184,
                      "end": 1189,
                      "name": "INPUT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 1171,
                  "end": 1174,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "start": 1229,
      "end": 1597,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1236,
        "end": 1597,
        "id": {
          "type": "Identifier",
          "start": 1241,
          "end": 1250,
          "name": "SpecValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1250,
          "end": 1274,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1251,
              "end": 1256,
              "name": {
                "type": "Identifier",
                "start": 1251,
                "end": 1256,
                "name": "INPUT",
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
              "start": 1258,
              "end": 1273,
              "name": {
                "type": "Identifier",
                "start": 1258,
                "end": 1267,
                "name": "ROOTINPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 1270,
                "end": 1273
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1277,
          "end": 1596,
          "checkType": {
            "type": "TSTupleType",
            "start": 1277,
            "end": 1284,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 1278,
                "end": 1283,
                "typeName": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1283,
                  "name": "INPUT",
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
            "start": 1293,
            "end": 1313,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 1294,
                "end": 1312,
                "typeName": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1307,
                  "name": "ReadonlyArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1307,
                  "end": 1312,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1308,
                      "end": 1311
                    }
                  ]
                }
              }
            ]
          },
          "trueType": {
            "type": "TSUnionType",
            "start": 1320,
            "end": 1380,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1320,
                "end": 1347,
                "typeName": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1329,
                  "name": "SpecArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1329,
                  "end": 1347,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1330,
                      "end": 1335,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1330,
                        "end": 1335,
                        "name": "INPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1337,
                      "end": 1346,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1337,
                        "end": 1346,
                        "name": "ROOTINPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1350,
                "end": 1380,
                "typeName": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1362,
                  "name": "SpecFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1362,
                  "end": 1380,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1363,
                      "end": 1368,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1368,
                        "name": "INPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1370,
                      "end": 1379,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1379,
                        "name": "ROOTINPUT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 1391,
            "end": 1596,
            "checkType": {
              "type": "TSTupleType",
              "start": 1391,
              "end": 1398,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 1392,
                  "end": 1397,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1392,
                    "end": 1397,
                    "name": "INPUT",
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
              "start": 1407,
              "end": 1415,
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1408,
                  "end": 1414
                }
              ]
            },
            "trueType": {
              "type": "TSUnionType",
              "start": 1430,
              "end": 1521,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1430,
                  "end": 1457,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1430,
                    "end": 1439,
                    "name": "SpecArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1439,
                    "end": 1457,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1440,
                        "end": 1445,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1440,
                          "end": 1445,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1447,
                        "end": 1456,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1447,
                          "end": 1456,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1460,
                  "end": 1490,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1460,
                    "end": 1472,
                    "name": "SpecFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1472,
                    "end": 1490,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1473,
                        "end": 1478,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1473,
                          "end": 1478,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1480,
                        "end": 1489,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1480,
                          "end": 1489,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1493,
                  "end": 1521,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1503,
                    "name": "SpecObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1503,
                    "end": 1521,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1504,
                        "end": 1509,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1504,
                          "end": 1509,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1511,
                        "end": 1520,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1511,
                          "end": 1520,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            },
            "falseType": {
              "type": "TSUnionType",
              "start": 1536,
              "end": 1596,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1536,
                  "end": 1563,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1536,
                    "end": 1545,
                    "name": "SpecArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1545,
                    "end": 1563,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1546,
                        "end": 1551,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1551,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1553,
                        "end": 1562,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1553,
                          "end": 1562,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1566,
                  "end": 1596,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1566,
                    "end": 1578,
                    "name": "SpecFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1578,
                    "end": 1596,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1579,
                        "end": 1584,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1579,
                          "end": 1584,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1586,
                        "end": 1595,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1586,
                          "end": 1595,
                          "name": "ROOTINPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
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
      "start": 1599,
      "end": 1696,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1606,
        "end": 1696,
        "id": {
          "type": "Identifier",
          "start": 1611,
          "end": 1617,
          "name": "Result",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1617,
          "end": 1630,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1618,
              "end": 1623,
              "name": {
                "type": "Identifier",
                "start": 1618,
                "end": 1623,
                "name": "INPUT",
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
              "start": 1625,
              "end": 1629,
              "name": {
                "type": "Identifier",
                "start": 1625,
                "end": 1629,
                "name": "SPEC",
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
          "start": 1633,
          "end": 1695,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 1635,
            "end": 1653,
            "name": {
              "type": "Identifier",
              "start": 1635,
              "end": 1638,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1642,
              "end": 1653,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1648,
                "end": 1653,
                "typeName": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1653,
                  "name": "INPUT",
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
            "type": "TSUnionType",
            "start": 1656,
            "end": 1694,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 1656,
                "end": 1660,
                "literal": {
                  "type": "Literal",
                  "start": 1656,
                  "end": 1660,
                  "value": true,
                  "raw": "true"
                }
              },
              {
                "type": "TSArrayType",
                "start": 1663,
                "end": 1668,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1663,
                  "end": 1666
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1671,
                "end": 1694,
                "typeName": {
                  "type": "Identifier",
                  "start": 1671,
                  "end": 1677,
                  "name": "Result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1677,
                  "end": 1694,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 1678,
                      "end": 1688,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1678,
                        "end": 1683,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1678,
                          "end": 1683,
                          "name": "INPUT",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1684,
                        "end": 1687,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1684,
                          "end": 1687,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1690,
                      "end": 1693
                    }
                  ]
                }
              }
            ]
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1642,
            "end": 1653,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1648,
              "end": 1653,
              "typeName": {
                "type": "Identifier",
                "start": 1648,
                "end": 1653,
                "name": "INPUT",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1635,
            "end": 1638,
            "name": "key",
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
      "type": "ExportDefaultDeclaration",
      "start": 1698,
      "end": 1721,
      "declaration": {
        "type": "Identifier",
        "start": 1713,
        "end": 1720,
        "name": "spected",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
