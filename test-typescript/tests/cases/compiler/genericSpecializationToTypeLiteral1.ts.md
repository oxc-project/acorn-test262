__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "IEnumerable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 1361,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 32,
            "end": 156,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "name": "zip",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 35,
              "end": 44,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 36,
                  "end": 43,
                  "name": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 43,
                    "name": "TResult",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 67,
                "name": "second",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 64,
                      "name": "IEnumerable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
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
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 69,
                "end": 132,
                "name": "resultSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 132,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 85,
                    "end": 132,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 86,
                        "end": 94,
                        "name": "first",
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
                              "name": "T",
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
                        "start": 96,
                        "end": 105,
                        "name": "second",
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
                              "name": "T",
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
                        "start": 107,
                        "end": 120,
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "TResult",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 146,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "TResult",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 161,
            "end": 274,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "name": "zip",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 164,
              "end": 173,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 165,
                  "end": 172,
                  "name": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 172,
                    "name": "TResult",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 174,
                "end": 185,
                "name": "second",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 187,
                "end": 250,
                "name": "resultSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 203,
                    "end": 250,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 212,
                        "name": "first",
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
                              "name": "T",
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
                        "start": 214,
                        "end": 223,
                        "name": "second",
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
                              "name": "T",
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
                        "start": 225,
                        "end": 238,
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 230,
                          "end": 238,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "TResult",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 273,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 264,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "TResult",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 279,
            "end": 332,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 282,
              "name": "zip",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 282,
              "end": 291,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 283,
                  "end": 290,
                  "name": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 290,
                    "name": "TResult",
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
              ]
            },
            "params": [
              {
                "type": "RestElement",
                "start": 292,
                "end": 308,
                "argument": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 301,
                  "name": "params",
                  "typeAnnotation": null,
                  "decorators": [],
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
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 311,
                "end": 331,
                "typeName": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 322,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "TResult",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 362,
            "end": 422,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 367,
              "name": "merge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 367,
              "end": 376,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 368,
                  "end": 375,
                  "name": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 375,
                    "name": "TResult",
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
              ]
            },
            "params": [
              {
                "type": "RestElement",
                "start": 377,
                "end": 404,
                "argument": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 386,
                  "name": "params",
                  "typeAnnotation": null,
                  "decorators": [],
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 399,
                        "name": "IEnumerable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
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
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 407,
                "end": 421,
                "typeName": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 418,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 427,
            "end": 476,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 432,
              "name": "merge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 432,
              "end": 441,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 433,
                  "end": 440,
                  "name": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 440,
                    "name": "TResult",
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
              ]
            },
            "params": [
              {
                "type": "RestElement",
                "start": 442,
                "end": 458,
                "argument": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 451,
                  "name": "params",
                  "typeAnnotation": null,
                  "decorators": [],
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 459,
              "end": 475,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 461,
                "end": 475,
                "typeName": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 472,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 483,
            "end": 538,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 489,
              "name": "concat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 490,
                "end": 520,
                "argument": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 502,
                  "name": "sequences",
                  "typeAnnotation": null,
                  "decorators": [],
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 515,
                        "name": "IEnumerable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
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
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 521,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 523,
                "end": 537,
                "typeName": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 534,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 543,
            "end": 585,
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 549,
              "name": "concat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 550,
                "end": 567,
                "argument": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 562,
                  "name": "sequences",
                  "typeAnnotation": null,
                  "decorators": [],
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 584,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 584,
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 581,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 591,
            "end": 653,
            "key": {
              "type": "Identifier",
              "start": 591,
              "end": 597,
              "name": "insert",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 598,
                "end": 611,
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 603,
                  "end": 611,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 605,
                    "end": 611
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 613,
                "end": 635,
                "name": "second",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 619,
                  "end": 635,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 621,
                    "end": 635,
                    "typeName": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 632,
                      "name": "IEnumerable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
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
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 652,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 652,
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 649,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 659,
            "end": 706,
            "key": {
              "type": "Identifier",
              "start": 659,
              "end": 672,
              "name": "sequenceEqual",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 673,
                "end": 695,
                "name": "second",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 679,
                  "end": 695,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 681,
                    "end": 695,
                    "typeName": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 692,
                      "name": "IEnumerable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
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
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 711,
            "end": 811,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 724,
              "name": "sequenceEqual",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 724,
              "end": 734,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 725,
                  "end": 733,
                  "name": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 733,
                    "name": "TCompare",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 735,
                "end": 757,
                "name": "second",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 741,
                  "end": 757,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 743,
                    "end": 757,
                    "typeName": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 754,
                      "name": "IEnumerable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
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
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 759,
                "end": 800,
                "name": "compareSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 774,
                  "end": 800,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 776,
                    "end": 800,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 777,
                        "end": 787,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TCompare",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 816,
            "end": 852,
            "key": {
              "type": "Identifier",
              "start": 816,
              "end": 829,
              "name": "sequenceEqual",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 830,
                "end": 841,
                "name": "second",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 857,
            "end": 946,
            "key": {
              "type": "Identifier",
              "start": 857,
              "end": 870,
              "name": "sequenceEqual",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 870,
              "end": 880,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 871,
                  "end": 879,
                  "name": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 879,
                    "name": "TCompare",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 881,
                "end": 892,
                "name": "second",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 894,
                "end": 935,
                "name": "compareSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 909,
                  "end": 935,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 911,
                    "end": 935,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 912,
                        "end": 922,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TCompare",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 959,
            "end": 1037,
            "key": {
              "type": "Identifier",
              "start": 959,
              "end": 971,
              "name": "toDictionary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 971,
              "end": 977,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 972,
                  "end": 976,
                  "name": {
                    "type": "Identifier",
                    "start": 972,
                    "end": 976,
                    "name": "TKey",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 978,
                "end": 1011,
                "name": "keySelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 989,
                  "end": 1011,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 991,
                    "end": 1011,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 992,
                        "end": 1002,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1012,
              "end": 1036,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1014,
                "end": 1036,
                "typeName": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1025,
                  "name": "IDictionary",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "TKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1032,
                      "end": 1035
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
            "start": 1042,
            "end": 1172,
            "key": {
              "type": "Identifier",
              "start": 1042,
              "end": 1054,
              "name": "toDictionary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1054,
              "end": 1068,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1055,
                  "end": 1059,
                  "name": {
                    "type": "Identifier",
                    "start": 1055,
                    "end": 1059,
                    "name": "TKey",
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
                  "start": 1061,
                  "end": 1067,
                  "name": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1067,
                    "name": "TValue",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1069,
                "end": 1102,
                "name": "keySelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1080,
                  "end": 1102,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1082,
                    "end": 1102,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1083,
                        "end": 1093,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1104,
                "end": 1143,
                "name": "elementSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1119,
                  "end": 1143,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1121,
                    "end": 1143,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1122,
                        "end": 1132,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1144,
              "end": 1171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1146,
                "end": 1171,
                "typeName": {
                  "type": "Identifier",
                  "start": 1146,
                  "end": 1157,
                  "name": "IDictionary",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "TKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1164,
                      "end": 1170,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1164,
                        "end": 1170,
                        "name": "TValue",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1177,
            "end": 1359,
            "key": {
              "type": "Identifier",
              "start": 1177,
              "end": 1189,
              "name": "toDictionary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1189,
              "end": 1213,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1190,
                  "end": 1194,
                  "name": {
                    "type": "Identifier",
                    "start": 1190,
                    "end": 1194,
                    "name": "TKey",
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
                  "start": 1196,
                  "end": 1202,
                  "name": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1202,
                    "name": "TValue",
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
                  "start": 1204,
                  "end": 1212,
                  "name": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1212,
                    "name": "TCompare",
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1214,
                "end": 1247,
                "name": "keySelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1225,
                  "end": 1247,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1227,
                    "end": 1247,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1228,
                        "end": 1238,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1249,
                "end": 1288,
                "name": "elementSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1264,
                  "end": 1288,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1266,
                    "end": 1288,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1267,
                        "end": 1277,
                        "name": "element",
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
                              "name": "T",
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
                          "name": "TValue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1290,
                "end": 1330,
                "name": "compareSelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1305,
                  "end": 1330,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1307,
                    "end": 1330,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1308,
                        "end": 1317,
                        "name": "key",
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
                              "name": "TKey",
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
                          "name": "TCompare",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1331,
              "end": 1358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1358,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1344,
                  "name": "IDictionary",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "TKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1351,
                      "end": 1357,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1351,
                        "end": 1357,
                        "name": "TValue",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1363,
      "end": 1465,
      "id": {
        "type": "Identifier",
        "start": 1373,
        "end": 1384,
        "name": "IDictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1384,
        "end": 1398,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1385,
            "end": 1389,
            "name": {
              "type": "Identifier",
              "start": 1385,
              "end": 1389,
              "name": "TKey",
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
            "start": 1391,
            "end": 1397,
            "name": {
              "type": "Identifier",
              "start": 1391,
              "end": 1397,
              "name": "TValue",
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
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1399,
        "end": 1465,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1405,
            "end": 1463,
            "key": {
              "type": "Identifier",
              "start": 1405,
              "end": 1417,
              "name": "toEnumerable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1419,
              "end": 1462,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1462,
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1432,
                  "name": "IEnumerable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1435,
                            "end": 1438,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "name": "TKey",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1446,
                          "end": 1459,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1446,
                            "end": 1451,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "name": "TValue",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
