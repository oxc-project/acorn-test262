__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 78,
  "end": 10002,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 95,
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
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
        "start": 99,
        "end": 711,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 105,
            "end": 233,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 109,
              "end": 112,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 110,
                  "end": 111,
                  "name": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 147,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 121,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 123,
                    "end": 147,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 124,
                        "end": 132,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 129,
                          "end": 132,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 131,
                            "end": 132,
                            "typeName": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 132,
                              "decorators": [],
                              "name": "T",
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
                      "start": 134,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 137,
                        "end": 147,
                        "typeName": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 144,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 144,
                          "end": 147,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 145,
                              "end": 146,
                              "typeName": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 149,
                "end": 183,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 183,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 157,
                    "end": 183,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 158,
                        "end": 168,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 163,
                          "end": 168,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 165,
                            "end": 168
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 170,
                      "end": 183,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 173,
                        "end": 183,
                        "typeName": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 180,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 180,
                          "end": 183,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 181,
                              "end": 182,
                              "typeName": {
                                "type": "Identifier",
                                "start": 181,
                                "end": 182,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 185,
                "end": 219,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 194,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 196,
                    "end": 219,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 197,
                        "end": 210,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 210,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 207,
                            "end": 210
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 215,
                        "end": 219
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 229,
                  "end": 232,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 231,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 238,
            "end": 357,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 242,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 242,
              "end": 245,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 243,
                  "end": 244,
                  "name": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 246,
                "end": 280,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 254,
                  "end": 280,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 256,
                    "end": 280,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 257,
                        "end": 265,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 262,
                          "end": 265,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 264,
                            "end": 265,
                            "typeName": {
                              "type": "Identifier",
                              "start": 264,
                              "end": 265,
                              "decorators": [],
                              "name": "T",
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
                      "start": 267,
                      "end": 280,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 270,
                        "end": 280,
                        "typeName": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 277,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 277,
                          "end": 280,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 278,
                              "end": 279,
                              "typeName": {
                                "type": "Identifier",
                                "start": 278,
                                "end": 279,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 282,
                "end": 307,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 288,
                  "end": 307,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 290,
                    "end": 307,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 291,
                        "end": 301,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 296,
                          "end": 301,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 298,
                            "end": 301
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 303,
                      "end": 307,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 306,
                        "end": 307,
                        "typeName": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 309,
                "end": 343,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 318,
                  "end": 343,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 320,
                    "end": 343,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 334,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 329,
                          "end": 334,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 331,
                            "end": 334
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 336,
                      "end": 343,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 339,
                        "end": 343
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 356,
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 353,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 353,
                  "end": 356,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 354,
                      "end": 355,
                      "typeName": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "end": 481,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 366,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 366,
              "end": 369,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 367,
                  "end": 368,
                  "name": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 395,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 378,
                  "end": 395,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 380,
                    "end": 395,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 381,
                        "end": 389,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 386,
                          "end": 389,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 388,
                            "end": 389,
                            "typeName": {
                              "type": "Identifier",
                              "start": 388,
                              "end": 389,
                              "decorators": [],
                              "name": "T",
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
                      "start": 391,
                      "end": 395,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 394,
                        "end": 395,
                        "typeName": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 395,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 397,
                "end": 431,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 403,
                  "end": 431,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 405,
                    "end": 431,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 406,
                        "end": 416,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 411,
                          "end": 416,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 413,
                            "end": 416
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 418,
                      "end": 431,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 421,
                        "end": 431,
                        "typeName": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 428,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 428,
                          "end": 431,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 429,
                              "end": 430,
                              "typeName": {
                                "type": "Identifier",
                                "start": 429,
                                "end": 430,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 433,
                "end": 467,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 442,
                  "end": 467,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 444,
                    "end": 467,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 445,
                        "end": 458,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 453,
                          "end": 458,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 455,
                            "end": 458
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 460,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 463,
                        "end": 467
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 480,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 470,
                "end": 480,
                "typeName": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 477,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 477,
                  "end": 480,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 478,
                      "end": 479,
                      "typeName": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 479,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 486,
            "end": 596,
            "key": {
              "type": "Identifier",
              "start": 486,
              "end": 490,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 490,
              "end": 493,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 491,
                  "end": 492,
                  "name": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 492,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 494,
                "end": 519,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 502,
                  "end": 519,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 504,
                    "end": 519,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 505,
                        "end": 513,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 510,
                          "end": 513,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 512,
                            "end": 513,
                            "typeName": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 513,
                              "decorators": [],
                              "name": "T",
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
                      "start": 515,
                      "end": 519,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 518,
                        "end": 519,
                        "typeName": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 519,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 521,
                "end": 546,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 527,
                  "end": 546,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 529,
                    "end": 546,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 530,
                        "end": 540,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 535,
                          "end": 540,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 537,
                            "end": 540
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 542,
                      "end": 546,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 545,
                        "end": 546,
                        "typeName": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 546,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 548,
                "end": 582,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 557,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 559,
                    "end": 582,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 560,
                        "end": 573,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 568,
                          "end": 573,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 570,
                            "end": 573
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 575,
                      "end": 582,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 578,
                        "end": 582
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 583,
              "end": 595,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 585,
                "end": 595,
                "typeName": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 592,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 592,
                  "end": 595,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 593,
                      "end": 594,
                      "typeName": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 594,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 601,
            "end": 709,
            "key": {
              "type": "Identifier",
              "start": 601,
              "end": 605,
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 605,
              "end": 608,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 606,
                  "end": 607,
                  "name": {
                    "type": "Identifier",
                    "start": 606,
                    "end": 607,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 609,
                "end": 636,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 617,
                  "end": 636,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 619,
                    "end": 636,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 620,
                        "end": 628,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 625,
                          "end": 628,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 627,
                            "end": 628,
                            "typeName": {
                              "type": "Identifier",
                              "start": 627,
                              "end": 628,
                              "decorators": [],
                              "name": "T",
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
                      "start": 630,
                      "end": 636,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 633,
                        "end": 636
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 638,
                "end": 665,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 644,
                  "end": 665,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 646,
                    "end": 665,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 647,
                        "end": 657,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 652,
                          "end": 657,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 654,
                            "end": 657
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 659,
                      "end": 665,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 662,
                        "end": 665
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 667,
                "end": 701,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 676,
                  "end": 701,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 678,
                    "end": 701,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 679,
                        "end": 692,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 687,
                          "end": 692,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 689,
                            "end": 692
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 694,
                      "end": 701,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 697,
                        "end": 701
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 708,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 704,
                "end": 708
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
      "start": 713,
      "end": 969,
      "id": {
        "type": "Identifier",
        "start": 723,
        "end": 731,
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 731,
        "end": 734,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 732,
            "end": 733,
            "name": {
              "type": "Identifier",
              "start": 732,
              "end": 733,
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
        "start": 735,
        "end": 969,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 741,
            "end": 852,
            "key": {
              "type": "Identifier",
              "start": 741,
              "end": 745,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 745,
              "end": 748,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 746,
                  "end": 747,
                  "name": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 747,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 749,
                "end": 774,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 757,
                  "end": 774,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 759,
                    "end": 774,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 760,
                        "end": 768,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 765,
                          "end": 768,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 767,
                            "end": 768,
                            "typeName": {
                              "type": "Identifier",
                              "start": 767,
                              "end": 768,
                              "decorators": [],
                              "name": "T",
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
                      "start": 770,
                      "end": 774,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 773,
                        "end": 774,
                        "typeName": {
                          "type": "Identifier",
                          "start": 773,
                          "end": 774,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 776,
                "end": 801,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 782,
                  "end": 801,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 784,
                    "end": 801,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 785,
                        "end": 795,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 790,
                          "end": 795,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 792,
                            "end": 795
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 797,
                      "end": 801,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 800,
                        "end": 801,
                        "typeName": {
                          "type": "Identifier",
                          "start": 800,
                          "end": 801,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 803,
                "end": 837,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 812,
                  "end": 837,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 814,
                    "end": 837,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 815,
                        "end": 828,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 823,
                          "end": 828,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 825,
                            "end": 828
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 830,
                      "end": 837,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 833,
                        "end": 837
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 838,
              "end": 851,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 840,
                "end": 851,
                "typeName": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 848,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 848,
                  "end": 851,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 849,
                      "end": 850,
                      "typeName": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 850,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 857,
            "end": 967,
            "key": {
              "type": "Identifier",
              "start": 857,
              "end": 861,
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 863,
              "end": 866,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 864,
                  "end": 865,
                  "name": {
                    "type": "Identifier",
                    "start": 864,
                    "end": 865,
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
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 867,
                "end": 894,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 875,
                  "end": 894,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 877,
                    "end": 894,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 878,
                        "end": 886,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 883,
                          "end": 886,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 885,
                            "end": 886,
                            "typeName": {
                              "type": "Identifier",
                              "start": 885,
                              "end": 886,
                              "decorators": [],
                              "name": "T",
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
                      "start": 888,
                      "end": 894,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 891,
                        "end": 894
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 896,
                "end": 923,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 902,
                  "end": 923,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 904,
                    "end": 923,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 905,
                        "end": 915,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 910,
                          "end": 915,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 912,
                            "end": 915
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 917,
                      "end": 923,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 920,
                        "end": 923
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 925,
                "end": 959,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 934,
                  "end": 959,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 936,
                    "end": 959,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 937,
                        "end": 950,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 945,
                          "end": 950,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 947,
                            "end": 950
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 952,
                      "end": 959,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 955,
                        "end": 959
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 960,
              "end": 966,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 962,
                "end": 966
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
      "type": "TSDeclareFunction",
      "start": 971,
      "end": 1021,
      "id": {
        "type": "Identifier",
        "start": 988,
        "end": 1000,
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1002,
        "end": 1020,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1004,
          "end": 1020,
          "typeName": {
            "type": "Identifier",
            "start": 1004,
            "end": 1012,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1012,
            "end": 1020,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1013,
                "end": 1019
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1022,
      "end": 1072,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1052,
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1054,
        "end": 1071,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1056,
          "end": 1071,
          "typeName": {
            "type": "Identifier",
            "start": 1056,
            "end": 1063,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1063,
            "end": 1071,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1064,
                "end": 1070
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1073,
      "end": 1131,
      "id": {
        "type": "Identifier",
        "start": 1090,
        "end": 1103,
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1105,
        "end": 1130,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1107,
          "end": 1130,
          "typeName": {
            "type": "Identifier",
            "start": 1107,
            "end": 1115,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1115,
            "end": 1130,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1116,
                "end": 1129,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1118,
                    "end": 1127,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1118,
                      "end": 1119,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1119,
                      "end": 1127,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1121,
                        "end": 1127
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1132,
      "end": 1190,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1163,
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1165,
        "end": 1189,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1167,
          "end": 1189,
          "typeName": {
            "type": "Identifier",
            "start": 1167,
            "end": 1174,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1174,
            "end": 1189,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1175,
                "end": 1188,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1177,
                    "end": 1186,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1177,
                      "end": 1178,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1178,
                      "end": 1186,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1180,
                        "end": 1186
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1191,
      "end": 1251,
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1221,
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1222,
          "end": 1231,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1223,
            "end": 1231,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1225,
              "end": 1231
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1232,
        "end": 1250,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1234,
          "end": 1250,
          "typeName": {
            "type": "Identifier",
            "start": 1234,
            "end": 1242,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1242,
            "end": 1250,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1243,
                "end": 1249
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1252,
      "end": 1312,
      "id": {
        "type": "Identifier",
        "start": 1269,
        "end": 1283,
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1284,
          "end": 1293,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1285,
            "end": 1293,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1287,
              "end": 1293
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1294,
        "end": 1311,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1296,
          "end": 1311,
          "typeName": {
            "type": "Identifier",
            "start": 1296,
            "end": 1303,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1303,
            "end": 1311,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1304,
                "end": 1310
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1313,
      "end": 1385,
      "id": {
        "type": "Identifier",
        "start": 1330,
        "end": 1343,
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1344,
          "end": 1353,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1345,
            "end": 1353,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1347,
              "end": 1353
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1355,
          "end": 1365,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1357,
            "end": 1365,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1359,
              "end": 1365
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1366,
        "end": 1384,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1368,
          "end": 1384,
          "typeName": {
            "type": "Identifier",
            "start": 1368,
            "end": 1376,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1376,
            "end": 1384,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1377,
                "end": 1383
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1386,
      "end": 1458,
      "id": {
        "type": "Identifier",
        "start": 1403,
        "end": 1417,
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1418,
          "end": 1427,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1419,
            "end": 1427,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1421,
              "end": 1427
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1429,
          "end": 1439,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1431,
            "end": 1439,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1433,
              "end": 1439
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1440,
        "end": 1457,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1442,
          "end": 1457,
          "typeName": {
            "type": "Identifier",
            "start": 1442,
            "end": 1449,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1449,
            "end": 1457,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1450,
                "end": 1456
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1459,
      "end": 1546,
      "id": {
        "type": "Identifier",
        "start": 1476,
        "end": 1489,
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1490,
          "end": 1499,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1491,
            "end": 1499,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1493,
              "end": 1499
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1501,
          "end": 1526,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1503,
            "end": 1526,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1505,
              "end": 1526,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1506,
                  "end": 1515,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1507,
                    "end": 1515,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1509,
                      "end": 1515
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1517,
                "end": 1526,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1520,
                  "end": 1526
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1527,
        "end": 1545,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1529,
          "end": 1545,
          "typeName": {
            "type": "Identifier",
            "start": 1529,
            "end": 1537,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1537,
            "end": 1545,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1538,
                "end": 1544
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1547,
      "end": 1634,
      "id": {
        "type": "Identifier",
        "start": 1564,
        "end": 1578,
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1579,
          "end": 1588,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1580,
            "end": 1588,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1582,
              "end": 1588
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1590,
          "end": 1615,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1592,
            "end": 1615,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1594,
              "end": 1615,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1595,
                  "end": 1604,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1596,
                    "end": 1604,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1598,
                      "end": 1604
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1606,
                "end": 1615,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1609,
                  "end": 1615
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1616,
        "end": 1633,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1618,
          "end": 1633,
          "typeName": {
            "type": "Identifier",
            "start": 1618,
            "end": 1625,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1625,
            "end": 1633,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1626,
                "end": 1632
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1635,
      "end": 1715,
      "id": {
        "type": "Identifier",
        "start": 1652,
        "end": 1665,
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1666,
          "end": 1675,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1667,
            "end": 1675,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1669,
              "end": 1675
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1677,
          "end": 1695,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1679,
            "end": 1695,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1681,
              "end": 1695,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1681,
                "end": 1684,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1682,
                    "end": 1683,
                    "name": {
                      "type": "Identifier",
                      "start": 1682,
                      "end": 1683,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1685,
                  "end": 1689,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1686,
                    "end": 1689,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1688,
                      "end": 1689,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1688,
                        "end": 1689,
                        "decorators": [],
                        "name": "T",
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
                "start": 1691,
                "end": 1695,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1694,
                  "end": 1695,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1694,
                    "end": 1695,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1696,
        "end": 1714,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1698,
          "end": 1714,
          "typeName": {
            "type": "Identifier",
            "start": 1698,
            "end": 1706,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1706,
            "end": 1714,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1707,
                "end": 1713
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1716,
      "end": 1796,
      "id": {
        "type": "Identifier",
        "start": 1733,
        "end": 1747,
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1748,
          "end": 1757,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1749,
            "end": 1757,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1751,
              "end": 1757
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1759,
          "end": 1777,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1761,
            "end": 1777,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1763,
              "end": 1777,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1763,
                "end": 1766,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1764,
                    "end": 1765,
                    "name": {
                      "type": "Identifier",
                      "start": 1764,
                      "end": 1765,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1767,
                  "end": 1771,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1768,
                    "end": 1771,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1770,
                      "end": 1771,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1770,
                        "end": 1771,
                        "decorators": [],
                        "name": "T",
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
                "start": 1773,
                "end": 1777,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1776,
                  "end": 1777,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1776,
                    "end": 1777,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1778,
        "end": 1795,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1780,
          "end": 1795,
          "typeName": {
            "type": "Identifier",
            "start": 1780,
            "end": 1787,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1787,
            "end": 1795,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1788,
                "end": 1794
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1797,
      "end": 1866,
      "id": {
        "type": "Identifier",
        "start": 1814,
        "end": 1827,
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1828,
          "end": 1846,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1830,
            "end": 1846,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1832,
              "end": 1846,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1832,
                "end": 1835,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1833,
                    "end": 1834,
                    "name": {
                      "type": "Identifier",
                      "start": 1833,
                      "end": 1834,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1840,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1837,
                    "end": 1840,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1839,
                      "end": 1840,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1839,
                        "end": 1840,
                        "decorators": [],
                        "name": "T",
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
                "start": 1842,
                "end": 1846,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1845,
                  "end": 1846,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1846,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1847,
        "end": 1865,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1849,
          "end": 1865,
          "typeName": {
            "type": "Identifier",
            "start": 1849,
            "end": 1857,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1857,
            "end": 1865,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1858,
                "end": 1864
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1867,
      "end": 1936,
      "id": {
        "type": "Identifier",
        "start": 1884,
        "end": 1898,
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1899,
          "end": 1917,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1901,
            "end": 1917,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1903,
              "end": 1917,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1903,
                "end": 1906,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1904,
                    "end": 1905,
                    "name": {
                      "type": "Identifier",
                      "start": 1904,
                      "end": 1905,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1907,
                  "end": 1911,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1908,
                    "end": 1911,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1910,
                      "end": 1911,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1910,
                        "end": 1911,
                        "decorators": [],
                        "name": "T",
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
                "start": 1913,
                "end": 1917,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1916,
                  "end": 1917,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1916,
                    "end": 1917,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1918,
        "end": 1935,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1920,
          "end": 1935,
          "typeName": {
            "type": "Identifier",
            "start": 1920,
            "end": 1927,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1927,
            "end": 1935,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1928,
                "end": 1934
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1937,
      "end": 2007,
      "id": {
        "type": "Identifier",
        "start": 1954,
        "end": 1967,
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1967,
        "end": 1970,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1968,
            "end": 1969,
            "name": {
              "type": "Identifier",
              "start": 1968,
              "end": 1969,
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
      "params": [
        {
          "type": "Identifier",
          "start": 1971,
          "end": 1975,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1972,
            "end": 1975,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1974,
              "end": 1975,
              "typeName": {
                "type": "Identifier",
                "start": 1974,
                "end": 1975,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1977,
          "end": 1992,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1979,
            "end": 1992,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1981,
              "end": 1992,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1982,
                  "end": 1986,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1983,
                    "end": 1986,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1985,
                      "end": 1986,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1985,
                        "end": 1986,
                        "decorators": [],
                        "name": "T",
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
                "start": 1988,
                "end": 1992,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1991,
                  "end": 1992,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1991,
                    "end": 1992,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1993,
        "end": 2006,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1995,
          "end": 2006,
          "typeName": {
            "type": "Identifier",
            "start": 1995,
            "end": 2003,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2003,
            "end": 2006,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2004,
                "end": 2005,
                "typeName": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2005,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2008,
      "end": 2078,
      "id": {
        "type": "Identifier",
        "start": 2025,
        "end": 2039,
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2039,
        "end": 2042,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2040,
            "end": 2041,
            "name": {
              "type": "Identifier",
              "start": 2040,
              "end": 2041,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2043,
          "end": 2047,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2044,
            "end": 2047,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2046,
              "end": 2047,
              "typeName": {
                "type": "Identifier",
                "start": 2046,
                "end": 2047,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2049,
          "end": 2064,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2051,
            "end": 2064,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2053,
              "end": 2064,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2054,
                  "end": 2058,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2055,
                    "end": 2058,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2057,
                      "end": 2058,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2057,
                        "end": 2058,
                        "decorators": [],
                        "name": "T",
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
                "start": 2060,
                "end": 2064,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2063,
                  "end": 2064,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2063,
                    "end": 2064,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2065,
        "end": 2077,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2067,
          "end": 2077,
          "typeName": {
            "type": "Identifier",
            "start": 2067,
            "end": 2074,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2074,
            "end": 2077,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2075,
                "end": 2076,
                "typeName": {
                  "type": "Identifier",
                  "start": 2075,
                  "end": 2076,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2079,
      "end": 2152,
      "id": {
        "type": "Identifier",
        "start": 2096,
        "end": 2109,
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2109,
        "end": 2112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2110,
            "end": 2111,
            "name": {
              "type": "Identifier",
              "start": 2110,
              "end": 2111,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2113,
          "end": 2117,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2114,
            "end": 2117,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2116,
              "end": 2117,
              "typeName": {
                "type": "Identifier",
                "start": 2116,
                "end": 2117,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2119,
          "end": 2137,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2121,
            "end": 2137,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2123,
              "end": 2137,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2123,
                "end": 2126,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2124,
                    "end": 2125,
                    "name": {
                      "type": "Identifier",
                      "start": 2124,
                      "end": 2125,
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
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 2127,
                  "end": 2131,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2128,
                    "end": 2131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2130,
                      "end": 2131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2130,
                        "end": 2131,
                        "decorators": [],
                        "name": "U",
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
                "start": 2133,
                "end": 2137,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2136,
                  "end": 2137,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2136,
                    "end": 2137,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2138,
        "end": 2151,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2140,
          "end": 2151,
          "typeName": {
            "type": "Identifier",
            "start": 2140,
            "end": 2148,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2148,
            "end": 2151,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2149,
                "end": 2150,
                "typeName": {
                  "type": "Identifier",
                  "start": 2149,
                  "end": 2150,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2153,
      "end": 2226,
      "id": {
        "type": "Identifier",
        "start": 2170,
        "end": 2184,
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2184,
        "end": 2187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2185,
            "end": 2186,
            "name": {
              "type": "Identifier",
              "start": 2185,
              "end": 2186,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2188,
          "end": 2192,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2189,
            "end": 2192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2191,
              "end": 2192,
              "typeName": {
                "type": "Identifier",
                "start": 2191,
                "end": 2192,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2194,
          "end": 2212,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2196,
            "end": 2212,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2198,
              "end": 2212,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2198,
                "end": 2201,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2199,
                    "end": 2200,
                    "name": {
                      "type": "Identifier",
                      "start": 2199,
                      "end": 2200,
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
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 2202,
                  "end": 2206,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2203,
                    "end": 2206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2205,
                      "end": 2206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2205,
                        "end": 2206,
                        "decorators": [],
                        "name": "U",
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
                "start": 2208,
                "end": 2212,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2211,
                  "end": 2212,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2211,
                    "end": 2212,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2213,
        "end": 2225,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2215,
          "end": 2225,
          "typeName": {
            "type": "Identifier",
            "start": 2215,
            "end": 2222,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2222,
            "end": 2225,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2223,
                "end": 2224,
                "typeName": {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2224,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2227,
      "end": 2295,
      "id": {
        "type": "Identifier",
        "start": 2244,
        "end": 2258,
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2258,
        "end": 2261,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2259,
            "end": 2260,
            "name": {
              "type": "Identifier",
              "start": 2259,
              "end": 2260,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2262,
          "end": 2280,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2264,
            "end": 2280,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2266,
              "end": 2280,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2266,
                "end": 2269,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2267,
                    "end": 2268,
                    "name": {
                      "type": "Identifier",
                      "start": 2267,
                      "end": 2268,
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
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 2270,
                  "end": 2274,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2271,
                    "end": 2274,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2273,
                      "end": 2274,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2273,
                        "end": 2274,
                        "decorators": [],
                        "name": "U",
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
                "start": 2276,
                "end": 2280,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2279,
                  "end": 2280,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2279,
                    "end": 2280,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2281,
        "end": 2294,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2283,
          "end": 2294,
          "typeName": {
            "type": "Identifier",
            "start": 2283,
            "end": 2291,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2291,
            "end": 2294,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2292,
                "end": 2293,
                "typeName": {
                  "type": "Identifier",
                  "start": 2292,
                  "end": 2293,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2296,
      "end": 2364,
      "id": {
        "type": "Identifier",
        "start": 2313,
        "end": 2328,
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2328,
        "end": 2331,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2329,
            "end": 2330,
            "name": {
              "type": "Identifier",
              "start": 2329,
              "end": 2330,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2332,
          "end": 2350,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2334,
            "end": 2350,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2336,
              "end": 2350,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2336,
                "end": 2339,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2337,
                    "end": 2338,
                    "name": {
                      "type": "Identifier",
                      "start": 2337,
                      "end": 2338,
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
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 2340,
                  "end": 2344,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2341,
                    "end": 2344,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2343,
                      "end": 2344,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2343,
                        "end": 2344,
                        "decorators": [],
                        "name": "U",
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
                "start": 2346,
                "end": 2350,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2349,
                  "end": 2350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2349,
                    "end": 2350,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2351,
        "end": 2363,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2353,
          "end": 2363,
          "typeName": {
            "type": "Identifier",
            "start": 2353,
            "end": 2360,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2360,
            "end": 2363,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2361,
                "end": 2362,
                "typeName": {
                  "type": "Identifier",
                  "start": 2361,
                  "end": 2362,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2366,
      "end": 2427,
      "id": {
        "type": "Identifier",
        "start": 2383,
        "end": 2397,
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2398,
          "end": 2407,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2399,
            "end": 2407,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2401,
              "end": 2407
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2408,
        "end": 2426,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2410,
          "end": 2426,
          "typeName": {
            "type": "Identifier",
            "start": 2410,
            "end": 2418,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2418,
            "end": 2426,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2419,
                "end": 2425
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2428,
      "end": 2489,
      "id": {
        "type": "Identifier",
        "start": 2445,
        "end": 2459,
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2460,
          "end": 2469,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2461,
            "end": 2469,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2463,
              "end": 2469
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2470,
        "end": 2488,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2472,
          "end": 2488,
          "typeName": {
            "type": "Identifier",
            "start": 2472,
            "end": 2480,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2480,
            "end": 2488,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2481,
                "end": 2487
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2490,
      "end": 2551,
      "id": {
        "type": "Identifier",
        "start": 2507,
        "end": 2522,
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2523,
          "end": 2532,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2524,
            "end": 2532,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2526,
              "end": 2532
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2533,
        "end": 2550,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2535,
          "end": 2550,
          "typeName": {
            "type": "Identifier",
            "start": 2535,
            "end": 2542,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2542,
            "end": 2550,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2543,
                "end": 2549
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2552,
      "end": 2613,
      "id": {
        "type": "Identifier",
        "start": 2569,
        "end": 2584,
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2585,
          "end": 2594,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2586,
            "end": 2594,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2588,
              "end": 2594
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2595,
        "end": 2612,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2597,
          "end": 2612,
          "typeName": {
            "type": "Identifier",
            "start": 2597,
            "end": 2604,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2604,
            "end": 2612,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2605,
                "end": 2611
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2615,
      "end": 2669,
      "id": {
        "type": "Identifier",
        "start": 2632,
        "end": 2646,
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2646,
        "end": 2649,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2647,
            "end": 2648,
            "name": {
              "type": "Identifier",
              "start": 2647,
              "end": 2648,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2650,
          "end": 2654,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2651,
            "end": 2654,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2653,
              "end": 2654,
              "typeName": {
                "type": "Identifier",
                "start": 2653,
                "end": 2654,
                "decorators": [],
                "name": "T",
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
        "start": 2655,
        "end": 2668,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2657,
          "end": 2668,
          "typeName": {
            "type": "Identifier",
            "start": 2657,
            "end": 2665,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2665,
            "end": 2668,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2666,
                "end": 2667,
                "typeName": {
                  "type": "Identifier",
                  "start": 2666,
                  "end": 2667,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2670,
      "end": 2730,
      "id": {
        "type": "Identifier",
        "start": 2687,
        "end": 2701,
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2701,
        "end": 2704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2702,
            "end": 2703,
            "name": {
              "type": "Identifier",
              "start": 2702,
              "end": 2703,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2705,
          "end": 2709,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2706,
            "end": 2709,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2708,
              "end": 2709,
              "typeName": {
                "type": "Identifier",
                "start": 2708,
                "end": 2709,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2711,
          "end": 2715,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2712,
            "end": 2715,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2714,
              "end": 2715,
              "typeName": {
                "type": "Identifier",
                "start": 2714,
                "end": 2715,
                "decorators": [],
                "name": "T",
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
        "start": 2716,
        "end": 2729,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2718,
          "end": 2729,
          "typeName": {
            "type": "Identifier",
            "start": 2718,
            "end": 2726,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2726,
            "end": 2729,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2727,
                "end": 2728,
                "typeName": {
                  "type": "Identifier",
                  "start": 2727,
                  "end": 2728,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2731,
      "end": 2786,
      "id": {
        "type": "Identifier",
        "start": 2748,
        "end": 2763,
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2763,
        "end": 2766,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2764,
            "end": 2765,
            "name": {
              "type": "Identifier",
              "start": 2764,
              "end": 2765,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2767,
          "end": 2771,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2768,
            "end": 2771,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2770,
              "end": 2771,
              "typeName": {
                "type": "Identifier",
                "start": 2770,
                "end": 2771,
                "decorators": [],
                "name": "T",
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
        "start": 2772,
        "end": 2785,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2774,
          "end": 2785,
          "typeName": {
            "type": "Identifier",
            "start": 2774,
            "end": 2782,
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2782,
            "end": 2785,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2783,
                "end": 2784,
                "typeName": {
                  "type": "Identifier",
                  "start": 2783,
                  "end": 2784,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2787,
      "end": 2847,
      "id": {
        "type": "Identifier",
        "start": 2804,
        "end": 2819,
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2819,
        "end": 2822,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2820,
            "end": 2821,
            "name": {
              "type": "Identifier",
              "start": 2820,
              "end": 2821,
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
      "params": [
        {
          "type": "Identifier",
          "start": 2823,
          "end": 2827,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2824,
            "end": 2827,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2826,
              "end": 2827,
              "typeName": {
                "type": "Identifier",
                "start": 2826,
                "end": 2827,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2829,
          "end": 2833,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2830,
            "end": 2833,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2832,
              "end": 2833,
              "typeName": {
                "type": "Identifier",
                "start": 2832,
                "end": 2833,
                "decorators": [],
                "name": "T",
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
        "start": 2834,
        "end": 2846,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2836,
          "end": 2846,
          "typeName": {
            "type": "Identifier",
            "start": 2836,
            "end": 2843,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2843,
            "end": 2846,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2844,
                "end": 2845,
                "typeName": {
                  "type": "Identifier",
                  "start": 2844,
                  "end": 2845,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2849,
      "end": 2874,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2853,
          "end": 2873,
          "id": {
            "type": "Identifier",
            "start": 2853,
            "end": 2873,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2855,
              "end": 2873,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2857,
                "end": 2873,
                "typeName": {
                  "type": "Identifier",
                  "start": 2857,
                  "end": 2865,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2865,
                  "end": 2873,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2866,
                      "end": 2872
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2875,
      "end": 2935,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2879,
          "end": 2934,
          "id": {
            "type": "Identifier",
            "start": 2879,
            "end": 2882,
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2885,
            "end": 2934,
            "callee": {
              "type": "MemberExpression",
              "start": 2885,
              "end": 2892,
              "object": {
                "type": "Identifier",
                "start": 2885,
                "end": 2887,
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2888,
                "end": 2892,
                "decorators": [],
                "name": "then",
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
                "start": 2893,
                "end": 2905,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2907,
                "end": 2919,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2921,
                "end": 2933,
                "decorators": [],
                "name": "testFunction",
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
      "start": 2936,
      "end": 3043,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2940,
          "end": 3042,
          "id": {
            "type": "Identifier",
            "start": 2940,
            "end": 2943,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2946,
            "end": 3042,
            "callee": {
              "type": "MemberExpression",
              "start": 2946,
              "end": 3000,
              "object": {
                "type": "CallExpression",
                "start": 2946,
                "end": 2995,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2946,
                  "end": 2953,
                  "object": {
                    "type": "Identifier",
                    "start": 2946,
                    "end": 2948,
                    "decorators": [],
                    "name": "r1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2949,
                    "end": 2953,
                    "decorators": [],
                    "name": "then",
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
                    "start": 2954,
                    "end": 2966,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2968,
                    "end": 2980,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2982,
                    "end": 2994,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2996,
                "end": 3000,
                "decorators": [],
                "name": "then",
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
                "start": 3001,
                "end": 3013,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3015,
                "end": 3027,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3029,
                "end": 3041,
                "decorators": [],
                "name": "testFunction",
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
      "start": 3044,
      "end": 3107,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3048,
          "end": 3106,
          "id": {
            "type": "Identifier",
            "start": 3048,
            "end": 3051,
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3054,
            "end": 3106,
            "callee": {
              "type": "MemberExpression",
              "start": 3054,
              "end": 3061,
              "object": {
                "type": "Identifier",
                "start": 3054,
                "end": 3056,
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3057,
                "end": 3061,
                "decorators": [],
                "name": "then",
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
                "start": 3062,
                "end": 3075,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3077,
                "end": 3090,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3092,
                "end": 3105,
                "decorators": [],
                "name": "testFunctionP",
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
      "start": 3108,
      "end": 3132,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3112,
          "end": 3131,
          "id": {
            "type": "Identifier",
            "start": 3112,
            "end": 3131,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3114,
              "end": 3131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3116,
                "end": 3131,
                "typeName": {
                  "type": "Identifier",
                  "start": 3116,
                  "end": 3123,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3123,
                  "end": 3131,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3124,
                      "end": 3130
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3133,
      "end": 3193,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3137,
          "end": 3192,
          "id": {
            "type": "Identifier",
            "start": 3137,
            "end": 3140,
            "decorators": [],
            "name": "s1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3143,
            "end": 3192,
            "callee": {
              "type": "MemberExpression",
              "start": 3143,
              "end": 3150,
              "object": {
                "type": "Identifier",
                "start": 3143,
                "end": 3145,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3146,
                "end": 3150,
                "decorators": [],
                "name": "then",
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
                "start": 3151,
                "end": 3163,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3165,
                "end": 3177,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3179,
                "end": 3191,
                "decorators": [],
                "name": "testFunction",
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
      "start": 3194,
      "end": 3257,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3198,
          "end": 3256,
          "id": {
            "type": "Identifier",
            "start": 3198,
            "end": 3201,
            "decorators": [],
            "name": "s1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3204,
            "end": 3256,
            "callee": {
              "type": "MemberExpression",
              "start": 3204,
              "end": 3211,
              "object": {
                "type": "Identifier",
                "start": 3204,
                "end": 3206,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3207,
                "end": 3211,
                "decorators": [],
                "name": "then",
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
                "start": 3212,
                "end": 3225,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3227,
                "end": 3240,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3242,
                "end": 3255,
                "decorators": [],
                "name": "testFunctionP",
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
      "start": 3258,
      "end": 3319,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3262,
          "end": 3318,
          "id": {
            "type": "Identifier",
            "start": 3262,
            "end": 3265,
            "decorators": [],
            "name": "s1c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3268,
            "end": 3318,
            "callee": {
              "type": "MemberExpression",
              "start": 3268,
              "end": 3275,
              "object": {
                "type": "Identifier",
                "start": 3268,
                "end": 3270,
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3271,
                "end": 3275,
                "decorators": [],
                "name": "then",
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
                "start": 3276,
                "end": 3289,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3291,
                "end": 3303,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3305,
                "end": 3317,
                "decorators": [],
                "name": "testFunction",
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
      "start": 3320,
      "end": 3428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3324,
          "end": 3427,
          "id": {
            "type": "Identifier",
            "start": 3324,
            "end": 3327,
            "decorators": [],
            "name": "s1d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3330,
            "end": 3427,
            "callee": {
              "type": "MemberExpression",
              "start": 3330,
              "end": 3385,
              "object": {
                "type": "CallExpression",
                "start": 3330,
                "end": 3380,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3330,
                  "end": 3337,
                  "object": {
                    "type": "Identifier",
                    "start": 3330,
                    "end": 3332,
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3333,
                    "end": 3337,
                    "decorators": [],
                    "name": "then",
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
                    "start": 3338,
                    "end": 3351,
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3353,
                    "end": 3365,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3367,
                    "end": 3379,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3381,
                "end": 3385,
                "decorators": [],
                "name": "then",
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
                "start": 3386,
                "end": 3398,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3400,
                "end": 3412,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3414,
                "end": 3426,
                "decorators": [],
                "name": "testFunction",
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
      "start": 3430,
      "end": 3463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3434,
          "end": 3462,
          "id": {
            "type": "Identifier",
            "start": 3434,
            "end": 3462,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3436,
              "end": 3462,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3438,
                "end": 3462,
                "typeName": {
                  "type": "Identifier",
                  "start": 3438,
                  "end": 3446,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3446,
                  "end": 3462,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3447,
                      "end": 3461,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3449,
                          "end": 3459,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3449,
                            "end": 3450,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3450,
                            "end": 3458,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3452,
                              "end": 3458
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3464,
      "end": 3527,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3468,
          "end": 3526,
          "id": {
            "type": "Identifier",
            "start": 3468,
            "end": 3471,
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3474,
            "end": 3526,
            "callee": {
              "type": "MemberExpression",
              "start": 3474,
              "end": 3481,
              "object": {
                "type": "Identifier",
                "start": 3474,
                "end": 3476,
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3477,
                "end": 3481,
                "decorators": [],
                "name": "then",
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
                "start": 3482,
                "end": 3495,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3497,
                "end": 3510,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3512,
                "end": 3525,
                "decorators": [],
                "name": "testFunction2",
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
      "start": 3528,
      "end": 3641,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3532,
          "end": 3640,
          "id": {
            "type": "Identifier",
            "start": 3532,
            "end": 3535,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3538,
            "end": 3640,
            "callee": {
              "type": "MemberExpression",
              "start": 3538,
              "end": 3595,
              "object": {
                "type": "CallExpression",
                "start": 3538,
                "end": 3590,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3538,
                  "end": 3545,
                  "object": {
                    "type": "Identifier",
                    "start": 3538,
                    "end": 3540,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3541,
                    "end": 3545,
                    "decorators": [],
                    "name": "then",
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
                    "start": 3546,
                    "end": 3559,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3561,
                    "end": 3574,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3576,
                    "end": 3589,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3591,
                "end": 3595,
                "decorators": [],
                "name": "then",
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
                "start": 3596,
                "end": 3609,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3611,
                "end": 3624,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3626,
                "end": 3639,
                "decorators": [],
                "name": "testFunction2",
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
      "start": 3642,
      "end": 3674,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3646,
          "end": 3673,
          "id": {
            "type": "Identifier",
            "start": 3646,
            "end": 3673,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3648,
              "end": 3673,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3650,
                "end": 3673,
                "typeName": {
                  "type": "Identifier",
                  "start": 3650,
                  "end": 3657,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3657,
                  "end": 3673,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3658,
                      "end": 3672,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3660,
                          "end": 3670,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3660,
                            "end": 3661,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3661,
                            "end": 3669,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3663,
                              "end": 3669
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3675,
      "end": 3738,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3679,
          "end": 3737,
          "id": {
            "type": "Identifier",
            "start": 3679,
            "end": 3682,
            "decorators": [],
            "name": "s2a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3685,
            "end": 3737,
            "callee": {
              "type": "MemberExpression",
              "start": 3685,
              "end": 3692,
              "object": {
                "type": "Identifier",
                "start": 3685,
                "end": 3687,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3688,
                "end": 3692,
                "decorators": [],
                "name": "then",
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
                "start": 3693,
                "end": 3706,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3708,
                "end": 3721,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3723,
                "end": 3736,
                "decorators": [],
                "name": "testFunction2",
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
      "start": 3739,
      "end": 3805,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3743,
          "end": 3804,
          "id": {
            "type": "Identifier",
            "start": 3743,
            "end": 3746,
            "decorators": [],
            "name": "s2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3749,
            "end": 3804,
            "callee": {
              "type": "MemberExpression",
              "start": 3749,
              "end": 3756,
              "object": {
                "type": "Identifier",
                "start": 3749,
                "end": 3751,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3752,
                "end": 3756,
                "decorators": [],
                "name": "then",
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
                "start": 3757,
                "end": 3771,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3773,
                "end": 3787,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3789,
                "end": 3803,
                "decorators": [],
                "name": "testFunction2P",
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
      "start": 3806,
      "end": 3870,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3810,
          "end": 3869,
          "id": {
            "type": "Identifier",
            "start": 3810,
            "end": 3813,
            "decorators": [],
            "name": "s2c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3816,
            "end": 3869,
            "callee": {
              "type": "MemberExpression",
              "start": 3816,
              "end": 3823,
              "object": {
                "type": "Identifier",
                "start": 3816,
                "end": 3818,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3819,
                "end": 3823,
                "decorators": [],
                "name": "then",
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
                "start": 3824,
                "end": 3838,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3840,
                "end": 3853,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3855,
                "end": 3868,
                "decorators": [],
                "name": "testFunction2",
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
      "start": 3871,
      "end": 3985,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3875,
          "end": 3984,
          "id": {
            "type": "Identifier",
            "start": 3875,
            "end": 3878,
            "decorators": [],
            "name": "s2d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3881,
            "end": 3984,
            "callee": {
              "type": "MemberExpression",
              "start": 3881,
              "end": 3939,
              "object": {
                "type": "CallExpression",
                "start": 3881,
                "end": 3934,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3881,
                  "end": 3888,
                  "object": {
                    "type": "Identifier",
                    "start": 3881,
                    "end": 3883,
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3884,
                    "end": 3888,
                    "decorators": [],
                    "name": "then",
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
                    "start": 3889,
                    "end": 3903,
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3905,
                    "end": 3918,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 3920,
                    "end": 3933,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3935,
                "end": 3939,
                "decorators": [],
                "name": "then",
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
                "start": 3940,
                "end": 3953,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3955,
                "end": 3968,
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3970,
                "end": 3983,
                "decorators": [],
                "name": "testFunction2",
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
      "start": 3987,
      "end": 4012,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3991,
          "end": 4011,
          "id": {
            "type": "Identifier",
            "start": 3991,
            "end": 4011,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3993,
              "end": 4011,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3995,
                "end": 4011,
                "typeName": {
                  "type": "Identifier",
                  "start": 3995,
                  "end": 4003,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4003,
                  "end": 4011,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4004,
                      "end": 4010
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4013,
      "end": 4076,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4017,
          "end": 4075,
          "id": {
            "type": "Identifier",
            "start": 4017,
            "end": 4020,
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4023,
            "end": 4075,
            "callee": {
              "type": "MemberExpression",
              "start": 4023,
              "end": 4030,
              "object": {
                "type": "Identifier",
                "start": 4023,
                "end": 4025,
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4026,
                "end": 4030,
                "decorators": [],
                "name": "then",
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
                "start": 4031,
                "end": 4044,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4046,
                "end": 4059,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4061,
                "end": 4074,
                "decorators": [],
                "name": "testFunction3",
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
      "start": 4077,
      "end": 4190,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4081,
          "end": 4189,
          "id": {
            "type": "Identifier",
            "start": 4081,
            "end": 4084,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4087,
            "end": 4189,
            "callee": {
              "type": "MemberExpression",
              "start": 4087,
              "end": 4144,
              "object": {
                "type": "CallExpression",
                "start": 4087,
                "end": 4139,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4087,
                  "end": 4094,
                  "object": {
                    "type": "Identifier",
                    "start": 4087,
                    "end": 4089,
                    "decorators": [],
                    "name": "r3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4090,
                    "end": 4094,
                    "decorators": [],
                    "name": "then",
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
                    "start": 4095,
                    "end": 4108,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 4110,
                    "end": 4123,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 4125,
                    "end": 4138,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4140,
                "end": 4144,
                "decorators": [],
                "name": "then",
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
                "start": 4145,
                "end": 4158,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4160,
                "end": 4173,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4175,
                "end": 4188,
                "decorators": [],
                "name": "testFunction3",
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
      "start": 4191,
      "end": 4215,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4195,
          "end": 4214,
          "id": {
            "type": "Identifier",
            "start": 4195,
            "end": 4214,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4197,
              "end": 4214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4199,
                "end": 4214,
                "typeName": {
                  "type": "Identifier",
                  "start": 4199,
                  "end": 4206,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4206,
                  "end": 4214,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4207,
                      "end": 4213
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4216,
      "end": 4279,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4220,
          "end": 4278,
          "id": {
            "type": "Identifier",
            "start": 4220,
            "end": 4223,
            "decorators": [],
            "name": "s3a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4226,
            "end": 4278,
            "callee": {
              "type": "MemberExpression",
              "start": 4226,
              "end": 4233,
              "object": {
                "type": "Identifier",
                "start": 4226,
                "end": 4228,
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4229,
                "end": 4233,
                "decorators": [],
                "name": "then",
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
                "start": 4234,
                "end": 4247,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4249,
                "end": 4262,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4264,
                "end": 4277,
                "decorators": [],
                "name": "testFunction3",
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
      "start": 4280,
      "end": 4346,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4284,
          "end": 4345,
          "id": {
            "type": "Identifier",
            "start": 4284,
            "end": 4287,
            "decorators": [],
            "name": "s3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4290,
            "end": 4345,
            "callee": {
              "type": "MemberExpression",
              "start": 4290,
              "end": 4297,
              "object": {
                "type": "Identifier",
                "start": 4290,
                "end": 4292,
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4293,
                "end": 4297,
                "decorators": [],
                "name": "then",
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
                "start": 4298,
                "end": 4312,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4314,
                "end": 4328,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4330,
                "end": 4344,
                "decorators": [],
                "name": "testFunction3P",
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
      "start": 4347,
      "end": 4411,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4351,
          "end": 4410,
          "id": {
            "type": "Identifier",
            "start": 4351,
            "end": 4354,
            "decorators": [],
            "name": "s3c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4357,
            "end": 4410,
            "callee": {
              "type": "MemberExpression",
              "start": 4357,
              "end": 4364,
              "object": {
                "type": "Identifier",
                "start": 4357,
                "end": 4359,
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4360,
                "end": 4364,
                "decorators": [],
                "name": "then",
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
                "start": 4365,
                "end": 4379,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4381,
                "end": 4394,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4396,
                "end": 4409,
                "decorators": [],
                "name": "testFunction3",
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
      "start": 4412,
      "end": 4526,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4416,
          "end": 4525,
          "id": {
            "type": "Identifier",
            "start": 4416,
            "end": 4419,
            "decorators": [],
            "name": "s3d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4422,
            "end": 4525,
            "callee": {
              "type": "MemberExpression",
              "start": 4422,
              "end": 4480,
              "object": {
                "type": "CallExpression",
                "start": 4422,
                "end": 4475,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4422,
                  "end": 4429,
                  "object": {
                    "type": "Identifier",
                    "start": 4422,
                    "end": 4424,
                    "decorators": [],
                    "name": "s3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4425,
                    "end": 4429,
                    "decorators": [],
                    "name": "then",
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
                    "start": 4430,
                    "end": 4444,
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 4446,
                    "end": 4459,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 4461,
                    "end": 4474,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4476,
                "end": 4480,
                "decorators": [],
                "name": "then",
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
                "start": 4481,
                "end": 4494,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4496,
                "end": 4509,
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4511,
                "end": 4524,
                "decorators": [],
                "name": "testFunction3",
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
      "start": 4528,
      "end": 4553,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4532,
          "end": 4552,
          "id": {
            "type": "Identifier",
            "start": 4532,
            "end": 4552,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4534,
              "end": 4552,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4536,
                "end": 4552,
                "typeName": {
                  "type": "Identifier",
                  "start": 4536,
                  "end": 4544,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4544,
                  "end": 4552,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4545,
                      "end": 4551
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4554,
      "end": 4598,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4558,
          "end": 4597,
          "id": {
            "type": "Identifier",
            "start": 4558,
            "end": 4597,
            "decorators": [],
            "name": "sIPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4567,
              "end": 4597,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4569,
                "end": 4597,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4570,
                    "end": 4576,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4571,
                      "end": 4576,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4573,
                        "end": 4576
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4578,
                  "end": 4597,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4581,
                    "end": 4597,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4581,
                      "end": 4589,
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4589,
                      "end": 4597,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4590,
                          "end": 4596
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4599,
      "end": 4641,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4603,
          "end": 4640,
          "id": {
            "type": "Identifier",
            "start": 4603,
            "end": 4640,
            "decorators": [],
            "name": "sPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4611,
              "end": 4640,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4613,
                "end": 4640,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4614,
                    "end": 4620,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4615,
                      "end": 4620,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4617,
                        "end": 4620
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4622,
                  "end": 4640,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4625,
                    "end": 4640,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4625,
                      "end": 4632,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4632,
                      "end": 4640,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4633,
                          "end": 4639
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4642,
      "end": 4705,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4646,
          "end": 4704,
          "id": {
            "type": "Identifier",
            "start": 4646,
            "end": 4649,
            "decorators": [],
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4652,
            "end": 4704,
            "callee": {
              "type": "MemberExpression",
              "start": 4652,
              "end": 4659,
              "object": {
                "type": "Identifier",
                "start": 4652,
                "end": 4654,
                "decorators": [],
                "name": "r4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4655,
                "end": 4659,
                "decorators": [],
                "name": "then",
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
                "start": 4660,
                "end": 4673,
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4675,
                "end": 4688,
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4690,
                "end": 4703,
                "decorators": [],
                "name": "testFunction4",
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
      "start": 4715,
      "end": 4820,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4719,
          "end": 4819,
          "id": {
            "type": "Identifier",
            "start": 4719,
            "end": 4722,
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4725,
            "end": 4819,
            "callee": {
              "type": "MemberExpression",
              "start": 4725,
              "end": 4778,
              "object": {
                "type": "CallExpression",
                "start": 4725,
                "end": 4773,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4725,
                  "end": 4732,
                  "object": {
                    "type": "Identifier",
                    "start": 4725,
                    "end": 4727,
                    "decorators": [],
                    "name": "r4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4728,
                    "end": 4732,
                    "decorators": [],
                    "name": "then",
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
                    "start": 4733,
                    "end": 4742,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 4744,
                    "end": 4757,
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 4759,
                    "end": 4772,
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4774,
                "end": 4778,
                "decorators": [],
                "name": "then",
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
                "start": 4779,
                "end": 4788,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4790,
                "end": 4803,
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4805,
                "end": 4818,
                "decorators": [],
                "name": "testFunction4",
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
      "start": 4827,
      "end": 4851,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4831,
          "end": 4850,
          "id": {
            "type": "Identifier",
            "start": 4831,
            "end": 4850,
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4833,
              "end": 4850,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4835,
                "end": 4850,
                "typeName": {
                  "type": "Identifier",
                  "start": 4835,
                  "end": 4842,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4842,
                  "end": 4850,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4843,
                      "end": 4849
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4852,
      "end": 4915,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4856,
          "end": 4914,
          "id": {
            "type": "Identifier",
            "start": 4856,
            "end": 4859,
            "decorators": [],
            "name": "s4a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4862,
            "end": 4914,
            "callee": {
              "type": "MemberExpression",
              "start": 4862,
              "end": 4869,
              "object": {
                "type": "Identifier",
                "start": 4862,
                "end": 4864,
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4865,
                "end": 4869,
                "decorators": [],
                "name": "then",
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
                "start": 4870,
                "end": 4883,
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4885,
                "end": 4898,
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4900,
                "end": 4913,
                "decorators": [],
                "name": "testFunction4",
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
      "start": 4925,
      "end": 4991,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4929,
          "end": 4990,
          "id": {
            "type": "Identifier",
            "start": 4929,
            "end": 4932,
            "decorators": [],
            "name": "s4b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4935,
            "end": 4990,
            "callee": {
              "type": "MemberExpression",
              "start": 4935,
              "end": 4942,
              "object": {
                "type": "Identifier",
                "start": 4935,
                "end": 4937,
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4938,
                "end": 4942,
                "decorators": [],
                "name": "then",
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
                "start": 4943,
                "end": 4957,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4959,
                "end": 4973,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4975,
                "end": 4989,
                "decorators": [],
                "name": "testFunction4P",
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
      "start": 5002,
      "end": 5066,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5006,
          "end": 5065,
          "id": {
            "type": "Identifier",
            "start": 5006,
            "end": 5009,
            "decorators": [],
            "name": "s4c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5012,
            "end": 5065,
            "callee": {
              "type": "MemberExpression",
              "start": 5012,
              "end": 5019,
              "object": {
                "type": "Identifier",
                "start": 5012,
                "end": 5014,
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5015,
                "end": 5019,
                "decorators": [],
                "name": "then",
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
                "start": 5020,
                "end": 5034,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5036,
                "end": 5049,
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5051,
                "end": 5064,
                "decorators": [],
                "name": "testFunction4",
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
      "start": 5076,
      "end": 5183,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5080,
          "end": 5182,
          "id": {
            "type": "Identifier",
            "start": 5080,
            "end": 5083,
            "decorators": [],
            "name": "s4d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5086,
            "end": 5182,
            "callee": {
              "type": "MemberExpression",
              "start": 5086,
              "end": 5140,
              "object": {
                "type": "CallExpression",
                "start": 5086,
                "end": 5135,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5086,
                  "end": 5093,
                  "object": {
                    "type": "Identifier",
                    "start": 5086,
                    "end": 5088,
                    "decorators": [],
                    "name": "s4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5089,
                    "end": 5093,
                    "decorators": [],
                    "name": "then",
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
                    "start": 5094,
                    "end": 5103,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5105,
                    "end": 5119,
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5121,
                    "end": 5134,
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5136,
                "end": 5140,
                "decorators": [],
                "name": "then",
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
                "start": 5141,
                "end": 5150,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5152,
                "end": 5166,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5168,
                "end": 5181,
                "decorators": [],
                "name": "testFunction4",
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
      "start": 5185,
      "end": 5210,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5189,
          "end": 5209,
          "id": {
            "type": "Identifier",
            "start": 5189,
            "end": 5209,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5191,
              "end": 5209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5193,
                "end": 5209,
                "typeName": {
                  "type": "Identifier",
                  "start": 5193,
                  "end": 5201,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5201,
                  "end": 5209,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5202,
                      "end": 5208
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5211,
      "end": 5274,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5215,
          "end": 5273,
          "id": {
            "type": "Identifier",
            "start": 5215,
            "end": 5218,
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5221,
            "end": 5273,
            "callee": {
              "type": "MemberExpression",
              "start": 5221,
              "end": 5228,
              "object": {
                "type": "Identifier",
                "start": 5221,
                "end": 5223,
                "decorators": [],
                "name": "r5",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5224,
                "end": 5228,
                "decorators": [],
                "name": "then",
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
                "start": 5229,
                "end": 5242,
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5244,
                "end": 5257,
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5259,
                "end": 5272,
                "decorators": [],
                "name": "testFunction5",
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
      "start": 5284,
      "end": 5373,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5288,
          "end": 5372,
          "id": {
            "type": "Identifier",
            "start": 5288,
            "end": 5291,
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5294,
            "end": 5372,
            "callee": {
              "type": "MemberExpression",
              "start": 5294,
              "end": 5339,
              "object": {
                "type": "CallExpression",
                "start": 5294,
                "end": 5334,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5294,
                  "end": 5301,
                  "object": {
                    "type": "Identifier",
                    "start": 5294,
                    "end": 5296,
                    "decorators": [],
                    "name": "r5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5297,
                    "end": 5301,
                    "decorators": [],
                    "name": "then",
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
                    "start": 5302,
                    "end": 5311,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5313,
                    "end": 5322,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5324,
                    "end": 5333,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5335,
                "end": 5339,
                "decorators": [],
                "name": "then",
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
                "start": 5340,
                "end": 5349,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5351,
                "end": 5360,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5362,
                "end": 5371,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 5380,
      "end": 5404,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5384,
          "end": 5403,
          "id": {
            "type": "Identifier",
            "start": 5384,
            "end": 5403,
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5386,
              "end": 5403,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5388,
                "end": 5403,
                "typeName": {
                  "type": "Identifier",
                  "start": 5388,
                  "end": 5395,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5395,
                  "end": 5403,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5396,
                      "end": 5402
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5405,
      "end": 5468,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5409,
          "end": 5467,
          "id": {
            "type": "Identifier",
            "start": 5409,
            "end": 5412,
            "decorators": [],
            "name": "s5a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5415,
            "end": 5467,
            "callee": {
              "type": "MemberExpression",
              "start": 5415,
              "end": 5422,
              "object": {
                "type": "Identifier",
                "start": 5415,
                "end": 5417,
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5418,
                "end": 5422,
                "decorators": [],
                "name": "then",
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
                "start": 5423,
                "end": 5436,
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5438,
                "end": 5451,
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5453,
                "end": 5466,
                "decorators": [],
                "name": "testFunction5",
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
      "start": 5478,
      "end": 5544,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5482,
          "end": 5543,
          "id": {
            "type": "Identifier",
            "start": 5482,
            "end": 5485,
            "decorators": [],
            "name": "s5b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5488,
            "end": 5543,
            "callee": {
              "type": "MemberExpression",
              "start": 5488,
              "end": 5495,
              "object": {
                "type": "Identifier",
                "start": 5488,
                "end": 5490,
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5491,
                "end": 5495,
                "decorators": [],
                "name": "then",
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
                "start": 5496,
                "end": 5510,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5512,
                "end": 5526,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5528,
                "end": 5542,
                "decorators": [],
                "name": "testFunction5P",
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
      "start": 5554,
      "end": 5618,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5558,
          "end": 5617,
          "id": {
            "type": "Identifier",
            "start": 5558,
            "end": 5561,
            "decorators": [],
            "name": "s5c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5564,
            "end": 5617,
            "callee": {
              "type": "MemberExpression",
              "start": 5564,
              "end": 5571,
              "object": {
                "type": "Identifier",
                "start": 5564,
                "end": 5566,
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5567,
                "end": 5571,
                "decorators": [],
                "name": "then",
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
                "start": 5572,
                "end": 5586,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5588,
                "end": 5601,
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5603,
                "end": 5616,
                "decorators": [],
                "name": "testFunction5",
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
      "start": 5628,
      "end": 5714,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5632,
          "end": 5713,
          "id": {
            "type": "Identifier",
            "start": 5632,
            "end": 5635,
            "decorators": [],
            "name": "s5d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5638,
            "end": 5713,
            "callee": {
              "type": "MemberExpression",
              "start": 5638,
              "end": 5680,
              "object": {
                "type": "CallExpression",
                "start": 5638,
                "end": 5675,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5638,
                  "end": 5645,
                  "object": {
                    "type": "Identifier",
                    "start": 5638,
                    "end": 5640,
                    "decorators": [],
                    "name": "s5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5641,
                    "end": 5645,
                    "decorators": [],
                    "name": "then",
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
                    "start": 5646,
                    "end": 5654,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5656,
                    "end": 5664,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5666,
                    "end": 5674,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5676,
                "end": 5680,
                "decorators": [],
                "name": "then",
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
                "start": 5681,
                "end": 5690,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5692,
                "end": 5701,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5703,
                "end": 5712,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 5722,
      "end": 5747,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5726,
          "end": 5746,
          "id": {
            "type": "Identifier",
            "start": 5726,
            "end": 5746,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5728,
              "end": 5746,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5730,
                "end": 5746,
                "typeName": {
                  "type": "Identifier",
                  "start": 5730,
                  "end": 5738,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5738,
                  "end": 5746,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5739,
                      "end": 5745
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5748,
      "end": 5811,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5752,
          "end": 5810,
          "id": {
            "type": "Identifier",
            "start": 5752,
            "end": 5755,
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5758,
            "end": 5810,
            "callee": {
              "type": "MemberExpression",
              "start": 5758,
              "end": 5765,
              "object": {
                "type": "Identifier",
                "start": 5758,
                "end": 5760,
                "decorators": [],
                "name": "r6",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5761,
                "end": 5765,
                "decorators": [],
                "name": "then",
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
                "start": 5766,
                "end": 5779,
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5781,
                "end": 5794,
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5796,
                "end": 5809,
                "decorators": [],
                "name": "testFunction6",
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
      "start": 5821,
      "end": 5910,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5825,
          "end": 5909,
          "id": {
            "type": "Identifier",
            "start": 5825,
            "end": 5828,
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5831,
            "end": 5909,
            "callee": {
              "type": "MemberExpression",
              "start": 5831,
              "end": 5876,
              "object": {
                "type": "CallExpression",
                "start": 5831,
                "end": 5871,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5831,
                  "end": 5838,
                  "object": {
                    "type": "Identifier",
                    "start": 5831,
                    "end": 5833,
                    "decorators": [],
                    "name": "r6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5834,
                    "end": 5838,
                    "decorators": [],
                    "name": "then",
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
                    "start": 5839,
                    "end": 5848,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5850,
                    "end": 5859,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 5861,
                    "end": 5870,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5872,
                "end": 5876,
                "decorators": [],
                "name": "then",
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
                "start": 5877,
                "end": 5886,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5888,
                "end": 5897,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5899,
                "end": 5908,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 5917,
      "end": 5941,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5921,
          "end": 5940,
          "id": {
            "type": "Identifier",
            "start": 5921,
            "end": 5940,
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5923,
              "end": 5940,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5925,
                "end": 5940,
                "typeName": {
                  "type": "Identifier",
                  "start": 5925,
                  "end": 5932,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5932,
                  "end": 5940,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5933,
                      "end": 5939
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 5942,
      "end": 6005,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5946,
          "end": 6004,
          "id": {
            "type": "Identifier",
            "start": 5946,
            "end": 5949,
            "decorators": [],
            "name": "s6a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 5952,
            "end": 6004,
            "callee": {
              "type": "MemberExpression",
              "start": 5952,
              "end": 5959,
              "object": {
                "type": "Identifier",
                "start": 5952,
                "end": 5954,
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5955,
                "end": 5959,
                "decorators": [],
                "name": "then",
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
                "start": 5960,
                "end": 5973,
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5975,
                "end": 5988,
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 5990,
                "end": 6003,
                "decorators": [],
                "name": "testFunction6",
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
      "start": 6015,
      "end": 6081,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6019,
          "end": 6080,
          "id": {
            "type": "Identifier",
            "start": 6019,
            "end": 6022,
            "decorators": [],
            "name": "s6b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6025,
            "end": 6080,
            "callee": {
              "type": "MemberExpression",
              "start": 6025,
              "end": 6032,
              "object": {
                "type": "Identifier",
                "start": 6025,
                "end": 6027,
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6028,
                "end": 6032,
                "decorators": [],
                "name": "then",
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
                "start": 6033,
                "end": 6047,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6049,
                "end": 6063,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6065,
                "end": 6079,
                "decorators": [],
                "name": "testFunction6P",
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
      "start": 6091,
      "end": 6155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6095,
          "end": 6154,
          "id": {
            "type": "Identifier",
            "start": 6095,
            "end": 6098,
            "decorators": [],
            "name": "s6c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6101,
            "end": 6154,
            "callee": {
              "type": "MemberExpression",
              "start": 6101,
              "end": 6108,
              "object": {
                "type": "Identifier",
                "start": 6101,
                "end": 6103,
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6104,
                "end": 6108,
                "decorators": [],
                "name": "then",
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
                "start": 6109,
                "end": 6123,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6125,
                "end": 6138,
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6140,
                "end": 6153,
                "decorators": [],
                "name": "testFunction6",
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
      "start": 6165,
      "end": 6251,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6169,
          "end": 6250,
          "id": {
            "type": "Identifier",
            "start": 6169,
            "end": 6172,
            "decorators": [],
            "name": "s6d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6175,
            "end": 6250,
            "callee": {
              "type": "MemberExpression",
              "start": 6175,
              "end": 6217,
              "object": {
                "type": "CallExpression",
                "start": 6175,
                "end": 6212,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6175,
                  "end": 6182,
                  "object": {
                    "type": "Identifier",
                    "start": 6175,
                    "end": 6177,
                    "decorators": [],
                    "name": "s6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6178,
                    "end": 6182,
                    "decorators": [],
                    "name": "then",
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
                    "start": 6183,
                    "end": 6191,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 6193,
                    "end": 6201,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 6203,
                    "end": 6211,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6213,
                "end": 6217,
                "decorators": [],
                "name": "then",
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
                "start": 6218,
                "end": 6227,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6229,
                "end": 6238,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6240,
                "end": 6249,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 6259,
      "end": 6284,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6263,
          "end": 6283,
          "id": {
            "type": "Identifier",
            "start": 6263,
            "end": 6283,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6265,
              "end": 6283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6267,
                "end": 6283,
                "typeName": {
                  "type": "Identifier",
                  "start": 6267,
                  "end": 6275,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6275,
                  "end": 6283,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6276,
                      "end": 6282
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6285,
      "end": 6348,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6289,
          "end": 6347,
          "id": {
            "type": "Identifier",
            "start": 6289,
            "end": 6292,
            "decorators": [],
            "name": "r7a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6295,
            "end": 6347,
            "callee": {
              "type": "MemberExpression",
              "start": 6295,
              "end": 6302,
              "object": {
                "type": "Identifier",
                "start": 6295,
                "end": 6297,
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6298,
                "end": 6302,
                "decorators": [],
                "name": "then",
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
                "start": 6303,
                "end": 6316,
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6318,
                "end": 6331,
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6333,
                "end": 6346,
                "decorators": [],
                "name": "testFunction7",
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
      "start": 6358,
      "end": 6447,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6362,
          "end": 6446,
          "id": {
            "type": "Identifier",
            "start": 6362,
            "end": 6365,
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6368,
            "end": 6446,
            "callee": {
              "type": "MemberExpression",
              "start": 6368,
              "end": 6413,
              "object": {
                "type": "CallExpression",
                "start": 6368,
                "end": 6408,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6368,
                  "end": 6375,
                  "object": {
                    "type": "Identifier",
                    "start": 6368,
                    "end": 6370,
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6371,
                    "end": 6375,
                    "decorators": [],
                    "name": "then",
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
                    "start": 6376,
                    "end": 6385,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 6387,
                    "end": 6396,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 6398,
                    "end": 6407,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6409,
                "end": 6413,
                "decorators": [],
                "name": "then",
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
                "start": 6414,
                "end": 6423,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6425,
                "end": 6434,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6436,
                "end": 6445,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 6454,
      "end": 6478,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6458,
          "end": 6477,
          "id": {
            "type": "Identifier",
            "start": 6458,
            "end": 6477,
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6460,
              "end": 6477,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6462,
                "end": 6477,
                "typeName": {
                  "type": "Identifier",
                  "start": 6462,
                  "end": 6469,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6469,
                  "end": 6477,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6470,
                      "end": 6476
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6479,
      "end": 6542,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6483,
          "end": 6541,
          "id": {
            "type": "Identifier",
            "start": 6483,
            "end": 6486,
            "decorators": [],
            "name": "s7a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6489,
            "end": 6541,
            "callee": {
              "type": "MemberExpression",
              "start": 6489,
              "end": 6496,
              "object": {
                "type": "Identifier",
                "start": 6489,
                "end": 6491,
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6492,
                "end": 6496,
                "decorators": [],
                "name": "then",
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
                "start": 6497,
                "end": 6510,
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6512,
                "end": 6525,
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6527,
                "end": 6540,
                "decorators": [],
                "name": "testFunction7",
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
      "start": 6552,
      "end": 6618,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6556,
          "end": 6617,
          "id": {
            "type": "Identifier",
            "start": 6556,
            "end": 6559,
            "decorators": [],
            "name": "s7b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6562,
            "end": 6617,
            "callee": {
              "type": "MemberExpression",
              "start": 6562,
              "end": 6569,
              "object": {
                "type": "Identifier",
                "start": 6562,
                "end": 6564,
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6565,
                "end": 6569,
                "decorators": [],
                "name": "then",
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
                "start": 6570,
                "end": 6584,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6586,
                "end": 6600,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6602,
                "end": 6616,
                "decorators": [],
                "name": "testFunction7P",
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
      "start": 6628,
      "end": 6692,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6632,
          "end": 6691,
          "id": {
            "type": "Identifier",
            "start": 6632,
            "end": 6635,
            "decorators": [],
            "name": "s7c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6638,
            "end": 6691,
            "callee": {
              "type": "MemberExpression",
              "start": 6638,
              "end": 6645,
              "object": {
                "type": "Identifier",
                "start": 6638,
                "end": 6640,
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6641,
                "end": 6645,
                "decorators": [],
                "name": "then",
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
                "start": 6646,
                "end": 6660,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6662,
                "end": 6675,
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6677,
                "end": 6690,
                "decorators": [],
                "name": "testFunction7",
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
      "start": 6702,
      "end": 6785,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6706,
          "end": 6784,
          "id": {
            "type": "Identifier",
            "start": 6706,
            "end": 6709,
            "decorators": [],
            "name": "s7d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6712,
            "end": 6784,
            "callee": {
              "type": "MemberExpression",
              "start": 6712,
              "end": 6754,
              "object": {
                "type": "CallExpression",
                "start": 6712,
                "end": 6749,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6712,
                  "end": 6719,
                  "object": {
                    "type": "Identifier",
                    "start": 6712,
                    "end": 6714,
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6715,
                    "end": 6719,
                    "decorators": [],
                    "name": "then",
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
                    "start": 6720,
                    "end": 6728,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 6730,
                    "end": 6738,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 6740,
                    "end": 6748,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6750,
                "end": 6754,
                "decorators": [],
                "name": "then",
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
                "start": 6755,
                "end": 6763,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6765,
                "end": 6773,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6775,
                "end": 6783,
                "decorators": [],
                "name": "sPromise",
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
      "start": 6794,
      "end": 6819,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6798,
          "end": 6818,
          "id": {
            "type": "Identifier",
            "start": 6798,
            "end": 6818,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6800,
              "end": 6818,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6802,
                "end": 6818,
                "typeName": {
                  "type": "Identifier",
                  "start": 6802,
                  "end": 6810,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6810,
                  "end": 6818,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 6811,
                      "end": 6817
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6820,
      "end": 6864,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6824,
          "end": 6863,
          "id": {
            "type": "Identifier",
            "start": 6824,
            "end": 6863,
            "decorators": [],
            "name": "nIPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6833,
              "end": 6863,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 6835,
                "end": 6863,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6836,
                    "end": 6842,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6837,
                      "end": 6842,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 6839,
                        "end": 6842
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6844,
                  "end": 6863,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6847,
                    "end": 6863,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6847,
                      "end": 6855,
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6855,
                      "end": 6863,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6856,
                          "end": 6862
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6865,
      "end": 6907,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6869,
          "end": 6906,
          "id": {
            "type": "Identifier",
            "start": 6869,
            "end": 6906,
            "decorators": [],
            "name": "nPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6877,
              "end": 6906,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 6879,
                "end": 6906,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6880,
                    "end": 6886,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6881,
                      "end": 6886,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 6883,
                        "end": 6886
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6888,
                  "end": 6906,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6891,
                    "end": 6906,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6891,
                      "end": 6898,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6898,
                      "end": 6906,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6899,
                          "end": 6905
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6908,
      "end": 6971,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6912,
          "end": 6970,
          "id": {
            "type": "Identifier",
            "start": 6912,
            "end": 6915,
            "decorators": [],
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6918,
            "end": 6970,
            "callee": {
              "type": "MemberExpression",
              "start": 6918,
              "end": 6925,
              "object": {
                "type": "Identifier",
                "start": 6918,
                "end": 6920,
                "decorators": [],
                "name": "r8",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6921,
                "end": 6925,
                "decorators": [],
                "name": "then",
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
                "start": 6926,
                "end": 6939,
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6941,
                "end": 6954,
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6956,
                "end": 6969,
                "decorators": [],
                "name": "testFunction8",
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
      "start": 6981,
      "end": 7070,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6985,
          "end": 7069,
          "id": {
            "type": "Identifier",
            "start": 6985,
            "end": 6988,
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6991,
            "end": 7069,
            "callee": {
              "type": "MemberExpression",
              "start": 6991,
              "end": 7036,
              "object": {
                "type": "CallExpression",
                "start": 6991,
                "end": 7031,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6991,
                  "end": 6998,
                  "object": {
                    "type": "Identifier",
                    "start": 6991,
                    "end": 6993,
                    "decorators": [],
                    "name": "r8",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6994,
                    "end": 6998,
                    "decorators": [],
                    "name": "then",
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
                    "start": 6999,
                    "end": 7008,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 7010,
                    "end": 7019,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 7021,
                    "end": 7030,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7032,
                "end": 7036,
                "decorators": [],
                "name": "then",
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
                "start": 7037,
                "end": 7046,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7048,
                "end": 7057,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7059,
                "end": 7068,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 7077,
      "end": 7101,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7081,
          "end": 7100,
          "id": {
            "type": "Identifier",
            "start": 7081,
            "end": 7100,
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7083,
              "end": 7100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7085,
                "end": 7100,
                "typeName": {
                  "type": "Identifier",
                  "start": 7085,
                  "end": 7092,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7092,
                  "end": 7100,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7093,
                      "end": 7099
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7102,
      "end": 7165,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7106,
          "end": 7164,
          "id": {
            "type": "Identifier",
            "start": 7106,
            "end": 7109,
            "decorators": [],
            "name": "s8a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7112,
            "end": 7164,
            "callee": {
              "type": "MemberExpression",
              "start": 7112,
              "end": 7119,
              "object": {
                "type": "Identifier",
                "start": 7112,
                "end": 7114,
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7115,
                "end": 7119,
                "decorators": [],
                "name": "then",
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
                "start": 7120,
                "end": 7133,
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7135,
                "end": 7148,
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7150,
                "end": 7163,
                "decorators": [],
                "name": "testFunction8",
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
      "start": 7175,
      "end": 7241,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7179,
          "end": 7240,
          "id": {
            "type": "Identifier",
            "start": 7179,
            "end": 7182,
            "decorators": [],
            "name": "s8b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7185,
            "end": 7240,
            "callee": {
              "type": "MemberExpression",
              "start": 7185,
              "end": 7192,
              "object": {
                "type": "Identifier",
                "start": 7185,
                "end": 7187,
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7188,
                "end": 7192,
                "decorators": [],
                "name": "then",
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
                "start": 7193,
                "end": 7207,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7209,
                "end": 7223,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7225,
                "end": 7239,
                "decorators": [],
                "name": "testFunction8P",
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
      "start": 7251,
      "end": 7315,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7255,
          "end": 7314,
          "id": {
            "type": "Identifier",
            "start": 7255,
            "end": 7258,
            "decorators": [],
            "name": "s8c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7261,
            "end": 7314,
            "callee": {
              "type": "MemberExpression",
              "start": 7261,
              "end": 7268,
              "object": {
                "type": "Identifier",
                "start": 7261,
                "end": 7263,
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7264,
                "end": 7268,
                "decorators": [],
                "name": "then",
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
                "start": 7269,
                "end": 7283,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7285,
                "end": 7298,
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7300,
                "end": 7313,
                "decorators": [],
                "name": "testFunction8",
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
      "start": 7325,
      "end": 7414,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7329,
          "end": 7413,
          "id": {
            "type": "Identifier",
            "start": 7329,
            "end": 7332,
            "decorators": [],
            "name": "s8d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7335,
            "end": 7413,
            "callee": {
              "type": "MemberExpression",
              "start": 7335,
              "end": 7380,
              "object": {
                "type": "CallExpression",
                "start": 7335,
                "end": 7375,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7335,
                  "end": 7342,
                  "object": {
                    "type": "Identifier",
                    "start": 7335,
                    "end": 7337,
                    "decorators": [],
                    "name": "s8",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7338,
                    "end": 7342,
                    "decorators": [],
                    "name": "then",
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
                    "start": 7343,
                    "end": 7352,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 7354,
                    "end": 7363,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 7365,
                    "end": 7374,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7376,
                "end": 7380,
                "decorators": [],
                "name": "then",
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
                "start": 7381,
                "end": 7390,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7392,
                "end": 7401,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7403,
                "end": 7412,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 7422,
      "end": 7447,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7426,
          "end": 7446,
          "id": {
            "type": "Identifier",
            "start": 7426,
            "end": 7446,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7428,
              "end": 7446,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7430,
                "end": 7446,
                "typeName": {
                  "type": "Identifier",
                  "start": 7430,
                  "end": 7438,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7438,
                  "end": 7446,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7439,
                      "end": 7445
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7448,
      "end": 7511,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7452,
          "end": 7510,
          "id": {
            "type": "Identifier",
            "start": 7452,
            "end": 7455,
            "decorators": [],
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7458,
            "end": 7510,
            "callee": {
              "type": "MemberExpression",
              "start": 7458,
              "end": 7465,
              "object": {
                "type": "Identifier",
                "start": 7458,
                "end": 7460,
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7461,
                "end": 7465,
                "decorators": [],
                "name": "then",
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
                "start": 7466,
                "end": 7479,
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7481,
                "end": 7494,
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7496,
                "end": 7509,
                "decorators": [],
                "name": "testFunction9",
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
      "start": 7521,
      "end": 7572,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7525,
          "end": 7571,
          "id": {
            "type": "Identifier",
            "start": 7525,
            "end": 7528,
            "decorators": [],
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7531,
            "end": 7571,
            "callee": {
              "type": "MemberExpression",
              "start": 7531,
              "end": 7538,
              "object": {
                "type": "Identifier",
                "start": 7531,
                "end": 7533,
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7534,
                "end": 7538,
                "decorators": [],
                "name": "then",
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
                "start": 7539,
                "end": 7548,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7550,
                "end": 7559,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7561,
                "end": 7570,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 7579,
      "end": 7630,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7583,
          "end": 7629,
          "id": {
            "type": "Identifier",
            "start": 7583,
            "end": 7586,
            "decorators": [],
            "name": "r9c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7589,
            "end": 7629,
            "callee": {
              "type": "MemberExpression",
              "start": 7589,
              "end": 7596,
              "object": {
                "type": "Identifier",
                "start": 7589,
                "end": 7591,
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7592,
                "end": 7596,
                "decorators": [],
                "name": "then",
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
                "start": 7597,
                "end": 7606,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7608,
                "end": 7617,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7619,
                "end": 7628,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 7637,
      "end": 7691,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7641,
          "end": 7690,
          "id": {
            "type": "Identifier",
            "start": 7641,
            "end": 7644,
            "decorators": [],
            "name": "r9d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7647,
            "end": 7690,
            "callee": {
              "type": "MemberExpression",
              "start": 7647,
              "end": 7654,
              "object": {
                "type": "Identifier",
                "start": 7647,
                "end": 7649,
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7650,
                "end": 7654,
                "decorators": [],
                "name": "then",
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
                "start": 7655,
                "end": 7667,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7669,
                "end": 7678,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7680,
                "end": 7689,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 7701,
      "end": 7793,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7705,
          "end": 7792,
          "id": {
            "type": "Identifier",
            "start": 7705,
            "end": 7708,
            "decorators": [],
            "name": "r9e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7711,
            "end": 7792,
            "callee": {
              "type": "MemberExpression",
              "start": 7711,
              "end": 7759,
              "object": {
                "type": "CallExpression",
                "start": 7711,
                "end": 7754,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7711,
                  "end": 7718,
                  "object": {
                    "type": "Identifier",
                    "start": 7711,
                    "end": 7713,
                    "decorators": [],
                    "name": "r9",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7714,
                    "end": 7718,
                    "decorators": [],
                    "name": "then",
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
                    "start": 7719,
                    "end": 7731,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 7733,
                    "end": 7742,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 7744,
                    "end": 7753,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7755,
                "end": 7759,
                "decorators": [],
                "name": "then",
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
                "start": 7760,
                "end": 7769,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7771,
                "end": 7780,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7782,
                "end": 7791,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 7800,
      "end": 7824,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7804,
          "end": 7823,
          "id": {
            "type": "Identifier",
            "start": 7804,
            "end": 7823,
            "decorators": [],
            "name": "s9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7806,
              "end": 7823,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7808,
                "end": 7823,
                "typeName": {
                  "type": "Identifier",
                  "start": 7808,
                  "end": 7815,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7815,
                  "end": 7823,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7816,
                      "end": 7822
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7825,
      "end": 7888,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7829,
          "end": 7887,
          "id": {
            "type": "Identifier",
            "start": 7829,
            "end": 7832,
            "decorators": [],
            "name": "s9a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7835,
            "end": 7887,
            "callee": {
              "type": "MemberExpression",
              "start": 7835,
              "end": 7842,
              "object": {
                "type": "Identifier",
                "start": 7835,
                "end": 7837,
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7838,
                "end": 7842,
                "decorators": [],
                "name": "then",
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
                "start": 7843,
                "end": 7856,
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7858,
                "end": 7871,
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7873,
                "end": 7886,
                "decorators": [],
                "name": "testFunction9",
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
      "start": 7898,
      "end": 7964,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7902,
          "end": 7963,
          "id": {
            "type": "Identifier",
            "start": 7902,
            "end": 7905,
            "decorators": [],
            "name": "s9b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7908,
            "end": 7963,
            "callee": {
              "type": "MemberExpression",
              "start": 7908,
              "end": 7915,
              "object": {
                "type": "Identifier",
                "start": 7908,
                "end": 7910,
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7911,
                "end": 7915,
                "decorators": [],
                "name": "then",
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
                "start": 7916,
                "end": 7930,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7932,
                "end": 7946,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7948,
                "end": 7962,
                "decorators": [],
                "name": "testFunction9P",
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
      "start": 7974,
      "end": 8038,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7978,
          "end": 8037,
          "id": {
            "type": "Identifier",
            "start": 7978,
            "end": 7981,
            "decorators": [],
            "name": "s9c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7984,
            "end": 8037,
            "callee": {
              "type": "MemberExpression",
              "start": 7984,
              "end": 7991,
              "object": {
                "type": "Identifier",
                "start": 7984,
                "end": 7986,
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7987,
                "end": 7991,
                "decorators": [],
                "name": "then",
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
                "start": 7992,
                "end": 8006,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8008,
                "end": 8021,
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8023,
                "end": 8036,
                "decorators": [],
                "name": "testFunction9",
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
      "start": 8048,
      "end": 8096,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8052,
          "end": 8095,
          "id": {
            "type": "Identifier",
            "start": 8052,
            "end": 8055,
            "decorators": [],
            "name": "s9d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8058,
            "end": 8095,
            "callee": {
              "type": "MemberExpression",
              "start": 8058,
              "end": 8065,
              "object": {
                "type": "Identifier",
                "start": 8058,
                "end": 8060,
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8061,
                "end": 8065,
                "decorators": [],
                "name": "then",
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
                "start": 8066,
                "end": 8074,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8076,
                "end": 8084,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8086,
                "end": 8094,
                "decorators": [],
                "name": "sPromise",
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
      "start": 8103,
      "end": 8151,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8107,
          "end": 8150,
          "id": {
            "type": "Identifier",
            "start": 8107,
            "end": 8110,
            "decorators": [],
            "name": "s9e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8113,
            "end": 8150,
            "callee": {
              "type": "MemberExpression",
              "start": 8113,
              "end": 8120,
              "object": {
                "type": "Identifier",
                "start": 8113,
                "end": 8115,
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8116,
                "end": 8120,
                "decorators": [],
                "name": "then",
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
                "start": 8121,
                "end": 8129,
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8131,
                "end": 8139,
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8141,
                "end": 8149,
                "decorators": [],
                "name": "nPromise",
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
      "start": 8158,
      "end": 8212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8162,
          "end": 8211,
          "id": {
            "type": "Identifier",
            "start": 8162,
            "end": 8165,
            "decorators": [],
            "name": "s9f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8168,
            "end": 8211,
            "callee": {
              "type": "MemberExpression",
              "start": 8168,
              "end": 8175,
              "object": {
                "type": "Identifier",
                "start": 8168,
                "end": 8170,
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8171,
                "end": 8175,
                "decorators": [],
                "name": "then",
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
                "start": 8176,
                "end": 8188,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8190,
                "end": 8199,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8201,
                "end": 8210,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 8222,
      "end": 8314,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8226,
          "end": 8313,
          "id": {
            "type": "Identifier",
            "start": 8226,
            "end": 8229,
            "decorators": [],
            "name": "s9g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8232,
            "end": 8313,
            "callee": {
              "type": "MemberExpression",
              "start": 8232,
              "end": 8280,
              "object": {
                "type": "CallExpression",
                "start": 8232,
                "end": 8275,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8232,
                  "end": 8239,
                  "object": {
                    "type": "Identifier",
                    "start": 8232,
                    "end": 8234,
                    "decorators": [],
                    "name": "s9",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8235,
                    "end": 8239,
                    "decorators": [],
                    "name": "then",
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
                    "start": 8240,
                    "end": 8252,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 8254,
                    "end": 8263,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 8265,
                    "end": 8274,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8276,
                "end": 8280,
                "decorators": [],
                "name": "then",
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
                "start": 8281,
                "end": 8290,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8292,
                "end": 8301,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8303,
                "end": 8312,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 8322,
      "end": 8355,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8326,
          "end": 8354,
          "id": {
            "type": "Identifier",
            "start": 8326,
            "end": 8329,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8332,
            "end": 8354,
            "callee": {
              "type": "Identifier",
              "start": 8332,
              "end": 8346,
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8347,
                "end": 8353,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8347,
                    "end": 8348,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 8352,
                  "end": 8353,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
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
      "start": 8356,
      "end": 8424,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8360,
          "end": 8423,
          "id": {
            "type": "Identifier",
            "start": 8360,
            "end": 8364,
            "decorators": [],
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8367,
            "end": 8423,
            "callee": {
              "type": "MemberExpression",
              "start": 8367,
              "end": 8375,
              "object": {
                "type": "Identifier",
                "start": 8367,
                "end": 8370,
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8371,
                "end": 8375,
                "decorators": [],
                "name": "then",
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
                "start": 8376,
                "end": 8390,
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8392,
                "end": 8406,
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8408,
                "end": 8422,
                "decorators": [],
                "name": "testFunction10",
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
      "start": 8431,
      "end": 8484,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8435,
          "end": 8483,
          "id": {
            "type": "Identifier",
            "start": 8435,
            "end": 8439,
            "decorators": [],
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8442,
            "end": 8483,
            "callee": {
              "type": "MemberExpression",
              "start": 8442,
              "end": 8450,
              "object": {
                "type": "Identifier",
                "start": 8442,
                "end": 8445,
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8446,
                "end": 8450,
                "decorators": [],
                "name": "then",
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
                "start": 8451,
                "end": 8460,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8462,
                "end": 8471,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8473,
                "end": 8482,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 8491,
      "end": 8544,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8495,
          "end": 8543,
          "id": {
            "type": "Identifier",
            "start": 8495,
            "end": 8499,
            "decorators": [],
            "name": "r10c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8502,
            "end": 8543,
            "callee": {
              "type": "MemberExpression",
              "start": 8502,
              "end": 8510,
              "object": {
                "type": "Identifier",
                "start": 8502,
                "end": 8505,
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8506,
                "end": 8510,
                "decorators": [],
                "name": "then",
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
                "start": 8511,
                "end": 8520,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8522,
                "end": 8531,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8533,
                "end": 8542,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 8551,
      "end": 8607,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8555,
          "end": 8606,
          "id": {
            "type": "Identifier",
            "start": 8555,
            "end": 8559,
            "decorators": [],
            "name": "r10d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8562,
            "end": 8606,
            "callee": {
              "type": "MemberExpression",
              "start": 8562,
              "end": 8570,
              "object": {
                "type": "Identifier",
                "start": 8562,
                "end": 8565,
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8566,
                "end": 8570,
                "decorators": [],
                "name": "then",
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
                "start": 8571,
                "end": 8583,
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8585,
                "end": 8594,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8596,
                "end": 8605,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 8617,
      "end": 8711,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8621,
          "end": 8710,
          "id": {
            "type": "Identifier",
            "start": 8621,
            "end": 8625,
            "decorators": [],
            "name": "r10e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8628,
            "end": 8710,
            "callee": {
              "type": "MemberExpression",
              "start": 8628,
              "end": 8677,
              "object": {
                "type": "CallExpression",
                "start": 8628,
                "end": 8672,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8628,
                  "end": 8636,
                  "object": {
                    "type": "Identifier",
                    "start": 8628,
                    "end": 8631,
                    "decorators": [],
                    "name": "r10",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8632,
                    "end": 8636,
                    "decorators": [],
                    "name": "then",
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
                    "start": 8637,
                    "end": 8649,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 8651,
                    "end": 8660,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 8662,
                    "end": 8671,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8673,
                "end": 8677,
                "decorators": [],
                "name": "then",
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
                "start": 8678,
                "end": 8687,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8689,
                "end": 8698,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8700,
                "end": 8709,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 8718,
      "end": 8752,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8722,
          "end": 8751,
          "id": {
            "type": "Identifier",
            "start": 8722,
            "end": 8725,
            "decorators": [],
            "name": "s10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8728,
            "end": 8751,
            "callee": {
              "type": "Identifier",
              "start": 8728,
              "end": 8743,
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8744,
                "end": 8750,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8744,
                    "end": 8745,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 8749,
                  "end": 8750,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
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
      "start": 8753,
      "end": 8821,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8757,
          "end": 8820,
          "id": {
            "type": "Identifier",
            "start": 8757,
            "end": 8761,
            "decorators": [],
            "name": "s10a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8764,
            "end": 8820,
            "callee": {
              "type": "MemberExpression",
              "start": 8764,
              "end": 8772,
              "object": {
                "type": "Identifier",
                "start": 8764,
                "end": 8767,
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8768,
                "end": 8772,
                "decorators": [],
                "name": "then",
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
                "start": 8773,
                "end": 8787,
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8789,
                "end": 8803,
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8805,
                "end": 8819,
                "decorators": [],
                "name": "testFunction10",
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
      "start": 8828,
      "end": 8899,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8832,
          "end": 8898,
          "id": {
            "type": "Identifier",
            "start": 8832,
            "end": 8836,
            "decorators": [],
            "name": "s10b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8839,
            "end": 8898,
            "callee": {
              "type": "MemberExpression",
              "start": 8839,
              "end": 8847,
              "object": {
                "type": "Identifier",
                "start": 8839,
                "end": 8842,
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8843,
                "end": 8847,
                "decorators": [],
                "name": "then",
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
                "start": 8848,
                "end": 8863,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8865,
                "end": 8880,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8882,
                "end": 8897,
                "decorators": [],
                "name": "testFunction10P",
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
      "start": 8906,
      "end": 8975,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8910,
          "end": 8974,
          "id": {
            "type": "Identifier",
            "start": 8910,
            "end": 8914,
            "decorators": [],
            "name": "s10c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8917,
            "end": 8974,
            "callee": {
              "type": "MemberExpression",
              "start": 8917,
              "end": 8925,
              "object": {
                "type": "Identifier",
                "start": 8917,
                "end": 8920,
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8921,
                "end": 8925,
                "decorators": [],
                "name": "then",
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
                "start": 8926,
                "end": 8941,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8943,
                "end": 8957,
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8959,
                "end": 8973,
                "decorators": [],
                "name": "testFunction10",
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
      "start": 8982,
      "end": 9032,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8986,
          "end": 9031,
          "id": {
            "type": "Identifier",
            "start": 8986,
            "end": 8990,
            "decorators": [],
            "name": "s10d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8993,
            "end": 9031,
            "callee": {
              "type": "MemberExpression",
              "start": 8993,
              "end": 9001,
              "object": {
                "type": "Identifier",
                "start": 8993,
                "end": 8996,
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8997,
                "end": 9001,
                "decorators": [],
                "name": "then",
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
                "start": 9002,
                "end": 9010,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9012,
                "end": 9020,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9022,
                "end": 9030,
                "decorators": [],
                "name": "sPromise",
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
      "start": 9039,
      "end": 9091,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9043,
          "end": 9090,
          "id": {
            "type": "Identifier",
            "start": 9043,
            "end": 9047,
            "decorators": [],
            "name": "s10e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9050,
            "end": 9090,
            "callee": {
              "type": "MemberExpression",
              "start": 9050,
              "end": 9058,
              "object": {
                "type": "Identifier",
                "start": 9050,
                "end": 9053,
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9054,
                "end": 9058,
                "decorators": [],
                "name": "then",
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
                "start": 9059,
                "end": 9068,
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9070,
                "end": 9078,
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9080,
                "end": 9089,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 9098,
      "end": 9155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9102,
          "end": 9154,
          "id": {
            "type": "Identifier",
            "start": 9102,
            "end": 9106,
            "decorators": [],
            "name": "s10f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9109,
            "end": 9154,
            "callee": {
              "type": "MemberExpression",
              "start": 9109,
              "end": 9117,
              "object": {
                "type": "Identifier",
                "start": 9109,
                "end": 9112,
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9113,
                "end": 9117,
                "decorators": [],
                "name": "then",
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
                "start": 9118,
                "end": 9131,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9133,
                "end": 9142,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9144,
                "end": 9153,
                "decorators": [],
                "name": "nIPromise",
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
      "start": 9165,
      "end": 9259,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9169,
          "end": 9258,
          "id": {
            "type": "Identifier",
            "start": 9169,
            "end": 9173,
            "decorators": [],
            "name": "s10g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9176,
            "end": 9258,
            "callee": {
              "type": "MemberExpression",
              "start": 9176,
              "end": 9226,
              "object": {
                "type": "CallExpression",
                "start": 9176,
                "end": 9221,
                "callee": {
                  "type": "MemberExpression",
                  "start": 9176,
                  "end": 9184,
                  "object": {
                    "type": "Identifier",
                    "start": 9176,
                    "end": 9179,
                    "decorators": [],
                    "name": "s10",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9180,
                    "end": 9184,
                    "decorators": [],
                    "name": "then",
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
                    "start": 9185,
                    "end": 9198,
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 9200,
                    "end": 9209,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 9211,
                    "end": 9220,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9222,
                "end": 9226,
                "decorators": [],
                "name": "then",
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
                "start": 9227,
                "end": 9235,
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9237,
                "end": 9246,
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9248,
                "end": 9257,
                "decorators": [],
                "name": "sIPromise",
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
      "start": 9267,
      "end": 9293,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9271,
          "end": 9292,
          "id": {
            "type": "Identifier",
            "start": 9271,
            "end": 9292,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9274,
              "end": 9292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9276,
                "end": 9292,
                "typeName": {
                  "type": "Identifier",
                  "start": 9276,
                  "end": 9284,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9284,
                  "end": 9292,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9285,
                      "end": 9291
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 9294,
      "end": 9362,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9298,
          "end": 9361,
          "id": {
            "type": "Identifier",
            "start": 9298,
            "end": 9302,
            "decorators": [],
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9305,
            "end": 9361,
            "callee": {
              "type": "MemberExpression",
              "start": 9305,
              "end": 9313,
              "object": {
                "type": "Identifier",
                "start": 9305,
                "end": 9308,
                "decorators": [],
                "name": "r11",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9309,
                "end": 9313,
                "decorators": [],
                "name": "then",
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
                "start": 9314,
                "end": 9328,
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9330,
                "end": 9344,
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9346,
                "end": 9360,
                "decorators": [],
                "name": "testFunction11",
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
      "start": 9369,
      "end": 9394,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9373,
          "end": 9393,
          "id": {
            "type": "Identifier",
            "start": 9373,
            "end": 9393,
            "decorators": [],
            "name": "s11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9376,
              "end": 9393,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9378,
                "end": 9393,
                "typeName": {
                  "type": "Identifier",
                  "start": 9378,
                  "end": 9385,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9385,
                  "end": 9393,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9386,
                      "end": 9392
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 9395,
      "end": 9463,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9399,
          "end": 9462,
          "id": {
            "type": "Identifier",
            "start": 9399,
            "end": 9403,
            "decorators": [],
            "name": "s11a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9406,
            "end": 9462,
            "callee": {
              "type": "MemberExpression",
              "start": 9406,
              "end": 9414,
              "object": {
                "type": "Identifier",
                "start": 9406,
                "end": 9409,
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9410,
                "end": 9414,
                "decorators": [],
                "name": "then",
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
                "start": 9415,
                "end": 9429,
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9431,
                "end": 9445,
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9447,
                "end": 9461,
                "decorators": [],
                "name": "testFunction11",
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
      "start": 9470,
      "end": 9541,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9474,
          "end": 9540,
          "id": {
            "type": "Identifier",
            "start": 9474,
            "end": 9478,
            "decorators": [],
            "name": "s11b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9481,
            "end": 9540,
            "callee": {
              "type": "MemberExpression",
              "start": 9481,
              "end": 9489,
              "object": {
                "type": "Identifier",
                "start": 9481,
                "end": 9484,
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9485,
                "end": 9489,
                "decorators": [],
                "name": "then",
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
                "start": 9490,
                "end": 9505,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9507,
                "end": 9522,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9524,
                "end": 9539,
                "decorators": [],
                "name": "testFunction11P",
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
      "start": 9551,
      "end": 9620,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9555,
          "end": 9619,
          "id": {
            "type": "Identifier",
            "start": 9555,
            "end": 9559,
            "decorators": [],
            "name": "s11c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9562,
            "end": 9619,
            "callee": {
              "type": "MemberExpression",
              "start": 9562,
              "end": 9570,
              "object": {
                "type": "Identifier",
                "start": 9562,
                "end": 9565,
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9566,
                "end": 9570,
                "decorators": [],
                "name": "then",
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
                "start": 9571,
                "end": 9586,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9588,
                "end": 9602,
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9604,
                "end": 9618,
                "decorators": [],
                "name": "testFunction11",
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
      "start": 9631,
      "end": 9664,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9635,
          "end": 9663,
          "id": {
            "type": "Identifier",
            "start": 9635,
            "end": 9638,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9641,
            "end": 9663,
            "callee": {
              "type": "Identifier",
              "start": 9641,
              "end": 9655,
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9656,
                "end": 9662,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9656,
                    "end": 9657,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 9661,
                  "end": 9662,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
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
      "start": 9665,
      "end": 9733,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9669,
          "end": 9732,
          "id": {
            "type": "Identifier",
            "start": 9669,
            "end": 9673,
            "decorators": [],
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9676,
            "end": 9732,
            "callee": {
              "type": "MemberExpression",
              "start": 9676,
              "end": 9684,
              "object": {
                "type": "Identifier",
                "start": 9676,
                "end": 9679,
                "decorators": [],
                "name": "r12",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9680,
                "end": 9684,
                "decorators": [],
                "name": "then",
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
                "start": 9685,
                "end": 9699,
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9701,
                "end": 9715,
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9717,
                "end": 9731,
                "decorators": [],
                "name": "testFunction12",
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
      "start": 9740,
      "end": 9773,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9744,
          "end": 9772,
          "id": {
            "type": "Identifier",
            "start": 9744,
            "end": 9747,
            "decorators": [],
            "name": "s12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9750,
            "end": 9772,
            "callee": {
              "type": "Identifier",
              "start": 9750,
              "end": 9764,
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9765,
                "end": 9771,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9765,
                    "end": 9766,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 9770,
                  "end": 9771,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
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
      "start": 9774,
      "end": 9842,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9778,
          "end": 9841,
          "id": {
            "type": "Identifier",
            "start": 9778,
            "end": 9782,
            "decorators": [],
            "name": "s12a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9785,
            "end": 9841,
            "callee": {
              "type": "MemberExpression",
              "start": 9785,
              "end": 9793,
              "object": {
                "type": "Identifier",
                "start": 9785,
                "end": 9788,
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9789,
                "end": 9793,
                "decorators": [],
                "name": "then",
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
                "start": 9794,
                "end": 9808,
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9810,
                "end": 9824,
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9826,
                "end": 9840,
                "decorators": [],
                "name": "testFunction12",
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
      "start": 9849,
      "end": 9920,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9853,
          "end": 9919,
          "id": {
            "type": "Identifier",
            "start": 9853,
            "end": 9857,
            "decorators": [],
            "name": "s12b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9860,
            "end": 9919,
            "callee": {
              "type": "MemberExpression",
              "start": 9860,
              "end": 9868,
              "object": {
                "type": "Identifier",
                "start": 9860,
                "end": 9863,
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9864,
                "end": 9868,
                "decorators": [],
                "name": "then",
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
                "start": 9869,
                "end": 9884,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9886,
                "end": 9901,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9903,
                "end": 9918,
                "decorators": [],
                "name": "testFunction12P",
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
      "start": 9927,
      "end": 9996,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9931,
          "end": 9995,
          "id": {
            "type": "Identifier",
            "start": 9931,
            "end": 9935,
            "decorators": [],
            "name": "s12c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 9938,
            "end": 9995,
            "callee": {
              "type": "MemberExpression",
              "start": 9938,
              "end": 9946,
              "object": {
                "type": "Identifier",
                "start": 9938,
                "end": 9941,
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 9942,
                "end": 9946,
                "decorators": [],
                "name": "then",
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
                "start": 9947,
                "end": 9962,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9964,
                "end": 9978,
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9980,
                "end": 9994,
                "decorators": [],
                "name": "testFunction12",
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
  "sourceType": "script",
  "hashbang": null
}
```
