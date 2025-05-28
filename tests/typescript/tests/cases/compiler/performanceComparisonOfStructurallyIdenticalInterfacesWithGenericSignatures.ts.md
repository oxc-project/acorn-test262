__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2973,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 94,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 94,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 27,
          "decorators": [],
          "name": "ThenArg",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 27,
          "end": 30,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 28,
              "end": 29,
              "name": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 33,
          "end": 93,
          "checkType": {
            "type": "TSTypeReference",
            "start": 33,
            "end": 34,
            "typeName": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 43,
            "end": 46
          },
          "trueType": {
            "type": "TSAnyKeyword",
            "start": 49,
            "end": 52
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 55,
            "end": 93,
            "checkType": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 76,
                "decorators": [],
                "name": "PromiseLike",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 76,
                "end": 85,
                "params": [
                  {
                    "type": "TSInferType",
                    "start": 77,
                    "end": 84,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 83,
                      "end": 84,
                      "name": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
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
                  }
                ]
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 92,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 887,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 103,
        "end": 887,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 123,
          "decorators": [],
          "name": "InterfaceA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 123,
          "end": 126,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 124,
              "end": 125,
              "name": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
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
          "start": 127,
          "end": 887,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 133,
              "end": 204,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 139,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 140,
                  "end": 187,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 150,
                      "end": 187,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 151,
                          "end": 162,
                          "decorators": [],
                          "name": "newValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 159,
                            "end": 162,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 161,
                              "end": 162,
                              "typeName": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
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
                          "start": 164,
                          "end": 175,
                          "decorators": [],
                          "name": "oldValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 172,
                            "end": 175,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 174,
                              "end": 175,
                              "typeName": {
                                "type": "Identifier",
                                "start": 174,
                                "end": 175,
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
                        "start": 177,
                        "end": 187,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 180,
                          "end": 187
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 188,
                "end": 203,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 190,
                  "end": 203,
                  "typeName": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 200,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 200,
                    "end": 203,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 201,
                        "end": 202,
                        "typeName": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 202,
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
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 209,
              "end": 258,
              "key": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 212,
                "end": 215,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 213,
                    "end": 214,
                    "name": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "D",
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
                  "start": 216,
                  "end": 241,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 226,
                      "end": 241,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 227,
                          "end": 235,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 232,
                            "end": 235,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 234,
                              "end": 235,
                              "typeName": {
                                "type": "Identifier",
                                "start": 234,
                                "end": 235,
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
                        "start": 237,
                        "end": 241,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 240,
                          "end": 241,
                          "typeName": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 241,
                            "decorators": [],
                            "name": "D",
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
                "start": 242,
                "end": 257,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 244,
                  "end": 257,
                  "typeName": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 254,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 254,
                    "end": 257,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 255,
                        "end": 256,
                        "typeName": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 256,
                          "decorators": [],
                          "name": "D",
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
              "start": 263,
              "end": 308,
              "key": {
                "type": "Identifier",
                "start": 263,
                "end": 268,
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 268,
                "end": 290,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 269,
                    "end": 289,
                    "name": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 279,
                      "end": 289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 279,
                        "end": 286,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 286,
                        "end": 289,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 287,
                            "end": 288,
                            "typeName": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 292,
                "end": 307,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 294,
                  "end": 307,
                  "typeName": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 304,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 304,
                    "end": 307,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 305,
                        "end": 306,
                        "typeName": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 306,
                          "decorators": [],
                          "name": "R",
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
              "start": 313,
              "end": 364,
              "key": {
                "type": "Identifier",
                "start": 313,
                "end": 324,
                "decorators": [],
                "name": "awaitLatest",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 324,
                "end": 346,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 325,
                    "end": 345,
                    "name": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 326,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 335,
                      "end": 345,
                      "typeName": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 342,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 342,
                        "end": 345,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 343,
                            "end": 344,
                            "typeName": {
                              "type": "Identifier",
                              "start": 343,
                              "end": 344,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 348,
                "end": 363,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 350,
                  "end": 363,
                  "typeName": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 360,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 360,
                    "end": 363,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 361,
                        "end": 362,
                        "typeName": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 362,
                          "decorators": [],
                          "name": "R",
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
              "start": 369,
              "end": 421,
              "key": {
                "type": "Identifier",
                "start": 369,
                "end": 381,
                "decorators": [],
                "name": "awaitOrdered",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 381,
                "end": 403,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 382,
                    "end": 402,
                    "name": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 383,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 392,
                      "end": 402,
                      "typeName": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 399,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 405,
                "end": 420,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 420,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 417,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 417,
                    "end": 420,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 418,
                        "end": 419,
                        "typeName": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "decorators": [],
                          "name": "R",
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
              "start": 426,
              "end": 479,
              "key": {
                "type": "Identifier",
                "start": 426,
                "end": 439,
                "decorators": [],
                "name": "awaitOrdered2",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 439,
                "end": 461,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 440,
                    "end": 460,
                    "name": {
                      "type": "Identifier",
                      "start": 440,
                      "end": 441,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 450,
                      "end": 460,
                      "typeName": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 457,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 457,
                        "end": 460,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 458,
                            "end": 459,
                            "typeName": {
                              "type": "Identifier",
                              "start": 458,
                              "end": 459,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 463,
                "end": 478,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 465,
                  "end": 478,
                  "typeName": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 475,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 475,
                    "end": 478,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 476,
                        "end": 477,
                        "typeName": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 477,
                          "decorators": [],
                          "name": "R",
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
              "start": 484,
              "end": 537,
              "key": {
                "type": "Identifier",
                "start": 484,
                "end": 497,
                "decorators": [],
                "name": "awaitOrdered3",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 497,
                "end": 519,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 498,
                    "end": 518,
                    "name": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 508,
                      "end": 518,
                      "typeName": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 515,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 515,
                        "end": 518,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 516,
                            "end": 517,
                            "typeName": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 517,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 521,
                "end": 536,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 523,
                  "end": 536,
                  "typeName": {
                    "type": "Identifier",
                    "start": 523,
                    "end": 533,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 533,
                    "end": 536,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 534,
                        "end": 535,
                        "typeName": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 535,
                          "decorators": [],
                          "name": "R",
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
              "start": 542,
              "end": 595,
              "key": {
                "type": "Identifier",
                "start": 542,
                "end": 555,
                "decorators": [],
                "name": "awaitOrdered4",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 555,
                "end": 577,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 556,
                    "end": 576,
                    "name": {
                      "type": "Identifier",
                      "start": 556,
                      "end": 557,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 566,
                      "end": 576,
                      "typeName": {
                        "type": "Identifier",
                        "start": 566,
                        "end": 573,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 573,
                        "end": 576,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 574,
                            "end": 575,
                            "typeName": {
                              "type": "Identifier",
                              "start": 574,
                              "end": 575,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 579,
                "end": 594,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 581,
                  "end": 594,
                  "typeName": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 591,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 591,
                    "end": 594,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 592,
                        "end": 593,
                        "typeName": {
                          "type": "Identifier",
                          "start": 592,
                          "end": 593,
                          "decorators": [],
                          "name": "R",
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
              "start": 600,
              "end": 653,
              "key": {
                "type": "Identifier",
                "start": 600,
                "end": 613,
                "decorators": [],
                "name": "awaitOrdered5",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 613,
                "end": 635,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 614,
                    "end": 634,
                    "name": {
                      "type": "Identifier",
                      "start": 614,
                      "end": 615,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 634,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 631,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 631,
                        "end": 634,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 632,
                            "end": 633,
                            "typeName": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 637,
                "end": 652,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 652,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 649,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 649,
                    "end": 652,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 650,
                        "end": 651,
                        "typeName": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 651,
                          "decorators": [],
                          "name": "R",
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
              "start": 658,
              "end": 711,
              "key": {
                "type": "Identifier",
                "start": 658,
                "end": 671,
                "decorators": [],
                "name": "awaitOrdered6",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 671,
                "end": 693,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 672,
                    "end": 692,
                    "name": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 682,
                      "end": 692,
                      "typeName": {
                        "type": "Identifier",
                        "start": 682,
                        "end": 689,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 689,
                        "end": 692,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 690,
                            "end": 691,
                            "typeName": {
                              "type": "Identifier",
                              "start": 690,
                              "end": 691,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 695,
                "end": 710,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 697,
                  "end": 710,
                  "typeName": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 707,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 707,
                    "end": 710,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 708,
                        "end": 709,
                        "typeName": {
                          "type": "Identifier",
                          "start": 708,
                          "end": 709,
                          "decorators": [],
                          "name": "R",
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
              "start": 716,
              "end": 769,
              "key": {
                "type": "Identifier",
                "start": 716,
                "end": 729,
                "decorators": [],
                "name": "awaitOrdered7",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 729,
                "end": 751,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 730,
                    "end": 750,
                    "name": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 740,
                      "end": 750,
                      "typeName": {
                        "type": "Identifier",
                        "start": 740,
                        "end": 747,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 747,
                        "end": 750,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 748,
                            "end": 749,
                            "typeName": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 753,
                "end": 768,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 755,
                  "end": 768,
                  "typeName": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 765,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 765,
                    "end": 768,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 766,
                        "end": 767,
                        "typeName": {
                          "type": "Identifier",
                          "start": 766,
                          "end": 767,
                          "decorators": [],
                          "name": "R",
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
              "start": 774,
              "end": 827,
              "key": {
                "type": "Identifier",
                "start": 774,
                "end": 787,
                "decorators": [],
                "name": "awaitOrdered8",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 787,
                "end": 809,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 788,
                    "end": 808,
                    "name": {
                      "type": "Identifier",
                      "start": 788,
                      "end": 789,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 798,
                      "end": 808,
                      "typeName": {
                        "type": "Identifier",
                        "start": 798,
                        "end": 805,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 805,
                        "end": 808,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 806,
                            "end": 807,
                            "typeName": {
                              "type": "Identifier",
                              "start": 806,
                              "end": 807,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 811,
                "end": 826,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 813,
                  "end": 826,
                  "typeName": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 823,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 823,
                    "end": 826,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 824,
                        "end": 825,
                        "typeName": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "decorators": [],
                          "name": "R",
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
              "start": 832,
              "end": 885,
              "key": {
                "type": "Identifier",
                "start": 832,
                "end": 845,
                "decorators": [],
                "name": "awaitOrdered9",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 845,
                "end": 867,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 846,
                    "end": 866,
                    "name": {
                      "type": "Identifier",
                      "start": 846,
                      "end": 847,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 856,
                      "end": 866,
                      "typeName": {
                        "type": "Identifier",
                        "start": 856,
                        "end": 863,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 863,
                        "end": 866,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 864,
                            "end": 865,
                            "typeName": {
                              "type": "Identifier",
                              "start": 864,
                              "end": 865,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 869,
                "end": 884,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 871,
                  "end": 884,
                  "typeName": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 881,
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 881,
                    "end": 884,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 882,
                        "end": 883,
                        "typeName": {
                          "type": "Identifier",
                          "start": 882,
                          "end": 883,
                          "decorators": [],
                          "name": "R",
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
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 889,
      "end": 1626,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 896,
        "end": 1626,
        "id": {
          "type": "Identifier",
          "start": 906,
          "end": 916,
          "decorators": [],
          "name": "InterfaceB",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 916,
          "end": 919,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 917,
              "end": 918,
              "name": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
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
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 928,
            "end": 941,
            "expression": {
              "type": "Identifier",
              "start": 928,
              "end": 938,
              "decorators": [],
              "name": "InterfaceA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 938,
              "end": 941,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 939,
                  "end": 940,
                  "typeName": {
                    "type": "Identifier",
                    "start": 939,
                    "end": 940,
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
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 942,
          "end": 1626,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 948,
              "end": 997,
              "key": {
                "type": "Identifier",
                "start": 948,
                "end": 951,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 951,
                "end": 954,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 952,
                    "end": 953,
                    "name": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "decorators": [],
                      "name": "D",
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
                  "start": 955,
                  "end": 980,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 963,
                    "end": 980,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 965,
                      "end": 980,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 966,
                          "end": 974,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 971,
                            "end": 974,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 973,
                              "end": 974,
                              "typeName": {
                                "type": "Identifier",
                                "start": 973,
                                "end": 974,
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
                        "start": 976,
                        "end": 980,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 979,
                          "end": 980,
                          "typeName": {
                            "type": "Identifier",
                            "start": 979,
                            "end": 980,
                            "decorators": [],
                            "name": "D",
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
                "start": 981,
                "end": 996,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 983,
                  "end": 996,
                  "typeName": {
                    "type": "Identifier",
                    "start": 983,
                    "end": 993,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 993,
                    "end": 996,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 994,
                        "end": 995,
                        "typeName": {
                          "type": "Identifier",
                          "start": 994,
                          "end": 995,
                          "decorators": [],
                          "name": "D",
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
              "start": 1002,
              "end": 1047,
              "key": {
                "type": "Identifier",
                "start": 1002,
                "end": 1007,
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1007,
                "end": 1029,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1008,
                    "end": 1028,
                    "name": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1009,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1018,
                      "end": 1028,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1018,
                        "end": 1025,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1025,
                        "end": 1028,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1026,
                            "end": 1027,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1026,
                              "end": 1027,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1031,
                "end": 1046,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1033,
                  "end": 1046,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1033,
                    "end": 1043,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1043,
                    "end": 1046,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1044,
                        "end": 1045,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1045,
                          "decorators": [],
                          "name": "R",
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
              "start": 1052,
              "end": 1103,
              "key": {
                "type": "Identifier",
                "start": 1052,
                "end": 1063,
                "decorators": [],
                "name": "awaitLatest",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1063,
                "end": 1085,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1064,
                    "end": 1084,
                    "name": {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1065,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1074,
                      "end": 1084,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1074,
                        "end": 1081,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1081,
                        "end": 1084,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1082,
                            "end": 1083,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1082,
                              "end": 1083,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1087,
                "end": 1102,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1089,
                  "end": 1102,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1099,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1099,
                    "end": 1102,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1100,
                        "end": 1101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1100,
                          "end": 1101,
                          "decorators": [],
                          "name": "R",
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
              "start": 1108,
              "end": 1160,
              "key": {
                "type": "Identifier",
                "start": 1108,
                "end": 1120,
                "decorators": [],
                "name": "awaitOrdered",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1120,
                "end": 1142,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1121,
                    "end": 1141,
                    "name": {
                      "type": "Identifier",
                      "start": 1121,
                      "end": 1122,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1131,
                      "end": 1141,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1131,
                        "end": 1138,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1138,
                        "end": 1141,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1139,
                            "end": 1140,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1139,
                              "end": 1140,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1144,
                "end": 1159,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1146,
                  "end": 1159,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1146,
                    "end": 1156,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1156,
                    "end": 1159,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1157,
                        "end": 1158,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1157,
                          "end": 1158,
                          "decorators": [],
                          "name": "R",
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
              "start": 1165,
              "end": 1218,
              "key": {
                "type": "Identifier",
                "start": 1165,
                "end": 1178,
                "decorators": [],
                "name": "awaitOrdered2",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1178,
                "end": 1200,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1179,
                    "end": 1199,
                    "name": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1189,
                      "end": 1199,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1189,
                        "end": 1196,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1196,
                        "end": 1199,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1197,
                            "end": 1198,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1197,
                              "end": 1198,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1202,
                "end": 1217,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1204,
                  "end": 1217,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1214,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1214,
                    "end": 1217,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1215,
                        "end": 1216,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1215,
                          "end": 1216,
                          "decorators": [],
                          "name": "R",
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
              "start": 1223,
              "end": 1276,
              "key": {
                "type": "Identifier",
                "start": 1223,
                "end": 1236,
                "decorators": [],
                "name": "awaitOrdered3",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1236,
                "end": 1258,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1237,
                    "end": 1257,
                    "name": {
                      "type": "Identifier",
                      "start": 1237,
                      "end": 1238,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1247,
                      "end": 1257,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1247,
                        "end": 1254,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1254,
                        "end": 1257,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1255,
                            "end": 1256,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1255,
                              "end": 1256,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1260,
                "end": 1275,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1262,
                  "end": 1275,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1272,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1272,
                    "end": 1275,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1273,
                        "end": 1274,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1273,
                          "end": 1274,
                          "decorators": [],
                          "name": "R",
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
              "start": 1281,
              "end": 1334,
              "key": {
                "type": "Identifier",
                "start": 1281,
                "end": 1294,
                "decorators": [],
                "name": "awaitOrdered4",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1294,
                "end": 1316,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1295,
                    "end": 1315,
                    "name": {
                      "type": "Identifier",
                      "start": 1295,
                      "end": 1296,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1305,
                      "end": 1315,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1305,
                        "end": 1312,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1312,
                        "end": 1315,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1313,
                            "end": 1314,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1313,
                              "end": 1314,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1318,
                "end": 1333,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1320,
                  "end": 1333,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1320,
                    "end": 1330,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1330,
                    "end": 1333,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1331,
                        "end": 1332,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1331,
                          "end": 1332,
                          "decorators": [],
                          "name": "R",
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
              "start": 1339,
              "end": 1392,
              "key": {
                "type": "Identifier",
                "start": 1339,
                "end": 1352,
                "decorators": [],
                "name": "awaitOrdered5",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1352,
                "end": 1374,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1353,
                    "end": 1373,
                    "name": {
                      "type": "Identifier",
                      "start": 1353,
                      "end": 1354,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1363,
                      "end": 1373,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1363,
                        "end": 1370,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1370,
                        "end": 1373,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1371,
                            "end": 1372,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1371,
                              "end": 1372,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1376,
                "end": 1391,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1378,
                  "end": 1391,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1378,
                    "end": 1388,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1388,
                    "end": 1391,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1389,
                        "end": 1390,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1389,
                          "end": 1390,
                          "decorators": [],
                          "name": "R",
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
              "start": 1397,
              "end": 1450,
              "key": {
                "type": "Identifier",
                "start": 1397,
                "end": 1410,
                "decorators": [],
                "name": "awaitOrdered6",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1410,
                "end": 1432,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1411,
                    "end": 1431,
                    "name": {
                      "type": "Identifier",
                      "start": 1411,
                      "end": 1412,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1421,
                      "end": 1431,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1421,
                        "end": 1428,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1428,
                        "end": 1431,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1429,
                            "end": 1430,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1429,
                              "end": 1430,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1434,
                "end": 1449,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1436,
                  "end": 1449,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1436,
                    "end": 1446,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1446,
                    "end": 1449,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1447,
                        "end": 1448,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1447,
                          "end": 1448,
                          "decorators": [],
                          "name": "R",
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
              "start": 1455,
              "end": 1508,
              "key": {
                "type": "Identifier",
                "start": 1455,
                "end": 1468,
                "decorators": [],
                "name": "awaitOrdered7",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1468,
                "end": 1490,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1469,
                    "end": 1489,
                    "name": {
                      "type": "Identifier",
                      "start": 1469,
                      "end": 1470,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1479,
                      "end": 1489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1479,
                        "end": 1486,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1486,
                        "end": 1489,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1487,
                            "end": 1488,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1487,
                              "end": 1488,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1492,
                "end": 1507,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1494,
                  "end": 1507,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1504,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1504,
                    "end": 1507,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1505,
                        "end": 1506,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1505,
                          "end": 1506,
                          "decorators": [],
                          "name": "R",
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
              "start": 1513,
              "end": 1566,
              "key": {
                "type": "Identifier",
                "start": 1513,
                "end": 1526,
                "decorators": [],
                "name": "awaitOrdered8",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1526,
                "end": 1548,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1527,
                    "end": 1547,
                    "name": {
                      "type": "Identifier",
                      "start": 1527,
                      "end": 1528,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1537,
                      "end": 1547,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1537,
                        "end": 1544,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1544,
                        "end": 1547,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1545,
                            "end": 1546,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1545,
                              "end": 1546,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1550,
                "end": 1565,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1552,
                  "end": 1565,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1552,
                    "end": 1562,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1562,
                    "end": 1565,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1563,
                        "end": 1564,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1563,
                          "end": 1564,
                          "decorators": [],
                          "name": "R",
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
              "start": 1571,
              "end": 1624,
              "key": {
                "type": "Identifier",
                "start": 1571,
                "end": 1584,
                "decorators": [],
                "name": "awaitOrdered9",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1584,
                "end": 1606,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1585,
                    "end": 1605,
                    "name": {
                      "type": "Identifier",
                      "start": 1585,
                      "end": 1586,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1595,
                      "end": 1605,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1595,
                        "end": 1602,
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1602,
                        "end": 1605,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1603,
                            "end": 1604,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1603,
                              "end": 1604,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1608,
                "end": 1623,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1610,
                  "end": 1623,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1610,
                    "end": 1620,
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1620,
                    "end": 1623,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1621,
                        "end": 1622,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1621,
                          "end": 1622,
                          "decorators": [],
                          "name": "R",
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
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1628,
      "end": 2937,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1635,
        "end": 2937,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1641,
          "end": 1642,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1642,
          "end": 1645,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1643,
              "end": 1644,
              "name": {
                "type": "Identifier",
                "start": 1643,
                "end": 1644,
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
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 1657,
            "end": 1670,
            "expression": {
              "type": "Identifier",
              "start": 1657,
              "end": 1667,
              "decorators": [],
              "name": "InterfaceB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1667,
              "end": 1670,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1668,
                  "end": 1669,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1669,
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
        ],
        "body": {
          "type": "ClassBody",
          "start": 1671,
          "end": 2937,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1677,
              "end": 1786,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1684,
                "end": 1690,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1690,
                "end": 1786,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1691,
                    "end": 1738,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1699,
                      "end": 1738,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1701,
                        "end": 1738,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1702,
                            "end": 1713,
                            "decorators": [],
                            "name": "newValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1710,
                              "end": 1713,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1712,
                                "end": 1713,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1712,
                                  "end": 1713,
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
                            "start": 1715,
                            "end": 1726,
                            "decorators": [],
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1723,
                              "end": 1726,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1725,
                                "end": 1726,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1725,
                                  "end": 1726,
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
                          "start": 1728,
                          "end": 1738,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1731,
                            "end": 1738
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1739,
                  "end": 1745,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1741,
                    "end": 1745,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1741,
                      "end": 1742,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1742,
                      "end": 1745,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1743,
                          "end": 1744,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1743,
                            "end": 1744,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 1746,
                  "end": 1786,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1756,
                      "end": 1780,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 1763,
                        "end": 1779,
                        "expression": {
                          "type": "Identifier",
                          "start": 1763,
                          "end": 1772,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1776,
                          "end": 1779
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 1792,
              "end": 1879,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1799,
                "end": 1802,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1802,
                "end": 1879,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1802,
                  "end": 1805,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1803,
                      "end": 1804,
                      "name": {
                        "type": "Identifier",
                        "start": 1803,
                        "end": 1804,
                        "decorators": [],
                        "name": "D",
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
                    "start": 1806,
                    "end": 1831,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1814,
                      "end": 1831,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1816,
                        "end": 1831,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1817,
                            "end": 1825,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1822,
                              "end": 1825,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1824,
                                "end": 1825,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1824,
                                  "end": 1825,
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
                          "start": 1827,
                          "end": 1831,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1830,
                            "end": 1831,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1830,
                              "end": 1831,
                              "decorators": [],
                              "name": "D",
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
                  "start": 1832,
                  "end": 1838,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1834,
                    "end": 1838,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1834,
                      "end": 1835,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1835,
                      "end": 1838,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1836,
                          "end": 1837,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1836,
                            "end": 1837,
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1839,
                  "end": 1879,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1849,
                      "end": 1873,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 1856,
                        "end": 1872,
                        "expression": {
                          "type": "Identifier",
                          "start": 1856,
                          "end": 1865,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1869,
                          "end": 1872
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 1885,
              "end": 1968,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1892,
                "end": 1897,
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1897,
                "end": 1968,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1897,
                  "end": 1919,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1898,
                      "end": 1918,
                      "name": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1899,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1908,
                        "end": 1918,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1915,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1915,
                          "end": 1918,
                          "params": [
                            {
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
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1921,
                  "end": 1927,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1923,
                    "end": 1927,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1923,
                      "end": 1924,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1924,
                      "end": 1927,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1925,
                          "end": 1926,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1925,
                            "end": 1926,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1928,
                  "end": 1968,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1938,
                      "end": 1962,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 1945,
                        "end": 1961,
                        "expression": {
                          "type": "Identifier",
                          "start": 1945,
                          "end": 1954,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1958,
                          "end": 1961
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 1974,
              "end": 2064,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1981,
                "end": 1993,
                "decorators": [],
                "name": "awaitOrdered",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1993,
                "end": 2064,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1993,
                  "end": 2015,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1994,
                      "end": 2014,
                      "name": {
                        "type": "Identifier",
                        "start": 1994,
                        "end": 1995,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2004,
                        "end": 2014,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2004,
                          "end": 2011,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2011,
                          "end": 2014,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2012,
                              "end": 2013,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2012,
                                "end": 2013,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2017,
                  "end": 2023,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2019,
                    "end": 2023,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2019,
                      "end": 2020,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2020,
                      "end": 2023,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2021,
                          "end": 2022,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2021,
                            "end": 2022,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2024,
                  "end": 2064,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2034,
                      "end": 2058,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2041,
                        "end": 2057,
                        "expression": {
                          "type": "Identifier",
                          "start": 2041,
                          "end": 2050,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2054,
                          "end": 2057
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2070,
              "end": 2161,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2077,
                "end": 2090,
                "decorators": [],
                "name": "awaitOrdered2",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2090,
                "end": 2161,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2090,
                  "end": 2112,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2091,
                      "end": 2111,
                      "name": {
                        "type": "Identifier",
                        "start": 2091,
                        "end": 2092,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2101,
                        "end": 2111,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2101,
                          "end": 2108,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2108,
                          "end": 2111,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2109,
                              "end": 2110,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2109,
                                "end": 2110,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2114,
                  "end": 2120,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2116,
                    "end": 2120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2116,
                      "end": 2117,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2117,
                      "end": 2120,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2118,
                          "end": 2119,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2118,
                            "end": 2119,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2121,
                  "end": 2161,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2131,
                      "end": 2155,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2138,
                        "end": 2154,
                        "expression": {
                          "type": "Identifier",
                          "start": 2138,
                          "end": 2147,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2151,
                          "end": 2154
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2167,
              "end": 2258,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2174,
                "end": 2187,
                "decorators": [],
                "name": "awaitOrdered3",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2187,
                "end": 2258,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2187,
                  "end": 2209,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2188,
                      "end": 2208,
                      "name": {
                        "type": "Identifier",
                        "start": 2188,
                        "end": 2189,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2198,
                        "end": 2208,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2198,
                          "end": 2205,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2205,
                          "end": 2208,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2206,
                              "end": 2207,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2206,
                                "end": 2207,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2211,
                  "end": 2217,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2213,
                    "end": 2217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2213,
                      "end": 2214,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2214,
                      "end": 2217,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2215,
                          "end": 2216,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2215,
                            "end": 2216,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2218,
                  "end": 2258,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2228,
                      "end": 2252,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2235,
                        "end": 2251,
                        "expression": {
                          "type": "Identifier",
                          "start": 2235,
                          "end": 2244,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2248,
                          "end": 2251
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2264,
              "end": 2355,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2271,
                "end": 2284,
                "decorators": [],
                "name": "awaitOrdered4",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2284,
                "end": 2355,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2284,
                  "end": 2306,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2285,
                      "end": 2305,
                      "name": {
                        "type": "Identifier",
                        "start": 2285,
                        "end": 2286,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2295,
                        "end": 2305,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2295,
                          "end": 2302,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2302,
                          "end": 2305,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2303,
                              "end": 2304,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2303,
                                "end": 2304,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2308,
                  "end": 2314,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2310,
                    "end": 2314,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2310,
                      "end": 2311,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2311,
                      "end": 2314,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2312,
                          "end": 2313,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2312,
                            "end": 2313,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2315,
                  "end": 2355,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2325,
                      "end": 2349,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2332,
                        "end": 2348,
                        "expression": {
                          "type": "Identifier",
                          "start": 2332,
                          "end": 2341,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2345,
                          "end": 2348
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2361,
              "end": 2452,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2368,
                "end": 2381,
                "decorators": [],
                "name": "awaitOrdered5",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2381,
                "end": 2452,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2381,
                  "end": 2403,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2382,
                      "end": 2402,
                      "name": {
                        "type": "Identifier",
                        "start": 2382,
                        "end": 2383,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2392,
                        "end": 2402,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2392,
                          "end": 2399,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2399,
                          "end": 2402,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2400,
                              "end": 2401,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2400,
                                "end": 2401,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2405,
                  "end": 2411,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2407,
                    "end": 2411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2407,
                      "end": 2408,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2408,
                      "end": 2411,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2409,
                          "end": 2410,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2409,
                            "end": 2410,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2412,
                  "end": 2452,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2422,
                      "end": 2446,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2429,
                        "end": 2445,
                        "expression": {
                          "type": "Identifier",
                          "start": 2429,
                          "end": 2438,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2442,
                          "end": 2445
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2458,
              "end": 2549,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2465,
                "end": 2478,
                "decorators": [],
                "name": "awaitOrdered6",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2478,
                "end": 2549,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2478,
                  "end": 2500,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2479,
                      "end": 2499,
                      "name": {
                        "type": "Identifier",
                        "start": 2479,
                        "end": 2480,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2489,
                        "end": 2499,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2489,
                          "end": 2496,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2496,
                          "end": 2499,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2497,
                              "end": 2498,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2497,
                                "end": 2498,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2502,
                  "end": 2508,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2504,
                    "end": 2508,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2504,
                      "end": 2505,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2505,
                      "end": 2508,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2506,
                          "end": 2507,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2506,
                            "end": 2507,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2509,
                  "end": 2549,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2519,
                      "end": 2543,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2526,
                        "end": 2542,
                        "expression": {
                          "type": "Identifier",
                          "start": 2526,
                          "end": 2535,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2539,
                          "end": 2542
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2555,
              "end": 2646,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2562,
                "end": 2575,
                "decorators": [],
                "name": "awaitOrdered7",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2575,
                "end": 2646,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2575,
                  "end": 2597,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2576,
                      "end": 2596,
                      "name": {
                        "type": "Identifier",
                        "start": 2576,
                        "end": 2577,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2586,
                        "end": 2596,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2586,
                          "end": 2593,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2593,
                          "end": 2596,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2594,
                              "end": 2595,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2594,
                                "end": 2595,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2599,
                  "end": 2605,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2601,
                    "end": 2605,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2601,
                      "end": 2602,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2602,
                      "end": 2605,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2603,
                          "end": 2604,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2603,
                            "end": 2604,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2606,
                  "end": 2646,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2616,
                      "end": 2640,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2623,
                        "end": 2639,
                        "expression": {
                          "type": "Identifier",
                          "start": 2623,
                          "end": 2632,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2636,
                          "end": 2639
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2652,
              "end": 2743,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2659,
                "end": 2672,
                "decorators": [],
                "name": "awaitOrdered8",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2672,
                "end": 2743,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2672,
                  "end": 2694,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2673,
                      "end": 2693,
                      "name": {
                        "type": "Identifier",
                        "start": 2673,
                        "end": 2674,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2683,
                        "end": 2693,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2683,
                          "end": 2690,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2690,
                          "end": 2693,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2691,
                              "end": 2692,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2691,
                                "end": 2692,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2696,
                  "end": 2702,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2698,
                    "end": 2702,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2698,
                      "end": 2699,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2699,
                      "end": 2702,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2700,
                          "end": 2701,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2700,
                            "end": 2701,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2703,
                  "end": 2743,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2713,
                      "end": 2737,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2720,
                        "end": 2736,
                        "expression": {
                          "type": "Identifier",
                          "start": 2720,
                          "end": 2729,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2733,
                          "end": 2736
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2749,
              "end": 2840,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2756,
                "end": 2769,
                "decorators": [],
                "name": "awaitOrdered9",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2769,
                "end": 2840,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2769,
                  "end": 2791,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2770,
                      "end": 2790,
                      "name": {
                        "type": "Identifier",
                        "start": 2770,
                        "end": 2771,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2780,
                        "end": 2790,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2780,
                          "end": 2787,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2787,
                          "end": 2790,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2788,
                              "end": 2789,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2788,
                                "end": 2789,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2793,
                  "end": 2799,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2795,
                    "end": 2799,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2795,
                      "end": 2796,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2796,
                      "end": 2799,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2797,
                          "end": 2798,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2797,
                            "end": 2798,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2800,
                  "end": 2840,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2810,
                      "end": 2834,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2817,
                        "end": 2833,
                        "expression": {
                          "type": "Identifier",
                          "start": 2817,
                          "end": 2826,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2830,
                          "end": 2833
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 2846,
              "end": 2935,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2853,
                "end": 2864,
                "decorators": [],
                "name": "awaitLatest",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2864,
                "end": 2935,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2864,
                  "end": 2886,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2865,
                      "end": 2885,
                      "name": {
                        "type": "Identifier",
                        "start": 2865,
                        "end": 2866,
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2875,
                        "end": 2885,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2875,
                          "end": 2882,
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2882,
                          "end": 2885,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2883,
                              "end": 2884,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2883,
                                "end": 2884,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2888,
                  "end": 2894,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2890,
                    "end": 2894,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2890,
                      "end": 2891,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2891,
                      "end": 2894,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2892,
                          "end": 2893,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2892,
                            "end": 2893,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 2895,
                  "end": 2935,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2905,
                      "end": 2929,
                      "argument": {
                        "type": "TSAsExpression",
                        "start": 2912,
                        "end": 2928,
                        "expression": {
                          "type": "Identifier",
                          "start": 2912,
                          "end": 2921,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2925,
                          "end": 2928
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2939,
      "end": 2973,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2946,
        "end": 2973,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2952,
          "end": 2953,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2953,
          "end": 2956,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2954,
              "end": 2955,
              "name": {
                "type": "Identifier",
                "start": 2954,
                "end": 2955,
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
        "superClass": {
          "type": "Identifier",
          "start": 2965,
          "end": 2966,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2966,
          "end": 2969,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2967,
              "end": 2968,
              "typeName": {
                "type": "Identifier",
                "start": 2967,
                "end": 2968,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 2970,
          "end": 2973,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
