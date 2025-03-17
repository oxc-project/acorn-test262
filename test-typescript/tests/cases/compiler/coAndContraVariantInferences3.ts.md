__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5824,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 92,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "decorators": [],
        "name": "DeprecationOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 210,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 120,
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 126,
        "end": 209,
        "checkType": {
          "type": "TSConditionalType",
          "start": 127,
          "end": 165,
          "checkType": {
            "type": "TSTypeReference",
            "start": 127,
            "end": 128,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 137,
            "end": 140
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 143,
            "end": 157,
            "params": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 148,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 148,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 147,
                    "end": 148,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 157,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
              }
            },
            "typeParameters": null
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 176,
          "end": 196,
          "params": [
            {
              "type": "Identifier",
              "start": 177,
              "end": 187,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 178,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 180,
                  "end": 187,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 186,
                    "end": 187,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 196,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 192,
              "end": 196
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 204,
          "end": 209
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 200,
          "end": 201,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 212,
      "end": 292,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 236,
        "decorators": [],
        "name": "OverloadDefinitions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 239,
        "end": 291,
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 256,
          "end": 262
        },
        "key": {
          "type": "Identifier",
          "start": 251,
          "end": 252,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 265,
          "end": 288,
          "params": [
            {
              "type": "RestElement",
              "start": 266,
              "end": 280,
              "argument": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 273,
                "end": 280,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 275,
                  "end": 280,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 275,
                    "end": 278
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 282,
            "end": 288,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 285,
              "end": 288
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 294,
      "end": 408,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 313,
        "decorators": [],
        "name": "OverloadBinder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 347,
        "end": 407,
        "params": [
          {
            "type": "Identifier",
            "start": 348,
            "end": 375,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 375,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 372,
                  "end": 375,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
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
                  "start": 354,
                  "end": 372,
                  "decorators": [],
                  "name": "OverloadParameters",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 377,
          "end": 407,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 380,
            "end": 407,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 380,
                "end": 395,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 392,
                  "end": 395,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 393,
                      "end": 394,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
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
                  "start": 380,
                  "end": 392,
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 398,
                "end": 407
              }
            ]
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 313,
        "end": 344,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 314,
            "end": 343,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 343,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 343,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
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
      "type": "TSTypeAliasDeclaration",
      "start": 410,
      "end": 486,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 427,
        "decorators": [],
        "name": "OverloadKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 461,
        "end": 485,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 468,
          "end": 485,
          "params": [
            {
              "type": "TSTypeOperator",
              "start": 469,
              "end": 476,
              "operator": "keyof",
              "typeAnnotation": {
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
            },
            {
              "type": "TSNumberKeyword",
              "start": 478,
              "end": 484
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 461,
          "end": 468,
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 427,
        "end": 458,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 428,
            "end": 457,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 438,
              "end": 457,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 438,
                "end": 457,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
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
      "type": "TSTypeAliasDeclaration",
      "start": 488,
      "end": 608,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 511,
        "decorators": [],
        "name": "OverloadParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 545,
        "end": 607,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 555,
          "end": 607,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 556,
              "end": 606,
              "indexType": {
                "type": "TSTypeReference",
                "start": 590,
                "end": 605,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 602,
                  "end": 605,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 603,
                      "end": 604,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 603,
                        "end": 604,
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
                  "start": 590,
                  "end": 602,
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "start": 556,
                "end": 589,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 564,
                  "end": 579,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 576,
                    "end": 579,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 577,
                        "end": 578,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 578,
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
                    "start": 564,
                    "end": 576,
                    "decorators": [],
                    "name": "OverloadKeys",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 582,
                  "end": 586,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 584,
                    "end": 585,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 585,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 582,
                    "end": 583,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 545,
          "end": 555,
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 511,
        "end": 542,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 512,
            "end": 541,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 522,
              "end": 541,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 522,
                "end": 541,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
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
      "type": "TSTypeAliasDeclaration",
      "start": 610,
      "end": 697,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 631,
        "decorators": [],
        "name": "OverloadFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 665,
        "end": 696,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 684,
          "end": 696,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 685,
              "end": 695,
              "indexType": {
                "type": "TSTypeOperator",
                "start": 687,
                "end": 694,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 693,
                  "end": 694,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 694,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 685,
                "end": 686,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
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
          "start": 665,
          "end": 684,
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 631,
        "end": 662,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 661,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 661,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 661,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
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
      "type": "TSTypeAliasDeclaration",
      "start": 699,
      "end": 835,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 704,
        "end": 719,
        "decorators": [],
        "name": "OverloadBinders",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 753,
        "end": 834,
        "constraint": {
          "type": "TSTypeReference",
          "start": 761,
          "end": 776,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 773,
            "end": 776,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 774,
                "end": 775,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
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
            "start": 761,
            "end": 773,
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 756,
          "end": 757,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 779,
          "end": 831,
          "params": [
            {
              "type": "Identifier",
              "start": 780,
              "end": 807,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 784,
                "end": 807,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 786,
                  "end": 807,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 804,
                    "end": 807,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 805,
                        "end": 806,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 806,
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
                    "start": 786,
                    "end": 804,
                    "decorators": [],
                    "name": "OverloadParameters",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 809,
            "end": 831,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 812,
              "end": 831,
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
              ]
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 719,
        "end": 750,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 720,
            "end": 749,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 730,
              "end": 749,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 730,
                "end": 749,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
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
      "type": "TSTypeAliasDeclaration",
      "start": 837,
      "end": 945,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 842,
        "end": 862,
        "decorators": [],
        "name": "OverloadDeprecations",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 896,
        "end": 944,
        "constraint": {
          "type": "TSTypeReference",
          "start": 904,
          "end": 919,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 916,
            "end": 919,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 917,
                "end": 918,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
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
            "start": 904,
            "end": 916,
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 899,
          "end": 900,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": true,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 923,
          "end": 941,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 923,
            "end": 941,
            "decorators": [],
            "name": "DeprecationOptions",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 862,
        "end": 893,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 863,
            "end": 892,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 873,
              "end": 892,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 873,
                "end": 892,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
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
      "type": "TSDeclareFunction",
      "start": 947,
      "end": 1139,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 978,
        "decorators": [],
        "name": "createOverload",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1010,
          "end": 1022,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1014,
            "end": 1022,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1016,
              "end": 1022
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1024,
          "end": 1036,
          "decorators": [],
          "name": "overloads",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1033,
            "end": 1036,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1035,
              "end": 1036,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1035,
                "end": 1036,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1038,
          "end": 1064,
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1064,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1046,
              "end": 1064,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1061,
                "end": 1064,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1062,
                    "end": 1063,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1062,
                      "end": 1063,
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
                "start": 1046,
                "end": 1061,
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1066,
          "end": 1104,
          "decorators": [],
          "name": "deprecations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1079,
            "end": 1104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1081,
              "end": 1104,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1101,
                "end": 1104,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1102,
                    "end": 1103,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1102,
                      "end": 1103,
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
                "start": 1081,
                "end": 1101,
                "decorators": [],
                "name": "OverloadDeprecations",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1105,
        "end": 1138,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1107,
          "end": 1138,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1126,
            "end": 1138,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1127,
                "end": 1137,
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 1129,
                  "end": 1136,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1135,
                    "end": 1136,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1136,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1127,
                  "end": 1128,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1128,
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
            "start": 1107,
            "end": 1126,
            "decorators": [],
            "name": "UnionToIntersection",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 978,
        "end": 1009,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 979,
            "end": 1008,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 989,
              "end": 1008,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 989,
                "end": 1008,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 979,
              "end": 980,
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
      "type": "TSDeclareFunction",
      "start": 1141,
      "end": 1263,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1158,
        "end": 1170,
        "decorators": [],
        "name": "createBinder",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1202,
          "end": 1214,
          "decorators": [],
          "name": "overloads",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1214,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1213,
              "end": 1214,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1213,
                "end": 1214,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1216,
          "end": 1242,
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1222,
            "end": 1242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1224,
              "end": 1242,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1239,
                "end": 1242,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1240,
                    "end": 1241,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1240,
                      "end": 1241,
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
                "start": 1224,
                "end": 1239,
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1243,
        "end": 1262,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1245,
          "end": 1262,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1259,
            "end": 1262,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1260,
                "end": 1261,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1260,
                  "end": 1261,
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
            "start": 1245,
            "end": 1259,
            "decorators": [],
            "name": "OverloadBinder",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1170,
        "end": 1201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1171,
            "end": 1200,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1181,
              "end": 1200,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1181,
                "end": 1200,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1171,
              "end": 1172,
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
      "type": "TSInterfaceDeclaration",
      "start": 1265,
      "end": 1381,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1291,
        "end": 1381,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1297,
            "end": 1379,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1297,
              "end": 1305,
              "decorators": [],
              "name": "overload",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1337,
                "end": 1349,
                "decorators": [],
                "name": "overloads",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1346,
                  "end": 1349,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1348,
                    "end": 1349,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1348,
                      "end": 1349,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1350,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1378,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1375,
                  "end": 1378,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1376,
                      "end": 1377,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1376,
                        "end": 1377,
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
                  "start": 1352,
                  "end": 1375,
                  "decorators": [],
                  "name": "BindableOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1305,
              "end": 1336,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1306,
                  "end": 1335,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1316,
                    "end": 1335,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1335,
                      "decorators": [],
                      "name": "OverloadDefinitions",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1307,
                    "decorators": [],
                    "name": "T",
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
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1290,
        "decorators": [],
        "name": "OverloadBuilder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1383,
      "end": 1514,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1448,
        "end": 1514,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1454,
            "end": 1512,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1454,
              "end": 1458,
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1459,
                "end": 1485,
                "decorators": [],
                "name": "binder",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1465,
                  "end": 1485,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1467,
                    "end": 1485,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1482,
                      "end": 1485,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1483,
                          "end": 1484,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1483,
                            "end": 1484,
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
                      "start": 1467,
                      "end": 1482,
                      "decorators": [],
                      "name": "OverloadBinders",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1486,
              "end": 1511,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1488,
                "end": 1511,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1508,
                  "end": 1511,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1509,
                      "end": 1510,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1509,
                        "end": 1510,
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
                  "start": 1488,
                  "end": 1508,
                  "decorators": [],
                  "name": "BoundOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1393,
        "end": 1416,
        "decorators": [],
        "name": "BindableOverloadBuilder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1416,
        "end": 1447,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1417,
            "end": 1446,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1427,
              "end": 1446,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1427,
                "end": 1446,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1417,
              "end": 1418,
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
      "type": "TSInterfaceDeclaration",
      "start": 1516,
      "end": 1621,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1583,
        "end": 1621,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1589,
            "end": 1619,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1589,
              "end": 1595,
              "decorators": [],
              "name": "finish",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1597,
              "end": 1618,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1599,
                "end": 1618,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1615,
                  "end": 1618,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1616,
                      "end": 1617,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1616,
                        "end": 1617,
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
                  "start": 1599,
                  "end": 1615,
                  "decorators": [],
                  "name": "OverloadFunction",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1551,
        "decorators": [],
        "name": "FinishableOverloadBuilder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1551,
        "end": 1582,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1552,
            "end": 1581,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1562,
              "end": 1581,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1562,
                "end": 1581,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1552,
              "end": 1553,
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
      "type": "TSInterfaceDeclaration",
      "start": 1623,
      "end": 1809,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1722,
        "end": 1809,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1728,
            "end": 1807,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1728,
              "end": 1737,
              "decorators": [],
              "name": "deprecate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1738,
                "end": 1775,
                "decorators": [],
                "name": "deprecations",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1750,
                  "end": 1775,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1752,
                    "end": 1775,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1772,
                      "end": 1775,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1773,
                          "end": 1774,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1773,
                            "end": 1774,
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
                      "start": 1752,
                      "end": 1772,
                      "decorators": [],
                      "name": "OverloadDeprecations",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1776,
              "end": 1806,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1778,
                "end": 1806,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1803,
                  "end": 1806,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1804,
                      "end": 1805,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1804,
                        "end": 1805,
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
                  "start": 1778,
                  "end": 1803,
                  "decorators": [],
                  "name": "FinishableOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1693,
          "end": 1721,
          "expression": {
            "type": "Identifier",
            "start": 1693,
            "end": 1718,
            "decorators": [],
            "name": "FinishableOverloadBuilder",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1718,
            "end": 1721,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1719,
                "end": 1720,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1719,
                  "end": 1720,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1633,
        "end": 1653,
        "decorators": [],
        "name": "BoundOverloadBuilder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1653,
        "end": 1684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1654,
            "end": 1683,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1664,
              "end": 1683,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1664,
                "end": 1683,
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1654,
              "end": 1655,
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
      "type": "TSDeclareFunction",
      "start": 1811,
      "end": 1873,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1828,
        "end": 1841,
        "decorators": [],
        "name": "buildOverload",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1842,
          "end": 1854,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1846,
            "end": 1854,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1848,
              "end": 1854
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1855,
        "end": 1872,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1857,
          "end": 1872,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1857,
            "end": 1872,
            "decorators": [],
            "name": "OverloadBuilder",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1875,
      "end": 1987,
      "body": {
        "type": "TSEnumBody",
        "start": 1897,
        "end": 1987,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1903,
            "end": 1920,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1903,
              "end": 1920,
              "decorators": [],
              "name": "ImportDeclaration",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1926,
            "end": 1934,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1926,
              "end": 1934,
              "decorators": [],
              "name": "Modifier",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1940,
            "end": 1952,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1940,
              "end": 1952,
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1958,
            "end": 1970,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1958,
              "end": 1970,
              "decorators": [],
              "name": "AssertClause",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1976,
            "end": 1985,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1976,
              "end": 1985,
              "decorators": [],
              "name": "Decorator",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1886,
        "end": 1896,
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1989,
      "end": 2029,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2004,
        "end": 2029,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2010,
            "end": 2027,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2010,
              "end": 2014,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2014,
              "end": 2026,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2016,
                "end": 2026,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2016,
                  "end": 2026,
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1999,
        "end": 2003,
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2031,
      "end": 2092,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2066,
        "end": 2092,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2068,
            "end": 2090,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2068,
              "end": 2085,
              "decorators": [],
              "name": "_declarationBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2085,
              "end": 2090,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2087,
                "end": 2090
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2061,
          "end": 2065,
          "expression": {
            "type": "Identifier",
            "start": 2061,
            "end": 2065,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2052,
        "decorators": [],
        "name": "Declaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2093,
      "end": 2150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2126,
        "end": 2150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2128,
            "end": 2148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2128,
              "end": 2143,
              "decorators": [],
              "name": "_statementBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2143,
              "end": 2148,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2121,
          "end": 2125,
          "expression": {
            "type": "Identifier",
            "start": 2121,
            "end": 2125,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2103,
        "end": 2112,
        "decorators": [],
        "name": "Statement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 2150,
      "end": 2151
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2152,
      "end": 2212,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2186,
        "end": 2212,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2188,
            "end": 2210,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2188,
              "end": 2204,
              "decorators": [],
              "name": "_expressionBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2204,
              "end": 2209,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2206,
                "end": 2209
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2181,
          "end": 2185,
          "expression": {
            "type": "Identifier",
            "start": 2181,
            "end": 2185,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2162,
        "end": 2172,
        "decorators": [],
        "name": "Expression",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2214,
      "end": 2299,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2260,
        "end": 2299,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2262,
            "end": 2297,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2262,
              "end": 2266,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2266,
              "end": 2296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2268,
                "end": 2296,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2268,
                  "end": 2296,
                  "left": {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2278,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2279,
                    "end": 2296,
                    "decorators": [],
                    "name": "ImportDeclaration",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2250,
          "end": 2259,
          "expression": {
            "type": "Identifier",
            "start": 2250,
            "end": 2259,
            "decorators": [],
            "name": "Statement",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2224,
        "end": 2241,
        "decorators": [],
        "name": "ImportDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2300,
      "end": 2362,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2332,
        "end": 2362,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2334,
            "end": 2360,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2334,
              "end": 2338,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2338,
              "end": 2359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2340,
                "end": 2359,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2340,
                  "end": 2359,
                  "left": {
                    "type": "Identifier",
                    "start": 2340,
                    "end": 2350,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2351,
                    "end": 2359,
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2327,
          "end": 2331,
          "expression": {
            "type": "Identifier",
            "start": 2327,
            "end": 2331,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2310,
        "end": 2318,
        "decorators": [],
        "name": "Modifier",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2363,
      "end": 2427,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2396,
        "end": 2427,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2398,
            "end": 2425,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2398,
              "end": 2402,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2402,
              "end": 2424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2404,
                "end": 2424,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2404,
                  "end": 2424,
                  "left": {
                    "type": "Identifier",
                    "start": 2404,
                    "end": 2414,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2415,
                    "end": 2424,
                    "decorators": [],
                    "name": "Decorator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2391,
          "end": 2395,
          "expression": {
            "type": "Identifier",
            "start": 2391,
            "end": 2395,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2373,
        "end": 2382,
        "decorators": [],
        "name": "Decorator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2428,
      "end": 2505,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2471,
        "end": 2505,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2473,
            "end": 2503,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2473,
              "end": 2477,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2477,
              "end": 2502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2479,
                "end": 2502,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2479,
                  "end": 2502,
                  "left": {
                    "type": "Identifier",
                    "start": 2479,
                    "end": 2489,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2490,
                    "end": 2502,
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2459,
          "end": 2470,
          "expression": {
            "type": "Identifier",
            "start": 2459,
            "end": 2470,
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2438,
        "end": 2450,
        "decorators": [],
        "name": "ImportClause",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2506,
      "end": 2576,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2542,
        "end": 2576,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2544,
            "end": 2574,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2544,
              "end": 2548,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2548,
              "end": 2573,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2550,
                "end": 2573,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2550,
                  "end": 2573,
                  "left": {
                    "type": "Identifier",
                    "start": 2550,
                    "end": 2560,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2561,
                    "end": 2573,
                    "decorators": [],
                    "name": "AssertClause",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2537,
          "end": 2541,
          "expression": {
            "type": "Identifier",
            "start": 2537,
            "end": 2541,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 2516,
        "end": 2528,
        "decorators": [],
        "name": "AssertClause",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2578,
      "end": 2640,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2595,
        "end": 2607,
        "decorators": [],
        "name": "isExpression",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2608,
          "end": 2618,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2612,
            "end": 2618,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2614,
              "end": 2618,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2614,
                "end": 2618,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2619,
        "end": 2639,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2621,
          "end": 2639,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 2621,
            "end": 2625,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2629,
            "end": 2639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2629,
              "end": 2639,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2629,
                "end": 2639,
                "decorators": [],
                "name": "Expression",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2641,
      "end": 2707,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2658,
        "end": 2672,
        "decorators": [],
        "name": "isAssertClause",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2673,
          "end": 2683,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2677,
            "end": 2683,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2679,
              "end": 2683,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2679,
                "end": 2683,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2684,
        "end": 2706,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2686,
          "end": 2706,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 2686,
            "end": 2690,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2694,
            "end": 2706,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2694,
              "end": 2706,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2694,
                "end": 2706,
                "decorators": [],
                "name": "AssertClause",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2708,
      "end": 2774,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2725,
        "end": 2739,
        "decorators": [],
        "name": "isImportClause",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2740,
          "end": 2750,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2744,
            "end": 2750,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2746,
              "end": 2750,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2746,
                "end": 2750,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2751,
        "end": 2773,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2753,
          "end": 2773,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 2753,
            "end": 2757,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2761,
            "end": 2773,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2761,
              "end": 2773,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2761,
                "end": 2773,
                "decorators": [],
                "name": "ImportClause",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2775,
      "end": 2833,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2792,
        "end": 2802,
        "decorators": [],
        "name": "isModifier",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2803,
          "end": 2813,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2807,
            "end": 2813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2809,
              "end": 2813,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2809,
                "end": 2813,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2814,
        "end": 2832,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2816,
          "end": 2832,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 2816,
            "end": 2820,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2824,
            "end": 2832,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2824,
              "end": 2832,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2824,
                "end": 2832,
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2834,
      "end": 2894,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2851,
        "end": 2862,
        "decorators": [],
        "name": "isDecorator",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2863,
          "end": 2873,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2867,
            "end": 2873,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2869,
              "end": 2873,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2869,
                "end": 2873,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2874,
        "end": 2893,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2876,
          "end": 2893,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 2876,
            "end": 2880,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2884,
            "end": 2893,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2884,
              "end": 2893,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2884,
                "end": 2893,
                "decorators": [],
                "name": "Decorator",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2896,
      "end": 3390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2910,
          "end": 3390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2910,
            "end": 3390,
            "decorators": [],
            "name": "updateImportDeclaration",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2933,
              "end": 3390,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2935,
                "end": 3390,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 2941,
                    "end": 3139,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2942,
                        "end": 2965,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2946,
                          "end": 2965,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2948,
                            "end": 2965,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2948,
                              "end": 2965,
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2967,
                        "end": 3009,
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2976,
                          "end": 3009,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 2978,
                            "end": 3009,
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "start": 2978,
                                "end": 2997,
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 2987,
                                  "end": 2997,
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "start": 2987,
                                    "end": 2995,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2987,
                                      "end": 2995,
                                      "decorators": [],
                                      "name": "Modifier",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3000,
                                "end": 3009
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3011,
                        "end": 3049,
                        "decorators": [],
                        "name": "importClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3023,
                          "end": 3049,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3025,
                            "end": 3049,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3025,
                                "end": 3037,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3025,
                                  "end": 3037,
                                  "decorators": [],
                                  "name": "ImportClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3040,
                                "end": 3049
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3051,
                        "end": 3078,
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3066,
                          "end": 3078,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3068,
                            "end": 3078,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3068,
                              "end": 3078,
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3080,
                        "end": 3118,
                        "decorators": [],
                        "name": "assertClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3092,
                          "end": 3118,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3094,
                            "end": 3118,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3094,
                                "end": 3106,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3094,
                                  "end": 3106,
                                  "decorators": [],
                                  "name": "AssertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3109,
                                "end": 3118
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3119,
                      "end": 3138,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3121,
                        "end": 3138,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3121,
                          "end": 3138,
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 3144,
                    "end": 3388,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3145,
                        "end": 3168,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3149,
                          "end": 3168,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3151,
                            "end": 3168,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3151,
                              "end": 3168,
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3170,
                        "end": 3214,
                        "decorators": [],
                        "name": "decorators",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3180,
                          "end": 3214,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3182,
                            "end": 3214,
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "start": 3182,
                                "end": 3202,
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 3191,
                                  "end": 3202,
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "start": 3191,
                                    "end": 3200,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3191,
                                      "end": 3200,
                                      "decorators": [],
                                      "name": "Decorator",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3205,
                                "end": 3214
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3216,
                        "end": 3258,
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3225,
                          "end": 3258,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3227,
                            "end": 3258,
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "start": 3227,
                                "end": 3246,
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 3236,
                                  "end": 3246,
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "start": 3236,
                                    "end": 3244,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3236,
                                      "end": 3244,
                                      "decorators": [],
                                      "name": "Modifier",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3249,
                                "end": 3258
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3260,
                        "end": 3298,
                        "decorators": [],
                        "name": "importClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3272,
                          "end": 3298,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3274,
                            "end": 3298,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3274,
                                "end": 3286,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3274,
                                  "end": 3286,
                                  "decorators": [],
                                  "name": "ImportClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3289,
                                "end": 3298
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3300,
                        "end": 3327,
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3315,
                          "end": 3327,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3317,
                            "end": 3327,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3317,
                              "end": 3327,
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 3329,
                        "end": 3367,
                        "decorators": [],
                        "name": "assertClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3341,
                          "end": 3367,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3343,
                            "end": 3367,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 3343,
                                "end": 3355,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3343,
                                  "end": 3355,
                                  "decorators": [],
                                  "name": "AssertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3358,
                                "end": 3367
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3368,
                      "end": 3387,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3370,
                        "end": 3387,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3370,
                          "end": 3387,
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 3392,
      "end": 3530,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3409,
        "end": 3414,
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3431,
          "end": 3450,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3436,
            "end": 3450,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 3438,
              "end": 3450,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3447,
                "end": 3450,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3447,
                  "end": 3448,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3447,
                    "end": 3448,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3452,
          "end": 3505,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3460,
            "end": 3505,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3462,
              "end": 3505,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3463,
                  "end": 3473,
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3470,
                    "end": 3473,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3472,
                      "end": 3473,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3472,
                        "end": 3473,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3475,
                  "end": 3488,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3480,
                    "end": 3488,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3482,
                      "end": 3488
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3490,
                "end": 3505,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 3493,
                  "end": 3505,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 3493,
                    "end": 3500,
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3504,
                    "end": 3505,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3504,
                      "end": 3505,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3504,
                        "end": 3505,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3506,
        "end": 3529,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3508,
          "end": 3529,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 3508,
            "end": 3513,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3517,
            "end": 3529,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 3517,
              "end": 3529,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3526,
                "end": 3529,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3526,
                  "end": 3527,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3526,
                    "end": 3527,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3414,
        "end": 3430,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3415,
            "end": 3416,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3415,
              "end": 3416,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3418,
            "end": 3429,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3428,
              "end": 3429,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3428,
                "end": 3429,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3418,
              "end": 3419,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3531,
      "end": 3693,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3548,
        "end": 3553,
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3570,
          "end": 3601,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3575,
            "end": 3601,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3577,
              "end": 3601,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 3577,
                  "end": 3589,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3586,
                    "end": 3589,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3586,
                      "end": 3587,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3586,
                        "end": 3587,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3592,
                  "end": 3601
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3603,
          "end": 3656,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3611,
            "end": 3656,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3613,
              "end": 3656,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3614,
                  "end": 3624,
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3621,
                    "end": 3624,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3623,
                      "end": 3624,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3623,
                        "end": 3624,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3626,
                  "end": 3639,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3631,
                    "end": 3639,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3633,
                      "end": 3639
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3641,
                "end": 3656,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 3644,
                  "end": 3656,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 3644,
                    "end": 3651,
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3655,
                    "end": 3656,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3655,
                      "end": 3656,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3655,
                        "end": 3656,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3657,
        "end": 3692,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3659,
          "end": 3692,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 3659,
            "end": 3664,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3668,
            "end": 3692,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3668,
              "end": 3692,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 3668,
                  "end": 3680,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3677,
                    "end": 3680,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3677,
                      "end": 3678,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3677,
                        "end": 3678,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3683,
                  "end": 3692
                }
              ]
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3553,
        "end": 3569,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3554,
            "end": 3555,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3554,
              "end": 3555,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3557,
            "end": 3568,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3567,
              "end": 3568,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3567,
                "end": 3568,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3557,
              "end": 3558,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3694,
      "end": 3812,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3711,
        "end": 3716,
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3720,
          "end": 3751,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3725,
            "end": 3751,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3727,
              "end": 3751,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 3727,
                  "end": 3739,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3736,
                    "end": 3739,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3736,
                      "end": 3737,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3736,
                        "end": 3737,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3742,
                  "end": 3751
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3753,
          "end": 3801,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3761,
            "end": 3801,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3763,
              "end": 3801,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3764,
                  "end": 3774,
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3771,
                    "end": 3774,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3773,
                      "end": 3774,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3773,
                        "end": 3774,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3776,
                  "end": 3789,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3781,
                    "end": 3789,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3783,
                      "end": 3789
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3791,
                "end": 3801,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3794,
                  "end": 3801
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3802,
        "end": 3811,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 3804,
          "end": 3811
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3716,
        "end": 3719,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3717,
            "end": 3718,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3717,
              "end": 3718,
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
      "type": "TSDeclareFunction",
      "start": 3814,
      "end": 3880,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3831,
        "end": 3838,
        "decorators": [],
        "name": "isArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3839,
          "end": 3849,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3844,
            "end": 3849,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3846,
              "end": 3849
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3850,
        "end": 3879,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3852,
          "end": 3879,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 3852,
            "end": 3857,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3861,
            "end": 3879,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 3861,
              "end": 3879,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3870,
                "end": 3879,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3870,
                  "end": 3877
                }
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3882,
      "end": 3936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3896,
          "end": 3935,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3896,
            "end": 3935,
            "decorators": [],
            "name": "DISALLOW_DECORATORS",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3915,
              "end": 3935,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3917,
                "end": 3935,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3917,
                  "end": 3935,
                  "decorators": [],
                  "name": "DeprecationOptions",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 3938,
      "end": 5663,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3938,
        "end": 5662,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 3938,
          "end": 5660,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 3938,
            "end": 5648,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 5609,
                "end": 5647,
                "properties": [
                  {
                    "type": "Property",
                    "start": 5619,
                    "end": 5641,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 5619,
                      "end": 5620,
                      "raw": "1",
                      "value": 1
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 5622,
                      "end": 5641,
                      "decorators": [],
                      "name": "DISALLOW_DECORATORS",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3938,
              "end": 5608,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 3938,
                "end": 5593,
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 4712,
                    "end": 5592,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 4722,
                        "end": 5128,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 4722,
                          "end": 4723,
                          "raw": "0",
                          "value": 0
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 4725,
                          "end": 5128,
                          "async": false,
                          "body": {
                            "type": "LogicalExpression",
                            "start": 4808,
                            "end": 5128,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 4808,
                              "end": 5052,
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 4808,
                                "end": 4972,
                                "operator": "&&",
                                "left": {
                                  "type": "LogicalExpression",
                                  "start": 4808,
                                  "end": 4902,
                                  "operator": "&&",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 4809,
                                    "end": 4828,
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4809,
                                      "end": 4814,
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4819,
                                      "end": 4828,
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "start": 4846,
                                    "end": 4901,
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 4846,
                                      "end": 4869,
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 4846,
                                        "end": 4855,
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 4860,
                                        "end": 4869,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 4873,
                                      "end": 4901,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4879,
                                          "end": 4888,
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4890,
                                          "end": 4900,
                                          "decorators": [],
                                          "name": "isModifier",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4873,
                                        "end": 4878,
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "start": 4919,
                                  "end": 4971,
                                  "operator": "||",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 4919,
                                    "end": 4945,
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4919,
                                      "end": 4931,
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4936,
                                      "end": 4945,
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "start": 4949,
                                    "end": 4971,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 4950,
                                      "end": 4971,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4958,
                                          "end": 4970,
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4950,
                                        "end": 4957,
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    },
                                    "operator": "!",
                                    "prefix": true
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "start": 4989,
                                "end": 5051,
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 4989,
                                  "end": 5018,
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4989,
                                    "end": 5004,
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5009,
                                    "end": 5018,
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "start": 5022,
                                  "end": 5051,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 5035,
                                      "end": 5050,
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5022,
                                    "end": 5034,
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 5069,
                              "end": 5127,
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 5069,
                                "end": 5095,
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "start": 5069,
                                  "end": 5081,
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 5086,
                                  "end": 5095,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 5099,
                                "end": 5127,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 5114,
                                    "end": 5126,
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5099,
                                  "end": 5113,
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "start": 4726,
                              "end": 4791,
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "start": 4729,
                                  "end": 4738,
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4740,
                                  "end": 4752,
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4754,
                                  "end": 4769,
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4771,
                                  "end": 4783,
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4785,
                                  "end": 4790,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 5139,
                        "end": 5585,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 5139,
                          "end": 5140,
                          "raw": "1",
                          "value": 1
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 5142,
                          "end": 5585,
                          "async": false,
                          "body": {
                            "type": "LogicalExpression",
                            "start": 5230,
                            "end": 5585,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 5230,
                              "end": 5509,
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 5230,
                                "end": 5429,
                                "operator": "&&",
                                "left": {
                                  "type": "LogicalExpression",
                                  "start": 5230,
                                  "end": 5353,
                                  "operator": "&&",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "start": 5231,
                                    "end": 5289,
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 5231,
                                      "end": 5255,
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5231,
                                        "end": 5241,
                                        "decorators": [],
                                        "name": "decorators",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5246,
                                        "end": 5255,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 5259,
                                      "end": 5289,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 5265,
                                          "end": 5275,
                                          "decorators": [],
                                          "name": "decorators",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 5277,
                                          "end": 5288,
                                          "decorators": [],
                                          "name": "isDecorator",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 5259,
                                        "end": 5264,
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "start": 5307,
                                    "end": 5352,
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 5307,
                                      "end": 5330,
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5307,
                                        "end": 5316,
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5321,
                                        "end": 5330,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 5334,
                                      "end": 5352,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 5342,
                                          "end": 5351,
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 5334,
                                        "end": 5341,
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "start": 5370,
                                  "end": 5428,
                                  "operator": "||",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 5370,
                                    "end": 5396,
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 5370,
                                      "end": 5382,
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 5387,
                                      "end": 5396,
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 5400,
                                    "end": 5428,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 5415,
                                        "end": 5427,
                                        "decorators": [],
                                        "name": "importClause",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 5400,
                                      "end": 5414,
                                      "decorators": [],
                                      "name": "isImportClause",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "start": 5446,
                                "end": 5508,
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 5446,
                                  "end": 5475,
                                  "operator": "!==",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5446,
                                    "end": 5461,
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5466,
                                    "end": 5475,
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "start": 5479,
                                  "end": 5508,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 5492,
                                      "end": 5507,
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5479,
                                    "end": 5491,
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 5526,
                              "end": 5584,
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 5526,
                                "end": 5552,
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "start": 5526,
                                  "end": 5538,
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 5543,
                                  "end": 5552,
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 5556,
                                "end": 5584,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 5571,
                                    "end": 5583,
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5556,
                                  "end": 5570,
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "start": 5143,
                              "end": 5213,
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "start": 5146,
                                  "end": 5156,
                                  "decorators": [],
                                  "name": "decorators",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5158,
                                  "end": 5167,
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5169,
                                  "end": 5181,
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5183,
                                  "end": 5198,
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5200,
                                  "end": 5212,
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 3938,
                  "end": 4711,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 3938,
                    "end": 4701,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 3993,
                        "end": 4700,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 4003,
                            "end": 4319,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 4003,
                              "end": 4004,
                              "raw": "0",
                              "value": 0
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 4004,
                              "end": 4319,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 4202,
                                "end": 4319,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 4216,
                                    "end": 4309,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 4223,
                                      "end": 4308,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4247,
                                          "end": 4251,
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4253,
                                          "end": 4262,
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4264,
                                          "end": 4276,
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4278,
                                          "end": 4293,
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4295,
                                          "end": 4307,
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4223,
                                        "end": 4246,
                                        "decorators": [],
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4005,
                                  "end": 4028,
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4009,
                                    "end": 4028,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4011,
                                      "end": 4028,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4011,
                                        "end": 4028,
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4030,
                                  "end": 4072,
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4039,
                                    "end": 4072,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4041,
                                      "end": 4072,
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "start": 4041,
                                          "end": 4060,
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "start": 4050,
                                            "end": 4060,
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "start": 4050,
                                              "end": 4058,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 4050,
                                                "end": 4058,
                                                "decorators": [],
                                                "name": "Modifier",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4063,
                                          "end": 4072
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4074,
                                  "end": 4112,
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4086,
                                    "end": 4112,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4088,
                                      "end": 4112,
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 4088,
                                          "end": 4100,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4088,
                                            "end": 4100,
                                            "decorators": [],
                                            "name": "ImportClause",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4103,
                                          "end": 4112
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4114,
                                  "end": 4141,
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4129,
                                    "end": 4141,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4131,
                                      "end": 4141,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4131,
                                        "end": 4141,
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4143,
                                  "end": 4181,
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4155,
                                    "end": 4181,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4157,
                                      "end": 4181,
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 4157,
                                          "end": 4169,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4157,
                                            "end": 4169,
                                            "decorators": [],
                                            "name": "AssertClause",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4172,
                                          "end": 4181
                                        }
                                      ]
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 4182,
                                "end": 4201,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4184,
                                  "end": 4201,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4184,
                                    "end": 4201,
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "typeParameters": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 4330,
                            "end": 4693,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 4330,
                              "end": 4331,
                              "raw": "1",
                              "value": 1
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 4331,
                              "end": 4693,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 4576,
                                "end": 4693,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 4590,
                                    "end": 4683,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 4597,
                                      "end": 4682,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4621,
                                          "end": 4625,
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4627,
                                          "end": 4636,
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4638,
                                          "end": 4650,
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4652,
                                          "end": 4667,
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4669,
                                          "end": 4681,
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4597,
                                        "end": 4620,
                                        "decorators": [],
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4332,
                                  "end": 4355,
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4336,
                                    "end": 4355,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4338,
                                      "end": 4355,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4338,
                                        "end": 4355,
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4357,
                                  "end": 4402,
                                  "decorators": [],
                                  "name": "_decorators",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4368,
                                    "end": 4402,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4370,
                                      "end": 4402,
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "start": 4370,
                                          "end": 4390,
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "start": 4379,
                                            "end": 4390,
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "start": 4379,
                                              "end": 4388,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 4379,
                                                "end": 4388,
                                                "decorators": [],
                                                "name": "Decorator",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4393,
                                          "end": 4402
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4404,
                                  "end": 4446,
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4413,
                                    "end": 4446,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4415,
                                      "end": 4446,
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "start": 4415,
                                          "end": 4434,
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "start": 4424,
                                            "end": 4434,
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "start": 4424,
                                              "end": 4432,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 4424,
                                                "end": 4432,
                                                "decorators": [],
                                                "name": "Modifier",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4437,
                                          "end": 4446
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4448,
                                  "end": 4486,
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4460,
                                    "end": 4486,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4462,
                                      "end": 4486,
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 4462,
                                          "end": 4474,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4462,
                                            "end": 4474,
                                            "decorators": [],
                                            "name": "ImportClause",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4477,
                                          "end": 4486
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4488,
                                  "end": 4515,
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4503,
                                    "end": 4515,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4505,
                                      "end": 4515,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4505,
                                        "end": 4515,
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4517,
                                  "end": 4555,
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4529,
                                    "end": 4555,
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "start": 4531,
                                      "end": 4555,
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 4531,
                                          "end": 4543,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4531,
                                            "end": 4543,
                                            "decorators": [],
                                            "name": "AssertClause",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4546,
                                          "end": 4555
                                        }
                                      ]
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 4556,
                                "end": 4575,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4558,
                                  "end": 4575,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4558,
                                    "end": 4575,
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "typeParameters": null
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3938,
                      "end": 3992,
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "start": 3938,
                        "end": 3978,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 3952,
                            "end": 3977,
                            "raw": "\"updateImportDeclaration\"",
                            "value": "updateImportDeclaration"
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 3938,
                          "end": 3951,
                          "decorators": [],
                          "name": "buildOverload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3984,
                        "end": 3992,
                        "decorators": [],
                        "name": "overload",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4707,
                    "end": 4711,
                    "decorators": [],
                    "name": "bind",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5599,
                "end": 5608,
                "decorators": [],
                "name": "deprecate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5654,
            "end": 5660,
            "decorators": [],
            "name": "finish",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5666,
      "end": 5734,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5680,
          "end": 5733,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5680,
            "end": 5733,
            "decorators": [],
            "name": "modifiers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5689,
              "end": 5733,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 5691,
                "end": 5733,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 5691,
                    "end": 5710,
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 5700,
                      "end": 5710,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 5700,
                        "end": 5708,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5700,
                          "end": 5708,
                          "decorators": [],
                          "name": "Modifier",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 5713,
                    "end": 5733,
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 5722,
                      "end": 5733,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 5722,
                        "end": 5731,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5722,
                          "end": 5731,
                          "decorators": [],
                          "name": "Decorator",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 5736,
      "end": 5823,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5751,
        "end": 5823,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5757,
            "end": 5786,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 5757,
              "end": 5785,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5763,
                  "end": 5772,
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 5774,
                  "end": 5784,
                  "decorators": [],
                  "name": "isModifier",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 5757,
                "end": 5762,
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 5791,
            "end": 5821,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 5791,
              "end": 5820,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5797,
                  "end": 5806,
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 5808,
                  "end": 5819,
                  "decorators": [],
                  "name": "isDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 5791,
                "end": 5796,
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5745,
        "end": 5748,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
