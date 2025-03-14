__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1346,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 61,
        "end": 104,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 70,
          "end": 104,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 71,
              "end": 103,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 71,
                  "end": 93,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 78,
                    "end": 93,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 79,
                        "end": 81,
                        "typeName": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 81,
                          "decorators": [],
                          "name": "K1",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "start": 83,
                        "end": 92,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 89,
                          "end": 92
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "decorators": [],
                    "name": "Extract",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 98,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 98,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 103,
                    "decorators": [],
                    "name": "K2",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "MustBeKey",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 31,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 22,
              "end": 31,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "K1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 53,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 44,
              "end": 53,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "decorators": [],
              "name": "K2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 212,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 117,
        "decorators": [],
        "name": "Test2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 168,
        "end": 211,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 177,
          "end": 211,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 178,
              "end": 210,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 180,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 180,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 183,
                  "end": 185,
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 185,
                    "decorators": [],
                    "name": "K2",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 210,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 195,
                    "end": 210,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 196,
                        "end": 198,
                        "typeName": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 198,
                          "decorators": [],
                          "name": "K1",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeOperator",
                        "start": 200,
                        "end": 209,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 206,
                          "end": 209
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 195,
                    "decorators": [],
                    "name": "Extract",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 168,
          "end": 177,
          "decorators": [],
          "name": "MustBeKey",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 138,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 129,
              "end": 138,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
              "decorators": [],
              "name": "K1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 160,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 151,
              "end": 160,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 157,
                "end": 160
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 142,
              "decorators": [],
              "name": "K2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 214,
      "end": 254,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 228,
        "decorators": [],
        "name": "MustBeKey",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 252,
        "end": 253,
        "typeName": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "decorators": [],
          "name": "K",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 228,
        "end": 249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 229,
            "end": 248,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 239,
              "end": 248,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 245,
                "end": 248
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 313,
      "end": 352,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 324,
        "decorators": [],
        "name": "AnyKey",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 327,
        "end": 351,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 327,
            "end": 333
          },
          {
            "type": "TSStringKeyword",
            "start": 336,
            "end": 342
          },
          {
            "type": "TSSymbolKeyword",
            "start": 345,
            "end": 351
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 354,
      "end": 542,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 374,
        "decorators": [],
        "name": "ReturnTypeKeyof",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 397,
        "end": 541,
        "checkType": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 400,
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 400,
            "decorators": [],
            "name": "Obj",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 409,
          "end": 415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 536,
          "end": 541
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 422,
          "end": 529,
          "checkType": {
            "type": "TSTupleType",
            "start": 422,
            "end": 433,
            "elementTypes": [
              {
                "type": "TSTypeOperator",
                "start": 423,
                "end": 432,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 429,
                  "end": 432,
                  "typeName": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                }
              }
            ]
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 442,
            "end": 449,
            "elementTypes": [
              {
                "type": "TSNeverKeyword",
                "start": 443,
                "end": 448
              }
            ]
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 476,
            "end": 529,
            "indexType": {
              "type": "TSStringKeyword",
              "start": 522,
              "end": 528
            },
            "objectType": {
              "type": "TSMappedType",
              "start": 476,
              "end": 521,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 486,
                "end": 495,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 492,
                  "end": 495,
                  "typeName": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 495,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 479,
                "end": 482,
                "decorators": [],
                "name": "Key",
                "optional": false
              },
              "nameType": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              },
              "optional": "-",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 510,
                "end": 519,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 513,
                  "end": 519,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 516,
                    "end": 519,
                    "typeName": {
                      "type": "Identifier",
                      "start": 516,
                      "end": 519,
                      "decorators": [],
                      "name": "Key",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 460,
            "end": 465
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 374,
        "end": 394,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 375,
            "end": 393,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 375,
              "end": 378,
              "decorators": [],
              "name": "Obj",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 544,
      "end": 762,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 571,
        "decorators": [],
        "name": "KeyIfSignatureOfObject",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 668,
        "end": 761,
        "checkType": {
          "type": "TSTypeReference",
          "start": 668,
          "end": 682,
          "typeName": {
            "type": "Identifier",
            "start": 668,
            "end": 682,
            "decorators": [],
            "name": "ReturnTypeKeys",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 691,
          "end": 700,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 694,
            "end": 700,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 697,
              "end": 700,
              "typeName": {
                "type": "Identifier",
                "start": 697,
                "end": 700,
                "decorators": [],
                "name": "Key",
                "optional": false
              }
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 756,
          "end": 761
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 704,
          "end": 752,
          "checkType": {
            "type": "TSFunctionType",
            "start": 705,
            "end": 714,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 708,
              "end": 714,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 711,
                "end": 714,
                "typeName": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 714,
                  "decorators": [],
                  "name": "Key",
                  "optional": false
                }
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 724,
            "end": 738,
            "typeName": {
              "type": "Identifier",
              "start": 724,
              "end": 738,
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 747,
            "end": 752
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 741,
            "end": 744,
            "typeName": {
              "type": "Identifier",
              "start": 741,
              "end": 744,
              "decorators": [],
              "name": "Key",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 571,
        "end": 665,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 577,
            "end": 595,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 589,
              "end": 595
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 577,
              "end": 580,
              "decorators": [],
              "name": "Obj",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 601,
            "end": 619,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 613,
              "end": 619,
              "typeName": {
                "type": "Identifier",
                "start": 613,
                "end": 619,
                "decorators": [],
                "name": "AnyKey",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 601,
              "end": 604,
              "decorators": [],
              "name": "Key",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 625,
            "end": 662,
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 662,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 657,
                "end": 662,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 658,
                    "end": 661,
                    "typeName": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 661,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 657,
                "decorators": [],
                "name": "ReturnTypeKeyof",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 625,
              "end": 639,
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 764,
      "end": 1024,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 771,
        "end": 1024,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 776,
          "end": 784,
          "decorators": [],
          "name": "Reduced1",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 877,
          "end": 1023,
          "checkType": {
            "type": "TSTypeReference",
            "start": 877,
            "end": 880,
            "typeName": {
              "type": "Identifier",
              "start": 877,
              "end": 880,
              "decorators": [],
              "name": "Key",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 889,
            "end": 921,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 911,
              "end": 921,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 912,
                  "end": 915,
                  "typeName": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 915,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 917,
                  "end": 920,
                  "typeName": {
                    "type": "Identifier",
                    "start": 917,
                    "end": 920,
                    "decorators": [],
                    "name": "Key",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 889,
              "end": 911,
              "decorators": [],
              "name": "KeyIfSignatureOfObject",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1018,
            "end": 1023
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 932,
            "end": 1007,
            "checkType": {
              "type": "TSTypeReference",
              "start": 932,
              "end": 935,
              "typeName": {
                "type": "Identifier",
                "start": 932,
                "end": 935,
                "decorators": [],
                "name": "Key",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 944,
              "end": 951,
              "typeName": {
                "type": "Identifier",
                "start": 944,
                "end": 951,
                "decorators": [],
                "name": "ObjKeys",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1002,
              "end": 1007
            },
            "trueType": {
              "type": "TSMappedType",
              "start": 966,
              "end": 987,
              "constraint": {
                "type": "TSTypeReference",
                "start": 974,
                "end": 977,
                "typeName": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 977,
                  "decorators": [],
                  "name": "Key",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 980,
                "end": 985,
                "typeName": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 985,
                  "decorators": [],
                  "name": "Value",
                  "optional": false
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 784,
          "end": 870,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 785,
              "end": 803,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 797,
                "end": 803
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 785,
                "end": 788,
                "decorators": [],
                "name": "Obj",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 805,
              "end": 823,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 817,
                "end": 823,
                "typeName": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 823,
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 805,
                "end": 808,
                "decorators": [],
                "name": "Key",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 825,
              "end": 830,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 825,
                "end": 830,
                "decorators": [],
                "name": "Value",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 832,
              "end": 869,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 848,
                "end": 857,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 854,
                  "end": 857,
                  "typeName": {
                    "type": "Identifier",
                    "start": 854,
                    "end": 857,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                }
              },
              "default": {
                "type": "TSTypeOperator",
                "start": 860,
                "end": 869,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 866,
                  "end": 869,
                  "typeName": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 869,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 832,
                "end": 839,
                "decorators": [],
                "name": "ObjKeys",
                "optional": false
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
      "start": 1026,
      "end": 1345,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1033,
        "end": 1345,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1038,
          "end": 1046,
          "decorators": [],
          "name": "Reduced2",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1139,
          "end": 1344,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1139,
            "end": 1142,
            "typeName": {
              "type": "Identifier",
              "start": 1139,
              "end": 1142,
              "decorators": [],
              "name": "Key",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1151,
            "end": 1157,
            "typeName": {
              "type": "Identifier",
              "start": 1151,
              "end": 1157,
              "decorators": [],
              "name": "AnyKey",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1339,
            "end": 1344
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 1168,
            "end": 1328,
            "checkType": {
              "type": "TSTypeReference",
              "start": 1168,
              "end": 1171,
              "typeName": {
                "type": "Identifier",
                "start": 1168,
                "end": 1171,
                "decorators": [],
                "name": "Key",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 1180,
              "end": 1212,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1202,
                "end": 1212,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1203,
                    "end": 1206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1203,
                      "end": 1206,
                      "decorators": [],
                      "name": "Obj",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1208,
                    "end": 1211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1208,
                      "end": 1211,
                      "decorators": [],
                      "name": "Key",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1180,
                "end": 1202,
                "decorators": [],
                "name": "KeyIfSignatureOfObject",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1323,
              "end": 1328
            },
            "trueType": {
              "type": "TSConditionalType",
              "start": 1227,
              "end": 1308,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1227,
                "end": 1230,
                "typeName": {
                  "type": "Identifier",
                  "start": 1227,
                  "end": 1230,
                  "decorators": [],
                  "name": "Key",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1239,
                "end": 1246,
                "typeName": {
                  "type": "Identifier",
                  "start": 1239,
                  "end": 1246,
                  "decorators": [],
                  "name": "ObjKeys",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1303,
                "end": 1308
              },
              "trueType": {
                "type": "TSMappedType",
                "start": 1264,
                "end": 1285,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 1272,
                  "end": 1275,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1272,
                    "end": 1275,
                    "decorators": [],
                    "name": "Key",
                    "optional": false
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 1267,
                  "end": 1268,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1278,
                  "end": 1283,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1278,
                    "end": 1283,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1046,
          "end": 1132,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1047,
              "end": 1065,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1059,
                "end": 1065
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1047,
                "end": 1050,
                "decorators": [],
                "name": "Obj",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1067,
              "end": 1085,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1079,
                "end": 1085,
                "typeName": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1085,
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1067,
                "end": 1070,
                "decorators": [],
                "name": "Key",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1087,
              "end": 1092,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1087,
                "end": 1092,
                "decorators": [],
                "name": "Value",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1094,
              "end": 1131,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1110,
                "end": 1119,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1116,
                  "end": 1119,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1116,
                    "end": 1119,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                }
              },
              "default": {
                "type": "TSTypeOperator",
                "start": 1122,
                "end": 1131,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1128,
                  "end": 1131,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1128,
                    "end": 1131,
                    "decorators": [],
                    "name": "Obj",
                    "optional": false
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1094,
                "end": 1101,
                "decorators": [],
                "name": "ObjKeys",
                "optional": false
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
