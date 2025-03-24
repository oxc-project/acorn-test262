__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 660,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 13,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 26,
            "decorators": [],
            "name": "$q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 26,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 26,
                  "decorators": [],
                  "name": "IQService",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 295,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 295,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 142,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "all",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 116,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 72,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 74,
                    "end": 116,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 75,
                        "end": 87,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 83,
                          "end": 87,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 84,
                              "end": 86,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 86,
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 83,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 89,
                        "end": 101,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 97,
                          "end": 101,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 98,
                              "end": 100,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 100,
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 97,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 103,
                        "end": 115,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 111,
                          "end": 115,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 112,
                              "end": 114,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 114,
                                "decorators": [],
                                "name": "T3",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 111,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 141,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 127,
                  "end": 141,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 128,
                      "end": 140,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 129,
                          "end": 131,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 131,
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 133,
                          "end": 135,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 135,
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 137,
                          "end": 139,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 139,
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 127,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 58,
              "end": 70,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 61,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 61,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 63,
                  "end": 65,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 65,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 67,
                  "end": 69,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 69,
                    "decorators": [],
                    "name": "T3",
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
            "start": 147,
            "end": 212,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "all",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 159,
                "end": 190,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 190,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 162,
                    "end": 190,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 163,
                        "end": 175,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 171,
                          "end": 175,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 172,
                              "end": 174,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 172,
                                "end": 174,
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 171,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 189,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 185,
                          "end": 189,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 186,
                              "end": 188,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 186,
                                "end": 188,
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 185,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 211,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 201,
                  "end": 211,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 202,
                      "end": 210,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 203,
                          "end": 205,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 205,
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 207,
                          "end": 209,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 209,
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 201,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 150,
              "end": 158,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 151,
                  "end": 153,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 153,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 155,
                  "end": 157,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 157,
                    "decorators": [],
                    "name": "T2",
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
            "start": 217,
            "end": 260,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "all",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 225,
                "end": 242,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 226,
                  "end": 242,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 228,
                    "end": 242,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 229,
                        "end": 241,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 237,
                          "end": 241,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 238,
                              "end": 240,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 238,
                                "end": 240,
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 237,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 259,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 253,
                  "end": 259,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 254,
                      "end": 258,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 255,
                          "end": 257,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 257,
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 253,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 220,
              "end": 224,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 221,
                  "end": 223,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 223,
                    "decorators": [],
                    "name": "T1",
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
            "start": 265,
            "end": 293,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 269,
              "decorators": [],
              "name": "when",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 273,
                "end": 278,
                "decorators": [],
                "name": "t",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 278,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 278,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "decorators": [],
                      "name": "T",
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
              "start": 279,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
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
                  "start": 281,
                  "end": 289,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 269,
              "end": 272,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 270,
                  "end": 271,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
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
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "decorators": [],
        "name": "IQService",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 297,
      "end": 389,
      "body": {
        "type": "TSInterfaceBody",
        "start": 319,
        "end": 389,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 325,
            "end": 387,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 339,
                "end": 366,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 347,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 349,
                    "end": 366,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 350,
                        "end": 354,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 351,
                          "end": 354,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 353,
                            "end": 354,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 354,
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
                      "start": 356,
                      "end": 366,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 359,
                        "end": 366,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 366,
                          "decorators": [],
                          "name": "TResult",
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
              "start": 367,
              "end": 386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 369,
                "end": 386,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 377,
                  "end": 386,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 378,
                      "end": 385,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 385,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 377,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 329,
              "end": 338,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 330,
                  "end": 337,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 337,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null
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
        "start": 307,
        "end": 315,
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 315,
        "end": 318,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 317,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
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
      "start": 419,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 427,
            "end": 473,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 434,
                "end": 472,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 435,
                    "end": 452,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 435,
                      "end": 442,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 437,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 442,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 442,
                      "end": 450,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 443,
                          "end": 449
                        }
                      ]
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 454,
                    "end": 471,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 454,
                      "end": 461,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 456,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 461,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 461,
                      "end": 469,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 462,
                          "end": 468
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 427,
              "end": 433,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 430,
                "end": 433,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 574,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 509,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 512,
            "end": 574,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 535,
                "end": 573,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 536,
                    "end": 553,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 536,
                      "end": 543,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 538,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 543,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 543,
                      "end": 551,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 544,
                          "end": 550
                        }
                      ]
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 555,
                    "end": 572,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 555,
                      "end": 562,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 557,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 562,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 562,
                      "end": 570,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 563,
                          "end": 569
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 512,
              "end": 518,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 512,
                "end": 514,
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 515,
                "end": 518,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 518,
              "end": 534,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 519,
                  "end": 525
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 659,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 610,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 613,
            "end": 659,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 620,
                "end": 658,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 621,
                    "end": 638,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 621,
                      "end": 628,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 623,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 628,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 628,
                      "end": 636,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 629,
                          "end": 635
                        }
                      ]
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 640,
                    "end": 657,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 640,
                      "end": 647,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 640,
                        "end": 642,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 643,
                        "end": 647,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 647,
                      "end": 655,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 648,
                          "end": 654
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 613,
              "end": 619,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 613,
                "end": 615,
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 619,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
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
