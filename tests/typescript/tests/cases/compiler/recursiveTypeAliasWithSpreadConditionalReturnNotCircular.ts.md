__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 901,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 10,
      "end": 309,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 17,
        "end": 309,
        "id": {
          "type": "Identifier",
          "start": 27,
          "end": 33,
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 33,
          "end": 36,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 35,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
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
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 309,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 40,
              "end": 127,
              "key": {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 44,
                "end": 74,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 45,
                    "end": 73,
                    "name": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 73,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 60,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 60,
                        "end": 73,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 61,
                            "end": 72,
                            "typeName": {
                              "type": "Identifier",
                              "start": 61,
                              "end": 67,
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 67,
                              "end": 72,
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 68,
                                  "end": 71
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 75,
                  "end": 87,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 84,
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 86,
                      "end": 87,
                      "typeName": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 126,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 90,
                  "end": 126,
                  "typeName": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 96,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 96,
                    "end": 126,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 97,
                        "end": 125,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 98,
                            "end": 99,
                            "typeName": {
                              "type": "Identifier",
                              "start": 98,
                              "end": 99,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSRestType",
                            "start": 101,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 104,
                              "end": 124,
                              "typeName": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 121,
                                "decorators": [],
                                "name": "UnzipOptionArray1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 121,
                                "end": 124,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 122,
                                    "end": 123,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 122,
                                      "end": 123,
                                      "decorators": [],
                                      "name": "O",
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
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 130,
              "end": 217,
              "key": {
                "type": "Identifier",
                "start": 130,
                "end": 134,
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 134,
                "end": 164,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 135,
                    "end": 163,
                    "name": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 163,
                      "typeName": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 150,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 150,
                        "end": 163,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 151,
                            "end": 162,
                            "typeName": {
                              "type": "Identifier",
                              "start": 151,
                              "end": 157,
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 157,
                              "end": 162,
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 158,
                                  "end": 161
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 165,
                  "end": 177,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 174,
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 178,
                "end": 216,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 180,
                  "end": 216,
                  "typeName": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 186,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 186,
                    "end": 216,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 187,
                        "end": 215,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 188,
                            "end": 189,
                            "typeName": {
                              "type": "Identifier",
                              "start": 188,
                              "end": 189,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSRestType",
                            "start": 191,
                            "end": 214,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 194,
                              "end": 214,
                              "typeName": {
                                "type": "Identifier",
                                "start": 194,
                                "end": 211,
                                "decorators": [],
                                "name": "UnzipOptionArray2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 211,
                                "end": 214,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 212,
                                    "end": 213,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 212,
                                      "end": 213,
                                      "decorators": [],
                                      "name": "O",
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
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 220,
              "end": 307,
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 224,
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 224,
                "end": 254,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 225,
                    "end": 253,
                    "name": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 235,
                      "end": 253,
                      "typeName": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 240,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 240,
                        "end": 253,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 241,
                            "end": 252,
                            "typeName": {
                              "type": "Identifier",
                              "start": 241,
                              "end": 247,
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 247,
                              "end": 252,
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 248,
                                  "end": 251
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 255,
                  "end": 267,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 264,
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 264,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 266,
                      "end": 267,
                      "typeName": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 268,
                "end": 306,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 270,
                  "end": 306,
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 276,
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 276,
                    "end": 306,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 277,
                        "end": 305,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 278,
                            "end": 279,
                            "typeName": {
                              "type": "Identifier",
                              "start": 278,
                              "end": 279,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSRestType",
                            "start": 281,
                            "end": 304,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 284,
                              "end": 304,
                              "typeName": {
                                "type": "Identifier",
                                "start": 284,
                                "end": 301,
                                "decorators": [],
                                "name": "UnzipOptionArray3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 301,
                                "end": 304,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 302,
                                    "end": 303,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 302,
                                      "end": 303,
                                      "decorators": [],
                                      "name": "O",
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
                      }
                    ]
                  }
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
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
      "start": 311,
      "end": 371,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 327,
        "decorators": [],
        "name": "UnzipOption",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 327,
        "end": 330,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 328,
            "end": 329,
            "name": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
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
        "start": 333,
        "end": 370,
        "checkType": {
          "type": "TSTypeReference",
          "start": 333,
          "end": 334,
          "typeName": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 343,
          "end": 358,
          "typeName": {
            "type": "Identifier",
            "start": 343,
            "end": 349,
            "decorators": [],
            "name": "Option",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 349,
            "end": 358,
            "params": [
              {
                "type": "TSInferType",
                "start": 350,
                "end": 357,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 356,
                  "end": 357,
                  "name": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "V",
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
          "type": "TSTypeReference",
          "start": 361,
          "end": 362,
          "typeName": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 365,
          "end": 370
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 395,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 417,
        "decorators": [],
        "name": "UnzipOptionArray1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 417,
        "end": 420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 418,
            "end": 419,
            "name": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
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
        "start": 423,
        "end": 495,
        "key": {
          "type": "Identifier",
          "start": 426,
          "end": 427,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 431,
          "end": 438,
          "operator": "keyof",
          "typeAnnotation": {
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
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 441,
          "end": 493,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 441,
            "end": 445,
            "objectType": {
              "type": "TSTypeReference",
              "start": 441,
              "end": 442,
              "typeName": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 443,
              "end": 444,
              "typeName": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 454,
            "end": 465,
            "typeName": {
              "type": "Identifier",
              "start": 454,
              "end": 460,
              "decorators": [],
              "name": "Option",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 460,
              "end": 465,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 461,
                  "end": 464
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 468,
            "end": 485,
            "typeName": {
              "type": "Identifier",
              "start": 468,
              "end": 479,
              "decorators": [],
              "name": "UnzipOption",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 479,
              "end": 485,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 480,
                  "end": 484,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 480,
                    "end": 481,
                    "typeName": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 481,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 482,
                    "end": 483,
                    "typeName": {
                      "type": "Identifier",
                      "start": 482,
                      "end": 483,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 488,
            "end": 493
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 517,
      "end": 583,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 539,
        "decorators": [],
        "name": "UnzipOptionArray2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 539,
        "end": 542,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 540,
            "end": 541,
            "name": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
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
        "start": 545,
        "end": 582,
        "key": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 553,
          "end": 560,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 559,
            "end": 560,
            "typeName": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 563,
          "end": 580,
          "typeName": {
            "type": "Identifier",
            "start": 563,
            "end": 574,
            "decorators": [],
            "name": "UnzipOption",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 574,
            "end": 580,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 575,
                "end": 579,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 575,
                  "end": 576,
                  "typeName": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 576,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 577,
                  "end": 578,
                  "typeName": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 578,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 584,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 589,
        "end": 606,
        "decorators": [],
        "name": "UnzipOptionArray3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 606,
        "end": 609,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 607,
            "end": 608,
            "name": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
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
        "start": 612,
        "end": 672,
        "key": {
          "type": "Identifier",
          "start": 615,
          "end": 616,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 620,
          "end": 627,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 626,
            "end": 627,
            "typeName": {
              "type": "Identifier",
              "start": 626,
              "end": 627,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 630,
          "end": 670,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 630,
            "end": 634,
            "objectType": {
              "type": "TSTypeReference",
              "start": 630,
              "end": 631,
              "typeName": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 632,
              "end": 633,
              "typeName": {
                "type": "Identifier",
                "start": 632,
                "end": 633,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 643,
            "end": 658,
            "typeName": {
              "type": "Identifier",
              "start": 643,
              "end": 649,
              "decorators": [],
              "name": "Option",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 649,
              "end": 658,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 650,
                  "end": 657,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 656,
                    "end": 657,
                    "name": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 657,
                      "decorators": [],
                      "name": "V",
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
            "type": "TSTypeReference",
            "start": 661,
            "end": 662,
            "typeName": {
              "type": "Identifier",
              "start": 661,
              "end": 662,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 665,
            "end": 670
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 675,
      "end": 710,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 689,
          "end": 709,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 709,
            "decorators": [],
            "name": "opt1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 693,
              "end": 709,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 695,
                "end": 709,
                "typeName": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 701,
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 701,
                  "end": 709,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    }
                  ]
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
      "type": "VariableDeclaration",
      "start": 711,
      "end": 746,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 725,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 725,
            "end": 745,
            "decorators": [],
            "name": "opt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 729,
              "end": 745,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 731,
                "end": 745,
                "typeName": {
                  "type": "Identifier",
                  "start": 731,
                  "end": 737,
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 737,
                  "end": 745,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 738,
                      "end": 744
                    }
                  ]
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
      "type": "VariableDeclaration",
      "start": 747,
      "end": 783,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 761,
          "end": 782,
          "id": {
            "type": "Identifier",
            "start": 761,
            "end": 782,
            "decorators": [],
            "name": "opt3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 765,
              "end": 782,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 767,
                "end": 782,
                "typeName": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 773,
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 773,
                  "end": 782,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 774,
                      "end": 781
                    }
                  ]
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
      "type": "VariableDeclaration",
      "start": 785,
      "end": 823,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 822,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 798,
            "decorators": [],
            "name": "zipped1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 801,
            "end": 822,
            "callee": {
              "type": "MemberExpression",
              "start": 801,
              "end": 810,
              "object": {
                "type": "Identifier",
                "start": 801,
                "end": 805,
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 806,
                "end": 810,
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 811,
                "end": 815,
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 817,
                "end": 821,
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 824,
      "end": 862,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 830,
          "end": 861,
          "id": {
            "type": "Identifier",
            "start": 830,
            "end": 837,
            "decorators": [],
            "name": "zipped2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 840,
            "end": 861,
            "callee": {
              "type": "MemberExpression",
              "start": 840,
              "end": 849,
              "object": {
                "type": "Identifier",
                "start": 840,
                "end": 844,
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 845,
                "end": 849,
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 850,
                "end": 854,
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 856,
                "end": 860,
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 863,
      "end": 901,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 869,
          "end": 900,
          "id": {
            "type": "Identifier",
            "start": 869,
            "end": 876,
            "decorators": [],
            "name": "zipped3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 879,
            "end": 900,
            "callee": {
              "type": "MemberExpression",
              "start": 879,
              "end": 888,
              "object": {
                "type": "Identifier",
                "start": 879,
                "end": 883,
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 884,
                "end": 888,
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 889,
                "end": 893,
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 895,
                "end": 899,
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
