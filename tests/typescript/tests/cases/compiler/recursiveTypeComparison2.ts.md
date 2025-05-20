__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1151,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 1102,
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 1102,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 84,
            "end": 110,
            "body": {
              "type": "TSInterfaceBody",
              "start": 103,
              "end": 110,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 99,
              "end": 102,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 100,
                  "end": 101,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 115,
            "end": 158,
            "body": {
              "type": "TSInterfaceBody",
              "start": 151,
              "end": 158,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 142,
                "end": 150,
                "expression": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 147,
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 147,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 148,
                      "end": 149,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 125,
              "end": 130,
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 130,
              "end": 133,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 131,
                  "end": 132,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 163,
            "end": 899,
            "body": {
              "type": "TSInterfaceBody",
              "start": 187,
              "end": 899,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 197,
                  "end": 268,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 200,
                    "decorators": [],
                    "name": "zip",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 207,
                      "end": 228,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 212,
                        "end": 228,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 214,
                          "end": 228,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 225,
                            "end": 228,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 226,
                                "end": 227,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 226,
                                  "end": 227,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 214,
                            "end": 225,
                            "decorators": [],
                            "name": "EventStream",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 230,
                      "end": 250,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 231,
                        "end": 250,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 233,
                          "end": 250,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 234,
                              "end": 238,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 235,
                                "end": 238,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 237,
                                  "end": 238,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 237,
                                    "end": 238,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 240,
                              "end": 244,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 241,
                                "end": 244,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 243,
                                  "end": 244,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 243,
                                    "end": 244,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 246,
                            "end": 250,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 249,
                              "end": 250,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 250,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 267,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 264,
                        "end": 267,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 265,
                            "end": 266,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 265,
                              "end": 266,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 264,
                        "decorators": [],
                        "name": "EventStream",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 200,
                    "end": 206,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 201,
                        "end": 202,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 202,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 204,
                        "end": 205,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 205,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 277,
                  "end": 333,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 290,
                    "decorators": [],
                    "name": "slidingWindow",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 291,
                      "end": 302,
                      "decorators": [],
                      "name": "max",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 294,
                        "end": 302,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 296,
                          "end": 302
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 304,
                      "end": 316,
                      "decorators": [],
                      "name": "min",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 308,
                        "end": 316,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 310,
                          "end": 316
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 317,
                    "end": 332,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 319,
                      "end": 332,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 327,
                        "end": 332,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 328,
                            "end": 331,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 328,
                              "end": 329,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 328,
                                "end": 329,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 327,
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 342,
                  "end": 363,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 345,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 347,
                    "end": 362,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 349,
                      "end": 362,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 359,
                        "end": 362,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 360,
                            "end": 361,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 360,
                              "end": 361,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 359,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 372,
                  "end": 443,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 379,
                    "decorators": [],
                    "name": "combine",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 386,
                      "end": 406,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 391,
                        "end": 406,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 393,
                          "end": 406,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 403,
                            "end": 406,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 404,
                                "end": 405,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 404,
                                  "end": 405,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 393,
                            "end": 403,
                            "decorators": [],
                            "name": "Observable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 408,
                      "end": 428,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 409,
                        "end": 428,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 411,
                          "end": 428,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 412,
                              "end": 416,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 413,
                                "end": 416,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 415,
                                  "end": 416,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 416,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 418,
                              "end": 422,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 419,
                                "end": 422,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 421,
                                  "end": 422,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 421,
                                    "end": 422,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 424,
                            "end": 428,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 427,
                              "end": 428,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 427,
                                "end": 428,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 442,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 431,
                      "end": 442,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 439,
                        "end": 442,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 440,
                            "end": 441,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 440,
                              "end": 441,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 439,
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 379,
                    "end": 385,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 380,
                        "end": 381,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 381,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 383,
                        "end": 384,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 384,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 452,
                  "end": 557,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 468,
                    "decorators": [],
                    "name": "withStateMachine",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 475,
                      "end": 487,
                      "decorators": [],
                      "name": "initState",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 484,
                        "end": 487,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 486,
                          "end": 487,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 486,
                            "end": 487,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 489,
                      "end": 539,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 490,
                        "end": 539,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 492,
                          "end": 539,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 493,
                              "end": 501,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 498,
                                "end": 501,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 500,
                                  "end": 501,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 500,
                                    "end": 501,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 503,
                              "end": 518,
                              "decorators": [],
                              "name": "event",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 508,
                                "end": 518,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 510,
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
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 516,
                                          "end": 517,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 510,
                                    "end": 515,
                                    "decorators": [],
                                    "name": "Event",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 520,
                            "end": 539,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 523,
                              "end": 539,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 533,
                                "end": 539,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 534,
                                    "end": 535,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 534,
                                      "end": 535,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 537,
                                    "end": 538,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 537,
                                      "end": 538,
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 523,
                                "end": 533,
                                "decorators": [],
                                "name": "StateValue",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 540,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 542,
                      "end": 556,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 553,
                        "end": 556,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 554,
                            "end": 555,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 555,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 553,
                        "decorators": [],
                        "name": "EventStream",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 468,
                    "end": 474,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 469,
                        "end": 470,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 472,
                        "end": 473,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 566,
                  "end": 605,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 572,
                    "decorators": [],
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 573,
                      "end": 588,
                      "decorators": [],
                      "name": "mapping",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 580,
                        "end": 588,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 582,
                          "end": 588,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 582,
                            "end": 588,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 589,
                    "end": 604,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 591,
                      "end": 604,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 599,
                        "end": 604,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 600,
                            "end": 603
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 599,
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 614,
                  "end": 667,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 622,
                    "decorators": [],
                    "name": "awaiting",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 626,
                      "end": 646,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 631,
                        "end": 646,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 633,
                          "end": 646,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 643,
                            "end": 646,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 644,
                                "end": 645,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 644,
                                  "end": 645,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 633,
                            "end": 643,
                            "decorators": [],
                            "name": "Observable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 649,
                      "end": 666,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 657,
                        "end": 666,
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 658,
                            "end": 665
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 657,
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 622,
                    "end": 625,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 623,
                        "end": 624,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 623,
                          "end": 624,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 676,
                  "end": 729,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 686,
                    "decorators": [],
                    "name": "endOnError",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 687,
                      "end": 712,
                      "decorators": [],
                      "name": "f",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 689,
                        "end": 712,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 691,
                          "end": 712,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 692,
                              "end": 700,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 697,
                                "end": 700,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 699,
                                  "end": 700,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 699,
                                    "end": 700,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 702,
                            "end": 712,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 705,
                              "end": 712
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 713,
                    "end": 728,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 715,
                      "end": 728,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 725,
                        "end": 728,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 726,
                            "end": 727,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 726,
                              "end": 727,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 715,
                        "end": 725,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 738,
                  "end": 794,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 749,
                    "decorators": [],
                    "name": "withHandler",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 750,
                      "end": 777,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 751,
                        "end": 777,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 753,
                          "end": 777,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 754,
                              "end": 769,
                              "decorators": [],
                              "name": "event",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 759,
                                "end": 769,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 761,
                                  "end": 769,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 766,
                                    "end": 769,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 767,
                                        "end": 768,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 767,
                                          "end": 768,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 761,
                                    "end": 766,
                                    "decorators": [],
                                    "name": "Event",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 771,
                            "end": 777,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 774,
                              "end": 777
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 778,
                    "end": 793,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 780,
                      "end": 793,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 790,
                        "end": 793,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 791,
                            "end": 792,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 791,
                              "end": 792,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 790,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 803,
                  "end": 837,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 807,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 808,
                      "end": 820,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 812,
                        "end": 820,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 814,
                          "end": 820
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 821,
                    "end": 836,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 823,
                      "end": 836,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 833,
                        "end": 836,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 834,
                            "end": 835,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 835,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 833,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 846,
                  "end": 893,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 846,
                    "end": 861,
                    "decorators": [],
                    "name": "withDescription",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 862,
                      "end": 876,
                      "argument": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 869,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 869,
                        "end": 876,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 871,
                          "end": 876,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 871,
                            "end": 874
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 877,
                    "end": 892,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 879,
                      "end": 892,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 889,
                        "end": 892,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 890,
                            "end": 891,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 890,
                              "end": 891,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 879,
                        "end": 889,
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 183,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 183,
              "end": 186,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 184,
                  "end": 185,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 904,
            "end": 955,
            "body": {
              "type": "TSInterfaceBody",
              "start": 948,
              "end": 955,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 934,
                "end": 947,
                "expression": {
                  "type": "Identifier",
                  "start": 934,
                  "end": 944,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 944,
                  "end": 947,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 945,
                      "end": 946,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 946,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 914,
              "end": 922,
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 922,
              "end": 925,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 923,
                  "end": 924,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 924,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 960,
            "end": 1014,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1007,
              "end": 1014,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 993,
                "end": 1006,
                "expression": {
                  "type": "Identifier",
                  "start": 993,
                  "end": 1003,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1003,
                  "end": 1006,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1004,
                      "end": 1005,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1004,
                        "end": 1005,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 970,
              "end": 981,
              "decorators": [],
              "name": "EventStream",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 981,
              "end": 984,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 982,
                  "end": 983,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 982,
                    "end": 983,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1019,
            "end": 1066,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1059,
              "end": 1066,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1044,
                "end": 1058,
                "expression": {
                  "type": "Identifier",
                  "start": 1044,
                  "end": 1055,
                  "decorators": [],
                  "name": "EventStream",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1055,
                  "end": 1058,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1056,
                      "end": 1057,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1056,
                        "end": 1057,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1029,
              "end": 1032,
              "decorators": [],
              "name": "Bus",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1032,
              "end": 1035,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1033,
                  "end": 1034,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1033,
                    "end": 1034,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1071,
            "end": 1100,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1075,
                "end": 1099,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1075,
                  "end": 1099,
                  "decorators": [],
                  "name": "Bus",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1078,
                    "end": 1099,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 1080,
                      "end": 1099,
                      "abstract": false,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1090,
                        "end": 1099,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1093,
                          "end": 1099,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1096,
                            "end": 1099,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1097,
                                "end": 1098,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1097,
                                  "end": 1098,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1093,
                            "end": 1096,
                            "decorators": [],
                            "name": "Bus",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1084,
                        "end": 1087,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1085,
                            "end": 1086,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 1085,
                              "end": 1086,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
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
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "decorators": [],
        "name": "Bacon",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 1104,
      "end": 1151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1108,
          "end": 1150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1108,
            "end": 1132,
            "decorators": [],
            "name": "stuck",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1113,
              "end": 1132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1115,
                "end": 1132,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1124,
                  "end": 1132,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1125,
                      "end": 1131
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1115,
                  "end": 1124,
                  "left": {
                    "type": "Identifier",
                    "start": 1115,
                    "end": 1120,
                    "decorators": [],
                    "name": "Bacon",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1121,
                    "end": 1124,
                    "decorators": [],
                    "name": "Bus",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 1135,
            "end": 1150,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1139,
              "end": 1148,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1139,
                "end": 1144,
                "decorators": [],
                "name": "Bacon",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1145,
                "end": 1148,
                "decorators": [],
                "name": "Bus",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
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
