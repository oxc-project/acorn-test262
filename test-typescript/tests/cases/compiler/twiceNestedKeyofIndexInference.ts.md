twiceNestedKeyofIndexInference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 826,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 140,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Set1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 35,
        "end": 139,
        "checkType": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 36,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 45,
          "end": 50,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 45,
            "end": 48
          }
        },
        "falseType": {
          "type": "TSIntersectionType",
          "start": 57,
          "end": 139,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 57,
              "end": 86,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 61,
                "end": 86,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 65,
                    "end": 85,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 72,
                      "end": 85,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 73,
                          "end": 80,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 79,
                            "end": 80,
                            "typeName": {
                              "type": "Identifier",
                              "start": 79,
                              "end": 80,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 82,
                          "end": 84,
                          "typeName": {
                            "type": "Identifier",
                            "start": 82,
                            "end": 84,
                            "decorators": [],
                            "name": "K1",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 72,
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 89,
              "end": 139,
              "indexType": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 138,
                  "decorators": [],
                  "name": "K1",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "start": 89,
                "end": 135,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 103,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 105,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "SK1",
                  "optional": false
                },
                "nameType": null,
                "optional": "-",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 110,
                  "end": 132,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 118,
                    "end": 132,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 119,
                        "end": 131,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 123,
                          "end": 131,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 124,
                              "end": 125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 127,
                              "end": 130,
                              "typeName": {
                                "type": "Identifier",
                                "start": 127,
                                "end": 130,
                                "decorators": [],
                                "name": "SK1",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 123,
                          "decorators": [],
                          "name": "Pick",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 118,
                    "decorators": [],
                    "name": "Required",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 31,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 24,
              "end": 31,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "K1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 142,
      "end": 339,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "decorators": [],
        "name": "Set2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 201,
        "end": 338,
        "checkType": {
          "type": "TSTypeReference",
          "start": 201,
          "end": 202,
          "typeName": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 211,
          "end": 216,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 211,
            "end": 214
          }
        },
        "falseType": {
          "type": "TSIntersectionType",
          "start": 223,
          "end": 338,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 223,
              "end": 252,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 227,
                "end": 252,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 229,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 251,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 238,
                      "end": 251,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 239,
                          "end": 246,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 245,
                            "end": 246,
                            "typeName": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 248,
                          "end": 250,
                          "typeName": {
                            "type": "Identifier",
                            "start": 248,
                            "end": 250,
                            "decorators": [],
                            "name": "K1",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 238,
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 227,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 255,
              "end": 338,
              "indexType": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 337,
                  "decorators": [],
                  "name": "K1",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "start": 255,
                "end": 334,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 271,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 265,
                  "decorators": [],
                  "name": "SK1",
                  "optional": false
                },
                "nameType": null,
                "optional": "-",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 276,
                  "end": 331,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 284,
                    "end": 331,
                    "params": [
                      {
                        "type": "TSMappedType",
                        "start": 285,
                        "end": 330,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 303,
                          "end": 305,
                          "typeName": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 305,
                            "decorators": [],
                            "name": "K1",
                            "optional": false
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 299,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 308,
                          "end": 323,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 312,
                            "end": 323,
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "start": 313,
                                "end": 318,
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 315,
                                  "end": 317,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 315,
                                    "end": 317,
                                    "decorators": [],
                                    "name": "K1",
                                    "optional": false
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 313,
                                  "end": 314,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 313,
                                    "end": 314,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 320,
                                "end": 322,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 320,
                                  "end": 322,
                                  "decorators": [],
                                  "name": "K2",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 312,
                            "decorators": [],
                            "name": "Set1",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 284,
                    "decorators": [],
                    "name": "Required",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 220,
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 173,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 166,
              "end": 173,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 157,
              "decorators": [],
              "name": "K1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 197,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 186,
              "end": 197,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 192,
                "end": 197,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 194,
                  "end": 196,
                  "typeName": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 196,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 193,
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 177,
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
      "type": "TSDeclareFunction",
      "start": 341,
      "end": 435,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 361,
        "decorators": [],
        "name": "set",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 394,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 394,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 394,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 396,
          "end": 406,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 400,
            "end": 406,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 402,
              "end": 406,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 403,
                  "end": 405,
                  "typeName": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 405,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 408,
          "end": 420,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 420,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 415,
              "end": 420,
              "indexType": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 419,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 419,
                  "decorators": [],
                  "name": "K1",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 415,
                "end": 416,
                "typeName": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 421,
        "end": 434,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 423,
          "end": 434,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 427,
            "end": 434,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 428,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 431,
                "end": 433,
                "typeName": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 433,
                  "decorators": [],
                  "name": "K1",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 423,
            "end": 427,
            "decorators": [],
            "name": "Set1",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 361,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 362,
            "end": 363,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 365,
            "end": 383,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 376,
              "end": 383,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 383,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 365,
              "end": 367,
              "decorators": [],
              "name": "K1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 437,
      "end": 567,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 457,
        "decorators": [],
        "name": "set",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 505,
          "end": 514,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 511,
            "end": 514,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 513,
              "end": 514,
              "typeName": {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 516,
          "end": 530,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 520,
            "end": 530,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 522,
              "end": 530,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 523,
                  "end": 525,
                  "typeName": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 525,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 527,
                  "end": 529,
                  "typeName": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 529,
                    "decorators": [],
                    "name": "K2",
                    "optional": false
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 532,
          "end": 548,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 548,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 539,
              "end": 548,
              "indexType": {
                "type": "TSTypeReference",
                "start": 545,
                "end": 547,
                "typeName": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 547,
                  "decorators": [],
                  "name": "K2",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 539,
                "end": 544,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 541,
                  "end": 543,
                  "typeName": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 543,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 539,
                  "end": 540,
                  "typeName": {
                    "type": "Identifier",
                    "start": 539,
                    "end": 540,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 549,
        "end": 566,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 551,
          "end": 566,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 555,
            "end": 566,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 556,
                "end": 557,
                "typeName": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 559,
                "end": 561,
                "typeName": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 561,
                  "decorators": [],
                  "name": "K1",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 563,
                "end": 565,
                "typeName": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 565,
                  "decorators": [],
                  "name": "K2",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 551,
            "end": 555,
            "decorators": [],
            "name": "Set2",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 457,
        "end": 504,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 458,
            "end": 459,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 461,
            "end": 479,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 472,
              "end": 479,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 478,
                "end": 479,
                "typeName": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 461,
              "end": 463,
              "decorators": [],
              "name": "K1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 481,
            "end": 503,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 492,
              "end": 503,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 498,
                "end": 503,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 500,
                  "end": 502,
                  "typeName": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 502,
                    "decorators": [],
                    "name": "K1",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 498,
                  "end": 499,
                  "typeName": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 499,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 481,
              "end": 483,
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
      "type": "TSInterfaceDeclaration",
      "start": 570,
      "end": 659,
      "body": {
        "type": "TSInterfaceBody",
        "start": 586,
        "end": 659,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 592,
            "end": 641,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 593,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 595,
                "end": 640,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 605,
                    "end": 615,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 606,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 606,
                      "end": 614,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 608,
                        "end": 614
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 624,
                    "end": 634,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 624,
                      "end": 625,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 625,
                      "end": 633,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 627,
                        "end": 633
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 646,
            "end": 657,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 656,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 649,
                "end": 656
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 580,
        "end": 585,
        "decorators": [],
        "name": "State",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 661,
      "end": 745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 744,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 679,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 672,
              "end": 679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 674,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 679,
                  "decorators": [],
                  "name": "State",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 682,
            "end": 744,
            "properties": [
              {
                "type": "Property",
                "start": 688,
                "end": 727,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 689,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 691,
                  "end": 727,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 701,
                      "end": 706,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 701,
                        "end": 702,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 704,
                        "end": 706,
                        "raw": "\"\"",
                        "value": ""
                      }
                    },
                    {
                      "type": "Property",
                      "start": 716,
                      "end": 720,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 716,
                        "end": 717,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 719,
                        "end": 720,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 733,
                "end": 741,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 736,
                  "end": 741,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 747,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 800,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 768,
            "decorators": [],
            "name": "newState",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 761,
              "end": 768,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 763,
                "end": 768,
                "typeName": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 768,
                  "decorators": [],
                  "name": "State",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 771,
            "end": 800,
            "arguments": [
              {
                "type": "Identifier",
                "start": 775,
                "end": 780,
                "decorators": [],
                "name": "state",
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 782,
                "end": 792,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 783,
                    "end": 786,
                    "raw": "\"a\"",
                    "value": "a"
                  },
                  {
                    "type": "Literal",
                    "start": 788,
                    "end": 791,
                    "raw": "'b'",
                    "value": "b"
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 794,
                "end": 799,
                "raw": "'why'",
                "value": "why"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 771,
              "end": 774,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
