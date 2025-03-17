__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1131,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 111,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 39,
        "decorators": [],
        "name": "UnshiftTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 64,
        "end": 110,
        "checkType": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 65,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 74,
          "end": 95,
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "start": 75,
              "end": 79,
              "indexType": {
                "type": "TSLiteralType",
                "start": 77,
                "end": 78,
                "literal": {
                  "type": "Literal",
                  "start": 77,
                  "end": 78,
                  "raw": "0",
                  "value": 0
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 81,
              "end": 94,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 84,
                "end": 94,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 90,
                  "end": 94,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 94,
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 105,
          "end": 110
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 98,
          "end": 102,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 102,
            "decorators": [],
            "name": "Tail",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 60,
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "start": 50,
              "end": 60,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 51,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 54,
                    "end": 59,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 54,
                      "end": 57
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
      "start": 112,
      "end": 230,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 136,
        "decorators": [],
        "name": "ExpandSmallerTuples",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 161,
        "end": 229,
        "checkType": {
          "type": "TSTypeReference",
          "start": 161,
          "end": 162,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 171,
          "end": 192,
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "start": 172,
              "end": 176,
              "indexType": {
                "type": "TSLiteralType",
                "start": 174,
                "end": 175,
                "literal": {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "raw": "0",
                  "value": 0
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 178,
              "end": 191,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 181,
                "end": 191,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 187,
                  "end": 191,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 191,
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTupleType",
          "start": 227,
          "end": 229,
          "elementTypes": []
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 195,
          "end": 224,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 195,
              "end": 196,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 199,
              "end": 224,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 218,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 219,
                    "end": 223,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 223,
                      "decorators": [],
                      "name": "Tail",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 218,
                "decorators": [],
                "name": "ExpandSmallerTuples",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 136,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 157,
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "start": 147,
              "end": 157,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 151,
                    "end": 156,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 151,
                      "end": 154
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
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
      "start": 231,
      "end": 347,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 241,
        "decorators": [],
        "name": "Shift",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 266,
        "end": 346,
        "checkType": {
          "type": "TSFunctionType",
          "start": 267,
          "end": 287,
          "params": [
            {
              "type": "RestElement",
              "start": 268,
              "end": 278,
              "argument": {
                "type": "Identifier",
                "start": 271,
                "end": 275,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 275,
                "end": 278,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 277,
                  "end": 278,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 280,
            "end": 287,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 283,
              "end": 287
            }
          },
          "typeParameters": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 297,
          "end": 334,
          "params": [
            {
              "type": "RestElement",
              "start": 298,
              "end": 325,
              "argument": {
                "type": "Identifier",
                "start": 301,
                "end": 305,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 305,
                "end": 325,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 307,
                  "end": 325,
                  "elementTypes": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 308,
                      "end": 312,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 310,
                        "end": 311,
                        "literal": {
                          "type": "Literal",
                          "start": 310,
                          "end": 311,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 308,
                        "end": 309,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 308,
                          "end": 309,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "TSRestType",
                      "start": 314,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 317,
                        "end": 324,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 323,
                          "end": 324,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 324,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      }
                    }
                  ]
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 334,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 330,
              "end": 334
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 337,
          "end": 338,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 263,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 262,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 262,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 257,
                "end": 262,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 258,
                    "end": 261
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 257,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "A",
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
      "start": 348,
      "end": 547,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 363,
        "decorators": [],
        "name": "GrowExpRev",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 435,
        "end": 546,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 435,
          "end": 446,
          "indexType": {
            "type": "TSLiteralType",
            "start": 437,
            "end": 445,
            "literal": {
              "type": "Literal",
              "start": 437,
              "end": 445,
              "raw": "'length'",
              "value": "length"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 435,
            "end": 436,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 455,
          "end": 456,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 463,
          "end": 546,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 473,
            "end": 546,
            "params": [
              {
                "type": "TSConditionalType",
                "start": 474,
                "end": 532,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 474,
                  "end": 492,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 490,
                    "end": 491,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 490,
                      "end": 491,
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTupleType",
                    "start": 474,
                    "end": 489,
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "start": 475,
                        "end": 479,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 478,
                          "end": 479,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 479,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "start": 481,
                        "end": 488,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 484,
                          "end": 488,
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 486,
                            "end": 487,
                            "literal": {
                              "type": "Literal",
                              "start": 486,
                              "end": 487,
                              "raw": "0",
                              "value": 0
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 484,
                            "end": 485,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 484,
                              "end": 485,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSUndefinedKeyword",
                  "start": 501,
                  "end": 510
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 531,
                  "end": 532,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "trueType": {
                  "type": "TSTupleType",
                  "start": 513,
                  "end": 528,
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "start": 514,
                      "end": 518,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 517,
                        "end": 518,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 517,
                          "end": 518,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "TSRestType",
                      "start": 520,
                      "end": 527,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 523,
                        "end": 527,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 525,
                          "end": 526,
                          "literal": {
                            "type": "Literal",
                            "start": 525,
                            "end": 526,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 523,
                          "end": 524,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 523,
                            "end": 524,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 534,
                "end": 535,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 537,
                "end": 545,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 542,
                  "end": 545,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 543,
                      "end": 544,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 544,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 542,
                  "decorators": [],
                  "name": "Shift",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 463,
            "end": 473,
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 459,
          "end": 460,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 459,
            "end": 460,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 363,
        "end": 432,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 364,
            "end": 384,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 384,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 379,
                "end": 384,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 380,
                    "end": 383
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 379,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 386,
            "end": 402,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 404,
            "end": 431,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 431,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 419,
                "end": 431,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 430,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 425,
                      "end": 430,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 426,
                          "end": 429
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 425,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 419,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "decorators": [],
              "name": "P",
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
      "start": 548,
      "end": 726,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 560,
        "decorators": [],
        "name": "GrowExp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 632,
        "end": 725,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 632,
          "end": 647,
          "indexType": {
            "type": "TSTypeReference",
            "start": 645,
            "end": 646,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTupleType",
            "start": 632,
            "end": 644,
            "elementTypes": [
              {
                "type": "TSRestType",
                "start": 633,
                "end": 637,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 636,
                  "end": 637,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 637,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "TSRestType",
                "start": 639,
                "end": 643,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 642,
                  "end": 643,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 656,
          "end": 665
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 706,
          "end": 725,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 716,
            "end": 725,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 717,
                "end": 718,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 718,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 720,
                "end": 721,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 721,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 723,
                "end": 724,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 724,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 706,
            "end": 716,
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 668,
          "end": 703,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 675,
            "end": 703,
            "params": [
              {
                "type": "TSTupleType",
                "start": 676,
                "end": 688,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 677,
                    "end": 681,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 680,
                      "end": 681,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 683,
                    "end": 687,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 686,
                      "end": 687,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 687,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 690,
                "end": 691,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 691,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTupleType",
                "start": 693,
                "end": 702,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 694,
                    "end": 695,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 694,
                      "end": 695,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 697,
                    "end": 701,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 700,
                      "end": 701,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 700,
                        "end": 701,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 668,
            "end": 675,
            "decorators": [],
            "name": "GrowExp",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 560,
        "end": 629,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 561,
            "end": 581,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 581,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 576,
                "end": 581,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 577,
                    "end": 580
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 576,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 561,
              "end": 562,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 599,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 593,
              "end": 599
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 601,
            "end": 628,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 611,
              "end": 628,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 616,
                "end": 628,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 617,
                    "end": 627,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 622,
                      "end": 627,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 623,
                          "end": 626
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 617,
                      "end": 622,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 611,
                "end": 616,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "P",
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
      "start": 727,
      "end": 852,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 737,
        "decorators": [],
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 761,
        "end": 851,
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 761,
          "end": 767
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 776,
          "end": 777,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 776,
            "end": 777,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 791,
          "end": 851,
          "checkType": {
            "type": "TSTypeReference",
            "start": 791,
            "end": 792,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 801,
            "end": 802,
            "literal": {
              "type": "Literal",
              "start": 801,
              "end": 802,
              "raw": "0",
              "value": 0
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 810,
            "end": 851,
            "checkType": {
              "type": "TSTypeReference",
              "start": 810,
              "end": 811,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 810,
                "end": 811,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSLiteralType",
              "start": 820,
              "end": 821,
              "literal": {
                "type": "Literal",
                "start": 820,
                "end": 821,
                "raw": "1",
                "value": 1
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 830,
              "end": 851,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 837,
                "end": 851,
                "params": [
                  {
                    "type": "TSTupleType",
                    "start": 838,
                    "end": 841,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 839,
                        "end": 840,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 839,
                          "end": 840,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 843,
                    "end": 844,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 843,
                      "end": 844,
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "start": 846,
                    "end": 850,
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "start": 847,
                        "end": 849,
                        "elementTypes": []
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 830,
                "end": 837,
                "decorators": [],
                "name": "GrowExp",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "trueType": {
              "type": "TSTupleType",
              "start": 824,
              "end": 827,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 825,
                  "end": 826,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 825,
                    "end": 826,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 805,
            "end": 807,
            "elementTypes": []
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 780,
          "end": 788,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 785,
            "end": 788,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 786,
                "end": 787,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
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
            "start": 780,
            "end": 785,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 737,
        "end": 758,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 738,
            "end": 739,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 738,
              "end": 739,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 741,
            "end": 757,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 751,
              "end": 757
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 854,
      "end": 1130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 919,
        "end": 1130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 925,
            "end": 1128,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 925,
              "end": 936,
              "decorators": [],
              "name": "lengthRange",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 936,
              "end": 1128,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 973,
                  "end": 981,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 978,
                    "end": 981,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 980,
                      "end": 981,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 980,
                        "end": 981,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 983,
                  "end": 995,
                  "decorators": [],
                  "name": "endBefore",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 992,
                    "end": 995,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 994,
                      "end": 995,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 994,
                        "end": 995,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 996,
                "end": 1127,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 998,
                  "end": 1127,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1012,
                    "end": 1127,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1013,
                        "end": 1126,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1020,
                          "end": 1126,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1021,
                              "end": 1072,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1040,
                                "end": 1072,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1041,
                                    "end": 1071,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 1053,
                                      "end": 1071,
                                      "params": [
                                        {
                                          "type": "TSTupleType",
                                          "start": 1054,
                                          "end": 1070,
                                          "elementTypes": [
                                            {
                                              "type": "TSRestType",
                                              "start": 1055,
                                              "end": 1069,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1058,
                                                "end": 1069,
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 1063,
                                                  "end": 1069,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1064,
                                                      "end": 1065,
                                                      "typeArguments": null,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1064,
                                                        "end": 1065,
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1067,
                                                      "end": 1068,
                                                      "typeArguments": null,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1067,
                                                        "end": 1068,
                                                        "decorators": [],
                                                        "name": "E",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    }
                                                  ]
                                                },
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1058,
                                                  "end": 1063,
                                                  "decorators": [],
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1041,
                                      "end": 1053,
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1021,
                                "end": 1040,
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1074,
                              "end": 1125,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1093,
                                "end": 1125,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1094,
                                    "end": 1124,
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 1106,
                                      "end": 1124,
                                      "params": [
                                        {
                                          "type": "TSTupleType",
                                          "start": 1107,
                                          "end": 1123,
                                          "elementTypes": [
                                            {
                                              "type": "TSRestType",
                                              "start": 1108,
                                              "end": 1122,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1111,
                                                "end": 1122,
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 1116,
                                                  "end": 1122,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1117,
                                                      "end": 1118,
                                                      "typeArguments": null,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1117,
                                                        "end": 1118,
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1120,
                                                      "end": 1121,
                                                      "typeArguments": null,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1120,
                                                        "end": 1121,
                                                        "decorators": [],
                                                        "name": "S",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      }
                                                    }
                                                  ]
                                                },
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1111,
                                                  "end": 1116,
                                                  "decorators": [],
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1094,
                                      "end": 1106,
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1074,
                                "end": 1093,
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1020,
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1012,
                    "decorators": [],
                    "name": "ArrayValidator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 936,
                "end": 972,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 937,
                    "end": 953,
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 937,
                      "end": 938,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 955,
                    "end": 971,
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 965,
                      "end": 971
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 956,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 868,
        "end": 882,
        "decorators": [],
        "name": "ArrayValidator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 882,
        "end": 918,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 883,
            "end": 902,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 893,
              "end": 902,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 893,
                "end": 900
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 904,
            "end": 917,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSIndexedAccessType",
              "start": 908,
              "end": 917,
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 908,
                "end": 909,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 908,
                  "end": 909,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 904,
              "end": 905,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
