__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 772,
      "id": {
        "type": "TSQualifiedName",
        "start": 18,
        "end": 36,
        "left": {
          "type": "Identifier",
          "start": 18,
          "end": 25,
          "name": "Windows",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 26,
          "end": 36,
          "name": "Foundation",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 772,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 43,
            "end": 770,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 61,
              "name": "IPromise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 61,
              "end": 70,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 62,
                  "end": 69,
                  "name": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 69,
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 71,
              "end": 770,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 81,
                  "end": 218,
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 85,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 85,
                    "end": 88,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 86,
                        "end": 87,
                        "name": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "name": "U",
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
                      "start": 89,
                      "end": 130,
                      "name": "success",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 97,
                        "end": 130,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 99,
                          "end": 130,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 100,
                              "end": 114,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 105,
                                "end": 114,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 107,
                                  "end": 114,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 107,
                                    "end": 114,
                                    "name": "TResult",
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
                            "start": 116,
                            "end": 130,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 119,
                              "end": 130,
                              "typeName": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 127,
                                "name": "IPromise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 127,
                                "end": 130,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 128,
                                    "end": 129,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 128,
                                      "end": 129,
                                      "name": "U",
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
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 132,
                      "end": 167,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 138,
                        "end": 167,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 140,
                          "end": 167,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 141,
                              "end": 151,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 146,
                                "end": 151,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 148,
                                  "end": 151
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 153,
                            "end": 167,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 156,
                              "end": 167,
                              "typeName": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 164,
                                "name": "IPromise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 164,
                                "end": 167,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 165,
                                    "end": 166,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 165,
                                      "end": 166,
                                      "name": "U",
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
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 169,
                      "end": 203,
                      "name": "progress",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 178,
                        "end": 203,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 180,
                          "end": 203,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 181,
                              "end": 194,
                              "name": "progress",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 189,
                                "end": 194,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 191,
                                  "end": 194
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 196,
                            "end": 203,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 199,
                              "end": 203
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 217,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 206,
                      "end": 217,
                      "typeName": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 214,
                        "name": "IPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 214,
                        "end": 217,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 215,
                            "end": 216,
                            "typeName": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 216,
                              "name": "U",
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
                  "start": 227,
                  "end": 354,
                  "key": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 231,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 231,
                    "end": 234,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 232,
                        "end": 233,
                        "name": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "name": "U",
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
                      "start": 235,
                      "end": 276,
                      "name": "success",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 243,
                        "end": 276,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 245,
                          "end": 276,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 246,
                              "end": 260,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 251,
                                "end": 260,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 253,
                                  "end": 260,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 260,
                                    "name": "TResult",
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
                            "start": 262,
                            "end": 276,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 265,
                              "end": 276,
                              "typeName": {
                                "type": "Identifier",
                                "start": 265,
                                "end": 273,
                                "name": "IPromise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 273,
                                "end": 276,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 274,
                                    "end": 275,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 274,
                                      "end": 275,
                                      "name": "U",
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
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 278,
                      "end": 303,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 284,
                        "end": 303,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 286,
                          "end": 303,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 287,
                              "end": 297,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 292,
                                "end": 297,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 294,
                                  "end": 297
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 299,
                            "end": 303,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 302,
                              "end": 303,
                              "typeName": {
                                "type": "Identifier",
                                "start": 302,
                                "end": 303,
                                "name": "U",
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
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 305,
                      "end": 339,
                      "name": "progress",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 314,
                        "end": 339,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 316,
                          "end": 339,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 317,
                              "end": 330,
                              "name": "progress",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 325,
                                "end": 330,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 327,
                                  "end": 330
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 332,
                            "end": 339,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 335,
                              "end": 339
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 340,
                    "end": 353,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 342,
                      "end": 353,
                      "typeName": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 350,
                        "name": "IPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 350,
                        "end": 353,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 351,
                            "end": 352,
                            "typeName": {
                              "type": "Identifier",
                              "start": 351,
                              "end": 352,
                              "name": "U",
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
                  "start": 363,
                  "end": 490,
                  "key": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 367,
                    "name": "then",
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
                    "end": 370,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 368,
                        "end": 369,
                        "name": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 369,
                          "name": "U",
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
                      "start": 371,
                      "end": 402,
                      "name": "success",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 379,
                        "end": 402,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 381,
                          "end": 402,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 382,
                              "end": 396,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 387,
                                "end": 396,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 389,
                                  "end": 396,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 389,
                                    "end": 396,
                                    "name": "TResult",
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
                            "start": 398,
                            "end": 402,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 401,
                              "end": 402,
                              "typeName": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 402,
                                "name": "U",
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
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 404,
                      "end": 439,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 410,
                        "end": 439,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 412,
                          "end": 439,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 413,
                              "end": 423,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 418,
                                "end": 423,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 420,
                                  "end": 423
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 425,
                            "end": 439,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 428,
                              "end": 439,
                              "typeName": {
                                "type": "Identifier",
                                "start": 428,
                                "end": 436,
                                "name": "IPromise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 436,
                                "end": 439,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 437,
                                    "end": 438,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 437,
                                      "end": 438,
                                      "name": "U",
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
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 441,
                      "end": 475,
                      "name": "progress",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 450,
                        "end": 475,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 452,
                          "end": 475,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 453,
                              "end": 466,
                              "name": "progress",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 461,
                                "end": 466,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 463,
                                  "end": 466
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 468,
                            "end": 475,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 471,
                              "end": 475
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 478,
                      "end": 489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 486,
                        "name": "IPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 486,
                        "end": 489,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 487,
                            "end": 488,
                            "typeName": {
                              "type": "Identifier",
                              "start": 487,
                              "end": 488,
                              "name": "U",
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
                  "start": 499,
                  "end": 616,
                  "key": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 503,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 503,
                    "end": 506,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 504,
                        "end": 505,
                        "name": {
                          "type": "Identifier",
                          "start": 504,
                          "end": 505,
                          "name": "U",
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
                      "start": 507,
                      "end": 538,
                      "name": "success",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 515,
                        "end": 538,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 517,
                          "end": 538,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 518,
                              "end": 532,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 523,
                                "end": 532,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 525,
                                  "end": 532,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 525,
                                    "end": 532,
                                    "name": "TResult",
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
                            "start": 534,
                            "end": 538,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 537,
                              "end": 538,
                              "typeName": {
                                "type": "Identifier",
                                "start": 537,
                                "end": 538,
                                "name": "U",
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
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 540,
                      "end": 565,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 546,
                        "end": 565,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 548,
                          "end": 565,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 549,
                              "end": 559,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 554,
                                "end": 559,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 556,
                                  "end": 559
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 561,
                            "end": 565,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 564,
                              "end": 565,
                              "typeName": {
                                "type": "Identifier",
                                "start": 564,
                                "end": 565,
                                "name": "U",
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
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 567,
                      "end": 601,
                      "name": "progress",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 576,
                        "end": 601,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 578,
                          "end": 601,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 579,
                              "end": 592,
                              "name": "progress",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 587,
                                "end": 592,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 589,
                                  "end": 592
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 594,
                            "end": 601,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 597,
                              "end": 601
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 602,
                    "end": 615,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 604,
                      "end": 615,
                      "typeName": {
                        "type": "Identifier",
                        "start": 604,
                        "end": 612,
                        "name": "IPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 612,
                        "end": 615,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 613,
                            "end": 614,
                            "typeName": {
                              "type": "Identifier",
                              "start": 613,
                              "end": 614,
                              "name": "U",
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
                  "start": 625,
                  "end": 739,
                  "key": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 629,
                    "name": "done",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 629,
                    "end": 632,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 630,
                        "end": 631,
                        "name": {
                          "type": "Identifier",
                          "start": 630,
                          "end": 631,
                          "name": "U",
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
                      "start": 633,
                      "end": 666,
                      "name": "success",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 641,
                        "end": 666,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 643,
                          "end": 666,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 644,
                              "end": 658,
                              "name": "value",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 649,
                                "end": 658,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 651,
                                  "end": 658,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 651,
                                    "end": 658,
                                    "name": "TResult",
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
                            "start": 660,
                            "end": 666,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 663,
                              "end": 666
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 668,
                      "end": 695,
                      "name": "error",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 674,
                        "end": 695,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 676,
                          "end": 695,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 677,
                              "end": 687,
                              "name": "error",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 682,
                                "end": 687,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 684,
                                  "end": 687
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 689,
                            "end": 695,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 692,
                              "end": 695
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    },
                    {
                      "type": "Identifier",
                      "start": 697,
                      "end": 731,
                      "name": "progress",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 706,
                        "end": 731,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 708,
                          "end": 731,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 709,
                              "end": 722,
                              "name": "progress",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 717,
                                "end": 722,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 719,
                                  "end": 722
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 724,
                            "end": 731,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 727,
                              "end": 731
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 732,
                    "end": 738,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 734,
                      "end": 738
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 749,
                  "end": 764,
                  "key": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 755,
                    "name": "cancel",
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
                    "start": 757,
                    "end": 763,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 759,
                      "end": 763
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
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 774,
      "end": 877,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 795,
        "name": "sample",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 796,
          "end": 840,
          "name": "promise",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 803,
            "end": 840,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 840,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 805,
                "end": 832,
                "left": {
                  "type": "TSQualifiedName",
                  "start": 805,
                  "end": 823,
                  "left": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 812,
                    "name": "Windows",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 823,
                    "name": "Foundation",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 832,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 832,
                "end": 840,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 842,
        "end": 877,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 848,
            "end": 875,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 852,
                "end": 874,
                "id": {
                  "type": "Identifier",
                  "start": 852,
                  "end": 858,
                  "name": "number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 861,
                  "end": 874,
                  "argument": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 874,
                    "name": "promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 880,
      "end": 931,
      "id": {
        "type": "Identifier",
        "start": 897,
        "end": 905,
        "name": "resolve1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 909,
          "end": 917,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 914,
            "end": 917,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 916,
              "end": 917,
              "typeName": {
                "type": "Identifier",
                "start": 916,
                "end": 917,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 905,
        "end": 908,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 906,
            "end": 907,
            "name": {
              "type": "Identifier",
              "start": 906,
              "end": 907,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 918,
        "end": 930,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 920,
          "end": 930,
          "typeName": {
            "type": "Identifier",
            "start": 920,
            "end": 927,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 927,
            "end": 930,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 928,
                "end": 929,
                "typeName": {
                  "type": "Identifier",
                  "start": 928,
                  "end": 929,
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
    {
      "type": "TSDeclareFunction",
      "start": 932,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 957,
        "name": "resolve2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 961,
          "end": 969,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 966,
            "end": 969,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 968,
              "end": 969,
              "typeName": {
                "type": "Identifier",
                "start": 968,
                "end": 969,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 957,
        "end": 960,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 958,
            "end": 959,
            "name": {
              "type": "Identifier",
              "start": 958,
              "end": 959,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 970,
        "end": 1002,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 972,
          "end": 1002,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 972,
            "end": 999,
            "left": {
              "type": "TSQualifiedName",
              "start": 972,
              "end": 990,
              "left": {
                "type": "Identifier",
                "start": 972,
                "end": 979,
                "name": "Windows",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 980,
                "end": 990,
                "name": "Foundation",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 991,
              "end": 999,
              "name": "IPromise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 999,
            "end": 1002,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1000,
                "end": 1001,
                "typeName": {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1001,
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
    {
      "type": "FunctionDeclaration",
      "start": 1005,
      "end": 1107,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1027,
        "name": "sample2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1028,
          "end": 1038,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1030,
            "end": 1038,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1032,
              "end": 1038
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1040,
        "end": 1107,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1046,
            "end": 1073,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1050,
                "end": 1072,
                "id": {
                  "type": "Identifier",
                  "start": 1050,
                  "end": 1052,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 1055,
                  "end": 1072,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1061,
                    "end": 1072,
                    "callee": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1069,
                      "name": "resolve1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1070,
                        "end": 1071,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1078,
            "end": 1105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1082,
                "end": 1104,
                "id": {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1084,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 1087,
                  "end": 1104,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1093,
                    "end": 1104,
                    "callee": {
                      "type": "Identifier",
                      "start": 1093,
                      "end": 1101,
                      "name": "resolve2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1102,
                        "end": 1103,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
