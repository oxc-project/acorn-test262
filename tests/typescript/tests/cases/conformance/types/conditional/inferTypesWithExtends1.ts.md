__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 5718,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 26,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 50,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 49,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 44,
              "end": 49,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
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
        "start": 57,
        "end": 176,
        "checkType": {
          "type": "TSTypeReference",
          "start": 57,
          "end": 58,
          "typeName": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 67,
          "end": 91,
          "elementTypes": [
            {
              "type": "TSInferType",
              "start": 68,
              "end": 90,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 74,
                "end": 90,
                "name": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 84,
                  "end": 90
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 94,
          "end": 107,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 95,
              "end": 103,
              "literal": {
                "type": "Literal",
                "start": 95,
                "end": 103,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 105,
              "end": 106,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 114,
          "end": 176,
          "checkType": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 124,
            "end": 148,
            "elementTypes": [
              {
                "type": "TSInferType",
                "start": 125,
                "end": 147,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 131,
                  "end": 147,
                  "name": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 151,
            "end": 164,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 152,
                "end": 160,
                "literal": {
                  "type": "Literal",
                  "start": 152,
                  "end": 160,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 162,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 171,
            "end": 176
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 179,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 189,
        "decorators": [],
        "name": "X1_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 192,
        "end": 201,
        "typeName": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 194,
          "end": 201,
          "params": [
            {
              "type": "TSTupleType",
              "start": 195,
              "end": 200,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 196,
                  "end": 199,
                  "literal": {
                    "type": "Literal",
                    "start": 196,
                    "end": 199,
                    "value": "a",
                    "raw": "\"a\""
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
      "start": 222,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 232,
        "decorators": [],
        "name": "X1_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 235,
        "end": 242,
        "typeName": {
          "type": "Identifier",
          "start": 235,
          "end": 237,
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 237,
          "end": 242,
          "params": [
            {
              "type": "TSTupleType",
              "start": 238,
              "end": 241,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 239,
                  "end": 240,
                  "literal": {
                    "type": "Literal",
                    "start": 239,
                    "end": 240,
                    "value": 1,
                    "raw": "1"
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
      "start": 261,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 271,
        "decorators": [],
        "name": "X1_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 274,
        "end": 286,
        "typeName": {
          "type": "Identifier",
          "start": 274,
          "end": 276,
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 276,
          "end": 286,
          "params": [
            {
              "type": "TSTupleType",
              "start": 277,
              "end": 285,
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 278,
                  "end": 284
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
      "start": 319,
      "end": 511,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 326,
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 326,
        "end": 362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 327,
            "end": 361,
            "name": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 337,
              "end": 361,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 338,
                  "end": 352,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 345,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 347,
                      "end": 352,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 347,
                        "end": 350
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 354,
                "end": 361,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 357,
                  "end": 361
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
        "type": "TSConditionalType",
        "start": 369,
        "end": 510,
        "checkType": {
          "type": "TSTypeReference",
          "start": 369,
          "end": 370,
          "typeName": {
            "type": "Identifier",
            "start": 369,
            "end": 370,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 379,
          "end": 414,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 380,
              "end": 405,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 381,
                "end": 405,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 383,
                  "end": 405,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 389,
                    "end": 405,
                    "name": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 390,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 399,
                      "end": 405
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 407,
            "end": 414,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 410,
              "end": 414
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 417,
          "end": 430,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 418,
              "end": 426,
              "literal": {
                "type": "Literal",
                "start": 418,
                "end": 426,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 428,
              "end": 429,
              "typeName": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 437,
          "end": 510,
          "checkType": {
            "type": "TSTypeReference",
            "start": 437,
            "end": 438,
            "typeName": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 447,
            "end": 482,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 448,
                "end": 473,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 449,
                  "end": 473,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 451,
                    "end": 473,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 457,
                      "end": 473,
                      "name": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 467,
                        "end": 473
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 482,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 478,
                "end": 482
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 485,
            "end": 498,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 486,
                "end": 494,
                "literal": {
                  "type": "Literal",
                  "start": 486,
                  "end": 494,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 496,
                "end": 497,
                "typeName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 505,
            "end": 510
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 513,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 523,
        "decorators": [],
        "name": "X2_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 526,
        "end": 546,
        "typeName": {
          "type": "Identifier",
          "start": 526,
          "end": 528,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 528,
          "end": 546,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 529,
              "end": 545,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 530,
                  "end": 536,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 531,
                    "end": 536,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 533,
                      "end": 536,
                      "literal": {
                        "type": "Literal",
                        "start": 533,
                        "end": 536,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 538,
                "end": 545,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 541,
                  "end": 545
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
      "start": 567,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 577,
        "decorators": [],
        "name": "X2_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 580,
        "end": 598,
        "typeName": {
          "type": "Identifier",
          "start": 580,
          "end": 582,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 582,
          "end": 598,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 583,
              "end": 597,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 584,
                  "end": 588,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 585,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 587,
                      "end": 588,
                      "literal": {
                        "type": "Literal",
                        "start": 587,
                        "end": 588,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 590,
                "end": 597,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 593,
                  "end": 597
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
      "start": 617,
      "end": 654,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 627,
        "decorators": [],
        "name": "X2_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 630,
        "end": 653,
        "typeName": {
          "type": "Identifier",
          "start": 630,
          "end": 632,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 632,
          "end": 653,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 633,
              "end": 652,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 634,
                  "end": 643,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 635,
                    "end": 643,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 637,
                      "end": 643
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 645,
                "end": 652,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 648,
                  "end": 652
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
      "start": 689,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 694,
        "end": 696,
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 696,
        "end": 731,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 697,
            "end": 730,
            "name": {
              "type": "Identifier",
              "start": 697,
              "end": 698,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 707,
              "end": 730,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 708,
                  "end": 722,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 715,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 715,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 717,
                      "end": 722,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 717,
                        "end": 720
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 724,
                "end": 730,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 727,
                  "end": 730
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
        "type": "TSConditionalType",
        "start": 738,
        "end": 897,
        "checkType": {
          "type": "TSTypeReference",
          "start": 738,
          "end": 739,
          "typeName": {
            "type": "Identifier",
            "start": 738,
            "end": 739,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 748,
          "end": 792,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 749,
              "end": 763,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 752,
                "end": 756,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 756,
                "end": 763,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 758,
                  "end": 763,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 758,
                    "end": 761
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 765,
            "end": 792,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 769,
              "end": 791,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 775,
                "end": 791,
                "name": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 785,
                  "end": 791
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 795,
          "end": 808,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 796,
              "end": 804,
              "literal": {
                "type": "Literal",
                "start": 796,
                "end": 804,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 806,
              "end": 807,
              "typeName": {
                "type": "Identifier",
                "start": 806,
                "end": 807,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 815,
          "end": 897,
          "checkType": {
            "type": "TSTypeReference",
            "start": 815,
            "end": 816,
            "typeName": {
              "type": "Identifier",
              "start": 815,
              "end": 816,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 825,
            "end": 869,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 826,
                "end": 840,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 833,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 833,
                  "end": 840,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 835,
                    "end": 840,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 835,
                      "end": 838
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 842,
              "end": 869,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 846,
                "end": 868,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 852,
                  "end": 868,
                  "name": {
                    "type": "Identifier",
                    "start": 852,
                    "end": 853,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 862,
                    "end": 868
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 872,
            "end": 885,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 873,
                "end": 881,
                "literal": {
                  "type": "Literal",
                  "start": 873,
                  "end": 881,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 883,
                "end": 884,
                "typeName": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 884,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 892,
            "end": 897
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 900,
      "end": 927,
      "id": {
        "type": "Identifier",
        "start": 905,
        "end": 910,
        "decorators": [],
        "name": "X3_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 913,
        "end": 926,
        "typeName": {
          "type": "Identifier",
          "start": 913,
          "end": 915,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 915,
          "end": 926,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 916,
              "end": 925,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 919,
                "end": 925,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 922,
                  "end": 925,
                  "literal": {
                    "type": "Literal",
                    "start": 922,
                    "end": 925,
                    "value": "a",
                    "raw": "\"a\""
                  }
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
      "start": 947,
      "end": 972,
      "id": {
        "type": "Identifier",
        "start": 952,
        "end": 957,
        "decorators": [],
        "name": "X3_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 960,
        "end": 971,
        "typeName": {
          "type": "Identifier",
          "start": 960,
          "end": 962,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 962,
          "end": 971,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 963,
              "end": 970,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 966,
                "end": 970,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 969,
                  "end": 970,
                  "literal": {
                    "type": "Literal",
                    "start": 969,
                    "end": 970,
                    "value": 1,
                    "raw": "1"
                  }
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
      "start": 990,
      "end": 1020,
      "id": {
        "type": "Identifier",
        "start": 995,
        "end": 1000,
        "decorators": [],
        "name": "X3_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1003,
        "end": 1019,
        "typeName": {
          "type": "Identifier",
          "start": 1003,
          "end": 1005,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1005,
          "end": 1019,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1006,
              "end": 1018,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1009,
                "end": 1018,
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 1012,
                  "end": 1018
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
      "start": 1057,
      "end": 1292,
      "id": {
        "type": "Identifier",
        "start": 1062,
        "end": 1064,
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1064,
        "end": 1103,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1065,
            "end": 1102,
            "name": {
              "type": "Identifier",
              "start": 1065,
              "end": 1066,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSConstructorType",
              "start": 1075,
              "end": 1102,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1080,
                  "end": 1094,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1087,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1087,
                    "end": 1094,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1089,
                      "end": 1094,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1089,
                        "end": 1092
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1096,
                "end": 1102,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1099,
                  "end": 1102
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
        "type": "TSConditionalType",
        "start": 1110,
        "end": 1291,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1110,
          "end": 1111,
          "typeName": {
            "type": "Identifier",
            "start": 1110,
            "end": 1111,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSConstructorType",
          "start": 1120,
          "end": 1175,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 1125,
              "end": 1139,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 1128,
                "end": 1132,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1132,
                "end": 1139,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1134,
                  "end": 1139,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1134,
                    "end": 1137
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1141,
            "end": 1175,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 1145,
              "end": 1174,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 1151,
                "end": 1174,
                "name": {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1152,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeLiteral",
                  "start": 1161,
                  "end": 1174,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1163,
                      "end": 1172,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1163,
                        "end": 1164,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1164,
                        "end": 1172,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1166,
                          "end": 1172
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 1178,
          "end": 1191,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1179,
              "end": 1187,
              "literal": {
                "type": "Literal",
                "start": 1179,
                "end": 1187,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1189,
              "end": 1190,
              "typeName": {
                "type": "Identifier",
                "start": 1189,
                "end": 1190,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1198,
          "end": 1291,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1198,
            "end": 1199,
            "typeName": {
              "type": "Identifier",
              "start": 1198,
              "end": 1199,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSConstructorType",
            "start": 1208,
            "end": 1263,
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 1213,
                "end": 1227,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1220,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1220,
                  "end": 1227,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1222,
                    "end": 1227,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1222,
                      "end": 1225
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1229,
              "end": 1263,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 1233,
                "end": 1262,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1239,
                  "end": 1262,
                  "name": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 1249,
                    "end": 1262,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1251,
                        "end": 1260,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1251,
                          "end": 1252,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1252,
                          "end": 1260,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1254,
                            "end": 1260
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 1266,
            "end": 1279,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 1267,
                "end": 1275,
                "literal": {
                  "type": "Literal",
                  "start": 1267,
                  "end": 1275,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1277,
                "end": 1278,
                "typeName": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1278,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1286,
            "end": 1291
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1294,
      "end": 1332,
      "id": {
        "type": "Identifier",
        "start": 1299,
        "end": 1304,
        "decorators": [],
        "name": "X4_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1307,
        "end": 1331,
        "typeName": {
          "type": "Identifier",
          "start": 1307,
          "end": 1309,
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1309,
          "end": 1331,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 1310,
              "end": 1330,
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1317,
                "end": 1330,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1320,
                  "end": 1330,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1322,
                      "end": 1328,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1322,
                        "end": 1323,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1323,
                        "end": 1328,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1325,
                          "end": 1328,
                          "literal": {
                            "type": "Literal",
                            "start": 1325,
                            "end": 1328,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
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
      "start": 1359,
      "end": 1395,
      "id": {
        "type": "Identifier",
        "start": 1364,
        "end": 1369,
        "decorators": [],
        "name": "X4_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1372,
        "end": 1394,
        "typeName": {
          "type": "Identifier",
          "start": 1372,
          "end": 1374,
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1374,
          "end": 1394,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 1375,
              "end": 1393,
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1382,
                "end": 1393,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1385,
                  "end": 1393,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1387,
                      "end": 1391,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1387,
                        "end": 1388,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1388,
                        "end": 1391,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1390,
                          "end": 1391,
                          "literal": {
                            "type": "Literal",
                            "start": 1390,
                            "end": 1391,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
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
      "start": 1420,
      "end": 1461,
      "id": {
        "type": "Identifier",
        "start": 1425,
        "end": 1430,
        "decorators": [],
        "name": "X4_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1433,
        "end": 1460,
        "typeName": {
          "type": "Identifier",
          "start": 1433,
          "end": 1435,
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1435,
          "end": 1460,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 1436,
              "end": 1459,
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1443,
                "end": 1459,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1446,
                  "end": 1459,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1448,
                      "end": 1457,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1448,
                        "end": 1449,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1449,
                        "end": 1457,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1451,
                          "end": 1457
                        }
                      },
                      "accessibility": null,
                      "static": false
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
      "start": 1498,
      "end": 1649,
      "id": {
        "type": "Identifier",
        "start": 1503,
        "end": 1505,
        "decorators": [],
        "name": "X5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1505,
        "end": 1508,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1506,
            "end": 1507,
            "name": {
              "type": "Identifier",
              "start": 1506,
              "end": 1507,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1515,
        "end": 1648,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1515,
          "end": 1516,
          "typeName": {
            "type": "Identifier",
            "start": 1515,
            "end": 1516,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1525,
          "end": 1556,
          "typeName": {
            "type": "Identifier",
            "start": 1525,
            "end": 1532,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1532,
            "end": 1556,
            "params": [
              {
                "type": "TSInferType",
                "start": 1533,
                "end": 1555,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1539,
                  "end": 1555,
                  "name": {
                    "type": "Identifier",
                    "start": 1539,
                    "end": 1540,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 1549,
                    "end": 1555
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 1559,
          "end": 1572,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1560,
              "end": 1568,
              "literal": {
                "type": "Literal",
                "start": 1560,
                "end": 1568,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1570,
              "end": 1571,
              "typeName": {
                "type": "Identifier",
                "start": 1570,
                "end": 1571,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1579,
          "end": 1648,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1579,
            "end": 1580,
            "typeName": {
              "type": "Identifier",
              "start": 1579,
              "end": 1580,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1589,
            "end": 1620,
            "typeName": {
              "type": "Identifier",
              "start": 1589,
              "end": 1596,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1596,
              "end": 1620,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 1597,
                  "end": 1619,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1603,
                    "end": 1619,
                    "name": {
                      "type": "Identifier",
                      "start": 1603,
                      "end": 1604,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 1613,
                      "end": 1619
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 1623,
            "end": 1636,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 1624,
                "end": 1632,
                "literal": {
                  "type": "Literal",
                  "start": 1624,
                  "end": 1632,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1634,
                "end": 1635,
                "typeName": {
                  "type": "Identifier",
                  "start": 1634,
                  "end": 1635,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1643,
            "end": 1648
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1651,
      "end": 1687,
      "id": {
        "type": "Identifier",
        "start": 1656,
        "end": 1661,
        "decorators": [],
        "name": "X5_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1664,
        "end": 1686,
        "typeName": {
          "type": "Identifier",
          "start": 1664,
          "end": 1666,
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1666,
          "end": 1686,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1667,
              "end": 1685,
              "typeName": {
                "type": "Identifier",
                "start": 1667,
                "end": 1674,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1674,
                "end": 1685,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 1675,
                    "end": 1684,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1675,
                        "end": 1678,
                        "literal": {
                          "type": "Literal",
                          "start": 1675,
                          "end": 1678,
                          "value": "a",
                          "raw": "\"a\""
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1681,
                        "end": 1684,
                        "literal": {
                          "type": "Literal",
                          "start": 1681,
                          "end": 1684,
                          "value": "b",
                          "raw": "\"b\""
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1713,
      "end": 1745,
      "id": {
        "type": "Identifier",
        "start": 1718,
        "end": 1723,
        "decorators": [],
        "name": "X5_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1726,
        "end": 1744,
        "typeName": {
          "type": "Identifier",
          "start": 1726,
          "end": 1728,
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1728,
          "end": 1744,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1729,
              "end": 1743,
              "typeName": {
                "type": "Identifier",
                "start": 1729,
                "end": 1736,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1736,
                "end": 1743,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 1737,
                    "end": 1742,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1737,
                        "end": 1738,
                        "literal": {
                          "type": "Literal",
                          "start": 1737,
                          "end": 1738,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1741,
                        "end": 1742,
                        "literal": {
                          "type": "Literal",
                          "start": 1741,
                          "end": 1742,
                          "value": 2,
                          "raw": "2"
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1767,
      "end": 1801,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1777,
        "decorators": [],
        "name": "X5_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1780,
        "end": 1800,
        "typeName": {
          "type": "Identifier",
          "start": 1780,
          "end": 1782,
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1782,
          "end": 1800,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1783,
              "end": 1799,
              "typeName": {
                "type": "Identifier",
                "start": 1783,
                "end": 1790,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1790,
                "end": 1799,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 1791,
                    "end": 1798,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1791,
                        "end": 1793,
                        "literal": {
                          "type": "Literal",
                          "start": 1791,
                          "end": 1793,
                          "value": null,
                          "raw": "1n",
                          "bigint": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1796,
                        "end": 1798,
                        "literal": {
                          "type": "Literal",
                          "start": 1796,
                          "end": 1798,
                          "value": null,
                          "raw": "2n",
                          "bigint": "2"
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1838,
      "end": 1985,
      "id": {
        "type": "Identifier",
        "start": 1843,
        "end": 1845,
        "decorators": [],
        "name": "X6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1845,
        "end": 1848,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1846,
            "end": 1847,
            "name": {
              "type": "Identifier",
              "start": 1846,
              "end": 1847,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1855,
        "end": 1984,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1855,
          "end": 1856,
          "typeName": {
            "type": "Identifier",
            "start": 1855,
            "end": 1856,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1865,
          "end": 1894,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1867,
              "end": 1892,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1867,
                "end": 1868,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1868,
                "end": 1892,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1870,
                  "end": 1892,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1876,
                    "end": 1892,
                    "name": {
                      "type": "Identifier",
                      "start": 1876,
                      "end": 1877,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 1886,
                      "end": 1892
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 1897,
          "end": 1910,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 1898,
              "end": 1906,
              "literal": {
                "type": "Literal",
                "start": 1898,
                "end": 1906,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1908,
              "end": 1909,
              "typeName": {
                "type": "Identifier",
                "start": 1908,
                "end": 1909,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1917,
          "end": 1984,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1917,
            "end": 1918,
            "typeName": {
              "type": "Identifier",
              "start": 1917,
              "end": 1918,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 1927,
            "end": 1956,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1929,
                "end": 1954,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1929,
                  "end": 1930,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1930,
                  "end": 1954,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 1932,
                    "end": 1954,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1938,
                      "end": 1954,
                      "name": {
                        "type": "Identifier",
                        "start": 1938,
                        "end": 1939,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 1948,
                        "end": 1954
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 1959,
            "end": 1972,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 1960,
                "end": 1968,
                "literal": {
                  "type": "Literal",
                  "start": 1960,
                  "end": 1968,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1970,
                "end": 1971,
                "typeName": {
                  "type": "Identifier",
                  "start": 1970,
                  "end": 1971,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1979,
            "end": 1984
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1987,
      "end": 2015,
      "id": {
        "type": "Identifier",
        "start": 1992,
        "end": 1997,
        "decorators": [],
        "name": "X6_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2000,
        "end": 2014,
        "typeName": {
          "type": "Identifier",
          "start": 2000,
          "end": 2002,
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2002,
          "end": 2014,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2003,
              "end": 2013,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2005,
                  "end": 2011,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2005,
                    "end": 2006,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2006,
                    "end": 2011,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2008,
                      "end": 2011,
                      "literal": {
                        "type": "Literal",
                        "start": 2008,
                        "end": 2011,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2035,
      "end": 2061,
      "id": {
        "type": "Identifier",
        "start": 2040,
        "end": 2045,
        "decorators": [],
        "name": "X6_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2048,
        "end": 2060,
        "typeName": {
          "type": "Identifier",
          "start": 2048,
          "end": 2050,
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2050,
          "end": 2060,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2051,
              "end": 2059,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2053,
                  "end": 2057,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2053,
                    "end": 2054,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2054,
                    "end": 2057,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2056,
                      "end": 2057,
                      "literal": {
                        "type": "Literal",
                        "start": 2056,
                        "end": 2057,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2079,
      "end": 2110,
      "id": {
        "type": "Identifier",
        "start": 2084,
        "end": 2089,
        "decorators": [],
        "name": "X6_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2092,
        "end": 2109,
        "typeName": {
          "type": "Identifier",
          "start": 2092,
          "end": 2094,
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2094,
          "end": 2109,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2095,
              "end": 2108,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2097,
                  "end": 2106,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2097,
                    "end": 2098,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2098,
                    "end": 2106,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2100,
                      "end": 2106
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2157,
      "end": 2358,
      "id": {
        "type": "Identifier",
        "start": 2162,
        "end": 2164,
        "decorators": [],
        "name": "X7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2164,
        "end": 2167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2165,
            "end": 2166,
            "name": {
              "type": "Identifier",
              "start": 2165,
              "end": 2166,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 2174,
        "end": 2357,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2174,
          "end": 2175,
          "typeName": {
            "type": "Identifier",
            "start": 2174,
            "end": 2175,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2184,
          "end": 2240,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2186,
              "end": 2212,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2186,
                "end": 2187,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2187,
                "end": 2211,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2189,
                  "end": 2211,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2195,
                    "end": 2211,
                    "name": {
                      "type": "Identifier",
                      "start": 2195,
                      "end": 2196,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 2213,
              "end": 2238,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2213,
                "end": 2214,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2214,
                "end": 2238,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2216,
                  "end": 2238,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2222,
                    "end": 2238,
                    "name": {
                      "type": "Identifier",
                      "start": 2222,
                      "end": 2223,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2232,
                      "end": 2238
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 2243,
          "end": 2256,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 2244,
              "end": 2252,
              "literal": {
                "type": "Literal",
                "start": 2244,
                "end": 2252,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2254,
              "end": 2255,
              "typeName": {
                "type": "Identifier",
                "start": 2254,
                "end": 2255,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2263,
          "end": 2357,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2263,
            "end": 2264,
            "typeName": {
              "type": "Identifier",
              "start": 2263,
              "end": 2264,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 2273,
            "end": 2329,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2275,
                "end": 2301,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2275,
                  "end": 2276,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2276,
                  "end": 2300,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 2278,
                    "end": 2300,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 2284,
                      "end": 2300,
                      "name": {
                        "type": "Identifier",
                        "start": 2284,
                        "end": 2285,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2294,
                        "end": 2300
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2302,
                "end": 2327,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2302,
                  "end": 2303,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2303,
                  "end": 2327,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 2305,
                    "end": 2327,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 2311,
                      "end": 2327,
                      "name": {
                        "type": "Identifier",
                        "start": 2311,
                        "end": 2312,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2321,
                        "end": 2327
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 2332,
            "end": 2345,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 2333,
                "end": 2341,
                "literal": {
                  "type": "Literal",
                  "start": 2333,
                  "end": 2341,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2343,
                "end": 2344,
                "typeName": {
                  "type": "Identifier",
                  "start": 2343,
                  "end": 2344,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2352,
            "end": 2357
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2360,
      "end": 2396,
      "id": {
        "type": "Identifier",
        "start": 2365,
        "end": 2370,
        "decorators": [],
        "name": "X7_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2373,
        "end": 2395,
        "typeName": {
          "type": "Identifier",
          "start": 2373,
          "end": 2375,
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2375,
          "end": 2395,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2376,
              "end": 2394,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2378,
                  "end": 2385,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2379,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2379,
                    "end": 2384,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2381,
                      "end": 2384,
                      "literal": {
                        "type": "Literal",
                        "start": 2381,
                        "end": 2384,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2386,
                  "end": 2392,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2386,
                    "end": 2387,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2387,
                    "end": 2392,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2389,
                      "end": 2392,
                      "literal": {
                        "type": "Literal",
                        "start": 2389,
                        "end": 2392,
                        "value": "b",
                        "raw": "\"b\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2422,
      "end": 2454,
      "id": {
        "type": "Identifier",
        "start": 2427,
        "end": 2432,
        "decorators": [],
        "name": "X7_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2435,
        "end": 2453,
        "typeName": {
          "type": "Identifier",
          "start": 2435,
          "end": 2437,
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2437,
          "end": 2453,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2438,
              "end": 2452,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2440,
                  "end": 2445,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2440,
                    "end": 2441,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2441,
                    "end": 2444,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2443,
                      "end": 2444,
                      "literal": {
                        "type": "Literal",
                        "start": 2443,
                        "end": 2444,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2446,
                  "end": 2450,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2446,
                    "end": 2447,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2447,
                    "end": 2450,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2449,
                      "end": 2450,
                      "literal": {
                        "type": "Literal",
                        "start": 2449,
                        "end": 2450,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2476,
      "end": 2518,
      "id": {
        "type": "Identifier",
        "start": 2481,
        "end": 2486,
        "decorators": [],
        "name": "X7_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2489,
        "end": 2517,
        "typeName": {
          "type": "Identifier",
          "start": 2489,
          "end": 2491,
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2491,
          "end": 2517,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2492,
              "end": 2516,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2494,
                  "end": 2504,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2494,
                    "end": 2495,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2495,
                    "end": 2503,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2497,
                      "end": 2503
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2505,
                  "end": 2514,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2505,
                    "end": 2506,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2506,
                    "end": 2514,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2508,
                      "end": 2514
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2528,
      "end": 2562,
      "id": {
        "type": "Identifier",
        "start": 2533,
        "end": 2538,
        "decorators": [],
        "name": "X7_T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2541,
        "end": 2561,
        "typeName": {
          "type": "Identifier",
          "start": 2541,
          "end": 2543,
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2543,
          "end": 2561,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2544,
              "end": 2560,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2546,
                  "end": 2553,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2546,
                    "end": 2547,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2547,
                    "end": 2552,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2549,
                      "end": 2552,
                      "literal": {
                        "type": "Literal",
                        "start": 2549,
                        "end": 2552,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2554,
                  "end": 2558,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2554,
                    "end": 2555,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2555,
                    "end": 2558,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2557,
                      "end": 2558,
                      "literal": {
                        "type": "Literal",
                        "start": 2557,
                        "end": 2558,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2654,
      "end": 2825,
      "id": {
        "type": "Identifier",
        "start": 2659,
        "end": 2661,
        "decorators": [],
        "name": "X8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2661,
        "end": 2664,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2662,
            "end": 2663,
            "name": {
              "type": "Identifier",
              "start": 2662,
              "end": 2663,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 2671,
        "end": 2824,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2671,
          "end": 2672,
          "typeName": {
            "type": "Identifier",
            "start": 2671,
            "end": 2672,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2681,
          "end": 2722,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2683,
              "end": 2709,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2683,
                "end": 2684,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2684,
                "end": 2708,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2686,
                  "end": 2708,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2692,
                    "end": 2708,
                    "name": {
                      "type": "Identifier",
                      "start": 2692,
                      "end": 2693,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2702,
                      "end": 2708
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 2710,
              "end": 2720,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 2710,
                "end": 2711,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2711,
                "end": 2720,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2713,
                  "end": 2720,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2719,
                    "end": 2720,
                    "name": {
                      "type": "Identifier",
                      "start": 2719,
                      "end": 2720,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 2725,
          "end": 2738,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 2726,
              "end": 2734,
              "literal": {
                "type": "Literal",
                "start": 2726,
                "end": 2734,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2736,
              "end": 2737,
              "typeName": {
                "type": "Identifier",
                "start": 2736,
                "end": 2737,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2745,
          "end": 2824,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2745,
            "end": 2746,
            "typeName": {
              "type": "Identifier",
              "start": 2745,
              "end": 2746,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 2755,
            "end": 2796,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2757,
                "end": 2783,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2757,
                  "end": 2758,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2758,
                  "end": 2782,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 2760,
                    "end": 2782,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 2766,
                      "end": 2782,
                      "name": {
                        "type": "Identifier",
                        "start": 2766,
                        "end": 2767,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2776,
                        "end": 2782
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2784,
                "end": 2794,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2784,
                  "end": 2785,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2785,
                  "end": 2794,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 2787,
                    "end": 2794,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 2793,
                      "end": 2794,
                      "name": {
                        "type": "Identifier",
                        "start": 2793,
                        "end": 2794,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 2799,
            "end": 2812,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 2800,
                "end": 2808,
                "literal": {
                  "type": "Literal",
                  "start": 2800,
                  "end": 2808,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2810,
                "end": 2811,
                "typeName": {
                  "type": "Identifier",
                  "start": 2810,
                  "end": 2811,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2819,
            "end": 2824
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2827,
      "end": 2863,
      "id": {
        "type": "Identifier",
        "start": 2832,
        "end": 2837,
        "decorators": [],
        "name": "X8_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2840,
        "end": 2862,
        "typeName": {
          "type": "Identifier",
          "start": 2840,
          "end": 2842,
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2842,
          "end": 2862,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2843,
              "end": 2861,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2845,
                  "end": 2852,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2845,
                    "end": 2846,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2846,
                    "end": 2851,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2848,
                      "end": 2851,
                      "literal": {
                        "type": "Literal",
                        "start": 2848,
                        "end": 2851,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2853,
                  "end": 2859,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2853,
                    "end": 2854,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2854,
                    "end": 2859,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2856,
                      "end": 2859,
                      "literal": {
                        "type": "Literal",
                        "start": 2856,
                        "end": 2859,
                        "value": "b",
                        "raw": "\"b\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2889,
      "end": 2921,
      "id": {
        "type": "Identifier",
        "start": 2894,
        "end": 2899,
        "decorators": [],
        "name": "X8_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2902,
        "end": 2920,
        "typeName": {
          "type": "Identifier",
          "start": 2902,
          "end": 2904,
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2904,
          "end": 2920,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2905,
              "end": 2919,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2907,
                  "end": 2912,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2907,
                    "end": 2908,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2908,
                    "end": 2911,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2910,
                      "end": 2911,
                      "literal": {
                        "type": "Literal",
                        "start": 2910,
                        "end": 2911,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2913,
                  "end": 2917,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2913,
                    "end": 2914,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2914,
                    "end": 2917,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2916,
                      "end": 2917,
                      "literal": {
                        "type": "Literal",
                        "start": 2916,
                        "end": 2917,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2943,
      "end": 2985,
      "id": {
        "type": "Identifier",
        "start": 2948,
        "end": 2953,
        "decorators": [],
        "name": "X8_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2956,
        "end": 2984,
        "typeName": {
          "type": "Identifier",
          "start": 2956,
          "end": 2958,
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2958,
          "end": 2984,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2959,
              "end": 2983,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2961,
                  "end": 2971,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2961,
                    "end": 2962,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2962,
                    "end": 2970,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2964,
                      "end": 2970
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2972,
                  "end": 2981,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2972,
                    "end": 2973,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2973,
                    "end": 2981,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2975,
                      "end": 2981
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 2995,
      "end": 3029,
      "id": {
        "type": "Identifier",
        "start": 3000,
        "end": 3005,
        "decorators": [],
        "name": "X8_T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3008,
        "end": 3028,
        "typeName": {
          "type": "Identifier",
          "start": 3008,
          "end": 3010,
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3010,
          "end": 3028,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3011,
              "end": 3027,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3013,
                  "end": 3020,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3013,
                    "end": 3014,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3014,
                    "end": 3019,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3016,
                      "end": 3019,
                      "literal": {
                        "type": "Literal",
                        "start": 3016,
                        "end": 3019,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3021,
                  "end": 3025,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3021,
                    "end": 3022,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3022,
                    "end": 3025,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3024,
                      "end": 3025,
                      "literal": {
                        "type": "Literal",
                        "start": 3024,
                        "end": 3025,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 3120,
      "end": 3291,
      "id": {
        "type": "Identifier",
        "start": 3125,
        "end": 3127,
        "decorators": [],
        "name": "X9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3127,
        "end": 3130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3128,
            "end": 3129,
            "name": {
              "type": "Identifier",
              "start": 3128,
              "end": 3129,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 3137,
        "end": 3290,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3137,
          "end": 3138,
          "typeName": {
            "type": "Identifier",
            "start": 3137,
            "end": 3138,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 3147,
          "end": 3188,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 3149,
              "end": 3160,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3149,
                "end": 3150,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3150,
                "end": 3159,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 3152,
                  "end": 3159,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 3158,
                    "end": 3159,
                    "name": {
                      "type": "Identifier",
                      "start": 3158,
                      "end": 3159,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3161,
              "end": 3186,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3161,
                "end": 3162,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3162,
                "end": 3186,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 3164,
                  "end": 3186,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 3170,
                    "end": 3186,
                    "name": {
                      "type": "Identifier",
                      "start": 3170,
                      "end": 3171,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 3180,
                      "end": 3186
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 3191,
          "end": 3204,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 3192,
              "end": 3200,
              "literal": {
                "type": "Literal",
                "start": 3192,
                "end": 3200,
                "value": "string",
                "raw": "\"string\""
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3202,
              "end": 3203,
              "typeName": {
                "type": "Identifier",
                "start": 3202,
                "end": 3203,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 3211,
          "end": 3290,
          "checkType": {
            "type": "TSTypeReference",
            "start": 3211,
            "end": 3212,
            "typeName": {
              "type": "Identifier",
              "start": 3211,
              "end": 3212,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 3221,
            "end": 3262,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 3223,
                "end": 3234,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 3223,
                  "end": 3224,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3224,
                  "end": 3233,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 3226,
                    "end": 3233,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 3232,
                      "end": 3233,
                      "name": {
                        "type": "Identifier",
                        "start": 3232,
                        "end": 3233,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 3235,
                "end": 3260,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 3235,
                  "end": 3236,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3236,
                  "end": 3260,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 3238,
                    "end": 3260,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 3244,
                      "end": 3260,
                      "name": {
                        "type": "Identifier",
                        "start": 3244,
                        "end": 3245,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 3254,
                        "end": 3260
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 3265,
            "end": 3278,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 3266,
                "end": 3274,
                "literal": {
                  "type": "Literal",
                  "start": 3266,
                  "end": 3274,
                  "value": "number",
                  "raw": "\"number\""
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3276,
                "end": 3277,
                "typeName": {
                  "type": "Identifier",
                  "start": 3276,
                  "end": 3277,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3285,
            "end": 3290
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3293,
      "end": 3329,
      "id": {
        "type": "Identifier",
        "start": 3298,
        "end": 3303,
        "decorators": [],
        "name": "X9_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3306,
        "end": 3328,
        "typeName": {
          "type": "Identifier",
          "start": 3306,
          "end": 3308,
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3308,
          "end": 3328,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3309,
              "end": 3327,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3311,
                  "end": 3318,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3311,
                    "end": 3312,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3312,
                    "end": 3317,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3314,
                      "end": 3317,
                      "literal": {
                        "type": "Literal",
                        "start": 3314,
                        "end": 3317,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3319,
                  "end": 3325,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3319,
                    "end": 3320,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3320,
                    "end": 3325,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3322,
                      "end": 3325,
                      "literal": {
                        "type": "Literal",
                        "start": 3322,
                        "end": 3325,
                        "value": "b",
                        "raw": "\"b\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 3355,
      "end": 3387,
      "id": {
        "type": "Identifier",
        "start": 3360,
        "end": 3365,
        "decorators": [],
        "name": "X9_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3368,
        "end": 3386,
        "typeName": {
          "type": "Identifier",
          "start": 3368,
          "end": 3370,
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3370,
          "end": 3386,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3371,
              "end": 3385,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3373,
                  "end": 3378,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3373,
                    "end": 3374,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3374,
                    "end": 3377,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3376,
                      "end": 3377,
                      "literal": {
                        "type": "Literal",
                        "start": 3376,
                        "end": 3377,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3379,
                  "end": 3383,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3379,
                    "end": 3380,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3380,
                    "end": 3383,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3382,
                      "end": 3383,
                      "literal": {
                        "type": "Literal",
                        "start": 3382,
                        "end": 3383,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 3409,
      "end": 3451,
      "id": {
        "type": "Identifier",
        "start": 3414,
        "end": 3419,
        "decorators": [],
        "name": "X9_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3422,
        "end": 3450,
        "typeName": {
          "type": "Identifier",
          "start": 3422,
          "end": 3424,
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3424,
          "end": 3450,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3425,
              "end": 3449,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3427,
                  "end": 3437,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3427,
                    "end": 3428,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3428,
                    "end": 3436,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3430,
                      "end": 3436
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3438,
                  "end": 3447,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3438,
                    "end": 3439,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3439,
                    "end": 3447,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3441,
                      "end": 3447
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 3461,
      "end": 3495,
      "id": {
        "type": "Identifier",
        "start": 3466,
        "end": 3471,
        "decorators": [],
        "name": "X9_T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3474,
        "end": 3494,
        "typeName": {
          "type": "Identifier",
          "start": 3474,
          "end": 3476,
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3476,
          "end": 3494,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3477,
              "end": 3493,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3479,
                  "end": 3486,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3479,
                    "end": 3480,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3480,
                    "end": 3485,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3482,
                      "end": 3485,
                      "literal": {
                        "type": "Literal",
                        "start": 3482,
                        "end": 3485,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3487,
                  "end": 3491,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3487,
                    "end": 3488,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3488,
                    "end": 3491,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 3490,
                      "end": 3491,
                      "literal": {
                        "type": "Literal",
                        "start": 3490,
                        "end": 3491,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "start": 3557,
      "end": 3622,
      "id": {
        "type": "Identifier",
        "start": 3562,
        "end": 3565,
        "decorators": [],
        "name": "X10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3565,
        "end": 3568,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3566,
            "end": 3567,
            "name": {
              "type": "Identifier",
              "start": 3566,
              "end": 3567,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 3571,
        "end": 3621,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3571,
          "end": 3572,
          "typeName": {
            "type": "Identifier",
            "start": 3571,
            "end": 3572,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSConditionalType",
          "start": 3582,
          "end": 3612,
          "checkType": {
            "type": "TSInferType",
            "start": 3582,
            "end": 3589,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3588,
              "end": 3589,
              "name": {
                "type": "Identifier",
                "start": 3588,
                "end": 3589,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "start": 3598,
            "end": 3604
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 3607,
            "end": 3608,
            "literal": {
              "type": "Literal",
              "start": 3607,
              "end": 3608,
              "value": 1,
              "raw": "1"
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 3611,
            "end": 3612,
            "literal": {
              "type": "Literal",
              "start": 3611,
              "end": 3612,
              "value": 0,
              "raw": "0"
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 3616,
          "end": 3617,
          "literal": {
            "type": "Literal",
            "start": 3616,
            "end": 3617,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 3620,
          "end": 3621,
          "literal": {
            "type": "Literal",
            "start": 3620,
            "end": 3621,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3652,
      "end": 3699,
      "id": {
        "type": "Identifier",
        "start": 3657,
        "end": 3663,
        "decorators": [],
        "name": "X10_Y1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3663,
        "end": 3666,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3664,
            "end": 3665,
            "name": {
              "type": "Identifier",
              "start": 3664,
              "end": 3665,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSTypeReference",
        "start": 3669,
        "end": 3698,
        "typeName": {
          "type": "Identifier",
          "start": 3669,
          "end": 3672,
          "decorators": [],
          "name": "X10",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3672,
          "end": 3698,
          "params": [
            {
              "type": "TSConditionalType",
              "start": 3673,
              "end": 3697,
              "checkType": {
                "type": "TSTypeReference",
                "start": 3673,
                "end": 3674,
                "typeName": {
                  "type": "Identifier",
                  "start": 3673,
                  "end": 3674,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 3683,
                "end": 3689
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 3692,
                "end": 3693,
                "literal": {
                  "type": "Literal",
                  "start": 3692,
                  "end": 3693,
                  "value": 1,
                  "raw": "1"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 3696,
                "end": 3697,
                "literal": {
                  "type": "Literal",
                  "start": 3696,
                  "end": 3697,
                  "value": 0,
                  "raw": "0"
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
      "start": 3700,
      "end": 3732,
      "id": {
        "type": "Identifier",
        "start": 3705,
        "end": 3714,
        "decorators": [],
        "name": "X10_T1_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3717,
        "end": 3731,
        "typeName": {
          "type": "Identifier",
          "start": 3717,
          "end": 3723,
          "decorators": [],
          "name": "X10_Y1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3723,
          "end": 3731,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3724,
              "end": 3730
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3734,
      "end": 3801,
      "id": {
        "type": "Identifier",
        "start": 3739,
        "end": 3742,
        "decorators": [],
        "name": "X11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3742,
        "end": 3745,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3743,
            "end": 3744,
            "name": {
              "type": "Identifier",
              "start": 3743,
              "end": 3744,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 3748,
        "end": 3800,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3748,
          "end": 3749,
          "typeName": {
            "type": "Identifier",
            "start": 3748,
            "end": 3749,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSConditionalType",
          "start": 3759,
          "end": 3791,
          "checkType": {
            "type": "TSInferType",
            "start": 3760,
            "end": 3767,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3766,
              "end": 3767,
              "name": {
                "type": "Identifier",
                "start": 3766,
                "end": 3767,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "start": 3777,
            "end": 3783
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 3786,
            "end": 3787,
            "literal": {
              "type": "Literal",
              "start": 3786,
              "end": 3787,
              "value": 1,
              "raw": "1"
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 3790,
            "end": 3791,
            "literal": {
              "type": "Literal",
              "start": 3790,
              "end": 3791,
              "value": 0,
              "raw": "0"
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 3795,
          "end": 3796,
          "literal": {
            "type": "Literal",
            "start": 3795,
            "end": 3796,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 3799,
          "end": 3800,
          "literal": {
            "type": "Literal",
            "start": 3799,
            "end": 3800,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3831,
      "end": 3888,
      "id": {
        "type": "Identifier",
        "start": 3836,
        "end": 3839,
        "decorators": [],
        "name": "X12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3839,
        "end": 3842,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3840,
            "end": 3841,
            "name": {
              "type": "Identifier",
              "start": 3840,
              "end": 3841,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 3845,
        "end": 3887,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3845,
          "end": 3846,
          "typeName": {
            "type": "Identifier",
            "start": 3845,
            "end": 3846,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 3856,
          "end": 3878,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3862,
            "end": 3878,
            "name": {
              "type": "Identifier",
              "start": 3862,
              "end": 3863,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3872,
              "end": 3878
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 3882,
          "end": 3883,
          "literal": {
            "type": "Literal",
            "start": 3882,
            "end": 3883,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 3886,
          "end": 3887,
          "literal": {
            "type": "Literal",
            "start": 3886,
            "end": 3887,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3941,
      "end": 3996,
      "id": {
        "type": "Identifier",
        "start": 3946,
        "end": 3949,
        "decorators": [],
        "name": "X13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3949,
        "end": 3952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3950,
            "end": 3951,
            "name": {
              "type": "Identifier",
              "start": 3950,
              "end": 3951,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 3955,
        "end": 3995,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3955,
          "end": 3956,
          "typeName": {
            "type": "Identifier",
            "start": 3955,
            "end": 3956,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 3965,
          "end": 3987,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3971,
            "end": 3987,
            "name": {
              "type": "Identifier",
              "start": 3971,
              "end": 3972,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3981,
              "end": 3987
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 3990,
          "end": 3991,
          "literal": {
            "type": "Literal",
            "start": 3990,
            "end": 3991,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 3994,
          "end": 3995,
          "literal": {
            "type": "Literal",
            "start": 3994,
            "end": 3995,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4081,
      "end": 4142,
      "id": {
        "type": "Identifier",
        "start": 4086,
        "end": 4089,
        "decorators": [],
        "name": "X14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4089,
        "end": 4092,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4090,
            "end": 4091,
            "name": {
              "type": "Identifier",
              "start": 4090,
              "end": 4091,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 4095,
        "end": 4141,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4095,
          "end": 4096,
          "typeName": {
            "type": "Identifier",
            "start": 4095,
            "end": 4096,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 4105,
          "end": 4133,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSInferType",
            "start": 4111,
            "end": 4133,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 4117,
              "end": 4133,
              "name": {
                "type": "Identifier",
                "start": 4117,
                "end": 4118,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 4127,
                "end": 4133
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 4136,
          "end": 4137,
          "literal": {
            "type": "Literal",
            "start": 4136,
            "end": 4137,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 4140,
          "end": 4141,
          "literal": {
            "type": "Literal",
            "start": 4140,
            "end": 4141,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4246,
      "end": 4325,
      "id": {
        "type": "Identifier",
        "start": 4251,
        "end": 4254,
        "decorators": [],
        "name": "X15",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4254,
        "end": 4257,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4255,
            "end": 4256,
            "name": {
              "type": "Identifier",
              "start": 4255,
              "end": 4256,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 4260,
        "end": 4324,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4260,
          "end": 4261,
          "typeName": {
            "type": "Identifier",
            "start": 4260,
            "end": 4261,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 4270,
          "end": 4316,
          "key": {
            "type": "Identifier",
            "start": 4273,
            "end": 4274,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSConditionalType",
            "start": 4278,
            "end": 4309,
            "checkType": {
              "type": "TSInferType",
              "start": 4278,
              "end": 4285,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 4284,
                "end": 4285,
                "name": {
                  "type": "Identifier",
                  "start": 4284,
                  "end": 4285,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            "extendsType": {
              "type": "TSTypeOperator",
              "start": 4294,
              "end": 4301,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4300,
                "end": 4301,
                "typeName": {
                  "type": "Identifier",
                  "start": 4300,
                  "end": 4301,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 4304,
              "end": 4305,
              "literal": {
                "type": "Literal",
                "start": 4304,
                "end": 4305,
                "value": 1,
                "raw": "1"
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "start": 4308,
              "end": 4309,
              "literal": {
                "type": "Literal",
                "start": 4308,
                "end": 4309,
                "value": 0,
                "raw": "0"
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 4312,
            "end": 4313,
            "literal": {
              "type": "Literal",
              "start": 4312,
              "end": 4313,
              "value": 1,
              "raw": "1"
            }
          },
          "optional": false,
          "readonly": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 4319,
          "end": 4320,
          "literal": {
            "type": "Literal",
            "start": 4319,
            "end": 4320,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 4323,
          "end": 4324,
          "literal": {
            "type": "Literal",
            "start": 4323,
            "end": 4324,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4355,
      "end": 4426,
      "id": {
        "type": "Identifier",
        "start": 4360,
        "end": 4363,
        "decorators": [],
        "name": "X16",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4363,
        "end": 4366,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4364,
            "end": 4365,
            "name": {
              "type": "Identifier",
              "start": 4364,
              "end": 4365,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 4369,
        "end": 4425,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4369,
          "end": 4370,
          "typeName": {
            "type": "Identifier",
            "start": 4369,
            "end": 4370,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 4379,
          "end": 4417,
          "key": {
            "type": "Identifier",
            "start": 4382,
            "end": 4383,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSInferType",
            "start": 4387,
            "end": 4410,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 4393,
              "end": 4410,
              "name": {
                "type": "Identifier",
                "start": 4393,
                "end": 4394,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 4403,
                "end": 4410,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4409,
                  "end": 4410,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4409,
                    "end": 4410,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 4413,
            "end": 4414,
            "literal": {
              "type": "Literal",
              "start": 4413,
              "end": 4414,
              "value": 1,
              "raw": "1"
            }
          },
          "optional": false,
          "readonly": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 4420,
          "end": 4421,
          "literal": {
            "type": "Literal",
            "start": 4420,
            "end": 4421,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 4424,
          "end": 4425,
          "literal": {
            "type": "Literal",
            "start": 4424,
            "end": 4425,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4479,
      "end": 4563,
      "id": {
        "type": "Identifier",
        "start": 4484,
        "end": 4487,
        "decorators": [],
        "name": "X17",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4487,
        "end": 4490,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4488,
            "end": 4489,
            "name": {
              "type": "Identifier",
              "start": 4488,
              "end": 4489,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 4493,
        "end": 4562,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4493,
          "end": 4494,
          "typeName": {
            "type": "Identifier",
            "start": 4493,
            "end": 4494,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 4503,
          "end": 4554,
          "key": {
            "type": "Identifier",
            "start": 4506,
            "end": 4507,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4511,
            "end": 4518,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4517,
              "end": 4518,
              "typeName": {
                "type": "Identifier",
                "start": 4517,
                "end": 4518,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 4522,
            "end": 4547,
            "checkType": {
              "type": "TSInferType",
              "start": 4522,
              "end": 4529,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 4528,
                "end": 4529,
                "name": {
                  "type": "Identifier",
                  "start": 4528,
                  "end": 4529,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 4538,
              "end": 4539,
              "typeName": {
                "type": "Identifier",
                "start": 4538,
                "end": 4539,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 4542,
              "end": 4543,
              "literal": {
                "type": "Literal",
                "start": 4542,
                "end": 4543,
                "value": 1,
                "raw": "1"
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "start": 4546,
              "end": 4547,
              "literal": {
                "type": "Literal",
                "start": 4546,
                "end": 4547,
                "value": 0,
                "raw": "0"
              }
            }
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 4550,
            "end": 4551,
            "literal": {
              "type": "Literal",
              "start": 4550,
              "end": 4551,
              "value": 1,
              "raw": "1"
            }
          },
          "optional": false,
          "readonly": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 4557,
          "end": 4558,
          "literal": {
            "type": "Literal",
            "start": 4557,
            "end": 4558,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 4561,
          "end": 4562,
          "literal": {
            "type": "Literal",
            "start": 4561,
            "end": 4562,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4593,
      "end": 4669,
      "id": {
        "type": "Identifier",
        "start": 4598,
        "end": 4601,
        "decorators": [],
        "name": "X18",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4601,
        "end": 4604,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4602,
            "end": 4603,
            "name": {
              "type": "Identifier",
              "start": 4602,
              "end": 4603,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 4607,
        "end": 4668,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4607,
          "end": 4608,
          "typeName": {
            "type": "Identifier",
            "start": 4607,
            "end": 4608,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 4617,
          "end": 4660,
          "key": {
            "type": "Identifier",
            "start": 4620,
            "end": 4621,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4625,
            "end": 4632,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4631,
              "end": 4632,
              "typeName": {
                "type": "Identifier",
                "start": 4631,
                "end": 4632,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": {
            "type": "TSInferType",
            "start": 4636,
            "end": 4653,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 4642,
              "end": 4653,
              "name": {
                "type": "Identifier",
                "start": 4642,
                "end": 4643,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 4652,
                "end": 4653,
                "typeName": {
                  "type": "Identifier",
                  "start": 4652,
                  "end": 4653,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "start": 4656,
            "end": 4657,
            "literal": {
              "type": "Literal",
              "start": 4656,
              "end": 4657,
              "value": 1,
              "raw": "1"
            }
          },
          "optional": false,
          "readonly": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 4663,
          "end": 4664,
          "literal": {
            "type": "Literal",
            "start": 4663,
            "end": 4664,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 4667,
          "end": 4668,
          "literal": {
            "type": "Literal",
            "start": 4667,
            "end": 4668,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4723,
      "end": 4813,
      "id": {
        "type": "Identifier",
        "start": 4728,
        "end": 4731,
        "decorators": [],
        "name": "X19",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4731,
        "end": 4758,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4732,
            "end": 4757,
            "name": {
              "type": "Identifier",
              "start": 4732,
              "end": 4733,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 4742,
              "end": 4757,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4742,
                  "end": 4748
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4751,
                  "end": 4757
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
        "start": 4761,
        "end": 4812,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4761,
          "end": 4762,
          "typeName": {
            "type": "Identifier",
            "start": 4761,
            "end": 4762,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 4772,
          "end": 4794,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 4778,
            "end": 4794,
            "name": {
              "type": "Identifier",
              "start": 4778,
              "end": 4779,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4788,
              "end": 4794
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 4798,
          "end": 4804,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 4799,
              "end": 4800,
              "typeName": {
                "type": "Identifier",
                "start": 4799,
                "end": 4800,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 4802,
              "end": 4803,
              "typeName": {
                "type": "Identifier",
                "start": 4802,
                "end": 4803,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4807,
          "end": 4812
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4814,
      "end": 4837,
      "id": {
        "type": "Identifier",
        "start": 4819,
        "end": 4825,
        "decorators": [],
        "name": "X19_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4828,
        "end": 4836,
        "typeName": {
          "type": "Identifier",
          "start": 4828,
          "end": 4831,
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4831,
          "end": 4836,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4832,
              "end": 4835,
              "literal": {
                "type": "Literal",
                "start": 4832,
                "end": 4835,
                "value": "a",
                "raw": "\"a\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4847,
      "end": 4868,
      "id": {
        "type": "Identifier",
        "start": 4852,
        "end": 4858,
        "decorators": [],
        "name": "X19_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4861,
        "end": 4867,
        "typeName": {
          "type": "Identifier",
          "start": 4861,
          "end": 4864,
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4864,
          "end": 4867,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4865,
              "end": 4866,
              "literal": {
                "type": "Literal",
                "start": 4865,
                "end": 4866,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4879,
      "end": 4906,
      "id": {
        "type": "Identifier",
        "start": 4884,
        "end": 4890,
        "decorators": [],
        "name": "X19_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4893,
        "end": 4905,
        "typeName": {
          "type": "Identifier",
          "start": 4893,
          "end": 4896,
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4896,
          "end": 4905,
          "params": [
            {
              "type": "TSUnionType",
              "start": 4897,
              "end": 4904,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 4897,
                  "end": 4898,
                  "literal": {
                    "type": "Literal",
                    "start": 4897,
                    "end": 4898,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4901,
                  "end": 4904,
                  "literal": {
                    "type": "Literal",
                    "start": 4901,
                    "end": 4904,
                    "value": "a",
                    "raw": "\"a\""
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
      "start": 4918,
      "end": 5027,
      "id": {
        "type": "Identifier",
        "start": 4923,
        "end": 4926,
        "decorators": [],
        "name": "X20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4926,
        "end": 4929,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4927,
            "end": 4928,
            "name": {
              "type": "Identifier",
              "start": 4927,
              "end": 4928,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 4932,
        "end": 5026,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4932,
          "end": 4933,
          "typeName": {
            "type": "Identifier",
            "start": 4932,
            "end": 4933,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 4943,
          "end": 4965,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 4949,
            "end": 4965,
            "name": {
              "type": "Identifier",
              "start": 4949,
              "end": 4950,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4959,
              "end": 4965
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 4969,
          "end": 5018,
          "checkType": {
            "type": "TSTypeReference",
            "start": 4969,
            "end": 4970,
            "typeName": {
              "type": "Identifier",
              "start": 4969,
              "end": 4970,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSInferType",
            "start": 4980,
            "end": 4997,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 4986,
              "end": 4997,
              "name": {
                "type": "Identifier",
                "start": 4986,
                "end": 4987,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 4996,
                "end": 4997,
                "typeName": {
                  "type": "Identifier",
                  "start": 4996,
                  "end": 4997,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 5001,
            "end": 5010,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 5002,
                "end": 5003,
                "typeName": {
                  "type": "Identifier",
                  "start": 5002,
                  "end": 5003,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5005,
                "end": 5006,
                "typeName": {
                  "type": "Identifier",
                  "start": 5005,
                  "end": 5006,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 5008,
                "end": 5009,
                "typeName": {
                  "type": "Identifier",
                  "start": 5008,
                  "end": 5009,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 5013,
            "end": 5018
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5021,
          "end": 5026
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5028,
      "end": 5055,
      "id": {
        "type": "Identifier",
        "start": 5033,
        "end": 5039,
        "decorators": [],
        "name": "X20_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5042,
        "end": 5054,
        "typeName": {
          "type": "Identifier",
          "start": 5042,
          "end": 5045,
          "decorators": [],
          "name": "X20",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5045,
          "end": 5054,
          "params": [
            {
              "type": "TSUnionType",
              "start": 5046,
              "end": 5053,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5046,
                  "end": 5047,
                  "literal": {
                    "type": "Literal",
                    "start": 5046,
                    "end": 5047,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5050,
                  "end": 5053,
                  "literal": {
                    "type": "Literal",
                    "start": 5050,
                    "end": 5053,
                    "value": "a",
                    "raw": "\"a\""
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
      "start": 5070,
      "end": 5149,
      "id": {
        "type": "Identifier",
        "start": 5075,
        "end": 5078,
        "decorators": [],
        "name": "X21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5078,
        "end": 5099,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5079,
            "end": 5080,
            "name": {
              "type": "Identifier",
              "start": 5079,
              "end": 5080,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5082,
            "end": 5098,
            "name": {
              "type": "Identifier",
              "start": 5082,
              "end": 5083,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5092,
              "end": 5098
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
        "start": 5102,
        "end": 5148,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5102,
          "end": 5103,
          "typeName": {
            "type": "Identifier",
            "start": 5102,
            "end": 5103,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 5113,
          "end": 5130,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 5119,
            "end": 5130,
            "name": {
              "type": "Identifier",
              "start": 5119,
              "end": 5120,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 5129,
              "end": 5130,
              "typeName": {
                "type": "Identifier",
                "start": 5129,
                "end": 5130,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 5134,
          "end": 5140,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5135,
              "end": 5136,
              "typeName": {
                "type": "Identifier",
                "start": 5135,
                "end": 5136,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 5138,
              "end": 5139,
              "typeName": {
                "type": "Identifier",
                "start": 5138,
                "end": 5139,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5143,
          "end": 5148
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5150,
      "end": 5174,
      "id": {
        "type": "Identifier",
        "start": 5155,
        "end": 5161,
        "decorators": [],
        "name": "X21_T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5164,
        "end": 5173,
        "typeName": {
          "type": "Identifier",
          "start": 5164,
          "end": 5167,
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5167,
          "end": 5173,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 5168,
              "end": 5169,
              "literal": {
                "type": "Literal",
                "start": 5168,
                "end": 5169,
                "value": 1,
                "raw": "1"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 5171,
              "end": 5172,
              "literal": {
                "type": "Literal",
                "start": 5171,
                "end": 5172,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5185,
      "end": 5215,
      "id": {
        "type": "Identifier",
        "start": 5190,
        "end": 5196,
        "decorators": [],
        "name": "X21_T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5199,
        "end": 5214,
        "typeName": {
          "type": "Identifier",
          "start": 5199,
          "end": 5202,
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5202,
          "end": 5214,
          "params": [
            {
              "type": "TSUnionType",
              "start": 5203,
              "end": 5210,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5203,
                  "end": 5204,
                  "literal": {
                    "type": "Literal",
                    "start": 5203,
                    "end": 5204,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5207,
                  "end": 5210,
                  "literal": {
                    "type": "Literal",
                    "start": 5207,
                    "end": 5210,
                    "value": "a",
                    "raw": "\"a\""
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 5212,
              "end": 5213,
              "literal": {
                "type": "Literal",
                "start": 5212,
                "end": 5213,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5226,
      "end": 5254,
      "id": {
        "type": "Identifier",
        "start": 5231,
        "end": 5237,
        "decorators": [],
        "name": "X21_T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5240,
        "end": 5253,
        "typeName": {
          "type": "Identifier",
          "start": 5240,
          "end": 5243,
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5243,
          "end": 5253,
          "params": [
            {
              "type": "TSUnionType",
              "start": 5244,
              "end": 5249,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5244,
                  "end": 5245,
                  "literal": {
                    "type": "Literal",
                    "start": 5244,
                    "end": 5245,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5248,
                  "end": 5249,
                  "literal": {
                    "type": "Literal",
                    "start": 5248,
                    "end": 5249,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 5251,
              "end": 5252,
              "literal": {
                "type": "Literal",
                "start": 5251,
                "end": 5252,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5265,
      "end": 5297,
      "id": {
        "type": "Identifier",
        "start": 5270,
        "end": 5276,
        "decorators": [],
        "name": "X21_T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5279,
        "end": 5296,
        "typeName": {
          "type": "Identifier",
          "start": 5279,
          "end": 5282,
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5282,
          "end": 5296,
          "params": [
            {
              "type": "TSUnionType",
              "start": 5283,
              "end": 5288,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5283,
                  "end": 5284,
                  "literal": {
                    "type": "Literal",
                    "start": 5283,
                    "end": 5284,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5287,
                  "end": 5288,
                  "literal": {
                    "type": "Literal",
                    "start": 5287,
                    "end": 5288,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            {
              "type": "TSUnionType",
              "start": 5290,
              "end": 5295,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5290,
                  "end": 5291,
                  "literal": {
                    "type": "Literal",
                    "start": 5290,
                    "end": 5291,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5294,
                  "end": 5295,
                  "literal": {
                    "type": "Literal",
                    "start": 5294,
                    "end": 5295,
                    "value": 3,
                    "raw": "3"
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
      "start": 5308,
      "end": 5336,
      "id": {
        "type": "Identifier",
        "start": 5313,
        "end": 5319,
        "decorators": [],
        "name": "X21_T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5322,
        "end": 5335,
        "typeName": {
          "type": "Identifier",
          "start": 5322,
          "end": 5325,
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5325,
          "end": 5335,
          "params": [
            {
              "type": "TSUnionType",
              "start": 5326,
              "end": 5331,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5326,
                  "end": 5327,
                  "literal": {
                    "type": "Literal",
                    "start": 5326,
                    "end": 5327,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5330,
                  "end": 5331,
                  "literal": {
                    "type": "Literal",
                    "start": 5330,
                    "end": 5331,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 5333,
              "end": 5334,
              "literal": {
                "type": "Literal",
                "start": 5333,
                "end": 5334,
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5364,
      "end": 5468,
      "id": {
        "type": "Identifier",
        "start": 5369,
        "end": 5377,
        "decorators": [],
        "name": "IfEquals",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5377,
        "end": 5389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5378,
            "end": 5379,
            "name": {
              "type": "Identifier",
              "start": 5378,
              "end": 5379,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5381,
            "end": 5382,
            "name": {
              "type": "Identifier",
              "start": 5381,
              "end": 5382,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5384,
            "end": 5385,
            "name": {
              "type": "Identifier",
              "start": 5384,
              "end": 5385,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5387,
            "end": 5388,
            "name": {
              "type": "Identifier",
              "start": 5387,
              "end": 5388,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
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
        "start": 5392,
        "end": 5467,
        "checkType": {
          "type": "TSFunctionType",
          "start": 5393,
          "end": 5421,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 5393,
            "end": 5396,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 5394,
                "end": 5395,
                "name": {
                  "type": "Identifier",
                  "start": 5394,
                  "end": 5395,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            ]
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 5399,
            "end": 5421,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 5402,
              "end": 5421,
              "checkType": {
                "type": "TSTypeReference",
                "start": 5402,
                "end": 5403,
                "typeName": {
                  "type": "Identifier",
                  "start": 5402,
                  "end": 5403,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 5412,
                "end": 5413,
                "typeName": {
                  "type": "Identifier",
                  "start": 5412,
                  "end": 5413,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 5416,
                "end": 5417,
                "literal": {
                  "type": "Literal",
                  "start": 5416,
                  "end": 5417,
                  "value": 1,
                  "raw": "1"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 5420,
                "end": 5421,
                "literal": {
                  "type": "Literal",
                  "start": 5420,
                  "end": 5421,
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 5431,
          "end": 5459,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 5431,
            "end": 5434,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 5432,
                "end": 5433,
                "name": {
                  "type": "Identifier",
                  "start": 5432,
                  "end": 5433,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            ]
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 5437,
            "end": 5459,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 5440,
              "end": 5459,
              "checkType": {
                "type": "TSTypeReference",
                "start": 5440,
                "end": 5441,
                "typeName": {
                  "type": "Identifier",
                  "start": 5440,
                  "end": 5441,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 5450,
                "end": 5451,
                "typeName": {
                  "type": "Identifier",
                  "start": 5450,
                  "end": 5451,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 5454,
                "end": 5455,
                "literal": {
                  "type": "Literal",
                  "start": 5454,
                  "end": 5455,
                  "value": 1,
                  "raw": "1"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 5458,
                "end": 5459,
                "literal": {
                  "type": "Literal",
                  "start": 5458,
                  "end": 5459,
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 5462,
          "end": 5463,
          "typeName": {
            "type": "Identifier",
            "start": 5462,
            "end": 5463,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 5466,
          "end": 5467,
          "typeName": {
            "type": "Identifier",
            "start": 5466,
            "end": 5467,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5470,
      "end": 5540,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5484,
          "end": 5539,
          "id": {
            "type": "Identifier",
            "start": 5484,
            "end": 5539,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5486,
              "end": 5539,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5488,
                "end": 5539,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5488,
                  "end": 5491,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5489,
                      "end": 5490,
                      "name": {
                        "type": "Identifier",
                        "start": 5489,
                        "end": 5490,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5494,
                  "end": 5539,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 5498,
                    "end": 5538,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 5498,
                      "end": 5499,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5498,
                        "end": 5499,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "start": 5508,
                      "end": 5530,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 5514,
                        "end": 5530,
                        "name": {
                          "type": "Identifier",
                          "start": 5514,
                          "end": 5515,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSNumberKeyword",
                          "start": 5524,
                          "end": 5530
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 5533,
                      "end": 5534,
                      "literal": {
                        "type": "Literal",
                        "start": 5533,
                        "end": 5534,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 5537,
                      "end": 5538,
                      "literal": {
                        "type": "Literal",
                        "start": 5537,
                        "end": 5538,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 5541,
      "end": 5573,
      "id": {
        "type": "Identifier",
        "start": 5550,
        "end": 5552,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5555,
        "end": 5573,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 5561,
            "end": 5571,
            "argument": {
              "type": "Identifier",
              "start": 5568,
              "end": 5570,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5575,
      "end": 5615,
      "id": {
        "type": "Identifier",
        "start": 5580,
        "end": 5592,
        "decorators": [],
        "name": "ExpectNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5592,
        "end": 5610,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5593,
            "end": 5609,
            "name": {
              "type": "Identifier",
              "start": 5593,
              "end": 5594,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5603,
              "end": 5609
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
        "start": 5613,
        "end": 5614,
        "typeName": {
          "type": "Identifier",
          "start": 5613,
          "end": 5614,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5616,
      "end": 5685,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5630,
          "end": 5684,
          "id": {
            "type": "Identifier",
            "start": 5630,
            "end": 5684,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5632,
              "end": 5684,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5634,
                "end": 5684,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 5634,
                  "end": 5637,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 5635,
                      "end": 5636,
                      "name": {
                        "type": "Identifier",
                        "start": 5635,
                        "end": 5636,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5640,
                  "end": 5684,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 5644,
                    "end": 5683,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 5644,
                      "end": 5645,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5644,
                        "end": 5645,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "start": 5654,
                      "end": 5675,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5654,
                        "end": 5666,
                        "decorators": [],
                        "name": "ExpectNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 5666,
                        "end": 5675,
                        "params": [
                          {
                            "type": "TSInferType",
                            "start": 5667,
                            "end": 5674,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 5673,
                              "end": 5674,
                              "name": {
                                "type": "Identifier",
                                "start": 5673,
                                "end": 5674,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
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
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "start": 5678,
                      "end": 5679,
                      "literal": {
                        "type": "Literal",
                        "start": 5678,
                        "end": 5679,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "start": 5682,
                      "end": 5683,
                      "literal": {
                        "type": "Literal",
                        "start": 5682,
                        "end": 5683,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 5686,
      "end": 5718,
      "id": {
        "type": "Identifier",
        "start": 5695,
        "end": 5697,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5700,
        "end": 5718,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 5706,
            "end": 5716,
            "argument": {
              "type": "Identifier",
              "start": 5713,
              "end": 5715,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
