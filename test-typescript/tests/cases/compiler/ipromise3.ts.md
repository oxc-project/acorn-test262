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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "IPromise3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
        "start": 23,
        "end": 658,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 29,
            "end": 164,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
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
                "start": 37,
                "end": 73,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 47,
                    "end": 73,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 48,
                        "end": 56,
                        "name": "value",
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
                      "start": 58,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 61,
                        "end": 73,
                        "typeName": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 70,
                          "name": "IPromise3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                "start": 75,
                "end": 111,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 83,
                    "end": 111,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 84,
                        "end": 94,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 94,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 91,
                            "end": 94
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 108,
                          "name": "IPromise3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                "start": 113,
                "end": 147,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 122,
                  "end": 147,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 124,
                    "end": 147,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 125,
                        "end": 138,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 138,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 135,
                            "end": 138
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 160,
                  "name": "IPromise3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "start": 169,
            "end": 293,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
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
              "start": 173,
              "end": 176,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 174,
                  "end": 175,
                  "name": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
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
                "start": 177,
                "end": 213,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 187,
                    "end": 213,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 188,
                        "end": 196,
                        "name": "value",
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
                      "start": 198,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 201,
                        "end": 213,
                        "typeName": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 210,
                          "name": "IPromise3",
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
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 215,
                "end": 240,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 223,
                    "end": 240,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 234,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 229,
                          "end": 234,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 231,
                            "end": 234
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                "start": 242,
                "end": 276,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 251,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 253,
                    "end": 276,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 254,
                        "end": 267,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 262,
                          "end": 267,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 264,
                            "end": 267
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 289,
                  "name": "IPromise3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "start": 298,
            "end": 422,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 302,
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
              "start": 302,
              "end": 305,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 303,
                  "end": 304,
                  "name": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 304,
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
                "start": 306,
                "end": 331,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 314,
                  "end": 331,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 316,
                    "end": 331,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 317,
                        "end": 325,
                        "name": "value",
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
                "start": 333,
                "end": 369,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 339,
                  "end": 369,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 341,
                    "end": 369,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 342,
                        "end": 352,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 347,
                          "end": 352,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 349,
                            "end": 352
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 366,
                          "name": "IPromise3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                "start": 371,
                "end": 405,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 380,
                  "end": 405,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 382,
                    "end": 405,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 383,
                        "end": 396,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 391,
                          "end": 396,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 393,
                            "end": 396
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 409,
                "end": 421,
                "typeName": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 418,
                  "name": "IPromise3",
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
            "start": 427,
            "end": 540,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 431,
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
              "start": 431,
              "end": 434,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 432,
                  "end": 433,
                  "name": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
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
                "start": 435,
                "end": 460,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 443,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 445,
                    "end": 460,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 446,
                        "end": 454,
                        "name": "value",
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
                "start": 462,
                "end": 487,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 468,
                  "end": 487,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 470,
                    "end": 487,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 471,
                        "end": 481,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 476,
                          "end": 481,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 478,
                            "end": 481
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                "start": 489,
                "end": 523,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 498,
                  "end": 523,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 500,
                    "end": 523,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 501,
                        "end": 514,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 509,
                          "end": 514,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 511,
                            "end": 514
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 527,
                "end": 539,
                "typeName": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 536,
                  "name": "IPromise3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
            "start": 545,
            "end": 656,
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 549,
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
              "start": 551,
              "end": 554,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 552,
                  "end": 553,
                  "name": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
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
                "start": 555,
                "end": 582,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 563,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 565,
                    "end": 582,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 566,
                        "end": 574,
                        "name": "value",
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
                      "start": 576,
                      "end": 582,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 579,
                        "end": 582
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 584,
                "end": 611,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 590,
                  "end": 611,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 592,
                    "end": 611,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 593,
                        "end": 603,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 598,
                          "end": 603,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 600,
                            "end": 603
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 613,
                "end": 647,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 622,
                  "end": 647,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 624,
                    "end": 647,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 625,
                        "end": 638,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 633,
                          "end": 638,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 635,
                            "end": 638
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": true
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 663,
            "end": 684,
            "name": "p1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 667,
                "end": 684,
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 676,
                  "name": "IPromise3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 686,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 753,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 711,
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 692,
              "end": 711,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 694,
                "end": 711,
                "typeName": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 703,
                  "name": "IPromise3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 714,
            "end": 753,
            "callee": {
              "type": "MemberExpression",
              "start": 714,
              "end": 721,
              "object": {
                "type": "Identifier",
                "start": 714,
                "end": 716,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 717,
                "end": 721,
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
                "type": "FunctionExpression",
                "start": 722,
                "end": 752,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 732,
                    "end": 733,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
