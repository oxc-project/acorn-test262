__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 10021,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 329,
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 329,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 104,
            "end": 214,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 108,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 137,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 122,
                    "end": 137,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 131,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 131,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 131,
                            "typeName": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 131,
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
                      "start": 133,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 136,
                        "end": 137,
                        "typeName": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 139,
                "end": 164,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 147,
                    "end": 164,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 148,
                        "end": 158,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 153,
                          "end": 158,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 155,
                            "end": 158
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 164,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 163,
                        "end": 164,
                        "typeName": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 166,
                "end": 200,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 177,
                    "end": 200,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 178,
                        "end": 191,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 186,
                          "end": 191,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 188,
                            "end": 191
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 193,
                      "end": 200,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 196,
                        "end": 200
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 213,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 210,
                  "end": 213,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 210,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 108,
              "end": 111,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 109,
                  "end": 110,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 219,
            "end": 327,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 223,
              "decorators": [],
              "name": "done",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 227,
                "end": 254,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 235,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 237,
                    "end": 254,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 238,
                        "end": 246,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 243,
                          "end": 246,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 245,
                            "end": 246,
                            "typeName": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
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
                      "start": 248,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 256,
                "end": 283,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 262,
                  "end": 283,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 264,
                    "end": 283,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 265,
                        "end": 275,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 270,
                          "end": 275,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 272,
                            "end": 275
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 277,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 280,
                        "end": 283
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 285,
                "end": 319,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 319,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 296,
                    "end": 319,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 297,
                        "end": 310,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 305,
                          "end": 310,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 307,
                            "end": 310
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 315,
                        "end": 319
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 326,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 322,
                "end": 326
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 223,
              "end": 226,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 224,
                  "end": 225,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "decorators": [],
                    "name": "U",
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
        "start": 87,
        "end": 94,
        "decorators": [],
        "name": "Promise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 94,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 95,
            "end": 96,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
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
      "start": 331,
      "end": 975,
      "body": {
        "type": "TSInterfaceBody",
        "start": 353,
        "end": 975,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 359,
            "end": 490,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 363,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 367,
                "end": 402,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 402,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 377,
                    "end": 402,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 378,
                        "end": 386,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 386,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 385,
                            "end": 386,
                            "typeName": {
                              "type": "Identifier",
                              "start": 385,
                              "end": 386,
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
                      "start": 388,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 391,
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
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 399,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 404,
                "end": 439,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 439,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 412,
                    "end": 439,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 413,
                        "end": 423,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 418,
                          "end": 423,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 420,
                            "end": 423
                          }
                        }
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
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 436,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 441,
                "end": 475,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 450,
                  "end": 475,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 452,
                    "end": 475,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 453,
                        "end": 466,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 461,
                          "end": 466,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 463,
                            "end": 466
                          }
                        }
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
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 489,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 478,
                "end": 489,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 486,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 363,
              "end": 366,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 364,
                  "end": 365,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 495,
            "end": 616,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 503,
                "end": 538,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 511,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 513,
                    "end": 538,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 514,
                        "end": 522,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 519,
                          "end": 522,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 521,
                            "end": 522,
                            "typeName": {
                              "type": "Identifier",
                              "start": 521,
                              "end": 522,
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
                      "start": 524,
                      "end": 538,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 527,
                        "end": 538,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 535,
                          "end": 538,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 536,
                              "end": 537,
                              "typeName": {
                                "type": "Identifier",
                                "start": 536,
                                "end": 537,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 535,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 540,
                "end": 565,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 546,
                  "end": 565,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 548,
                    "end": 565,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 549,
                        "end": 559,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 554,
                          "end": 559,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 556,
                            "end": 559
                          }
                        }
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
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 567,
                "end": 601,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 576,
                  "end": 601,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 578,
                    "end": 601,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 579,
                        "end": 592,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 587,
                          "end": 592,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 589,
                            "end": 592
                          }
                        }
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
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 602,
              "end": 615,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 604,
                "end": 615,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 612,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 499,
              "end": 502,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 500,
                  "end": 501,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 621,
            "end": 742,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 625,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 629,
                "end": 654,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 637,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 639,
                    "end": 654,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 640,
                        "end": 648,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 645,
                          "end": 648,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 647,
                            "end": 648,
                            "typeName": {
                              "type": "Identifier",
                              "start": 647,
                              "end": 648,
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
                      "start": 650,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 653,
                        "end": 654,
                        "typeName": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 654,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 656,
                "end": 691,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 662,
                  "end": 691,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 664,
                    "end": 691,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 665,
                        "end": 675,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 670,
                          "end": 675,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 672,
                            "end": 675
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 677,
                      "end": 691,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 680,
                        "end": 691,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 688,
                          "end": 691,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 689,
                              "end": 690,
                              "typeName": {
                                "type": "Identifier",
                                "start": 689,
                                "end": 690,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 680,
                          "end": 688,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 693,
                "end": 727,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 702,
                  "end": 727,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 704,
                    "end": 727,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 705,
                        "end": 718,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 713,
                          "end": 718,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 715,
                            "end": 718
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 720,
                      "end": 727,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 723,
                        "end": 727
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 741,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 730,
                "end": 741,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 738,
                  "end": 741,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 739,
                      "end": 740,
                      "typeName": {
                        "type": "Identifier",
                        "start": 739,
                        "end": 740,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 738,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 625,
              "end": 628,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 626,
                  "end": 627,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 627,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 747,
            "end": 858,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 751,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 755,
                "end": 780,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 780,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 765,
                    "end": 780,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 774,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 771,
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
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 776,
                      "end": 780,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 779,
                        "end": 780,
                        "typeName": {
                          "type": "Identifier",
                          "start": 779,
                          "end": 780,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 782,
                "end": 807,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 788,
                  "end": 807,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 790,
                    "end": 807,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 801,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 796,
                          "end": 801,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 798,
                            "end": 801
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 803,
                      "end": 807,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 806,
                        "end": 807,
                        "typeName": {
                          "type": "Identifier",
                          "start": 806,
                          "end": 807,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 809,
                "end": 843,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 818,
                  "end": 843,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 820,
                    "end": 843,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 821,
                        "end": 834,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 829,
                          "end": 834,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 831,
                            "end": 834
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 836,
                      "end": 843,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 839,
                        "end": 843
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 857,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 846,
                "end": 857,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 854,
                  "end": 857,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 855,
                      "end": 856,
                      "typeName": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 856,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 854,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 751,
              "end": 754,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 752,
                  "end": 753,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 863,
            "end": 973,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 863,
              "end": 867,
              "decorators": [],
              "name": "done",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 873,
                "end": 900,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 881,
                  "end": 900,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 883,
                    "end": 900,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 884,
                        "end": 892,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 889,
                          "end": 892,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 891,
                            "end": 892,
                            "typeName": {
                              "type": "Identifier",
                              "start": 891,
                              "end": 892,
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
                      "start": 894,
                      "end": 900,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 897,
                        "end": 900
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 902,
                "end": 929,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 908,
                  "end": 929,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 910,
                    "end": 929,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 911,
                        "end": 921,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 916,
                          "end": 921,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 918,
                            "end": 921
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 923,
                      "end": 929,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 926,
                        "end": 929
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 931,
                "end": 965,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 940,
                  "end": 965,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 942,
                    "end": 965,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 943,
                        "end": 956,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 951,
                          "end": 956,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 953,
                            "end": 956
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 958,
                      "end": 965,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 961,
                        "end": 965
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 966,
              "end": 972,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 968,
                "end": 972
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 869,
              "end": 872,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 870,
                  "end": 871,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 871,
                    "decorators": [],
                    "name": "U",
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
        "start": 341,
        "end": 349,
        "decorators": [],
        "name": "IPromise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 349,
        "end": 352,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 350,
            "end": 351,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
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
      "type": "TSDeclareFunction",
      "start": 977,
      "end": 1027,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 1006,
        "decorators": [],
        "name": "testFunction",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1008,
        "end": 1026,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1010,
          "end": 1026,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1018,
            "end": 1026,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1019,
                "end": 1025
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1010,
            "end": 1018,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1028,
      "end": 1078,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1045,
        "end": 1058,
        "decorators": [],
        "name": "testFunctionP",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1060,
        "end": 1077,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1062,
          "end": 1077,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1069,
            "end": 1077,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1070,
                "end": 1076
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1062,
            "end": 1069,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1137,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1096,
        "end": 1109,
        "decorators": [],
        "name": "testFunction2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1111,
        "end": 1136,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1113,
          "end": 1136,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1121,
            "end": 1136,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1122,
                "end": 1135,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1124,
                    "end": 1133,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1124,
                      "end": 1125,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1125,
                      "end": 1133,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1127,
                        "end": 1133
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1113,
            "end": 1121,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1138,
      "end": 1196,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1155,
        "end": 1169,
        "decorators": [],
        "name": "testFunction2P",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1171,
        "end": 1195,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1173,
          "end": 1195,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1180,
            "end": 1195,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1181,
                "end": 1194,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1183,
                    "end": 1192,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1183,
                      "end": 1184,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1184,
                      "end": 1192,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1186,
                        "end": 1192
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1173,
            "end": 1180,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1197,
      "end": 1257,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1227,
        "decorators": [],
        "name": "testFunction3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1228,
          "end": 1237,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1229,
            "end": 1237,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1231,
              "end": 1237
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1238,
        "end": 1256,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1240,
          "end": 1256,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1248,
            "end": 1256,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1249,
                "end": 1255
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1240,
            "end": 1248,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1258,
      "end": 1318,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1289,
        "decorators": [],
        "name": "testFunction3P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1290,
          "end": 1299,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1291,
            "end": 1299,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1293,
              "end": 1299
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1300,
        "end": 1317,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1302,
          "end": 1317,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1309,
            "end": 1317,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1310,
                "end": 1316
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1302,
            "end": 1309,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1319,
      "end": 1391,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1349,
        "decorators": [],
        "name": "testFunction4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1350,
          "end": 1359,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1351,
            "end": 1359,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1353,
              "end": 1359
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1361,
          "end": 1371,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1363,
            "end": 1371,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1365,
              "end": 1371
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1372,
        "end": 1390,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1374,
          "end": 1390,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1382,
            "end": 1390,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1383,
                "end": 1389
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1374,
            "end": 1382,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1392,
      "end": 1464,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1409,
        "end": 1423,
        "decorators": [],
        "name": "testFunction4P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1424,
          "end": 1433,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1425,
            "end": 1433,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1427,
              "end": 1433
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1435,
          "end": 1445,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1437,
            "end": 1445,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1439,
              "end": 1445
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1446,
        "end": 1463,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1448,
          "end": 1463,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1455,
            "end": 1463,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1456,
                "end": 1462
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1448,
            "end": 1455,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1465,
      "end": 1552,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1482,
        "end": 1495,
        "decorators": [],
        "name": "testFunction5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1496,
          "end": 1505,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1497,
            "end": 1505,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1499,
              "end": 1505
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1507,
          "end": 1532,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1509,
            "end": 1532,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1511,
              "end": 1532,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1512,
                  "end": 1521,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1513,
                    "end": 1521,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1515,
                      "end": 1521
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1523,
                "end": 1532,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1526,
                  "end": 1532
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1533,
        "end": 1551,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1535,
          "end": 1551,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1543,
            "end": 1551,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1544,
                "end": 1550
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1535,
            "end": 1543,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1553,
      "end": 1640,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1570,
        "end": 1584,
        "decorators": [],
        "name": "testFunction5P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1585,
          "end": 1594,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1586,
            "end": 1594,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1588,
              "end": 1594
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1596,
          "end": 1621,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1598,
            "end": 1621,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1600,
              "end": 1621,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1601,
                  "end": 1610,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1602,
                    "end": 1610,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1604,
                      "end": 1610
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1612,
                "end": 1621,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1615,
                  "end": 1621
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1622,
        "end": 1639,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1624,
          "end": 1639,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1631,
            "end": 1639,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1632,
                "end": 1638
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1624,
            "end": 1631,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1641,
      "end": 1721,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1658,
        "end": 1671,
        "decorators": [],
        "name": "testFunction6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1672,
          "end": 1681,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1673,
            "end": 1681,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1675,
              "end": 1681
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1683,
          "end": 1701,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1685,
            "end": 1701,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1687,
              "end": 1701,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1691,
                  "end": 1695,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1692,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1697,
                "end": 1701,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1700,
                  "end": 1701,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1700,
                    "end": 1701,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1687,
                "end": 1690,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1688,
                    "end": 1689,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1688,
                      "end": 1689,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1702,
        "end": 1720,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1704,
          "end": 1720,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1712,
            "end": 1720,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1713,
                "end": 1719
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1704,
            "end": 1712,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1722,
      "end": 1802,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1739,
        "end": 1753,
        "decorators": [],
        "name": "testFunction6P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1754,
          "end": 1763,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1755,
            "end": 1763,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1757,
              "end": 1763
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1765,
          "end": 1783,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1767,
            "end": 1783,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1769,
              "end": 1783,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1773,
                  "end": 1777,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1774,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1779,
                "end": 1783,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1782,
                  "end": 1783,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1782,
                    "end": 1783,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1769,
                "end": 1772,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1770,
                    "end": 1771,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1770,
                      "end": 1771,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1784,
        "end": 1801,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1786,
          "end": 1801,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1793,
            "end": 1801,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1794,
                "end": 1800
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1786,
            "end": 1793,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1803,
      "end": 1872,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1820,
        "end": 1833,
        "decorators": [],
        "name": "testFunction7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1834,
          "end": 1852,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1836,
            "end": 1852,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1838,
              "end": 1852,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1842,
                  "end": 1846,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1843,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1848,
                "end": 1852,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1851,
                  "end": 1852,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1851,
                    "end": 1852,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1838,
                "end": 1841,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1839,
                    "end": 1840,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1840,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1853,
        "end": 1871,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1855,
          "end": 1871,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1863,
            "end": 1871,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1864,
                "end": 1870
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1855,
            "end": 1863,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1873,
      "end": 1942,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1890,
        "end": 1904,
        "decorators": [],
        "name": "testFunction7P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1905,
          "end": 1923,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1907,
            "end": 1923,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1909,
              "end": 1923,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1913,
                  "end": 1917,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1914,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1919,
                "end": 1923,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1922,
                  "end": 1923,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1922,
                    "end": 1923,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1909,
                "end": 1912,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1910,
                    "end": 1911,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1910,
                      "end": 1911,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1924,
        "end": 1941,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1926,
          "end": 1941,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1933,
            "end": 1941,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1934,
                "end": 1940
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1926,
            "end": 1933,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1943,
      "end": 2013,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1960,
        "end": 1973,
        "decorators": [],
        "name": "testFunction8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1977,
          "end": 1981,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1978,
            "end": 1981,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1980,
              "end": 1981,
              "typeName": {
                "type": "Identifier",
                "start": 1980,
                "end": 1981,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1983,
          "end": 1998,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1985,
            "end": 1998,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1987,
              "end": 1998,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1988,
                  "end": 1992,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1989,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1994,
                "end": 1998,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1997,
                  "end": 1998,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1997,
                    "end": 1998,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1999,
        "end": 2012,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2001,
          "end": 2012,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2009,
            "end": 2012,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2010,
                "end": 2011,
                "typeName": {
                  "type": "Identifier",
                  "start": 2010,
                  "end": 2011,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2001,
            "end": 2009,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1973,
        "end": 1976,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1974,
            "end": 1975,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1974,
              "end": 1975,
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
      "type": "TSDeclareFunction",
      "start": 2014,
      "end": 2084,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2031,
        "end": 2045,
        "decorators": [],
        "name": "testFunction8P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2049,
          "end": 2053,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2050,
            "end": 2053,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2052,
              "end": 2053,
              "typeName": {
                "type": "Identifier",
                "start": 2052,
                "end": 2053,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2055,
          "end": 2070,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2057,
            "end": 2070,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2059,
              "end": 2070,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2060,
                  "end": 2064,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2061,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2066,
                "end": 2070,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2069,
                  "end": 2070,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2069,
                    "end": 2070,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2071,
        "end": 2083,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2073,
          "end": 2083,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2080,
            "end": 2083,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2081,
                "end": 2082,
                "typeName": {
                  "type": "Identifier",
                  "start": 2081,
                  "end": 2082,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2073,
            "end": 2080,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2045,
        "end": 2048,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2046,
            "end": 2047,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2046,
              "end": 2047,
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
      "type": "TSDeclareFunction",
      "start": 2085,
      "end": 2158,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2115,
        "decorators": [],
        "name": "testFunction9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2119,
          "end": 2123,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2120,
            "end": 2123,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2122,
              "end": 2123,
              "typeName": {
                "type": "Identifier",
                "start": 2122,
                "end": 2123,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2125,
          "end": 2143,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2127,
            "end": 2143,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2129,
              "end": 2143,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2133,
                  "end": 2137,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2134,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2139,
                "end": 2143,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2142,
                  "end": 2143,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2142,
                    "end": 2143,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2129,
                "end": 2132,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2130,
                    "end": 2131,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2130,
                      "end": 2131,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2144,
        "end": 2157,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2146,
          "end": 2157,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2154,
            "end": 2157,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2155,
                "end": 2156,
                "typeName": {
                  "type": "Identifier",
                  "start": 2155,
                  "end": 2156,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2146,
            "end": 2154,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2115,
        "end": 2118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2116,
            "end": 2117,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2116,
              "end": 2117,
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
      "type": "TSDeclareFunction",
      "start": 2159,
      "end": 2232,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2176,
        "end": 2190,
        "decorators": [],
        "name": "testFunction9P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2194,
          "end": 2198,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2195,
            "end": 2198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2197,
              "end": 2198,
              "typeName": {
                "type": "Identifier",
                "start": 2197,
                "end": 2198,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2200,
          "end": 2218,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2202,
            "end": 2218,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2204,
              "end": 2218,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2208,
                  "end": 2212,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2209,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2214,
                "end": 2218,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2217,
                  "end": 2218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2217,
                    "end": 2218,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2204,
                "end": 2207,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2205,
                    "end": 2206,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2205,
                      "end": 2206,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2219,
        "end": 2231,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2221,
          "end": 2231,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2228,
            "end": 2231,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2229,
                "end": 2230,
                "typeName": {
                  "type": "Identifier",
                  "start": 2229,
                  "end": 2230,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2221,
            "end": 2228,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2190,
        "end": 2193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2191,
            "end": 2192,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2191,
              "end": 2192,
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
      "type": "TSDeclareFunction",
      "start": 2233,
      "end": 2301,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2250,
        "end": 2264,
        "decorators": [],
        "name": "testFunction10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2268,
          "end": 2286,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2270,
            "end": 2286,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2272,
              "end": 2286,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2276,
                  "end": 2280,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2277,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2282,
                "end": 2286,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2285,
                  "end": 2286,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2285,
                    "end": 2286,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2272,
                "end": 2275,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2273,
                    "end": 2274,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2273,
                      "end": 2274,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2287,
        "end": 2300,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2289,
          "end": 2300,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2297,
            "end": 2300,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2298,
                "end": 2299,
                "typeName": {
                  "type": "Identifier",
                  "start": 2298,
                  "end": 2299,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2289,
            "end": 2297,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2264,
        "end": 2267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2265,
            "end": 2266,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2265,
              "end": 2266,
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
      "type": "TSDeclareFunction",
      "start": 2302,
      "end": 2370,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2319,
        "end": 2334,
        "decorators": [],
        "name": "testFunction10P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2338,
          "end": 2356,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2340,
            "end": 2356,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2342,
              "end": 2356,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2346,
                  "end": 2350,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2347,
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
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2352,
                "end": 2356,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2355,
                  "end": 2356,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2355,
                    "end": 2356,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2342,
                "end": 2345,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2343,
                    "end": 2344,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2343,
                      "end": 2344,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2357,
        "end": 2369,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2359,
          "end": 2369,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2366,
            "end": 2369,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2367,
                "end": 2368,
                "typeName": {
                  "type": "Identifier",
                  "start": 2367,
                  "end": 2368,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2359,
            "end": 2366,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2334,
        "end": 2337,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2335,
            "end": 2336,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2335,
              "end": 2336,
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
      "type": "TSDeclareFunction",
      "start": 2372,
      "end": 2433,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2389,
        "end": 2403,
        "decorators": [],
        "name": "testFunction11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2404,
          "end": 2413,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2405,
            "end": 2413,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2407,
              "end": 2413
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2414,
        "end": 2432,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2416,
          "end": 2432,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2424,
            "end": 2432,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2425,
                "end": 2431
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2416,
            "end": 2424,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2434,
      "end": 2495,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2451,
        "end": 2465,
        "decorators": [],
        "name": "testFunction11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2466,
          "end": 2475,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2467,
            "end": 2475,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2469,
              "end": 2475
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2476,
        "end": 2494,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2478,
          "end": 2494,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2486,
            "end": 2494,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2487,
                "end": 2493
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2478,
            "end": 2486,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2496,
      "end": 2557,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2513,
        "end": 2528,
        "decorators": [],
        "name": "testFunction11P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2529,
          "end": 2538,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2530,
            "end": 2538,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2532,
              "end": 2538
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2539,
        "end": 2556,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2541,
          "end": 2556,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2548,
            "end": 2556,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2549,
                "end": 2555
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2541,
            "end": 2548,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2558,
      "end": 2619,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2575,
        "end": 2590,
        "decorators": [],
        "name": "testFunction11P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2591,
          "end": 2600,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2592,
            "end": 2600,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2594,
              "end": 2600
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2601,
        "end": 2618,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2603,
          "end": 2618,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2610,
            "end": 2618,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2611,
                "end": 2617
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2603,
            "end": 2610,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2621,
      "end": 2675,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2638,
        "end": 2652,
        "decorators": [],
        "name": "testFunction12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2656,
          "end": 2660,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2657,
            "end": 2660,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2659,
              "end": 2660,
              "typeName": {
                "type": "Identifier",
                "start": 2659,
                "end": 2660,
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
        "start": 2661,
        "end": 2674,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2663,
          "end": 2674,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2671,
            "end": 2674,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2672,
                "end": 2673,
                "typeName": {
                  "type": "Identifier",
                  "start": 2672,
                  "end": 2673,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2663,
            "end": 2671,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2652,
        "end": 2655,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2653,
            "end": 2654,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2653,
              "end": 2654,
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
      "type": "TSDeclareFunction",
      "start": 2676,
      "end": 2736,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2693,
        "end": 2707,
        "decorators": [],
        "name": "testFunction12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2711,
          "end": 2715,
          "decorators": [],
          "name": "x",
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
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2717,
          "end": 2721,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2718,
            "end": 2721,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2720,
              "end": 2721,
              "typeName": {
                "type": "Identifier",
                "start": 2720,
                "end": 2721,
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
        "start": 2722,
        "end": 2735,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2724,
          "end": 2735,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2732,
            "end": 2735,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2733,
                "end": 2734,
                "typeName": {
                  "type": "Identifier",
                  "start": 2733,
                  "end": 2734,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2724,
            "end": 2732,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2707,
        "end": 2710,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2708,
            "end": 2709,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2708,
              "end": 2709,
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
      "type": "TSDeclareFunction",
      "start": 2737,
      "end": 2792,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2754,
        "end": 2769,
        "decorators": [],
        "name": "testFunction12P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2773,
          "end": 2777,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2774,
            "end": 2777,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2776,
              "end": 2777,
              "typeName": {
                "type": "Identifier",
                "start": 2776,
                "end": 2777,
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
        "start": 2778,
        "end": 2791,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2780,
          "end": 2791,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2788,
            "end": 2791,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2789,
                "end": 2790,
                "typeName": {
                  "type": "Identifier",
                  "start": 2789,
                  "end": 2790,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2780,
            "end": 2788,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2769,
        "end": 2772,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2770,
            "end": 2771,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2770,
              "end": 2771,
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
      "type": "TSDeclareFunction",
      "start": 2793,
      "end": 2853,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2810,
        "end": 2825,
        "decorators": [],
        "name": "testFunction12P",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2829,
          "end": 2833,
          "decorators": [],
          "name": "x",
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
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2835,
          "end": 2839,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2836,
            "end": 2839,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2838,
              "end": 2839,
              "typeName": {
                "type": "Identifier",
                "start": 2838,
                "end": 2839,
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
        "start": 2840,
        "end": 2852,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2842,
          "end": 2852,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2849,
            "end": 2852,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2850,
                "end": 2851,
                "typeName": {
                  "type": "Identifier",
                  "start": 2850,
                  "end": 2851,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2842,
            "end": 2849,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2825,
        "end": 2828,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2826,
            "end": 2827,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2826,
              "end": 2827,
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
      "type": "VariableDeclaration",
      "start": 2855,
      "end": 2880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2859,
          "end": 2879,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2859,
            "end": 2879,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2861,
              "end": 2879,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2863,
                "end": 2879,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2871,
                  "end": 2879,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2872,
                      "end": 2878
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2863,
                  "end": 2871,
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
      "start": 2881,
      "end": 2941,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2885,
          "end": 2940,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2885,
            "end": 2888,
            "decorators": [],
            "name": "r1a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2891,
            "end": 2940,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2899,
                "end": 2911,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2913,
                "end": 2925,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2927,
                "end": 2939,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2891,
              "end": 2898,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2891,
                "end": 2893,
                "decorators": [],
                "name": "r1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2894,
                "end": 2898,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2942,
      "end": 3049,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2946,
          "end": 3048,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2946,
            "end": 2949,
            "decorators": [],
            "name": "r1b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2952,
            "end": 3048,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3007,
                "end": 3019,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3021,
                "end": 3033,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3035,
                "end": 3047,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2952,
              "end": 3006,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 2952,
                "end": 3001,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2960,
                    "end": 2972,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2974,
                    "end": 2986,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2988,
                    "end": 3000,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 2952,
                  "end": 2959,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2952,
                    "end": 2954,
                    "decorators": [],
                    "name": "r1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2955,
                    "end": 2959,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3002,
                "end": 3006,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3050,
      "end": 3113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3054,
          "end": 3112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3054,
            "end": 3057,
            "decorators": [],
            "name": "r1c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3060,
            "end": 3112,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3068,
                "end": 3081,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3083,
                "end": 3096,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3098,
                "end": 3111,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3060,
              "end": 3067,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3060,
                "end": 3062,
                "decorators": [],
                "name": "r1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3063,
                "end": 3067,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3114,
      "end": 3138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3118,
          "end": 3137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3118,
            "end": 3137,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3120,
              "end": 3137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3122,
                "end": 3137,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3129,
                  "end": 3137,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3130,
                      "end": 3136
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3122,
                  "end": 3129,
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
      "type": "VariableDeclaration",
      "start": 3139,
      "end": 3199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3143,
          "end": 3198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3143,
            "end": 3146,
            "decorators": [],
            "name": "s1a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3149,
            "end": 3198,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3157,
                "end": 3169,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3171,
                "end": 3183,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3185,
                "end": 3197,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3149,
              "end": 3156,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3149,
                "end": 3151,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3152,
                "end": 3156,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3200,
      "end": 3263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3204,
          "end": 3262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3204,
            "end": 3207,
            "decorators": [],
            "name": "s1b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3210,
            "end": 3262,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3218,
                "end": 3231,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3233,
                "end": 3246,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3248,
                "end": 3261,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3210,
              "end": 3217,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3210,
                "end": 3212,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3213,
                "end": 3217,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3264,
      "end": 3325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3268,
          "end": 3324,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3268,
            "end": 3271,
            "decorators": [],
            "name": "s1c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3274,
            "end": 3324,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3282,
                "end": 3295,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3297,
                "end": 3309,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3311,
                "end": 3323,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3274,
              "end": 3281,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3274,
                "end": 3276,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3277,
                "end": 3281,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3326,
      "end": 3434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3330,
          "end": 3433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3330,
            "end": 3333,
            "decorators": [],
            "name": "s1d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3336,
            "end": 3433,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3392,
                "end": 3404,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3406,
                "end": 3418,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3420,
                "end": 3432,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3336,
              "end": 3391,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 3336,
                "end": 3386,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3344,
                    "end": 3357,
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3359,
                    "end": 3371,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3373,
                    "end": 3385,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 3336,
                  "end": 3343,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3336,
                    "end": 3338,
                    "decorators": [],
                    "name": "s1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3339,
                    "end": 3343,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3387,
                "end": 3391,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3436,
      "end": 3469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3440,
          "end": 3468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3440,
            "end": 3468,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3442,
              "end": 3468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3444,
                "end": 3468,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3452,
                  "end": 3468,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3453,
                      "end": 3467,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3455,
                          "end": 3465,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3455,
                            "end": 3456,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3456,
                            "end": 3464,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3458,
                              "end": 3464
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3444,
                  "end": 3452,
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
      "start": 3470,
      "end": 3533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3474,
          "end": 3532,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3474,
            "end": 3477,
            "decorators": [],
            "name": "r2a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3480,
            "end": 3532,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3488,
                "end": 3501,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3503,
                "end": 3516,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3518,
                "end": 3531,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3480,
              "end": 3487,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3480,
                "end": 3482,
                "decorators": [],
                "name": "r2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3483,
                "end": 3487,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3534,
      "end": 3647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3538,
          "end": 3646,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3538,
            "end": 3541,
            "decorators": [],
            "name": "r2b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3544,
            "end": 3646,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3602,
                "end": 3615,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3617,
                "end": 3630,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3632,
                "end": 3645,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3544,
              "end": 3601,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 3544,
                "end": 3596,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3552,
                    "end": 3565,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3567,
                    "end": 3580,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3582,
                    "end": 3595,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 3544,
                  "end": 3551,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3544,
                    "end": 3546,
                    "decorators": [],
                    "name": "r2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3547,
                    "end": 3551,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3597,
                "end": 3601,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3648,
      "end": 3680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3652,
          "end": 3679,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3652,
            "end": 3679,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3654,
              "end": 3679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3656,
                "end": 3679,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3663,
                  "end": 3679,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3664,
                      "end": 3678,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3666,
                          "end": 3676,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3666,
                            "end": 3667,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3667,
                            "end": 3675,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3669,
                              "end": 3675
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3656,
                  "end": 3663,
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
      "type": "VariableDeclaration",
      "start": 3681,
      "end": 3744,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3685,
          "end": 3743,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3685,
            "end": 3688,
            "decorators": [],
            "name": "s2a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3691,
            "end": 3743,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3699,
                "end": 3712,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3714,
                "end": 3727,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3729,
                "end": 3742,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3691,
              "end": 3698,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3691,
                "end": 3693,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3694,
                "end": 3698,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3745,
      "end": 3811,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3749,
          "end": 3810,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3749,
            "end": 3752,
            "decorators": [],
            "name": "s2b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3755,
            "end": 3810,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3763,
                "end": 3777,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3779,
                "end": 3793,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3795,
                "end": 3809,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3755,
              "end": 3762,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3755,
                "end": 3757,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3758,
                "end": 3762,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3812,
      "end": 3876,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3816,
          "end": 3875,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3816,
            "end": 3819,
            "decorators": [],
            "name": "s2c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3822,
            "end": 3875,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3830,
                "end": 3844,
                "decorators": [],
                "name": "testFunction2P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3846,
                "end": 3859,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3861,
                "end": 3874,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3822,
              "end": 3829,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3822,
                "end": 3824,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3825,
                "end": 3829,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3877,
      "end": 3991,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3881,
          "end": 3990,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3881,
            "end": 3884,
            "decorators": [],
            "name": "s2d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3887,
            "end": 3990,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3946,
                "end": 3959,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3961,
                "end": 3974,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3976,
                "end": 3989,
                "decorators": [],
                "name": "testFunction2",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 3887,
              "end": 3945,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 3887,
                "end": 3940,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3895,
                    "end": 3909,
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3911,
                    "end": 3924,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3926,
                    "end": 3939,
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 3887,
                  "end": 3894,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3887,
                    "end": 3889,
                    "decorators": [],
                    "name": "s2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3890,
                    "end": 3894,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3941,
                "end": 3945,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3993,
      "end": 4018,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3997,
          "end": 4017,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3997,
            "end": 4017,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3999,
              "end": 4017,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4001,
                "end": 4017,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4009,
                  "end": 4017,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4010,
                      "end": 4016
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4001,
                  "end": 4009,
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
      "start": 4019,
      "end": 4082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4023,
          "end": 4081,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4023,
            "end": 4026,
            "decorators": [],
            "name": "r3a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4029,
            "end": 4081,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4037,
                "end": 4050,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4052,
                "end": 4065,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4067,
                "end": 4080,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4029,
              "end": 4036,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4029,
                "end": 4031,
                "decorators": [],
                "name": "r3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4032,
                "end": 4036,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4083,
      "end": 4196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4087,
          "end": 4195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4087,
            "end": 4090,
            "decorators": [],
            "name": "r3b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4093,
            "end": 4195,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4151,
                "end": 4164,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4166,
                "end": 4179,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4181,
                "end": 4194,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4093,
              "end": 4150,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 4093,
                "end": 4145,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 4101,
                    "end": 4114,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4116,
                    "end": 4129,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4131,
                    "end": 4144,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 4093,
                  "end": 4100,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4093,
                    "end": 4095,
                    "decorators": [],
                    "name": "r3",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4096,
                    "end": 4100,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4146,
                "end": 4150,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4197,
      "end": 4221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4201,
          "end": 4220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4201,
            "end": 4220,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4203,
              "end": 4220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4205,
                "end": 4220,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4212,
                  "end": 4220,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4213,
                      "end": 4219
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4205,
                  "end": 4212,
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
      "type": "VariableDeclaration",
      "start": 4222,
      "end": 4285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4226,
          "end": 4284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4226,
            "end": 4229,
            "decorators": [],
            "name": "s3a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4232,
            "end": 4284,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4240,
                "end": 4253,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4255,
                "end": 4268,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4270,
                "end": 4283,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4232,
              "end": 4239,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4232,
                "end": 4234,
                "decorators": [],
                "name": "s3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4235,
                "end": 4239,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4286,
      "end": 4352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4290,
          "end": 4351,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4290,
            "end": 4293,
            "decorators": [],
            "name": "s3b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4296,
            "end": 4351,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4304,
                "end": 4318,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4320,
                "end": 4334,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4336,
                "end": 4350,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4296,
              "end": 4303,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4296,
                "end": 4298,
                "decorators": [],
                "name": "s3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4299,
                "end": 4303,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4353,
      "end": 4417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4357,
          "end": 4416,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4357,
            "end": 4360,
            "decorators": [],
            "name": "s3c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4363,
            "end": 4416,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4371,
                "end": 4385,
                "decorators": [],
                "name": "testFunction3P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4387,
                "end": 4400,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4402,
                "end": 4415,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4363,
              "end": 4370,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4363,
                "end": 4365,
                "decorators": [],
                "name": "s3",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4366,
                "end": 4370,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4418,
      "end": 4532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4422,
          "end": 4531,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4422,
            "end": 4425,
            "decorators": [],
            "name": "s3d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4428,
            "end": 4531,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4487,
                "end": 4500,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4502,
                "end": 4515,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4517,
                "end": 4530,
                "decorators": [],
                "name": "testFunction3",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4428,
              "end": 4486,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 4428,
                "end": 4481,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 4436,
                    "end": 4450,
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4452,
                    "end": 4465,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4467,
                    "end": 4480,
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 4428,
                  "end": 4435,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4428,
                    "end": 4430,
                    "decorators": [],
                    "name": "s3",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4431,
                    "end": 4435,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4482,
                "end": 4486,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4550,
      "end": 4575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4554,
          "end": 4574,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4554,
            "end": 4574,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4556,
              "end": 4574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4558,
                "end": 4574,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4566,
                  "end": 4574,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4567,
                      "end": 4573
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4558,
                  "end": 4566,
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
      "start": 4576,
      "end": 4620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4580,
          "end": 4619,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4580,
            "end": 4619,
            "decorators": [],
            "name": "sIPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4589,
              "end": 4619,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4591,
                "end": 4619,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4592,
                    "end": 4598,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4593,
                      "end": 4598,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4595,
                        "end": 4598
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4600,
                  "end": 4619,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4603,
                    "end": 4619,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4611,
                      "end": 4619,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4612,
                          "end": 4618
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4603,
                      "end": 4611,
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false
                    }
                  }
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
      "start": 4621,
      "end": 4663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4625,
          "end": 4662,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4625,
            "end": 4662,
            "decorators": [],
            "name": "sPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4633,
              "end": 4662,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4635,
                "end": 4662,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4636,
                    "end": 4642,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4637,
                      "end": 4642,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4639,
                        "end": 4642
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4644,
                  "end": 4662,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4647,
                    "end": 4662,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4654,
                      "end": 4662,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4655,
                          "end": 4661
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4647,
                      "end": 4654,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
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
      "start": 4664,
      "end": 4727,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4668,
          "end": 4726,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4668,
            "end": 4671,
            "decorators": [],
            "name": "r4a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4674,
            "end": 4726,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4682,
                "end": 4695,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4697,
                "end": 4710,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4712,
                "end": 4725,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4674,
              "end": 4681,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4674,
                "end": 4676,
                "decorators": [],
                "name": "r4",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4677,
                "end": 4681,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4737,
      "end": 4842,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4741,
          "end": 4841,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4741,
            "end": 4744,
            "decorators": [],
            "name": "r4b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4747,
            "end": 4841,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4801,
                "end": 4810,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4812,
                "end": 4825,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4827,
                "end": 4840,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4747,
              "end": 4800,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 4747,
                "end": 4795,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 4755,
                    "end": 4764,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4766,
                    "end": 4779,
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4781,
                    "end": 4794,
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 4747,
                  "end": 4754,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4747,
                    "end": 4749,
                    "decorators": [],
                    "name": "r4",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4750,
                    "end": 4754,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4796,
                "end": 4800,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4849,
      "end": 4873,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4853,
          "end": 4872,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4853,
            "end": 4872,
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4855,
              "end": 4872,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4857,
                "end": 4872,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4864,
                  "end": 4872,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4865,
                      "end": 4871
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4857,
                  "end": 4864,
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
      "type": "VariableDeclaration",
      "start": 4874,
      "end": 4937,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4878,
          "end": 4936,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4878,
            "end": 4881,
            "decorators": [],
            "name": "s4a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4884,
            "end": 4936,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4892,
                "end": 4905,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4907,
                "end": 4920,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4922,
                "end": 4935,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4884,
              "end": 4891,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4884,
                "end": 4886,
                "decorators": [],
                "name": "s4",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4887,
                "end": 4891,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4947,
      "end": 5013,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4951,
          "end": 5012,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4951,
            "end": 4954,
            "decorators": [],
            "name": "s4b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4957,
            "end": 5012,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4965,
                "end": 4979,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4981,
                "end": 4995,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4997,
                "end": 5011,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4957,
              "end": 4964,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4957,
                "end": 4959,
                "decorators": [],
                "name": "s4",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4960,
                "end": 4964,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5024,
      "end": 5088,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5028,
          "end": 5087,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5028,
            "end": 5031,
            "decorators": [],
            "name": "s4c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5034,
            "end": 5087,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5042,
                "end": 5056,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5058,
                "end": 5071,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5073,
                "end": 5086,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5034,
              "end": 5041,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5034,
                "end": 5036,
                "decorators": [],
                "name": "s4",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5037,
                "end": 5041,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5098,
      "end": 5205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5102,
          "end": 5204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5102,
            "end": 5105,
            "decorators": [],
            "name": "s4d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5108,
            "end": 5204,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5163,
                "end": 5172,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5174,
                "end": 5188,
                "decorators": [],
                "name": "testFunction4P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5190,
                "end": 5203,
                "decorators": [],
                "name": "testFunction4",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5108,
              "end": 5162,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 5108,
                "end": 5157,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5116,
                    "end": 5125,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5127,
                    "end": 5141,
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5143,
                    "end": 5156,
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 5108,
                  "end": 5115,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5108,
                    "end": 5110,
                    "decorators": [],
                    "name": "s4",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5111,
                    "end": 5115,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5158,
                "end": 5162,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5207,
      "end": 5232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5211,
          "end": 5231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5211,
            "end": 5231,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5213,
              "end": 5231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5215,
                "end": 5231,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5223,
                  "end": 5231,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5224,
                      "end": 5230
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5215,
                  "end": 5223,
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
      "start": 5233,
      "end": 5296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5237,
          "end": 5295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5237,
            "end": 5240,
            "decorators": [],
            "name": "r5a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5243,
            "end": 5295,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5251,
                "end": 5264,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5266,
                "end": 5279,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5281,
                "end": 5294,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5243,
              "end": 5250,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5243,
                "end": 5245,
                "decorators": [],
                "name": "r5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5246,
                "end": 5250,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5306,
      "end": 5395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5310,
          "end": 5394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5310,
            "end": 5313,
            "decorators": [],
            "name": "r5b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5316,
            "end": 5394,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5362,
                "end": 5371,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5373,
                "end": 5382,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5384,
                "end": 5393,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5316,
              "end": 5361,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 5316,
                "end": 5356,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5324,
                    "end": 5333,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5335,
                    "end": 5344,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5346,
                    "end": 5355,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 5316,
                  "end": 5323,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5316,
                    "end": 5318,
                    "decorators": [],
                    "name": "r5",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5319,
                    "end": 5323,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5357,
                "end": 5361,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5402,
      "end": 5426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5406,
          "end": 5425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5406,
            "end": 5425,
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5408,
              "end": 5425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5410,
                "end": 5425,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5417,
                  "end": 5425,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5418,
                      "end": 5424
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5410,
                  "end": 5417,
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
      "type": "VariableDeclaration",
      "start": 5427,
      "end": 5490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5431,
          "end": 5489,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5431,
            "end": 5434,
            "decorators": [],
            "name": "s5a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5437,
            "end": 5489,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5445,
                "end": 5458,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5460,
                "end": 5473,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5475,
                "end": 5488,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5437,
              "end": 5444,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5437,
                "end": 5439,
                "decorators": [],
                "name": "s5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5440,
                "end": 5444,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5500,
      "end": 5566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5504,
          "end": 5565,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5504,
            "end": 5507,
            "decorators": [],
            "name": "s5b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5510,
            "end": 5565,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5518,
                "end": 5532,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5534,
                "end": 5548,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5550,
                "end": 5564,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5510,
              "end": 5517,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5510,
                "end": 5512,
                "decorators": [],
                "name": "s5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5513,
                "end": 5517,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5576,
      "end": 5640,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5580,
          "end": 5639,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5580,
            "end": 5583,
            "decorators": [],
            "name": "s5c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5586,
            "end": 5639,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5594,
                "end": 5608,
                "decorators": [],
                "name": "testFunction5P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5610,
                "end": 5623,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5625,
                "end": 5638,
                "decorators": [],
                "name": "testFunction5",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5586,
              "end": 5593,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5586,
                "end": 5588,
                "decorators": [],
                "name": "s5",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5589,
                "end": 5593,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5650,
      "end": 5736,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5654,
          "end": 5735,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5654,
            "end": 5657,
            "decorators": [],
            "name": "s5d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5660,
            "end": 5735,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5703,
                "end": 5712,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5714,
                "end": 5723,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5725,
                "end": 5734,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5660,
              "end": 5702,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 5660,
                "end": 5697,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5668,
                    "end": 5676,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5678,
                    "end": 5686,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5688,
                    "end": 5696,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 5660,
                  "end": 5667,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5660,
                    "end": 5662,
                    "decorators": [],
                    "name": "s5",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5663,
                    "end": 5667,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5698,
                "end": 5702,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5744,
      "end": 5769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5748,
          "end": 5768,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5748,
            "end": 5768,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5750,
              "end": 5768,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5752,
                "end": 5768,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5760,
                  "end": 5768,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5761,
                      "end": 5767
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5752,
                  "end": 5760,
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
      "start": 5770,
      "end": 5833,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5774,
          "end": 5832,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5774,
            "end": 5777,
            "decorators": [],
            "name": "r6a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5780,
            "end": 5832,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5788,
                "end": 5801,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5803,
                "end": 5816,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5818,
                "end": 5831,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5780,
              "end": 5787,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5780,
                "end": 5782,
                "decorators": [],
                "name": "r6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5783,
                "end": 5787,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5843,
      "end": 5932,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5847,
          "end": 5931,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5847,
            "end": 5850,
            "decorators": [],
            "name": "r6b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5853,
            "end": 5931,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5899,
                "end": 5908,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5910,
                "end": 5919,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5921,
                "end": 5930,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5853,
              "end": 5898,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 5853,
                "end": 5893,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5861,
                    "end": 5870,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5872,
                    "end": 5881,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5883,
                    "end": 5892,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 5853,
                  "end": 5860,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5853,
                    "end": 5855,
                    "decorators": [],
                    "name": "r6",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5856,
                    "end": 5860,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5894,
                "end": 5898,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 5939,
      "end": 5963,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5943,
          "end": 5962,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5943,
            "end": 5962,
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5945,
              "end": 5962,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5947,
                "end": 5962,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5954,
                  "end": 5962,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5955,
                      "end": 5961
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5947,
                  "end": 5954,
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
      "type": "VariableDeclaration",
      "start": 5964,
      "end": 6027,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5968,
          "end": 6026,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5968,
            "end": 5971,
            "decorators": [],
            "name": "s6a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5974,
            "end": 6026,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5982,
                "end": 5995,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5997,
                "end": 6010,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6012,
                "end": 6025,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 5974,
              "end": 5981,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5974,
                "end": 5976,
                "decorators": [],
                "name": "s6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5977,
                "end": 5981,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6037,
      "end": 6103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6041,
          "end": 6102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6041,
            "end": 6044,
            "decorators": [],
            "name": "s6b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6047,
            "end": 6102,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6055,
                "end": 6069,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6071,
                "end": 6085,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6087,
                "end": 6101,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6047,
              "end": 6054,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6047,
                "end": 6049,
                "decorators": [],
                "name": "s6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6050,
                "end": 6054,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6113,
      "end": 6177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6117,
          "end": 6176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6117,
            "end": 6120,
            "decorators": [],
            "name": "s6c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6123,
            "end": 6176,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6131,
                "end": 6145,
                "decorators": [],
                "name": "testFunction6P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6147,
                "end": 6160,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6162,
                "end": 6175,
                "decorators": [],
                "name": "testFunction6",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6123,
              "end": 6130,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6123,
                "end": 6125,
                "decorators": [],
                "name": "s6",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6126,
                "end": 6130,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6187,
      "end": 6273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6191,
          "end": 6272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6191,
            "end": 6194,
            "decorators": [],
            "name": "s6d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6197,
            "end": 6272,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6240,
                "end": 6249,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6251,
                "end": 6260,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6262,
                "end": 6271,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6197,
              "end": 6239,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 6197,
                "end": 6234,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6205,
                    "end": 6213,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6215,
                    "end": 6223,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6225,
                    "end": 6233,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 6197,
                  "end": 6204,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6197,
                    "end": 6199,
                    "decorators": [],
                    "name": "s6",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6200,
                    "end": 6204,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6235,
                "end": 6239,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6281,
      "end": 6306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6285,
          "end": 6305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6285,
            "end": 6305,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6287,
              "end": 6305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6289,
                "end": 6305,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6297,
                  "end": 6305,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6298,
                      "end": 6304
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6289,
                  "end": 6297,
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
      "start": 6307,
      "end": 6370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6311,
          "end": 6369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6311,
            "end": 6314,
            "decorators": [],
            "name": "r7a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6317,
            "end": 6369,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6325,
                "end": 6338,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6340,
                "end": 6353,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6355,
                "end": 6368,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6317,
              "end": 6324,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6317,
                "end": 6319,
                "decorators": [],
                "name": "r7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6320,
                "end": 6324,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6380,
      "end": 6469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6384,
          "end": 6468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6384,
            "end": 6387,
            "decorators": [],
            "name": "r7b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6390,
            "end": 6468,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6436,
                "end": 6445,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6447,
                "end": 6456,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6458,
                "end": 6467,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6390,
              "end": 6435,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 6390,
                "end": 6430,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6398,
                    "end": 6407,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6409,
                    "end": 6418,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6420,
                    "end": 6429,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 6390,
                  "end": 6397,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6390,
                    "end": 6392,
                    "decorators": [],
                    "name": "r7",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6393,
                    "end": 6397,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6431,
                "end": 6435,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6476,
      "end": 6500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6480,
          "end": 6499,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6480,
            "end": 6499,
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6482,
              "end": 6499,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6484,
                "end": 6499,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6491,
                  "end": 6499,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6492,
                      "end": 6498
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6484,
                  "end": 6491,
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
      "type": "VariableDeclaration",
      "start": 6501,
      "end": 6564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6505,
          "end": 6563,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6505,
            "end": 6508,
            "decorators": [],
            "name": "s7a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6511,
            "end": 6563,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6519,
                "end": 6532,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6534,
                "end": 6547,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6549,
                "end": 6562,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6511,
              "end": 6518,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6511,
                "end": 6513,
                "decorators": [],
                "name": "r7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6514,
                "end": 6518,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6574,
      "end": 6640,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6578,
          "end": 6639,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6578,
            "end": 6581,
            "decorators": [],
            "name": "s7b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6584,
            "end": 6639,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6592,
                "end": 6606,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6608,
                "end": 6622,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6624,
                "end": 6638,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6584,
              "end": 6591,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6584,
                "end": 6586,
                "decorators": [],
                "name": "r7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6587,
                "end": 6591,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6650,
      "end": 6714,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6654,
          "end": 6713,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6654,
            "end": 6657,
            "decorators": [],
            "name": "s7c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6660,
            "end": 6713,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6668,
                "end": 6682,
                "decorators": [],
                "name": "testFunction7P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6684,
                "end": 6697,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6699,
                "end": 6712,
                "decorators": [],
                "name": "testFunction7",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6660,
              "end": 6667,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6660,
                "end": 6662,
                "decorators": [],
                "name": "r7",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6663,
                "end": 6667,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6724,
      "end": 6807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6728,
          "end": 6806,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6728,
            "end": 6731,
            "decorators": [],
            "name": "s7d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6734,
            "end": 6806,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6777,
                "end": 6785,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6787,
                "end": 6795,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6797,
                "end": 6805,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6734,
              "end": 6776,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 6734,
                "end": 6771,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6742,
                    "end": 6750,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6752,
                    "end": 6760,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6762,
                    "end": 6770,
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 6734,
                  "end": 6741,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6734,
                    "end": 6736,
                    "decorators": [],
                    "name": "r7",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6737,
                    "end": 6741,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6772,
                "end": 6776,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 6816,
      "end": 6841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6820,
          "end": 6840,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6820,
            "end": 6840,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6822,
              "end": 6840,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6824,
                "end": 6840,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6832,
                  "end": 6840,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 6833,
                      "end": 6839
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6824,
                  "end": 6832,
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
      "start": 6842,
      "end": 6886,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6846,
          "end": 6885,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6846,
            "end": 6885,
            "decorators": [],
            "name": "nIPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6855,
              "end": 6885,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 6857,
                "end": 6885,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6858,
                    "end": 6864,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6859,
                      "end": 6864,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 6861,
                        "end": 6864
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6866,
                  "end": 6885,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6869,
                    "end": 6885,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6877,
                      "end": 6885,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6878,
                          "end": 6884
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6869,
                      "end": 6877,
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false
                    }
                  }
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
      "start": 6887,
      "end": 6929,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6891,
          "end": 6928,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6891,
            "end": 6928,
            "decorators": [],
            "name": "nPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6899,
              "end": 6928,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 6901,
                "end": 6928,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6902,
                    "end": 6908,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6903,
                      "end": 6908,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 6905,
                        "end": 6908
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 6910,
                  "end": 6928,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 6913,
                    "end": 6928,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 6920,
                      "end": 6928,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6921,
                          "end": 6927
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 6913,
                      "end": 6920,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
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
      "start": 6930,
      "end": 6993,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6934,
          "end": 6992,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6934,
            "end": 6937,
            "decorators": [],
            "name": "r8a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6940,
            "end": 6992,
            "arguments": [
              {
                "type": "Identifier",
                "start": 6948,
                "end": 6961,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6963,
                "end": 6976,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6978,
                "end": 6991,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 6940,
              "end": 6947,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6940,
                "end": 6942,
                "decorators": [],
                "name": "r8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6943,
                "end": 6947,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7003,
      "end": 7092,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7007,
          "end": 7091,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7007,
            "end": 7010,
            "decorators": [],
            "name": "r8b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7013,
            "end": 7091,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7059,
                "end": 7068,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7070,
                "end": 7079,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7081,
                "end": 7090,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7013,
              "end": 7058,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 7013,
                "end": 7053,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 7021,
                    "end": 7030,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7032,
                    "end": 7041,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7043,
                    "end": 7052,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 7013,
                  "end": 7020,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 7013,
                    "end": 7015,
                    "decorators": [],
                    "name": "r8",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 7016,
                    "end": 7020,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7054,
                "end": 7058,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7099,
      "end": 7123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7103,
          "end": 7122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7103,
            "end": 7122,
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7105,
              "end": 7122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7107,
                "end": 7122,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7114,
                  "end": 7122,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7115,
                      "end": 7121
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 7107,
                  "end": 7114,
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
      "type": "VariableDeclaration",
      "start": 7124,
      "end": 7187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7128,
          "end": 7186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7128,
            "end": 7131,
            "decorators": [],
            "name": "s8a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7134,
            "end": 7186,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7142,
                "end": 7155,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7157,
                "end": 7170,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7172,
                "end": 7185,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7134,
              "end": 7141,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7134,
                "end": 7136,
                "decorators": [],
                "name": "s8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7137,
                "end": 7141,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7197,
      "end": 7263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7201,
          "end": 7262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7201,
            "end": 7204,
            "decorators": [],
            "name": "s8b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7207,
            "end": 7262,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7215,
                "end": 7229,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7231,
                "end": 7245,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7247,
                "end": 7261,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7207,
              "end": 7214,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7207,
                "end": 7209,
                "decorators": [],
                "name": "s8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7210,
                "end": 7214,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7273,
      "end": 7337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7277,
          "end": 7336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7277,
            "end": 7280,
            "decorators": [],
            "name": "s8c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7283,
            "end": 7336,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7291,
                "end": 7305,
                "decorators": [],
                "name": "testFunction8P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7307,
                "end": 7320,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7322,
                "end": 7335,
                "decorators": [],
                "name": "testFunction8",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7283,
              "end": 7290,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7283,
                "end": 7285,
                "decorators": [],
                "name": "s8",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7286,
                "end": 7290,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7347,
      "end": 7436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7351,
          "end": 7435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7351,
            "end": 7354,
            "decorators": [],
            "name": "s8d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7357,
            "end": 7435,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7403,
                "end": 7412,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7414,
                "end": 7423,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7425,
                "end": 7434,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7357,
              "end": 7402,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 7357,
                "end": 7397,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 7365,
                    "end": 7374,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7376,
                    "end": 7385,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7387,
                    "end": 7396,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 7357,
                  "end": 7364,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 7357,
                    "end": 7359,
                    "decorators": [],
                    "name": "s8",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 7360,
                    "end": 7364,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7398,
                "end": 7402,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7444,
      "end": 7469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7448,
          "end": 7468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7448,
            "end": 7468,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7450,
              "end": 7468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7452,
                "end": 7468,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7460,
                  "end": 7468,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7461,
                      "end": 7467
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 7452,
                  "end": 7460,
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
      "start": 7470,
      "end": 7533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7474,
          "end": 7532,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7474,
            "end": 7477,
            "decorators": [],
            "name": "r9a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7480,
            "end": 7532,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7488,
                "end": 7501,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7503,
                "end": 7516,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7518,
                "end": 7531,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7480,
              "end": 7487,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7480,
                "end": 7482,
                "decorators": [],
                "name": "r9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7483,
                "end": 7487,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7543,
      "end": 7594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7547,
          "end": 7593,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7547,
            "end": 7550,
            "decorators": [],
            "name": "r9b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7553,
            "end": 7593,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7561,
                "end": 7570,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7572,
                "end": 7581,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7583,
                "end": 7592,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7553,
              "end": 7560,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7553,
                "end": 7555,
                "decorators": [],
                "name": "r9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7556,
                "end": 7560,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7601,
      "end": 7652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7605,
          "end": 7651,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7605,
            "end": 7608,
            "decorators": [],
            "name": "r9c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7611,
            "end": 7651,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7619,
                "end": 7628,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7630,
                "end": 7639,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7641,
                "end": 7650,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7611,
              "end": 7618,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7611,
                "end": 7613,
                "decorators": [],
                "name": "r9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7614,
                "end": 7618,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7659,
      "end": 7713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7663,
          "end": 7712,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7663,
            "end": 7666,
            "decorators": [],
            "name": "r9d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7669,
            "end": 7712,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7677,
                "end": 7689,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7691,
                "end": 7700,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7702,
                "end": 7711,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7669,
              "end": 7676,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7669,
                "end": 7671,
                "decorators": [],
                "name": "r9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7672,
                "end": 7676,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7723,
      "end": 7815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7727,
          "end": 7814,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7727,
            "end": 7730,
            "decorators": [],
            "name": "r9e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7733,
            "end": 7814,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7782,
                "end": 7791,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7793,
                "end": 7802,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7804,
                "end": 7813,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7733,
              "end": 7781,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 7733,
                "end": 7776,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 7741,
                    "end": 7753,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7755,
                    "end": 7764,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7766,
                    "end": 7775,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 7733,
                  "end": 7740,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 7733,
                    "end": 7735,
                    "decorators": [],
                    "name": "r9",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 7736,
                    "end": 7740,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7777,
                "end": 7781,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7822,
      "end": 7846,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7826,
          "end": 7845,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7826,
            "end": 7845,
            "decorators": [],
            "name": "s9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7828,
              "end": 7845,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7830,
                "end": 7845,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7837,
                  "end": 7845,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7838,
                      "end": 7844
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 7830,
                  "end": 7837,
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
      "type": "VariableDeclaration",
      "start": 7847,
      "end": 7910,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7851,
          "end": 7909,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7851,
            "end": 7854,
            "decorators": [],
            "name": "s9a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7857,
            "end": 7909,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7865,
                "end": 7878,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7880,
                "end": 7893,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7895,
                "end": 7908,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7857,
              "end": 7864,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7857,
                "end": 7859,
                "decorators": [],
                "name": "s9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7860,
                "end": 7864,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7920,
      "end": 7986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7924,
          "end": 7985,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7924,
            "end": 7927,
            "decorators": [],
            "name": "s9b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7930,
            "end": 7985,
            "arguments": [
              {
                "type": "Identifier",
                "start": 7938,
                "end": 7952,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7954,
                "end": 7968,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7970,
                "end": 7984,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7930,
              "end": 7937,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 7930,
                "end": 7932,
                "decorators": [],
                "name": "s9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 7933,
                "end": 7937,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7996,
      "end": 8060,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8000,
          "end": 8059,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8000,
            "end": 8003,
            "decorators": [],
            "name": "s9c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8006,
            "end": 8059,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8014,
                "end": 8028,
                "decorators": [],
                "name": "testFunction9P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8030,
                "end": 8043,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8045,
                "end": 8058,
                "decorators": [],
                "name": "testFunction9",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8006,
              "end": 8013,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8006,
                "end": 8008,
                "decorators": [],
                "name": "s9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8009,
                "end": 8013,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8070,
      "end": 8118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8074,
          "end": 8117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8074,
            "end": 8077,
            "decorators": [],
            "name": "s9d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8080,
            "end": 8117,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8088,
                "end": 8096,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8098,
                "end": 8106,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8108,
                "end": 8116,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8080,
              "end": 8087,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8080,
                "end": 8082,
                "decorators": [],
                "name": "s9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8083,
                "end": 8087,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8125,
      "end": 8173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8129,
          "end": 8172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8129,
            "end": 8132,
            "decorators": [],
            "name": "s9e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8135,
            "end": 8172,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8143,
                "end": 8151,
                "decorators": [],
                "name": "nPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8153,
                "end": 8161,
                "decorators": [],
                "name": "nPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8163,
                "end": 8171,
                "decorators": [],
                "name": "nPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8135,
              "end": 8142,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8135,
                "end": 8137,
                "decorators": [],
                "name": "s9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8138,
                "end": 8142,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8180,
      "end": 8234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8184,
          "end": 8233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8184,
            "end": 8187,
            "decorators": [],
            "name": "s9f",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8190,
            "end": 8233,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8198,
                "end": 8210,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8212,
                "end": 8221,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8223,
                "end": 8232,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8190,
              "end": 8197,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8190,
                "end": 8192,
                "decorators": [],
                "name": "s9",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8193,
                "end": 8197,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8244,
      "end": 8336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8248,
          "end": 8335,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8248,
            "end": 8251,
            "decorators": [],
            "name": "s9g",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8254,
            "end": 8335,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8303,
                "end": 8312,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8314,
                "end": 8323,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8325,
                "end": 8334,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8254,
              "end": 8302,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 8254,
                "end": 8297,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 8262,
                    "end": 8274,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8276,
                    "end": 8285,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8287,
                    "end": 8296,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 8254,
                  "end": 8261,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 8254,
                    "end": 8256,
                    "decorators": [],
                    "name": "s9",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 8257,
                    "end": 8261,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8298,
                "end": 8302,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8344,
      "end": 8377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8348,
          "end": 8376,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8348,
            "end": 8351,
            "decorators": [],
            "name": "r10",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8354,
            "end": 8376,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8369,
                "end": 8375,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 8374,
                  "end": 8375,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8369,
                    "end": 8370,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 8354,
              "end": 8368,
              "decorators": [],
              "name": "testFunction10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8378,
      "end": 8446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8382,
          "end": 8445,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8382,
            "end": 8386,
            "decorators": [],
            "name": "r10a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8389,
            "end": 8445,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8398,
                "end": 8412,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8414,
                "end": 8428,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8430,
                "end": 8444,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8389,
              "end": 8397,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8389,
                "end": 8392,
                "decorators": [],
                "name": "r10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8393,
                "end": 8397,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8453,
      "end": 8506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8457,
          "end": 8505,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8457,
            "end": 8461,
            "decorators": [],
            "name": "r10b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8464,
            "end": 8505,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8473,
                "end": 8482,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8484,
                "end": 8493,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8495,
                "end": 8504,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8464,
              "end": 8472,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8464,
                "end": 8467,
                "decorators": [],
                "name": "r10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8468,
                "end": 8472,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8513,
      "end": 8566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8517,
          "end": 8565,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8517,
            "end": 8521,
            "decorators": [],
            "name": "r10c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8524,
            "end": 8565,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8533,
                "end": 8542,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8544,
                "end": 8553,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8555,
                "end": 8564,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8524,
              "end": 8532,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8524,
                "end": 8527,
                "decorators": [],
                "name": "r10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8528,
                "end": 8532,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8573,
      "end": 8629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8577,
          "end": 8628,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8577,
            "end": 8581,
            "decorators": [],
            "name": "r10d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8584,
            "end": 8628,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8593,
                "end": 8605,
                "decorators": [],
                "name": "testFunction",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8607,
                "end": 8616,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8618,
                "end": 8627,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8584,
              "end": 8592,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8584,
                "end": 8587,
                "decorators": [],
                "name": "r10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8588,
                "end": 8592,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8639,
      "end": 8733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8643,
          "end": 8732,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8643,
            "end": 8647,
            "decorators": [],
            "name": "r10e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8650,
            "end": 8732,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8700,
                "end": 8709,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8711,
                "end": 8720,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8722,
                "end": 8731,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8650,
              "end": 8699,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 8650,
                "end": 8694,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 8659,
                    "end": 8671,
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8673,
                    "end": 8682,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8684,
                    "end": 8693,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 8650,
                  "end": 8658,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 8650,
                    "end": 8653,
                    "decorators": [],
                    "name": "r10",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 8654,
                    "end": 8658,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8695,
                "end": 8699,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8740,
      "end": 8774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8744,
          "end": 8773,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8744,
            "end": 8747,
            "decorators": [],
            "name": "s10",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8750,
            "end": 8773,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8766,
                "end": 8772,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 8771,
                  "end": 8772,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8766,
                    "end": 8767,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 8750,
              "end": 8765,
              "decorators": [],
              "name": "testFunction10P",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8775,
      "end": 8843,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8779,
          "end": 8842,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8779,
            "end": 8783,
            "decorators": [],
            "name": "s10a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8786,
            "end": 8842,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8795,
                "end": 8809,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8811,
                "end": 8825,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8827,
                "end": 8841,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8786,
              "end": 8794,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8786,
                "end": 8789,
                "decorators": [],
                "name": "s10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8790,
                "end": 8794,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8850,
      "end": 8921,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8854,
          "end": 8920,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8854,
            "end": 8858,
            "decorators": [],
            "name": "s10b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8861,
            "end": 8920,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8870,
                "end": 8885,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8887,
                "end": 8902,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8904,
                "end": 8919,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8861,
              "end": 8869,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8861,
                "end": 8864,
                "decorators": [],
                "name": "s10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8865,
                "end": 8869,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 8928,
      "end": 8997,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8932,
          "end": 8996,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8932,
            "end": 8936,
            "decorators": [],
            "name": "s10c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8939,
            "end": 8996,
            "arguments": [
              {
                "type": "Identifier",
                "start": 8948,
                "end": 8963,
                "decorators": [],
                "name": "testFunction10P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8965,
                "end": 8979,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8981,
                "end": 8995,
                "decorators": [],
                "name": "testFunction10",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8939,
              "end": 8947,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 8939,
                "end": 8942,
                "decorators": [],
                "name": "s10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 8943,
                "end": 8947,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9004,
      "end": 9054,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9008,
          "end": 9053,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9008,
            "end": 9012,
            "decorators": [],
            "name": "s10d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9015,
            "end": 9053,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9024,
                "end": 9032,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9034,
                "end": 9042,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9044,
                "end": 9052,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9015,
              "end": 9023,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9015,
                "end": 9018,
                "decorators": [],
                "name": "s10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9019,
                "end": 9023,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9061,
      "end": 9113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9065,
          "end": 9112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9065,
            "end": 9069,
            "decorators": [],
            "name": "s10e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9072,
            "end": 9112,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9081,
                "end": 9090,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9092,
                "end": 9100,
                "decorators": [],
                "name": "nPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9102,
                "end": 9111,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9072,
              "end": 9080,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9072,
                "end": 9075,
                "decorators": [],
                "name": "s10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9076,
                "end": 9080,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9120,
      "end": 9177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9124,
          "end": 9176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9124,
            "end": 9128,
            "decorators": [],
            "name": "s10f",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9131,
            "end": 9176,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9140,
                "end": 9153,
                "decorators": [],
                "name": "testFunctionP",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9155,
                "end": 9164,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9166,
                "end": 9175,
                "decorators": [],
                "name": "nIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9131,
              "end": 9139,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9131,
                "end": 9134,
                "decorators": [],
                "name": "s10",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9135,
                "end": 9139,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9187,
      "end": 9281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9191,
          "end": 9280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9191,
            "end": 9195,
            "decorators": [],
            "name": "s10g",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9198,
            "end": 9280,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9249,
                "end": 9257,
                "decorators": [],
                "name": "sPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9259,
                "end": 9268,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9270,
                "end": 9279,
                "decorators": [],
                "name": "sIPromise",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9198,
              "end": 9248,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 9198,
                "end": 9243,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 9207,
                    "end": 9220,
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 9222,
                    "end": 9231,
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 9233,
                    "end": 9242,
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 9198,
                  "end": 9206,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 9198,
                    "end": 9201,
                    "decorators": [],
                    "name": "s10",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 9202,
                    "end": 9206,
                    "decorators": [],
                    "name": "then",
                    "optional": false
                  }
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9244,
                "end": 9248,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9289,
      "end": 9315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9293,
          "end": 9314,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9293,
            "end": 9314,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9296,
              "end": 9314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9298,
                "end": 9314,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9306,
                  "end": 9314,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9307,
                      "end": 9313
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 9298,
                  "end": 9306,
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
      "start": 9316,
      "end": 9384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9320,
          "end": 9383,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9320,
            "end": 9324,
            "decorators": [],
            "name": "r11a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9327,
            "end": 9383,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9336,
                "end": 9350,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9352,
                "end": 9366,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9368,
                "end": 9382,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9327,
              "end": 9335,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9327,
                "end": 9330,
                "decorators": [],
                "name": "r11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9331,
                "end": 9335,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9394,
      "end": 9419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9398,
          "end": 9418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9398,
            "end": 9418,
            "decorators": [],
            "name": "s11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9401,
              "end": 9418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9403,
                "end": 9418,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9410,
                  "end": 9418,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9411,
                      "end": 9417
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 9403,
                  "end": 9410,
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
      "type": "VariableDeclaration",
      "start": 9420,
      "end": 9488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9424,
          "end": 9487,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9424,
            "end": 9428,
            "decorators": [],
            "name": "s11a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9431,
            "end": 9487,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9440,
                "end": 9454,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9456,
                "end": 9470,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9472,
                "end": 9486,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9431,
              "end": 9439,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9431,
                "end": 9434,
                "decorators": [],
                "name": "s11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9435,
                "end": 9439,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9495,
      "end": 9566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9499,
          "end": 9565,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9499,
            "end": 9503,
            "decorators": [],
            "name": "s11b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9506,
            "end": 9565,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9515,
                "end": 9530,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9532,
                "end": 9547,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9549,
                "end": 9564,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9506,
              "end": 9514,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9506,
                "end": 9509,
                "decorators": [],
                "name": "s11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9510,
                "end": 9514,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9573,
      "end": 9642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9577,
          "end": 9641,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9577,
            "end": 9581,
            "decorators": [],
            "name": "s11c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9584,
            "end": 9641,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9593,
                "end": 9608,
                "decorators": [],
                "name": "testFunction11P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9610,
                "end": 9624,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9626,
                "end": 9640,
                "decorators": [],
                "name": "testFunction11",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9584,
              "end": 9592,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9584,
                "end": 9587,
                "decorators": [],
                "name": "s11",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9588,
                "end": 9592,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9650,
      "end": 9683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9654,
          "end": 9682,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9654,
            "end": 9657,
            "decorators": [],
            "name": "r12",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9660,
            "end": 9682,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9675,
                "end": 9681,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 9680,
                  "end": 9681,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9675,
                    "end": 9676,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 9660,
              "end": 9674,
              "decorators": [],
              "name": "testFunction12",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9684,
      "end": 9752,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9688,
          "end": 9751,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9688,
            "end": 9692,
            "decorators": [],
            "name": "r12a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9695,
            "end": 9751,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9704,
                "end": 9718,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9720,
                "end": 9734,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9736,
                "end": 9750,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9695,
              "end": 9703,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9695,
                "end": 9698,
                "decorators": [],
                "name": "r12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9699,
                "end": 9703,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9759,
      "end": 9792,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9763,
          "end": 9791,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9763,
            "end": 9766,
            "decorators": [],
            "name": "s12",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9769,
            "end": 9791,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9784,
                "end": 9790,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 9789,
                  "end": 9790,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9784,
                    "end": 9785,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 9769,
              "end": 9783,
              "decorators": [],
              "name": "testFunction12",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9793,
      "end": 9861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9797,
          "end": 9860,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9797,
            "end": 9801,
            "decorators": [],
            "name": "s12a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9804,
            "end": 9860,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9813,
                "end": 9827,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9829,
                "end": 9843,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9845,
                "end": 9859,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9804,
              "end": 9812,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9804,
                "end": 9807,
                "decorators": [],
                "name": "s12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9808,
                "end": 9812,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9868,
      "end": 9939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9872,
          "end": 9938,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9872,
            "end": 9876,
            "decorators": [],
            "name": "s12b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9879,
            "end": 9938,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9888,
                "end": 9903,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9905,
                "end": 9920,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9922,
                "end": 9937,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9879,
              "end": 9887,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9879,
                "end": 9882,
                "decorators": [],
                "name": "s12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9883,
                "end": 9887,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 9946,
      "end": 10015,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9950,
          "end": 10014,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9950,
            "end": 9954,
            "decorators": [],
            "name": "s12c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9957,
            "end": 10014,
            "arguments": [
              {
                "type": "Identifier",
                "start": 9966,
                "end": 9981,
                "decorators": [],
                "name": "testFunction12P",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9983,
                "end": 9997,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9999,
                "end": 10013,
                "decorators": [],
                "name": "testFunction12",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 9957,
              "end": 9965,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 9957,
                "end": 9960,
                "decorators": [],
                "name": "s12",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 9961,
                "end": 9965,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
