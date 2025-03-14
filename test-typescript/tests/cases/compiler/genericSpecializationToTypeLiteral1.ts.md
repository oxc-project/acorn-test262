genericSpecializationToTypeLiteral1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1465,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 1361,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 1361,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 32,
            "end": 156,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "zip",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 67,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 67,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 64,
                      "end": 67,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 65,
                          "end": 66,
                          "typeName": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 64,
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 69,
                "end": 132,
                "decorators": [],
                "name": "resultSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 132,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 85,
                    "end": 132,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 86,
                        "end": 94,
                        "decorators": [],
                        "name": "first",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 94,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 93,
                            "end": 94,
                            "typeName": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 96,
                        "end": 105,
                        "decorators": [],
                        "name": "second",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 102,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 104,
                            "end": 105,
                            "typeName": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 107,
                        "end": 120,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 122,
                      "end": 132,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 125,
                        "end": 132,
                        "typeName": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 132,
                          "decorators": [],
                          "name": "TResult",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 155,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 146,
                  "end": 155,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 147,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 154,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 146,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 35,
              "end": 44,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 36,
                  "end": 43,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 43,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 161,
            "end": 274,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "decorators": [],
              "name": "zip",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 174,
                "end": 185,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 180,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 182,
                    "end": 185,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 182,
                      "end": 183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 183,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 187,
                "end": 250,
                "decorators": [],
                "name": "resultSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 203,
                    "end": 250,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 212,
                        "decorators": [],
                        "name": "first",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 209,
                          "end": 212,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 211,
                            "end": 212,
                            "typeName": {
                              "type": "Identifier",
                              "start": 211,
                              "end": 212,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 214,
                        "end": 223,
                        "decorators": [],
                        "name": "second",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 220,
                          "end": 223,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 222,
                            "end": 223,
                            "typeName": {
                              "type": "Identifier",
                              "start": 222,
                              "end": 223,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 225,
                        "end": 238,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 230,
                          "end": 238,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 240,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 243,
                        "end": 250,
                        "typeName": {
                          "type": "Identifier",
                          "start": 243,
                          "end": 250,
                          "decorators": [],
                          "name": "TResult",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 273,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 264,
                  "end": 273,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 272,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 272,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 264,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 164,
              "end": 173,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 165,
                  "end": 172,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 172,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 279,
            "end": 332,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 282,
              "decorators": [],
              "name": "zip",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 292,
                "end": 308,
                "argument": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 301,
                  "decorators": [],
                  "name": "params",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 301,
                  "end": 308,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 303,
                    "end": 308,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 303,
                      "end": 306
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 311,
                "end": 331,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 322,
                  "end": 331,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 323,
                      "end": 330,
                      "typeName": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 330,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 322,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 282,
              "end": 291,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 283,
                  "end": 290,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 290,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 362,
            "end": 422,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 367,
              "decorators": [],
              "name": "merge",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 377,
                "end": 404,
                "argument": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 386,
                  "decorators": [],
                  "name": "params",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 386,
                  "end": 404,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 388,
                    "end": 404,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 402,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 399,
                        "end": 402,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 400,
                            "end": 401,
                            "typeName": {
                              "type": "Identifier",
                              "start": 400,
                              "end": 401,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 399,
                        "decorators": [],
                        "name": "IEnumerable",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 421,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 418,
                  "end": 421,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 419,
                      "end": 420,
                      "typeName": {
                        "type": "Identifier",
                        "start": 419,
                        "end": 420,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 418,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 367,
              "end": 376,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 368,
                  "end": 375,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 375,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 427,
            "end": 476,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 432,
              "decorators": [],
              "name": "merge",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 442,
                "end": 458,
                "argument": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 451,
                  "decorators": [],
                  "name": "params",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 451,
                  "end": 458,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 453,
                    "end": 458,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 453,
                      "end": 456,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 453,
                        "end": 454,
                        "typeName": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 454,
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
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 459,
              "end": 475,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 461,
                "end": 475,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 472,
                  "end": 475,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 473,
                      "end": 474,
                      "typeName": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 472,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 432,
              "end": 441,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 433,
                  "end": 440,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 440,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 483,
            "end": 538,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 489,
              "decorators": [],
              "name": "concat",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 490,
                "end": 520,
                "argument": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 502,
                  "decorators": [],
                  "name": "sequences",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 502,
                  "end": 520,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 504,
                    "end": 520,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 504,
                      "end": 518,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 515,
                        "end": 518,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 516,
                            "end": 517,
                            "typeName": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 517,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 515,
                        "decorators": [],
                        "name": "IEnumerable",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 523,
                "end": 537,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 534,
                  "end": 537,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 535,
                      "end": 536,
                      "typeName": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 534,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 543,
            "end": 585,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 549,
              "decorators": [],
              "name": "concat",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 550,
                "end": 567,
                "argument": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 562,
                  "decorators": [],
                  "name": "sequences",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 562,
                  "end": 567,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 564,
                    "end": 567,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 564,
                      "end": 565,
                      "typeName": {
                        "type": "Identifier",
                        "start": 564,
                        "end": 565,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 584,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 584,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 581,
                  "end": 584,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 582,
                      "end": 583,
                      "typeName": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 581,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 591,
            "end": 653,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 591,
              "end": 597,
              "decorators": [],
              "name": "insert",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 598,
                "end": 611,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 603,
                  "end": 611,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 605,
                    "end": 611
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 613,
                "end": 635,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 619,
                  "end": 635,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 621,
                    "end": 635,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 632,
                      "end": 635,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 633,
                          "end": 634,
                          "typeName": {
                            "type": "Identifier",
                            "start": 633,
                            "end": 634,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 632,
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 652,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 652,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 649,
                  "end": 652,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 650,
                      "end": 651,
                      "typeName": {
                        "type": "Identifier",
                        "start": 650,
                        "end": 651,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 649,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 659,
            "end": 706,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 659,
              "end": 672,
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 673,
                "end": 695,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 679,
                  "end": 695,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 681,
                    "end": 695,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 692,
                      "end": 695,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 693,
                          "end": 694,
                          "typeName": {
                            "type": "Identifier",
                            "start": 693,
                            "end": 694,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 692,
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 696,
              "end": 705,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 698,
                "end": 705
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 711,
            "end": 811,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 724,
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 735,
                "end": 757,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 741,
                  "end": 757,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 743,
                    "end": 757,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 754,
                      "end": 757,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 755,
                          "end": 756,
                          "typeName": {
                            "type": "Identifier",
                            "start": 755,
                            "end": 756,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 754,
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 759,
                "end": 800,
                "decorators": [],
                "name": "compareSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 774,
                  "end": 800,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 776,
                    "end": 800,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 777,
                        "end": 787,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 784,
                          "end": 787,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 786,
                            "end": 787,
                            "typeName": {
                              "type": "Identifier",
                              "start": 786,
                              "end": 787,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 789,
                      "end": 800,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 792,
                        "end": 800,
                        "typeName": {
                          "type": "Identifier",
                          "start": 792,
                          "end": 800,
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 801,
              "end": 810,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 803,
                "end": 810
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 724,
              "end": 734,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 725,
                  "end": 733,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 733,
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 816,
            "end": 852,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 816,
              "end": 829,
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 830,
                "end": 841,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 836,
                  "end": 841,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 838,
                    "end": 841,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 838,
                      "end": 839,
                      "typeName": {
                        "type": "Identifier",
                        "start": 838,
                        "end": 839,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 842,
              "end": 851,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 844,
                "end": 851
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 857,
            "end": 946,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 857,
              "end": 870,
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 881,
                "end": 892,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 887,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 889,
                    "end": 892,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 889,
                      "end": 890,
                      "typeName": {
                        "type": "Identifier",
                        "start": 889,
                        "end": 890,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 894,
                "end": 935,
                "decorators": [],
                "name": "compareSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 909,
                  "end": 935,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 911,
                    "end": 935,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 912,
                        "end": 922,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 919,
                          "end": 922,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 921,
                            "end": 922,
                            "typeName": {
                              "type": "Identifier",
                              "start": 921,
                              "end": 922,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 924,
                      "end": 935,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 927,
                        "end": 935,
                        "typeName": {
                          "type": "Identifier",
                          "start": 927,
                          "end": 935,
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 936,
              "end": 945,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 938,
                "end": 945
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 870,
              "end": 880,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 871,
                  "end": 879,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 879,
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 959,
            "end": 1037,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 959,
              "end": 971,
              "decorators": [],
              "name": "toDictionary",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 978,
                "end": 1011,
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 989,
                  "end": 1011,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 991,
                    "end": 1011,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 992,
                        "end": 1002,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 999,
                          "end": 1002,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1001,
                            "end": 1002,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1001,
                              "end": 1002,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1004,
                      "end": 1011,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1007,
                        "end": 1011,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1007,
                          "end": 1011,
                          "decorators": [],
                          "name": "TKey",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1012,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1014,
                "end": 1036,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1025,
                  "end": 1036,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1026,
                      "end": 1030,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1026,
                        "end": 1030,
                        "decorators": [],
                        "name": "TKey",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1032,
                      "end": 1035
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1025,
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 971,
              "end": 977,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 972,
                  "end": 976,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 972,
                    "end": 976,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1042,
            "end": 1172,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1042,
              "end": 1054,
              "decorators": [],
              "name": "toDictionary",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1069,
                "end": 1102,
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1080,
                  "end": 1102,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1082,
                    "end": 1102,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1093,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1090,
                          "end": 1093,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1092,
                            "end": 1093,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1092,
                              "end": 1093,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1095,
                      "end": 1102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1098,
                        "end": 1102,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1098,
                          "end": 1102,
                          "decorators": [],
                          "name": "TKey",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1104,
                "end": 1143,
                "decorators": [],
                "name": "elementSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1119,
                  "end": 1143,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1121,
                    "end": 1143,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1122,
                        "end": 1132,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1129,
                          "end": 1132,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1131,
                            "end": 1132,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1131,
                              "end": 1132,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1134,
                      "end": 1143,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1137,
                        "end": 1143,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1137,
                          "end": 1143,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1144,
              "end": 1171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1146,
                "end": 1171,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1157,
                  "end": 1171,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1158,
                      "end": 1162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1158,
                        "end": 1162,
                        "decorators": [],
                        "name": "TKey",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1164,
                      "end": 1170,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1164,
                        "end": 1170,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1146,
                  "end": 1157,
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1054,
              "end": 1068,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1055,
                  "end": 1059,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1055,
                    "end": 1059,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1061,
                  "end": 1067,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1067,
                    "decorators": [],
                    "name": "TValue",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1177,
            "end": 1359,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1177,
              "end": 1189,
              "decorators": [],
              "name": "toDictionary",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1214,
                "end": 1247,
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1225,
                  "end": 1247,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1227,
                    "end": 1247,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1228,
                        "end": 1238,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1235,
                          "end": 1238,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1237,
                            "end": 1238,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1237,
                              "end": 1238,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1240,
                      "end": 1247,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1243,
                        "end": 1247,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1243,
                          "end": 1247,
                          "decorators": [],
                          "name": "TKey",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1249,
                "end": 1288,
                "decorators": [],
                "name": "elementSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1264,
                  "end": 1288,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1266,
                    "end": 1288,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1267,
                        "end": 1277,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1274,
                          "end": 1277,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1276,
                            "end": 1277,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1276,
                              "end": 1277,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1279,
                      "end": 1288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1282,
                        "end": 1288,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1282,
                          "end": 1288,
                          "decorators": [],
                          "name": "TValue",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1290,
                "end": 1330,
                "decorators": [],
                "name": "compareSelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1305,
                  "end": 1330,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1307,
                    "end": 1330,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1308,
                        "end": 1317,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1311,
                          "end": 1317,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1313,
                            "end": 1317,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1313,
                              "end": 1317,
                              "decorators": [],
                              "name": "TKey",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1319,
                      "end": 1330,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1322,
                        "end": 1330,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1322,
                          "end": 1330,
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1331,
              "end": 1358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1358,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1344,
                  "end": 1358,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1345,
                      "end": 1349,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1345,
                        "end": 1349,
                        "decorators": [],
                        "name": "TKey",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1351,
                      "end": 1357,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1351,
                        "end": 1357,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1344,
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1189,
              "end": 1213,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1190,
                  "end": 1194,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1190,
                    "end": 1194,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1196,
                  "end": 1202,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1202,
                    "decorators": [],
                    "name": "TValue",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1204,
                  "end": 1212,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1212,
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "IEnumerable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1363,
      "end": 1465,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1399,
        "end": 1465,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1405,
            "end": 1463,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1405,
              "end": 1417,
              "decorators": [],
              "name": "toEnumerable",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1419,
              "end": 1462,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1462,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1432,
                  "end": 1462,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1433,
                      "end": 1461,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1435,
                          "end": 1445,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1435,
                            "end": 1438,
                            "decorators": [],
                            "name": "key",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1438,
                            "end": 1444,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1440,
                              "end": 1444,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1440,
                                "end": 1444,
                                "decorators": [],
                                "name": "TKey",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1446,
                          "end": 1459,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1446,
                            "end": 1451,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1451,
                            "end": 1459,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1453,
                              "end": 1459,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1453,
                                "end": 1459,
                                "decorators": [],
                                "name": "TValue",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1432,
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1373,
        "end": 1384,
        "decorators": [],
        "name": "IDictionary",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1384,
        "end": 1398,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1385,
            "end": 1389,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1385,
              "end": 1389,
              "decorators": [],
              "name": "TKey",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1391,
            "end": 1397,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1391,
              "end": 1397,
              "decorators": [],
              "name": "TValue",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
