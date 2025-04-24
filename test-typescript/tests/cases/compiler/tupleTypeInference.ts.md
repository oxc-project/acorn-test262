__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 659,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "decorators": [],
            "name": "$q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 16,
                "end": 25,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 25,
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
      "start": 28,
      "end": 294,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 294,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 54,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
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
                "start": 70,
                "end": 115,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 115,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 73,
                    "end": 115,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 74,
                        "end": 86,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 82,
                          "end": 86,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 83,
                              "end": 85,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 85,
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
                          "start": 74,
                          "end": 82,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 88,
                        "end": 100,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 96,
                          "end": 100,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 97,
                              "end": 99,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 97,
                                "end": 99,
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
                          "start": 88,
                          "end": 96,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 102,
                        "end": 114,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 110,
                          "end": 114,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 111,
                              "end": 113,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 111,
                                "end": 113,
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
                          "start": 102,
                          "end": 110,
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
              "start": 116,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 140,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 126,
                  "end": 140,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 127,
                      "end": 139,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 128,
                          "end": 130,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 130,
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 132,
                          "end": 134,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 134,
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 136,
                          "end": 138,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 138,
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
                  "start": 118,
                  "end": 126,
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
              "start": 57,
              "end": 69,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 58,
                  "end": 60,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 60,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 62,
                  "end": 64,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 64,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 66,
                  "end": 68,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 68,
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
            "start": 146,
            "end": 211,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
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
                "start": 158,
                "end": 189,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 159,
                  "end": 189,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 161,
                    "end": 189,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 162,
                        "end": 174,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 170,
                          "end": 174,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 171,
                              "end": 173,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 173,
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
                          "start": 162,
                          "end": 170,
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 176,
                        "end": 188,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 184,
                          "end": 188,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 185,
                              "end": 187,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 185,
                                "end": 187,
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
                          "start": 176,
                          "end": 184,
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
              "start": 190,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 192,
                "end": 210,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 200,
                  "end": 210,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 201,
                      "end": 209,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 202,
                          "end": 204,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 204,
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 206,
                          "end": 208,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 208,
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
                  "start": 192,
                  "end": 200,
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
              "start": 149,
              "end": 157,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 150,
                  "end": 152,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 152,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 154,
                  "end": 156,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 156,
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
            "start": 216,
            "end": 259,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
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
                "start": 224,
                "end": 241,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 225,
                  "end": 241,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 227,
                    "end": 241,
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "start": 228,
                        "end": 240,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 236,
                          "end": 240,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 237,
                              "end": 239,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 239,
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
                          "start": 228,
                          "end": 236,
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
              "start": 242,
              "end": 258,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 258,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 252,
                  "end": 258,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 253,
                      "end": 257,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 254,
                          "end": 256,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 256,
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
                  "start": 244,
                  "end": 252,
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
              "start": 219,
              "end": 223,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 220,
                  "end": 222,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 222,
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
            "start": 264,
            "end": 292,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 268,
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
                "start": 272,
                "end": 277,
                "decorators": [],
                "name": "t",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 277,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 276,
                    "end": 277,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 277,
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
              "start": 278,
              "end": 291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 291,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 288,
                  "end": 291,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 289,
                      "end": 290,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 290,
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
                  "start": 280,
                  "end": 288,
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
              "start": 268,
              "end": 271,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 269,
                  "end": 270,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 270,
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
        "start": 38,
        "end": 47,
        "decorators": [],
        "name": "IQService",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 296,
      "end": 388,
      "body": {
        "type": "TSInterfaceBody",
        "start": 318,
        "end": 388,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 324,
            "end": 386,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
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
                "start": 338,
                "end": 365,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 346,
                  "end": 365,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 348,
                    "end": 365,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 349,
                        "end": 353,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 350,
                          "end": 353,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 352,
                            "end": 353,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 353,
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
                      "start": 355,
                      "end": 365,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 358,
                        "end": 365,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 365,
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
              "start": 366,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 385,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 376,
                  "end": 385,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 377,
                      "end": 384,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 377,
                        "end": 384,
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
                  "start": 368,
                  "end": 376,
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
              "start": 328,
              "end": 337,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 329,
                  "end": 336,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 336,
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
        "start": 306,
        "end": 314,
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 314,
        "end": 317,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 315,
            "end": 316,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
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
      "start": 418,
      "end": 473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 472,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 423,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 426,
            "end": 472,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 433,
                "end": 471,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 434,
                    "end": 451,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 434,
                      "end": 441,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 436,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 441,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 441,
                      "end": 449,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 442,
                          "end": 448
                        }
                      ]
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 453,
                    "end": 470,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 453,
                      "end": 460,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 455,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 460,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 460,
                      "end": 468,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 461,
                          "end": 467
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 426,
              "end": 432,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 426,
                "end": 428,
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 429,
                "end": 432,
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
      "start": 503,
      "end": 574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 573,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 511,
            "end": 573,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 534,
                "end": 572,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 535,
                    "end": 552,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 535,
                      "end": 542,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 537,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 542,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 542,
                      "end": 550,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 543,
                          "end": 549
                        }
                      ]
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 554,
                    "end": 571,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 554,
                      "end": 561,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 556,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 561,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 561,
                      "end": 569,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 562,
                          "end": 568
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 511,
              "end": 517,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 511,
                "end": 513,
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 514,
                "end": 517,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 517,
              "end": 533,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 518,
                  "end": 524
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 526,
                  "end": 532
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
      "start": 604,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 658,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 612,
            "end": 658,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 619,
                "end": 657,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 620,
                    "end": 637,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 620,
                      "end": 627,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 622,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 623,
                        "end": 627,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 627,
                      "end": 635,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 628,
                          "end": 634
                        }
                      ]
                    }
                  },
                  {
                    "type": "CallExpression",
                    "start": 639,
                    "end": 656,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 639,
                      "end": 646,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 641,
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 642,
                        "end": 646,
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 646,
                      "end": 654,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 647,
                          "end": 653
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 612,
              "end": 618,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 612,
                "end": 614,
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 615,
                "end": 618,
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
