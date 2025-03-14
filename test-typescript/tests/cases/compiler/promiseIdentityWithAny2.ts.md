promiseIdentityWithAny2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 672,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 103,
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 103,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 38,
              "end": 101,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 42,
                "decorators": [],
                "name": "then",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 83,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 59,
                      "end": 83,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 60,
                          "end": 64,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 61,
                            "end": 64,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 63,
                              "end": 64,
                              "typeName": {
                                "type": "Identifier",
                                "start": 63,
                                "end": 64,
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
                        "start": 66,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 83,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 77,
                            "end": 83,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 78,
                                "end": 79,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 81,
                                "end": 82,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 81,
                                  "end": 82,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 77,
                            "decorators": [],
                            "name": "IPromise",
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
                "start": 84,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 100,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 94,
                    "end": 100,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 96,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "W",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 94,
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 44,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 46,
                    "end": 47,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "W",
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
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "IPromise",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 25,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 26,
              "end": 27,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "V",
                "optional": false
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
      "start": 104,
      "end": 199,
      "body": {
        "type": "TSInterfaceBody",
        "start": 128,
        "end": 199,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 197,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 138,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 176,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 176,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 149,
                    "end": 176,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 150,
                        "end": 154,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 154,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 153,
                            "end": 154,
                            "typeName": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
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
                      "start": 156,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 159,
                        "end": 176,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 166,
                          "end": 176,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 167,
                              "end": 170
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 166,
                          "decorators": [],
                          "name": "Promise",
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
              "start": 177,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 196,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 186,
                  "end": 196,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 187,
                      "end": 190
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 192,
                      "end": 195
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 186,
                  "decorators": [],
                  "name": "Promise",
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
        "start": 114,
        "end": 121,
        "decorators": [],
        "name": "Promise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 123,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 284,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 284,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 268,
                  "end": 284,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 269,
                      "end": 275
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 268,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 317,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 317,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 300,
                  "end": 317,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 301,
                      "end": 307
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 309,
                      "end": 316
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 300,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 321,
      "end": 420,
      "body": {
        "type": "TSInterfaceBody",
        "start": 347,
        "end": 420,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 353,
            "end": 418,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 353,
              "end": 357,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 364,
                "end": 399,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 372,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 374,
                    "end": 399,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 375,
                        "end": 379,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 376,
                          "end": 379,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 378,
                            "end": 379,
                            "typeName": {
                              "type": "Identifier",
                              "start": 378,
                              "end": 379,
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
                      "start": 381,
                      "end": 399,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 384,
                        "end": 399,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 393,
                          "end": 399,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 394,
                              "end": 395,
                              "typeName": {
                                "type": "Identifier",
                                "start": 394,
                                "end": 395,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 397,
                              "end": 398,
                              "typeName": {
                                "type": "Identifier",
                                "start": 397,
                                "end": 398,
                                "decorators": [],
                                "name": "W",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 393,
                          "decorators": [],
                          "name": "IPromise2",
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
              "start": 400,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 402,
                "end": 417,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 411,
                  "end": 417,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 412,
                      "end": 413,
                      "typeName": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 415,
                      "end": 416,
                      "typeName": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "decorators": [],
                        "name": "W",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 411,
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 357,
              "end": 363,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 358,
                  "end": 359,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 361,
                  "end": 362,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
                    "decorators": [],
                    "name": "W",
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
        "start": 331,
        "end": 340,
        "decorators": [],
        "name": "IPromise2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 340,
        "end": 346,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 341,
            "end": 342,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 344,
            "end": 345,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 421,
      "end": 559,
      "body": {
        "type": "TSInterfaceBody",
        "start": 446,
        "end": 559,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 452,
            "end": 526,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 456,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 463,
                "end": 504,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 471,
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 473,
                    "end": 504,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 474,
                        "end": 478,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 475,
                          "end": 478,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 477,
                            "end": 478,
                            "typeName": {
                              "type": "Identifier",
                              "start": 477,
                              "end": 478,
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
                      "start": 480,
                      "end": 504,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 483,
                        "end": 504,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 491,
                          "end": 504,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 492,
                              "end": 498
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 500,
                              "end": 503
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 491,
                          "decorators": [],
                          "name": "Promise2",
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
              "start": 505,
              "end": 525,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 507,
                "end": 525,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 515,
                  "end": 525,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 516,
                      "end": 519
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 521,
                      "end": 524
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 515,
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 456,
              "end": 462,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 457,
                  "end": 458,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 460,
                  "end": 461,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "decorators": [],
                    "name": "W",
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
        "start": 431,
        "end": 439,
        "decorators": [],
        "name": "Promise2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 439,
        "end": 445,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 440,
            "end": 441,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 443,
            "end": 444,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 637,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 637,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 612,
                "end": 637,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 621,
                  "end": 637,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 622,
                      "end": 628
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 630,
                      "end": 636
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 621,
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 671,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 671,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 644,
              "end": 671,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 646,
                "end": 671,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 654,
                  "end": 671,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 655,
                      "end": 661
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 663,
                      "end": 670
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 654,
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
