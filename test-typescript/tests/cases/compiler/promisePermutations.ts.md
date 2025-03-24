__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 10318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "Promise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
        "start": 21,
        "end": 633,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 155,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
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
              "start": 31,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 32,
                  "end": 33,
                  "name": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
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
                "start": 35,
                "end": 69,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 45,
                    "end": 69,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 46,
                        "end": 54,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 51,
                          "end": 54,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 53,
                            "end": 54,
                            "typeName": {
                              "type": "Identifier",
                              "start": 53,
                              "end": 54,
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
                      "start": 56,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 59,
                        "end": 69,
                        "typeName": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 66,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 66,
                          "end": 69,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 67,
                              "end": 68,
                              "typeName": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
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
                "start": 71,
                "end": 105,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 79,
                    "end": 105,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 90,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 90,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 105,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 102,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 102,
                          "end": 105,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 103,
                              "end": 104,
                              "typeName": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 104,
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
                "start": 107,
                "end": 141,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 118,
                    "end": 141,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 119,
                        "end": 132,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 127,
                          "end": 132,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 129,
                            "end": 132
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 141,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 137,
                        "end": 141
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
              "start": 142,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 151,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 151,
                  "end": 154,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 152,
                      "end": 153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 153,
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
            "start": 160,
            "end": 279,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 164,
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
              "start": 164,
              "end": 167,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 165,
                  "end": 166,
                  "name": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
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
                "start": 168,
                "end": 202,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 178,
                    "end": 202,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 179,
                        "end": 187,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 184,
                          "end": 187,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 186,
                            "end": 187,
                            "typeName": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 187,
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
                      "start": 189,
                      "end": 202,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 192,
                        "end": 202,
                        "typeName": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 199,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 199,
                          "end": 202,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 200,
                              "end": 201,
                              "typeName": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 201,
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
                "start": 204,
                "end": 229,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 210,
                  "end": 229,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 212,
                    "end": 229,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 213,
                        "end": 223,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 218,
                          "end": 223,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 220,
                            "end": 223
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 225,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 228,
                        "end": 229,
                        "typeName": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 229,
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
                "start": 231,
                "end": 265,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 240,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 242,
                    "end": 265,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 243,
                        "end": 256,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 251,
                          "end": 256,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 253,
                            "end": 256
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 258,
                      "end": 265,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 261,
                        "end": 265
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
              "start": 266,
              "end": 278,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 278,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 275,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 275,
                  "end": 278,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 276,
                      "end": 277,
                      "typeName": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
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
            "start": 284,
            "end": 403,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 288,
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
              "start": 288,
              "end": 291,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 289,
                  "end": 290,
                  "name": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
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
                "start": 292,
                "end": 317,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 300,
                  "end": 317,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 302,
                    "end": 317,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 303,
                        "end": 311,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 308,
                          "end": 311,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 310,
                            "end": 311,
                            "typeName": {
                              "type": "Identifier",
                              "start": 310,
                              "end": 311,
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
                      "start": 313,
                      "end": 317,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 316,
                        "end": 317,
                        "typeName": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
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
                "start": 319,
                "end": 353,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 325,
                  "end": 353,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 327,
                    "end": 353,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 328,
                        "end": 338,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 333,
                          "end": 338,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 335,
                            "end": 338
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 340,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 343,
                        "end": 353,
                        "typeName": {
                          "type": "Identifier",
                          "start": 343,
                          "end": 350,
                          "name": "Promise",
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
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 355,
                "end": 389,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 364,
                  "end": 389,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 366,
                    "end": 389,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 367,
                        "end": 380,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 380,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 377,
                            "end": 380
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 389,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 385,
                        "end": 389
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
              "start": 390,
              "end": 402,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 402,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 399,
                  "name": "Promise",
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
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 408,
            "end": 518,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 412,
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
              "start": 412,
              "end": 415,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 413,
                  "end": 414,
                  "name": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
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
                "start": 416,
                "end": 441,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 424,
                  "end": 441,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 426,
                    "end": 441,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 427,
                        "end": 435,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 432,
                          "end": 435,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 434,
                            "end": 435,
                            "typeName": {
                              "type": "Identifier",
                              "start": 434,
                              "end": 435,
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
                      "start": 437,
                      "end": 441,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 440,
                        "end": 441,
                        "typeName": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 441,
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
                "start": 443,
                "end": 468,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 449,
                  "end": 468,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 451,
                    "end": 468,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 452,
                        "end": 462,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 457,
                          "end": 462,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 459,
                            "end": 462
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 464,
                      "end": 468,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 467,
                        "end": 468,
                        "typeName": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 468,
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
                "start": 470,
                "end": 504,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 479,
                  "end": 504,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 481,
                    "end": 504,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 482,
                        "end": 495,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 490,
                          "end": 495,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 492,
                            "end": 495
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 504,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 500,
                        "end": 504
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
              "start": 505,
              "end": 517,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 507,
                "end": 517,
                "typeName": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 514,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 514,
                  "end": 517,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 515,
                      "end": 516,
                      "typeName": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 516,
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
            "start": 523,
            "end": 631,
            "key": {
              "type": "Identifier",
              "start": 523,
              "end": 527,
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
              "start": 527,
              "end": 530,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 528,
                  "end": 529,
                  "name": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
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
                "start": 531,
                "end": 558,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 539,
                  "end": 558,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 541,
                    "end": 558,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 542,
                        "end": 550,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 547,
                          "end": 550,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 549,
                            "end": 550,
                            "typeName": {
                              "type": "Identifier",
                              "start": 549,
                              "end": 550,
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
                      "start": 552,
                      "end": 558,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 555,
                        "end": 558
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 560,
                "end": 587,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 566,
                  "end": 587,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 568,
                    "end": 587,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 569,
                        "end": 579,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 574,
                          "end": 579,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 576,
                            "end": 579
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 581,
                      "end": 587,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 584,
                        "end": 587
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 589,
                "end": 623,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 598,
                  "end": 623,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 600,
                    "end": 623,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 601,
                        "end": 614,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 609,
                          "end": 614,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 611,
                            "end": 614
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 616,
                      "end": 623,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 619,
                        "end": 623
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
              "start": 624,
              "end": 630,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 626,
                "end": 630
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
      "start": 635,
      "end": 1279,
      "id": {
        "type": "Identifier",
        "start": 645,
        "end": 653,
        "name": "IPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 653,
        "end": 656,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 654,
            "end": 655,
            "name": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
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
        "start": 657,
        "end": 1279,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 663,
            "end": 794,
            "key": {
              "type": "Identifier",
              "start": 663,
              "end": 667,
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
              "start": 667,
              "end": 670,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 668,
                  "end": 669,
                  "name": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 669,
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
                "start": 671,
                "end": 706,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 679,
                  "end": 706,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 681,
                    "end": 706,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 682,
                        "end": 690,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 687,
                          "end": 690,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 689,
                            "end": 690,
                            "typeName": {
                              "type": "Identifier",
                              "start": 689,
                              "end": 690,
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
                      "start": 692,
                      "end": 706,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 695,
                        "end": 706,
                        "typeName": {
                          "type": "Identifier",
                          "start": 695,
                          "end": 703,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 703,
                          "end": 706,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 704,
                              "end": 705,
                              "typeName": {
                                "type": "Identifier",
                                "start": 704,
                                "end": 705,
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
                "start": 708,
                "end": 743,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 714,
                  "end": 743,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 716,
                    "end": 743,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 717,
                        "end": 727,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 722,
                          "end": 727,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 729,
                      "end": 743,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 732,
                        "end": 743,
                        "typeName": {
                          "type": "Identifier",
                          "start": 732,
                          "end": 740,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 740,
                          "end": 743,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 741,
                              "end": 742,
                              "typeName": {
                                "type": "Identifier",
                                "start": 741,
                                "end": 742,
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
                "start": 745,
                "end": 779,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 754,
                  "end": 779,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 756,
                    "end": 779,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 757,
                        "end": 770,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 765,
                          "end": 770,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 767,
                            "end": 770
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 772,
                      "end": 779,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 775,
                        "end": 779
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
              "start": 780,
              "end": 793,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 782,
                "end": 793,
                "typeName": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 790,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 790,
                  "end": 793,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 791,
                      "end": 792,
                      "typeName": {
                        "type": "Identifier",
                        "start": 791,
                        "end": 792,
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
            "start": 799,
            "end": 920,
            "key": {
              "type": "Identifier",
              "start": 799,
              "end": 803,
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
              "start": 803,
              "end": 806,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 804,
                  "end": 805,
                  "name": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 805,
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
                "start": 807,
                "end": 842,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 815,
                  "end": 842,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 817,
                    "end": 842,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 818,
                        "end": 826,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 823,
                          "end": 826,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 825,
                            "end": 826,
                            "typeName": {
                              "type": "Identifier",
                              "start": 825,
                              "end": 826,
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
                      "start": 828,
                      "end": 842,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 831,
                        "end": 842,
                        "typeName": {
                          "type": "Identifier",
                          "start": 831,
                          "end": 839,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 839,
                          "end": 842,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 840,
                              "end": 841,
                              "typeName": {
                                "type": "Identifier",
                                "start": 840,
                                "end": 841,
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
                "start": 844,
                "end": 869,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 850,
                  "end": 869,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 852,
                    "end": 869,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 853,
                        "end": 863,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 858,
                          "end": 863,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 860,
                            "end": 863
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 865,
                      "end": 869,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 868,
                        "end": 869,
                        "typeName": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 869,
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
                "start": 871,
                "end": 905,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 880,
                  "end": 905,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 882,
                    "end": 905,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 883,
                        "end": 896,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 891,
                          "end": 896,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 893,
                            "end": 896
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 898,
                      "end": 905,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 901,
                        "end": 905
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
              "start": 906,
              "end": 919,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 908,
                "end": 919,
                "typeName": {
                  "type": "Identifier",
                  "start": 908,
                  "end": 916,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 916,
                  "end": 919,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 917,
                      "end": 918,
                      "typeName": {
                        "type": "Identifier",
                        "start": 917,
                        "end": 918,
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
            "start": 925,
            "end": 1046,
            "key": {
              "type": "Identifier",
              "start": 925,
              "end": 929,
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
              "start": 929,
              "end": 932,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 930,
                  "end": 931,
                  "name": {
                    "type": "Identifier",
                    "start": 930,
                    "end": 931,
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
                "start": 933,
                "end": 958,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 941,
                  "end": 958,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 943,
                    "end": 958,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 944,
                        "end": 952,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 949,
                          "end": 952,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 951,
                            "end": 952,
                            "typeName": {
                              "type": "Identifier",
                              "start": 951,
                              "end": 952,
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
                      "start": 954,
                      "end": 958,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 957,
                        "end": 958,
                        "typeName": {
                          "type": "Identifier",
                          "start": 957,
                          "end": 958,
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
                "start": 960,
                "end": 995,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 966,
                  "end": 995,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 968,
                    "end": 995,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 969,
                        "end": 979,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 974,
                          "end": 979,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 976,
                            "end": 979
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 981,
                      "end": 995,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 984,
                        "end": 995,
                        "typeName": {
                          "type": "Identifier",
                          "start": 984,
                          "end": 992,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 992,
                          "end": 995,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 993,
                              "end": 994,
                              "typeName": {
                                "type": "Identifier",
                                "start": 993,
                                "end": 994,
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
                "start": 997,
                "end": 1031,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1006,
                  "end": 1031,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1008,
                    "end": 1031,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1009,
                        "end": 1022,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1017,
                          "end": 1022,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1019,
                            "end": 1022
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1024,
                      "end": 1031,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1027,
                        "end": 1031
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
              "start": 1032,
              "end": 1045,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1034,
                "end": 1045,
                "typeName": {
                  "type": "Identifier",
                  "start": 1034,
                  "end": 1042,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1042,
                  "end": 1045,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1043,
                      "end": 1044,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1043,
                        "end": 1044,
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
            "start": 1051,
            "end": 1162,
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1055,
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
              "start": 1055,
              "end": 1058,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1056,
                  "end": 1057,
                  "name": {
                    "type": "Identifier",
                    "start": 1056,
                    "end": 1057,
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
                "start": 1059,
                "end": 1084,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1067,
                  "end": 1084,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1069,
                    "end": 1084,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1070,
                        "end": 1078,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1075,
                          "end": 1078,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1077,
                            "end": 1078,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1077,
                              "end": 1078,
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
                      "start": 1080,
                      "end": 1084,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1083,
                        "end": 1084,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1083,
                          "end": 1084,
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
                "start": 1086,
                "end": 1111,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1092,
                  "end": 1111,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1094,
                    "end": 1111,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1095,
                        "end": 1105,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1100,
                          "end": 1105,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1102,
                            "end": 1105
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1107,
                      "end": 1111,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1110,
                        "end": 1111,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1111,
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
                "start": 1113,
                "end": 1147,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1122,
                  "end": 1147,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1124,
                    "end": 1147,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1125,
                        "end": 1138,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1133,
                          "end": 1138,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1140,
                      "end": 1147,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1143,
                        "end": 1147
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
              "start": 1148,
              "end": 1161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1150,
                "end": 1161,
                "typeName": {
                  "type": "Identifier",
                  "start": 1150,
                  "end": 1158,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1158,
                  "end": 1161,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1159,
                      "end": 1160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1159,
                        "end": 1160,
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
            "start": 1167,
            "end": 1277,
            "key": {
              "type": "Identifier",
              "start": 1167,
              "end": 1171,
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
              "start": 1173,
              "end": 1176,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1174,
                  "end": 1175,
                  "name": {
                    "type": "Identifier",
                    "start": 1174,
                    "end": 1175,
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
                "start": 1177,
                "end": 1204,
                "name": "success",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1185,
                  "end": 1204,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1187,
                    "end": 1204,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1188,
                        "end": 1196,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1193,
                          "end": 1196,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1195,
                            "end": 1196,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1195,
                              "end": 1196,
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
                      "start": 1198,
                      "end": 1204,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1201,
                        "end": 1204
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 1206,
                "end": 1233,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1212,
                  "end": 1233,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1214,
                    "end": 1233,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1215,
                        "end": 1225,
                        "name": "error",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1220,
                          "end": 1225,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1222,
                            "end": 1225
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1227,
                      "end": 1233,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1230,
                        "end": 1233
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 1235,
                "end": 1269,
                "name": "progress",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1244,
                  "end": 1269,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1246,
                    "end": 1269,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1247,
                        "end": 1260,
                        "name": "progress",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1255,
                          "end": 1260,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1257,
                            "end": 1260
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1262,
                      "end": 1269,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1265,
                        "end": 1269
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
              "start": 1270,
              "end": 1276,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1272,
                "end": 1276
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
      "start": 1281,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1298,
        "end": 1310,
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
        "start": 1312,
        "end": 1330,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1314,
          "end": 1330,
          "typeName": {
            "type": "Identifier",
            "start": 1314,
            "end": 1322,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1322,
            "end": 1330,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1323,
                "end": 1329
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1332,
      "end": 1382,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1362,
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
        "start": 1364,
        "end": 1381,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1366,
          "end": 1381,
          "typeName": {
            "type": "Identifier",
            "start": 1366,
            "end": 1373,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1373,
            "end": 1381,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1374,
                "end": 1380
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1383,
      "end": 1441,
      "id": {
        "type": "Identifier",
        "start": 1400,
        "end": 1413,
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
        "start": 1415,
        "end": 1440,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1417,
          "end": 1440,
          "typeName": {
            "type": "Identifier",
            "start": 1417,
            "end": 1425,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1425,
            "end": 1440,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1426,
                "end": 1439,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1428,
                    "end": 1437,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1429,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1429,
                      "end": 1437,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1431,
                        "end": 1437
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
      "start": 1442,
      "end": 1500,
      "id": {
        "type": "Identifier",
        "start": 1459,
        "end": 1473,
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
        "start": 1475,
        "end": 1499,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1477,
          "end": 1499,
          "typeName": {
            "type": "Identifier",
            "start": 1477,
            "end": 1484,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1484,
            "end": 1499,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 1485,
                "end": 1498,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1487,
                    "end": 1496,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1487,
                      "end": 1488,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1488,
                      "end": 1496,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1490,
                        "end": 1496
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
      "start": 1501,
      "end": 1561,
      "id": {
        "type": "Identifier",
        "start": 1518,
        "end": 1531,
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
          "start": 1532,
          "end": 1541,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1533,
            "end": 1541,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1535,
              "end": 1541
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
        "start": 1542,
        "end": 1560,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1544,
          "end": 1560,
          "typeName": {
            "type": "Identifier",
            "start": 1544,
            "end": 1552,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1552,
            "end": 1560,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1553,
                "end": 1559
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1562,
      "end": 1622,
      "id": {
        "type": "Identifier",
        "start": 1579,
        "end": 1593,
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
          "start": 1594,
          "end": 1603,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1595,
            "end": 1603,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1597,
              "end": 1603
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
        "start": 1604,
        "end": 1621,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1606,
          "end": 1621,
          "typeName": {
            "type": "Identifier",
            "start": 1606,
            "end": 1613,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1613,
            "end": 1621,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1614,
                "end": 1620
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1623,
      "end": 1695,
      "id": {
        "type": "Identifier",
        "start": 1640,
        "end": 1653,
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
          "start": 1654,
          "end": 1663,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1655,
            "end": 1663,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1657,
              "end": 1663
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1665,
          "end": 1675,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1667,
            "end": 1675,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1669,
              "end": 1675
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
        "start": 1676,
        "end": 1694,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1678,
          "end": 1694,
          "typeName": {
            "type": "Identifier",
            "start": 1678,
            "end": 1686,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1686,
            "end": 1694,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1687,
                "end": 1693
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1696,
      "end": 1768,
      "id": {
        "type": "Identifier",
        "start": 1713,
        "end": 1727,
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
          "start": 1728,
          "end": 1737,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1729,
            "end": 1737,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1731,
              "end": 1737
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1739,
          "end": 1749,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1741,
            "end": 1749,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1743,
              "end": 1749
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
        "start": 1750,
        "end": 1767,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1752,
          "end": 1767,
          "typeName": {
            "type": "Identifier",
            "start": 1752,
            "end": 1759,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1759,
            "end": 1767,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1760,
                "end": 1766
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1769,
      "end": 1856,
      "id": {
        "type": "Identifier",
        "start": 1786,
        "end": 1799,
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
          "start": 1800,
          "end": 1809,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1801,
            "end": 1809,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1803,
              "end": 1809
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1811,
          "end": 1836,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1813,
            "end": 1836,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1815,
              "end": 1836,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1816,
                  "end": 1825,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1817,
                    "end": 1825,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1819,
                      "end": 1825
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1827,
                "end": 1836,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1830,
                  "end": 1836
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
        "start": 1837,
        "end": 1855,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1839,
          "end": 1855,
          "typeName": {
            "type": "Identifier",
            "start": 1839,
            "end": 1847,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1847,
            "end": 1855,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1848,
                "end": 1854
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1857,
      "end": 1944,
      "id": {
        "type": "Identifier",
        "start": 1874,
        "end": 1888,
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
          "start": 1889,
          "end": 1898,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1890,
            "end": 1898,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1892,
              "end": 1898
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1900,
          "end": 1925,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1902,
            "end": 1925,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1904,
              "end": 1925,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1914,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1906,
                    "end": 1914,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1908,
                      "end": 1914
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1916,
                "end": 1925,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1919,
                  "end": 1925
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
        "start": 1926,
        "end": 1943,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1928,
          "end": 1943,
          "typeName": {
            "type": "Identifier",
            "start": 1928,
            "end": 1935,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1935,
            "end": 1943,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1936,
                "end": 1942
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1945,
      "end": 2025,
      "id": {
        "type": "Identifier",
        "start": 1962,
        "end": 1975,
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
          "start": 1976,
          "end": 1985,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1977,
            "end": 1985,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1979,
              "end": 1985
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1987,
          "end": 2005,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1989,
            "end": 2005,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1991,
              "end": 2005,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1991,
                "end": 1994,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1992,
                    "end": 1993,
                    "name": {
                      "type": "Identifier",
                      "start": 1992,
                      "end": 1993,
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
                  "start": 1995,
                  "end": 1999,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1996,
                    "end": 1999,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1998,
                      "end": 1999,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1998,
                        "end": 1999,
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
                "start": 2001,
                "end": 2005,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2004,
                  "end": 2005,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2004,
                    "end": 2005,
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
        "start": 2006,
        "end": 2024,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2008,
          "end": 2024,
          "typeName": {
            "type": "Identifier",
            "start": 2008,
            "end": 2016,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2016,
            "end": 2024,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2017,
                "end": 2023
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2026,
      "end": 2106,
      "id": {
        "type": "Identifier",
        "start": 2043,
        "end": 2057,
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
          "start": 2058,
          "end": 2067,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2059,
            "end": 2067,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2061,
              "end": 2067
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2069,
          "end": 2087,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2071,
            "end": 2087,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2073,
              "end": 2087,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2073,
                "end": 2076,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2074,
                    "end": 2075,
                    "name": {
                      "type": "Identifier",
                      "start": 2074,
                      "end": 2075,
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
                  "start": 2077,
                  "end": 2081,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2078,
                    "end": 2081,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2080,
                      "end": 2081,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2080,
                        "end": 2081,
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
                "start": 2083,
                "end": 2087,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2086,
                  "end": 2087,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2086,
                    "end": 2087,
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
        "start": 2088,
        "end": 2105,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2090,
          "end": 2105,
          "typeName": {
            "type": "Identifier",
            "start": 2090,
            "end": 2097,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2097,
            "end": 2105,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2098,
                "end": 2104
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2107,
      "end": 2176,
      "id": {
        "type": "Identifier",
        "start": 2124,
        "end": 2137,
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
          "start": 2138,
          "end": 2156,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2140,
            "end": 2156,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2142,
              "end": 2156,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2142,
                "end": 2145,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2143,
                    "end": 2144,
                    "name": {
                      "type": "Identifier",
                      "start": 2143,
                      "end": 2144,
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
                  "start": 2146,
                  "end": 2150,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2147,
                    "end": 2150,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2149,
                      "end": 2150,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2149,
                        "end": 2150,
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
                "start": 2152,
                "end": 2156,
                "typeAnnotation": {
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
        "start": 2157,
        "end": 2175,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2159,
          "end": 2175,
          "typeName": {
            "type": "Identifier",
            "start": 2159,
            "end": 2167,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2167,
            "end": 2175,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2168,
                "end": 2174
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2177,
      "end": 2246,
      "id": {
        "type": "Identifier",
        "start": 2194,
        "end": 2208,
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
          "start": 2209,
          "end": 2227,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2211,
            "end": 2227,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2213,
              "end": 2227,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2213,
                "end": 2216,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2214,
                    "end": 2215,
                    "name": {
                      "type": "Identifier",
                      "start": 2214,
                      "end": 2215,
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
                  "start": 2217,
                  "end": 2221,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2218,
                    "end": 2221,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2220,
                      "end": 2221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2220,
                        "end": 2221,
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
                "start": 2223,
                "end": 2227,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2226,
                  "end": 2227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2226,
                    "end": 2227,
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
        "start": 2228,
        "end": 2245,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2230,
          "end": 2245,
          "typeName": {
            "type": "Identifier",
            "start": 2230,
            "end": 2237,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2237,
            "end": 2245,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2238,
                "end": 2244
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2247,
      "end": 2317,
      "id": {
        "type": "Identifier",
        "start": 2264,
        "end": 2277,
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
          "start": 2281,
          "end": 2285,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2282,
            "end": 2285,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2284,
              "end": 2285,
              "typeName": {
                "type": "Identifier",
                "start": 2284,
                "end": 2285,
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
          "start": 2287,
          "end": 2302,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2289,
            "end": 2302,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2291,
              "end": 2302,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2292,
                  "end": 2296,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2293,
                    "end": 2296,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2295,
                      "end": 2296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2295,
                        "end": 2296,
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
                "start": 2298,
                "end": 2302,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2301,
                  "end": 2302,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2301,
                    "end": 2302,
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
        "start": 2277,
        "end": 2280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2278,
            "end": 2279,
            "name": {
              "type": "Identifier",
              "start": 2278,
              "end": 2279,
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
        "start": 2303,
        "end": 2316,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2305,
          "end": 2316,
          "typeName": {
            "type": "Identifier",
            "start": 2305,
            "end": 2313,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2313,
            "end": 2316,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2314,
                "end": 2315,
                "typeName": {
                  "type": "Identifier",
                  "start": 2314,
                  "end": 2315,
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
      "start": 2318,
      "end": 2388,
      "id": {
        "type": "Identifier",
        "start": 2335,
        "end": 2349,
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
          "start": 2353,
          "end": 2357,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2354,
            "end": 2357,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2356,
              "end": 2357,
              "typeName": {
                "type": "Identifier",
                "start": 2356,
                "end": 2357,
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
          "start": 2359,
          "end": 2374,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2361,
            "end": 2374,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2363,
              "end": 2374,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2364,
                  "end": 2368,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2365,
                    "end": 2368,
                    "typeAnnotation": {
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2370,
                "end": 2374,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2373,
                  "end": 2374,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2373,
                    "end": 2374,
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
        "start": 2349,
        "end": 2352,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2350,
            "end": 2351,
            "name": {
              "type": "Identifier",
              "start": 2350,
              "end": 2351,
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
        "start": 2375,
        "end": 2387,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2377,
          "end": 2387,
          "typeName": {
            "type": "Identifier",
            "start": 2377,
            "end": 2384,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2384,
            "end": 2387,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2385,
                "end": 2386,
                "typeName": {
                  "type": "Identifier",
                  "start": 2385,
                  "end": 2386,
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
      "start": 2389,
      "end": 2462,
      "id": {
        "type": "Identifier",
        "start": 2406,
        "end": 2419,
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
          "start": 2423,
          "end": 2427,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2424,
            "end": 2427,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2426,
              "end": 2427,
              "typeName": {
                "type": "Identifier",
                "start": 2426,
                "end": 2427,
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
          "start": 2429,
          "end": 2447,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2431,
            "end": 2447,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2433,
              "end": 2447,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2433,
                "end": 2436,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2434,
                    "end": 2435,
                    "name": {
                      "type": "Identifier",
                      "start": 2434,
                      "end": 2435,
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
                  "start": 2437,
                  "end": 2441,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2438,
                    "end": 2441,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2440,
                      "end": 2441,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2440,
                        "end": 2441,
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
                "start": 2443,
                "end": 2447,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2446,
                  "end": 2447,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2446,
                    "end": 2447,
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
        "start": 2419,
        "end": 2422,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2420,
            "end": 2421,
            "name": {
              "type": "Identifier",
              "start": 2420,
              "end": 2421,
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
        "start": 2448,
        "end": 2461,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2450,
          "end": 2461,
          "typeName": {
            "type": "Identifier",
            "start": 2450,
            "end": 2458,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2458,
            "end": 2461,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2459,
                "end": 2460,
                "typeName": {
                  "type": "Identifier",
                  "start": 2459,
                  "end": 2460,
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
      "start": 2463,
      "end": 2536,
      "id": {
        "type": "Identifier",
        "start": 2480,
        "end": 2494,
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
          "start": 2498,
          "end": 2502,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2499,
            "end": 2502,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2501,
              "end": 2502,
              "typeName": {
                "type": "Identifier",
                "start": 2501,
                "end": 2502,
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
          "start": 2504,
          "end": 2522,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2506,
            "end": 2522,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2508,
              "end": 2522,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2508,
                "end": 2511,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2509,
                    "end": 2510,
                    "name": {
                      "type": "Identifier",
                      "start": 2509,
                      "end": 2510,
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
                  "start": 2512,
                  "end": 2516,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2513,
                    "end": 2516,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2515,
                      "end": 2516,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2515,
                        "end": 2516,
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
                "start": 2518,
                "end": 2522,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2521,
                  "end": 2522,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2521,
                    "end": 2522,
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
        "start": 2494,
        "end": 2497,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2495,
            "end": 2496,
            "name": {
              "type": "Identifier",
              "start": 2495,
              "end": 2496,
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
        "start": 2523,
        "end": 2535,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2525,
          "end": 2535,
          "typeName": {
            "type": "Identifier",
            "start": 2525,
            "end": 2532,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2532,
            "end": 2535,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2533,
                "end": 2534,
                "typeName": {
                  "type": "Identifier",
                  "start": 2533,
                  "end": 2534,
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
      "start": 2537,
      "end": 2605,
      "id": {
        "type": "Identifier",
        "start": 2554,
        "end": 2568,
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
          "start": 2572,
          "end": 2590,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2574,
            "end": 2590,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2576,
              "end": 2590,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2576,
                "end": 2579,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2577,
                    "end": 2578,
                    "name": {
                      "type": "Identifier",
                      "start": 2577,
                      "end": 2578,
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
                  "start": 2580,
                  "end": 2584,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2581,
                    "end": 2584,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2583,
                      "end": 2584,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2583,
                        "end": 2584,
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
                "start": 2586,
                "end": 2590,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2589,
                  "end": 2590,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2589,
                    "end": 2590,
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
        "start": 2568,
        "end": 2571,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2569,
            "end": 2570,
            "name": {
              "type": "Identifier",
              "start": 2569,
              "end": 2570,
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
        "start": 2591,
        "end": 2604,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2593,
          "end": 2604,
          "typeName": {
            "type": "Identifier",
            "start": 2593,
            "end": 2601,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2601,
            "end": 2604,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2602,
                "end": 2603,
                "typeName": {
                  "type": "Identifier",
                  "start": 2602,
                  "end": 2603,
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
      "start": 2606,
      "end": 2674,
      "id": {
        "type": "Identifier",
        "start": 2623,
        "end": 2638,
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
          "start": 2642,
          "end": 2660,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2644,
            "end": 2660,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2646,
              "end": 2660,
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
                  "start": 2650,
                  "end": 2654,
                  "name": "a",
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
                "start": 2656,
                "end": 2660,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2659,
                  "end": 2660,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2659,
                    "end": 2660,
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
        "start": 2638,
        "end": 2641,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2639,
            "end": 2640,
            "name": {
              "type": "Identifier",
              "start": 2639,
              "end": 2640,
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
        "end": 2673,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2663,
          "end": 2673,
          "typeName": {
            "type": "Identifier",
            "start": 2663,
            "end": 2670,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2670,
            "end": 2673,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2671,
                "end": 2672,
                "typeName": {
                  "type": "Identifier",
                  "start": 2671,
                  "end": 2672,
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
      "end": 2737,
      "id": {
        "type": "Identifier",
        "start": 2693,
        "end": 2707,
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
          "start": 2708,
          "end": 2717,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2709,
            "end": 2717,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2711,
              "end": 2717
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
        "start": 2718,
        "end": 2736,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2720,
          "end": 2736,
          "typeName": {
            "type": "Identifier",
            "start": 2720,
            "end": 2728,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2728,
            "end": 2736,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2729,
                "end": 2735
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2738,
      "end": 2799,
      "id": {
        "type": "Identifier",
        "start": 2755,
        "end": 2769,
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
          "start": 2770,
          "end": 2779,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2771,
            "end": 2779,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2773,
              "end": 2779
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
        "start": 2780,
        "end": 2798,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2782,
          "end": 2798,
          "typeName": {
            "type": "Identifier",
            "start": 2782,
            "end": 2790,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2790,
            "end": 2798,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2791,
                "end": 2797
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2800,
      "end": 2861,
      "id": {
        "type": "Identifier",
        "start": 2817,
        "end": 2832,
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
          "start": 2833,
          "end": 2842,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2834,
            "end": 2842,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2836,
              "end": 2842
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
        "start": 2843,
        "end": 2860,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2845,
          "end": 2860,
          "typeName": {
            "type": "Identifier",
            "start": 2845,
            "end": 2852,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2852,
            "end": 2860,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2853,
                "end": 2859
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2862,
      "end": 2923,
      "id": {
        "type": "Identifier",
        "start": 2879,
        "end": 2894,
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
          "start": 2895,
          "end": 2904,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2896,
            "end": 2904,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2898,
              "end": 2904
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
        "start": 2905,
        "end": 2922,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2907,
          "end": 2922,
          "typeName": {
            "type": "Identifier",
            "start": 2907,
            "end": 2914,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2914,
            "end": 2922,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2915,
                "end": 2921
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2925,
      "end": 2979,
      "id": {
        "type": "Identifier",
        "start": 2942,
        "end": 2956,
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
          "start": 2960,
          "end": 2964,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2961,
            "end": 2964,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2963,
              "end": 2964,
              "typeName": {
                "type": "Identifier",
                "start": 2963,
                "end": 2964,
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
        "start": 2956,
        "end": 2959,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2957,
            "end": 2958,
            "name": {
              "type": "Identifier",
              "start": 2957,
              "end": 2958,
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
        "start": 2965,
        "end": 2978,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2967,
          "end": 2978,
          "typeName": {
            "type": "Identifier",
            "start": 2967,
            "end": 2975,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2975,
            "end": 2978,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2976,
                "end": 2977,
                "typeName": {
                  "type": "Identifier",
                  "start": 2976,
                  "end": 2977,
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
      "start": 2980,
      "end": 3040,
      "id": {
        "type": "Identifier",
        "start": 2997,
        "end": 3011,
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
          "start": 3015,
          "end": 3019,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3016,
            "end": 3019,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3018,
              "end": 3019,
              "typeName": {
                "type": "Identifier",
                "start": 3018,
                "end": 3019,
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
          "start": 3021,
          "end": 3025,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3022,
            "end": 3025,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3024,
              "end": 3025,
              "typeName": {
                "type": "Identifier",
                "start": 3024,
                "end": 3025,
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
        "start": 3011,
        "end": 3014,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3012,
            "end": 3013,
            "name": {
              "type": "Identifier",
              "start": 3012,
              "end": 3013,
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
        "start": 3026,
        "end": 3039,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3028,
          "end": 3039,
          "typeName": {
            "type": "Identifier",
            "start": 3028,
            "end": 3036,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3036,
            "end": 3039,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3037,
                "end": 3038,
                "typeName": {
                  "type": "Identifier",
                  "start": 3037,
                  "end": 3038,
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
      "start": 3041,
      "end": 3096,
      "id": {
        "type": "Identifier",
        "start": 3058,
        "end": 3073,
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
          "start": 3077,
          "end": 3081,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3078,
            "end": 3081,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3080,
              "end": 3081,
              "typeName": {
                "type": "Identifier",
                "start": 3080,
                "end": 3081,
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
        "start": 3073,
        "end": 3076,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3074,
            "end": 3075,
            "name": {
              "type": "Identifier",
              "start": 3074,
              "end": 3075,
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
        "start": 3082,
        "end": 3095,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3084,
          "end": 3095,
          "typeName": {
            "type": "Identifier",
            "start": 3084,
            "end": 3092,
            "name": "IPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3092,
            "end": 3095,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3093,
                "end": 3094,
                "typeName": {
                  "type": "Identifier",
                  "start": 3093,
                  "end": 3094,
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
      "start": 3097,
      "end": 3157,
      "id": {
        "type": "Identifier",
        "start": 3114,
        "end": 3129,
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
          "start": 3133,
          "end": 3137,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3134,
            "end": 3137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3136,
              "end": 3137,
              "typeName": {
                "type": "Identifier",
                "start": 3136,
                "end": 3137,
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
          "start": 3139,
          "end": 3143,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3140,
            "end": 3143,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3142,
              "end": 3143,
              "typeName": {
                "type": "Identifier",
                "start": 3142,
                "end": 3143,
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
        "start": 3129,
        "end": 3132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3130,
            "end": 3131,
            "name": {
              "type": "Identifier",
              "start": 3130,
              "end": 3131,
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
        "start": 3144,
        "end": 3156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3146,
          "end": 3156,
          "typeName": {
            "type": "Identifier",
            "start": 3146,
            "end": 3153,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3153,
            "end": 3156,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3154,
                "end": 3155,
                "typeName": {
                  "type": "Identifier",
                  "start": 3154,
                  "end": 3155,
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
      "start": 3159,
      "end": 3184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3163,
          "end": 3183,
          "id": {
            "type": "Identifier",
            "start": 3163,
            "end": 3183,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3165,
              "end": 3183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3167,
                "end": 3183,
                "typeName": {
                  "type": "Identifier",
                  "start": 3167,
                  "end": 3175,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3175,
                  "end": 3183,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3176,
                      "end": 3182
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
      "start": 3185,
      "end": 3245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3189,
          "end": 3244,
          "id": {
            "type": "Identifier",
            "start": 3189,
            "end": 3192,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3195,
            "end": 3244,
            "callee": {
              "type": "MemberExpression",
              "start": 3195,
              "end": 3202,
              "object": {
                "type": "Identifier",
                "start": 3195,
                "end": 3197,
                "name": "r1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3198,
                "end": 3202,
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
                "start": 3203,
                "end": 3215,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3217,
                "end": 3229,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3231,
                "end": 3243,
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
      "start": 3246,
      "end": 3353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3250,
          "end": 3352,
          "id": {
            "type": "Identifier",
            "start": 3250,
            "end": 3253,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3256,
            "end": 3352,
            "callee": {
              "type": "MemberExpression",
              "start": 3256,
              "end": 3310,
              "object": {
                "type": "CallExpression",
                "start": 3256,
                "end": 3305,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3256,
                  "end": 3263,
                  "object": {
                    "type": "Identifier",
                    "start": 3256,
                    "end": 3258,
                    "name": "r1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3259,
                    "end": 3263,
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
                    "start": 3264,
                    "end": 3276,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3278,
                    "end": 3290,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3292,
                    "end": 3304,
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
                "start": 3306,
                "end": 3310,
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
                "start": 3311,
                "end": 3323,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3325,
                "end": 3337,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3339,
                "end": 3351,
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
      "start": 3354,
      "end": 3417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3358,
          "end": 3416,
          "id": {
            "type": "Identifier",
            "start": 3358,
            "end": 3361,
            "name": "r1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3364,
            "end": 3416,
            "callee": {
              "type": "MemberExpression",
              "start": 3364,
              "end": 3371,
              "object": {
                "type": "Identifier",
                "start": 3364,
                "end": 3366,
                "name": "r1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3367,
                "end": 3371,
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
                "start": 3372,
                "end": 3385,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3387,
                "end": 3400,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3402,
                "end": 3415,
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
      "start": 3418,
      "end": 3442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3422,
          "end": 3441,
          "id": {
            "type": "Identifier",
            "start": 3422,
            "end": 3441,
            "name": "s1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3424,
              "end": 3441,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3426,
                "end": 3441,
                "typeName": {
                  "type": "Identifier",
                  "start": 3426,
                  "end": 3433,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3433,
                  "end": 3441,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3434,
                      "end": 3440
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
      "start": 3443,
      "end": 3503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3447,
          "end": 3502,
          "id": {
            "type": "Identifier",
            "start": 3447,
            "end": 3450,
            "name": "s1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3453,
            "end": 3502,
            "callee": {
              "type": "MemberExpression",
              "start": 3453,
              "end": 3460,
              "object": {
                "type": "Identifier",
                "start": 3453,
                "end": 3455,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3456,
                "end": 3460,
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
                "start": 3461,
                "end": 3473,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3475,
                "end": 3487,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3489,
                "end": 3501,
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
      "start": 3504,
      "end": 3567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3508,
          "end": 3566,
          "id": {
            "type": "Identifier",
            "start": 3508,
            "end": 3511,
            "name": "s1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3514,
            "end": 3566,
            "callee": {
              "type": "MemberExpression",
              "start": 3514,
              "end": 3521,
              "object": {
                "type": "Identifier",
                "start": 3514,
                "end": 3516,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3517,
                "end": 3521,
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
                "start": 3522,
                "end": 3535,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3537,
                "end": 3550,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3552,
                "end": 3565,
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
      "start": 3568,
      "end": 3629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3572,
          "end": 3628,
          "id": {
            "type": "Identifier",
            "start": 3572,
            "end": 3575,
            "name": "s1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3578,
            "end": 3628,
            "callee": {
              "type": "MemberExpression",
              "start": 3578,
              "end": 3585,
              "object": {
                "type": "Identifier",
                "start": 3578,
                "end": 3580,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3581,
                "end": 3585,
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
                "start": 3586,
                "end": 3599,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3601,
                "end": 3613,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3615,
                "end": 3627,
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
      "start": 3630,
      "end": 3738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3634,
          "end": 3737,
          "id": {
            "type": "Identifier",
            "start": 3634,
            "end": 3637,
            "name": "s1d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3640,
            "end": 3737,
            "callee": {
              "type": "MemberExpression",
              "start": 3640,
              "end": 3695,
              "object": {
                "type": "CallExpression",
                "start": 3640,
                "end": 3690,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3640,
                  "end": 3647,
                  "object": {
                    "type": "Identifier",
                    "start": 3640,
                    "end": 3642,
                    "name": "s1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3643,
                    "end": 3647,
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
                    "start": 3648,
                    "end": 3661,
                    "name": "testFunctionP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3663,
                    "end": 3675,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3677,
                    "end": 3689,
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
                "start": 3691,
                "end": 3695,
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
                "start": 3696,
                "end": 3708,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3710,
                "end": 3722,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3724,
                "end": 3736,
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
      "start": 3740,
      "end": 3773,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3744,
          "end": 3772,
          "id": {
            "type": "Identifier",
            "start": 3744,
            "end": 3772,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3746,
              "end": 3772,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3748,
                "end": 3772,
                "typeName": {
                  "type": "Identifier",
                  "start": 3748,
                  "end": 3756,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3756,
                  "end": 3772,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3757,
                      "end": 3771,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3759,
                          "end": 3769,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3759,
                            "end": 3760,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3760,
                            "end": 3768,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3762,
                              "end": 3768
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
      "start": 3774,
      "end": 3837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3778,
          "end": 3836,
          "id": {
            "type": "Identifier",
            "start": 3778,
            "end": 3781,
            "name": "r2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3784,
            "end": 3836,
            "callee": {
              "type": "MemberExpression",
              "start": 3784,
              "end": 3791,
              "object": {
                "type": "Identifier",
                "start": 3784,
                "end": 3786,
                "name": "r2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3787,
                "end": 3791,
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
                "start": 3792,
                "end": 3805,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3807,
                "end": 3820,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3822,
                "end": 3835,
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
      "start": 3838,
      "end": 3951,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3842,
          "end": 3950,
          "id": {
            "type": "Identifier",
            "start": 3842,
            "end": 3845,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3848,
            "end": 3950,
            "callee": {
              "type": "MemberExpression",
              "start": 3848,
              "end": 3905,
              "object": {
                "type": "CallExpression",
                "start": 3848,
                "end": 3900,
                "callee": {
                  "type": "MemberExpression",
                  "start": 3848,
                  "end": 3855,
                  "object": {
                    "type": "Identifier",
                    "start": 3848,
                    "end": 3850,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3851,
                    "end": 3855,
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
                    "start": 3856,
                    "end": 3869,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3871,
                    "end": 3884,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3886,
                    "end": 3899,
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
                "start": 3901,
                "end": 3905,
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
                "start": 3906,
                "end": 3919,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3921,
                "end": 3934,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3936,
                "end": 3949,
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
      "start": 3952,
      "end": 3984,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3956,
          "end": 3983,
          "id": {
            "type": "Identifier",
            "start": 3956,
            "end": 3983,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3958,
              "end": 3983,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3960,
                "end": 3983,
                "typeName": {
                  "type": "Identifier",
                  "start": 3960,
                  "end": 3967,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3967,
                  "end": 3983,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 3968,
                      "end": 3982,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3970,
                          "end": 3980,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3970,
                            "end": 3971,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3971,
                            "end": 3979,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3973,
                              "end": 3979
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
      "start": 3985,
      "end": 4048,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3989,
          "end": 4047,
          "id": {
            "type": "Identifier",
            "start": 3989,
            "end": 3992,
            "name": "s2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3995,
            "end": 4047,
            "callee": {
              "type": "MemberExpression",
              "start": 3995,
              "end": 4002,
              "object": {
                "type": "Identifier",
                "start": 3995,
                "end": 3997,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3998,
                "end": 4002,
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
                "start": 4003,
                "end": 4016,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4018,
                "end": 4031,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4033,
                "end": 4046,
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
      "start": 4049,
      "end": 4115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4053,
          "end": 4114,
          "id": {
            "type": "Identifier",
            "start": 4053,
            "end": 4056,
            "name": "s2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4059,
            "end": 4114,
            "callee": {
              "type": "MemberExpression",
              "start": 4059,
              "end": 4066,
              "object": {
                "type": "Identifier",
                "start": 4059,
                "end": 4061,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4062,
                "end": 4066,
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
                "start": 4067,
                "end": 4081,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4083,
                "end": 4097,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4099,
                "end": 4113,
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
      "start": 4116,
      "end": 4180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4120,
          "end": 4179,
          "id": {
            "type": "Identifier",
            "start": 4120,
            "end": 4123,
            "name": "s2c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4126,
            "end": 4179,
            "callee": {
              "type": "MemberExpression",
              "start": 4126,
              "end": 4133,
              "object": {
                "type": "Identifier",
                "start": 4126,
                "end": 4128,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4129,
                "end": 4133,
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
                "start": 4134,
                "end": 4148,
                "name": "testFunction2P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4150,
                "end": 4163,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4165,
                "end": 4178,
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
      "start": 4181,
      "end": 4295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4185,
          "end": 4294,
          "id": {
            "type": "Identifier",
            "start": 4185,
            "end": 4188,
            "name": "s2d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4191,
            "end": 4294,
            "callee": {
              "type": "MemberExpression",
              "start": 4191,
              "end": 4249,
              "object": {
                "type": "CallExpression",
                "start": 4191,
                "end": 4244,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4191,
                  "end": 4198,
                  "object": {
                    "type": "Identifier",
                    "start": 4191,
                    "end": 4193,
                    "name": "s2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4194,
                    "end": 4198,
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
                    "start": 4199,
                    "end": 4213,
                    "name": "testFunction2P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4215,
                    "end": 4228,
                    "name": "testFunction2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4230,
                    "end": 4243,
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
                "start": 4245,
                "end": 4249,
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
                "start": 4250,
                "end": 4263,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4265,
                "end": 4278,
                "name": "testFunction2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4280,
                "end": 4293,
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
      "start": 4297,
      "end": 4322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4301,
          "end": 4321,
          "id": {
            "type": "Identifier",
            "start": 4301,
            "end": 4321,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4303,
              "end": 4321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4305,
                "end": 4321,
                "typeName": {
                  "type": "Identifier",
                  "start": 4305,
                  "end": 4313,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4313,
                  "end": 4321,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4314,
                      "end": 4320
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
      "start": 4323,
      "end": 4386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4327,
          "end": 4385,
          "id": {
            "type": "Identifier",
            "start": 4327,
            "end": 4330,
            "name": "r3a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4333,
            "end": 4385,
            "callee": {
              "type": "MemberExpression",
              "start": 4333,
              "end": 4340,
              "object": {
                "type": "Identifier",
                "start": 4333,
                "end": 4335,
                "name": "r3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4336,
                "end": 4340,
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
                "start": 4341,
                "end": 4354,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4356,
                "end": 4369,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4371,
                "end": 4384,
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
      "start": 4387,
      "end": 4500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4391,
          "end": 4499,
          "id": {
            "type": "Identifier",
            "start": 4391,
            "end": 4394,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4397,
            "end": 4499,
            "callee": {
              "type": "MemberExpression",
              "start": 4397,
              "end": 4454,
              "object": {
                "type": "CallExpression",
                "start": 4397,
                "end": 4449,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4397,
                  "end": 4404,
                  "object": {
                    "type": "Identifier",
                    "start": 4397,
                    "end": 4399,
                    "name": "r3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4400,
                    "end": 4404,
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
                    "start": 4405,
                    "end": 4418,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4420,
                    "end": 4433,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4435,
                    "end": 4448,
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
                "start": 4450,
                "end": 4454,
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
                "start": 4455,
                "end": 4468,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4470,
                "end": 4483,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4485,
                "end": 4498,
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
      "start": 4501,
      "end": 4525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4505,
          "end": 4524,
          "id": {
            "type": "Identifier",
            "start": 4505,
            "end": 4524,
            "name": "s3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4507,
              "end": 4524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4509,
                "end": 4524,
                "typeName": {
                  "type": "Identifier",
                  "start": 4509,
                  "end": 4516,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4516,
                  "end": 4524,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4517,
                      "end": 4523
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
      "start": 4526,
      "end": 4589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4530,
          "end": 4588,
          "id": {
            "type": "Identifier",
            "start": 4530,
            "end": 4533,
            "name": "s3a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4536,
            "end": 4588,
            "callee": {
              "type": "MemberExpression",
              "start": 4536,
              "end": 4543,
              "object": {
                "type": "Identifier",
                "start": 4536,
                "end": 4538,
                "name": "s3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4539,
                "end": 4543,
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
                "start": 4544,
                "end": 4557,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4559,
                "end": 4572,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4574,
                "end": 4587,
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
      "start": 4590,
      "end": 4656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4594,
          "end": 4655,
          "id": {
            "type": "Identifier",
            "start": 4594,
            "end": 4597,
            "name": "s3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4600,
            "end": 4655,
            "callee": {
              "type": "MemberExpression",
              "start": 4600,
              "end": 4607,
              "object": {
                "type": "Identifier",
                "start": 4600,
                "end": 4602,
                "name": "s3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4603,
                "end": 4607,
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
                "start": 4608,
                "end": 4622,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4624,
                "end": 4638,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4640,
                "end": 4654,
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
      "start": 4657,
      "end": 4721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4661,
          "end": 4720,
          "id": {
            "type": "Identifier",
            "start": 4661,
            "end": 4664,
            "name": "s3c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4667,
            "end": 4720,
            "callee": {
              "type": "MemberExpression",
              "start": 4667,
              "end": 4674,
              "object": {
                "type": "Identifier",
                "start": 4667,
                "end": 4669,
                "name": "s3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4670,
                "end": 4674,
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
                "start": 4675,
                "end": 4689,
                "name": "testFunction3P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4691,
                "end": 4704,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4706,
                "end": 4719,
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
      "start": 4722,
      "end": 4836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4726,
          "end": 4835,
          "id": {
            "type": "Identifier",
            "start": 4726,
            "end": 4729,
            "name": "s3d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4732,
            "end": 4835,
            "callee": {
              "type": "MemberExpression",
              "start": 4732,
              "end": 4790,
              "object": {
                "type": "CallExpression",
                "start": 4732,
                "end": 4785,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4732,
                  "end": 4739,
                  "object": {
                    "type": "Identifier",
                    "start": 4732,
                    "end": 4734,
                    "name": "s3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4735,
                    "end": 4739,
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
                    "start": 4740,
                    "end": 4754,
                    "name": "testFunction3P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4756,
                    "end": 4769,
                    "name": "testFunction3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 4771,
                    "end": 4784,
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
                "start": 4786,
                "end": 4790,
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
                "start": 4791,
                "end": 4804,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4806,
                "end": 4819,
                "name": "testFunction3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4821,
                "end": 4834,
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
      "start": 4847,
      "end": 4872,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4851,
          "end": 4871,
          "id": {
            "type": "Identifier",
            "start": 4851,
            "end": 4871,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4853,
              "end": 4871,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4855,
                "end": 4871,
                "typeName": {
                  "type": "Identifier",
                  "start": 4855,
                  "end": 4863,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4863,
                  "end": 4871,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4864,
                      "end": 4870
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
      "start": 4873,
      "end": 4917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4877,
          "end": 4916,
          "id": {
            "type": "Identifier",
            "start": 4877,
            "end": 4916,
            "name": "sIPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4886,
              "end": 4916,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4888,
                "end": 4916,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4889,
                    "end": 4895,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4890,
                      "end": 4895,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4892,
                        "end": 4895
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4897,
                  "end": 4916,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4900,
                    "end": 4916,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4900,
                      "end": 4908,
                      "name": "IPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4908,
                      "end": 4916,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4909,
                          "end": 4915
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
      "start": 4918,
      "end": 4960,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4922,
          "end": 4959,
          "id": {
            "type": "Identifier",
            "start": 4922,
            "end": 4959,
            "name": "sPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4930,
              "end": 4959,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4932,
                "end": 4959,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4933,
                    "end": 4939,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4934,
                      "end": 4939,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4936,
                        "end": 4939
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4941,
                  "end": 4959,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4944,
                    "end": 4959,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4944,
                      "end": 4951,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4951,
                      "end": 4959,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4952,
                          "end": 4958
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
      "start": 4961,
      "end": 5024,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4965,
          "end": 5023,
          "id": {
            "type": "Identifier",
            "start": 4965,
            "end": 4968,
            "name": "r4a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4971,
            "end": 5023,
            "callee": {
              "type": "MemberExpression",
              "start": 4971,
              "end": 4978,
              "object": {
                "type": "Identifier",
                "start": 4971,
                "end": 4973,
                "name": "r4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4974,
                "end": 4978,
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
                "start": 4979,
                "end": 4992,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 4994,
                "end": 5007,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5009,
                "end": 5022,
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
      "start": 5034,
      "end": 5139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5038,
          "end": 5138,
          "id": {
            "type": "Identifier",
            "start": 5038,
            "end": 5041,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5044,
            "end": 5138,
            "callee": {
              "type": "MemberExpression",
              "start": 5044,
              "end": 5097,
              "object": {
                "type": "CallExpression",
                "start": 5044,
                "end": 5092,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5044,
                  "end": 5051,
                  "object": {
                    "type": "Identifier",
                    "start": 5044,
                    "end": 5046,
                    "name": "r4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5047,
                    "end": 5051,
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
                    "start": 5052,
                    "end": 5061,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5063,
                    "end": 5076,
                    "name": "testFunction4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5078,
                    "end": 5091,
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
                "start": 5093,
                "end": 5097,
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
                "start": 5098,
                "end": 5107,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5109,
                "end": 5122,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5124,
                "end": 5137,
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
      "start": 5146,
      "end": 5170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5150,
          "end": 5169,
          "id": {
            "type": "Identifier",
            "start": 5150,
            "end": 5169,
            "name": "s4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5152,
              "end": 5169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5154,
                "end": 5169,
                "typeName": {
                  "type": "Identifier",
                  "start": 5154,
                  "end": 5161,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5161,
                  "end": 5169,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5162,
                      "end": 5168
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
      "start": 5171,
      "end": 5234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5175,
          "end": 5233,
          "id": {
            "type": "Identifier",
            "start": 5175,
            "end": 5178,
            "name": "s4a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5181,
            "end": 5233,
            "callee": {
              "type": "MemberExpression",
              "start": 5181,
              "end": 5188,
              "object": {
                "type": "Identifier",
                "start": 5181,
                "end": 5183,
                "name": "s4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5184,
                "end": 5188,
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
                "start": 5189,
                "end": 5202,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5204,
                "end": 5217,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5219,
                "end": 5232,
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
      "start": 5244,
      "end": 5310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5248,
          "end": 5309,
          "id": {
            "type": "Identifier",
            "start": 5248,
            "end": 5251,
            "name": "s4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5254,
            "end": 5309,
            "callee": {
              "type": "MemberExpression",
              "start": 5254,
              "end": 5261,
              "object": {
                "type": "Identifier",
                "start": 5254,
                "end": 5256,
                "name": "s4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5257,
                "end": 5261,
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
                "start": 5262,
                "end": 5276,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5278,
                "end": 5292,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5294,
                "end": 5308,
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
      "start": 5321,
      "end": 5385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5325,
          "end": 5384,
          "id": {
            "type": "Identifier",
            "start": 5325,
            "end": 5328,
            "name": "s4c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5331,
            "end": 5384,
            "callee": {
              "type": "MemberExpression",
              "start": 5331,
              "end": 5338,
              "object": {
                "type": "Identifier",
                "start": 5331,
                "end": 5333,
                "name": "s4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5334,
                "end": 5338,
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
                "start": 5339,
                "end": 5353,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5355,
                "end": 5368,
                "name": "testFunction4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5370,
                "end": 5383,
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
      "start": 5395,
      "end": 5502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5399,
          "end": 5501,
          "id": {
            "type": "Identifier",
            "start": 5399,
            "end": 5402,
            "name": "s4d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5405,
            "end": 5501,
            "callee": {
              "type": "MemberExpression",
              "start": 5405,
              "end": 5459,
              "object": {
                "type": "CallExpression",
                "start": 5405,
                "end": 5454,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5405,
                  "end": 5412,
                  "object": {
                    "type": "Identifier",
                    "start": 5405,
                    "end": 5407,
                    "name": "s4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5408,
                    "end": 5412,
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
                    "start": 5413,
                    "end": 5422,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5424,
                    "end": 5438,
                    "name": "testFunction4P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5440,
                    "end": 5453,
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
                "start": 5455,
                "end": 5459,
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
                "start": 5460,
                "end": 5469,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5471,
                "end": 5485,
                "name": "testFunction4P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5487,
                "end": 5500,
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
      "start": 5504,
      "end": 5529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5508,
          "end": 5528,
          "id": {
            "type": "Identifier",
            "start": 5508,
            "end": 5528,
            "name": "r5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5510,
              "end": 5528,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5512,
                "end": 5528,
                "typeName": {
                  "type": "Identifier",
                  "start": 5512,
                  "end": 5520,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5520,
                  "end": 5528,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5521,
                      "end": 5527
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
      "start": 5530,
      "end": 5593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5534,
          "end": 5592,
          "id": {
            "type": "Identifier",
            "start": 5534,
            "end": 5537,
            "name": "r5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5540,
            "end": 5592,
            "callee": {
              "type": "MemberExpression",
              "start": 5540,
              "end": 5547,
              "object": {
                "type": "Identifier",
                "start": 5540,
                "end": 5542,
                "name": "r5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5543,
                "end": 5547,
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
                "start": 5548,
                "end": 5561,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5563,
                "end": 5576,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5578,
                "end": 5591,
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
      "start": 5603,
      "end": 5692,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5607,
          "end": 5691,
          "id": {
            "type": "Identifier",
            "start": 5607,
            "end": 5610,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5613,
            "end": 5691,
            "callee": {
              "type": "MemberExpression",
              "start": 5613,
              "end": 5658,
              "object": {
                "type": "CallExpression",
                "start": 5613,
                "end": 5653,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5613,
                  "end": 5620,
                  "object": {
                    "type": "Identifier",
                    "start": 5613,
                    "end": 5615,
                    "name": "r5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5616,
                    "end": 5620,
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
                    "start": 5621,
                    "end": 5630,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5632,
                    "end": 5641,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5643,
                    "end": 5652,
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
                "start": 5654,
                "end": 5658,
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
                "start": 5659,
                "end": 5668,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5670,
                "end": 5679,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5681,
                "end": 5690,
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
      "start": 5699,
      "end": 5723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5703,
          "end": 5722,
          "id": {
            "type": "Identifier",
            "start": 5703,
            "end": 5722,
            "name": "s5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5705,
              "end": 5722,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5707,
                "end": 5722,
                "typeName": {
                  "type": "Identifier",
                  "start": 5707,
                  "end": 5714,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5714,
                  "end": 5722,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5715,
                      "end": 5721
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
      "start": 5724,
      "end": 5787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5728,
          "end": 5786,
          "id": {
            "type": "Identifier",
            "start": 5728,
            "end": 5731,
            "name": "s5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5734,
            "end": 5786,
            "callee": {
              "type": "MemberExpression",
              "start": 5734,
              "end": 5741,
              "object": {
                "type": "Identifier",
                "start": 5734,
                "end": 5736,
                "name": "s5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5737,
                "end": 5741,
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
                "start": 5742,
                "end": 5755,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5757,
                "end": 5770,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5772,
                "end": 5785,
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
      "start": 5797,
      "end": 5863,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5801,
          "end": 5862,
          "id": {
            "type": "Identifier",
            "start": 5801,
            "end": 5804,
            "name": "s5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5807,
            "end": 5862,
            "callee": {
              "type": "MemberExpression",
              "start": 5807,
              "end": 5814,
              "object": {
                "type": "Identifier",
                "start": 5807,
                "end": 5809,
                "name": "s5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5810,
                "end": 5814,
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
                "start": 5815,
                "end": 5829,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5831,
                "end": 5845,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5847,
                "end": 5861,
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
      "start": 5873,
      "end": 5937,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5877,
          "end": 5936,
          "id": {
            "type": "Identifier",
            "start": 5877,
            "end": 5880,
            "name": "s5c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5883,
            "end": 5936,
            "callee": {
              "type": "MemberExpression",
              "start": 5883,
              "end": 5890,
              "object": {
                "type": "Identifier",
                "start": 5883,
                "end": 5885,
                "name": "s5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5886,
                "end": 5890,
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
                "start": 5891,
                "end": 5905,
                "name": "testFunction5P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5907,
                "end": 5920,
                "name": "testFunction5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 5922,
                "end": 5935,
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
      "start": 5947,
      "end": 6033,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5951,
          "end": 6032,
          "id": {
            "type": "Identifier",
            "start": 5951,
            "end": 5954,
            "name": "s5d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 5957,
            "end": 6032,
            "callee": {
              "type": "MemberExpression",
              "start": 5957,
              "end": 5999,
              "object": {
                "type": "CallExpression",
                "start": 5957,
                "end": 5994,
                "callee": {
                  "type": "MemberExpression",
                  "start": 5957,
                  "end": 5964,
                  "object": {
                    "type": "Identifier",
                    "start": 5957,
                    "end": 5959,
                    "name": "s5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5960,
                    "end": 5964,
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
                    "start": 5965,
                    "end": 5973,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5975,
                    "end": 5983,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 5985,
                    "end": 5993,
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
                "start": 5995,
                "end": 5999,
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
                "start": 6000,
                "end": 6009,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6011,
                "end": 6020,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6022,
                "end": 6031,
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
      "start": 6041,
      "end": 6066,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6045,
          "end": 6065,
          "id": {
            "type": "Identifier",
            "start": 6045,
            "end": 6065,
            "name": "r6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6047,
              "end": 6065,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6049,
                "end": 6065,
                "typeName": {
                  "type": "Identifier",
                  "start": 6049,
                  "end": 6057,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6057,
                  "end": 6065,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6058,
                      "end": 6064
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
      "start": 6067,
      "end": 6130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6071,
          "end": 6129,
          "id": {
            "type": "Identifier",
            "start": 6071,
            "end": 6074,
            "name": "r6a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6077,
            "end": 6129,
            "callee": {
              "type": "MemberExpression",
              "start": 6077,
              "end": 6084,
              "object": {
                "type": "Identifier",
                "start": 6077,
                "end": 6079,
                "name": "r6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6080,
                "end": 6084,
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
                "start": 6085,
                "end": 6098,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6100,
                "end": 6113,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6115,
                "end": 6128,
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
      "start": 6140,
      "end": 6229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6144,
          "end": 6228,
          "id": {
            "type": "Identifier",
            "start": 6144,
            "end": 6147,
            "name": "r6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6150,
            "end": 6228,
            "callee": {
              "type": "MemberExpression",
              "start": 6150,
              "end": 6195,
              "object": {
                "type": "CallExpression",
                "start": 6150,
                "end": 6190,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6150,
                  "end": 6157,
                  "object": {
                    "type": "Identifier",
                    "start": 6150,
                    "end": 6152,
                    "name": "r6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6153,
                    "end": 6157,
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
                    "start": 6158,
                    "end": 6167,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6169,
                    "end": 6178,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6180,
                    "end": 6189,
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
                "start": 6191,
                "end": 6195,
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
                "start": 6196,
                "end": 6205,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6207,
                "end": 6216,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6218,
                "end": 6227,
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
      "start": 6236,
      "end": 6260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6240,
          "end": 6259,
          "id": {
            "type": "Identifier",
            "start": 6240,
            "end": 6259,
            "name": "s6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6242,
              "end": 6259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6244,
                "end": 6259,
                "typeName": {
                  "type": "Identifier",
                  "start": 6244,
                  "end": 6251,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6251,
                  "end": 6259,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6252,
                      "end": 6258
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
      "start": 6261,
      "end": 6324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6265,
          "end": 6323,
          "id": {
            "type": "Identifier",
            "start": 6265,
            "end": 6268,
            "name": "s6a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6271,
            "end": 6323,
            "callee": {
              "type": "MemberExpression",
              "start": 6271,
              "end": 6278,
              "object": {
                "type": "Identifier",
                "start": 6271,
                "end": 6273,
                "name": "s6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6274,
                "end": 6278,
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
                "start": 6279,
                "end": 6292,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6294,
                "end": 6307,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6309,
                "end": 6322,
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
      "start": 6334,
      "end": 6400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6338,
          "end": 6399,
          "id": {
            "type": "Identifier",
            "start": 6338,
            "end": 6341,
            "name": "s6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6344,
            "end": 6399,
            "callee": {
              "type": "MemberExpression",
              "start": 6344,
              "end": 6351,
              "object": {
                "type": "Identifier",
                "start": 6344,
                "end": 6346,
                "name": "s6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6347,
                "end": 6351,
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
                "start": 6352,
                "end": 6366,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6368,
                "end": 6382,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6384,
                "end": 6398,
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
      "start": 6410,
      "end": 6474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6414,
          "end": 6473,
          "id": {
            "type": "Identifier",
            "start": 6414,
            "end": 6417,
            "name": "s6c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6420,
            "end": 6473,
            "callee": {
              "type": "MemberExpression",
              "start": 6420,
              "end": 6427,
              "object": {
                "type": "Identifier",
                "start": 6420,
                "end": 6422,
                "name": "s6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6423,
                "end": 6427,
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
                "start": 6428,
                "end": 6442,
                "name": "testFunction6P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6444,
                "end": 6457,
                "name": "testFunction6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6459,
                "end": 6472,
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
      "start": 6484,
      "end": 6570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6488,
          "end": 6569,
          "id": {
            "type": "Identifier",
            "start": 6488,
            "end": 6491,
            "name": "s6d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6494,
            "end": 6569,
            "callee": {
              "type": "MemberExpression",
              "start": 6494,
              "end": 6536,
              "object": {
                "type": "CallExpression",
                "start": 6494,
                "end": 6531,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6494,
                  "end": 6501,
                  "object": {
                    "type": "Identifier",
                    "start": 6494,
                    "end": 6496,
                    "name": "s6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6497,
                    "end": 6501,
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
                    "start": 6502,
                    "end": 6510,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6512,
                    "end": 6520,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6522,
                    "end": 6530,
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
                "start": 6532,
                "end": 6536,
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
                "start": 6537,
                "end": 6546,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6548,
                "end": 6557,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6559,
                "end": 6568,
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
      "start": 6578,
      "end": 6603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6582,
          "end": 6602,
          "id": {
            "type": "Identifier",
            "start": 6582,
            "end": 6602,
            "name": "r7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6584,
              "end": 6602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6586,
                "end": 6602,
                "typeName": {
                  "type": "Identifier",
                  "start": 6586,
                  "end": 6594,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6594,
                  "end": 6602,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6595,
                      "end": 6601
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
      "start": 6604,
      "end": 6667,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6608,
          "end": 6666,
          "id": {
            "type": "Identifier",
            "start": 6608,
            "end": 6611,
            "name": "r7a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6614,
            "end": 6666,
            "callee": {
              "type": "MemberExpression",
              "start": 6614,
              "end": 6621,
              "object": {
                "type": "Identifier",
                "start": 6614,
                "end": 6616,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6617,
                "end": 6621,
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
                "start": 6622,
                "end": 6635,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6637,
                "end": 6650,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6652,
                "end": 6665,
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
      "start": 6677,
      "end": 6766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6681,
          "end": 6765,
          "id": {
            "type": "Identifier",
            "start": 6681,
            "end": 6684,
            "name": "r7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6687,
            "end": 6765,
            "callee": {
              "type": "MemberExpression",
              "start": 6687,
              "end": 6732,
              "object": {
                "type": "CallExpression",
                "start": 6687,
                "end": 6727,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6687,
                  "end": 6694,
                  "object": {
                    "type": "Identifier",
                    "start": 6687,
                    "end": 6689,
                    "name": "r7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6690,
                    "end": 6694,
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
                    "start": 6695,
                    "end": 6704,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6706,
                    "end": 6715,
                    "name": "sIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 6717,
                    "end": 6726,
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
                "start": 6728,
                "end": 6732,
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
                "start": 6733,
                "end": 6742,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6744,
                "end": 6753,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6755,
                "end": 6764,
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
      "start": 6773,
      "end": 6797,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6777,
          "end": 6796,
          "id": {
            "type": "Identifier",
            "start": 6777,
            "end": 6796,
            "name": "s7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6779,
              "end": 6796,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6781,
                "end": 6796,
                "typeName": {
                  "type": "Identifier",
                  "start": 6781,
                  "end": 6788,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6788,
                  "end": 6796,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6789,
                      "end": 6795
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
      "start": 6798,
      "end": 6861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6802,
          "end": 6860,
          "id": {
            "type": "Identifier",
            "start": 6802,
            "end": 6805,
            "name": "s7a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6808,
            "end": 6860,
            "callee": {
              "type": "MemberExpression",
              "start": 6808,
              "end": 6815,
              "object": {
                "type": "Identifier",
                "start": 6808,
                "end": 6810,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6811,
                "end": 6815,
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
                "start": 6816,
                "end": 6829,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6831,
                "end": 6844,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6846,
                "end": 6859,
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
      "start": 6871,
      "end": 6937,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6875,
          "end": 6936,
          "id": {
            "type": "Identifier",
            "start": 6875,
            "end": 6878,
            "name": "s7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6881,
            "end": 6936,
            "callee": {
              "type": "MemberExpression",
              "start": 6881,
              "end": 6888,
              "object": {
                "type": "Identifier",
                "start": 6881,
                "end": 6883,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6884,
                "end": 6888,
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
                "start": 6889,
                "end": 6903,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6905,
                "end": 6919,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6921,
                "end": 6935,
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
      "start": 6947,
      "end": 7011,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6951,
          "end": 7010,
          "id": {
            "type": "Identifier",
            "start": 6951,
            "end": 6954,
            "name": "s7c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 6957,
            "end": 7010,
            "callee": {
              "type": "MemberExpression",
              "start": 6957,
              "end": 6964,
              "object": {
                "type": "Identifier",
                "start": 6957,
                "end": 6959,
                "name": "r7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6960,
                "end": 6964,
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
                "start": 6965,
                "end": 6979,
                "name": "testFunction7P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6981,
                "end": 6994,
                "name": "testFunction7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 6996,
                "end": 7009,
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
      "start": 7021,
      "end": 7104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7025,
          "end": 7103,
          "id": {
            "type": "Identifier",
            "start": 7025,
            "end": 7028,
            "name": "s7d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7031,
            "end": 7103,
            "callee": {
              "type": "MemberExpression",
              "start": 7031,
              "end": 7073,
              "object": {
                "type": "CallExpression",
                "start": 7031,
                "end": 7068,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7031,
                  "end": 7038,
                  "object": {
                    "type": "Identifier",
                    "start": 7031,
                    "end": 7033,
                    "name": "r7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7034,
                    "end": 7038,
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
                    "start": 7039,
                    "end": 7047,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7049,
                    "end": 7057,
                    "name": "sPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7059,
                    "end": 7067,
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
                "start": 7069,
                "end": 7073,
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
                "start": 7074,
                "end": 7082,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7084,
                "end": 7092,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7094,
                "end": 7102,
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
      "start": 7113,
      "end": 7138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7117,
          "end": 7137,
          "id": {
            "type": "Identifier",
            "start": 7117,
            "end": 7137,
            "name": "r8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7119,
              "end": 7137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7121,
                "end": 7137,
                "typeName": {
                  "type": "Identifier",
                  "start": 7121,
                  "end": 7129,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7129,
                  "end": 7137,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7130,
                      "end": 7136
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
      "start": 7139,
      "end": 7183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7143,
          "end": 7182,
          "id": {
            "type": "Identifier",
            "start": 7143,
            "end": 7182,
            "name": "nIPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7152,
              "end": 7182,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7154,
                "end": 7182,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7155,
                    "end": 7161,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7156,
                      "end": 7161,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 7158,
                        "end": 7161
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7163,
                  "end": 7182,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7166,
                    "end": 7182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7166,
                      "end": 7174,
                      "name": "IPromise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7174,
                      "end": 7182,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7175,
                          "end": 7181
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
      "start": 7184,
      "end": 7226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7188,
          "end": 7225,
          "id": {
            "type": "Identifier",
            "start": 7188,
            "end": 7225,
            "name": "nPromise",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7196,
              "end": 7225,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7198,
                "end": 7225,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 7199,
                    "end": 7205,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7200,
                      "end": 7205,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 7202,
                        "end": 7205
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7207,
                  "end": 7225,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 7210,
                    "end": 7225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 7210,
                      "end": 7217,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 7217,
                      "end": 7225,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7218,
                          "end": 7224
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
      "start": 7227,
      "end": 7290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7231,
          "end": 7289,
          "id": {
            "type": "Identifier",
            "start": 7231,
            "end": 7234,
            "name": "r8a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7237,
            "end": 7289,
            "callee": {
              "type": "MemberExpression",
              "start": 7237,
              "end": 7244,
              "object": {
                "type": "Identifier",
                "start": 7237,
                "end": 7239,
                "name": "r8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7240,
                "end": 7244,
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
                "start": 7245,
                "end": 7258,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7260,
                "end": 7273,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7275,
                "end": 7288,
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
      "start": 7300,
      "end": 7389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7304,
          "end": 7388,
          "id": {
            "type": "Identifier",
            "start": 7304,
            "end": 7307,
            "name": "r8b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7310,
            "end": 7388,
            "callee": {
              "type": "MemberExpression",
              "start": 7310,
              "end": 7355,
              "object": {
                "type": "CallExpression",
                "start": 7310,
                "end": 7350,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7310,
                  "end": 7317,
                  "object": {
                    "type": "Identifier",
                    "start": 7310,
                    "end": 7312,
                    "name": "r8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7313,
                    "end": 7317,
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
                    "start": 7318,
                    "end": 7327,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7329,
                    "end": 7338,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7340,
                    "end": 7349,
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
                "start": 7351,
                "end": 7355,
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
                "start": 7356,
                "end": 7365,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7367,
                "end": 7376,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7378,
                "end": 7387,
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
      "start": 7396,
      "end": 7420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7400,
          "end": 7419,
          "id": {
            "type": "Identifier",
            "start": 7400,
            "end": 7419,
            "name": "s8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7402,
              "end": 7419,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7404,
                "end": 7419,
                "typeName": {
                  "type": "Identifier",
                  "start": 7404,
                  "end": 7411,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7411,
                  "end": 7419,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7412,
                      "end": 7418
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
      "start": 7421,
      "end": 7484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7425,
          "end": 7483,
          "id": {
            "type": "Identifier",
            "start": 7425,
            "end": 7428,
            "name": "s8a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7431,
            "end": 7483,
            "callee": {
              "type": "MemberExpression",
              "start": 7431,
              "end": 7438,
              "object": {
                "type": "Identifier",
                "start": 7431,
                "end": 7433,
                "name": "s8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7434,
                "end": 7438,
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
                "start": 7439,
                "end": 7452,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7454,
                "end": 7467,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7469,
                "end": 7482,
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
      "start": 7494,
      "end": 7560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7498,
          "end": 7559,
          "id": {
            "type": "Identifier",
            "start": 7498,
            "end": 7501,
            "name": "s8b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7504,
            "end": 7559,
            "callee": {
              "type": "MemberExpression",
              "start": 7504,
              "end": 7511,
              "object": {
                "type": "Identifier",
                "start": 7504,
                "end": 7506,
                "name": "s8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7507,
                "end": 7511,
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
                "start": 7512,
                "end": 7526,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7528,
                "end": 7542,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7544,
                "end": 7558,
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
      "start": 7570,
      "end": 7634,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7574,
          "end": 7633,
          "id": {
            "type": "Identifier",
            "start": 7574,
            "end": 7577,
            "name": "s8c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7580,
            "end": 7633,
            "callee": {
              "type": "MemberExpression",
              "start": 7580,
              "end": 7587,
              "object": {
                "type": "Identifier",
                "start": 7580,
                "end": 7582,
                "name": "s8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7583,
                "end": 7587,
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
                "start": 7588,
                "end": 7602,
                "name": "testFunction8P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7604,
                "end": 7617,
                "name": "testFunction8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7619,
                "end": 7632,
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
      "start": 7644,
      "end": 7733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7648,
          "end": 7732,
          "id": {
            "type": "Identifier",
            "start": 7648,
            "end": 7651,
            "name": "s8d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7654,
            "end": 7732,
            "callee": {
              "type": "MemberExpression",
              "start": 7654,
              "end": 7699,
              "object": {
                "type": "CallExpression",
                "start": 7654,
                "end": 7694,
                "callee": {
                  "type": "MemberExpression",
                  "start": 7654,
                  "end": 7661,
                  "object": {
                    "type": "Identifier",
                    "start": 7654,
                    "end": 7656,
                    "name": "s8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 7657,
                    "end": 7661,
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
                    "start": 7662,
                    "end": 7671,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7673,
                    "end": 7682,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 7684,
                    "end": 7693,
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
                "start": 7695,
                "end": 7699,
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
                "start": 7700,
                "end": 7709,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7711,
                "end": 7720,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7722,
                "end": 7731,
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
      "start": 7741,
      "end": 7766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7745,
          "end": 7765,
          "id": {
            "type": "Identifier",
            "start": 7745,
            "end": 7765,
            "name": "r9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7747,
              "end": 7765,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7749,
                "end": 7765,
                "typeName": {
                  "type": "Identifier",
                  "start": 7749,
                  "end": 7757,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 7757,
                  "end": 7765,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7758,
                      "end": 7764
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
      "start": 7767,
      "end": 7830,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7771,
          "end": 7829,
          "id": {
            "type": "Identifier",
            "start": 7771,
            "end": 7774,
            "name": "r9a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7777,
            "end": 7829,
            "callee": {
              "type": "MemberExpression",
              "start": 7777,
              "end": 7784,
              "object": {
                "type": "Identifier",
                "start": 7777,
                "end": 7779,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7780,
                "end": 7784,
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
                "start": 7785,
                "end": 7798,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7800,
                "end": 7813,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7815,
                "end": 7828,
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
      "start": 7840,
      "end": 7891,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7844,
          "end": 7890,
          "id": {
            "type": "Identifier",
            "start": 7844,
            "end": 7847,
            "name": "r9b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7850,
            "end": 7890,
            "callee": {
              "type": "MemberExpression",
              "start": 7850,
              "end": 7857,
              "object": {
                "type": "Identifier",
                "start": 7850,
                "end": 7852,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7853,
                "end": 7857,
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
                "start": 7858,
                "end": 7867,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7869,
                "end": 7878,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7880,
                "end": 7889,
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
      "start": 7898,
      "end": 7949,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7902,
          "end": 7948,
          "id": {
            "type": "Identifier",
            "start": 7902,
            "end": 7905,
            "name": "r9c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7908,
            "end": 7948,
            "callee": {
              "type": "MemberExpression",
              "start": 7908,
              "end": 7915,
              "object": {
                "type": "Identifier",
                "start": 7908,
                "end": 7910,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7911,
                "end": 7915,
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
                "start": 7916,
                "end": 7925,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7927,
                "end": 7936,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7938,
                "end": 7947,
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
      "start": 7956,
      "end": 8010,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7960,
          "end": 8009,
          "id": {
            "type": "Identifier",
            "start": 7960,
            "end": 7963,
            "name": "r9d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 7966,
            "end": 8009,
            "callee": {
              "type": "MemberExpression",
              "start": 7966,
              "end": 7973,
              "object": {
                "type": "Identifier",
                "start": 7966,
                "end": 7968,
                "name": "r9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 7969,
                "end": 7973,
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
                "start": 7974,
                "end": 7986,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7988,
                "end": 7997,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 7999,
                "end": 8008,
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
      "start": 8017,
      "end": 8109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8021,
          "end": 8108,
          "id": {
            "type": "Identifier",
            "start": 8021,
            "end": 8024,
            "name": "r9e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8027,
            "end": 8108,
            "callee": {
              "type": "MemberExpression",
              "start": 8027,
              "end": 8075,
              "object": {
                "type": "CallExpression",
                "start": 8027,
                "end": 8070,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8027,
                  "end": 8034,
                  "object": {
                    "type": "Identifier",
                    "start": 8027,
                    "end": 8029,
                    "name": "r9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8030,
                    "end": 8034,
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
                    "start": 8035,
                    "end": 8047,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8049,
                    "end": 8058,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8060,
                    "end": 8069,
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
                "start": 8071,
                "end": 8075,
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
                "start": 8076,
                "end": 8085,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8087,
                "end": 8096,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8098,
                "end": 8107,
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
      "start": 8116,
      "end": 8140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8120,
          "end": 8139,
          "id": {
            "type": "Identifier",
            "start": 8120,
            "end": 8139,
            "name": "s9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8122,
              "end": 8139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8124,
                "end": 8139,
                "typeName": {
                  "type": "Identifier",
                  "start": 8124,
                  "end": 8131,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 8131,
                  "end": 8139,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 8132,
                      "end": 8138
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
      "start": 8141,
      "end": 8204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8145,
          "end": 8203,
          "id": {
            "type": "Identifier",
            "start": 8145,
            "end": 8148,
            "name": "s9a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8151,
            "end": 8203,
            "callee": {
              "type": "MemberExpression",
              "start": 8151,
              "end": 8158,
              "object": {
                "type": "Identifier",
                "start": 8151,
                "end": 8153,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8154,
                "end": 8158,
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
                "start": 8159,
                "end": 8172,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8174,
                "end": 8187,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8189,
                "end": 8202,
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
      "start": 8214,
      "end": 8280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8218,
          "end": 8279,
          "id": {
            "type": "Identifier",
            "start": 8218,
            "end": 8221,
            "name": "s9b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8224,
            "end": 8279,
            "callee": {
              "type": "MemberExpression",
              "start": 8224,
              "end": 8231,
              "object": {
                "type": "Identifier",
                "start": 8224,
                "end": 8226,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8227,
                "end": 8231,
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
                "start": 8232,
                "end": 8246,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8248,
                "end": 8262,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8264,
                "end": 8278,
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
      "start": 8290,
      "end": 8354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8294,
          "end": 8353,
          "id": {
            "type": "Identifier",
            "start": 8294,
            "end": 8297,
            "name": "s9c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8300,
            "end": 8353,
            "callee": {
              "type": "MemberExpression",
              "start": 8300,
              "end": 8307,
              "object": {
                "type": "Identifier",
                "start": 8300,
                "end": 8302,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8303,
                "end": 8307,
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
                "start": 8308,
                "end": 8322,
                "name": "testFunction9P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8324,
                "end": 8337,
                "name": "testFunction9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8339,
                "end": 8352,
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
      "start": 8364,
      "end": 8412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8368,
          "end": 8411,
          "id": {
            "type": "Identifier",
            "start": 8368,
            "end": 8371,
            "name": "s9d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8374,
            "end": 8411,
            "callee": {
              "type": "MemberExpression",
              "start": 8374,
              "end": 8381,
              "object": {
                "type": "Identifier",
                "start": 8374,
                "end": 8376,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8377,
                "end": 8381,
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
                "start": 8382,
                "end": 8390,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8392,
                "end": 8400,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8402,
                "end": 8410,
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
      "start": 8419,
      "end": 8467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8423,
          "end": 8466,
          "id": {
            "type": "Identifier",
            "start": 8423,
            "end": 8426,
            "name": "s9e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8429,
            "end": 8466,
            "callee": {
              "type": "MemberExpression",
              "start": 8429,
              "end": 8436,
              "object": {
                "type": "Identifier",
                "start": 8429,
                "end": 8431,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8432,
                "end": 8436,
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
                "start": 8437,
                "end": 8445,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8447,
                "end": 8455,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8457,
                "end": 8465,
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
      "start": 8474,
      "end": 8528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8478,
          "end": 8527,
          "id": {
            "type": "Identifier",
            "start": 8478,
            "end": 8481,
            "name": "s9f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8484,
            "end": 8527,
            "callee": {
              "type": "MemberExpression",
              "start": 8484,
              "end": 8491,
              "object": {
                "type": "Identifier",
                "start": 8484,
                "end": 8486,
                "name": "s9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8487,
                "end": 8491,
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
                "start": 8492,
                "end": 8504,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8506,
                "end": 8515,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8517,
                "end": 8526,
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
      "start": 8538,
      "end": 8630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8542,
          "end": 8629,
          "id": {
            "type": "Identifier",
            "start": 8542,
            "end": 8545,
            "name": "s9g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8548,
            "end": 8629,
            "callee": {
              "type": "MemberExpression",
              "start": 8548,
              "end": 8596,
              "object": {
                "type": "CallExpression",
                "start": 8548,
                "end": 8591,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8548,
                  "end": 8555,
                  "object": {
                    "type": "Identifier",
                    "start": 8548,
                    "end": 8550,
                    "name": "s9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8551,
                    "end": 8555,
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
                    "start": 8556,
                    "end": 8568,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8570,
                    "end": 8579,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8581,
                    "end": 8590,
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
                "start": 8592,
                "end": 8596,
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
                "start": 8597,
                "end": 8606,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8608,
                "end": 8617,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8619,
                "end": 8628,
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
      "start": 8638,
      "end": 8671,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8642,
          "end": 8670,
          "id": {
            "type": "Identifier",
            "start": 8642,
            "end": 8645,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8648,
            "end": 8670,
            "callee": {
              "type": "Identifier",
              "start": 8648,
              "end": 8662,
              "name": "testFunction10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 8663,
                "end": 8669,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8663,
                    "end": 8664,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 8668,
                  "end": 8669,
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
      "start": 8672,
      "end": 8740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8676,
          "end": 8739,
          "id": {
            "type": "Identifier",
            "start": 8676,
            "end": 8680,
            "name": "r10a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8683,
            "end": 8739,
            "callee": {
              "type": "MemberExpression",
              "start": 8683,
              "end": 8691,
              "object": {
                "type": "Identifier",
                "start": 8683,
                "end": 8686,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8687,
                "end": 8691,
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
                "start": 8692,
                "end": 8706,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8708,
                "end": 8722,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8724,
                "end": 8738,
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
      "start": 8747,
      "end": 8800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8751,
          "end": 8799,
          "id": {
            "type": "Identifier",
            "start": 8751,
            "end": 8755,
            "name": "r10b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8758,
            "end": 8799,
            "callee": {
              "type": "MemberExpression",
              "start": 8758,
              "end": 8766,
              "object": {
                "type": "Identifier",
                "start": 8758,
                "end": 8761,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8762,
                "end": 8766,
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
                "start": 8767,
                "end": 8776,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8778,
                "end": 8787,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8789,
                "end": 8798,
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
      "start": 8807,
      "end": 8860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8811,
          "end": 8859,
          "id": {
            "type": "Identifier",
            "start": 8811,
            "end": 8815,
            "name": "r10c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8818,
            "end": 8859,
            "callee": {
              "type": "MemberExpression",
              "start": 8818,
              "end": 8826,
              "object": {
                "type": "Identifier",
                "start": 8818,
                "end": 8821,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8822,
                "end": 8826,
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
                "start": 8827,
                "end": 8836,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8838,
                "end": 8847,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8849,
                "end": 8858,
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
      "start": 8867,
      "end": 8923,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8871,
          "end": 8922,
          "id": {
            "type": "Identifier",
            "start": 8871,
            "end": 8875,
            "name": "r10d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8878,
            "end": 8922,
            "callee": {
              "type": "MemberExpression",
              "start": 8878,
              "end": 8886,
              "object": {
                "type": "Identifier",
                "start": 8878,
                "end": 8881,
                "name": "r10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 8882,
                "end": 8886,
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
                "start": 8887,
                "end": 8899,
                "name": "testFunction",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8901,
                "end": 8910,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8912,
                "end": 8921,
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
      "start": 8930,
      "end": 9024,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8934,
          "end": 9023,
          "id": {
            "type": "Identifier",
            "start": 8934,
            "end": 8938,
            "name": "r10e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8941,
            "end": 9023,
            "callee": {
              "type": "MemberExpression",
              "start": 8941,
              "end": 8990,
              "object": {
                "type": "CallExpression",
                "start": 8941,
                "end": 8985,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8941,
                  "end": 8949,
                  "object": {
                    "type": "Identifier",
                    "start": 8941,
                    "end": 8944,
                    "name": "r10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 8945,
                    "end": 8949,
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
                    "start": 8950,
                    "end": 8962,
                    "name": "testFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8964,
                    "end": 8973,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 8975,
                    "end": 8984,
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
                "start": 8986,
                "end": 8990,
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
                "start": 8991,
                "end": 9000,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9002,
                "end": 9011,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9013,
                "end": 9022,
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
      "start": 9031,
      "end": 9065,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9035,
          "end": 9064,
          "id": {
            "type": "Identifier",
            "start": 9035,
            "end": 9038,
            "name": "s10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9041,
            "end": 9064,
            "callee": {
              "type": "Identifier",
              "start": 9041,
              "end": 9056,
              "name": "testFunction10P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9057,
                "end": 9063,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9057,
                    "end": 9058,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 9062,
                  "end": 9063,
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
      "start": 9066,
      "end": 9134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9070,
          "end": 9133,
          "id": {
            "type": "Identifier",
            "start": 9070,
            "end": 9074,
            "name": "s10a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9077,
            "end": 9133,
            "callee": {
              "type": "MemberExpression",
              "start": 9077,
              "end": 9085,
              "object": {
                "type": "Identifier",
                "start": 9077,
                "end": 9080,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9081,
                "end": 9085,
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
                "start": 9086,
                "end": 9100,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9102,
                "end": 9116,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9118,
                "end": 9132,
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
      "start": 9141,
      "end": 9212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9145,
          "end": 9211,
          "id": {
            "type": "Identifier",
            "start": 9145,
            "end": 9149,
            "name": "s10b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9152,
            "end": 9211,
            "callee": {
              "type": "MemberExpression",
              "start": 9152,
              "end": 9160,
              "object": {
                "type": "Identifier",
                "start": 9152,
                "end": 9155,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9156,
                "end": 9160,
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
                "start": 9161,
                "end": 9176,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9178,
                "end": 9193,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9195,
                "end": 9210,
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
      "start": 9219,
      "end": 9288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9223,
          "end": 9287,
          "id": {
            "type": "Identifier",
            "start": 9223,
            "end": 9227,
            "name": "s10c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9230,
            "end": 9287,
            "callee": {
              "type": "MemberExpression",
              "start": 9230,
              "end": 9238,
              "object": {
                "type": "Identifier",
                "start": 9230,
                "end": 9233,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9234,
                "end": 9238,
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
                "start": 9239,
                "end": 9254,
                "name": "testFunction10P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9256,
                "end": 9270,
                "name": "testFunction10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9272,
                "end": 9286,
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
      "start": 9295,
      "end": 9345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9299,
          "end": 9344,
          "id": {
            "type": "Identifier",
            "start": 9299,
            "end": 9303,
            "name": "s10d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9306,
            "end": 9344,
            "callee": {
              "type": "MemberExpression",
              "start": 9306,
              "end": 9314,
              "object": {
                "type": "Identifier",
                "start": 9306,
                "end": 9309,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9310,
                "end": 9314,
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
                "start": 9315,
                "end": 9323,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9325,
                "end": 9333,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9335,
                "end": 9343,
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
      "start": 9352,
      "end": 9404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9356,
          "end": 9403,
          "id": {
            "type": "Identifier",
            "start": 9356,
            "end": 9360,
            "name": "s10e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9363,
            "end": 9403,
            "callee": {
              "type": "MemberExpression",
              "start": 9363,
              "end": 9371,
              "object": {
                "type": "Identifier",
                "start": 9363,
                "end": 9366,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9367,
                "end": 9371,
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
                "start": 9372,
                "end": 9381,
                "name": "nIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9383,
                "end": 9391,
                "name": "nPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9393,
                "end": 9402,
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
      "start": 9411,
      "end": 9468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9415,
          "end": 9467,
          "id": {
            "type": "Identifier",
            "start": 9415,
            "end": 9419,
            "name": "s10f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9422,
            "end": 9467,
            "callee": {
              "type": "MemberExpression",
              "start": 9422,
              "end": 9430,
              "object": {
                "type": "Identifier",
                "start": 9422,
                "end": 9425,
                "name": "s10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9426,
                "end": 9430,
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
                "start": 9431,
                "end": 9444,
                "name": "testFunctionP",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9446,
                "end": 9455,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9457,
                "end": 9466,
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
      "start": 9478,
      "end": 9572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9482,
          "end": 9571,
          "id": {
            "type": "Identifier",
            "start": 9482,
            "end": 9486,
            "name": "s10g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9489,
            "end": 9571,
            "callee": {
              "type": "MemberExpression",
              "start": 9489,
              "end": 9539,
              "object": {
                "type": "CallExpression",
                "start": 9489,
                "end": 9534,
                "callee": {
                  "type": "MemberExpression",
                  "start": 9489,
                  "end": 9497,
                  "object": {
                    "type": "Identifier",
                    "start": 9489,
                    "end": 9492,
                    "name": "s10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9493,
                    "end": 9497,
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
                    "start": 9498,
                    "end": 9511,
                    "name": "testFunctionP",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 9513,
                    "end": 9522,
                    "name": "nIPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 9524,
                    "end": 9533,
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
                "start": 9535,
                "end": 9539,
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
                "start": 9540,
                "end": 9548,
                "name": "sPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9550,
                "end": 9559,
                "name": "sIPromise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9561,
                "end": 9570,
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
      "start": 9580,
      "end": 9606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9584,
          "end": 9605,
          "id": {
            "type": "Identifier",
            "start": 9584,
            "end": 9605,
            "name": "r11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9587,
              "end": 9605,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9589,
                "end": 9605,
                "typeName": {
                  "type": "Identifier",
                  "start": 9589,
                  "end": 9597,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9597,
                  "end": 9605,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9598,
                      "end": 9604
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
      "start": 9607,
      "end": 9675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9611,
          "end": 9674,
          "id": {
            "type": "Identifier",
            "start": 9611,
            "end": 9615,
            "name": "r11a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9618,
            "end": 9674,
            "callee": {
              "type": "MemberExpression",
              "start": 9618,
              "end": 9626,
              "object": {
                "type": "Identifier",
                "start": 9618,
                "end": 9621,
                "name": "r11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9622,
                "end": 9626,
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
                "start": 9627,
                "end": 9641,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9643,
                "end": 9657,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9659,
                "end": 9673,
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
      "start": 9685,
      "end": 9710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9689,
          "end": 9709,
          "id": {
            "type": "Identifier",
            "start": 9689,
            "end": 9709,
            "name": "s11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9692,
              "end": 9709,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9694,
                "end": 9709,
                "typeName": {
                  "type": "Identifier",
                  "start": 9694,
                  "end": 9701,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 9701,
                  "end": 9709,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9702,
                      "end": 9708
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
      "start": 9711,
      "end": 9779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9715,
          "end": 9778,
          "id": {
            "type": "Identifier",
            "start": 9715,
            "end": 9719,
            "name": "s11a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9722,
            "end": 9778,
            "callee": {
              "type": "MemberExpression",
              "start": 9722,
              "end": 9730,
              "object": {
                "type": "Identifier",
                "start": 9722,
                "end": 9725,
                "name": "s11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9726,
                "end": 9730,
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
                "start": 9731,
                "end": 9745,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9747,
                "end": 9761,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9763,
                "end": 9777,
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
      "start": 9786,
      "end": 9857,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9790,
          "end": 9856,
          "id": {
            "type": "Identifier",
            "start": 9790,
            "end": 9794,
            "name": "s11b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9797,
            "end": 9856,
            "callee": {
              "type": "MemberExpression",
              "start": 9797,
              "end": 9805,
              "object": {
                "type": "Identifier",
                "start": 9797,
                "end": 9800,
                "name": "s11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9801,
                "end": 9805,
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
                "start": 9806,
                "end": 9821,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9823,
                "end": 9838,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9840,
                "end": 9855,
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
      "start": 9867,
      "end": 9936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9871,
          "end": 9935,
          "id": {
            "type": "Identifier",
            "start": 9871,
            "end": 9875,
            "name": "s11c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9878,
            "end": 9935,
            "callee": {
              "type": "MemberExpression",
              "start": 9878,
              "end": 9886,
              "object": {
                "type": "Identifier",
                "start": 9878,
                "end": 9881,
                "name": "s11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9882,
                "end": 9886,
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
                "start": 9887,
                "end": 9902,
                "name": "testFunction11P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9904,
                "end": 9918,
                "name": "testFunction11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 9920,
                "end": 9934,
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
      "start": 9947,
      "end": 9980,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9951,
          "end": 9979,
          "id": {
            "type": "Identifier",
            "start": 9951,
            "end": 9954,
            "name": "r12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9957,
            "end": 9979,
            "callee": {
              "type": "Identifier",
              "start": 9957,
              "end": 9971,
              "name": "testFunction12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 9972,
                "end": 9978,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9972,
                    "end": 9973,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 9977,
                  "end": 9978,
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
      "start": 9981,
      "end": 10049,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9985,
          "end": 10048,
          "id": {
            "type": "Identifier",
            "start": 9985,
            "end": 9989,
            "name": "r12a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 9992,
            "end": 10048,
            "callee": {
              "type": "MemberExpression",
              "start": 9992,
              "end": 10000,
              "object": {
                "type": "Identifier",
                "start": 9992,
                "end": 9995,
                "name": "r12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 9996,
                "end": 10000,
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
                "start": 10001,
                "end": 10015,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10017,
                "end": 10031,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10033,
                "end": 10047,
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
      "start": 10056,
      "end": 10089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 10060,
          "end": 10088,
          "id": {
            "type": "Identifier",
            "start": 10060,
            "end": 10063,
            "name": "s12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10066,
            "end": 10088,
            "callee": {
              "type": "Identifier",
              "start": 10066,
              "end": 10080,
              "name": "testFunction12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 10081,
                "end": 10087,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 10081,
                    "end": 10082,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 10086,
                  "end": 10087,
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
      "start": 10090,
      "end": 10158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 10094,
          "end": 10157,
          "id": {
            "type": "Identifier",
            "start": 10094,
            "end": 10098,
            "name": "s12a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10101,
            "end": 10157,
            "callee": {
              "type": "MemberExpression",
              "start": 10101,
              "end": 10109,
              "object": {
                "type": "Identifier",
                "start": 10101,
                "end": 10104,
                "name": "s12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 10105,
                "end": 10109,
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
                "start": 10110,
                "end": 10124,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10126,
                "end": 10140,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10142,
                "end": 10156,
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
      "start": 10165,
      "end": 10236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 10169,
          "end": 10235,
          "id": {
            "type": "Identifier",
            "start": 10169,
            "end": 10173,
            "name": "s12b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10176,
            "end": 10235,
            "callee": {
              "type": "MemberExpression",
              "start": 10176,
              "end": 10184,
              "object": {
                "type": "Identifier",
                "start": 10176,
                "end": 10179,
                "name": "s12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 10180,
                "end": 10184,
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
                "start": 10185,
                "end": 10200,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10202,
                "end": 10217,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10219,
                "end": 10234,
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
      "start": 10243,
      "end": 10312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 10247,
          "end": 10311,
          "id": {
            "type": "Identifier",
            "start": 10247,
            "end": 10251,
            "name": "s12c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 10254,
            "end": 10311,
            "callee": {
              "type": "MemberExpression",
              "start": 10254,
              "end": 10262,
              "object": {
                "type": "Identifier",
                "start": 10254,
                "end": 10257,
                "name": "s12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 10258,
                "end": 10262,
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
                "start": 10263,
                "end": 10278,
                "name": "testFunction12P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10280,
                "end": 10294,
                "name": "testFunction12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 10296,
                "end": 10310,
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
