__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2703,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 32,
        "decorators": [],
        "name": "_BuildPowersOf2LengthArrays",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 59,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 44,
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 81,
              "decorators": [],
              "name": "AccumulatedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 90,
              "end": 99,
              "elementType": {
                "type": "TSArrayType",
                "start": 90,
                "end": 97,
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 90,
                  "end": 95
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
        "start": 105,
        "end": 306,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 105,
          "end": 132,
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 105,
            "end": 124,
            "objectType": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 121,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 121,
                "decorators": [],
                "name": "AccumulatedArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 122,
              "end": 123,
              "literal": {
                "type": "Literal",
                "start": 122,
                "end": 123,
                "value": 0,
                "raw": "0"
              }
            }
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 125,
            "end": 131,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 131,
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 141,
          "end": 146
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 169,
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 169,
            "decorators": [],
            "name": "AccumulatedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 176,
          "end": 306,
          "typeName": {
            "type": "Identifier",
            "start": 176,
            "end": 203,
            "decorators": [],
            "name": "_BuildPowersOf2LengthArrays",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 203,
            "end": 306,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 213,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 219,
                  "decorators": [],
                  "name": "Length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTupleType",
                "start": 229,
                "end": 300,
                "elementTypes": [
                  {
                    "type": "TSTupleType",
                    "start": 230,
                    "end": 278,
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "start": 231,
                        "end": 253,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 234,
                          "end": 253,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 234,
                            "end": 250,
                            "typeName": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 250,
                              "decorators": [],
                              "name": "AccumulatedArray",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 251,
                            "end": 252,
                            "literal": {
                              "type": "Literal",
                              "start": 251,
                              "end": 252,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "start": 255,
                        "end": 277,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 258,
                          "end": 277,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 258,
                            "end": 274,
                            "typeName": {
                              "type": "Identifier",
                              "start": 258,
                              "end": 274,
                              "decorators": [],
                              "name": "AccumulatedArray",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 275,
                            "end": 276,
                            "literal": {
                              "type": "Literal",
                              "start": 275,
                              "end": 276,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSRestType",
                    "start": 280,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 283,
                      "end": 299,
                      "typeName": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 299,
                        "decorators": [],
                        "name": "AccumulatedArray",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 309,
      "end": 1013,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 337,
        "decorators": [],
        "name": "_ConcatLargestUntilDone",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 337,
        "end": 438,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 343,
            "end": 364,
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 349,
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 358,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 370,
            "end": 404,
            "name": {
              "type": "Identifier",
              "start": 370,
              "end": 386,
              "decorators": [],
              "name": "AccumulatedArray",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 395,
              "end": 404,
              "elementType": {
                "type": "TSArrayType",
                "start": 395,
                "end": 402,
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 395,
                  "end": 400
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 435,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 419,
              "decorators": [],
              "name": "NextArray",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 428,
              "end": 435,
              "elementType": {
                "type": "TSNeverKeyword",
                "start": 428,
                "end": 433
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
        "start": 441,
        "end": 1013,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 441,
          "end": 460,
          "objectType": {
            "type": "TSTypeReference",
            "start": 441,
            "end": 450,
            "typeName": {
              "type": "Identifier",
              "start": 441,
              "end": 450,
              "decorators": [],
              "name": "NextArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 451,
            "end": 459,
            "literal": {
              "type": "Literal",
              "start": 451,
              "end": 459,
              "value": "length",
              "raw": "'length'"
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 469,
          "end": 475,
          "typeName": {
            "type": "Identifier",
            "start": 469,
            "end": 475,
            "decorators": [],
            "name": "Length",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 482,
          "end": 491,
          "typeName": {
            "type": "Identifier",
            "start": 482,
            "end": 491,
            "decorators": [],
            "name": "NextArray",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 498,
          "end": 1013,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 498,
            "end": 544,
            "objectType": {
              "type": "TSTupleType",
              "start": 498,
              "end": 536,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 499,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 502,
                    "end": 521,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 502,
                      "end": 518,
                      "typeName": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 518,
                        "decorators": [],
                        "name": "AccumulatedArray",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 519,
                      "end": 520,
                      "literal": {
                        "type": "Literal",
                        "start": 519,
                        "end": 520,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 523,
                  "end": 535,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 526,
                    "end": 535,
                    "typeName": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 535,
                      "decorators": [],
                      "name": "NextArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 537,
              "end": 543,
              "typeName": {
                "type": "Identifier",
                "start": 537,
                "end": 543,
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSNeverKeyword",
            "start": 553,
            "end": 558
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 565,
            "end": 771,
            "typeName": {
              "type": "Identifier",
              "start": 565,
              "end": 588,
              "decorators": [],
              "name": "_ConcatLargestUntilDone",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 588,
              "end": 771,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 598,
                  "end": 604,
                  "typeName": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 604,
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSConditionalType",
                  "start": 614,
                  "end": 746,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 614,
                    "end": 630,
                    "typeName": {
                      "type": "Identifier",
                      "start": 614,
                      "end": 630,
                      "decorators": [],
                      "name": "AccumulatedArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "start": 639,
                    "end": 672,
                    "elementTypes": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 640,
                        "end": 659,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 640,
                          "end": 656,
                          "typeName": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 656,
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 657,
                          "end": 658,
                          "literal": {
                            "type": "Literal",
                            "start": 657,
                            "end": 658,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "start": 661,
                        "end": 671,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 664,
                          "end": 671,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 670,
                            "end": 671,
                            "name": {
                              "type": "Identifier",
                              "start": 670,
                              "end": 671,
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
                      }
                    ]
                  },
                  "trueType": {
                    "type": "TSConditionalType",
                    "start": 683,
                    "end": 730,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 683,
                      "end": 684,
                      "typeName": {
                        "type": "Identifier",
                        "start": 683,
                        "end": 684,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "start": 693,
                      "end": 702,
                      "elementType": {
                        "type": "TSArrayType",
                        "start": 693,
                        "end": 700,
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 693,
                          "end": 698
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "start": 713,
                      "end": 714,
                      "typeName": {
                        "type": "Identifier",
                        "start": 713,
                        "end": 714,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 725,
                      "end": 730
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 741,
                    "end": 746
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 756,
                  "end": 765,
                  "typeName": {
                    "type": "Identifier",
                    "start": 756,
                    "end": 765,
                    "decorators": [],
                    "name": "NextArray",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 778,
            "end": 1013,
            "typeName": {
              "type": "Identifier",
              "start": 778,
              "end": 801,
              "decorators": [],
              "name": "_ConcatLargestUntilDone",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 801,
              "end": 1013,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 811,
                  "end": 817,
                  "typeName": {
                    "type": "Identifier",
                    "start": 811,
                    "end": 817,
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSConditionalType",
                  "start": 827,
                  "end": 959,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 827,
                    "end": 843,
                    "typeName": {
                      "type": "Identifier",
                      "start": 827,
                      "end": 843,
                      "decorators": [],
                      "name": "AccumulatedArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "start": 852,
                    "end": 885,
                    "elementTypes": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 853,
                        "end": 872,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 853,
                          "end": 869,
                          "typeName": {
                            "type": "Identifier",
                            "start": 853,
                            "end": 869,
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 870,
                          "end": 871,
                          "literal": {
                            "type": "Literal",
                            "start": 870,
                            "end": 871,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      {
                        "type": "TSRestType",
                        "start": 874,
                        "end": 884,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 877,
                          "end": 884,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 883,
                            "end": 884,
                            "name": {
                              "type": "Identifier",
                              "start": 883,
                              "end": 884,
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
                      }
                    ]
                  },
                  "trueType": {
                    "type": "TSConditionalType",
                    "start": 896,
                    "end": 943,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 896,
                      "end": 897,
                      "typeName": {
                        "type": "Identifier",
                        "start": 896,
                        "end": 897,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "start": 906,
                      "end": 915,
                      "elementType": {
                        "type": "TSArrayType",
                        "start": 906,
                        "end": 913,
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 906,
                          "end": 911
                        }
                      }
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "start": 926,
                      "end": 927,
                      "typeName": {
                        "type": "Identifier",
                        "start": 926,
                        "end": 927,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 938,
                      "end": 943
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 954,
                    "end": 959
                  }
                },
                {
                  "type": "TSTupleType",
                  "start": 969,
                  "end": 1007,
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "start": 970,
                      "end": 992,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 973,
                        "end": 992,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 973,
                          "end": 989,
                          "typeName": {
                            "type": "Identifier",
                            "start": 973,
                            "end": 989,
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 990,
                          "end": 991,
                          "literal": {
                            "type": "Literal",
                            "start": 990,
                            "end": 991,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSRestType",
                      "start": 994,
                      "end": 1006,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 997,
                        "end": 1006,
                        "typeName": {
                          "type": "Identifier",
                          "start": 997,
                          "end": 1006,
                          "decorators": [],
                          "name": "NextArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1015,
      "end": 1077,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1028,
        "decorators": [],
        "name": "_Replace",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1028,
        "end": 1052,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1029,
            "end": 1048,
            "name": {
              "type": "Identifier",
              "start": 1029,
              "end": 1030,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1039,
              "end": 1048,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1039,
                "end": 1046
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1050,
            "end": 1051,
            "name": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
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
        "type": "TSMappedType",
        "start": 1055,
        "end": 1076,
        "key": {
          "type": "Identifier",
          "start": 1058,
          "end": 1059,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1063,
          "end": 1070,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1069,
            "end": 1070,
            "typeName": {
              "type": "Identifier",
              "start": 1069,
              "end": 1070,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1073,
          "end": 1074,
          "typeName": {
            "type": "Identifier",
            "start": 1073,
            "end": 1074,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1079,
      "end": 1539,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1086,
        "end": 1539,
        "id": {
          "type": "Identifier",
          "start": 1091,
          "end": 1098,
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1098,
          "end": 1127,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1099,
              "end": 1103,
              "name": {
                "type": "Identifier",
                "start": 1099,
                "end": 1103,
                "decorators": [],
                "name": "Type",
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
              "start": 1105,
              "end": 1126,
              "name": {
                "type": "Identifier",
                "start": 1105,
                "end": 1111,
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1120,
                "end": 1126
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
          "start": 1130,
          "end": 1538,
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 1130,
            "end": 1136
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1145,
            "end": 1151,
            "typeName": {
              "type": "Identifier",
              "start": 1145,
              "end": 1151,
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSArrayType",
            "start": 1158,
            "end": 1164,
            "elementType": {
              "type": "TSTypeReference",
              "start": 1158,
              "end": 1162,
              "typeName": {
                "type": "Identifier",
                "start": 1158,
                "end": 1162,
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1171,
            "end": 1538,
            "objectType": {
              "type": "TSMappedType",
              "start": 1171,
              "end": 1530,
              "key": {
                "type": "Identifier",
                "start": 1219,
                "end": 1228,
                "decorators": [],
                "name": "LengthKey",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1232,
                "end": 1238,
                "typeName": {
                  "type": "Identifier",
                  "start": 1232,
                  "end": 1238,
                  "decorators": [],
                  "name": "Length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 1241,
                "end": 1524,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 1241,
                  "end": 1324,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1268,
                    "decorators": [],
                    "name": "_BuildPowersOf2LengthArrays",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1268,
                    "end": 1324,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1282,
                        "end": 1291,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1282,
                          "end": 1291,
                          "decorators": [],
                          "name": "LengthKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTupleType",
                        "start": 1305,
                        "end": 1314,
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "start": 1306,
                            "end": 1313,
                            "elementTypes": [
                              {
                                "type": "TSNeverKeyword",
                                "start": 1307,
                                "end": 1312
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSInferType",
                  "start": 1333,
                  "end": 1358,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1339,
                    "end": 1358,
                    "name": {
                      "type": "Identifier",
                      "start": 1339,
                      "end": 1358,
                      "decorators": [],
                      "name": "TwoDimensionalArray",
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
                "trueType": {
                  "type": "TSConditionalType",
                  "start": 1369,
                  "end": 1508,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 1369,
                    "end": 1388,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1388,
                      "decorators": [],
                      "name": "TwoDimensionalArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSArrayType",
                    "start": 1397,
                    "end": 1406,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 1397,
                      "end": 1404,
                      "elementType": {
                        "type": "TSNeverKeyword",
                        "start": 1397,
                        "end": 1402
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 1417,
                    "end": 1492,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1417,
                      "end": 1425,
                      "decorators": [],
                      "name": "_Replace",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1425,
                      "end": 1492,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1426,
                          "end": 1485,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1426,
                            "end": 1449,
                            "decorators": [],
                            "name": "_ConcatLargestUntilDone",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1449,
                            "end": 1485,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1450,
                                "end": 1459,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1450,
                                  "end": 1459,
                                  "decorators": [],
                                  "name": "LengthKey",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 1461,
                                "end": 1480,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1461,
                                  "end": 1480,
                                  "decorators": [],
                                  "name": "TwoDimensionalArray",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTupleType",
                                "start": 1482,
                                "end": 1484,
                                "elementTypes": []
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1487,
                          "end": 1491,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1487,
                            "end": 1491,
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 1503,
                    "end": 1508
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 1519,
                  "end": 1524
                }
              },
              "optional": false,
              "readonly": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1531,
              "end": 1537,
              "typeName": {
                "type": "Identifier",
                "start": 1531,
                "end": 1537,
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1541,
      "end": 1706,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1548,
        "end": 1706,
        "id": {
          "type": "Identifier",
          "start": 1553,
          "end": 1561,
          "decorators": [],
          "name": "Subtract",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1561,
          "end": 1599,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1562,
              "end": 1579,
              "name": {
                "type": "Identifier",
                "start": 1562,
                "end": 1564,
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1573,
                "end": 1579
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1581,
              "end": 1598,
              "name": {
                "type": "Identifier",
                "start": 1581,
                "end": 1583,
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1592,
                "end": 1598
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
          "start": 1602,
          "end": 1705,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1602,
            "end": 1620,
            "typeName": {
              "type": "Identifier",
              "start": 1602,
              "end": 1609,
              "decorators": [],
              "name": "TupleOf",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1609,
              "end": 1620,
              "params": [
                {
                  "type": "TSNeverKeyword",
                  "start": 1610,
                  "end": 1615
                },
                {
                  "type": "TSTypeReference",
                  "start": 1617,
                  "end": 1619,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1617,
                    "end": 1619,
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 1629,
            "end": 1675,
            "elementTypes": [
              {
                "type": "TSRestType",
                "start": 1635,
                "end": 1656,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1638,
                  "end": 1656,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1645,
                    "decorators": [],
                    "name": "TupleOf",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1645,
                    "end": 1656,
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 1646,
                        "end": 1651
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1653,
                        "end": 1655,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1653,
                          "end": 1655,
                          "decorators": [],
                          "name": "N2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              {
                "type": "TSRestType",
                "start": 1662,
                "end": 1672,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1665,
                  "end": 1672,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1671,
                    "end": 1672,
                    "name": {
                      "type": "Identifier",
                      "start": 1671,
                      "end": 1672,
                      "decorators": [],
                      "name": "R",
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
              }
            ]
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1682,
            "end": 1693,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1682,
              "end": 1683,
              "typeName": {
                "type": "Identifier",
                "start": 1682,
                "end": 1683,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 1684,
              "end": 1692,
              "literal": {
                "type": "Literal",
                "start": 1684,
                "end": 1692,
                "value": "length",
                "raw": "'length'"
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1700,
            "end": 1705
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1708,
      "end": 1765,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1715,
        "end": 1765,
        "id": {
          "type": "Identifier",
          "start": 1720,
          "end": 1729,
          "decorators": [],
          "name": "Decrement",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1729,
          "end": 1747,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1730,
              "end": 1746,
              "name": {
                "type": "Identifier",
                "start": 1730,
                "end": 1731,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1740,
                "end": 1746
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
          "start": 1750,
          "end": 1764,
          "typeName": {
            "type": "Identifier",
            "start": 1750,
            "end": 1758,
            "decorators": [],
            "name": "Subtract",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1758,
            "end": 1764,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1759,
                "end": 1760,
                "typeName": {
                  "type": "Identifier",
                  "start": 1759,
                  "end": 1760,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 1762,
                "end": 1763,
                "literal": {
                  "type": "Literal",
                  "start": 1762,
                  "end": 1763,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1767,
      "end": 1959,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1774,
        "end": 1959,
        "id": {
          "type": "Identifier",
          "start": 1779,
          "end": 1782,
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1782,
          "end": 1820,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1783,
              "end": 1800,
              "name": {
                "type": "Identifier",
                "start": 1783,
                "end": 1785,
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1794,
                "end": 1800
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1802,
              "end": 1819,
              "name": {
                "type": "Identifier",
                "start": 1802,
                "end": 1804,
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1813,
                "end": 1819
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 1823,
          "end": 1958,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 1823,
              "end": 1890,
              "objectType": {
                "type": "TSTupleType",
                "start": 1823,
                "end": 1880,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 1829,
                    "end": 1850,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1832,
                      "end": 1850,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1832,
                        "end": 1839,
                        "decorators": [],
                        "name": "TupleOf",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1839,
                        "end": 1850,
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 1840,
                            "end": 1845
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1847,
                            "end": 1849,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1847,
                              "end": 1849,
                              "decorators": [],
                              "name": "N1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 1856,
                    "end": 1877,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1859,
                      "end": 1877,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1859,
                        "end": 1866,
                        "decorators": [],
                        "name": "TupleOf",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1866,
                        "end": 1877,
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 1867,
                            "end": 1872
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1874,
                            "end": 1876,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1874,
                              "end": 1876,
                              "decorators": [],
                              "name": "N2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 1881,
                "end": 1889,
                "literal": {
                  "type": "Literal",
                  "start": 1881,
                  "end": 1889,
                  "value": "length",
                  "raw": "'length'"
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "start": 1952,
              "end": 1958
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1961,
      "end": 2185,
      "id": {
        "type": "Identifier",
        "start": 1966,
        "end": 1975,
        "decorators": [],
        "name": "_MultiAdd",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1975,
        "end": 2069,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1981,
            "end": 1999,
            "name": {
              "type": "Identifier",
              "start": 1981,
              "end": 1984,
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1993,
              "end": 1999
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2005,
            "end": 2031,
            "name": {
              "type": "Identifier",
              "start": 2005,
              "end": 2016,
              "decorators": [],
              "name": "Accumulator",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2025,
              "end": 2031
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2037,
            "end": 2066,
            "name": {
              "type": "Identifier",
              "start": 2037,
              "end": 2051,
              "decorators": [],
              "name": "IterationsLeft",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2060,
              "end": 2066
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
        "start": 2072,
        "end": 2185,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2072,
          "end": 2086,
          "typeName": {
            "type": "Identifier",
            "start": 2072,
            "end": 2086,
            "decorators": [],
            "name": "IterationsLeft",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 2095,
          "end": 2096,
          "literal": {
            "type": "Literal",
            "start": 2095,
            "end": 2096,
            "value": 0,
            "raw": "0"
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2103,
          "end": 2114,
          "typeName": {
            "type": "Identifier",
            "start": 2103,
            "end": 2114,
            "decorators": [],
            "name": "Accumulator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2121,
          "end": 2185,
          "typeName": {
            "type": "Identifier",
            "start": 2121,
            "end": 2130,
            "decorators": [],
            "name": "_MultiAdd",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2130,
            "end": 2185,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2131,
                "end": 2134,
                "typeName": {
                  "type": "Identifier",
                  "start": 2131,
                  "end": 2134,
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 2136,
                "end": 2157,
                "typeName": {
                  "type": "Identifier",
                  "start": 2136,
                  "end": 2139,
                  "decorators": [],
                  "name": "Add",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2139,
                  "end": 2157,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2140,
                      "end": 2143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2140,
                        "end": 2143,
                        "decorators": [],
                        "name": "Num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2145,
                      "end": 2156,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2145,
                        "end": 2156,
                        "decorators": [],
                        "name": "Accumulator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2159,
                "end": 2184,
                "typeName": {
                  "type": "Identifier",
                  "start": 2159,
                  "end": 2168,
                  "decorators": [],
                  "name": "Decrement",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2168,
                  "end": 2184,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2169,
                      "end": 2183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2169,
                        "end": 2183,
                        "decorators": [],
                        "name": "IterationsLeft",
                        "optional": false,
                        "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 2187,
      "end": 2362,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2194,
        "end": 2362,
        "id": {
          "type": "Identifier",
          "start": 2199,
          "end": 2207,
          "decorators": [],
          "name": "Multiply",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2207,
          "end": 2245,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2208,
              "end": 2225,
              "name": {
                "type": "Identifier",
                "start": 2208,
                "end": 2210,
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2219,
                "end": 2225
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 2227,
              "end": 2244,
              "name": {
                "type": "Identifier",
                "start": 2227,
                "end": 2229,
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2238,
                "end": 2244
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
          "start": 2248,
          "end": 2362,
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 2248,
            "end": 2254
          },
          "extendsType": {
            "type": "TSUnionType",
            "start": 2263,
            "end": 2270,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 2263,
                "end": 2265,
                "typeName": {
                  "type": "Identifier",
                  "start": 2263,
                  "end": 2265,
                  "decorators": [],
                  "name": "N1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 2268,
                "end": 2270,
                "typeName": {
                  "type": "Identifier",
                  "start": 2268,
                  "end": 2270,
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 2277,
            "end": 2283
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 2290,
            "end": 2362,
            "objectType": {
              "type": "TSMappedType",
              "start": 2290,
              "end": 2358,
              "key": {
                "type": "Identifier",
                "start": 2301,
                "end": 2303,
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2307,
                "end": 2309,
                "typeName": {
                  "type": "Identifier",
                  "start": 2307,
                  "end": 2309,
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2312,
                "end": 2352,
                "objectType": {
                  "type": "TSMappedType",
                  "start": 2312,
                  "end": 2348,
                  "key": {
                    "type": "Identifier",
                    "start": 2315,
                    "end": 2317,
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2321,
                    "end": 2323,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2321,
                      "end": 2323,
                      "decorators": [],
                      "name": "N1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2326,
                    "end": 2346,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2326,
                      "end": 2335,
                      "decorators": [],
                      "name": "_MultiAdd",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2335,
                      "end": 2346,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2336,
                          "end": 2338,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2336,
                            "end": 2338,
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2340,
                          "end": 2341,
                          "literal": {
                            "type": "Literal",
                            "start": 2340,
                            "end": 2341,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 2343,
                          "end": 2345,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2343,
                            "end": 2345,
                            "decorators": [],
                            "name": "N2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "optional": false,
                  "readonly": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2349,
                  "end": 2351,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2349,
                    "end": 2351,
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 2359,
              "end": 2361,
              "typeName": {
                "type": "Identifier",
                "start": 2359,
                "end": 2361,
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2364,
      "end": 2606,
      "id": {
        "type": "Identifier",
        "start": 2369,
        "end": 2381,
        "decorators": [],
        "name": "PowerTailRec",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2381,
        "end": 2463,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2387,
            "end": 2405,
            "name": {
              "type": "Identifier",
              "start": 2387,
              "end": 2390,
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2399,
              "end": 2405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2411,
            "end": 2433,
            "name": {
              "type": "Identifier",
              "start": 2411,
              "end": 2418,
              "decorators": [],
              "name": "PowerOf",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2427,
              "end": 2433
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2439,
            "end": 2460,
            "name": {
              "type": "Identifier",
              "start": 2439,
              "end": 2445,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2454,
              "end": 2460
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
        "start": 2466,
        "end": 2605,
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 2466,
          "end": 2472
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 2481,
          "end": 2488,
          "typeName": {
            "type": "Identifier",
            "start": 2481,
            "end": 2488,
            "decorators": [],
            "name": "PowerOf",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 2495,
          "end": 2501
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 2508,
          "end": 2605,
          "checkType": {
            "type": "TSTypeReference",
            "start": 2508,
            "end": 2515,
            "typeName": {
              "type": "Identifier",
              "start": 2508,
              "end": 2515,
              "decorators": [],
              "name": "PowerOf",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSLiteralType",
            "start": 2524,
            "end": 2525,
            "literal": {
              "type": "Literal",
              "start": 2524,
              "end": 2525,
              "value": 0,
              "raw": "0"
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2532,
            "end": 2538,
            "typeName": {
              "type": "Identifier",
              "start": 2532,
              "end": 2538,
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 2545,
            "end": 2605,
            "typeName": {
              "type": "Identifier",
              "start": 2545,
              "end": 2557,
              "decorators": [],
              "name": "PowerTailRec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2557,
              "end": 2605,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2558,
                  "end": 2561,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2558,
                    "end": 2561,
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2563,
                  "end": 2581,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2563,
                    "end": 2572,
                    "decorators": [],
                    "name": "Decrement",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2572,
                    "end": 2581,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2573,
                        "end": 2580,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2573,
                          "end": 2580,
                          "decorators": [],
                          "name": "PowerOf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2583,
                  "end": 2604,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2583,
                    "end": 2591,
                    "decorators": [],
                    "name": "Multiply",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2591,
                    "end": 2604,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2592,
                        "end": 2598,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2592,
                          "end": 2598,
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2600,
                        "end": 2603,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2600,
                          "end": 2603,
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2608,
      "end": 2702,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 2615,
        "end": 2702,
        "id": {
          "type": "Identifier",
          "start": 2620,
          "end": 2625,
          "decorators": [],
          "name": "Power",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2625,
          "end": 2669,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2626,
              "end": 2644,
              "name": {
                "type": "Identifier",
                "start": 2626,
                "end": 2629,
                "decorators": [],
                "name": "Num",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2638,
                "end": 2644
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 2646,
              "end": 2668,
              "name": {
                "type": "Identifier",
                "start": 2646,
                "end": 2653,
                "decorators": [],
                "name": "PowerOf",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2662,
                "end": 2668
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
          "start": 2672,
          "end": 2701,
          "typeName": {
            "type": "Identifier",
            "start": 2672,
            "end": 2684,
            "decorators": [],
            "name": "PowerTailRec",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2684,
            "end": 2701,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2685,
                "end": 2688,
                "typeName": {
                  "type": "Identifier",
                  "start": 2685,
                  "end": 2688,
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 2690,
                "end": 2697,
                "typeName": {
                  "type": "Identifier",
                  "start": 2690,
                  "end": 2697,
                  "decorators": [],
                  "name": "PowerOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 2699,
                "end": 2700,
                "literal": {
                  "type": "Literal",
                  "start": 2699,
                  "end": 2700,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Power",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Power",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "value": "./input",
        "raw": "\"./input\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 188,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 41,
        "end": 188,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 187,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "power",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 55,
              "end": 187,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 55,
                "end": 99,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 56,
                    "end": 74,
                    "name": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 59,
                      "decorators": [],
                      "name": "Num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 68,
                      "end": 74
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 76,
                    "end": 98,
                    "name": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 83,
                      "decorators": [],
                      "name": "PowerOf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
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
                  "start": 105,
                  "end": 113,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 110,
                      "end": 113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 113,
                        "decorators": [],
                        "name": "Num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 135,
                  "decorators": [],
                  "name": "powerOf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 135,
                        "decorators": [],
                        "name": "PowerOf",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 137,
                "end": 158,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 139,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 144,
                    "decorators": [],
                    "name": "Power",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 144,
                    "end": 158,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 145,
                        "end": 148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 145,
                          "end": 148,
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 157,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 157,
                          "decorators": [],
                          "name": "PowerOf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "TSAsExpression",
                "start": 162,
                "end": 187,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 163,
                  "end": 177,
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 177,
                    "decorators": [],
                    "name": "powerOf",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 182,
                  "end": 187
                }
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
