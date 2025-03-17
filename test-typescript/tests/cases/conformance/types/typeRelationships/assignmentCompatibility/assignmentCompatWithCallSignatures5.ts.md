__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 74,
  "end": 1753,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 101,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 101,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 145,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 131,
            "end": 143,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 115,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 193,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 179,
            "end": 191,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 169,
        "end": 176,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 226,
        "end": 243,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 228,
            "end": 241,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 232,
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 240,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 234,
                "end": 240
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 212,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 221,
        "end": 225,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 268,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 268,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 252,
                "end": 268,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 256,
                    "end": 260,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 257,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 259,
                        "end": 260,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
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
                  "start": 262,
                  "end": 268,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 265,
                    "end": 268,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 252,
                  "end": 255,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 253,
                      "end": 254,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 299,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 299,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 278,
                "end": 299,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 282,
                    "end": 286,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 283,
                      "end": 286,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 285,
                        "end": 286,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 286,
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
                  "start": 288,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 291,
                    "end": 299,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 291,
                      "end": 297
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 278,
                  "end": 281,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 279,
                      "end": 280,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 279,
                        "end": 280,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 326,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 326,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 309,
                "end": 326,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 313,
                    "end": 317,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 314,
                      "end": 317,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 316,
                        "end": 317,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
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
                  "start": 319,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 322,
                    "end": 326
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 309,
                  "end": 312,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 310,
                      "end": 311,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 363,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 363,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 336,
                "end": 363,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 342,
                    "end": 346,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 346,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 345,
                        "end": 346,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
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
                    "start": 348,
                    "end": 352,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 349,
                      "end": 352,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 351,
                        "end": 352,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
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
                  "start": 354,
                  "end": 363,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 357,
                    "end": 363
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 336,
                  "end": 341,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 337,
                      "end": 338,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 339,
                      "end": 340,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 340,
                        "decorators": [],
                        "name": "U",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 401,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 401,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 373,
                "end": 401,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 379,
                    "end": 395,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 380,
                      "end": 395,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 382,
                        "end": 395,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 383,
                            "end": 389,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 386,
                              "end": 389,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 388,
                                "end": 389,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 388,
                                  "end": 389,
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
                          "start": 391,
                          "end": 395,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 394,
                            "end": 395,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 394,
                              "end": 395,
                              "decorators": [],
                              "name": "U",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 397,
                  "end": 401,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 400,
                    "end": 401,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 373,
                  "end": 378,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 374,
                      "end": 375,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 376,
                      "end": 377,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
                        "decorators": [],
                        "name": "U",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 456,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 456,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 411,
                "end": 456,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 428,
                    "end": 450,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 429,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 431,
                        "end": 450,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 432,
                            "end": 438,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 435,
                              "end": 438,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 437,
                                "end": 438,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 437,
                                  "end": 438,
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
                          "start": 440,
                          "end": 450,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 443,
                            "end": 450,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 443,
                              "end": 450,
                              "decorators": [],
                              "name": "Derived",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 452,
                  "end": 456,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 455,
                    "end": 456,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 411,
                  "end": 427,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 412,
                      "end": 426,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 422,
                        "end": 426,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 426,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 516,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 516,
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 516,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 467,
                "end": 516,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 471,
                    "end": 484,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 472,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 474,
                        "end": 484,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 476,
                            "end": 482,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 476,
                              "end": 479,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 479,
                              "end": 482,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 481,
                                "end": 482,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 481,
                                  "end": 482,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 486,
                    "end": 507,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 487,
                      "end": 507,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 489,
                        "end": 507,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 491,
                            "end": 498,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 491,
                              "end": 494,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 494,
                              "end": 497,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 496,
                                "end": 497,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 496,
                                  "end": 497,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 499,
                            "end": 505,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 499,
                              "end": 502,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 502,
                              "end": 505,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 504,
                                "end": 505,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 504,
                                  "end": 505,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 509,
                  "end": 516,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 512,
                    "end": 516,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 512,
                      "end": 516,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 467,
                  "end": 470,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 468,
                      "end": 469,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 469,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 556,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 556,
            "decorators": [],
            "name": "a15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 556,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 527,
                "end": 556,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 531,
                    "end": 548,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 548,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 534,
                        "end": 548,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 536,
                            "end": 541,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 536,
                              "end": 537,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 537,
                              "end": 540,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 539,
                                "end": 540,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 539,
                                  "end": 540,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 542,
                            "end": 546,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 542,
                              "end": 543,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 543,
                              "end": 546,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 545,
                                "end": 546,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 545,
                                  "end": 546,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 550,
                  "end": 556,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 553,
                    "end": 556,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 553,
                      "end": 554,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 527,
                  "end": 530,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 528,
                      "end": 529,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 528,
                        "end": 529,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 609,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 609,
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 609,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 567,
                "end": 609,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 584,
                    "end": 601,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 585,
                      "end": 601,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 587,
                        "end": 601,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 589,
                            "end": 594,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 589,
                              "end": 590,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 590,
                              "end": 593,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 592,
                                "end": 593,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 592,
                                  "end": 593,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 595,
                            "end": 599,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 595,
                              "end": 596,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 596,
                              "end": 599,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 598,
                                "end": 599,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 598,
                                  "end": 599,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 603,
                  "end": 609,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 606,
                    "end": 609,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 606,
                      "end": 607,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 606,
                        "end": 607,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 567,
                  "end": 583,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 568,
                      "end": 582,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 578,
                        "end": 582,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 582,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 569,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 611,
      "end": 721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 720,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 720,
            "decorators": [],
            "name": "a17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 720,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 620,
                "end": 720,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 626,
                    "end": 667,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 646,
                        "end": 660,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 647,
                          "end": 660,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 649,
                            "end": 660,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 650,
                                "end": 654,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 651,
                                  "end": 654,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 653,
                                    "end": 654,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 653,
                                      "end": 654,
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
                              "start": 656,
                              "end": 660,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 659,
                                "end": 660,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 659,
                                  "end": 660,
                                  "decorators": [],
                                  "name": "T",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 661,
                      "end": 666,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 663,
                        "end": 666,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 663,
                          "end": 664,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 663,
                            "end": 664,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 626,
                      "end": 645,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 627,
                          "end": 644,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 637,
                            "end": 644,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 637,
                              "end": 644,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 627,
                            "end": 628,
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
                    "type": "TSCallSignatureDeclaration",
                    "start": 672,
                    "end": 710,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 689,
                        "end": 703,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 690,
                          "end": 703,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 692,
                            "end": 703,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 693,
                                "end": 697,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 694,
                                  "end": 697,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 696,
                                    "end": 697,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 696,
                                      "end": 697,
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
                              "start": 699,
                              "end": 703,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 702,
                                "end": 703,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 702,
                                  "end": 703,
                                  "decorators": [],
                                  "name": "T",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 704,
                      "end": 709,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 706,
                        "end": 709,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 706,
                          "end": 707,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 707,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 672,
                      "end": 688,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 673,
                          "end": 687,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 683,
                            "end": 687,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 687,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 673,
                            "end": 674,
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
      "start": 722,
      "end": 932,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 931,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 931,
            "decorators": [],
            "name": "a18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 729,
              "end": 931,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 731,
                "end": 931,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 737,
                    "end": 830,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 738,
                        "end": 821,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 739,
                          "end": 821,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 741,
                            "end": 821,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 751,
                                "end": 780,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 771,
                                    "end": 775,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 772,
                                      "end": 775,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 774,
                                        "end": 775,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 774,
                                          "end": 775,
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
                                  "start": 776,
                                  "end": 779,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 778,
                                    "end": 779,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 778,
                                      "end": 779,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 751,
                                  "end": 770,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 752,
                                      "end": 769,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 762,
                                        "end": 769,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 762,
                                          "end": 769,
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "default": null,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 752,
                                        "end": 753,
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
                                "type": "TSCallSignatureDeclaration",
                                "start": 789,
                                "end": 815,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 806,
                                    "end": 810,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 807,
                                      "end": 810,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 809,
                                        "end": 810,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 809,
                                          "end": 810,
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
                                  "start": 811,
                                  "end": 814,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 813,
                                    "end": 814,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 813,
                                      "end": 814,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 789,
                                  "end": 805,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 790,
                                      "end": 804,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 800,
                                        "end": 804,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 800,
                                          "end": 804,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "default": null,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 790,
                                        "end": 791,
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
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 822,
                      "end": 829,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 824,
                        "end": 829,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 824,
                          "end": 827
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 835,
                    "end": 929,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 836,
                        "end": 920,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 837,
                          "end": 920,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 839,
                            "end": 920,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 849,
                                "end": 879,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 870,
                                    "end": 874,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 871,
                                      "end": 874,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 873,
                                        "end": 874,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 873,
                                          "end": 874,
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
                                  "start": 875,
                                  "end": 878,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 877,
                                    "end": 878,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 877,
                                      "end": 878,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 849,
                                  "end": 869,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 850,
                                      "end": 868,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 860,
                                        "end": 868,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 860,
                                          "end": 868,
                                          "decorators": [],
                                          "name": "Derived2",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "default": null,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 850,
                                        "end": 851,
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
                                "type": "TSCallSignatureDeclaration",
                                "start": 888,
                                "end": 914,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 905,
                                    "end": 909,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 906,
                                      "end": 909,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 908,
                                        "end": 909,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 908,
                                          "end": 909,
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
                                  "start": 910,
                                  "end": 913,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 912,
                                    "end": 913,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 912,
                                      "end": 913,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 888,
                                  "end": 904,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 889,
                                      "end": 903,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 899,
                                        "end": 903,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 899,
                                          "end": 903,
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "default": null,
                                      "in": false,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 889,
                                        "end": 890,
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
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 921,
                      "end": 928,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 923,
                        "end": 928,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 923,
                          "end": 926
                        }
                      }
                    },
                    "typeParameters": null
                  }
                ]
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
      "start": 934,
      "end": 958,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 938,
          "end": 957,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 938,
            "end": 957,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 939,
              "end": 957,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 941,
                "end": 957,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 945,
                    "end": 949,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 946,
                      "end": 949,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 948,
                        "end": 949,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 948,
                          "end": 949,
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
                  "start": 951,
                  "end": 957,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 954,
                    "end": 957,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 954,
                      "end": 955,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 954,
                        "end": 955,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 941,
                  "end": 944,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 942,
                      "end": 943,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 942,
                        "end": 943,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 960,
      "end": 966,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 960,
        "end": 965,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 960,
          "end": 961,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 964,
          "end": 965,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 973,
      "end": 979,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 973,
        "end": 978,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 973,
          "end": 974,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 977,
          "end": 978,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 986,
      "end": 1016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 990,
          "end": 1015,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 990,
            "end": 1015,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 992,
              "end": 1015,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 994,
                "end": 1015,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 998,
                    "end": 1002,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 999,
                      "end": 1002,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1001,
                        "end": 1002,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1001,
                          "end": 1002,
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
                  "start": 1004,
                  "end": 1015,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1007,
                    "end": 1015,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1007,
                      "end": 1013
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 994,
                  "end": 997,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 995,
                      "end": 996,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 995,
                        "end": 996,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1018,
      "end": 1026,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1018,
        "end": 1025,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1018,
          "end": 1020,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1023,
          "end": 1025,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1033,
      "end": 1041,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1033,
        "end": 1040,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1033,
          "end": 1035,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1038,
          "end": 1040,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1048,
      "end": 1071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1052,
          "end": 1070,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1052,
            "end": 1070,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1054,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1056,
                "end": 1070,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1060,
                    "end": 1064,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1061,
                      "end": 1064,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1063,
                        "end": 1064,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1064,
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
                  "start": 1066,
                  "end": 1070,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1069,
                    "end": 1070,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1070,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1056,
                  "end": 1059,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1057,
                      "end": 1058,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1057,
                        "end": 1058,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1073,
      "end": 1081,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1073,
        "end": 1080,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1073,
          "end": 1075,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1078,
          "end": 1080,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1088,
      "end": 1096,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1088,
        "end": 1095,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1088,
          "end": 1090,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1093,
          "end": 1095,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1103,
      "end": 1140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1107,
          "end": 1139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1107,
            "end": 1139,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1109,
              "end": 1139,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1111,
                "end": 1139,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1118,
                    "end": 1122,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1119,
                      "end": 1122,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1121,
                        "end": 1122,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1121,
                          "end": 1122,
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
                    "start": 1124,
                    "end": 1128,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1125,
                      "end": 1128,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1127,
                        "end": 1128,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1127,
                          "end": 1128,
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
                  "start": 1130,
                  "end": 1139,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1133,
                    "end": 1139
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1111,
                  "end": 1117,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1112,
                      "end": 1113,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1112,
                        "end": 1113,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1115,
                      "end": 1116,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1115,
                        "end": 1116,
                        "decorators": [],
                        "name": "U",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1142,
      "end": 1150,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1142,
        "end": 1149,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1142,
          "end": 1144,
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1147,
          "end": 1149,
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1157,
      "end": 1165,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1157,
        "end": 1164,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1157,
          "end": 1159,
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1162,
          "end": 1164,
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1172,
      "end": 1210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1176,
          "end": 1209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1176,
            "end": 1209,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1178,
              "end": 1209,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1180,
                "end": 1209,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1187,
                    "end": 1203,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1188,
                      "end": 1203,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1190,
                        "end": 1203,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1191,
                            "end": 1197,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1194,
                              "end": 1197,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1196,
                                "end": 1197,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1196,
                                  "end": 1197,
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
                          "start": 1199,
                          "end": 1203,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1202,
                            "end": 1203,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1202,
                              "end": 1203,
                              "decorators": [],
                              "name": "U",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1205,
                  "end": 1209,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1208,
                    "end": 1209,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1208,
                      "end": 1209,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1180,
                  "end": 1186,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1181,
                      "end": 1182,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1181,
                        "end": 1182,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1184,
                      "end": 1185,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1184,
                        "end": 1185,
                        "decorators": [],
                        "name": "U",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1212,
      "end": 1220,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1212,
        "end": 1219,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1212,
          "end": 1214,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1217,
          "end": 1219,
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1227,
      "end": 1235,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1227,
        "end": 1234,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1227,
          "end": 1229,
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1232,
          "end": 1234,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1242,
      "end": 1309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1246,
          "end": 1308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1246,
            "end": 1308,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1248,
              "end": 1308,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1250,
                "end": 1308,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1286,
                    "end": 1302,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1287,
                      "end": 1302,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1289,
                        "end": 1302,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1290,
                            "end": 1296,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1293,
                              "end": 1296,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1295,
                                "end": 1296,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1295,
                                  "end": 1296,
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
                          "start": 1298,
                          "end": 1302,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1301,
                            "end": 1302,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1301,
                              "end": 1302,
                              "decorators": [],
                              "name": "U",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1304,
                  "end": 1308,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1307,
                    "end": 1308,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1307,
                      "end": 1308,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1250,
                  "end": 1285,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1251,
                      "end": 1265,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1261,
                        "end": 1265,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1261,
                          "end": 1265,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1251,
                        "end": 1252,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1267,
                      "end": 1284,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1277,
                        "end": 1284,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1277,
                          "end": 1284,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1267,
                        "end": 1268,
                        "decorators": [],
                        "name": "U",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1311,
      "end": 1319,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1311,
        "end": 1318,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1311,
          "end": 1313,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1316,
          "end": 1318,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1326,
      "end": 1334,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1326,
        "end": 1333,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1326,
          "end": 1328,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1331,
          "end": 1333,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1341,
      "end": 1403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1345,
          "end": 1402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1345,
            "end": 1402,
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1348,
              "end": 1402,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1350,
                "end": 1402,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1370,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1358,
                      "end": 1370,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1360,
                        "end": 1370,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1362,
                            "end": 1368,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1362,
                              "end": 1365,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1365,
                              "end": 1368,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1367,
                                "end": 1368,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1367,
                                  "end": 1368,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1372,
                    "end": 1393,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1373,
                      "end": 1393,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1375,
                        "end": 1393,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1377,
                            "end": 1384,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1377,
                              "end": 1380,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1380,
                              "end": 1383,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1382,
                                "end": 1383,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1382,
                                  "end": 1383,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1385,
                            "end": 1391,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1385,
                              "end": 1388,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1388,
                              "end": 1391,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1390,
                                "end": 1391,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1390,
                                  "end": 1391,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1395,
                  "end": 1402,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1398,
                    "end": 1402,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1398,
                      "end": 1402,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1350,
                  "end": 1356,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1351,
                      "end": 1352,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1351,
                        "end": 1352,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1354,
                      "end": 1355,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1354,
                        "end": 1355,
                        "decorators": [],
                        "name": "U",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1405,
      "end": 1415,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1405,
        "end": 1414,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1405,
          "end": 1408,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1411,
          "end": 1414,
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1422,
      "end": 1432,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1422,
        "end": 1431,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1422,
          "end": 1425,
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1428,
          "end": 1431,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1439,
      "end": 1482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1443,
          "end": 1481,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1443,
            "end": 1481,
            "decorators": [],
            "name": "b15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1446,
              "end": 1481,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1448,
                "end": 1481,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1455,
                    "end": 1473,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1456,
                      "end": 1473,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1458,
                        "end": 1473,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1460,
                            "end": 1465,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1460,
                              "end": 1461,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1461,
                              "end": 1464,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1463,
                                "end": 1464,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1463,
                                  "end": 1464,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1466,
                            "end": 1471,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1466,
                              "end": 1467,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1467,
                              "end": 1470,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1469,
                                "end": 1470,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1469,
                                  "end": 1470,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1475,
                  "end": 1481,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1478,
                    "end": 1481,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1478,
                      "end": 1479,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1478,
                        "end": 1479,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1448,
                  "end": 1454,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1449,
                      "end": 1450,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1449,
                        "end": 1450,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1452,
                      "end": 1453,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1452,
                        "end": 1453,
                        "decorators": [],
                        "name": "V",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1484,
      "end": 1494,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1484,
        "end": 1493,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1484,
          "end": 1487,
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1490,
          "end": 1493,
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1525,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1515,
        "end": 1524,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1515,
          "end": 1518,
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1521,
          "end": 1524,
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1532,
      "end": 1571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1536,
          "end": 1570,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1536,
            "end": 1570,
            "decorators": [],
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1539,
              "end": 1570,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1541,
                "end": 1570,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1545,
                    "end": 1562,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1546,
                      "end": 1562,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1548,
                        "end": 1562,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1550,
                            "end": 1555,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1550,
                              "end": 1551,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1551,
                              "end": 1554,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1553,
                                "end": 1554,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1553,
                                  "end": 1554,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1556,
                            "end": 1560,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1556,
                              "end": 1557,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1557,
                              "end": 1560,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1559,
                                "end": 1560,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1559,
                                  "end": 1560,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1564,
                  "end": 1570,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1567,
                    "end": 1570,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1567,
                      "end": 1568,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1567,
                        "end": 1568,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1541,
                  "end": 1544,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1542,
                      "end": 1543,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1542,
                        "end": 1543,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1573,
      "end": 1583,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1573,
        "end": 1582,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1573,
          "end": 1576,
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1579,
          "end": 1582,
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1590,
      "end": 1600,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1590,
        "end": 1599,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1590,
          "end": 1593,
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1596,
          "end": 1599,
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1607,
      "end": 1643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1611,
          "end": 1642,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1611,
            "end": 1642,
            "decorators": [],
            "name": "b17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1614,
              "end": 1642,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1616,
                "end": 1642,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1620,
                    "end": 1634,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1621,
                      "end": 1634,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1623,
                        "end": 1634,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1624,
                            "end": 1628,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1625,
                              "end": 1628,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1627,
                                "end": 1628,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1627,
                                  "end": 1628,
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
                          "start": 1630,
                          "end": 1634,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1633,
                            "end": 1634,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1633,
                              "end": 1634,
                              "decorators": [],
                              "name": "T",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1636,
                  "end": 1642,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1639,
                    "end": 1642,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1639,
                      "end": 1640,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1639,
                        "end": 1640,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1616,
                  "end": 1619,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1617,
                      "end": 1618,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1617,
                        "end": 1618,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 1645,
      "end": 1655,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1645,
        "end": 1654,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1645,
          "end": 1648,
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1651,
          "end": 1654,
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1662,
      "end": 1672,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1662,
        "end": 1671,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1662,
          "end": 1665,
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1668,
          "end": 1671,
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1679,
      "end": 1717,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1683,
          "end": 1716,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1683,
            "end": 1716,
            "decorators": [],
            "name": "b18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1686,
              "end": 1716,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1688,
                "end": 1716,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1689,
                    "end": 1706,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1690,
                      "end": 1706,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1692,
                        "end": 1706,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1696,
                            "end": 1700,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1697,
                              "end": 1700,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1699,
                                "end": 1700,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1699,
                                  "end": 1700,
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
                          "start": 1702,
                          "end": 1706,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1705,
                            "end": 1706,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1705,
                              "end": 1706,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 1692,
                          "end": 1695,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 1693,
                              "end": 1694,
                              "const": false,
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 1693,
                                "end": 1694,
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1708,
                  "end": 1716,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1711,
                    "end": 1716,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1711,
                      "end": 1714
                    }
                  }
                },
                "typeParameters": null
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
      "type": "ExpressionStatement",
      "start": 1719,
      "end": 1729,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1719,
        "end": 1728,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1719,
          "end": 1722,
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1725,
          "end": 1728,
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1736,
      "end": 1746,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1736,
        "end": 1745,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1736,
          "end": 1739,
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1742,
          "end": 1745,
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
