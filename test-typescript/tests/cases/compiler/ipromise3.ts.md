__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 755,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 658,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 658,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 29,
            "end": 164,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 73,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 47,
                    "end": 73,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 48,
                        "end": 56,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 53,
                          "end": 56,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 55,
                            "end": 56,
                            "typeName": {
                              "type": "Identifier",
                              "start": 55,
                              "end": 56,
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
                      "start": 58,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 61,
                        "end": 73,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 70,
                          "end": 73,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 71,
                              "end": 72,
                              "typeName": {
                                "type": "Identifier",
                                "start": 71,
                                "end": 72,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 70,
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 75,
                "end": 111,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 83,
                    "end": 111,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 84,
                        "end": 94,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 94,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 91,
                            "end": 94
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 99,
                        "end": 111,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 108,
                          "end": 111,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 109,
                              "end": 110,
                              "typeName": {
                                "type": "Identifier",
                                "start": 109,
                                "end": 110,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 108,
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 113,
                "end": 147,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 122,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 124,
                    "end": 147,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 125,
                        "end": 138,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 138,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 135,
                            "end": 138
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 143,
                        "end": 147
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 163,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 160,
                  "end": 163,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 162,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 160,
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 33,
              "end": 36,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 34,
                  "end": 35,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
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
            "start": 169,
            "end": 293,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 177,
                "end": 213,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 187,
                    "end": 213,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 188,
                        "end": 196,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 193,
                          "end": 196,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 195,
                            "end": 196,
                            "typeName": {
                              "type": "Identifier",
                              "start": 195,
                              "end": 196,
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
                      "start": 198,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 201,
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
                          "start": 201,
                          "end": 210,
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 215,
                "end": 240,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 223,
                    "end": 240,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 234,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 229,
                          "end": 234,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 231,
                            "end": 234
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 236,
                      "end": 240,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 239,
                        "end": 240,
                        "typeName": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
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
                "start": 242,
                "end": 276,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 251,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 253,
                    "end": 276,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 254,
                        "end": 267,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 262,
                          "end": 267,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 264,
                            "end": 267
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 269,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 272,
                        "end": 276
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 292,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 289,
                  "end": 292,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 289,
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 173,
              "end": 176,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 174,
                  "end": 175,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
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
            "start": 298,
            "end": 422,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 302,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 306,
                "end": 331,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 314,
                  "end": 331,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 316,
                    "end": 331,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 317,
                        "end": 325,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 322,
                          "end": 325,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 324,
                            "end": 325,
                            "typeName": {
                              "type": "Identifier",
                              "start": 324,
                              "end": 325,
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
                      "start": 327,
                      "end": 331,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 330,
                        "end": 331,
                        "typeName": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 331,
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
                "start": 333,
                "end": 369,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 339,
                  "end": 369,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 341,
                    "end": 369,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 342,
                        "end": 352,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 347,
                          "end": 352,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 349,
                            "end": 352
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 357,
                        "end": 369,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 366,
                          "end": 369,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 367,
                              "end": 368,
                              "typeName": {
                                "type": "Identifier",
                                "start": 367,
                                "end": 368,
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 366,
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 371,
                "end": 405,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 380,
                  "end": 405,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 382,
                    "end": 405,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 383,
                        "end": 396,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 391,
                          "end": 396,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 393,
                            "end": 396
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 405,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 401,
                        "end": 405
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 409,
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
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 418,
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 302,
              "end": 305,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 303,
                  "end": 304,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 304,
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
            "start": 427,
            "end": 540,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 431,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 435,
                "end": 460,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 443,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 445,
                    "end": 460,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 446,
                        "end": 454,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 451,
                          "end": 454,
                          "typeAnnotation": {
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
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 456,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 459,
                        "end": 460,
                        "typeName": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 460,
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
                "start": 462,
                "end": 487,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 468,
                  "end": 487,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 470,
                    "end": 487,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 471,
                        "end": 481,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 476,
                          "end": 481,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 478,
                            "end": 481
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 483,
                      "end": 487,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 486,
                        "end": 487,
                        "typeName": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
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
                "start": 489,
                "end": 523,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 498,
                  "end": 523,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 500,
                    "end": 523,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 501,
                        "end": 514,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 509,
                          "end": 514,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 511,
                            "end": 514
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 516,
                      "end": 523,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 519,
                        "end": 523
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 527,
                "end": 539,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 536,
                  "end": 539,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 537,
                      "end": 538,
                      "typeName": {
                        "type": "Identifier",
                        "start": 537,
                        "end": 538,
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
                  "end": 536,
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 431,
              "end": 434,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 432,
                  "end": 433,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
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
            "start": 545,
            "end": 656,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 549,
              "decorators": [],
              "name": "done",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 555,
                "end": 582,
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 563,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 565,
                    "end": 582,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 566,
                        "end": 574,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 571,
                          "end": 574,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 573,
                            "end": 574,
                            "typeName": {
                              "type": "Identifier",
                              "start": 573,
                              "end": 574,
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
                      "start": 576,
                      "end": 582,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 579,
                        "end": 582
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 584,
                "end": 611,
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 590,
                  "end": 611,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 592,
                    "end": 611,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 593,
                        "end": 603,
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 598,
                          "end": 603,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 600,
                            "end": 603
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 605,
                      "end": 611,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 608,
                        "end": 611
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 613,
                "end": 647,
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 622,
                  "end": 647,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 624,
                    "end": 647,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 625,
                        "end": 638,
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 633,
                          "end": 638,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 635,
                            "end": 638
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 640,
                      "end": 647,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 643,
                        "end": 647
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 649,
              "end": 655,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 651,
                "end": 655
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 551,
              "end": 554,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 552,
                  "end": 553,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
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
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "IPromise3",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "start": 659,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 663,
          "end": 684,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 684,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 667,
                "end": 684,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 676,
                  "end": 684,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 676,
                  "decorators": [],
                  "name": "IPromise3",
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
      "start": 686,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 753,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 711,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 692,
              "end": 711,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 694,
                "end": 711,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 703,
                  "end": 711,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 704,
                      "end": 710
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 703,
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 714,
            "end": 753,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 722,
                "end": 752,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 735,
                  "end": 752,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 741,
                      "end": 750,
                      "argument": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 749,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 732,
                    "end": 733,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 714,
              "end": 721,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 714,
                "end": 716,
                "decorators": [],
                "name": "p1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 717,
                "end": 721,
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
