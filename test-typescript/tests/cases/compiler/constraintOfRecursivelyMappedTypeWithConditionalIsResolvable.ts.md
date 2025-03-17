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
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 91,
        "body": []
      },
      "declare": false,
      "extends": [],
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 141,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 100,
        "end": 141,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 105,
          "end": 119,
          "decorators": [],
          "name": "ImmutableTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 140,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 135,
            "decorators": [],
            "name": "IImmutableMap",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 238,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 150,
        "end": 238,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 155,
          "end": 169,
          "decorators": [],
          "name": "ImmutableModel",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 175,
          "end": 237,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 183,
            "end": 190,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 189,
              "end": 190,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 193,
            "end": 235,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 193,
              "end": 197,
              "indexType": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 194,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 220,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 220,
                "decorators": [],
                "name": "ImmutableTypes",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 230,
              "end": 235
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "start": 223,
              "end": 227,
              "indexType": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 226,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 395,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 247,
        "end": 395,
        "body": {
          "type": "TSInterfaceBody",
          "start": 325,
          "end": 395,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 331,
              "end": 393,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 331,
                "end": 334,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 371,
                        "end": 372,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 372,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 369,
                        "end": 370,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 370,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 374,
                "end": 392,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 376,
                  "end": 392,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 389,
                    "end": 392,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 390,
                        "end": 391,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 391,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 389,
                    "decorators": [],
                    "name": "IImmutableMap",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 334,
                "end": 353,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 335,
                    "end": 352,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 345,
                      "end": 352,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 351,
                        "end": 352,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
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
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 298,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 295,
                  "end": 298,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 296,
                      "end": 297,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 295,
                  "decorators": [],
                  "name": "ImmutableModel",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 397,
      "end": 447,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 404,
        "end": 447,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 409,
          "end": 424,
          "decorators": [],
          "name": "ImmutableTypes2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 427,
          "end": 446,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 427,
            "end": 441,
            "decorators": [],
            "name": "IImmutableMap2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 448,
      "end": 516,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 468,
        "decorators": [],
        "name": "isImmutableType",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 487,
                "end": 502,
                "decorators": [],
                "name": "ImmutableTypes2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 510,
          "end": 515
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 506,
          "end": 507,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 506,
            "end": 507,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 517,
      "end": 592,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 524,
        "end": 592,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 529,
          "end": 544,
          "decorators": [],
          "name": "ImmutableModel2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 550,
          "end": 591,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 558,
            "end": 565,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 564,
              "end": 565,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 553,
            "end": 554,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 568,
            "end": 589,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 583,
              "end": 589,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 584,
                  "end": 588,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 586,
                    "end": 587,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 584,
                    "end": 585,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 585,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 568,
              "end": 583,
              "decorators": [],
              "name": "isImmutableType",
              "optional": false,
              "typeAnnotation": null
            }
          }
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 593,
      "end": 751,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 600,
        "end": 751,
        "body": {
          "type": "TSInterfaceBody",
          "start": 680,
          "end": 751,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 686,
              "end": 749,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 686,
                "end": 689,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 715,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 726,
                        "end": 727,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 727,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 724,
                        "end": 725,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 725,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 729,
                "end": 748,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 731,
                  "end": 748,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 745,
                    "end": 748,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 746,
                        "end": 747,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 747,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 731,
                    "end": 745,
                    "decorators": [],
                    "name": "IImmutableMap2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 689,
                "end": 708,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 690,
                    "end": 707,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 700,
                      "end": 707,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 706,
                        "end": 707,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 706,
                          "end": 707,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
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
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 635,
                "end": 653,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 650,
                  "end": 653,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 651,
                      "end": 652,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 650,
                  "decorators": [],
                  "name": "ImmutableModel2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 625,
                "end": 626,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
