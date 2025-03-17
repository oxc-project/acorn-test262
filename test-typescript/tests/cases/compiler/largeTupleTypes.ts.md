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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 39,
        "name": "UnshiftTuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 64,
        "end": 110,
        "checkType": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 65,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "objectType": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 77,
                "end": 78,
                "literal": {
                  "type": "Literal",
                  "start": 77,
                  "end": 78,
                  "value": 0,
                  "raw": "0"
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
                  "name": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 94,
                    "name": "Tail",
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
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 98,
          "end": 102,
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 102,
            "name": "Tail",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 105,
          "end": 110
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 136,
        "name": "ExpandSmallerTuples",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 161,
        "end": 229,
        "checkType": {
          "type": "TSTypeReference",
          "start": 161,
          "end": 162,
          "typeName": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "objectType": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 174,
                "end": 175,
                "literal": {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "value": 0,
                  "raw": "0"
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
                  "name": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 191,
                    "name": "Tail",
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
            }
          ]
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
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 199,
              "end": 224,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 218,
                "name": "ExpandSmallerTuples",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 218,
                "end": 224,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 219,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 223,
                      "name": "Tail",
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
          "type": "TSTupleType",
          "start": 227,
          "end": 229,
          "elementTypes": []
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 231,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 241,
        "name": "Shift",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 262,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 257,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
        "type": "TSConditionalType",
        "start": 266,
        "end": 346,
        "checkType": {
          "type": "TSFunctionType",
          "start": 267,
          "end": 287,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 268,
              "end": 278,
              "argument": {
                "type": "Identifier",
                "start": 271,
                "end": 275,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 297,
          "end": 334,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 298,
              "end": 325,
              "argument": {
                "type": "Identifier",
                "start": 301,
                "end": 305,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 308,
                        "end": 309,
                        "typeName": {
                          "type": "Identifier",
                          "start": 308,
                          "end": 309,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 310,
                        "end": 311,
                        "literal": {
                          "type": "Literal",
                          "start": 310,
                          "end": 311,
                          "value": 0,
                          "raw": "0"
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
                          "name": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 324,
                            "name": "R",
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
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 337,
          "end": 338,
          "typeName": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 348,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 363,
        "name": "GrowExpRev",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 379,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 386,
            "end": 402,
            "name": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 404,
            "end": 431,
            "name": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 419,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 419,
                "end": 431,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 420,
                    "end": 430,
                    "typeName": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 425,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 435,
        "end": 546,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 435,
          "end": 446,
          "objectType": {
            "type": "TSTypeReference",
            "start": 435,
            "end": 436,
            "typeName": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 437,
            "end": 445,
            "literal": {
              "type": "Literal",
              "start": 437,
              "end": 445,
              "value": "length",
              "raw": "'length'"
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 455,
          "end": 456,
          "typeName": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 459,
          "end": 460,
          "typeName": {
            "type": "Identifier",
            "start": 459,
            "end": 460,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 463,
          "end": 546,
          "typeName": {
            "type": "Identifier",
            "start": 463,
            "end": 473,
            "name": "GrowExpRev",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 478,
                            "end": 479,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 484,
                            "end": 485,
                            "typeName": {
                              "type": "Identifier",
                              "start": 484,
                              "end": 485,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 486,
                            "end": 487,
                            "literal": {
                              "type": "Literal",
                              "start": 486,
                              "end": 487,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        }
                      }
                    ]
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 490,
                    "end": 491,
                    "typeName": {
                      "type": "Identifier",
                      "start": 490,
                      "end": 491,
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSUndefinedKeyword",
                  "start": 501,
                  "end": 510
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 517,
                          "end": 518,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 523,
                          "end": 524,
                          "typeName": {
                            "type": "Identifier",
                            "start": 523,
                            "end": 524,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 525,
                          "end": 526,
                          "literal": {
                            "type": "Literal",
                            "start": 525,
                            "end": 526,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      }
                    }
                  ]
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 531,
                  "end": 532,
                  "typeName": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 532,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 534,
                "end": 535,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 537,
                "end": 545,
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 542,
                  "name": "Shift",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 542,
                  "end": 545,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 543,
                      "end": 544,
                      "typeName": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 544,
                        "name": "P",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 548,
      "end": 726,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 560,
        "name": "GrowExp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 561,
              "end": 562,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 581,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 576,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 599,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 593,
              "end": 599
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 601,
            "end": 628,
            "name": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 611,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 611,
                "end": 616,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 616,
                "end": 628,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 617,
                    "end": 627,
                    "typeName": {
                      "type": "Identifier",
                      "start": 617,
                      "end": 622,
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 632,
        "end": 725,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 632,
          "end": 647,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 637,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 645,
            "end": 646,
            "typeName": {
              "type": "Identifier",
              "start": 645,
              "end": 646,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 656,
          "end": 665
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 668,
          "end": 703,
          "typeName": {
            "type": "Identifier",
            "start": 668,
            "end": 675,
            "name": "GrowExp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 687,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 690,
                "end": 691,
                "typeName": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 691,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 694,
                      "end": 695,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSRestType",
                    "start": 697,
                    "end": 701,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 700,
                      "end": 701,
                      "typeName": {
                        "type": "Identifier",
                        "start": 700,
                        "end": 701,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 706,
          "end": 725,
          "typeName": {
            "type": "Identifier",
            "start": 706,
            "end": 716,
            "name": "GrowExpRev",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 716,
            "end": 725,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 717,
                "end": 718,
                "typeName": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 718,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 720,
                "end": 721,
                "typeName": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 721,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 723,
                "end": 724,
                "typeName": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 724,
                  "name": "P",
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 727,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 737,
        "name": "Tuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 738,
              "end": 739,
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
            "start": 741,
            "end": 757,
            "name": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 751,
              "end": 757
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
          "typeName": {
            "type": "Identifier",
            "start": 776,
            "end": 777,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 780,
          "end": 788,
          "typeName": {
            "type": "Identifier",
            "start": 780,
            "end": 785,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 785,
            "end": 788,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 786,
                "end": 787,
                "typeName": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
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
        "falseType": {
          "type": "TSConditionalType",
          "start": 791,
          "end": 851,
          "checkType": {
            "type": "TSTypeReference",
            "start": 791,
            "end": 792,
            "typeName": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 801,
            "end": 802,
            "literal": {
              "type": "Literal",
              "start": 801,
              "end": 802,
              "value": 0,
              "raw": "0"
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 805,
            "end": 807,
            "elementTypes": []
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 810,
            "end": 851,
            "checkType": {
              "type": "TSTypeReference",
              "start": 810,
              "end": 811,
              "typeName": {
                "type": "Identifier",
                "start": 810,
                "end": 811,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSLiteralType",
              "start": 820,
              "end": 821,
              "literal": {
                "type": "Literal",
                "start": 820,
                "end": 821,
                "value": 1,
                "raw": "1"
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 825,
                    "end": 826,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 830,
              "end": 851,
              "typeName": {
                "type": "Identifier",
                "start": 830,
                "end": 837,
                "name": "GrowExp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 839,
                          "end": 840,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 843,
                    "end": 844,
                    "typeName": {
                      "type": "Identifier",
                      "start": 843,
                      "end": 844,
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 854,
      "end": 1130,
      "id": {
        "type": "Identifier",
        "start": 868,
        "end": 882,
        "name": "ArrayValidator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 919,
        "end": 1130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 925,
            "end": 1128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 925,
              "end": 936,
              "name": "lengthRange",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 936,
              "end": 1128,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 973,
                  "end": 981,
                  "name": "start",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 978,
                    "end": 981,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 980,
                      "end": 981,
                      "typeName": {
                        "type": "Identifier",
                        "start": 980,
                        "end": 981,
                        "name": "S",
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
                  "start": 983,
                  "end": 995,
                  "name": "endBefore",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 992,
                    "end": 995,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 994,
                      "end": 995,
                      "typeName": {
                        "type": "Identifier",
                        "start": 994,
                        "end": 995,
                        "name": "E",
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
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 936,
                "end": 972,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 937,
                    "end": 953,
                    "name": {
                      "type": "Identifier",
                      "start": 937,
                      "end": 938,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 955,
                    "end": 971,
                    "name": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 956,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 965,
                      "end": 971
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
                "start": 996,
                "end": 1127,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 998,
                  "end": 1127,
                  "typeName": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1012,
                    "name": "ArrayValidator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1012,
                    "end": 1127,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1013,
                        "end": 1126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1020,
                          "name": "Exclude",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1020,
                          "end": 1126,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1021,
                              "end": 1072,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1021,
                                "end": 1040,
                                "name": "ExpandSmallerTuples",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1040,
                                "end": 1072,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1041,
                                    "end": 1071,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1041,
                                      "end": 1053,
                                      "name": "UnshiftTuple",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1058,
                                                  "end": 1063,
                                                  "name": "Tuple",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 1063,
                                                  "end": 1069,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1064,
                                                      "end": 1065,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1064,
                                                        "end": 1065,
                                                        "name": "I",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "typeArguments": null
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1067,
                                                      "end": 1068,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1067,
                                                        "end": 1068,
                                                        "name": "E",
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
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1074,
                              "end": 1125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1074,
                                "end": 1093,
                                "name": "ExpandSmallerTuples",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1093,
                                "end": 1125,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1094,
                                    "end": 1124,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1094,
                                      "end": 1106,
                                      "name": "UnshiftTuple",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
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
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1111,
                                                  "end": 1116,
                                                  "name": "Tuple",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 1116,
                                                  "end": 1122,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1117,
                                                      "end": 1118,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1117,
                                                        "end": 1118,
                                                        "name": "I",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "typeArguments": null
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "start": 1120,
                                                      "end": 1121,
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "start": 1120,
                                                        "end": 1121,
                                                        "name": "S",
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
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 882,
        "end": 918,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 883,
            "end": 902,
            "name": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 904,
            "end": 917,
            "name": {
              "type": "Identifier",
              "start": 904,
              "end": 905,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSIndexedAccessType",
              "start": 908,
              "end": 917,
              "objectType": {
                "type": "TSTypeReference",
                "start": 908,
                "end": 909,
                "typeName": {
                  "type": "Identifier",
                  "start": 908,
                  "end": 909,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
