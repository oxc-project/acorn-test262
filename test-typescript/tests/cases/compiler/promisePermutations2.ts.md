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
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 94,
        "name": "Promise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 94,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 95,
            "end": 96,
            "name": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
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
        "start": 98,
        "end": 329,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 104,
            "end": 214,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 108,
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
              "start": 108,
              "end": 111,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 109,
                  "end": 110,
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
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
                "start": 112,
                "end": 137,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 122,
                    "end": 137,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 131,
                        "name": "value",
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
                "start": 139,
                "end": 164,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 147,
                    "end": 164,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 148,
                        "end": 158,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 153,
                          "end": 158,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 155,
                            "end": 158
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                "start": 166,
                "end": 200,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 175,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 177,
                    "end": 200,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 178,
                        "end": 191,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 186,
                          "end": 191,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 188,
                            "end": 191
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 210,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "start": 219,
            "end": 327,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 223,
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
              "start": 223,
              "end": 226,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 224,
                  "end": 225,
                  "name": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
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
                "start": 227,
                "end": 254,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 235,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 237,
                    "end": 254,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 238,
                        "end": 246,
                        "name": "value",
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
                      "start": 248,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 256,
                "end": 283,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 262,
                  "end": 283,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 264,
                    "end": 283,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 265,
                        "end": 275,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 270,
                          "end": 275,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 272,
                            "end": 275
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 285,
                "end": 319,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 319,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 296,
                    "end": 319,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 297,
                        "end": 310,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 305,
                          "end": 310,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 307,
                            "end": 310
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
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
      "start": 331,
      "end": 975,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 349,
        "name": "IPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 349,
        "end": 352,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 350,
            "end": 351,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
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
        "start": 353,
        "end": 975,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 359,
            "end": 490,
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 363,
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
              "start": 363,
              "end": 366,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 364,
                  "end": 365,
                  "name": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
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
                "start": 367,
                "end": 402,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 402,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 377,
                    "end": 402,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 378,
                        "end": 386,
                        "name": "value",
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
                      "start": 388,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 391,
                        "end": 402,
                        "typeName": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 399,
                          "name": "IPromise",
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
            "start": 495,
            "end": 616,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
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
              "start": 499,
              "end": 502,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 500,
                  "end": 501,
                  "name": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
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
                "start": 503,
                "end": 538,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 511,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 513,
                    "end": 538,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 514,
                        "end": 522,
                        "name": "value",
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
                      "start": 524,
                      "end": 538,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 527,
                        "end": 538,
                        "typeName": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 535,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
            "start": 621,
            "end": 742,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 625,
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
              "start": 625,
              "end": 628,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 626,
                  "end": 627,
                  "name": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 627,
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
                "start": 629,
                "end": 654,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 637,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 639,
                    "end": 654,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 640,
                        "end": 648,
                        "name": "value",
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
                "start": 656,
                "end": 691,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 662,
                  "end": 691,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 664,
                    "end": 691,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 665,
                        "end": 675,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 670,
                          "end": 675,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 672,
                            "end": 675
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 680,
                          "end": 688,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                "start": 693,
                "end": 727,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 702,
                  "end": 727,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 704,
                    "end": 727,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 705,
                        "end": 718,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 713,
                          "end": 718,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 715,
                            "end": 718
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 728,
              "end": 741,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 730,
                "end": 741,
                "typeName": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 738,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "start": 747,
            "end": 858,
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 751,
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
              "start": 751,
              "end": 754,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 752,
                  "end": 753,
                  "name": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
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
                "start": 755,
                "end": 780,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 780,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 765,
                    "end": 780,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 774,
                        "name": "value",
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
                "start": 782,
                "end": 807,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 788,
                  "end": 807,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 790,
                    "end": 807,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 801,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 796,
                          "end": 801,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 798,
                            "end": 801
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                "start": 809,
                "end": 843,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 818,
                  "end": 843,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 820,
                    "end": 843,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 821,
                        "end": 834,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 829,
                          "end": 834,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 831,
                            "end": 834
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 857,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 846,
                "end": 857,
                "typeName": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 854,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "start": 863,
            "end": 973,
            "key": {
              "type": "Identifier",
              "start": 863,
              "end": 867,
              "name": "done",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 869,
              "end": 872,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 870,
                  "end": 871,
                  "name": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 871,
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
                "start": 873,
                "end": 900,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 881,
                  "end": 900,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 883,
                    "end": 900,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 884,
                        "end": 892,
                        "name": "value",
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
                      "start": 894,
                      "end": 900,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 897,
                        "end": 900
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 902,
                "end": 929,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 908,
                  "end": 929,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 910,
                    "end": 929,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 911,
                        "end": 921,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 916,
                          "end": 921,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 918,
                            "end": 921
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 931,
                "end": 965,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 940,
                  "end": 965,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 942,
                    "end": 965,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 943,
                        "end": 956,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 951,
                          "end": 956,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 953,
                            "end": 956
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
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
      "start": 977,
      "end": 1027,
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 1006,
        "name": "testFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1008,
        "end": 1026,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1010,
          "end": 1026,
          "typeName": {
            "type": "Identifier",
            "start": 1010,
            "end": 1018,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1028,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1045,
        "end": 1058,
        "name": "testFunctionP",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1060,
        "end": 1077,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1062,
          "end": 1077,
          "typeName": {
            "type": "Identifier",
            "start": 1062,
            "end": 1069,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 1096,
        "end": 1109,
        "name": "testFunction2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1111,
        "end": 1136,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1113,
          "end": 1136,
          "typeName": {
            "type": "Identifier",
            "start": 1113,
            "end": 1121,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1124,
                      "end": 1125,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1125,
                      "end": 1133,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1127,
                        "end": 1133
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
    {
      "type": "TSDeclareFunction",
      "start": 1138,
      "end": 1196,
      "id": {
        "type": "Identifier",
        "start": 1155,
        "end": 1169,
        "name": "testFunction2P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1171,
        "end": 1195,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1173,
          "end": 1195,
          "typeName": {
            "type": "Identifier",
            "start": 1173,
            "end": 1180,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1183,
                      "end": 1184,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1184,
                      "end": 1192,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1186,
                        "end": 1192
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
    {
      "type": "TSDeclareFunction",
      "start": 1197,
      "end": 1257,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1227,
        "name": "testFunction3",
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
          "start": 1228,
          "end": 1237,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1229,
            "end": 1237,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1231,
              "end": 1237
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1238,
        "end": 1256,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1240,
          "end": 1256,
          "typeName": {
            "type": "Identifier",
            "start": 1240,
            "end": 1248,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1258,
      "end": 1318,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1289,
        "name": "testFunction3P",
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
          "start": 1290,
          "end": 1299,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1291,
            "end": 1299,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1293,
              "end": 1299
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1300,
        "end": 1317,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1302,
          "end": 1317,
          "typeName": {
            "type": "Identifier",
            "start": 1302,
            "end": 1309,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1319,
      "end": 1391,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1349,
        "name": "testFunction4",
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
          "start": 1350,
          "end": 1359,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1351,
            "end": 1359,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1353,
              "end": 1359
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1361,
          "end": 1371,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1363,
            "end": 1371,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1365,
              "end": 1371
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1372,
        "end": 1390,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1374,
          "end": 1390,
          "typeName": {
            "type": "Identifier",
            "start": 1374,
            "end": 1382,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1392,
      "end": 1464,
      "id": {
        "type": "Identifier",
        "start": 1409,
        "end": 1423,
        "name": "testFunction4P",
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
          "start": 1424,
          "end": 1433,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1425,
            "end": 1433,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1427,
              "end": 1433
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1435,
          "end": 1445,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1437,
            "end": 1445,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1439,
              "end": 1445
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1446,
        "end": 1463,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1448,
          "end": 1463,
          "typeName": {
            "type": "Identifier",
            "start": 1448,
            "end": 1455,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1465,
      "end": 1552,
      "id": {
        "type": "Identifier",
        "start": 1482,
        "end": 1495,
        "name": "testFunction5",
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
          "start": 1496,
          "end": 1505,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1497,
            "end": 1505,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1499,
              "end": 1505
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1507,
          "end": 1532,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1509,
            "end": 1532,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1511,
              "end": 1532,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1512,
                  "end": 1521,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1513,
                    "end": 1521,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1515,
                      "end": 1521
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1533,
        "end": 1551,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1535,
          "end": 1551,
          "typeName": {
            "type": "Identifier",
            "start": 1535,
            "end": 1543,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1553,
      "end": 1640,
      "id": {
        "type": "Identifier",
        "start": 1570,
        "end": 1584,
        "name": "testFunction5P",
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
          "start": 1585,
          "end": 1594,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1586,
            "end": 1594,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1588,
              "end": 1594
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1596,
          "end": 1621,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1598,
            "end": 1621,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1600,
              "end": 1621,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1601,
                  "end": 1610,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1602,
                    "end": 1610,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1604,
                      "end": 1610
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1622,
        "end": 1639,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1624,
          "end": 1639,
          "typeName": {
            "type": "Identifier",
            "start": 1624,
            "end": 1631,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1641,
      "end": 1721,
      "id": {
        "type": "Identifier",
        "start": 1658,
        "end": 1671,
        "name": "testFunction6",
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
          "start": 1672,
          "end": 1681,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1673,
            "end": 1681,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1675,
              "end": 1681
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1683,
          "end": 1701,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1685,
            "end": 1701,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1687,
              "end": 1701,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1687,
                "end": 1690,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1688,
                    "end": 1689,
                    "name": {
                      "type": "Identifier",
                      "start": 1688,
                      "end": 1689,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1691,
                  "end": 1695,
                  "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1702,
        "end": 1720,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1704,
          "end": 1720,
          "typeName": {
            "type": "Identifier",
            "start": 1704,
            "end": 1712,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1722,
      "end": 1802,
      "id": {
        "type": "Identifier",
        "start": 1739,
        "end": 1753,
        "name": "testFunction6P",
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
          "start": 1754,
          "end": 1763,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1755,
            "end": 1763,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1757,
              "end": 1763
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1765,
          "end": 1783,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1767,
            "end": 1783,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1769,
              "end": 1783,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1769,
                "end": 1772,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1770,
                    "end": 1771,
                    "name": {
                      "type": "Identifier",
                      "start": 1770,
                      "end": 1771,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1773,
                  "end": 1777,
                  "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1784,
        "end": 1801,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1786,
          "end": 1801,
          "typeName": {
            "type": "Identifier",
            "start": 1786,
            "end": 1793,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1803,
      "end": 1872,
      "id": {
        "type": "Identifier",
        "start": 1820,
        "end": 1833,
        "name": "testFunction7",
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
          "start": 1834,
          "end": 1852,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1836,
            "end": 1852,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1838,
              "end": 1852,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1838,
                "end": 1841,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1839,
                    "end": 1840,
                    "name": {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1840,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1842,
                  "end": 1846,
                  "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1853,
        "end": 1871,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1855,
          "end": 1871,
          "typeName": {
            "type": "Identifier",
            "start": 1855,
            "end": 1863,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1873,
      "end": 1942,
      "id": {
        "type": "Identifier",
        "start": 1890,
        "end": 1904,
        "name": "testFunction7P",
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
          "start": 1905,
          "end": 1923,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1907,
            "end": 1923,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1909,
              "end": 1923,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1909,
                "end": 1912,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1910,
                    "end": 1911,
                    "name": {
                      "type": "Identifier",
                      "start": 1910,
                      "end": 1911,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1913,
                  "end": 1917,
                  "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1924,
        "end": 1941,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1926,
          "end": 1941,
          "typeName": {
            "type": "Identifier",
            "start": 1926,
            "end": 1933,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1943,
      "end": 2013,
      "id": {
        "type": "Identifier",
        "start": 1960,
        "end": 1973,
        "name": "testFunction8",
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
          "start": 1977,
          "end": 1981,
          "name": "x",
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
          "start": 1983,
          "end": 1998,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1985,
            "end": 1998,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1987,
              "end": 1998,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1988,
                  "end": 1992,
                  "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1973,
        "end": 1976,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1974,
            "end": 1975,
            "name": {
              "type": "Identifier",
              "start": 1974,
              "end": 1975,
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
        "start": 1999,
        "end": 2012,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2001,
          "end": 2012,
          "typeName": {
            "type": "Identifier",
            "start": 2001,
            "end": 2009,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2014,
      "end": 2084,
      "id": {
        "type": "Identifier",
        "start": 2031,
        "end": 2045,
        "name": "testFunction8P",
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
          "start": 2049,
          "end": 2053,
          "name": "x",
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
          "start": 2055,
          "end": 2070,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2057,
            "end": 2070,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2059,
              "end": 2070,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2060,
                  "end": 2064,
                  "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2045,
        "end": 2048,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2046,
            "end": 2047,
            "name": {
              "type": "Identifier",
              "start": 2046,
              "end": 2047,
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
        "start": 2071,
        "end": 2083,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2073,
          "end": 2083,
          "typeName": {
            "type": "Identifier",
            "start": 2073,
            "end": 2080,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2085,
      "end": 2158,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2115,
        "name": "testFunction9",
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
          "start": 2119,
          "end": 2123,
          "name": "x",
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
          "start": 2125,
          "end": 2143,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2127,
            "end": 2143,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2129,
              "end": 2143,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2129,
                "end": 2132,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2130,
                    "end": 2131,
                    "name": {
                      "type": "Identifier",
                      "start": 2130,
                      "end": 2131,
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
                  "start": 2133,
                  "end": 2137,
                  "name": "a",
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
                        "name": "U",
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
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2115,
        "end": 2118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2116,
            "end": 2117,
            "name": {
              "type": "Identifier",
              "start": 2116,
              "end": 2117,
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
        "start": 2144,
        "end": 2157,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2146,
          "end": 2157,
          "typeName": {
            "type": "Identifier",
            "start": 2146,
            "end": 2154,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2159,
      "end": 2232,
      "id": {
        "type": "Identifier",
        "start": 2176,
        "end": 2190,
        "name": "testFunction9P",
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
          "start": 2194,
          "end": 2198,
          "name": "x",
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
          "start": 2200,
          "end": 2218,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2202,
            "end": 2218,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2204,
              "end": 2218,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2204,
                "end": 2207,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2205,
                    "end": 2206,
                    "name": {
                      "type": "Identifier",
                      "start": 2205,
                      "end": 2206,
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
                  "start": 2208,
                  "end": 2212,
                  "name": "a",
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
                        "name": "U",
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
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2190,
        "end": 2193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2191,
            "end": 2192,
            "name": {
              "type": "Identifier",
              "start": 2191,
              "end": 2192,
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
        "start": 2219,
        "end": 2231,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2221,
          "end": 2231,
          "typeName": {
            "type": "Identifier",
            "start": 2221,
            "end": 2228,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2233,
      "end": 2301,
      "id": {
        "type": "Identifier",
        "start": 2250,
        "end": 2264,
        "name": "testFunction10",
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
          "start": 2268,
          "end": 2286,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2270,
            "end": 2286,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2272,
              "end": 2286,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2272,
                "end": 2275,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2273,
                    "end": 2274,
                    "name": {
                      "type": "Identifier",
                      "start": 2273,
                      "end": 2274,
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
                  "start": 2276,
                  "end": 2280,
                  "name": "a",
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
                        "name": "U",
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
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2264,
        "end": 2267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2265,
            "end": 2266,
            "name": {
              "type": "Identifier",
              "start": 2265,
              "end": 2266,
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
        "start": 2287,
        "end": 2300,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2289,
          "end": 2300,
          "typeName": {
            "type": "Identifier",
            "start": 2289,
            "end": 2297,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2302,
      "end": 2370,
      "id": {
        "type": "Identifier",
        "start": 2319,
        "end": 2334,
        "name": "testFunction10P",
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
          "start": 2338,
          "end": 2356,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2340,
            "end": 2356,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2342,
              "end": 2356,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2342,
                "end": 2345,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2343,
                    "end": 2344,
                    "name": {
                      "type": "Identifier",
                      "start": 2343,
                      "end": 2344,
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
                  "start": 2346,
                  "end": 2350,
                  "name": "a",
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
                        "name": "U",
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
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2334,
        "end": 2337,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2335,
            "end": 2336,
            "name": {
              "type": "Identifier",
              "start": 2335,
              "end": 2336,
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
        "start": 2357,
        "end": 2369,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2359,
          "end": 2369,
          "typeName": {
            "type": "Identifier",
            "start": 2359,
            "end": 2366,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2372,
      "end": 2433,
      "id": {
        "type": "Identifier",
        "start": 2389,
        "end": 2403,
        "name": "testFunction11",
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
          "start": 2404,
          "end": 2413,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2405,
            "end": 2413,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2407,
              "end": 2413
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2414,
        "end": 2432,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2416,
          "end": 2432,
          "typeName": {
            "type": "Identifier",
            "start": 2416,
            "end": 2424,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2434,
      "end": 2495,
      "id": {
        "type": "Identifier",
        "start": 2451,
        "end": 2465,
        "name": "testFunction11",
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
          "start": 2466,
          "end": 2475,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2467,
            "end": 2475,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2469,
              "end": 2475
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2476,
        "end": 2494,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2478,
          "end": 2494,
          "typeName": {
            "type": "Identifier",
            "start": 2478,
            "end": 2486,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2496,
      "end": 2557,
      "id": {
        "type": "Identifier",
        "start": 2513,
        "end": 2528,
        "name": "testFunction11P",
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
          "start": 2529,
          "end": 2538,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2530,
            "end": 2538,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2532,
              "end": 2538
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2539,
        "end": 2556,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2541,
          "end": 2556,
          "typeName": {
            "type": "Identifier",
            "start": 2541,
            "end": 2548,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2558,
      "end": 2619,
      "id": {
        "type": "Identifier",
        "start": 2575,
        "end": 2590,
        "name": "testFunction11P",
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
          "start": 2591,
          "end": 2600,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2592,
            "end": 2600,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2594,
              "end": 2600
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2601,
        "end": 2618,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2603,
          "end": 2618,
          "typeName": {
            "type": "Identifier",
            "start": 2603,
            "end": 2610,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2621,
      "end": 2675,
      "id": {
        "type": "Identifier",
        "start": 2638,
        "end": 2652,
        "name": "testFunction12",
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
          "start": 2656,
          "end": 2660,
          "name": "x",
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
        "start": 2652,
        "end": 2655,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2653,
            "end": 2654,
            "name": {
              "type": "Identifier",
              "start": 2653,
              "end": 2654,
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
        "start": 2661,
        "end": 2674,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2663,
          "end": 2674,
          "typeName": {
            "type": "Identifier",
            "start": 2663,
            "end": 2671,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2676,
      "end": 2736,
      "id": {
        "type": "Identifier",
        "start": 2693,
        "end": 2707,
        "name": "testFunction12",
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
          "start": 2711,
          "end": 2715,
          "name": "x",
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
          "start": 2717,
          "end": 2721,
          "name": "y",
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
        "start": 2707,
        "end": 2710,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2708,
            "end": 2709,
            "name": {
              "type": "Identifier",
              "start": 2708,
              "end": 2709,
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
        "start": 2722,
        "end": 2735,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2724,
          "end": 2735,
          "typeName": {
            "type": "Identifier",
            "start": 2724,
            "end": 2732,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2737,
      "end": 2792,
      "id": {
        "type": "Identifier",
        "start": 2754,
        "end": 2769,
        "name": "testFunction12P",
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
          "start": 2773,
          "end": 2777,
          "name": "x",
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
        "start": 2769,
        "end": 2772,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2770,
            "end": 2771,
            "name": {
              "type": "Identifier",
              "start": 2770,
              "end": 2771,
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
        "start": 2778,
        "end": 2791,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2780,
          "end": 2791,
          "typeName": {
            "type": "Identifier",
            "start": 2780,
            "end": 2788,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "start": 2793,
      "end": 2853,
      "id": {
        "type": "Identifier",
        "start": 2810,
        "end": 2825,
        "name": "testFunction12P",
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
          "start": 2829,
          "end": 2833,
          "name": "x",
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
          "start": 2835,
          "end": 2839,
          "name": "y",
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
        "start": 2825,
        "end": 2828,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2826,
            "end": 2827,
            "name": {
              "type": "Identifier",
              "start": 2826,
              "end": 2827,
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
        "start": 2840,
        "end": 2852,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2842,
          "end": 2852,
          "typeName": {
            "type": "Identifier",
            "start": 2842,
            "end": 2849,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
      "type": "VariableDeclaration",
      "start": 2855,
      "end": 2880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2859,
          "end": 2879,
          "id": {
            "type": "Identifier",
            "start": 2859,
            "end": 2879,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2861,
              "end": 2879,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2863,
                "end": 2879,
                "typeName": {
                  "type": "Identifier",
                  "start": 2863,
                  "end": 2871,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2885,
            "end": 2888,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2891,
            "end": 2940,
            "callee": {
              "type": "MemberExpression",
              "start": 2891,
              "end": 2898,
              "object": {
                "type": "Identifier",
                "start": 2891,
                "end": 2893,
                "name": "r1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2894,
                "end": 2898,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2899,
                "end": 2911,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2913,
                "end": 2925,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2927,
                "end": 2939,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2946,
            "end": 2949,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2952,
            "end": 3048,
            "callee": {
              "type": "MemberExpression",
              "start": 2952,
              "end": 3006,
              "object": {
                "type": "CallExpression",
                "start": 2952,
                "end": 3001,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2952,
                  "end": 2959,
                  "object": {
                    "type": "Identifier",
                    "start": 2952,
                    "end": 2954,
                    "name": "r1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2955,
                    "end": 2959,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2960,
                    "end": 2972,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2974,
                    "end": 2986,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2988,
                    "end": 3000,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 3002,
                "end": 3006,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3007,
                "end": 3019,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3021,
                "end": 3033,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3035,
                "end": 3047,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3054,
            "end": 3057,
            "name": "r1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3060,
            "end": 3112,
            "callee": {
              "type": "MemberExpression",
              "start": 3060,
              "end": 3067,
              "object": {
                "type": "Identifier",
                "start": 3060,
                "end": 3062,
                "name": "r1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3063,
                "end": 3067,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3068,
                "end": 3081,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3083,
                "end": 3096,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3098,
                "end": 3111,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3118,
            "end": 3137,
            "name": "s1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3120,
              "end": 3137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3122,
                "end": 3137,
                "typeName": {
                  "type": "Identifier",
                  "start": 3122,
                  "end": 3129,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3143,
            "end": 3146,
            "name": "s1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3149,
            "end": 3198,
            "callee": {
              "type": "MemberExpression",
              "start": 3149,
              "end": 3156,
              "object": {
                "type": "Identifier",
                "start": 3149,
                "end": 3151,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3152,
                "end": 3156,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3157,
                "end": 3169,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3171,
                "end": 3183,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3185,
                "end": 3197,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3204,
            "end": 3207,
            "name": "s1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3210,
            "end": 3262,
            "callee": {
              "type": "MemberExpression",
              "start": 3210,
              "end": 3217,
              "object": {
                "type": "Identifier",
                "start": 3210,
                "end": 3212,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3213,
                "end": 3217,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3218,
                "end": 3231,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3233,
                "end": 3246,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3248,
                "end": 3261,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3268,
            "end": 3271,
            "name": "s1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3274,
            "end": 3324,
            "callee": {
              "type": "MemberExpression",
              "start": 3274,
              "end": 3281,
              "object": {
                "type": "Identifier",
                "start": 3274,
                "end": 3276,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3277,
                "end": 3281,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3282,
                "end": 3295,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3297,
                "end": 3309,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3311,
                "end": 3323,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3330,
            "end": 3333,
            "name": "s1d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3336,
            "end": 3433,
            "callee": {
              "type": "MemberExpression",
              "start": 3336,
              "end": 3391,
              "object": {
                "type": "CallExpression",
                "start": 3336,
                "end": 3386,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3336,
                  "end": 3343,
                  "object": {
                    "type": "Identifier",
                    "start": 3336,
                    "end": 3338,
                    "name": "s1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3339,
                    "end": 3343,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3344,
                    "end": 3357,
                    "name": "testFunctionP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3359,
                    "end": 3371,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3373,
                    "end": 3385,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 3387,
                "end": 3391,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3392,
                "end": 3404,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3406,
                "end": 3418,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3420,
                "end": 3432,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3440,
            "end": 3468,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3442,
              "end": 3468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3444,
                "end": 3468,
                "typeName": {
                  "type": "Identifier",
                  "start": 3444,
                  "end": 3452,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3455,
                            "end": 3456,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3456,
                            "end": 3464,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3458,
                              "end": 3464
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3474,
            "end": 3477,
            "name": "r2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3480,
            "end": 3532,
            "callee": {
              "type": "MemberExpression",
              "start": 3480,
              "end": 3487,
              "object": {
                "type": "Identifier",
                "start": 3480,
                "end": 3482,
                "name": "r2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3483,
                "end": 3487,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3488,
                "end": 3501,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3503,
                "end": 3516,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3518,
                "end": 3531,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3538,
            "end": 3541,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3544,
            "end": 3646,
            "callee": {
              "type": "MemberExpression",
              "start": 3544,
              "end": 3601,
              "object": {
                "type": "CallExpression",
                "start": 3544,
                "end": 3596,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3544,
                  "end": 3551,
                  "object": {
                    "type": "Identifier",
                    "start": 3544,
                    "end": 3546,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3547,
                    "end": 3551,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3552,
                    "end": 3565,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3567,
                    "end": 3580,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3582,
                    "end": 3595,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 3597,
                "end": 3601,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3602,
                "end": 3615,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3617,
                "end": 3630,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3632,
                "end": 3645,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3652,
            "end": 3679,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3654,
              "end": 3679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3656,
                "end": 3679,
                "typeName": {
                  "type": "Identifier",
                  "start": 3656,
                  "end": 3663,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3666,
                            "end": 3667,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3667,
                            "end": 3675,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3669,
                              "end": 3675
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3685,
            "end": 3688,
            "name": "s2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3691,
            "end": 3743,
            "callee": {
              "type": "MemberExpression",
              "start": 3691,
              "end": 3698,
              "object": {
                "type": "Identifier",
                "start": 3691,
                "end": 3693,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3694,
                "end": 3698,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3699,
                "end": 3712,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3714,
                "end": 3727,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3729,
                "end": 3742,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3749,
            "end": 3752,
            "name": "s2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3755,
            "end": 3810,
            "callee": {
              "type": "MemberExpression",
              "start": 3755,
              "end": 3762,
              "object": {
                "type": "Identifier",
                "start": 3755,
                "end": 3757,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3758,
                "end": 3762,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3763,
                "end": 3777,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3779,
                "end": 3793,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3795,
                "end": 3809,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3816,
            "end": 3819,
            "name": "s2c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3822,
            "end": 3875,
            "callee": {
              "type": "MemberExpression",
              "start": 3822,
              "end": 3829,
              "object": {
                "type": "Identifier",
                "start": 3822,
                "end": 3824,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3825,
                "end": 3829,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3830,
                "end": 3844,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3846,
                "end": 3859,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3861,
                "end": 3874,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3881,
            "end": 3884,
            "name": "s2d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3887,
            "end": 3990,
            "callee": {
              "type": "MemberExpression",
              "start": 3887,
              "end": 3945,
              "object": {
                "type": "CallExpression",
                "start": 3887,
                "end": 3940,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3887,
                  "end": 3894,
                  "object": {
                    "type": "Identifier",
                    "start": 3887,
                    "end": 3889,
                    "name": "s2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3890,
                    "end": 3894,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3895,
                    "end": 3909,
                    "name": "testFunction2P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3911,
                    "end": 3924,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3926,
                    "end": 3939,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 3941,
                "end": 3945,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3946,
                "end": 3959,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3961,
                "end": 3974,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3976,
                "end": 3989,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 3997,
            "end": 4017,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3999,
              "end": 4017,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4001,
                "end": 4017,
                "typeName": {
                  "type": "Identifier",
                  "start": 4001,
                  "end": 4009,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4023,
            "end": 4026,
            "name": "r3a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4029,
            "end": 4081,
            "callee": {
              "type": "MemberExpression",
              "start": 4029,
              "end": 4036,
              "object": {
                "type": "Identifier",
                "start": 4029,
                "end": 4031,
                "name": "r3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4032,
                "end": 4036,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4037,
                "end": 4050,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4052,
                "end": 4065,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4067,
                "end": 4080,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4087,
            "end": 4090,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4093,
            "end": 4195,
            "callee": {
              "type": "MemberExpression",
              "start": 4093,
              "end": 4150,
              "object": {
                "type": "CallExpression",
                "start": 4093,
                "end": 4145,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4093,
                  "end": 4100,
                  "object": {
                    "type": "Identifier",
                    "start": 4093,
                    "end": 4095,
                    "name": "r3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4096,
                    "end": 4100,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 4101,
                    "end": 4114,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4116,
                    "end": 4129,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4131,
                    "end": 4144,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 4146,
                "end": 4150,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4151,
                "end": 4164,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4166,
                "end": 4179,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4181,
                "end": 4194,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4201,
            "end": 4220,
            "name": "s3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4203,
              "end": 4220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4205,
                "end": 4220,
                "typeName": {
                  "type": "Identifier",
                  "start": 4205,
                  "end": 4212,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4226,
            "end": 4229,
            "name": "s3a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4232,
            "end": 4284,
            "callee": {
              "type": "MemberExpression",
              "start": 4232,
              "end": 4239,
              "object": {
                "type": "Identifier",
                "start": 4232,
                "end": 4234,
                "name": "s3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4235,
                "end": 4239,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4240,
                "end": 4253,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4255,
                "end": 4268,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4270,
                "end": 4283,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4290,
            "end": 4293,
            "name": "s3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4296,
            "end": 4351,
            "callee": {
              "type": "MemberExpression",
              "start": 4296,
              "end": 4303,
              "object": {
                "type": "Identifier",
                "start": 4296,
                "end": 4298,
                "name": "s3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4299,
                "end": 4303,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4304,
                "end": 4318,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4320,
                "end": 4334,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4336,
                "end": 4350,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4357,
            "end": 4360,
            "name": "s3c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4363,
            "end": 4416,
            "callee": {
              "type": "MemberExpression",
              "start": 4363,
              "end": 4370,
              "object": {
                "type": "Identifier",
                "start": 4363,
                "end": 4365,
                "name": "s3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4366,
                "end": 4370,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4371,
                "end": 4385,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4387,
                "end": 4400,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4402,
                "end": 4415,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4422,
            "end": 4425,
            "name": "s3d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4428,
            "end": 4531,
            "callee": {
              "type": "MemberExpression",
              "start": 4428,
              "end": 4486,
              "object": {
                "type": "CallExpression",
                "start": 4428,
                "end": 4481,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4428,
                  "end": 4435,
                  "object": {
                    "type": "Identifier",
                    "start": 4428,
                    "end": 4430,
                    "name": "s3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4431,
                    "end": 4435,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 4436,
                    "end": 4450,
                    "name": "testFunction3P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4452,
                    "end": 4465,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4467,
                    "end": 4480,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 4482,
                "end": 4486,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4487,
                "end": 4500,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4502,
                "end": 4515,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4517,
                "end": 4530,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4554,
            "end": 4574,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4556,
              "end": 4574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4558,
                "end": 4574,
                "typeName": {
                  "type": "Identifier",
                  "start": 4558,
                  "end": 4566,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4580,
            "end": 4619,
            "name": "sIPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4589,
              "end": 4619,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4591,
                "end": 4619,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4592,
                    "end": 4598,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4593,
                      "end": 4598,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4595,
                        "end": 4598
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 4603,
                      "end": 4611,
                      "name": "IPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4625,
            "end": 4662,
            "name": "sPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4633,
              "end": 4662,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4635,
                "end": 4662,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4636,
                    "end": 4642,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4637,
                      "end": 4642,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4639,
                        "end": 4642
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 4647,
                      "end": 4654,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4668,
            "end": 4671,
            "name": "r4a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4674,
            "end": 4726,
            "callee": {
              "type": "MemberExpression",
              "start": 4674,
              "end": 4681,
              "object": {
                "type": "Identifier",
                "start": 4674,
                "end": 4676,
                "name": "r4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4677,
                "end": 4681,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4682,
                "end": 4695,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4697,
                "end": 4710,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4712,
                "end": 4725,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4741,
            "end": 4744,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4747,
            "end": 4841,
            "callee": {
              "type": "MemberExpression",
              "start": 4747,
              "end": 4800,
              "object": {
                "type": "CallExpression",
                "start": 4747,
                "end": 4795,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4747,
                  "end": 4754,
                  "object": {
                    "type": "Identifier",
                    "start": 4747,
                    "end": 4749,
                    "name": "r4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4750,
                    "end": 4754,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 4755,
                    "end": 4764,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4766,
                    "end": 4779,
                    "name": "testFunction4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4781,
                    "end": 4794,
                    "name": "testFunction4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 4796,
                "end": 4800,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4801,
                "end": 4810,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4812,
                "end": 4825,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4827,
                "end": 4840,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4853,
            "end": 4872,
            "name": "s4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4855,
              "end": 4872,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4857,
                "end": 4872,
                "typeName": {
                  "type": "Identifier",
                  "start": 4857,
                  "end": 4864,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4878,
            "end": 4881,
            "name": "s4a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4884,
            "end": 4936,
            "callee": {
              "type": "MemberExpression",
              "start": 4884,
              "end": 4891,
              "object": {
                "type": "Identifier",
                "start": 4884,
                "end": 4886,
                "name": "s4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4887,
                "end": 4891,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4892,
                "end": 4905,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4907,
                "end": 4920,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4922,
                "end": 4935,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 4951,
            "end": 4954,
            "name": "s4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4957,
            "end": 5012,
            "callee": {
              "type": "MemberExpression",
              "start": 4957,
              "end": 4964,
              "object": {
                "type": "Identifier",
                "start": 4957,
                "end": 4959,
                "name": "s4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4960,
                "end": 4964,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4965,
                "end": 4979,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4981,
                "end": 4995,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4997,
                "end": 5011,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5028,
            "end": 5031,
            "name": "s4c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5034,
            "end": 5087,
            "callee": {
              "type": "MemberExpression",
              "start": 5034,
              "end": 5041,
              "object": {
                "type": "Identifier",
                "start": 5034,
                "end": 5036,
                "name": "s4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5037,
                "end": 5041,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5042,
                "end": 5056,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5058,
                "end": 5071,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5073,
                "end": 5086,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5102,
            "end": 5105,
            "name": "s4d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5108,
            "end": 5204,
            "callee": {
              "type": "MemberExpression",
              "start": 5108,
              "end": 5162,
              "object": {
                "type": "CallExpression",
                "start": 5108,
                "end": 5157,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5108,
                  "end": 5115,
                  "object": {
                    "type": "Identifier",
                    "start": 5108,
                    "end": 5110,
                    "name": "s4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5111,
                    "end": 5115,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5116,
                    "end": 5125,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5127,
                    "end": 5141,
                    "name": "testFunction4P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5143,
                    "end": 5156,
                    "name": "testFunction4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 5158,
                "end": 5162,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5163,
                "end": 5172,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5174,
                "end": 5188,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5190,
                "end": 5203,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5211,
            "end": 5231,
            "name": "r5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5213,
              "end": 5231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5215,
                "end": 5231,
                "typeName": {
                  "type": "Identifier",
                  "start": 5215,
                  "end": 5223,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5237,
            "end": 5240,
            "name": "r5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5243,
            "end": 5295,
            "callee": {
              "type": "MemberExpression",
              "start": 5243,
              "end": 5250,
              "object": {
                "type": "Identifier",
                "start": 5243,
                "end": 5245,
                "name": "r5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5246,
                "end": 5250,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5251,
                "end": 5264,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5266,
                "end": 5279,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5281,
                "end": 5294,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5310,
            "end": 5313,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5316,
            "end": 5394,
            "callee": {
              "type": "MemberExpression",
              "start": 5316,
              "end": 5361,
              "object": {
                "type": "CallExpression",
                "start": 5316,
                "end": 5356,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5316,
                  "end": 5323,
                  "object": {
                    "type": "Identifier",
                    "start": 5316,
                    "end": 5318,
                    "name": "r5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5319,
                    "end": 5323,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5324,
                    "end": 5333,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5335,
                    "end": 5344,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5346,
                    "end": 5355,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 5357,
                "end": 5361,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5362,
                "end": 5371,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5373,
                "end": 5382,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5384,
                "end": 5393,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5406,
            "end": 5425,
            "name": "s5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5408,
              "end": 5425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5410,
                "end": 5425,
                "typeName": {
                  "type": "Identifier",
                  "start": 5410,
                  "end": 5417,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5431,
            "end": 5434,
            "name": "s5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5437,
            "end": 5489,
            "callee": {
              "type": "MemberExpression",
              "start": 5437,
              "end": 5444,
              "object": {
                "type": "Identifier",
                "start": 5437,
                "end": 5439,
                "name": "s5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5440,
                "end": 5444,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5445,
                "end": 5458,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5460,
                "end": 5473,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5475,
                "end": 5488,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5504,
            "end": 5507,
            "name": "s5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5510,
            "end": 5565,
            "callee": {
              "type": "MemberExpression",
              "start": 5510,
              "end": 5517,
              "object": {
                "type": "Identifier",
                "start": 5510,
                "end": 5512,
                "name": "s5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5513,
                "end": 5517,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5518,
                "end": 5532,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5534,
                "end": 5548,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5550,
                "end": 5564,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5580,
            "end": 5583,
            "name": "s5c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5586,
            "end": 5639,
            "callee": {
              "type": "MemberExpression",
              "start": 5586,
              "end": 5593,
              "object": {
                "type": "Identifier",
                "start": 5586,
                "end": 5588,
                "name": "s5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5589,
                "end": 5593,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5594,
                "end": 5608,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5610,
                "end": 5623,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5625,
                "end": 5638,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5654,
            "end": 5657,
            "name": "s5d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5660,
            "end": 5735,
            "callee": {
              "type": "MemberExpression",
              "start": 5660,
              "end": 5702,
              "object": {
                "type": "CallExpression",
                "start": 5660,
                "end": 5697,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5660,
                  "end": 5667,
                  "object": {
                    "type": "Identifier",
                    "start": 5660,
                    "end": 5662,
                    "name": "s5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5663,
                    "end": 5667,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5668,
                    "end": 5676,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5678,
                    "end": 5686,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5688,
                    "end": 5696,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 5698,
                "end": 5702,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5703,
                "end": 5712,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5714,
                "end": 5723,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5725,
                "end": 5734,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5748,
            "end": 5768,
            "name": "r6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5750,
              "end": 5768,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5752,
                "end": 5768,
                "typeName": {
                  "type": "Identifier",
                  "start": 5752,
                  "end": 5760,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5774,
            "end": 5777,
            "name": "r6a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5780,
            "end": 5832,
            "callee": {
              "type": "MemberExpression",
              "start": 5780,
              "end": 5787,
              "object": {
                "type": "Identifier",
                "start": 5780,
                "end": 5782,
                "name": "r6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5783,
                "end": 5787,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5788,
                "end": 5801,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5803,
                "end": 5816,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5818,
                "end": 5831,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5847,
            "end": 5850,
            "name": "r6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5853,
            "end": 5931,
            "callee": {
              "type": "MemberExpression",
              "start": 5853,
              "end": 5898,
              "object": {
                "type": "CallExpression",
                "start": 5853,
                "end": 5893,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5853,
                  "end": 5860,
                  "object": {
                    "type": "Identifier",
                    "start": 5853,
                    "end": 5855,
                    "name": "r6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5856,
                    "end": 5860,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 5861,
                    "end": 5870,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5872,
                    "end": 5881,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5883,
                    "end": 5892,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 5894,
                "end": 5898,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5899,
                "end": 5908,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5910,
                "end": 5919,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5921,
                "end": 5930,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5943,
            "end": 5962,
            "name": "s6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5945,
              "end": 5962,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5947,
                "end": 5962,
                "typeName": {
                  "type": "Identifier",
                  "start": 5947,
                  "end": 5954,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 5968,
            "end": 5971,
            "name": "s6a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5974,
            "end": 6026,
            "callee": {
              "type": "MemberExpression",
              "start": 5974,
              "end": 5981,
              "object": {
                "type": "Identifier",
                "start": 5974,
                "end": 5976,
                "name": "s6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5977,
                "end": 5981,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 5982,
                "end": 5995,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5997,
                "end": 6010,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6012,
                "end": 6025,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6041,
            "end": 6044,
            "name": "s6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6047,
            "end": 6102,
            "callee": {
              "type": "MemberExpression",
              "start": 6047,
              "end": 6054,
              "object": {
                "type": "Identifier",
                "start": 6047,
                "end": 6049,
                "name": "s6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6050,
                "end": 6054,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6055,
                "end": 6069,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6071,
                "end": 6085,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6087,
                "end": 6101,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6117,
            "end": 6120,
            "name": "s6c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6123,
            "end": 6176,
            "callee": {
              "type": "MemberExpression",
              "start": 6123,
              "end": 6130,
              "object": {
                "type": "Identifier",
                "start": 6123,
                "end": 6125,
                "name": "s6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6126,
                "end": 6130,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6131,
                "end": 6145,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6147,
                "end": 6160,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6162,
                "end": 6175,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6191,
            "end": 6194,
            "name": "s6d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6197,
            "end": 6272,
            "callee": {
              "type": "MemberExpression",
              "start": 6197,
              "end": 6239,
              "object": {
                "type": "CallExpression",
                "start": 6197,
                "end": 6234,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6197,
                  "end": 6204,
                  "object": {
                    "type": "Identifier",
                    "start": 6197,
                    "end": 6199,
                    "name": "s6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6200,
                    "end": 6204,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6205,
                    "end": 6213,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6215,
                    "end": 6223,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6225,
                    "end": 6233,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 6235,
                "end": 6239,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6240,
                "end": 6249,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6251,
                "end": 6260,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6262,
                "end": 6271,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6285,
            "end": 6305,
            "name": "r7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6287,
              "end": 6305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6289,
                "end": 6305,
                "typeName": {
                  "type": "Identifier",
                  "start": 6289,
                  "end": 6297,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6311,
            "end": 6314,
            "name": "r7a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6317,
            "end": 6369,
            "callee": {
              "type": "MemberExpression",
              "start": 6317,
              "end": 6324,
              "object": {
                "type": "Identifier",
                "start": 6317,
                "end": 6319,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6320,
                "end": 6324,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6325,
                "end": 6338,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6340,
                "end": 6353,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6355,
                "end": 6368,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6384,
            "end": 6387,
            "name": "r7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6390,
            "end": 6468,
            "callee": {
              "type": "MemberExpression",
              "start": 6390,
              "end": 6435,
              "object": {
                "type": "CallExpression",
                "start": 6390,
                "end": 6430,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6390,
                  "end": 6397,
                  "object": {
                    "type": "Identifier",
                    "start": 6390,
                    "end": 6392,
                    "name": "r7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6393,
                    "end": 6397,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6398,
                    "end": 6407,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6409,
                    "end": 6418,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6420,
                    "end": 6429,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 6431,
                "end": 6435,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6436,
                "end": 6445,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6447,
                "end": 6456,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6458,
                "end": 6467,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6480,
            "end": 6499,
            "name": "s7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6482,
              "end": 6499,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6484,
                "end": 6499,
                "typeName": {
                  "type": "Identifier",
                  "start": 6484,
                  "end": 6491,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6505,
            "end": 6508,
            "name": "s7a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6511,
            "end": 6563,
            "callee": {
              "type": "MemberExpression",
              "start": 6511,
              "end": 6518,
              "object": {
                "type": "Identifier",
                "start": 6511,
                "end": 6513,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6514,
                "end": 6518,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6519,
                "end": 6532,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6534,
                "end": 6547,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6549,
                "end": 6562,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6578,
            "end": 6581,
            "name": "s7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6584,
            "end": 6639,
            "callee": {
              "type": "MemberExpression",
              "start": 6584,
              "end": 6591,
              "object": {
                "type": "Identifier",
                "start": 6584,
                "end": 6586,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6587,
                "end": 6591,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6592,
                "end": 6606,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6608,
                "end": 6622,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6624,
                "end": 6638,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6654,
            "end": 6657,
            "name": "s7c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6660,
            "end": 6713,
            "callee": {
              "type": "MemberExpression",
              "start": 6660,
              "end": 6667,
              "object": {
                "type": "Identifier",
                "start": 6660,
                "end": 6662,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6663,
                "end": 6667,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6668,
                "end": 6682,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6684,
                "end": 6697,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6699,
                "end": 6712,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6728,
            "end": 6731,
            "name": "s7d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6734,
            "end": 6806,
            "callee": {
              "type": "MemberExpression",
              "start": 6734,
              "end": 6776,
              "object": {
                "type": "CallExpression",
                "start": 6734,
                "end": 6771,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6734,
                  "end": 6741,
                  "object": {
                    "type": "Identifier",
                    "start": 6734,
                    "end": 6736,
                    "name": "r7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6737,
                    "end": 6741,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6742,
                    "end": 6750,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6752,
                    "end": 6760,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6762,
                    "end": 6770,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 6772,
                "end": 6776,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6777,
                "end": 6785,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6787,
                "end": 6795,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6797,
                "end": 6805,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6820,
            "end": 6840,
            "name": "r8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6822,
              "end": 6840,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6824,
                "end": 6840,
                "typeName": {
                  "type": "Identifier",
                  "start": 6824,
                  "end": 6832,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6846,
            "end": 6885,
            "name": "nIPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6855,
              "end": 6885,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 6857,
                "end": 6885,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6858,
                    "end": 6864,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6859,
                      "end": 6864,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 6861,
                        "end": 6864
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 6869,
                      "end": 6877,
                      "name": "IPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6891,
            "end": 6928,
            "name": "nPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6899,
              "end": 6928,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 6901,
                "end": 6928,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 6902,
                    "end": 6908,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 6903,
                      "end": 6908,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 6905,
                        "end": 6908
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 6913,
                      "end": 6920,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 6934,
            "end": 6937,
            "name": "r8a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6940,
            "end": 6992,
            "callee": {
              "type": "MemberExpression",
              "start": 6940,
              "end": 6947,
              "object": {
                "type": "Identifier",
                "start": 6940,
                "end": 6942,
                "name": "r8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6943,
                "end": 6947,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 6948,
                "end": 6961,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6963,
                "end": 6976,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6978,
                "end": 6991,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7007,
            "end": 7010,
            "name": "r8b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7013,
            "end": 7091,
            "callee": {
              "type": "MemberExpression",
              "start": 7013,
              "end": 7058,
              "object": {
                "type": "CallExpression",
                "start": 7013,
                "end": 7053,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7013,
                  "end": 7020,
                  "object": {
                    "type": "Identifier",
                    "start": 7013,
                    "end": 7015,
                    "name": "r8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7016,
                    "end": 7020,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 7021,
                    "end": 7030,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7032,
                    "end": 7041,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7043,
                    "end": 7052,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 7054,
                "end": 7058,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7059,
                "end": 7068,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7070,
                "end": 7079,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7081,
                "end": 7090,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7103,
            "end": 7122,
            "name": "s8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7105,
              "end": 7122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7107,
                "end": 7122,
                "typeName": {
                  "type": "Identifier",
                  "start": 7107,
                  "end": 7114,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7128,
            "end": 7131,
            "name": "s8a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7134,
            "end": 7186,
            "callee": {
              "type": "MemberExpression",
              "start": 7134,
              "end": 7141,
              "object": {
                "type": "Identifier",
                "start": 7134,
                "end": 7136,
                "name": "s8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7137,
                "end": 7141,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7142,
                "end": 7155,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7157,
                "end": 7170,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7172,
                "end": 7185,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7201,
            "end": 7204,
            "name": "s8b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7207,
            "end": 7262,
            "callee": {
              "type": "MemberExpression",
              "start": 7207,
              "end": 7214,
              "object": {
                "type": "Identifier",
                "start": 7207,
                "end": 7209,
                "name": "s8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7210,
                "end": 7214,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7215,
                "end": 7229,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7231,
                "end": 7245,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7247,
                "end": 7261,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7277,
            "end": 7280,
            "name": "s8c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7283,
            "end": 7336,
            "callee": {
              "type": "MemberExpression",
              "start": 7283,
              "end": 7290,
              "object": {
                "type": "Identifier",
                "start": 7283,
                "end": 7285,
                "name": "s8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7286,
                "end": 7290,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7291,
                "end": 7305,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7307,
                "end": 7320,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7322,
                "end": 7335,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7351,
            "end": 7354,
            "name": "s8d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7357,
            "end": 7435,
            "callee": {
              "type": "MemberExpression",
              "start": 7357,
              "end": 7402,
              "object": {
                "type": "CallExpression",
                "start": 7357,
                "end": 7397,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7357,
                  "end": 7364,
                  "object": {
                    "type": "Identifier",
                    "start": 7357,
                    "end": 7359,
                    "name": "s8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7360,
                    "end": 7364,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 7365,
                    "end": 7374,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7376,
                    "end": 7385,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7387,
                    "end": 7396,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 7398,
                "end": 7402,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7403,
                "end": 7412,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7414,
                "end": 7423,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7425,
                "end": 7434,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7448,
            "end": 7468,
            "name": "r9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7450,
              "end": 7468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7452,
                "end": 7468,
                "typeName": {
                  "type": "Identifier",
                  "start": 7452,
                  "end": 7460,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7474,
            "end": 7477,
            "name": "r9a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7480,
            "end": 7532,
            "callee": {
              "type": "MemberExpression",
              "start": 7480,
              "end": 7487,
              "object": {
                "type": "Identifier",
                "start": 7480,
                "end": 7482,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7483,
                "end": 7487,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7488,
                "end": 7501,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7503,
                "end": 7516,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7518,
                "end": 7531,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7547,
            "end": 7550,
            "name": "r9b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7553,
            "end": 7593,
            "callee": {
              "type": "MemberExpression",
              "start": 7553,
              "end": 7560,
              "object": {
                "type": "Identifier",
                "start": 7553,
                "end": 7555,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7556,
                "end": 7560,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7561,
                "end": 7570,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7572,
                "end": 7581,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7583,
                "end": 7592,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7605,
            "end": 7608,
            "name": "r9c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7611,
            "end": 7651,
            "callee": {
              "type": "MemberExpression",
              "start": 7611,
              "end": 7618,
              "object": {
                "type": "Identifier",
                "start": 7611,
                "end": 7613,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7614,
                "end": 7618,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7619,
                "end": 7628,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7630,
                "end": 7639,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7641,
                "end": 7650,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7663,
            "end": 7666,
            "name": "r9d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7669,
            "end": 7712,
            "callee": {
              "type": "MemberExpression",
              "start": 7669,
              "end": 7676,
              "object": {
                "type": "Identifier",
                "start": 7669,
                "end": 7671,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7672,
                "end": 7676,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7677,
                "end": 7689,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7691,
                "end": 7700,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7702,
                "end": 7711,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7727,
            "end": 7730,
            "name": "r9e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7733,
            "end": 7814,
            "callee": {
              "type": "MemberExpression",
              "start": 7733,
              "end": 7781,
              "object": {
                "type": "CallExpression",
                "start": 7733,
                "end": 7776,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7733,
                  "end": 7740,
                  "object": {
                    "type": "Identifier",
                    "start": 7733,
                    "end": 7735,
                    "name": "r9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7736,
                    "end": 7740,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 7741,
                    "end": 7753,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7755,
                    "end": 7764,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7766,
                    "end": 7775,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 7777,
                "end": 7781,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7782,
                "end": 7791,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7793,
                "end": 7802,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7804,
                "end": 7813,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7826,
            "end": 7845,
            "name": "s9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7828,
              "end": 7845,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7830,
                "end": 7845,
                "typeName": {
                  "type": "Identifier",
                  "start": 7830,
                  "end": 7837,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7851,
            "end": 7854,
            "name": "s9a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7857,
            "end": 7909,
            "callee": {
              "type": "MemberExpression",
              "start": 7857,
              "end": 7864,
              "object": {
                "type": "Identifier",
                "start": 7857,
                "end": 7859,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7860,
                "end": 7864,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7865,
                "end": 7878,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7880,
                "end": 7893,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7895,
                "end": 7908,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 7924,
            "end": 7927,
            "name": "s9b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7930,
            "end": 7985,
            "callee": {
              "type": "MemberExpression",
              "start": 7930,
              "end": 7937,
              "object": {
                "type": "Identifier",
                "start": 7930,
                "end": 7932,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7933,
                "end": 7937,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 7938,
                "end": 7952,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7954,
                "end": 7968,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7970,
                "end": 7984,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8000,
            "end": 8003,
            "name": "s9c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8006,
            "end": 8059,
            "callee": {
              "type": "MemberExpression",
              "start": 8006,
              "end": 8013,
              "object": {
                "type": "Identifier",
                "start": 8006,
                "end": 8008,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8009,
                "end": 8013,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8014,
                "end": 8028,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8030,
                "end": 8043,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8045,
                "end": 8058,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8074,
            "end": 8077,
            "name": "s9d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8080,
            "end": 8117,
            "callee": {
              "type": "MemberExpression",
              "start": 8080,
              "end": 8087,
              "object": {
                "type": "Identifier",
                "start": 8080,
                "end": 8082,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8083,
                "end": 8087,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8088,
                "end": 8096,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8098,
                "end": 8106,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8108,
                "end": 8116,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8129,
            "end": 8132,
            "name": "s9e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8135,
            "end": 8172,
            "callee": {
              "type": "MemberExpression",
              "start": 8135,
              "end": 8142,
              "object": {
                "type": "Identifier",
                "start": 8135,
                "end": 8137,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8138,
                "end": 8142,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8143,
                "end": 8151,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8153,
                "end": 8161,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8163,
                "end": 8171,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8184,
            "end": 8187,
            "name": "s9f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8190,
            "end": 8233,
            "callee": {
              "type": "MemberExpression",
              "start": 8190,
              "end": 8197,
              "object": {
                "type": "Identifier",
                "start": 8190,
                "end": 8192,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8193,
                "end": 8197,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8198,
                "end": 8210,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8212,
                "end": 8221,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8223,
                "end": 8232,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8248,
            "end": 8251,
            "name": "s9g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8254,
            "end": 8335,
            "callee": {
              "type": "MemberExpression",
              "start": 8254,
              "end": 8302,
              "object": {
                "type": "CallExpression",
                "start": 8254,
                "end": 8297,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8254,
                  "end": 8261,
                  "object": {
                    "type": "Identifier",
                    "start": 8254,
                    "end": 8256,
                    "name": "s9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8257,
                    "end": 8261,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 8262,
                    "end": 8274,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8276,
                    "end": 8285,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8287,
                    "end": 8296,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 8298,
                "end": 8302,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8303,
                "end": 8312,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8314,
                "end": 8323,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8325,
                "end": 8334,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8348,
            "end": 8351,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8354,
            "end": 8376,
            "callee": {
              "type": "Identifier",
              "start": 8354,
              "end": 8368,
              "name": "testFunction10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8369,
                "end": 8375,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8369,
                    "end": 8370,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 8374,
                  "end": 8375,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8382,
            "end": 8386,
            "name": "r10a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8389,
            "end": 8445,
            "callee": {
              "type": "MemberExpression",
              "start": 8389,
              "end": 8397,
              "object": {
                "type": "Identifier",
                "start": 8389,
                "end": 8392,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8393,
                "end": 8397,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8398,
                "end": 8412,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8414,
                "end": 8428,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8430,
                "end": 8444,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8457,
            "end": 8461,
            "name": "r10b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8464,
            "end": 8505,
            "callee": {
              "type": "MemberExpression",
              "start": 8464,
              "end": 8472,
              "object": {
                "type": "Identifier",
                "start": 8464,
                "end": 8467,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8468,
                "end": 8472,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8473,
                "end": 8482,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8484,
                "end": 8493,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8495,
                "end": 8504,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8517,
            "end": 8521,
            "name": "r10c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8524,
            "end": 8565,
            "callee": {
              "type": "MemberExpression",
              "start": 8524,
              "end": 8532,
              "object": {
                "type": "Identifier",
                "start": 8524,
                "end": 8527,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8528,
                "end": 8532,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8533,
                "end": 8542,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8544,
                "end": 8553,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8555,
                "end": 8564,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8577,
            "end": 8581,
            "name": "r10d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8584,
            "end": 8628,
            "callee": {
              "type": "MemberExpression",
              "start": 8584,
              "end": 8592,
              "object": {
                "type": "Identifier",
                "start": 8584,
                "end": 8587,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8588,
                "end": 8592,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8593,
                "end": 8605,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8607,
                "end": 8616,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8618,
                "end": 8627,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8643,
            "end": 8647,
            "name": "r10e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8650,
            "end": 8732,
            "callee": {
              "type": "MemberExpression",
              "start": 8650,
              "end": 8699,
              "object": {
                "type": "CallExpression",
                "start": 8650,
                "end": 8694,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8650,
                  "end": 8658,
                  "object": {
                    "type": "Identifier",
                    "start": 8650,
                    "end": 8653,
                    "name": "r10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8654,
                    "end": 8658,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 8659,
                    "end": 8671,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8673,
                    "end": 8682,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8684,
                    "end": 8693,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 8695,
                "end": 8699,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8700,
                "end": 8709,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8711,
                "end": 8720,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8722,
                "end": 8731,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8744,
            "end": 8747,
            "name": "s10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8750,
            "end": 8773,
            "callee": {
              "type": "Identifier",
              "start": 8750,
              "end": 8765,
              "name": "testFunction10P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8766,
                "end": 8772,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8766,
                    "end": 8767,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 8771,
                  "end": 8772,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8779,
            "end": 8783,
            "name": "s10a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8786,
            "end": 8842,
            "callee": {
              "type": "MemberExpression",
              "start": 8786,
              "end": 8794,
              "object": {
                "type": "Identifier",
                "start": 8786,
                "end": 8789,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8790,
                "end": 8794,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8795,
                "end": 8809,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8811,
                "end": 8825,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8827,
                "end": 8841,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8854,
            "end": 8858,
            "name": "s10b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8861,
            "end": 8920,
            "callee": {
              "type": "MemberExpression",
              "start": 8861,
              "end": 8869,
              "object": {
                "type": "Identifier",
                "start": 8861,
                "end": 8864,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8865,
                "end": 8869,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8870,
                "end": 8885,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8887,
                "end": 8902,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8904,
                "end": 8919,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 8932,
            "end": 8936,
            "name": "s10c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8939,
            "end": 8996,
            "callee": {
              "type": "MemberExpression",
              "start": 8939,
              "end": 8947,
              "object": {
                "type": "Identifier",
                "start": 8939,
                "end": 8942,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8943,
                "end": 8947,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 8948,
                "end": 8963,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8965,
                "end": 8979,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8981,
                "end": 8995,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9008,
            "end": 9012,
            "name": "s10d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9015,
            "end": 9053,
            "callee": {
              "type": "MemberExpression",
              "start": 9015,
              "end": 9023,
              "object": {
                "type": "Identifier",
                "start": 9015,
                "end": 9018,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9019,
                "end": 9023,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9024,
                "end": 9032,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9034,
                "end": 9042,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9044,
                "end": 9052,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9065,
            "end": 9069,
            "name": "s10e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9072,
            "end": 9112,
            "callee": {
              "type": "MemberExpression",
              "start": 9072,
              "end": 9080,
              "object": {
                "type": "Identifier",
                "start": 9072,
                "end": 9075,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9076,
                "end": 9080,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9081,
                "end": 9090,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9092,
                "end": 9100,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9102,
                "end": 9111,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9124,
            "end": 9128,
            "name": "s10f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9131,
            "end": 9176,
            "callee": {
              "type": "MemberExpression",
              "start": 9131,
              "end": 9139,
              "object": {
                "type": "Identifier",
                "start": 9131,
                "end": 9134,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9135,
                "end": 9139,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9140,
                "end": 9153,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9155,
                "end": 9164,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9166,
                "end": 9175,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9191,
            "end": 9195,
            "name": "s10g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9198,
            "end": 9280,
            "callee": {
              "type": "MemberExpression",
              "start": 9198,
              "end": 9248,
              "object": {
                "type": "CallExpression",
                "start": 9198,
                "end": 9243,
                "callee": {
                  "type": "MemberExpression",
                  "start": 9198,
                  "end": 9206,
                  "object": {
                    "type": "Identifier",
                    "start": 9198,
                    "end": 9201,
                    "name": "s10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9202,
                    "end": 9206,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 9207,
                    "end": 9220,
                    "name": "testFunctionP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 9222,
                    "end": 9231,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 9233,
                    "end": 9242,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 9244,
                "end": 9248,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9249,
                "end": 9257,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9259,
                "end": 9268,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9270,
                "end": 9279,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9293,
            "end": 9314,
            "name": "r11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9296,
              "end": 9314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9298,
                "end": 9314,
                "typeName": {
                  "type": "Identifier",
                  "start": 9298,
                  "end": 9306,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9320,
            "end": 9324,
            "name": "r11a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9327,
            "end": 9383,
            "callee": {
              "type": "MemberExpression",
              "start": 9327,
              "end": 9335,
              "object": {
                "type": "Identifier",
                "start": 9327,
                "end": 9330,
                "name": "r11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9331,
                "end": 9335,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9336,
                "end": 9350,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9352,
                "end": 9366,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9368,
                "end": 9382,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9398,
            "end": 9418,
            "name": "s11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9401,
              "end": 9418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9403,
                "end": 9418,
                "typeName": {
                  "type": "Identifier",
                  "start": 9403,
                  "end": 9410,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9424,
            "end": 9428,
            "name": "s11a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9431,
            "end": 9487,
            "callee": {
              "type": "MemberExpression",
              "start": 9431,
              "end": 9439,
              "object": {
                "type": "Identifier",
                "start": 9431,
                "end": 9434,
                "name": "s11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9435,
                "end": 9439,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9440,
                "end": 9454,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9456,
                "end": 9470,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9472,
                "end": 9486,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9499,
            "end": 9503,
            "name": "s11b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9506,
            "end": 9565,
            "callee": {
              "type": "MemberExpression",
              "start": 9506,
              "end": 9514,
              "object": {
                "type": "Identifier",
                "start": 9506,
                "end": 9509,
                "name": "s11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9510,
                "end": 9514,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9515,
                "end": 9530,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9532,
                "end": 9547,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9549,
                "end": 9564,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9577,
            "end": 9581,
            "name": "s11c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9584,
            "end": 9641,
            "callee": {
              "type": "MemberExpression",
              "start": 9584,
              "end": 9592,
              "object": {
                "type": "Identifier",
                "start": 9584,
                "end": 9587,
                "name": "s11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9588,
                "end": 9592,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9593,
                "end": 9608,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9610,
                "end": 9624,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9626,
                "end": 9640,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9654,
            "end": 9657,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9660,
            "end": 9682,
            "callee": {
              "type": "Identifier",
              "start": 9660,
              "end": 9674,
              "name": "testFunction12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9675,
                "end": 9681,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9675,
                    "end": 9676,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 9680,
                  "end": 9681,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9688,
            "end": 9692,
            "name": "r12a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9695,
            "end": 9751,
            "callee": {
              "type": "MemberExpression",
              "start": 9695,
              "end": 9703,
              "object": {
                "type": "Identifier",
                "start": 9695,
                "end": 9698,
                "name": "r12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9699,
                "end": 9703,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9704,
                "end": 9718,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9720,
                "end": 9734,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9736,
                "end": 9750,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9763,
            "end": 9766,
            "name": "s12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9769,
            "end": 9791,
            "callee": {
              "type": "Identifier",
              "start": 9769,
              "end": 9783,
              "name": "testFunction12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9784,
                "end": 9790,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9784,
                    "end": 9785,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 9789,
                  "end": 9790,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9797,
            "end": 9801,
            "name": "s12a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9804,
            "end": 9860,
            "callee": {
              "type": "MemberExpression",
              "start": 9804,
              "end": 9812,
              "object": {
                "type": "Identifier",
                "start": 9804,
                "end": 9807,
                "name": "s12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9808,
                "end": 9812,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9813,
                "end": 9827,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9829,
                "end": 9843,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9845,
                "end": 9859,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9872,
            "end": 9876,
            "name": "s12b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9879,
            "end": 9938,
            "callee": {
              "type": "MemberExpression",
              "start": 9879,
              "end": 9887,
              "object": {
                "type": "Identifier",
                "start": 9879,
                "end": 9882,
                "name": "s12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9883,
                "end": 9887,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9888,
                "end": 9903,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9905,
                "end": 9920,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9922,
                "end": 9937,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 9950,
            "end": 9954,
            "name": "s12c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9957,
            "end": 10014,
            "callee": {
              "type": "MemberExpression",
              "start": 9957,
              "end": 9965,
              "object": {
                "type": "Identifier",
                "start": 9957,
                "end": 9960,
                "name": "s12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9961,
                "end": 9965,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 9966,
                "end": 9981,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9983,
                "end": 9997,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9999,
                "end": 10013,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
