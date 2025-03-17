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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "name": "DeprecationOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 52,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 73,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 72,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 92,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 120,
        "name": "UnionToIntersection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
        ]
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
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 137,
            "end": 140
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 143,
            "end": 157,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 148,
                "name": "k",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 148,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 147,
                    "end": 148,
                    "typeName": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "name": "U",
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
              "start": 150,
              "end": 157,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 176,
          "end": 196,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 177,
              "end": 187,
              "name": "k",
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
                    "name": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "name": "I",
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
              },
              "decorators": [],
              "optional": false
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
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 200,
          "end": 201,
          "typeName": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 204,
          "end": 209
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 212,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 236,
        "name": "OverloadDefinitions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 239,
        "end": 291,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 251,
          "end": 262,
          "name": {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSNumberKeyword",
            "start": 256,
            "end": 262
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 265,
          "end": 288,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 266,
              "end": 280,
              "argument": {
                "type": "Identifier",
                "start": 269,
                "end": 273,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          }
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 256,
          "end": 262
        },
        "key": {
          "type": "Identifier",
          "start": 251,
          "end": 252,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 294,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 313,
        "name": "OverloadBinder",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 343,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 343,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 347,
        "end": 407,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 348,
            "end": 375,
            "name": "args",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 375,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 372,
                  "name": "OverloadParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 372,
                  "end": 375,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
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
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 392,
                  "name": "OverloadKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 392,
                  "end": 395,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 393,
                      "end": 394,
                      "typeName": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
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
              {
                "type": "TSUndefinedKeyword",
                "start": 398,
                "end": 407
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 410,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 427,
        "name": "OverloadKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 438,
              "end": 457,
              "typeName": {
                "type": "Identifier",
                "start": 438,
                "end": 457,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 461,
        "end": 485,
        "typeName": {
          "type": "Identifier",
          "start": 461,
          "end": 468,
          "name": "Extract",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
            },
            {
              "type": "TSNumberKeyword",
              "start": 478,
              "end": 484
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 488,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 511,
        "name": "OverloadParameters",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 522,
              "end": 541,
              "typeName": {
                "type": "Identifier",
                "start": 522,
                "end": 541,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 545,
        "end": 607,
        "typeName": {
          "type": "Identifier",
          "start": 545,
          "end": 555,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 555,
          "end": 607,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 556,
              "end": 606,
              "objectType": {
                "type": "TSMappedType",
                "start": 556,
                "end": 589,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 559,
                  "end": 579,
                  "name": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 560,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 564,
                    "end": 579,
                    "typeName": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 576,
                      "name": "OverloadKeys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 576,
                      "end": 579,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 577,
                          "end": 578,
                          "typeName": {
                            "type": "Identifier",
                            "start": 577,
                            "end": 578,
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
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 582,
                  "end": 586,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 582,
                    "end": 583,
                    "typeName": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 584,
                    "end": 585,
                    "typeName": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 585,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 564,
                  "end": 579,
                  "typeName": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 576,
                    "name": "OverloadKeys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 576,
                    "end": 579,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 577,
                        "end": 578,
                        "typeName": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 578,
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
                "key": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 590,
                "end": 605,
                "typeName": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 602,
                  "name": "OverloadKeys",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 602,
                  "end": 605,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 603,
                      "end": 604,
                      "typeName": {
                        "type": "Identifier",
                        "start": 603,
                        "end": 604,
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
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 610,
      "end": 697,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 631,
        "name": "OverloadFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 642,
              "end": 661,
              "typeName": {
                "type": "Identifier",
                "start": 642,
                "end": 661,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 665,
        "end": 696,
        "typeName": {
          "type": "Identifier",
          "start": 665,
          "end": 684,
          "name": "UnionToIntersection",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 684,
          "end": 696,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 685,
              "end": 695,
              "objectType": {
                "type": "TSTypeReference",
                "start": 685,
                "end": 686,
                "typeName": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 686,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeOperator",
                "start": 687,
                "end": 694,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 693,
                  "end": 694,
                  "typeName": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 694,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 699,
      "end": 835,
      "id": {
        "type": "Identifier",
        "start": 704,
        "end": 719,
        "name": "OverloadBinders",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 730,
              "end": 749,
              "typeName": {
                "type": "Identifier",
                "start": 730,
                "end": 749,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 753,
        "end": 834,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 756,
          "end": 776,
          "name": {
            "type": "Identifier",
            "start": 756,
            "end": 757,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 761,
            "end": 776,
            "typeName": {
              "type": "Identifier",
              "start": 761,
              "end": 773,
              "name": "OverloadKeys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 773,
              "end": 776,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 774,
                  "end": 775,
                  "typeName": {
                    "type": "Identifier",
                    "start": 774,
                    "end": 775,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 779,
          "end": 831,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 780,
              "end": 807,
              "name": "args",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 784,
                "end": 807,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 786,
                  "end": 807,
                  "typeName": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 804,
                    "name": "OverloadParameters",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 804,
                    "end": 807,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 805,
                        "end": 806,
                        "typeName": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 806,
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
              "decorators": [],
              "optional": false
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
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 761,
          "end": 776,
          "typeName": {
            "type": "Identifier",
            "start": 761,
            "end": 773,
            "name": "OverloadKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 773,
            "end": 776,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 774,
                "end": 775,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
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
        "key": {
          "type": "Identifier",
          "start": 756,
          "end": 757,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 837,
      "end": 945,
      "id": {
        "type": "Identifier",
        "start": 842,
        "end": 862,
        "name": "OverloadDeprecations",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 873,
              "end": 892,
              "typeName": {
                "type": "Identifier",
                "start": 873,
                "end": 892,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 896,
        "end": 944,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 899,
          "end": 919,
          "name": {
            "type": "Identifier",
            "start": 899,
            "end": 900,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 904,
            "end": 919,
            "typeName": {
              "type": "Identifier",
              "start": 904,
              "end": 916,
              "name": "OverloadKeys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 916,
              "end": 919,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 917,
                  "end": 918,
                  "typeName": {
                    "type": "Identifier",
                    "start": 917,
                    "end": 918,
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 923,
          "end": 941,
          "typeName": {
            "type": "Identifier",
            "start": 923,
            "end": 941,
            "name": "DeprecationOptions",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": true,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 904,
          "end": 919,
          "typeName": {
            "type": "Identifier",
            "start": 904,
            "end": 916,
            "name": "OverloadKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 916,
            "end": 919,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 917,
                "end": 918,
                "typeName": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
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
        "key": {
          "type": "Identifier",
          "start": 899,
          "end": 900,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 947,
      "end": 1139,
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 978,
        "name": "createOverload",
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
          "start": 1010,
          "end": 1022,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1014,
            "end": 1022,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1016,
              "end": 1022
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1024,
          "end": 1036,
          "name": "overloads",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1033,
            "end": 1036,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1035,
              "end": 1036,
              "typeName": {
                "type": "Identifier",
                "start": 1035,
                "end": 1036,
                "name": "T",
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
          "start": 1038,
          "end": 1064,
          "name": "binder",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1064,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1046,
              "end": 1064,
              "typeName": {
                "type": "Identifier",
                "start": 1046,
                "end": 1061,
                "name": "OverloadBinders",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1061,
                "end": 1064,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1062,
                    "end": 1063,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1062,
                      "end": 1063,
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1066,
          "end": 1104,
          "name": "deprecations",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1079,
            "end": 1104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1081,
              "end": 1104,
              "typeName": {
                "type": "Identifier",
                "start": 1081,
                "end": 1101,
                "name": "OverloadDeprecations",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1101,
                "end": 1104,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1102,
                    "end": 1103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1102,
                      "end": 1103,
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
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 978,
        "end": 1009,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 979,
            "end": 1008,
            "name": {
              "type": "Identifier",
              "start": 979,
              "end": 980,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 989,
              "end": 1008,
              "typeName": {
                "type": "Identifier",
                "start": 989,
                "end": 1008,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1105,
        "end": 1138,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1107,
          "end": 1138,
          "typeName": {
            "type": "Identifier",
            "start": 1107,
            "end": 1126,
            "name": "UnionToIntersection",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1126,
            "end": 1138,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1127,
                "end": 1137,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1127,
                  "end": 1128,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1128,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 1129,
                  "end": 1136,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1135,
                    "end": 1136,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1136,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1141,
      "end": 1263,
      "id": {
        "type": "Identifier",
        "start": 1158,
        "end": 1170,
        "name": "createBinder",
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
          "start": 1202,
          "end": 1214,
          "name": "overloads",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1214,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1213,
              "end": 1214,
              "typeName": {
                "type": "Identifier",
                "start": 1213,
                "end": 1214,
                "name": "T",
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
          "start": 1216,
          "end": 1242,
          "name": "binder",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1222,
            "end": 1242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1224,
              "end": 1242,
              "typeName": {
                "type": "Identifier",
                "start": 1224,
                "end": 1239,
                "name": "OverloadBinders",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1239,
                "end": 1242,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1240,
                    "end": 1241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1240,
                      "end": 1241,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1170,
        "end": 1201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1171,
            "end": 1200,
            "name": {
              "type": "Identifier",
              "start": 1171,
              "end": 1172,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1181,
              "end": 1200,
              "typeName": {
                "type": "Identifier",
                "start": 1181,
                "end": 1200,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1243,
        "end": 1262,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1245,
          "end": 1262,
          "typeName": {
            "type": "Identifier",
            "start": 1245,
            "end": 1259,
            "name": "OverloadBinder",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1259,
            "end": 1262,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1260,
                "end": 1261,
                "typeName": {
                  "type": "Identifier",
                  "start": 1260,
                  "end": 1261,
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
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1265,
      "end": 1381,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1290,
        "name": "OverloadBuilder",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1291,
        "end": 1381,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1297,
            "end": 1379,
            "key": {
              "type": "Identifier",
              "start": 1297,
              "end": 1305,
              "name": "overload",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1305,
              "end": 1336,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1306,
                  "end": 1335,
                  "name": {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1307,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1316,
                    "end": 1335,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1335,
                      "name": "OverloadDefinitions",
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1337,
                "end": 1349,
                "name": "overloads",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1346,
                  "end": 1349,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1348,
                    "end": 1349,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1348,
                      "end": 1349,
                      "name": "T",
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
              "start": 1350,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1378,
                "typeName": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1375,
                  "name": "BindableOverloadBuilder",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1375,
                  "end": 1378,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1376,
                      "end": 1377,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1376,
                        "end": 1377,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1383,
      "end": 1514,
      "id": {
        "type": "Identifier",
        "start": 1393,
        "end": 1416,
        "name": "BindableOverloadBuilder",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1416,
        "end": 1447,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1417,
            "end": 1446,
            "name": {
              "type": "Identifier",
              "start": 1417,
              "end": 1418,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1427,
              "end": 1446,
              "typeName": {
                "type": "Identifier",
                "start": 1427,
                "end": 1446,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1448,
        "end": 1514,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1454,
            "end": 1512,
            "key": {
              "type": "Identifier",
              "start": 1454,
              "end": 1458,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1459,
                "end": 1485,
                "name": "binder",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1465,
                  "end": 1485,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1467,
                    "end": 1485,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1467,
                      "end": 1482,
                      "name": "OverloadBinders",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1482,
                      "end": 1485,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1483,
                          "end": 1484,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1483,
                            "end": 1484,
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
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1486,
              "end": 1511,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1488,
                "end": 1511,
                "typeName": {
                  "type": "Identifier",
                  "start": 1488,
                  "end": 1508,
                  "name": "BoundOverloadBuilder",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1508,
                  "end": 1511,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1509,
                      "end": 1510,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1509,
                        "end": 1510,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1516,
      "end": 1621,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1551,
        "name": "FinishableOverloadBuilder",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1551,
        "end": 1582,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1552,
            "end": 1581,
            "name": {
              "type": "Identifier",
              "start": 1552,
              "end": 1553,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1562,
              "end": 1581,
              "typeName": {
                "type": "Identifier",
                "start": 1562,
                "end": 1581,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1583,
        "end": 1621,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1589,
            "end": 1619,
            "key": {
              "type": "Identifier",
              "start": 1589,
              "end": 1595,
              "name": "finish",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1597,
              "end": 1618,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1599,
                "end": 1618,
                "typeName": {
                  "type": "Identifier",
                  "start": 1599,
                  "end": 1615,
                  "name": "OverloadFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1615,
                  "end": 1618,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1616,
                      "end": 1617,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1616,
                        "end": 1617,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1623,
      "end": 1809,
      "id": {
        "type": "Identifier",
        "start": 1633,
        "end": 1653,
        "name": "BoundOverloadBuilder",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1693,
          "end": 1721,
          "expression": {
            "type": "Identifier",
            "start": 1693,
            "end": 1718,
            "name": "FinishableOverloadBuilder",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1719,
                  "end": 1720,
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
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1653,
        "end": 1684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1654,
            "end": 1683,
            "name": {
              "type": "Identifier",
              "start": 1654,
              "end": 1655,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1664,
              "end": 1683,
              "typeName": {
                "type": "Identifier",
                "start": 1664,
                "end": 1683,
                "name": "OverloadDefinitions",
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1722,
        "end": 1809,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1728,
            "end": 1807,
            "key": {
              "type": "Identifier",
              "start": 1728,
              "end": 1737,
              "name": "deprecate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1738,
                "end": 1775,
                "name": "deprecations",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1750,
                  "end": 1775,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1752,
                    "end": 1775,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1752,
                      "end": 1772,
                      "name": "OverloadDeprecations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1772,
                      "end": 1775,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1773,
                          "end": 1774,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1773,
                            "end": 1774,
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
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1776,
              "end": 1806,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1778,
                "end": 1806,
                "typeName": {
                  "type": "Identifier",
                  "start": 1778,
                  "end": 1803,
                  "name": "FinishableOverloadBuilder",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1803,
                  "end": 1806,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1804,
                      "end": 1805,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1804,
                        "end": 1805,
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
    {
      "type": "TSDeclareFunction",
      "start": 1811,
      "end": 1873,
      "id": {
        "type": "Identifier",
        "start": 1828,
        "end": 1841,
        "name": "buildOverload",
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
          "start": 1842,
          "end": 1854,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1846,
            "end": 1854,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1848,
              "end": 1854
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1855,
        "end": 1872,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1857,
          "end": 1872,
          "typeName": {
            "type": "Identifier",
            "start": 1857,
            "end": 1872,
            "name": "OverloadBuilder",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1875,
      "end": 1987,
      "id": {
        "type": "Identifier",
        "start": 1886,
        "end": 1896,
        "name": "SyntaxKind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 1903,
          "end": 1920,
          "id": {
            "type": "Identifier",
            "start": 1903,
            "end": 1920,
            "name": "ImportDeclaration",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1926,
          "end": 1934,
          "id": {
            "type": "Identifier",
            "start": 1926,
            "end": 1934,
            "name": "Modifier",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1940,
          "end": 1952,
          "id": {
            "type": "Identifier",
            "start": 1940,
            "end": 1952,
            "name": "ImportClause",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1958,
          "end": 1970,
          "id": {
            "type": "Identifier",
            "start": 1958,
            "end": 1970,
            "name": "AssertClause",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 1976,
          "end": 1985,
          "id": {
            "type": "Identifier",
            "start": 1976,
            "end": 1985,
            "name": "Decorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 1897,
        "end": 1987,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1903,
            "end": 1920,
            "id": {
              "type": "Identifier",
              "start": 1903,
              "end": 1920,
              "name": "ImportDeclaration",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1926,
            "end": 1934,
            "id": {
              "type": "Identifier",
              "start": 1926,
              "end": 1934,
              "name": "Modifier",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1940,
            "end": 1952,
            "id": {
              "type": "Identifier",
              "start": 1940,
              "end": 1952,
              "name": "ImportClause",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1958,
            "end": 1970,
            "id": {
              "type": "Identifier",
              "start": 1958,
              "end": 1970,
              "name": "AssertClause",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1976,
            "end": 1985,
            "id": {
              "type": "Identifier",
              "start": 1976,
              "end": 1985,
              "name": "Decorator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1989,
      "end": 2029,
      "id": {
        "type": "Identifier",
        "start": 1999,
        "end": 2003,
        "name": "Node",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2004,
        "end": 2029,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2010,
            "end": 2027,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2010,
              "end": 2014,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2014,
              "end": 2026,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2016,
                "end": 2026,
                "typeName": {
                  "type": "Identifier",
                  "start": 2016,
                  "end": 2026,
                  "name": "SyntaxKind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2031,
      "end": 2092,
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2052,
        "name": "Declaration",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2061,
          "end": 2065,
          "expression": {
            "type": "Identifier",
            "start": 2061,
            "end": 2065,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2066,
        "end": 2092,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2068,
            "end": 2090,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2068,
              "end": 2085,
              "name": "_declarationBrand",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2085,
              "end": 2090,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2087,
                "end": 2090
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2093,
      "end": 2150,
      "id": {
        "type": "Identifier",
        "start": 2103,
        "end": 2112,
        "name": "Statement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2121,
          "end": 2125,
          "expression": {
            "type": "Identifier",
            "start": 2121,
            "end": 2125,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2126,
        "end": 2150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2128,
            "end": 2148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2128,
              "end": 2143,
              "name": "_statementBrand",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2143,
              "end": 2148,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 2162,
        "end": 2172,
        "name": "Expression",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2181,
          "end": 2185,
          "expression": {
            "type": "Identifier",
            "start": 2181,
            "end": 2185,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2186,
        "end": 2212,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2188,
            "end": 2210,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2188,
              "end": 2204,
              "name": "_expressionBrand",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2204,
              "end": 2209,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2206,
                "end": 2209
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2214,
      "end": 2299,
      "id": {
        "type": "Identifier",
        "start": 2224,
        "end": 2241,
        "name": "ImportDeclaration",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2250,
          "end": 2259,
          "expression": {
            "type": "Identifier",
            "start": 2250,
            "end": 2259,
            "name": "Statement",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2260,
        "end": 2299,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2262,
            "end": 2297,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2262,
              "end": 2266,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2266,
              "end": 2296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2268,
                "end": 2296,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2268,
                  "end": 2296,
                  "left": {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2278,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2279,
                    "end": 2296,
                    "name": "ImportDeclaration",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2300,
      "end": 2362,
      "id": {
        "type": "Identifier",
        "start": 2310,
        "end": 2318,
        "name": "Modifier",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2327,
          "end": 2331,
          "expression": {
            "type": "Identifier",
            "start": 2327,
            "end": 2331,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2332,
        "end": 2362,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2334,
            "end": 2360,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2334,
              "end": 2338,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2338,
              "end": 2359,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2340,
                "end": 2359,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2340,
                  "end": 2359,
                  "left": {
                    "type": "Identifier",
                    "start": 2340,
                    "end": 2350,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2351,
                    "end": 2359,
                    "name": "Modifier",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2363,
      "end": 2427,
      "id": {
        "type": "Identifier",
        "start": 2373,
        "end": 2382,
        "name": "Decorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2391,
          "end": 2395,
          "expression": {
            "type": "Identifier",
            "start": 2391,
            "end": 2395,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2396,
        "end": 2427,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2398,
            "end": 2425,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2398,
              "end": 2402,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2402,
              "end": 2424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2404,
                "end": 2424,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2404,
                  "end": 2424,
                  "left": {
                    "type": "Identifier",
                    "start": 2404,
                    "end": 2414,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2415,
                    "end": 2424,
                    "name": "Decorator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2428,
      "end": 2505,
      "id": {
        "type": "Identifier",
        "start": 2438,
        "end": 2450,
        "name": "ImportClause",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2459,
          "end": 2470,
          "expression": {
            "type": "Identifier",
            "start": 2459,
            "end": 2470,
            "name": "Declaration",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2471,
        "end": 2505,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2473,
            "end": 2503,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2473,
              "end": 2477,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2477,
              "end": 2502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2479,
                "end": 2502,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2479,
                  "end": 2502,
                  "left": {
                    "type": "Identifier",
                    "start": 2479,
                    "end": 2489,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2490,
                    "end": 2502,
                    "name": "ImportClause",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2506,
      "end": 2576,
      "id": {
        "type": "Identifier",
        "start": 2516,
        "end": 2528,
        "name": "AssertClause",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2537,
          "end": 2541,
          "expression": {
            "type": "Identifier",
            "start": 2537,
            "end": 2541,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2542,
        "end": 2576,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2544,
            "end": 2574,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2544,
              "end": 2548,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2548,
              "end": 2573,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2550,
                "end": 2573,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2550,
                  "end": 2573,
                  "left": {
                    "type": "Identifier",
                    "start": 2550,
                    "end": 2560,
                    "name": "SyntaxKind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2561,
                    "end": 2573,
                    "name": "AssertClause",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2578,
      "end": 2640,
      "id": {
        "type": "Identifier",
        "start": 2595,
        "end": 2607,
        "name": "isExpression",
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
          "start": 2608,
          "end": 2618,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2612,
            "end": 2618,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2614,
              "end": 2618,
              "typeName": {
                "type": "Identifier",
                "start": 2614,
                "end": 2618,
                "name": "Node",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2619,
        "end": 2639,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2621,
          "end": 2639,
          "parameterName": {
            "type": "Identifier",
            "start": 2621,
            "end": 2625,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2629,
            "end": 2639,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2629,
              "end": 2639,
              "typeName": {
                "type": "Identifier",
                "start": 2629,
                "end": 2639,
                "name": "Expression",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2641,
      "end": 2707,
      "id": {
        "type": "Identifier",
        "start": 2658,
        "end": 2672,
        "name": "isAssertClause",
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
          "start": 2673,
          "end": 2683,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2677,
            "end": 2683,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2679,
              "end": 2683,
              "typeName": {
                "type": "Identifier",
                "start": 2679,
                "end": 2683,
                "name": "Node",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2684,
        "end": 2706,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2686,
          "end": 2706,
          "parameterName": {
            "type": "Identifier",
            "start": 2686,
            "end": 2690,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2694,
            "end": 2706,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2694,
              "end": 2706,
              "typeName": {
                "type": "Identifier",
                "start": 2694,
                "end": 2706,
                "name": "AssertClause",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2708,
      "end": 2774,
      "id": {
        "type": "Identifier",
        "start": 2725,
        "end": 2739,
        "name": "isImportClause",
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
          "start": 2740,
          "end": 2750,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2744,
            "end": 2750,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2746,
              "end": 2750,
              "typeName": {
                "type": "Identifier",
                "start": 2746,
                "end": 2750,
                "name": "Node",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2751,
        "end": 2773,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2753,
          "end": 2773,
          "parameterName": {
            "type": "Identifier",
            "start": 2753,
            "end": 2757,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2761,
            "end": 2773,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2761,
              "end": 2773,
              "typeName": {
                "type": "Identifier",
                "start": 2761,
                "end": 2773,
                "name": "ImportClause",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2775,
      "end": 2833,
      "id": {
        "type": "Identifier",
        "start": 2792,
        "end": 2802,
        "name": "isModifier",
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
          "start": 2803,
          "end": 2813,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2807,
            "end": 2813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2809,
              "end": 2813,
              "typeName": {
                "type": "Identifier",
                "start": 2809,
                "end": 2813,
                "name": "Node",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2814,
        "end": 2832,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2816,
          "end": 2832,
          "parameterName": {
            "type": "Identifier",
            "start": 2816,
            "end": 2820,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2824,
            "end": 2832,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2824,
              "end": 2832,
              "typeName": {
                "type": "Identifier",
                "start": 2824,
                "end": 2832,
                "name": "Modifier",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2834,
      "end": 2894,
      "id": {
        "type": "Identifier",
        "start": 2851,
        "end": 2862,
        "name": "isDecorator",
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
          "start": 2863,
          "end": 2873,
          "name": "node",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2867,
            "end": 2873,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2869,
              "end": 2873,
              "typeName": {
                "type": "Identifier",
                "start": 2869,
                "end": 2873,
                "name": "Node",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2874,
        "end": 2893,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2876,
          "end": 2893,
          "parameterName": {
            "type": "Identifier",
            "start": 2876,
            "end": 2880,
            "name": "node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2884,
            "end": 2893,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2884,
              "end": 2893,
              "typeName": {
                "type": "Identifier",
                "start": 2884,
                "end": 2893,
                "name": "Decorator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 2910,
            "end": 3390,
            "name": "updateImportDeclaration",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2942,
                        "end": 2965,
                        "name": "node",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2946,
                          "end": 2965,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2948,
                            "end": 2965,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2948,
                              "end": 2965,
                              "name": "ImportDeclaration",
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
                        "start": 2967,
                        "end": 3009,
                        "name": "modifiers",
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
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2987,
                                      "end": 2995,
                                      "name": "Modifier",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3011,
                        "end": 3049,
                        "name": "importClause",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3025,
                                  "end": 3037,
                                  "name": "ImportClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3040,
                                "end": 3049
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3051,
                        "end": 3078,
                        "name": "moduleSpecifier",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3066,
                          "end": 3078,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3068,
                            "end": 3078,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3068,
                              "end": 3078,
                              "name": "Expression",
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
                        "start": 3080,
                        "end": 3118,
                        "name": "assertClause",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3094,
                                  "end": 3106,
                                  "name": "AssertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3109,
                                "end": 3118
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 3121,
                          "end": 3138,
                          "name": "ImportDeclaration",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 3144,
                    "end": 3388,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3145,
                        "end": 3168,
                        "name": "node",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3149,
                          "end": 3168,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3151,
                            "end": 3168,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3151,
                              "end": 3168,
                              "name": "ImportDeclaration",
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
                        "start": 3170,
                        "end": 3214,
                        "name": "decorators",
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
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3191,
                                      "end": 3200,
                                      "name": "Decorator",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3216,
                        "end": 3258,
                        "name": "modifiers",
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
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3236,
                                      "end": 3244,
                                      "name": "Modifier",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3260,
                        "end": 3298,
                        "name": "importClause",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3274,
                                  "end": 3286,
                                  "name": "ImportClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3289,
                                "end": 3298
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 3300,
                        "end": 3327,
                        "name": "moduleSpecifier",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3315,
                          "end": 3327,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3317,
                            "end": 3327,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3317,
                              "end": 3327,
                              "name": "Expression",
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
                        "start": 3329,
                        "end": 3367,
                        "name": "assertClause",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3343,
                                  "end": 3355,
                                  "name": "AssertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3358,
                                "end": 3367
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 3370,
                          "end": 3387,
                          "name": "ImportDeclaration",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 3392,
      "end": 3530,
      "id": {
        "type": "Identifier",
        "start": 3409,
        "end": 3414,
        "name": "every",
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
          "start": 3431,
          "end": 3450,
          "name": "array",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3447,
                    "end": 3448,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3452,
          "end": 3505,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3460,
            "end": 3505,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3462,
              "end": 3505,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3463,
                  "end": 3473,
                  "name": "element",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3470,
                    "end": 3473,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3472,
                      "end": 3473,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3472,
                        "end": 3473,
                        "name": "T",
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
                  "start": 3475,
                  "end": 3488,
                  "name": "index",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3480,
                    "end": 3488,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3482,
                      "end": 3488
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                  "parameterName": {
                    "type": "Identifier",
                    "start": 3493,
                    "end": 3500,
                    "name": "element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3504,
                    "end": 3505,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3504,
                      "end": 3505,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3504,
                        "end": 3505,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
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
        "start": 3414,
        "end": 3430,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3415,
            "end": 3416,
            "name": {
              "type": "Identifier",
              "start": 3415,
              "end": 3416,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3418,
            "end": 3429,
            "name": {
              "type": "Identifier",
              "start": 3418,
              "end": 3419,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3428,
              "end": 3429,
              "typeName": {
                "type": "Identifier",
                "start": 3428,
                "end": 3429,
                "name": "T",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3506,
        "end": 3529,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3508,
          "end": 3529,
          "parameterName": {
            "type": "Identifier",
            "start": 3508,
            "end": 3513,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 3526,
                    "end": 3527,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3531,
      "end": 3693,
      "id": {
        "type": "Identifier",
        "start": 3548,
        "end": 3553,
        "name": "every",
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
          "start": 3570,
          "end": 3601,
          "name": "array",
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 3586,
                        "end": 3587,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3603,
          "end": 3656,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3611,
            "end": 3656,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3613,
              "end": 3656,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3614,
                  "end": 3624,
                  "name": "element",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3621,
                    "end": 3624,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3623,
                      "end": 3624,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3623,
                        "end": 3624,
                        "name": "T",
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
                  "start": 3626,
                  "end": 3639,
                  "name": "index",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3631,
                    "end": 3639,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3633,
                      "end": 3639
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                  "parameterName": {
                    "type": "Identifier",
                    "start": 3644,
                    "end": 3651,
                    "name": "element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3655,
                    "end": 3656,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3655,
                      "end": 3656,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3655,
                        "end": 3656,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
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
        "start": 3553,
        "end": 3569,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3554,
            "end": 3555,
            "name": {
              "type": "Identifier",
              "start": 3554,
              "end": 3555,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3557,
            "end": 3568,
            "name": {
              "type": "Identifier",
              "start": 3557,
              "end": 3558,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3567,
              "end": 3568,
              "typeName": {
                "type": "Identifier",
                "start": 3567,
                "end": 3568,
                "name": "T",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3657,
        "end": 3692,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3659,
          "end": 3692,
          "parameterName": {
            "type": "Identifier",
            "start": 3659,
            "end": 3664,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 3677,
                        "end": 3678,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3694,
      "end": 3812,
      "id": {
        "type": "Identifier",
        "start": 3711,
        "end": 3716,
        "name": "every",
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
          "start": 3720,
          "end": 3751,
          "name": "array",
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 3736,
                        "end": 3737,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3753,
          "end": 3801,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3761,
            "end": 3801,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3763,
              "end": 3801,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3764,
                  "end": 3774,
                  "name": "element",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3771,
                    "end": 3774,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3773,
                      "end": 3774,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3773,
                        "end": 3774,
                        "name": "T",
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
                  "start": 3776,
                  "end": 3789,
                  "name": "index",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3781,
                    "end": 3789,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3783,
                      "end": 3789
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
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
        "start": 3716,
        "end": 3719,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3717,
            "end": 3718,
            "name": {
              "type": "Identifier",
              "start": 3717,
              "end": 3718,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3802,
        "end": 3811,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 3804,
          "end": 3811
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3814,
      "end": 3880,
      "id": {
        "type": "Identifier",
        "start": 3831,
        "end": 3838,
        "name": "isArray",
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
          "start": 3839,
          "end": 3849,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3844,
            "end": 3849,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3846,
              "end": 3849
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3850,
        "end": 3879,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3852,
          "end": 3879,
          "parameterName": {
            "type": "Identifier",
            "start": 3852,
            "end": 3857,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
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
      }
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
          "id": {
            "type": "Identifier",
            "start": 3896,
            "end": 3935,
            "name": "DISALLOW_DECORATORS",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3915,
              "end": 3935,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3917,
                "end": 3935,
                "typeName": {
                  "type": "Identifier",
                  "start": 3917,
                  "end": 3935,
                  "name": "DeprecationOptions",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 3938,
      "end": 5663,
      "expression": {
        "type": "CallExpression",
        "start": 3938,
        "end": 5662,
        "callee": {
          "type": "MemberExpression",
          "start": 3938,
          "end": 5660,
          "object": {
            "type": "CallExpression",
            "start": 3938,
            "end": 5648,
            "callee": {
              "type": "MemberExpression",
              "start": 3938,
              "end": 5608,
              "object": {
                "type": "CallExpression",
                "start": 3938,
                "end": 5593,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3938,
                  "end": 4711,
                  "object": {
                    "type": "CallExpression",
                    "start": 3938,
                    "end": 4701,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3938,
                      "end": 3992,
                      "object": {
                        "type": "CallExpression",
                        "start": 3938,
                        "end": 3978,
                        "callee": {
                          "type": "Identifier",
                          "start": 3938,
                          "end": 3951,
                          "name": "buildOverload",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 3952,
                            "end": 3977,
                            "value": "updateImportDeclaration",
                            "raw": "\"updateImportDeclaration\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3984,
                        "end": 3992,
                        "name": "overload",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 4003,
                              "end": 4004,
                              "value": 0,
                              "raw": "0"
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 4004,
                              "end": 4319,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4005,
                                  "end": 4028,
                                  "name": "node",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4009,
                                    "end": 4028,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4011,
                                      "end": 4028,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4011,
                                        "end": 4028,
                                        "name": "ImportDeclaration",
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
                                  "start": 4030,
                                  "end": 4072,
                                  "name": "modifiers",
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
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 4050,
                                                "end": 4058,
                                                "name": "Modifier",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
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
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4074,
                                  "end": 4112,
                                  "name": "importClause",
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4088,
                                            "end": 4100,
                                            "name": "ImportClause",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4103,
                                          "end": 4112
                                        }
                                      ]
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4114,
                                  "end": 4141,
                                  "name": "moduleSpecifier",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4129,
                                    "end": 4141,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4131,
                                      "end": 4141,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4131,
                                        "end": 4141,
                                        "name": "Expression",
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
                                  "start": 4143,
                                  "end": 4181,
                                  "name": "assertClause",
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4157,
                                            "end": 4169,
                                            "name": "AssertClause",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4172,
                                          "end": 4181
                                        }
                                      ]
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4223,
                                        "end": 4246,
                                        "name": "updateImportDeclaration",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4247,
                                          "end": 4251,
                                          "name": "node",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4253,
                                          "end": 4262,
                                          "name": "modifiers",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4264,
                                          "end": 4276,
                                          "name": "importClause",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4278,
                                          "end": 4293,
                                          "name": "moduleSpecifier",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4295,
                                          "end": 4307,
                                          "name": "assertClause",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 4182,
                                "end": 4201,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4184,
                                  "end": 4201,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4184,
                                    "end": 4201,
                                    "name": "ImportDeclaration",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 4330,
                            "end": 4693,
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 4330,
                              "end": 4331,
                              "value": 1,
                              "raw": "1"
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 4331,
                              "end": 4693,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 4332,
                                  "end": 4355,
                                  "name": "node",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4336,
                                    "end": 4355,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4338,
                                      "end": 4355,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4338,
                                        "end": 4355,
                                        "name": "ImportDeclaration",
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
                                  "start": 4357,
                                  "end": 4402,
                                  "name": "_decorators",
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
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 4379,
                                                "end": 4388,
                                                "name": "Decorator",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
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
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4404,
                                  "end": 4446,
                                  "name": "modifiers",
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
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 4424,
                                                "end": 4432,
                                                "name": "Modifier",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
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
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4448,
                                  "end": 4486,
                                  "name": "importClause",
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4462,
                                            "end": 4474,
                                            "name": "ImportClause",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4477,
                                          "end": 4486
                                        }
                                      ]
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4488,
                                  "end": 4515,
                                  "name": "moduleSpecifier",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 4503,
                                    "end": 4515,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 4505,
                                      "end": 4515,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 4505,
                                        "end": 4515,
                                        "name": "Expression",
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
                                  "start": 4517,
                                  "end": 4555,
                                  "name": "assertClause",
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 4531,
                                            "end": 4543,
                                            "name": "AssertClause",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4546,
                                          "end": 4555
                                        }
                                      ]
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4597,
                                        "end": 4620,
                                        "name": "updateImportDeclaration",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4621,
                                          "end": 4625,
                                          "name": "node",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4627,
                                          "end": 4636,
                                          "name": "modifiers",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4638,
                                          "end": 4650,
                                          "name": "importClause",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4652,
                                          "end": 4667,
                                          "name": "moduleSpecifier",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4669,
                                          "end": 4681,
                                          "name": "assertClause",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 4556,
                                "end": 4575,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 4558,
                                  "end": 4575,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4558,
                                    "end": 4575,
                                    "name": "ImportDeclaration",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4707,
                    "end": 4711,
                    "name": "bind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 4722,
                          "end": 4723,
                          "value": 0,
                          "raw": "0"
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 4725,
                          "end": 5128,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "start": 4726,
                              "end": 4791,
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "start": 4729,
                                  "end": 4738,
                                  "name": "modifiers",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4740,
                                  "end": 4752,
                                  "name": "importClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4754,
                                  "end": 4769,
                                  "name": "moduleSpecifier",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4771,
                                  "end": 4783,
                                  "name": "assertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 4785,
                                  "end": 4790,
                                  "name": "other",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "body": {
                            "type": "LogicalExpression",
                            "start": 4808,
                            "end": 5128,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 4808,
                              "end": 5052,
                              "left": {
                                "type": "LogicalExpression",
                                "start": 4808,
                                "end": 4972,
                                "left": {
                                  "type": "LogicalExpression",
                                  "start": 4808,
                                  "end": 4902,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 4809,
                                    "end": 4828,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4809,
                                      "end": 4814,
                                      "name": "other",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4819,
                                      "end": 4828,
                                      "name": "undefined",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "start": 4846,
                                    "end": 4901,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 4846,
                                      "end": 4869,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 4846,
                                        "end": 4855,
                                        "name": "modifiers",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 4860,
                                        "end": 4869,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 4873,
                                      "end": 4901,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4873,
                                        "end": 4878,
                                        "name": "every",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4879,
                                          "end": 4888,
                                          "name": "modifiers",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 4890,
                                          "end": 4900,
                                          "name": "isModifier",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "LogicalExpression",
                                  "start": 4919,
                                  "end": 4971,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 4919,
                                    "end": 4945,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 4919,
                                      "end": 4931,
                                      "name": "importClause",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 4936,
                                      "end": 4945,
                                      "name": "undefined",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "UnaryExpression",
                                    "start": 4949,
                                    "end": 4971,
                                    "operator": "!",
                                    "prefix": true,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 4950,
                                      "end": 4971,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 4950,
                                        "end": 4957,
                                        "name": "isArray",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 4958,
                                          "end": 4970,
                                          "name": "importClause",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "start": 4989,
                                "end": 5051,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 4989,
                                  "end": 5018,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4989,
                                    "end": 5004,
                                    "name": "moduleSpecifier",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5009,
                                    "end": 5018,
                                    "name": "undefined",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "operator": "||",
                                "right": {
                                  "type": "CallExpression",
                                  "start": 5022,
                                  "end": 5051,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5022,
                                    "end": 5034,
                                    "name": "isExpression",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 5035,
                                      "end": 5050,
                                      "name": "moduleSpecifier",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "LogicalExpression",
                              "start": 5069,
                              "end": 5127,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 5069,
                                "end": 5095,
                                "left": {
                                  "type": "Identifier",
                                  "start": 5069,
                                  "end": 5081,
                                  "name": "assertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Identifier",
                                  "start": 5086,
                                  "end": 5095,
                                  "name": "undefined",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "start": 5099,
                                "end": 5127,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5099,
                                  "end": 5113,
                                  "name": "isAssertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 5114,
                                    "end": 5126,
                                    "name": "assertClause",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 5139,
                        "end": 5585,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 5139,
                          "end": 5140,
                          "value": 1,
                          "raw": "1"
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 5142,
                          "end": 5585,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "start": 5143,
                              "end": 5213,
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "start": 5146,
                                  "end": 5156,
                                  "name": "decorators",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5158,
                                  "end": 5167,
                                  "name": "modifiers",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5169,
                                  "end": 5181,
                                  "name": "importClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5183,
                                  "end": 5198,
                                  "name": "moduleSpecifier",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 5200,
                                  "end": 5212,
                                  "name": "assertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "body": {
                            "type": "LogicalExpression",
                            "start": 5230,
                            "end": 5585,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 5230,
                              "end": 5509,
                              "left": {
                                "type": "LogicalExpression",
                                "start": 5230,
                                "end": 5429,
                                "left": {
                                  "type": "LogicalExpression",
                                  "start": 5230,
                                  "end": 5353,
                                  "left": {
                                    "type": "LogicalExpression",
                                    "start": 5231,
                                    "end": 5289,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 5231,
                                      "end": 5255,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5231,
                                        "end": 5241,
                                        "name": "decorators",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5246,
                                        "end": 5255,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 5259,
                                      "end": 5289,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 5259,
                                        "end": 5264,
                                        "name": "every",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 5265,
                                          "end": 5275,
                                          "name": "decorators",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 5277,
                                          "end": 5288,
                                          "name": "isDecorator",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "start": 5307,
                                    "end": 5352,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 5307,
                                      "end": 5330,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 5307,
                                        "end": 5316,
                                        "name": "modifiers",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 5321,
                                        "end": 5330,
                                        "name": "undefined",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "start": 5334,
                                      "end": 5352,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 5334,
                                        "end": 5341,
                                        "name": "isArray",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 5342,
                                          "end": 5351,
                                          "name": "modifiers",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "LogicalExpression",
                                  "start": 5370,
                                  "end": 5428,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 5370,
                                    "end": 5396,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 5370,
                                      "end": 5382,
                                      "name": "importClause",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 5387,
                                      "end": 5396,
                                      "name": "undefined",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 5400,
                                    "end": 5428,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 5400,
                                      "end": 5414,
                                      "name": "isImportClause",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 5415,
                                        "end": 5427,
                                        "name": "importClause",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "start": 5446,
                                "end": 5508,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 5446,
                                  "end": 5475,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5446,
                                    "end": 5461,
                                    "name": "moduleSpecifier",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "!==",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 5466,
                                    "end": 5475,
                                    "name": "undefined",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "CallExpression",
                                  "start": 5479,
                                  "end": 5508,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 5479,
                                    "end": 5491,
                                    "name": "isExpression",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 5492,
                                      "end": 5507,
                                      "name": "moduleSpecifier",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "LogicalExpression",
                              "start": 5526,
                              "end": 5584,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 5526,
                                "end": 5552,
                                "left": {
                                  "type": "Identifier",
                                  "start": 5526,
                                  "end": 5538,
                                  "name": "assertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Identifier",
                                  "start": 5543,
                                  "end": 5552,
                                  "name": "undefined",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "start": 5556,
                                "end": 5584,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5556,
                                  "end": 5570,
                                  "name": "isAssertClause",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 5571,
                                    "end": 5583,
                                    "name": "assertClause",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 5599,
                "end": 5608,
                "name": "deprecate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 5619,
                      "end": 5620,
                      "value": 1,
                      "raw": "1"
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 5622,
                      "end": 5641,
                      "name": "DISALLOW_DECORATORS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 5654,
            "end": 5660,
            "name": "finish",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 5680,
            "end": 5733,
            "name": "modifiers",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 5700,
                          "end": 5708,
                          "name": "Modifier",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 5722,
                          "end": 5731,
                          "name": "Decorator",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 5736,
      "end": 5823,
      "id": {
        "type": "Identifier",
        "start": 5745,
        "end": 5748,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 5751,
        "end": 5823,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5757,
            "end": 5786,
            "expression": {
              "type": "CallExpression",
              "start": 5757,
              "end": 5785,
              "callee": {
                "type": "Identifier",
                "start": 5757,
                "end": 5762,
                "name": "every",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5763,
                  "end": 5772,
                  "name": "modifiers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 5774,
                  "end": 5784,
                  "name": "isModifier",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5791,
            "end": 5821,
            "expression": {
              "type": "CallExpression",
              "start": 5791,
              "end": 5820,
              "callee": {
                "type": "Identifier",
                "start": 5791,
                "end": 5796,
                "name": "every",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5797,
                  "end": 5806,
                  "name": "modifiers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 5808,
                  "end": 5819,
                  "name": "isDecorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
