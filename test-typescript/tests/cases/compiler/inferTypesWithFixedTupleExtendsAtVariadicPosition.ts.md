__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 2125,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 40,
        "name": "SubTup2FixedLength",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 64,
        "end": 132,
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
                  "name": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 122,
          "typeName": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 127,
          "end": 132
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 135,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 162,
        "name": "SubTup2FixedLengthTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 165,
        "end": 203,
        "typeName": {
          "type": "Identifier",
          "start": 165,
          "end": 183,
          "name": "SubTup2FixedLength",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": false
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
      "start": 206,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 226,
        "name": "SubTup2Variadic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 250,
        "end": 321,
        "checkType": {
          "type": "TSTypeReference",
          "start": 250,
          "end": 251,
          "typeName": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 310,
          "end": 311,
          "typeName": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 316,
          "end": 321
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 324,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 348,
        "name": "SubTup2VariadicTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 351,
        "end": 391,
        "typeName": {
          "type": "Identifier",
          "start": 351,
          "end": 366,
          "name": "SubTup2Variadic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 384,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
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
      "start": 393,
      "end": 468,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 418,
        "name": "SubTup2VariadicTest2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 421,
        "end": 467,
        "typeName": {
          "type": "Identifier",
          "start": 421,
          "end": 436,
          "name": "SubTup2Variadic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 460,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
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
      "start": 470,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 497,
        "name": "SubTup2VariadicAndRest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 521,
        "end": 621,
        "checkType": {
          "type": "TSTypeReference",
          "start": 521,
          "end": 522,
          "typeName": {
            "type": "Identifier",
            "start": 521,
            "end": 522,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 547,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
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
                    "name": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "name": "C",
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
            }
          ]
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
                "typeName": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 600,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 606,
                      "end": 607,
                      "name": "C",
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
          "type": "TSNeverKeyword",
          "start": 616,
          "end": 621
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 624,
      "end": 706,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 655,
        "name": "SubTup2VariadicAndRestTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 658,
        "end": 705,
        "typeName": {
          "type": "Identifier",
          "start": 658,
          "end": 680,
          "name": "SubTup2VariadicAndRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 683,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 688,
                    "end": 689,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
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
      "start": 708,
      "end": 833,
      "id": {
        "type": "Identifier",
        "start": 713,
        "end": 736,
        "name": "SubTup2TrailingVariadic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 760,
        "end": 832,
        "checkType": {
          "type": "TSTypeReference",
          "start": 760,
          "end": 761,
          "typeName": {
            "type": "Identifier",
            "start": 760,
            "end": 761,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 821,
          "end": 822,
          "typeName": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 827,
          "end": 832
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 835,
      "end": 919,
      "id": {
        "type": "Identifier",
        "start": 840,
        "end": 867,
        "name": "SubTup2TrailingVariadicTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 870,
        "end": 918,
        "typeName": {
          "type": "Identifier",
          "start": 870,
          "end": 893,
          "name": "SubTup2TrailingVariadic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 898,
                      "end": 899,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 907,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 913,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": false
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
      "start": 920,
      "end": 1011,
      "id": {
        "type": "Identifier",
        "start": 925,
        "end": 953,
        "name": "SubTup2TrailingVariadicTest2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 956,
        "end": 1010,
        "typeName": {
          "type": "Identifier",
          "start": 956,
          "end": 979,
          "name": "SubTup2TrailingVariadic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 985,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 993,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 998,
                    "end": 999,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1004,
                    "end": 1005,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": false
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
      "start": 1013,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1049,
        "name": "SubTup2RestAndTrailingVariadic2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1073,
        "end": 1169,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1073,
          "end": 1074,
          "typeName": {
            "type": "Identifier",
            "start": 1073,
            "end": 1074,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 1099,
                      "end": 1100,
                      "name": "C",
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
                  "name": {
                    "type": "Identifier",
                    "start": 1118,
                    "end": 1119,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
                }
              }
            }
          ]
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
              "typeName": {
                "type": "Identifier",
                "start": 1149,
                "end": 1150,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSRestType",
              "start": 1152,
              "end": 1156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1155,
                "end": 1156,
                "typeName": {
                  "type": "Identifier",
                  "start": 1155,
                  "end": 1156,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1164,
          "end": 1169
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1172,
      "end": 1272,
      "id": {
        "type": "Identifier",
        "start": 1177,
        "end": 1212,
        "name": "SubTup2RestAndTrailingVariadic2Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1215,
        "end": 1271,
        "typeName": {
          "type": "Identifier",
          "start": 1215,
          "end": 1246,
          "name": "SubTup2RestAndTrailingVariadic2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1251,
                      "end": 1252,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1259,
                    "end": 1260,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1265,
                    "end": 1266,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": false
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
      "start": 1274,
      "end": 1421,
      "id": {
        "type": "Identifier",
        "start": 1279,
        "end": 1318,
        "name": "SubTup2VariadicWithLeadingFixedElements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1319,
              "end": 1320,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1342,
        "end": 1420,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1342,
          "end": 1343,
          "typeName": {
            "type": "Identifier",
            "start": 1342,
            "end": 1343,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 1372,
                    "end": 1373,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 1409,
          "end": 1410,
          "typeName": {
            "type": "Identifier",
            "start": 1409,
            "end": 1410,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1415,
          "end": 1420
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1423,
      "end": 1545,
      "id": {
        "type": "Identifier",
        "start": 1428,
        "end": 1471,
        "name": "SubTup2VariadicWithLeadingFixedElementsTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1474,
        "end": 1544,
        "typeName": {
          "type": "Identifier",
          "start": 1474,
          "end": 1513,
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1515,
                    "end": 1516,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1522,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1527,
                    "end": 1528,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1536,
                      "end": 1537,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
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
      "start": 1546,
      "end": 1675,
      "id": {
        "type": "Identifier",
        "start": 1551,
        "end": 1595,
        "name": "SubTup2VariadicWithLeadingFixedElementsTest2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1598,
        "end": 1674,
        "typeName": {
          "type": "Identifier",
          "start": 1598,
          "end": 1637,
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1639,
                    "end": 1640,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1645,
                    "end": 1646,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1651,
                    "end": 1652,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1657,
                    "end": 1658,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "value": 4,
                          "raw": "4"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1666,
                      "end": 1667,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
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
      "start": 1677,
      "end": 1834,
      "id": {
        "type": "Identifier",
        "start": 1682,
        "end": 1730,
        "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1731,
              "end": 1732,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1754,
        "end": 1833,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1754,
          "end": 1755,
          "typeName": {
            "type": "Identifier",
            "start": 1754,
            "end": 1755,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 1787,
                    "end": 1788,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  "out": false,
                  "const": false
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
        "trueType": {
          "type": "TSTypeReference",
          "start": 1822,
          "end": 1823,
          "typeName": {
            "type": "Identifier",
            "start": 1822,
            "end": 1823,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1828,
          "end": 1833
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1836,
      "end": 1976,
      "id": {
        "type": "Identifier",
        "start": 1841,
        "end": 1893,
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1896,
        "end": 1975,
        "typeName": {
          "type": "Identifier",
          "start": 1896,
          "end": 1944,
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 1949,
                      "end": 1950,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1958,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1963,
                    "end": 1964,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 1969,
                    "end": 1970,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": false
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
      "start": 1977,
      "end": 2124,
      "id": {
        "type": "Identifier",
        "start": 1982,
        "end": 2035,
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2038,
        "end": 2123,
        "typeName": {
          "type": "Identifier",
          "start": 2038,
          "end": 2086,
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 2091,
                      "end": 2092,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2099,
                    "end": 2100,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2105,
                    "end": 2106,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2111,
                    "end": 2112,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "label": {
                    "type": "Identifier",
                    "start": 2117,
                    "end": 2118,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
