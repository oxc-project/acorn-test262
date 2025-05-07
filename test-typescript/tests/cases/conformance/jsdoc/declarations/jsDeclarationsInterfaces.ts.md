__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 168,
  "end": 1979,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 168,
      "end": 189,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 175,
        "end": 189,
        "body": {
          "type": "TSInterfaceBody",
          "start": 187,
          "end": 189,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 230,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 198,
        "end": 230,
        "body": {
          "type": "TSInterfaceBody",
          "start": 210,
          "end": 230,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 216,
              "end": 228,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 216,
                "end": 219,
                "decorators": [],
                "name": "cat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 219,
                "end": 227,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 221,
                  "end": 227
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 232,
      "end": 662,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 239,
        "end": 662,
        "body": {
          "type": "TSInterfaceBody",
          "start": 257,
          "end": 662,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 263,
              "end": 276,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 268,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 268,
                "end": 275,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 270,
                  "end": 275,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 270,
                      "end": 271,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 271,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 274,
                      "end": 275,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 281,
              "end": 299,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 281,
                "end": 294,
                "decorators": [],
                "name": "optionalField",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 295,
                "end": 298,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 297,
                  "end": 298,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 304,
              "end": 334,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 313,
                "end": 326,
                "decorators": [],
                "name": "readonlyField",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 326,
                "end": 333,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 328,
                  "end": 333,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 329,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 332,
                      "end": 333,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 339,
              "end": 374,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 348,
                "end": 369,
                "decorators": [],
                "name": "readonlyOptionalField",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 370,
                "end": 373,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 372,
                  "end": 373,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 373,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 379,
              "end": 390,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 381,
                "end": 389,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 383,
                  "end": 389
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 395,
              "end": 405,
              "params": [
                {
                  "type": "Identifier",
                  "start": 396,
                  "end": 400,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 397,
                    "end": 400,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 399,
                      "end": 400,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 401,
                "end": 404,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 403,
                  "end": 404,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSCallSignatureDeclaration",
              "start": 410,
              "end": 427,
              "params": [
                {
                  "type": "Identifier",
                  "start": 414,
                  "end": 418,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 415,
                    "end": 418,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 417,
                      "end": 418,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 418,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 419,
                "end": 426,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 421,
                  "end": 426,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 421,
                      "end": 422,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 422,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 425,
                      "end": 426,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 425,
                        "end": 426,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 410,
                "end": 413,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 411,
                    "end": 412,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 412,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 433,
              "end": 448,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 439,
                "end": 447,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 441,
                  "end": 447
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 453,
              "end": 467,
              "params": [
                {
                  "type": "Identifier",
                  "start": 458,
                  "end": 462,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 462,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 461,
                      "end": 462,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 462,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 463,
                "end": 466,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 465,
                  "end": 466,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 466,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 472,
              "end": 493,
              "params": [
                {
                  "type": "Identifier",
                  "start": 480,
                  "end": 484,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 481,
                    "end": 484,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 483,
                      "end": 484,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 485,
                "end": 492,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 487,
                  "end": 492,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 487,
                      "end": 488,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 488,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 491,
                      "end": 492,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 476,
                "end": 479,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 477,
                    "end": 478,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 478,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 499,
              "end": 528,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 499,
                "end": 505,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 519,
                "end": 527,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 521,
                  "end": 527
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 505,
                "end": 517,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 506,
                    "end": 516,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSNumberKeyword",
                      "start": 510,
                      "end": 516
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 507,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 533,
              "end": 565,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 533,
                "end": 539,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 543,
                  "end": 551,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 544,
                    "end": 551,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 546,
                      "end": 551,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 546,
                          "end": 547,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 546,
                            "end": 547,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 550,
                          "end": 551,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 551,
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 552,
                "end": 564,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 554,
                  "end": 564,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 554,
                      "end": 555,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 555,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 558,
                      "end": 564
                    }
                  ]
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 539,
                "end": 542,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 540,
                    "end": 541,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 541,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 570,
              "end": 597,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 570,
                "end": 576,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 577,
                  "end": 587,
                  "decorators": [],
                  "name": "a",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 579,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 581,
                      "end": 587
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 588,
                "end": 596,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 590,
                  "end": 596
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 602,
              "end": 633,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 602,
                "end": 608,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 609,
                  "end": 623,
                  "argument": {
                    "type": "Identifier",
                    "start": 612,
                    "end": 616,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 616,
                    "end": 623,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 618,
                      "end": 623,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      }
                    }
                  },
                  "value": null
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 624,
                "end": 632,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 626,
                  "end": 632
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 639,
              "end": 660,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 639,
                "end": 648,
                "decorators": [],
                "name": "optMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": true,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 651,
                "end": 659,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 653,
                  "end": 659
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
          "start": 249,
          "end": 250,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 250,
          "end": 256,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 251,
              "end": 252,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 254,
              "end": 255,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 664,
      "end": 678,
      "body": {
        "type": "TSInterfaceBody",
        "start": 676,
        "end": 678,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 675,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 680,
      "end": 693,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 689,
          "end": 690,
          "exported": {
            "type": "Identifier",
            "start": 689,
            "end": 690,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 689,
            "end": 690,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 695,
      "end": 710,
      "body": {
        "type": "TSInterfaceBody",
        "start": 708,
        "end": 710,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 707,
        "decorators": [],
        "name": "HH",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 712,
      "end": 731,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 721,
          "end": 728,
          "exported": {
            "type": "Identifier",
            "start": 727,
            "end": 728,
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 721,
            "end": 723,
            "decorators": [],
            "name": "HH",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 733,
      "end": 754,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 740,
        "end": 754,
        "body": {
          "type": "TSInterfaceBody",
          "start": 752,
          "end": 754,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 750,
          "end": 751,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 755,
      "end": 774,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 764,
          "end": 771,
          "exported": {
            "type": "Identifier",
            "start": 769,
            "end": 771,
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 764,
            "end": 765,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 776,
      "end": 795,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 785,
          "end": 792,
          "exported": {
            "type": "Identifier",
            "start": 790,
            "end": 792,
            "decorators": [],
            "name": "JJ",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 785,
            "end": 786,
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 796,
      "end": 817,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 803,
        "end": 817,
        "body": {
          "type": "TSInterfaceBody",
          "start": 815,
          "end": 817,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 813,
          "end": 814,
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 819,
      "end": 868,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 826,
        "end": 868,
        "body": {
          "type": "TSInterfaceBody",
          "start": 850,
          "end": 868,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 856,
              "end": 866,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 856,
                "end": 857,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 857,
                "end": 865,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 859,
                  "end": 865
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 846,
            "end": 847,
            "expression": {
              "type": "Identifier",
              "start": 846,
              "end": 847,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 848,
            "end": 849,
            "expression": {
              "type": "Identifier",
              "start": 848,
              "end": 849,
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 836,
          "end": 837,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 870,
      "end": 917,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 877,
        "end": 917,
        "body": {
          "type": "TSInterfaceBody",
          "start": 899,
          "end": 917,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 905,
              "end": 915,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 905,
                "end": 906,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 906,
                "end": 914,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 908,
                  "end": 914
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 897,
            "end": 898,
            "expression": {
              "type": "Identifier",
              "start": 897,
              "end": 898,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 887,
          "end": 888,
          "decorators": [],
          "name": "L",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 919,
      "end": 958,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 926,
        "end": 958,
        "body": {
          "type": "TSInterfaceBody",
          "start": 941,
          "end": 958,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 947,
              "end": 956,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 947,
                "end": 952,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 952,
                "end": 955,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 954,
                  "end": 955,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 954,
                    "end": 955,
                    "decorators": [],
                    "name": "T",
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
          "start": 936,
          "end": 937,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 937,
          "end": 940,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 938,
              "end": 939,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 938,
                "end": 939,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 960,
      "end": 1012,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 967,
        "end": 1012,
        "body": {
          "type": "TSInterfaceBody",
          "start": 995,
          "end": 1012,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 1001,
              "end": 1010,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1001,
                "end": 1006,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1006,
                "end": 1009,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1008,
                  "end": 1009,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1008,
                    "end": 1009,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
            "start": 990,
            "end": 994,
            "expression": {
              "type": "Identifier",
              "start": 990,
              "end": 991,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 991,
              "end": 994,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 992,
                  "end": 993,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 993,
                    "decorators": [],
                    "name": "U",
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
          "start": 977,
          "end": 978,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 978,
          "end": 981,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 979,
              "end": 980,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 979,
                "end": 980,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1014,
      "end": 1063,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1021,
        "end": 1063,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1033,
          "end": 1063,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1039,
              "end": 1061,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1040,
                  "end": 1051,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1043,
                    "end": 1051,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1045,
                      "end": 1051
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1052,
                "end": 1060,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1054,
                  "end": 1060
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1031,
          "end": 1032,
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1065,
      "end": 1096,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1072,
        "end": 1096,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1094,
          "end": 1096,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1092,
            "end": 1093,
            "expression": {
              "type": "Identifier",
              "start": 1092,
              "end": 1093,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1082,
          "end": 1083,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1098,
      "end": 1155,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1105,
        "end": 1155,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1127,
          "end": 1155,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1133,
              "end": 1153,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1145,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1137,
                    "end": 1145,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1139,
                      "end": 1145
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1146,
                "end": 1152,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1148,
                  "end": 1152,
                  "literal": {
                    "type": "Literal",
                    "start": 1148,
                    "end": 1152,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
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
            "start": 1125,
            "end": 1126,
            "expression": {
              "type": "Identifier",
              "start": 1125,
              "end": 1126,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1115,
          "end": 1116,
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1157,
      "end": 1214,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1164,
        "end": 1214,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1186,
          "end": 1214,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1192,
              "end": 1212,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1193,
                  "end": 1204,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1196,
                    "end": 1204,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1198,
                      "end": 1204
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1205,
                "end": 1211,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1207,
                  "end": 1211,
                  "literal": {
                    "type": "Literal",
                    "start": 1207,
                    "end": 1211,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
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
            "start": 1184,
            "end": 1185,
            "expression": {
              "type": "Identifier",
              "start": 1184,
              "end": 1185,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1174,
          "end": 1175,
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1216,
      "end": 1299,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1223,
        "end": 1299,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1245,
          "end": 1299,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1251,
              "end": 1271,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1252,
                  "end": 1263,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1255,
                    "end": 1263,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1257,
                      "end": 1263
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1264,
                "end": 1270,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1266,
                  "end": 1270,
                  "literal": {
                    "type": "Literal",
                    "start": 1266,
                    "end": 1270,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "start": 1276,
              "end": 1297,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1288,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1280,
                    "end": 1288,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1282,
                      "end": 1288
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1289,
                "end": 1296,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1291,
                  "end": 1296
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1243,
            "end": 1244,
            "expression": {
              "type": "Identifier",
              "start": 1243,
              "end": 1244,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1233,
          "end": 1234,
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1301,
      "end": 1350,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1308,
        "end": 1350,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1320,
          "end": 1350,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1326,
              "end": 1348,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1327,
                  "end": 1338,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1330,
                    "end": 1338,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1332,
                      "end": 1338
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1339,
                "end": 1347,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1341,
                  "end": 1347
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1318,
          "end": 1319,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1352,
      "end": 1383,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1359,
        "end": 1383,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1381,
          "end": 1383,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1379,
            "end": 1380,
            "expression": {
              "type": "Identifier",
              "start": 1379,
              "end": 1380,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1369,
          "end": 1370,
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1386,
      "end": 1445,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1393,
        "end": 1445,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1415,
          "end": 1445,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1421,
              "end": 1443,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1422,
                  "end": 1433,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1425,
                    "end": 1433,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1427,
                      "end": 1433
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1434,
                "end": 1442,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1436,
                  "end": 1442
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1413,
            "end": 1414,
            "expression": {
              "type": "Identifier",
              "start": 1413,
              "end": 1414,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1403,
          "end": 1404,
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1447,
      "end": 1504,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1454,
        "end": 1504,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1476,
          "end": 1504,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1482,
              "end": 1502,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1483,
                  "end": 1494,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1486,
                    "end": 1494,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1488,
                      "end": 1494
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1495,
                "end": 1501,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1497,
                  "end": 1501,
                  "literal": {
                    "type": "Literal",
                    "start": 1497,
                    "end": 1501,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
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
            "start": 1474,
            "end": 1475,
            "expression": {
              "type": "Identifier",
              "start": 1474,
              "end": 1475,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1464,
          "end": 1465,
          "decorators": [],
          "name": "W",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1506,
      "end": 1590,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1513,
        "end": 1590,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1535,
          "end": 1590,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1541,
              "end": 1563,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1542,
                  "end": 1553,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1545,
                    "end": 1553,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1547,
                      "end": 1553
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1554,
                "end": 1562,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1556,
                  "end": 1562
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "start": 1568,
              "end": 1588,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1569,
                  "end": 1580,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1572,
                    "end": 1580,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1574,
                      "end": 1580
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1581,
                "end": 1587,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 1583,
                  "end": 1587,
                  "literal": {
                    "type": "Literal",
                    "start": 1583,
                    "end": 1587,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
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
            "start": 1533,
            "end": 1534,
            "expression": {
              "type": "Identifier",
              "start": 1533,
              "end": 1534,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1523,
          "end": 1524,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1592,
      "end": 1689,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1599,
        "end": 1689,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1611,
          "end": 1689,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1617,
              "end": 1644,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1618,
                  "end": 1629,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1621,
                    "end": 1629,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1623,
                      "end": 1629
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1630,
                "end": 1643,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1632,
                  "end": 1643,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1633,
                      "end": 1642,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1633,
                        "end": 1634,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1634,
                        "end": 1642,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1636,
                          "end": 1642
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "start": 1649,
              "end": 1687,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1650,
                  "end": 1661,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1653,
                    "end": 1661,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1655,
                      "end": 1661
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1662,
                "end": 1686,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1664,
                  "end": 1686,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1665,
                      "end": 1675,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1665,
                        "end": 1666,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1666,
                        "end": 1674,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1668,
                          "end": 1674
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1676,
                      "end": 1685,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1676,
                        "end": 1677,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1677,
                        "end": 1685,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1679,
                          "end": 1685
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1609,
          "end": 1610,
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1691,
      "end": 1722,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1698,
        "end": 1722,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1720,
          "end": 1722,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1718,
            "end": 1719,
            "expression": {
              "type": "Identifier",
              "start": 1718,
              "end": 1719,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1708,
          "end": 1709,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1724,
      "end": 1800,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1731,
        "end": 1800,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1754,
          "end": 1800,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1760,
              "end": 1798,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1761,
                  "end": 1772,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1764,
                    "end": 1772,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1766,
                      "end": 1772
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1773,
                "end": 1797,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1775,
                  "end": 1797,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1776,
                      "end": 1786,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1776,
                        "end": 1777,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1777,
                        "end": 1785,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1779,
                          "end": 1785
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1787,
                      "end": 1796,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1787,
                        "end": 1788,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1788,
                        "end": 1796,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1790,
                          "end": 1796
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1752,
            "end": 1753,
            "expression": {
              "type": "Identifier",
              "start": 1752,
              "end": 1753,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1741,
          "end": 1743,
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1802,
      "end": 1868,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1809,
        "end": 1868,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1832,
          "end": 1868,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1838,
              "end": 1866,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1839,
                  "end": 1850,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1842,
                    "end": 1850,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1844,
                      "end": 1850
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1851,
                "end": 1865,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1853,
                  "end": 1865,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1854,
                      "end": 1859,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1854,
                        "end": 1855,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1855,
                        "end": 1858,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1857,
                          "end": 1858,
                          "literal": {
                            "type": "Literal",
                            "start": 1857,
                            "end": 1858,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1860,
                      "end": 1864,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1860,
                        "end": 1861,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1861,
                        "end": 1864,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1863,
                          "end": 1864,
                          "literal": {
                            "type": "Literal",
                            "start": 1863,
                            "end": 1864,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1830,
            "end": 1831,
            "expression": {
              "type": "Identifier",
              "start": 1830,
              "end": 1831,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1819,
          "end": 1821,
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1870,
      "end": 1979,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1877,
        "end": 1979,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1900,
          "end": 1979,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 1906,
              "end": 1944,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1907,
                  "end": 1918,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1910,
                    "end": 1918,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1912,
                      "end": 1918
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1919,
                "end": 1943,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1921,
                  "end": 1943,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1922,
                      "end": 1932,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1922,
                        "end": 1923,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1923,
                        "end": 1931,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1925,
                          "end": 1931
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1933,
                      "end": 1942,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1933,
                        "end": 1934,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1934,
                        "end": 1942,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1936,
                          "end": 1942
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "start": 1949,
              "end": 1977,
              "accessibility": null,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 1950,
                  "end": 1961,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1953,
                    "end": 1961,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1955,
                      "end": 1961
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1962,
                "end": 1976,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1964,
                  "end": 1976,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1965,
                      "end": 1970,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1965,
                        "end": 1966,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1966,
                        "end": 1969,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1968,
                          "end": 1969,
                          "literal": {
                            "type": "Literal",
                            "start": 1968,
                            "end": 1969,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1971,
                      "end": 1975,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1971,
                        "end": 1972,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1972,
                        "end": 1975,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1974,
                          "end": 1975,
                          "literal": {
                            "type": "Literal",
                            "start": 1974,
                            "end": 1975,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 1898,
            "end": 1899,
            "expression": {
              "type": "Identifier",
              "start": 1898,
              "end": 1899,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 1887,
          "end": 1889,
          "decorators": [],
          "name": "CC",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
