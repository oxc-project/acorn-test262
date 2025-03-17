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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 61,
        "end": 104,
        "typeName": {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "name": "MustBeKey",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "name": "Extract",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "K1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 103,
                    "name": "K2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 117,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 160,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 142,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 168,
        "end": 211,
        "typeName": {
          "type": "Identifier",
          "start": 168,
          "end": 177,
          "name": "MustBeKey",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "name": "K1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 183,
                  "end": 185,
                  "typeName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 185,
                    "name": "K2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 210,
                  "typeName": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 195,
                    "name": "Extract",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "K1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 214,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 228,
        "name": "MustBeKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 252,
        "end": 253,
        "typeName": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 313,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 324,
        "name": "AnyKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 354,
      "end": 542,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 374,
        "name": "ReturnTypeKeyof",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 375,
              "end": 378,
              "name": "Obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "Obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 409,
          "end": 415
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 460,
            "end": 465
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 476,
            "end": 529,
            "objectType": {
              "type": "TSMappedType",
              "start": 476,
              "end": 521,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 479,
                "end": 495,
                "name": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 482,
                  "name": "Key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "name": "Obj",
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
              "nameType": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 510,
                "end": 519,
                "typeParameters": null,
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
                      "name": "Key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "optional": "-",
              "readonly": null,
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 479,
                "end": 482,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "indexType": {
              "type": "TSStringKeyword",
              "start": 522,
              "end": 528
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 536,
          "end": 541
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 544,
      "end": 762,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 571,
        "name": "KeyIfSignatureOfObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 577,
              "end": 580,
              "name": "Obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 589,
              "end": 595
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 601,
            "end": 619,
            "name": {
              "type": "Identifier",
              "start": 601,
              "end": 604,
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 613,
              "end": 619,
              "typeName": {
                "type": "Identifier",
                "start": 613,
                "end": 619,
                "name": "AnyKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 625,
            "end": 662,
            "name": {
              "type": "Identifier",
              "start": 625,
              "end": 639,
              "name": "ReturnTypeKeys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 662,
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 657,
                "name": "ReturnTypeKeyof",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "Obj",
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
            "name": "ReturnTypeKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 691,
          "end": 700,
          "typeParameters": null,
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
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 704,
          "end": 752,
          "checkType": {
            "type": "TSFunctionType",
            "start": 705,
            "end": 714,
            "typeParameters": null,
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
                  "name": "Key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
              "name": "ReturnTypeKeys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 741,
            "end": 744,
            "typeName": {
              "type": "Identifier",
              "start": 741,
              "end": 744,
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 747,
            "end": 752
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 756,
          "end": 761
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 764,
      "end": 1024,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 771,
        "end": 1024,
        "id": {
          "type": "Identifier",
          "start": 776,
          "end": 784,
          "name": "Reduced1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 785,
                "end": 788,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 797,
                "end": 803
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 805,
              "end": 823,
              "name": {
                "type": "Identifier",
                "start": 805,
                "end": 808,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 817,
                "end": 823,
                "typeName": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 823,
                  "name": "AnyKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 825,
              "end": 830,
              "name": {
                "type": "Identifier",
                "start": 825,
                "end": 830,
                "name": "Value",
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
              "start": 832,
              "end": 869,
              "name": {
                "type": "Identifier",
                "start": 832,
                "end": 839,
                "name": "ObjKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 889,
            "end": 921,
            "typeName": {
              "type": "Identifier",
              "start": 889,
              "end": 911,
              "name": "KeyIfSignatureOfObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 917,
                  "end": 920,
                  "typeName": {
                    "type": "Identifier",
                    "start": 917,
                    "end": 920,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
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
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 944,
              "end": 951,
              "typeName": {
                "type": "Identifier",
                "start": 944,
                "end": 951,
                "name": "ObjKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSMappedType",
              "start": 966,
              "end": 987,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 969,
                "end": 977,
                "name": {
                  "type": "Identifier",
                  "start": 969,
                  "end": 970,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 974,
                  "end": 977,
                  "typeName": {
                    "type": "Identifier",
                    "start": 974,
                    "end": 977,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
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
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 974,
                "end": 977,
                "typeName": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 977,
                  "name": "Key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1002,
              "end": 1007
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1018,
            "end": 1023
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
      "start": 1026,
      "end": 1345,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1033,
        "end": 1345,
        "id": {
          "type": "Identifier",
          "start": 1038,
          "end": 1046,
          "name": "Reduced2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 1047,
                "end": 1050,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1059,
                "end": 1065
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1067,
              "end": 1085,
              "name": {
                "type": "Identifier",
                "start": 1067,
                "end": 1070,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1079,
                "end": 1085,
                "typeName": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1085,
                  "name": "AnyKey",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1087,
              "end": 1092,
              "name": {
                "type": "Identifier",
                "start": 1087,
                "end": 1092,
                "name": "Value",
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
              "start": 1094,
              "end": 1131,
              "name": {
                "type": "Identifier",
                "start": 1094,
                "end": 1101,
                "name": "ObjKeys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1151,
            "end": 1157,
            "typeName": {
              "type": "Identifier",
              "start": 1151,
              "end": 1157,
              "name": "AnyKey",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 1180,
              "end": 1212,
              "typeName": {
                "type": "Identifier",
                "start": 1180,
                "end": 1202,
                "name": "KeyIfSignatureOfObject",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1208,
                    "end": 1211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1208,
                      "end": 1211,
                      "name": "Key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
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
                  "name": "Key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1239,
                "end": 1246,
                "typeName": {
                  "type": "Identifier",
                  "start": 1239,
                  "end": 1246,
                  "name": "ObjKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSMappedType",
                "start": 1264,
                "end": 1285,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1267,
                  "end": 1275,
                  "name": {
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1268,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1272,
                    "end": 1275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1272,
                      "end": 1275,
                      "name": "Key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
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
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 1272,
                  "end": 1275,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1272,
                    "end": 1275,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 1267,
                  "end": 1268,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1303,
                "end": 1308
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1323,
              "end": 1328
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1339,
            "end": 1344
          }
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
