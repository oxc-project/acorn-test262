__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 661,
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
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 26,
            "name": "$q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 26,
                  "name": "IQService",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "name": "IQService",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 295,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 142,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "all",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 58,
              "end": 70,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 61,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 61,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 63,
                  "end": 65,
                  "name": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 65,
                    "name": "T2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 67,
                  "end": 69,
                  "name": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 69,
                    "name": "T3",
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
                "start": 71,
                "end": 116,
                "name": "x",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 83,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 83,
                          "end": 87,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 84,
                              "end": 86,
                              "typeName": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 86,
                                "name": "T1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 89,
                        "end": 101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 97,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 97,
                          "end": 101,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 98,
                              "end": 100,
                              "typeName": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 100,
                                "name": "T2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 103,
                        "end": 115,
                        "typeName": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 111,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 111,
                          "end": 115,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 112,
                              "end": 114,
                              "typeName": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 114,
                                "name": "T3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 141,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 131,
                            "name": "T1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 133,
                          "end": 135,
                          "typeName": {
                            "type": "Identifier",
                            "start": 133,
                            "end": 135,
                            "name": "T2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 137,
                          "end": 139,
                          "typeName": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 139,
                            "name": "T3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
            "start": 147,
            "end": 212,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "name": "all",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 150,
              "end": 158,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 151,
                  "end": 153,
                  "name": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 153,
                    "name": "T1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 155,
                  "end": 157,
                  "name": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 157,
                    "name": "T2",
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
                "start": 159,
                "end": 190,
                "name": "x",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 171,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 171,
                          "end": 175,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 172,
                              "end": 174,
                              "typeName": {
                                "type": "Identifier",
                                "start": 172,
                                "end": 174,
                                "name": "T1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 177,
                        "end": 189,
                        "typeName": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 185,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 185,
                          "end": 189,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 186,
                              "end": 188,
                              "typeName": {
                                "type": "Identifier",
                                "start": 186,
                                "end": 188,
                                "name": "T2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 193,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 201,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 205,
                            "name": "T1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 207,
                          "end": 209,
                          "typeName": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 209,
                            "name": "T2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
            "start": 217,
            "end": 260,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "name": "all",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 220,
              "end": 224,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 221,
                  "end": 223,
                  "name": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 223,
                    "name": "T1",
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
                "start": 225,
                "end": 242,
                "name": "x",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 237,
                          "name": "IPromise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 237,
                          "end": 241,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 238,
                              "end": 240,
                              "typeName": {
                                "type": "Identifier",
                                "start": 238,
                                "end": 240,
                                "name": "T1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 253,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 257,
                            "name": "T1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
            "start": 265,
            "end": 293,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 269,
              "name": "when",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 269,
              "end": 272,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 270,
                  "end": 271,
                  "name": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
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
                "start": 273,
                "end": 278,
                "name": "t",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 278,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 278,
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 292,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 289,
                  "name": "IPromise",
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
      "start": 297,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 315,
        "name": "IPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 315,
        "end": 318,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 317,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
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
        "start": 319,
        "end": 389,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 325,
            "end": 387,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
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
              "start": 329,
              "end": 338,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 330,
                  "end": 337,
                  "name": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 337,
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
            "params": [
              {
                "type": "Identifier",
                "start": 339,
                "end": 366,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 347,
                  "end": 366,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 349,
                    "end": 366,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 350,
                        "end": 354,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 351,
                          "end": 354,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 353,
                            "end": 354,
                            "typeName": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 354,
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
                      "start": 356,
                      "end": 366,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 359,
                        "end": 366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 359,
                          "end": 366,
                          "name": "TResult",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 369,
                "end": 386,
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 377,
                  "name": "IPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 377,
                  "end": 386,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 378,
                      "end": 385,
                      "typeName": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 385,
                        "name": "TResult",
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
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 427,
            "end": 473,
            "callee": {
              "type": "MemberExpression",
              "start": 427,
              "end": 433,
              "object": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "name": "$q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 430,
                "end": 433,
                "name": "all",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 435,
                      "end": 442,
                      "object": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 437,
                        "name": "$q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 442,
                        "name": "when",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 454,
                      "end": 461,
                      "object": {
                        "type": "Identifier",
                        "start": 454,
                        "end": 456,
                        "name": "$q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 461,
                        "name": "when",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
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
      "start": 504,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 509,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 512,
            "end": 574,
            "callee": {
              "type": "MemberExpression",
              "start": 512,
              "end": 518,
              "object": {
                "type": "Identifier",
                "start": 512,
                "end": 514,
                "name": "$q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 515,
                "end": 518,
                "name": "all",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 536,
                      "end": 543,
                      "object": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 538,
                        "name": "$q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 543,
                        "name": "when",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 555,
                      "end": 562,
                      "object": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 557,
                        "name": "$q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 562,
                        "name": "when",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 610,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 613,
            "end": 659,
            "callee": {
              "type": "MemberExpression",
              "start": 613,
              "end": 619,
              "object": {
                "type": "Identifier",
                "start": 613,
                "end": 615,
                "name": "$q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 616,
                "end": 619,
                "name": "all",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 621,
                      "end": 628,
                      "object": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 623,
                        "name": "$q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 628,
                        "name": "when",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 640,
                      "end": 647,
                      "object": {
                        "type": "Identifier",
                        "start": 640,
                        "end": 642,
                        "name": "$q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 643,
                        "end": 647,
                        "name": "when",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
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
