__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 2124,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 133,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 40,
        "decorators": [],
        "name": "SubTup2FixedLength",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 64,
        "end": 132,
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
          "end": 116,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 78,
              "end": 107,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 81,
                "end": 107,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 87,
                  "end": 107,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 97,
                    "end": 107,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 98,
                        "end": 101
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 103,
                        "end": 106
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 127,
          "end": 132
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 122,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 40,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 60,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 51,
              "end": 60,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 51,
                "end": 58
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
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
      "start": 135,
      "end": 204,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 162,
        "decorators": [],
        "name": "SubTup2FixedLengthTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 165,
        "end": 203,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 183,
          "end": 203,
          "params": [
            {
              "type": "TSTupleType",
              "start": 184,
              "end": 202,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 185,
                  "end": 189,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 188,
                    "end": 189,
                    "literal": {
                      "type": "Literal",
                      "start": 188,
                      "end": 189,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 191,
                  "end": 195,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 194,
                    "end": 195,
                    "literal": {
                      "type": "Literal",
                      "start": 194,
                      "end": 195,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 197,
                  "end": 201,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 200,
                    "end": 201,
                    "literal": {
                      "type": "Literal",
                      "start": 200,
                      "end": 201,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 165,
          "end": 183,
          "decorators": [],
          "name": "SubTup2FixedLength",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 322,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 226,
        "decorators": [],
        "name": "SubTup2Variadic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 250,
        "end": 321,
        "checkType": {
          "type": "TSTypeReference",
          "start": 250,
          "end": 251,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 260,
          "end": 305,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 264,
              "end": 293,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 267,
                "end": 293,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 273,
                  "end": 293,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 283,
                    "end": 293,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 284,
                        "end": 287
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 297,
              "end": 303,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 300,
                "end": 303
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 316,
          "end": 321
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 310,
          "end": 311,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 247,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 246,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 237,
              "end": 246,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 237,
                "end": 244
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
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
      "start": 324,
      "end": 392,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 348,
        "decorators": [],
        "name": "SubTup2VariadicTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 351,
        "end": 391,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 366,
          "end": 391,
          "params": [
            {
              "type": "TSTupleType",
              "start": 367,
              "end": 390,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 368,
                  "end": 372,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 371,
                    "end": 372,
                    "literal": {
                      "type": "Literal",
                      "start": 371,
                      "end": 372,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 374,
                  "end": 378,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 377,
                    "end": 378,
                    "literal": {
                      "type": "Literal",
                      "start": 377,
                      "end": 378,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSRestType",
                  "start": 380,
                  "end": 389,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 383,
                    "end": 389,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 386,
                      "end": 389,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 386,
                        "end": 387,
                        "literal": {
                          "type": "Literal",
                          "start": 386,
                          "end": 387,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 384,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 351,
          "end": 366,
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 393,
      "end": 468,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 418,
        "decorators": [],
        "name": "SubTup2VariadicTest2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 421,
        "end": 467,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 436,
          "end": 467,
          "params": [
            {
              "type": "TSTupleType",
              "start": 437,
              "end": 466,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 438,
                  "end": 442,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 441,
                    "end": 442,
                    "literal": {
                      "type": "Literal",
                      "start": 441,
                      "end": 442,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 444,
                  "end": 448,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 447,
                    "end": 448,
                    "literal": {
                      "type": "Literal",
                      "start": 447,
                      "end": 448,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 450,
                  "end": 454,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 453,
                    "end": 454,
                    "literal": {
                      "type": "Literal",
                      "start": 453,
                      "end": 454,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSRestType",
                  "start": 456,
                  "end": 465,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 459,
                    "end": 465,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 462,
                      "end": 465,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 462,
                        "end": 463,
                        "literal": {
                          "type": "Literal",
                          "start": 462,
                          "end": 463,
                          "raw": "3",
                          "value": 3
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 460,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 421,
          "end": 436,
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 470,
      "end": 622,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 497,
        "decorators": [],
        "name": "SubTup2VariadicAndRest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 521,
        "end": 621,
        "checkType": {
          "type": "TSTypeReference",
          "start": 521,
          "end": 522,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 521,
            "end": 522,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 531,
          "end": 588,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 537,
              "end": 566,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 540,
                "end": 566,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 546,
                  "end": 566,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 556,
                    "end": 566,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 557,
                        "end": 560
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 562,
                        "end": 565
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 547,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 572,
              "end": 586,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 575,
                "end": 586,
                "elementType": {
                  "type": "TSInferType",
                  "start": 576,
                  "end": 583,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 582,
                    "end": 583,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 616,
          "end": 621
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 595,
          "end": 609,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 596,
              "end": 600,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 599,
                "end": 600,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 600,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 602,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 605,
                "end": 608,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 606,
                    "end": 607,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 606,
                      "end": 607,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 497,
        "end": 518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 498,
            "end": 517,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 508,
              "end": 517,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 508,
                "end": 515
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
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
      "start": 624,
      "end": 706,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 655,
        "decorators": [],
        "name": "SubTup2VariadicAndRestTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 658,
        "end": 705,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 680,
          "end": 705,
          "params": [
            {
              "type": "TSTupleType",
              "start": 681,
              "end": 704,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 682,
                  "end": 686,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 685,
                    "end": 686,
                    "literal": {
                      "type": "Literal",
                      "start": 685,
                      "end": 686,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 683,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 688,
                  "end": 692,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 691,
                    "end": 692,
                    "literal": {
                      "type": "Literal",
                      "start": 691,
                      "end": 692,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 688,
                    "end": 689,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSRestType",
                  "start": 694,
                  "end": 703,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 697,
                    "end": 703,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 700,
                      "end": 703,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 700,
                        "end": 701,
                        "literal": {
                          "type": "Literal",
                          "start": 700,
                          "end": 701,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 658,
          "end": 680,
          "decorators": [],
          "name": "SubTup2VariadicAndRest",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 708,
      "end": 833,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 713,
        "end": 736,
        "decorators": [],
        "name": "SubTup2TrailingVariadic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 760,
        "end": 832,
        "checkType": {
          "type": "TSTypeReference",
          "start": 760,
          "end": 761,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 760,
            "end": 761,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 770,
          "end": 816,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 774,
              "end": 780,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 777,
                "end": 780
              }
            },
            {
              "type": "TSRestType",
              "start": 784,
              "end": 813,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 787,
                "end": 813,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 793,
                  "end": 813,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 803,
                    "end": 813,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 804,
                        "end": 807
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 809,
                        "end": 812
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "decorators": [],
                    "name": "B",
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
          "start": 827,
          "end": 832
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 821,
          "end": 822,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 736,
        "end": 757,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 737,
            "end": 756,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 747,
              "end": 756,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 747,
                "end": 754
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
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
      "start": 835,
      "end": 919,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 840,
        "end": 867,
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 870,
        "end": 918,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 893,
          "end": 918,
          "params": [
            {
              "type": "TSTupleType",
              "start": 894,
              "end": 917,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 895,
                  "end": 904,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 898,
                    "end": 904,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 901,
                      "end": 904,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 901,
                        "end": 902,
                        "literal": {
                          "type": "Literal",
                          "start": 901,
                          "end": 902,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 898,
                      "end": 899,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 906,
                  "end": 910,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 909,
                    "end": 910,
                    "literal": {
                      "type": "Literal",
                      "start": 909,
                      "end": 910,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 907,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 912,
                  "end": 916,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 915,
                    "end": 916,
                    "literal": {
                      "type": "Literal",
                      "start": 915,
                      "end": 916,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 913,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 870,
          "end": 893,
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 920,
      "end": 1011,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 925,
        "end": 953,
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 956,
        "end": 1010,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 979,
          "end": 1010,
          "params": [
            {
              "type": "TSTupleType",
              "start": 980,
              "end": 1009,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 981,
                  "end": 990,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 984,
                    "end": 990,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 987,
                      "end": 990,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 987,
                        "end": 988,
                        "literal": {
                          "type": "Literal",
                          "start": 987,
                          "end": 988,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 985,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 992,
                  "end": 996,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 995,
                    "end": 996,
                    "literal": {
                      "type": "Literal",
                      "start": 995,
                      "end": 996,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 993,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 998,
                  "end": 1002,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1001,
                    "end": 1002,
                    "literal": {
                      "type": "Literal",
                      "start": 1001,
                      "end": 1002,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 999,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1004,
                  "end": 1008,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1007,
                    "end": 1008,
                    "literal": {
                      "type": "Literal",
                      "start": 1007,
                      "end": 1008,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1004,
                    "end": 1005,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 956,
          "end": 979,
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1013,
      "end": 1170,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1049,
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1073,
        "end": 1169,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1073,
          "end": 1074,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1073,
            "end": 1074,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1083,
          "end": 1141,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 1089,
              "end": 1103,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1092,
                "end": 1103,
                "elementType": {
                  "type": "TSInferType",
                  "start": 1093,
                  "end": 1100,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1099,
                    "end": 1100,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1099,
                      "end": 1100,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 1109,
              "end": 1138,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 1112,
                "end": 1138,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1118,
                  "end": 1138,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 1128,
                    "end": 1138,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1129,
                        "end": 1132
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1134,
                        "end": 1137
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1118,
                    "end": 1119,
                    "decorators": [],
                    "name": "B",
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
          "start": 1164,
          "end": 1169
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 1148,
          "end": 1157,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 1149,
              "end": 1150,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1149,
                "end": 1150,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSRestType",
              "start": 1152,
              "end": 1156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1155,
                "end": 1156,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1155,
                  "end": 1156,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1049,
        "end": 1070,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1050,
            "end": 1069,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1060,
              "end": 1069,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1060,
                "end": 1067
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
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
      "start": 1172,
      "end": 1272,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1177,
        "end": 1212,
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1215,
        "end": 1271,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1246,
          "end": 1271,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1247,
              "end": 1270,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 1248,
                  "end": 1257,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 1251,
                    "end": 1257,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 1254,
                      "end": 1257,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 1254,
                        "end": 1255,
                        "literal": {
                          "type": "Literal",
                          "start": 1254,
                          "end": 1255,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1251,
                      "end": 1252,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1259,
                  "end": 1263,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1262,
                    "end": 1263,
                    "literal": {
                      "type": "Literal",
                      "start": 1262,
                      "end": 1263,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1259,
                    "end": 1260,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1265,
                  "end": 1269,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1268,
                    "end": 1269,
                    "literal": {
                      "type": "Literal",
                      "start": 1268,
                      "end": 1269,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1265,
                    "end": 1266,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1215,
          "end": 1246,
          "decorators": [],
          "name": "SubTup2RestAndTrailingVariadic2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1274,
      "end": 1421,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1279,
        "end": 1318,
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElements",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1342,
        "end": 1420,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1342,
          "end": 1343,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1342,
            "end": 1343,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1352,
          "end": 1404,
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 1356,
              "end": 1359
            },
            {
              "type": "TSRestType",
              "start": 1363,
              "end": 1392,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 1366,
                "end": 1392,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1372,
                  "end": 1392,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 1382,
                    "end": 1392,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1383,
                        "end": 1386
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1388,
                        "end": 1391
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1372,
                    "end": 1373,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            },
            {
              "type": "TSRestType",
              "start": 1396,
              "end": 1402,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1399,
                "end": 1402
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1415,
          "end": 1420
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1409,
          "end": 1410,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1409,
            "end": 1410,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1318,
        "end": 1339,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1319,
            "end": 1338,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1329,
              "end": 1338,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1329,
                "end": 1336
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1319,
              "end": 1320,
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
      "start": 1423,
      "end": 1545,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1428,
        "end": 1471,
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1474,
        "end": 1544,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1513,
          "end": 1544,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1514,
              "end": 1543,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 1515,
                  "end": 1519,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1518,
                    "end": 1519,
                    "literal": {
                      "type": "Literal",
                      "start": 1518,
                      "end": 1519,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1515,
                    "end": 1516,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1521,
                  "end": 1525,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1524,
                    "end": 1525,
                    "literal": {
                      "type": "Literal",
                      "start": 1524,
                      "end": 1525,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1522,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1527,
                  "end": 1531,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1530,
                    "end": 1531,
                    "literal": {
                      "type": "Literal",
                      "start": 1530,
                      "end": 1531,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1527,
                    "end": 1528,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSRestType",
                  "start": 1533,
                  "end": 1542,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 1536,
                    "end": 1542,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 1539,
                      "end": 1542,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 1539,
                        "end": 1540,
                        "literal": {
                          "type": "Literal",
                          "start": 1539,
                          "end": 1540,
                          "raw": "3",
                          "value": 3
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1536,
                      "end": 1537,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1474,
          "end": 1513,
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1546,
      "end": 1675,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1551,
        "end": 1595,
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1598,
        "end": 1674,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1637,
          "end": 1674,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1638,
              "end": 1673,
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "start": 1639,
                  "end": 1643,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1642,
                    "end": 1643,
                    "literal": {
                      "type": "Literal",
                      "start": 1642,
                      "end": 1643,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1639,
                    "end": 1640,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1645,
                  "end": 1649,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1648,
                    "end": 1649,
                    "literal": {
                      "type": "Literal",
                      "start": 1648,
                      "end": 1649,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1645,
                    "end": 1646,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1651,
                  "end": 1655,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1654,
                    "end": 1655,
                    "literal": {
                      "type": "Literal",
                      "start": 1654,
                      "end": 1655,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1651,
                    "end": 1652,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1657,
                  "end": 1661,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1660,
                    "end": 1661,
                    "literal": {
                      "type": "Literal",
                      "start": 1660,
                      "end": 1661,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1657,
                    "end": 1658,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSRestType",
                  "start": 1663,
                  "end": 1672,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 1666,
                    "end": 1672,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 1669,
                      "end": 1672,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 1669,
                        "end": 1670,
                        "literal": {
                          "type": "Literal",
                          "start": 1669,
                          "end": 1670,
                          "raw": "4",
                          "value": 4
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1666,
                      "end": 1667,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1598,
          "end": 1637,
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1677,
      "end": 1834,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1682,
        "end": 1730,
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1754,
        "end": 1833,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1754,
          "end": 1755,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1754,
            "end": 1755,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 1764,
          "end": 1817,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 1768,
              "end": 1774,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1771,
                "end": 1774
              }
            },
            {
              "type": "TSRestType",
              "start": 1778,
              "end": 1807,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 1781,
                "end": 1807,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1787,
                  "end": 1807,
                  "const": false,
                  "constraint": {
                    "type": "TSTupleType",
                    "start": 1797,
                    "end": 1807,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1798,
                        "end": 1801
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1803,
                        "end": 1806
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1787,
                    "end": 1788,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "start": 1811,
              "end": 1814
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1828,
          "end": 1833
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1822,
          "end": 1823,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1822,
            "end": 1823,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1730,
        "end": 1751,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1731,
            "end": 1750,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1741,
              "end": 1750,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1741,
                "end": 1748
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1731,
              "end": 1732,
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
      "start": 1836,
      "end": 1976,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1841,
        "end": 1893,
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1896,
        "end": 1975,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1944,
          "end": 1975,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1945,
              "end": 1974,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 1946,
                  "end": 1955,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 1949,
                    "end": 1955,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 1952,
                      "end": 1955,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 1952,
                        "end": 1953,
                        "literal": {
                          "type": "Literal",
                          "start": 1952,
                          "end": 1953,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1949,
                      "end": 1950,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1957,
                  "end": 1961,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1960,
                    "end": 1961,
                    "literal": {
                      "type": "Literal",
                      "start": 1960,
                      "end": 1961,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1958,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1963,
                  "end": 1967,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1966,
                    "end": 1967,
                    "literal": {
                      "type": "Literal",
                      "start": 1966,
                      "end": 1967,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1963,
                    "end": 1964,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 1969,
                  "end": 1973,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 1972,
                    "end": 1973,
                    "literal": {
                      "type": "Literal",
                      "start": 1972,
                      "end": 1973,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1969,
                    "end": 1970,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1896,
          "end": 1944,
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1977,
      "end": 2124,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1982,
        "end": 2035,
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2038,
        "end": 2123,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2086,
          "end": 2123,
          "params": [
            {
              "type": "TSTupleType",
              "start": 2087,
              "end": 2122,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 2088,
                  "end": 2097,
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "start": 2091,
                    "end": 2097,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 2094,
                      "end": 2097,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 2094,
                        "end": 2095,
                        "literal": {
                          "type": "Literal",
                          "start": 2094,
                          "end": 2095,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 2091,
                      "end": 2092,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 2099,
                  "end": 2103,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 2102,
                    "end": 2103,
                    "literal": {
                      "type": "Literal",
                      "start": 2102,
                      "end": 2103,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2099,
                    "end": 2100,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 2105,
                  "end": 2109,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 2108,
                    "end": 2109,
                    "literal": {
                      "type": "Literal",
                      "start": 2108,
                      "end": 2109,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2105,
                    "end": 2106,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 2111,
                  "end": 2115,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 2114,
                    "end": 2115,
                    "literal": {
                      "type": "Literal",
                      "start": 2114,
                      "end": 2115,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2111,
                    "end": 2112,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                },
                {
                  "type": "TSNamedTupleMember",
                  "start": 2117,
                  "end": 2121,
                  "elementType": {
                    "type": "TSLiteralType",
                    "start": 2120,
                    "end": 2121,
                    "literal": {
                      "type": "Literal",
                      "start": 2120,
                      "end": 2121,
                      "raw": "4",
                      "value": 4
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2117,
                    "end": 2118,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2038,
          "end": 2086,
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
