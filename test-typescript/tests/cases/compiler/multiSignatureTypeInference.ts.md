__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2371,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 32,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 32,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 25,
              "end": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 41,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 35,
          "end": 41
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 43,
      "end": 99,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 75,
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 75,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 69,
              "end": 75
            }
          }
        },
        {
          "type": "Identifier",
          "start": 77,
          "end": 89,
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 89,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 98,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 92,
          "end": 98
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 100,
      "end": 149,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 120,
          "end": 137,
          "argument": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 137,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 129,
              "end": 137,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 129,
                "end": 135
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 138,
        "end": 148,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 140,
          "end": 148,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 140,
            "end": 146
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 151,
      "end": 194,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 170,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 183,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 183,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 176,
              "end": 183
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 184,
        "end": 193,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 186,
          "end": 193
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 196,
      "end": 226,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 215,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 217,
        "end": 225,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 219,
          "end": 225
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 228,
      "end": 385,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 242,
        "decorators": [],
        "name": "AllParams",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 252,
        "end": 384,
        "checkType": {
          "type": "TSTypeReference",
          "start": 252,
          "end": 253,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 262,
          "end": 356,
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 264,
              "end": 286,
              "params": [
                {
                  "type": "RestElement",
                  "start": 265,
                  "end": 279,
                  "argument": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 271,
                      "end": 279,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 277,
                        "end": 279,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 279,
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 280,
                "end": 285,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 282,
                  "end": 285
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 287,
              "end": 309,
              "params": [
                {
                  "type": "RestElement",
                  "start": 288,
                  "end": 302,
                  "argument": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 292,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 294,
                      "end": 302,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 300,
                        "end": 302,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 302,
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 303,
                "end": 308,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 305,
                  "end": 308
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 310,
              "end": 332,
              "params": [
                {
                  "type": "RestElement",
                  "start": 311,
                  "end": 325,
                  "argument": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 317,
                      "end": 325,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 323,
                        "end": 325,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 325,
                          "decorators": [],
                          "name": "A3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 326,
                "end": 331,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 328,
                  "end": 331
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 333,
              "end": 354,
              "params": [
                {
                  "type": "RestElement",
                  "start": 334,
                  "end": 348,
                  "argument": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 348,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 340,
                      "end": 348,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 346,
                        "end": 348,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 348,
                          "decorators": [],
                          "name": "A4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 349,
                "end": 354,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 351,
                  "end": 354
                }
              },
              "typeParameters": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 379,
          "end": 384
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 359,
          "end": 376,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 359,
              "end": 361,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 359,
                "end": 361,
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 364,
              "end": 366,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 364,
                "end": 366,
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 369,
              "end": 371,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 369,
                "end": 371,
                "decorators": [],
                "name": "A3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 374,
              "end": 376,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 376,
                "decorators": [],
                "name": "A4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 242,
        "end": 245,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 243,
            "end": 244,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
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
      "start": 387,
      "end": 553,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 392,
        "end": 402,
        "decorators": [],
        "name": "AllReturns",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 412,
        "end": 552,
        "checkType": {
          "type": "TSTypeReference",
          "start": 412,
          "end": 413,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 422,
          "end": 524,
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 424,
              "end": 448,
              "params": [
                {
                  "type": "RestElement",
                  "start": 425,
                  "end": 436,
                  "argument": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 431,
                      "end": 436,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 431,
                        "end": 434
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 437,
                "end": 447,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 439,
                  "end": 447,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 445,
                    "end": 447,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 447,
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 449,
              "end": 473,
              "params": [
                {
                  "type": "RestElement",
                  "start": 450,
                  "end": 461,
                  "argument": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 454,
                    "end": 461,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 456,
                      "end": 461,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 456,
                        "end": 459
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 462,
                "end": 472,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 464,
                  "end": 472,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 470,
                    "end": 472,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 472,
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 474,
              "end": 498,
              "params": [
                {
                  "type": "RestElement",
                  "start": 475,
                  "end": 486,
                  "argument": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 479,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 481,
                      "end": 486,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 481,
                        "end": 484
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 487,
                "end": 497,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 489,
                  "end": 497,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 495,
                    "end": 497,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 497,
                      "decorators": [],
                      "name": "R3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 499,
              "end": 522,
              "params": [
                {
                  "type": "RestElement",
                  "start": 500,
                  "end": 511,
                  "argument": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 504,
                    "end": 511,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 506,
                      "end": 511,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 506,
                        "end": 509
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 512,
                "end": 522,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 514,
                  "end": 522,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 520,
                    "end": 522,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 522,
                      "decorators": [],
                      "name": "R4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 547,
          "end": 552
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 527,
          "end": 544,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 527,
              "end": 529,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 527,
                "end": 529,
                "decorators": [],
                "name": "R1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 532,
              "end": 534,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 534,
                "decorators": [],
                "name": "R2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 537,
              "end": 539,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 537,
                "end": 539,
                "decorators": [],
                "name": "R3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 542,
              "end": 544,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 542,
                "end": 544,
                "decorators": [],
                "name": "R4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 402,
        "end": 405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 404,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
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
      "start": 555,
      "end": 591,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 567,
        "decorators": [],
        "name": "Params1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 570,
        "end": 590,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 579,
          "end": 590,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 580,
              "end": 589,
              "exprName": {
                "type": "Identifier",
                "start": 587,
                "end": 589,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 570,
          "end": 579,
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 653,
      "end": 689,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 665,
        "decorators": [],
        "name": "Params2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 668,
        "end": 688,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 677,
          "end": 688,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 678,
              "end": 687,
              "exprName": {
                "type": "Identifier",
                "start": 685,
                "end": 687,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 668,
          "end": 677,
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 709,
      "end": 745,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 714,
        "end": 721,
        "decorators": [],
        "name": "Params3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 724,
        "end": 744,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 733,
          "end": 744,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 734,
              "end": 743,
              "exprName": {
                "type": "Identifier",
                "start": 741,
                "end": 743,
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 724,
          "end": 733,
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 754,
      "end": 791,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 759,
        "end": 767,
        "decorators": [],
        "name": "Returns1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 770,
        "end": 791,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 780,
          "end": 791,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 781,
              "end": 790,
              "exprName": {
                "type": "Identifier",
                "start": 788,
                "end": 790,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 770,
          "end": 780,
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 823,
      "end": 861,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 828,
        "end": 836,
        "decorators": [],
        "name": "Returns2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 839,
        "end": 860,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 849,
          "end": 860,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 850,
              "end": 859,
              "exprName": {
                "type": "Identifier",
                "start": 857,
                "end": 859,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 839,
          "end": 849,
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 874,
      "end": 912,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 879,
        "end": 887,
        "decorators": [],
        "name": "Returns3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 890,
        "end": 911,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 900,
          "end": 911,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 901,
              "end": 910,
              "exprName": {
                "type": "Identifier",
                "start": 908,
                "end": 910,
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 890,
          "end": 900,
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 947,
      "end": 1125,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 952,
        "end": 969,
        "decorators": [],
        "name": "InferTwoOverloads",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 995,
        "end": 1124,
        "checkType": {
          "type": "TSTypeReference",
          "start": 995,
          "end": 996,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 995,
            "end": 996,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1005,
          "end": 1065,
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 1007,
              "end": 1035,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1008,
                  "end": 1023,
                  "argument": {
                    "type": "Identifier",
                    "start": 1011,
                    "end": 1013,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1013,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 1015,
                      "end": 1023,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1021,
                        "end": 1023,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1021,
                          "end": 1023,
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1024,
                "end": 1034,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1026,
                  "end": 1034,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1032,
                    "end": 1034,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1032,
                      "end": 1034,
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 1036,
              "end": 1063,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1037,
                  "end": 1052,
                  "argument": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1042,
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1042,
                    "end": 1052,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 1044,
                      "end": 1052,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1050,
                        "end": 1052,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1050,
                          "end": 1052,
                          "decorators": [],
                          "name": "A0",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1053,
                "end": 1063,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1055,
                  "end": 1063,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1061,
                    "end": 1063,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1063,
                      "decorators": [],
                      "name": "R0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1119,
          "end": 1124
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 1073,
          "end": 1111,
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "start": 1074,
              "end": 1091,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1075,
                  "end": 1084,
                  "argument": {
                    "type": "Identifier",
                    "start": 1078,
                    "end": 1080,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1080,
                    "end": 1084,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1082,
                      "end": 1084,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1082,
                        "end": 1084,
                        "decorators": [],
                        "name": "A1",
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
                "start": 1086,
                "end": 1091,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1089,
                  "end": 1091,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1091,
                    "decorators": [],
                    "name": "R1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSFunctionType",
              "start": 1093,
              "end": 1110,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1094,
                  "end": 1103,
                  "argument": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1099,
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1099,
                    "end": 1103,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1101,
                      "end": 1103,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1103,
                        "decorators": [],
                        "name": "A0",
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
                "start": 1105,
                "end": 1110,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1108,
                  "end": 1110,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1110,
                    "decorators": [],
                    "name": "R0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 969,
        "end": 989,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 970,
            "end": 988,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 980,
              "end": 988,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 980,
                "end": 988,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 970,
              "end": 971,
              "decorators": [],
              "name": "F",
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
      "start": 1127,
      "end": 1203,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1132,
        "end": 1140,
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1143,
        "end": 1202,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1160,
          "end": 1202,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 1161,
              "end": 1201,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1162,
                  "end": 1183,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1163,
                      "end": 1172,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1164,
                        "end": 1172,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1166,
                          "end": 1172
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1174,
                    "end": 1183,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1177,
                      "end": 1183
                    }
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSFunctionType",
                  "start": 1188,
                  "end": 1200,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1191,
                    "end": 1200,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1194,
                      "end": 1200
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1143,
          "end": 1160,
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1251,
      "end": 1318,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1272,
        "decorators": [],
        "name": "JustOneSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1275,
        "end": 1317,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1292,
          "end": 1317,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1294,
              "end": 1315,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1304,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1296,
                    "end": 1304,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1298,
                      "end": 1304
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1306,
                "end": 1315,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1309,
                  "end": 1315
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1275,
          "end": 1292,
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1371,
      "end": 1434,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1376,
        "end": 1397,
        "decorators": [],
        "name": "JustTheOtherSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1400,
        "end": 1433,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1417,
          "end": 1433,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1419,
              "end": 1431,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1422,
                "end": 1431,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1425,
                  "end": 1431
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1400,
          "end": 1417,
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1491,
      "end": 1770,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1496,
        "end": 1505,
        "decorators": [],
        "name": "Overloads",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1515,
        "end": 1769,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1515,
          "end": 1516,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1515,
            "end": 1516,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1525,
          "end": 1615,
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 1537,
              "end": 1566,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1538,
                  "end": 1555,
                  "argument": {
                    "type": "Identifier",
                    "start": 1541,
                    "end": 1545,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1545,
                    "end": 1555,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 1547,
                      "end": 1555,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1553,
                        "end": 1555,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1553,
                          "end": 1555,
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1556,
                "end": 1566,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1558,
                  "end": 1566,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1564,
                    "end": 1566,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1564,
                      "end": 1566,
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 1577,
              "end": 1607,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1578,
                  "end": 1595,
                  "argument": {
                    "type": "Identifier",
                    "start": 1581,
                    "end": 1585,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1585,
                    "end": 1595,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 1587,
                      "end": 1595,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1593,
                        "end": 1595,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1593,
                          "end": 1595,
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1596,
                "end": 1606,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1598,
                  "end": 1606,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1604,
                    "end": 1606,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1604,
                      "end": 1606,
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1665,
          "end": 1769,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1665,
            "end": 1666,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1665,
              "end": 1666,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 1675,
            "end": 1725,
            "members": [
              {
                "type": "TSCallSignatureDeclaration",
                "start": 1687,
                "end": 1717,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 1688,
                    "end": 1705,
                    "argument": {
                      "type": "Identifier",
                      "start": 1691,
                      "end": 1695,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1695,
                      "end": 1705,
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "start": 1697,
                        "end": 1705,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 1703,
                          "end": 1705,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 1703,
                            "end": 1705,
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1706,
                  "end": 1716,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 1708,
                    "end": 1716,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 1714,
                      "end": 1716,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1714,
                        "end": 1716,
                        "decorators": [],
                        "name": "R1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  }
                },
                "typeParameters": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1764,
            "end": 1769
          },
          "trueType": {
            "type": "TSTypeLiteral",
            "start": 1728,
            "end": 1757,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1729,
                "end": 1737,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1733,
                  "decorators": [],
                  "name": "rule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1733,
                  "end": 1736,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1735,
                    "end": 1736,
                    "literal": {
                      "type": "Literal",
                      "start": 1735,
                      "end": 1736,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1738,
                "end": 1756,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1746,
                  "decorators": [],
                  "name": "variants",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1746,
                  "end": 1756,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 1748,
                    "end": 1756,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 1749,
                        "end": 1751,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1749,
                          "end": 1751,
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1753,
                        "end": 1755,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1753,
                          "end": 1755,
                          "decorators": [],
                          "name": "R1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 1618,
          "end": 1658,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1619,
              "end": 1627,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1619,
                "end": 1623,
                "decorators": [],
                "name": "rule",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1623,
                "end": 1626,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1625,
                  "end": 1626,
                  "literal": {
                    "type": "Literal",
                    "start": 1625,
                    "end": 1626,
                    "raw": "2",
                    "value": 2
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 1628,
              "end": 1657,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1628,
                "end": 1636,
                "decorators": [],
                "name": "variants",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1636,
                "end": 1657,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 1638,
                  "end": 1657,
                  "types": [
                    {
                      "type": "TSTupleType",
                      "start": 1638,
                      "end": 1646,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 1639,
                          "end": 1641,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1639,
                            "end": 1641,
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1643,
                          "end": 1645,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1643,
                            "end": 1645,
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    {
                      "type": "TSTupleType",
                      "start": 1649,
                      "end": 1657,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 1650,
                          "end": 1652,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1650,
                            "end": 1652,
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1654,
                          "end": 1656,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1654,
                            "end": 1656,
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          ]
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1506,
              "end": 1507,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1772,
      "end": 1825,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1786,
          "end": 1824,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1786,
            "end": 1824,
            "decorators": [],
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1789,
              "end": 1824,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1791,
                "end": 1824,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1800,
                  "end": 1824,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1801,
                      "end": 1823,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1802,
                          "end": 1811,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1803,
                            "end": 1811,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1805,
                              "end": 1811
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1813,
                        "end": 1823,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1816,
                          "end": 1823
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1791,
                  "end": 1800,
                  "decorators": [],
                  "name": "Overloads",
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
      "type": "VariableDeclaration",
      "start": 1872,
      "end": 1926,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1886,
          "end": 1925,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1886,
            "end": 1925,
            "decorators": [],
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1889,
              "end": 1925,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1891,
                "end": 1925,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1900,
                  "end": 1925,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1901,
                      "end": 1924,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 1902,
                          "end": 1908,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1904,
                            "end": 1907,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 1906,
                              "end": 1907,
                              "literal": {
                                "type": "Literal",
                                "start": 1906,
                                "end": 1907,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          },
                          "typeParameters": null
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 1909,
                          "end": 1923,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1910,
                              "end": 1919,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1911,
                                "end": 1919,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1913,
                                  "end": 1919
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1920,
                            "end": 1923,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 1922,
                              "end": 1923,
                              "literal": {
                                "type": "Literal",
                                "start": 1922,
                                "end": 1923,
                                "raw": "2",
                                "value": 2
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1891,
                  "end": 1900,
                  "decorators": [],
                  "name": "Overloads",
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
      "type": "VariableDeclaration",
      "start": 1977,
      "end": 2021,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1991,
          "end": 2020,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1991,
            "end": 2020,
            "decorators": [],
            "name": "ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1994,
              "end": 2020,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1996,
                "end": 2020,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2005,
                  "end": 2020,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 2006,
                      "end": 2019,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2009,
                        "end": 2019,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2012,
                          "end": 2019
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1996,
                  "end": 2005,
                  "decorators": [],
                  "name": "Overloads",
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
      "type": "VariableDeclaration",
      "start": 2063,
      "end": 2125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2077,
          "end": 2124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2077,
            "end": 2124,
            "decorators": [],
            "name": "ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2080,
              "end": 2124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2082,
                "end": 2124,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2091,
                  "end": 2124,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 2092,
                      "end": 2123,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 2093,
                          "end": 2111,
                          "argument": {
                            "type": "Identifier",
                            "start": 2096,
                            "end": 2100,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2100,
                            "end": 2111,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 2102,
                              "end": 2111,
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 2102,
                                "end": 2109
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2113,
                        "end": 2123,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2116,
                          "end": 2123
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2082,
                  "end": 2091,
                  "decorators": [],
                  "name": "Overloads",
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
      "type": "VariableDeclaration",
      "start": 2174,
      "end": 2228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2188,
          "end": 2227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2188,
            "end": 2227,
            "decorators": [],
            "name": "ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2191,
              "end": 2227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2193,
                "end": 2227,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2202,
                  "end": 2227,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 2203,
                      "end": 2226,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2204,
                          "end": 2214,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2205,
                            "end": 2214,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 2207,
                              "end": 2214
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2216,
                        "end": 2226,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2219,
                          "end": 2226
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2193,
                  "end": 2202,
                  "decorators": [],
                  "name": "Overloads",
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
      "type": "VariableDeclaration",
      "start": 2277,
      "end": 2327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2291,
          "end": 2326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2291,
            "end": 2326,
            "decorators": [],
            "name": "ok6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2294,
              "end": 2326,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2296,
                "end": 2326,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2305,
                  "end": 2326,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 2306,
                      "end": 2325,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2307,
                          "end": 2313,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2308,
                            "end": 2313,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2310,
                              "end": 2313
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2315,
                        "end": 2325,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2318,
                          "end": 2325
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2296,
                  "end": 2305,
                  "decorators": [],
                  "name": "Overloads",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
