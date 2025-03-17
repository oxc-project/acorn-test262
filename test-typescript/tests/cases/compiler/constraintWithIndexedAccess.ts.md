__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 1966,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 10,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 27,
        "name": "DataFetchFns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 30,
        "end": 537,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 277,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 40,
              "name": "Boat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 42,
                "end": 276,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 93,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 67,
                      "name": "requiresLicense",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 69,
                        "end": 92,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 70,
                            "end": 80,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 72,
                              "end": 80,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 74,
                                "end": 80
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 82,
                          "end": 92,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 85,
                            "end": 92
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 102,
                    "end": 141,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 116,
                      "name": "maxGroundSpeed",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 116,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 118,
                        "end": 140,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 119,
                            "end": 129,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 121,
                              "end": 129,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 123,
                                "end": 129
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 131,
                          "end": 140,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 134,
                            "end": 140
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 150,
                    "end": 186,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 161,
                      "name": "description",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 161,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 163,
                        "end": 185,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 164,
                            "end": 174,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 166,
                              "end": 174,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 168,
                                "end": 174
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 176,
                          "end": 185,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 195,
                    "end": 232,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 207,
                      "name": "displacement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 231,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 209,
                        "end": 231,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 210,
                            "end": 220,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 212,
                              "end": 220,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 214,
                                "end": 220
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 222,
                          "end": 231,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 225,
                            "end": 231
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 241,
                    "end": 270,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 245,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 245,
                      "end": 269,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 247,
                        "end": 269,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 248,
                            "end": 258,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 250,
                              "end": 258,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 252,
                                "end": 258
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 260,
                          "end": 269,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 263,
                            "end": 269
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 535,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "name": "Plane",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 535,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 289,
                "end": 535,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 299,
                    "end": 340,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 314,
                      "name": "requiresLicense",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 314,
                      "end": 339,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 316,
                        "end": 339,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 317,
                            "end": 327,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 319,
                              "end": 327,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 321,
                                "end": 327
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 329,
                          "end": 339,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 332,
                            "end": 339
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 349,
                    "end": 388,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 349,
                      "end": 363,
                      "name": "maxGroundSpeed",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 363,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 365,
                        "end": 387,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 366,
                            "end": 376,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 368,
                              "end": 376,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 370,
                                "end": 376
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 378,
                          "end": 387,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 381,
                            "end": 387
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 397,
                    "end": 438,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 413,
                      "name": "maxTakeoffWeight",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 413,
                      "end": 437,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 415,
                        "end": 437,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 416,
                            "end": 426,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 418,
                              "end": 426,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 420,
                                "end": 426
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 428,
                          "end": 437,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 431,
                            "end": 437
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 447,
                    "end": 491,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 466,
                      "name": "maxCruisingAltitude",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 466,
                      "end": 490,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 468,
                        "end": 490,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 469,
                            "end": 479,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 471,
                              "end": 479,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 473,
                                "end": 479
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 481,
                          "end": 490,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 484,
                            "end": 490
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 500,
                    "end": 529,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 504,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 504,
                      "end": 528,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 506,
                        "end": 528,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 507,
                            "end": 517,
                            "name": "id",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 509,
                              "end": 517,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 511,
                                "end": 517
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 519,
                          "end": 528,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 522,
                            "end": 528
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "ExportNamedDeclaration",
      "start": 538,
      "end": 650,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 545,
        "end": 650,
        "id": {
          "type": "Identifier",
          "start": 550,
          "end": 573,
          "name": "NoTypeParamBoatRequired",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 573,
          "end": 611,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 574,
              "end": 610,
              "name": {
                "type": "Identifier",
                "start": 574,
                "end": 575,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 584,
                "end": 610,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 590,
                  "end": 610,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 590,
                    "end": 602,
                    "typeName": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 602,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 603,
                    "end": 609,
                    "literal": {
                      "type": "Literal",
                      "start": 603,
                      "end": 609,
                      "value": "Boat",
                      "raw": "'Boat'"
                    }
                  }
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
          "start": 614,
          "end": 649,
          "typeName": {
            "type": "Identifier",
            "start": 614,
            "end": 624,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 624,
            "end": 649,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 625,
                "end": 648,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 625,
                  "end": 645,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 625,
                    "end": 637,
                    "typeName": {
                      "type": "Identifier",
                      "start": 625,
                      "end": 637,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 638,
                    "end": 644,
                    "literal": {
                      "type": "Literal",
                      "start": 638,
                      "end": 644,
                      "value": "Boat",
                      "raw": "'Boat'"
                    }
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 646,
                  "end": 647,
                  "typeName": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 647,
                    "name": "F",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 651,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 656,
        "end": 697,
        "name": "TypeHardcodedAsParameterWithoutReturnType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 697,
        "end": 748,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 698,
            "end": 714,
            "name": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 708,
              "end": 714,
              "literal": {
                "type": "Literal",
                "start": 708,
                "end": 714,
                "value": "Boat",
                "raw": "'Boat'"
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 716,
            "end": 747,
            "name": {
              "type": "Identifier",
              "start": 716,
              "end": 717,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 726,
              "end": 747,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 732,
                "end": 747,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 732,
                  "end": 744,
                  "typeName": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 744,
                    "name": "DataFetchFns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 745,
                  "end": 746,
                  "typeName": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
        "type": "TSIndexedAccessType",
        "start": 751,
        "end": 769,
        "objectType": {
          "type": "TSIndexedAccessType",
          "start": 751,
          "end": 766,
          "objectType": {
            "type": "TSTypeReference",
            "start": 751,
            "end": 763,
            "typeName": {
              "type": "Identifier",
              "start": 751,
              "end": 763,
              "name": "DataFetchFns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 764,
            "end": 765,
            "typeName": {
              "type": "Identifier",
              "start": 764,
              "end": 765,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 767,
          "end": 768,
          "typeName": {
            "type": "Identifier",
            "start": 767,
            "end": 768,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 771,
      "end": 889,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 778,
        "end": 889,
        "id": {
          "type": "Identifier",
          "start": 783,
          "end": 808,
          "name": "allAreFunctionsAsExpected",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 811,
          "end": 888,
          "typeName": {
            "type": "Identifier",
            "start": 811,
            "end": 852,
            "name": "TypeHardcodedAsParameterWithoutReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 852,
            "end": 888,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 853,
                "end": 859,
                "literal": {
                  "type": "Literal",
                  "start": 853,
                  "end": 859,
                  "value": "Boat",
                  "raw": "'Boat'"
                }
              },
              {
                "type": "TSTypeOperator",
                "start": 861,
                "end": 887,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 867,
                  "end": 887,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 867,
                    "end": 879,
                    "typeName": {
                      "type": "Identifier",
                      "start": 867,
                      "end": 879,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 880,
                    "end": 886,
                    "literal": {
                      "type": "Literal",
                      "start": 880,
                      "end": 886,
                      "value": "Boat",
                      "raw": "'Boat'"
                    }
                  }
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
      "start": 890,
      "end": 964,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 897,
        "end": 964,
        "id": {
          "type": "Identifier",
          "start": 902,
          "end": 923,
          "name": "returnTypeOfFunctions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 926,
          "end": 963,
          "typeName": {
            "type": "Identifier",
            "start": 926,
            "end": 936,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 936,
            "end": 963,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 937,
                "end": 962,
                "typeName": {
                  "type": "Identifier",
                  "start": 937,
                  "end": 962,
                  "name": "allAreFunctionsAsExpected",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 1005,
      "end": 1125,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1012,
        "end": 1125,
        "id": {
          "type": "Identifier",
          "start": 1017,
          "end": 1032,
          "name": "SucceedingCombo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1035,
          "end": 1124,
          "typeName": {
            "type": "Identifier",
            "start": 1035,
            "end": 1045,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1045,
            "end": 1124,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1046,
                "end": 1123,
                "typeName": {
                  "type": "Identifier",
                  "start": 1046,
                  "end": 1087,
                  "name": "TypeHardcodedAsParameterWithoutReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1087,
                  "end": 1123,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 1088,
                      "end": 1094,
                      "literal": {
                        "type": "Literal",
                        "start": 1088,
                        "end": 1094,
                        "value": "Boat",
                        "raw": "'Boat'"
                      }
                    },
                    {
                      "type": "TSTypeOperator",
                      "start": 1096,
                      "end": 1122,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1102,
                        "end": 1122,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1102,
                          "end": 1114,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1102,
                            "end": 1114,
                            "name": "DataFetchFns",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 1115,
                          "end": 1121,
                          "literal": {
                            "type": "Literal",
                            "start": 1115,
                            "end": 1121,
                            "value": "Boat",
                            "raw": "'Boat'"
                          }
                        }
                      }
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
      "start": 1126,
      "end": 1263,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1133,
        "end": 1263,
        "id": {
          "type": "Identifier",
          "start": 1138,
          "end": 1150,
          "name": "FailingCombo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1150,
          "end": 1201,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1151,
              "end": 1167,
              "name": {
                "type": "Identifier",
                "start": 1151,
                "end": 1152,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSLiteralType",
                "start": 1161,
                "end": 1167,
                "literal": {
                  "type": "Literal",
                  "start": 1161,
                  "end": 1167,
                  "value": "Boat",
                  "raw": "'Boat'"
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1169,
              "end": 1200,
              "name": {
                "type": "Identifier",
                "start": 1169,
                "end": 1170,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1179,
                "end": 1200,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1185,
                  "end": 1200,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1185,
                    "end": 1197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1185,
                      "end": 1197,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1198,
                    "end": 1199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1198,
                      "end": 1199,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
          "start": 1204,
          "end": 1262,
          "typeName": {
            "type": "Identifier",
            "start": 1204,
            "end": 1214,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1214,
            "end": 1262,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1215,
                "end": 1261,
                "typeName": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1256,
                  "name": "TypeHardcodedAsParameterWithoutReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1256,
                  "end": 1261,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1257,
                      "end": 1258,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1257,
                        "end": 1258,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1259,
                      "end": 1260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1259,
                        "end": 1260,
                        "name": "F",
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
      "start": 1264,
      "end": 1385,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1271,
        "end": 1385,
        "id": {
          "type": "Identifier",
          "start": 1276,
          "end": 1300,
          "name": "TypeHardcodedAsParameter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1300,
          "end": 1351,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1301,
              "end": 1317,
              "name": {
                "type": "Identifier",
                "start": 1301,
                "end": 1302,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSLiteralType",
                "start": 1311,
                "end": 1317,
                "literal": {
                  "type": "Literal",
                  "start": 1311,
                  "end": 1317,
                  "value": "Boat",
                  "raw": "'Boat'"
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1319,
              "end": 1350,
              "name": {
                "type": "Identifier",
                "start": 1319,
                "end": 1320,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1329,
                "end": 1350,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1335,
                  "end": 1350,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1335,
                    "end": 1347,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1335,
                      "end": 1347,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
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
          "start": 1354,
          "end": 1384,
          "typeName": {
            "type": "Identifier",
            "start": 1354,
            "end": 1364,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1364,
            "end": 1384,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1365,
                "end": 1383,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 1365,
                  "end": 1380,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1365,
                    "end": 1377,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1365,
                      "end": 1377,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1378,
                    "end": 1379,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1378,
                      "end": 1379,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1381,
                  "end": 1382,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1382,
                    "name": "F",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1386,
      "end": 1455,
      "id": {
        "type": "Identifier",
        "start": 1391,
        "end": 1406,
        "name": "VehicleSelector",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1406,
        "end": 1436,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1407,
            "end": 1435,
            "name": {
              "type": "Identifier",
              "start": 1407,
              "end": 1408,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1417,
              "end": 1435,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1423,
                "end": 1435,
                "typeName": {
                  "type": "Identifier",
                  "start": 1423,
                  "end": 1435,
                  "name": "DataFetchFns",
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1439,
        "end": 1454,
        "objectType": {
          "type": "TSTypeReference",
          "start": 1439,
          "end": 1451,
          "typeName": {
            "type": "Identifier",
            "start": 1439,
            "end": 1451,
            "name": "DataFetchFns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 1452,
          "end": 1453,
          "typeName": {
            "type": "Identifier",
            "start": 1452,
            "end": 1453,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1456,
      "end": 1581,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1463,
        "end": 1581,
        "id": {
          "type": "Identifier",
          "start": 1468,
          "end": 1493,
          "name": "TypeHardcodedAsParameter2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1493,
          "end": 1544,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1494,
              "end": 1510,
              "name": {
                "type": "Identifier",
                "start": 1494,
                "end": 1495,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSLiteralType",
                "start": 1504,
                "end": 1510,
                "literal": {
                  "type": "Literal",
                  "start": 1504,
                  "end": 1510,
                  "value": "Boat",
                  "raw": "'Boat'"
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1512,
              "end": 1543,
              "name": {
                "type": "Identifier",
                "start": 1512,
                "end": 1513,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1522,
                "end": 1543,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1528,
                  "end": 1543,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1528,
                    "end": 1540,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1528,
                      "end": 1540,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1541,
                    "end": 1542,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1541,
                      "end": 1542,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
          "start": 1547,
          "end": 1580,
          "typeName": {
            "type": "Identifier",
            "start": 1547,
            "end": 1557,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1557,
            "end": 1580,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1558,
                "end": 1579,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1558,
                  "end": 1576,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1558,
                    "end": 1573,
                    "name": "VehicleSelector",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1573,
                    "end": 1576,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1574,
                        "end": 1575,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1574,
                          "end": 1575,
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
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1577,
                  "end": 1578,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1577,
                    "end": 1578,
                    "name": "F",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1582,
      "end": 1703,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1589,
        "end": 1703,
        "id": {
          "type": "Identifier",
          "start": 1594,
          "end": 1606,
          "name": "TypeGeneric1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1606,
          "end": 1669,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1607,
              "end": 1635,
              "name": {
                "type": "Identifier",
                "start": 1607,
                "end": 1608,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1617,
                "end": 1635,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1623,
                  "end": 1635,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1623,
                    "end": 1635,
                    "name": "DataFetchFns",
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
            {
              "type": "TSTypeParameter",
              "start": 1637,
              "end": 1668,
              "name": {
                "type": "Identifier",
                "start": 1637,
                "end": 1638,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1647,
                "end": 1668,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1653,
                  "end": 1668,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1653,
                    "end": 1665,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1653,
                      "end": 1665,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1666,
                    "end": 1667,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1666,
                      "end": 1667,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
          "start": 1672,
          "end": 1702,
          "typeName": {
            "type": "Identifier",
            "start": 1672,
            "end": 1682,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1682,
            "end": 1702,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1683,
                "end": 1701,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 1683,
                  "end": 1698,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1683,
                    "end": 1695,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1683,
                      "end": 1695,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1696,
                    "end": 1697,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1696,
                      "end": 1697,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1699,
                  "end": 1700,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1699,
                    "end": 1700,
                    "name": "F",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1704,
      "end": 1825,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1711,
        "end": 1825,
        "id": {
          "type": "Identifier",
          "start": 1716,
          "end": 1728,
          "name": "TypeGeneric2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1728,
          "end": 1791,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1729,
              "end": 1757,
              "name": {
                "type": "Identifier",
                "start": 1729,
                "end": 1730,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1739,
                "end": 1757,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1745,
                  "end": 1757,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1745,
                    "end": 1757,
                    "name": "DataFetchFns",
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
            {
              "type": "TSTypeParameter",
              "start": 1759,
              "end": 1790,
              "name": {
                "type": "Identifier",
                "start": 1759,
                "end": 1760,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1769,
                "end": 1790,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1775,
                  "end": 1790,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1775,
                    "end": 1787,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1775,
                      "end": 1787,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1788,
                    "end": 1789,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1788,
                      "end": 1789,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
          "start": 1794,
          "end": 1824,
          "typeName": {
            "type": "Identifier",
            "start": 1794,
            "end": 1804,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1804,
            "end": 1824,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1805,
                "end": 1823,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 1805,
                  "end": 1820,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1805,
                    "end": 1817,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1805,
                      "end": 1817,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1818,
                    "end": 1819,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1819,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1821,
                  "end": 1822,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1821,
                    "end": 1822,
                    "name": "T",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1835,
      "end": 1956,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1842,
        "end": 1956,
        "id": {
          "type": "Identifier",
          "start": 1847,
          "end": 1859,
          "name": "TypeGeneric3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1859,
          "end": 1922,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1860,
              "end": 1888,
              "name": {
                "type": "Identifier",
                "start": 1860,
                "end": 1861,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1870,
                "end": 1888,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1876,
                  "end": 1888,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1876,
                    "end": 1888,
                    "name": "DataFetchFns",
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
            {
              "type": "TSTypeParameter",
              "start": 1890,
              "end": 1921,
              "name": {
                "type": "Identifier",
                "start": 1890,
                "end": 1891,
                "name": "F",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1900,
                "end": 1921,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1906,
                  "end": 1921,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1906,
                    "end": 1918,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1906,
                      "end": 1918,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1919,
                    "end": 1920,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1919,
                      "end": 1920,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
          "start": 1925,
          "end": 1955,
          "typeName": {
            "type": "Identifier",
            "start": 1925,
            "end": 1935,
            "name": "ReturnType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1935,
            "end": 1955,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1936,
                "end": 1954,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 1936,
                  "end": 1951,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1936,
                    "end": 1948,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1936,
                      "end": 1948,
                      "name": "DataFetchFns",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1949,
                    "end": 1950,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1949,
                      "end": 1950,
                      "name": "F",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1952,
                  "end": 1953,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1952,
                    "end": 1953,
                    "name": "F",
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
