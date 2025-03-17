__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 1872,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 88,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 102,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 111,
        "end": 115,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 130,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 129,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 123,
                "end": 129
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 147,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 163,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 164,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 166,
            "end": 178,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 171,
                "end": 177
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 199,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 208,
        "end": 212,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 213,
        "end": 230,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 219,
              "name": "bing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 259,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 259,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 239,
                "end": 259,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 243,
                  "end": 246,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 244,
                      "end": 245,
                      "name": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 245,
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
                    "start": 247,
                    "end": 251,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 248,
                      "end": 251,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 250,
                        "end": 251,
                        "typeName": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 251,
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
                  "start": 253,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 256,
                    "end": 259,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 256,
                      "end": 257,
                      "typeName": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 257,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "start": 261,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 294,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 294,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 269,
                "end": 294,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 273,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 274,
                      "end": 275,
                      "name": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
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
                    "start": 277,
                    "end": 281,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 278,
                      "end": 281,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 280,
                        "end": 281,
                        "typeName": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 281,
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
                  "start": 283,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 286,
                    "end": 294,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 286,
                      "end": 292
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
      "start": 296,
      "end": 326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 325,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 325,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 325,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 304,
                "end": 325,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 308,
                  "end": 311,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 309,
                      "end": 310,
                      "name": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 310,
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
                    "start": 312,
                    "end": 316,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 315,
                        "end": 316,
                        "typeName": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 316,
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
                  "start": 318,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 321,
                    "end": 325
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
      "start": 327,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 367,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 367,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 335,
                "end": 367,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 339,
                  "end": 345,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 340,
                      "end": 341,
                      "name": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 341,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 343,
                      "end": 344,
                      "name": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 344,
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
                    "start": 346,
                    "end": 350,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 347,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 349,
                        "end": 350,
                        "typeName": {
                          "type": "Identifier",
                          "start": 349,
                          "end": 350,
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
                    "start": 352,
                    "end": 356,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 353,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 355,
                        "end": 356,
                        "typeName": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 356,
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
                  "start": 358,
                  "end": 367,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 361,
                    "end": 367
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
      "start": 369,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 414,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 414,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 377,
                "end": 414,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 381,
                  "end": 387,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 382,
                      "end": 383,
                      "name": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 385,
                      "end": 386,
                      "name": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 386,
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
                    "start": 388,
                    "end": 408,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 408,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 391,
                        "end": 408,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 396,
                            "end": 402,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 399,
                              "end": 402,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 401,
                                "end": 402,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 401,
                                  "end": 402,
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
                          "start": 404,
                          "end": 408,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 407,
                            "end": 408,
                            "typeName": {
                              "type": "Identifier",
                              "start": 407,
                              "end": 408,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 410,
                  "end": 414,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 413,
                    "end": 414,
                    "typeName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
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
      "start": 416,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 477,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 477,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 424,
                "end": 477,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 428,
                  "end": 444,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 429,
                      "end": 443,
                      "name": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 439,
                        "end": 443,
                        "typeName": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 443,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
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
                    "start": 445,
                    "end": 471,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 471,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 448,
                        "end": 471,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 453,
                            "end": 459,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 456,
                              "end": 459,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 458,
                                "end": 459,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 459,
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
                          "start": 461,
                          "end": 471,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 464,
                            "end": 471,
                            "typeName": {
                              "type": "Identifier",
                              "start": 464,
                              "end": 471,
                              "name": "Derived",
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
                  "start": 473,
                  "end": 477,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 476,
                    "end": 477,
                    "typeName": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
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
      "start": 479,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 541,
            "name": "a11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 486,
              "end": 541,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 488,
                "end": 541,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 492,
                  "end": 495,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 493,
                      "end": 494,
                      "name": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 494,
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
                    "start": 496,
                    "end": 509,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 509,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 499,
                        "end": 509,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 501,
                            "end": 507,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 501,
                              "end": 504,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 504,
                              "end": 507,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 506,
                                "end": 507,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 506,
                                  "end": 507,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 511,
                    "end": 532,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 512,
                      "end": 532,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 514,
                        "end": 532,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 516,
                            "end": 523,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 519,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 524,
                            "end": 530,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 527,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 527,
                              "end": 530,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 529,
                                "end": 530,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 529,
                                  "end": 530,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 534,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 537,
                    "end": 541,
                    "typeName": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 541,
                      "name": "Base",
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
      "start": 543,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 585,
            "name": "a15",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 550,
              "end": 585,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 552,
                "end": 585,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 556,
                  "end": 559,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 557,
                      "end": 558,
                      "name": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 558,
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
                    "start": 560,
                    "end": 577,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 561,
                      "end": 577,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 563,
                        "end": 577,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 565,
                            "end": 570,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 565,
                              "end": 566,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 566,
                              "end": 569,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 568,
                                "end": 569,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 568,
                                  "end": 569,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 571,
                            "end": 575,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 571,
                              "end": 572,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 572,
                              "end": 575,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 574,
                                "end": 575,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 574,
                                  "end": 575,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 579,
                  "end": 585,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 582,
                    "end": 585,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 582,
                      "end": 583,
                      "typeName": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "start": 587,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 642,
            "name": "a16",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 642,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 596,
                "end": 642,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 600,
                  "end": 616,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 601,
                      "end": 615,
                      "name": {
                        "type": "Identifier",
                        "start": 601,
                        "end": 602,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 611,
                        "end": 615,
                        "typeName": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 615,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
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
                    "start": 617,
                    "end": 634,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 618,
                      "end": 634,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 620,
                        "end": 634,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 622,
                            "end": 627,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 622,
                              "end": 623,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 623,
                              "end": 626,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 625,
                                "end": 626,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 625,
                                  "end": 626,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 628,
                            "end": 632,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 628,
                              "end": 629,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 629,
                              "end": 632,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 631,
                                "end": 632,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 631,
                                  "end": 632,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 636,
                  "end": 642,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 639,
                    "end": 642,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 639,
                      "end": 640,
                      "typeName": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "start": 644,
      "end": 770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 648,
          "end": 769,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 769,
            "name": "a17",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 651,
              "end": 769,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 653,
                "end": 769,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 659,
                    "end": 708,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 663,
                      "end": 682,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 664,
                          "end": 681,
                          "name": {
                            "type": "Identifier",
                            "start": 664,
                            "end": 665,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 674,
                            "end": 681,
                            "typeName": {
                              "type": "Identifier",
                              "start": 674,
                              "end": 681,
                              "name": "Derived",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
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
                        "start": 683,
                        "end": 701,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 684,
                          "end": 701,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 686,
                            "end": 701,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 691,
                                "end": 695,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 692,
                                  "end": 695,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 694,
                                    "end": 695,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 694,
                                      "end": 695,
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
                              "start": 697,
                              "end": 701,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 700,
                                "end": 701,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 700,
                                  "end": 701,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 702,
                      "end": 707,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 704,
                        "end": 707,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 704,
                          "end": 705,
                          "typeName": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 705,
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
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 713,
                    "end": 759,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 717,
                      "end": 733,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 718,
                          "end": 732,
                          "name": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 719,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 728,
                            "end": 732,
                            "typeName": {
                              "type": "Identifier",
                              "start": 728,
                              "end": 732,
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
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
                        "start": 734,
                        "end": 752,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 735,
                          "end": 752,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 737,
                            "end": 752,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 742,
                                "end": 746,
                                "name": "a",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 743,
                                  "end": 746,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 745,
                                    "end": 746,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 745,
                                      "end": 746,
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
                              "start": 748,
                              "end": 752,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 751,
                                "end": 752,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 751,
                                  "end": 752,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 753,
                      "end": 758,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 755,
                        "end": 758,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 755,
                          "end": 756,
                          "typeName": {
                            "type": "Identifier",
                            "start": 755,
                            "end": 756,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                ]
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
      "start": 771,
      "end": 1005,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 1004,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 1004,
            "name": "a18",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 778,
              "end": 1004,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 780,
                "end": 1004,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 786,
                    "end": 891,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 882,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 792,
                          "end": 882,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 794,
                            "end": 882,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 804,
                                "end": 837,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 808,
                                  "end": 827,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 809,
                                      "end": 826,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 809,
                                        "end": 810,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 819,
                                        "end": 826,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 819,
                                          "end": 826,
                                          "name": "Derived",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
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
                                    "start": 828,
                                    "end": 832,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 829,
                                      "end": 832,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 831,
                                        "end": 832,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 831,
                                          "end": 832,
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
                                  "start": 833,
                                  "end": 836,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 835,
                                    "end": 836,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 835,
                                      "end": 836,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 846,
                                "end": 876,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 850,
                                  "end": 866,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 851,
                                      "end": 865,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 851,
                                        "end": 852,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 861,
                                        "end": 865,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 861,
                                          "end": 865,
                                          "name": "Base",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
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
                                    "start": 867,
                                    "end": 871,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 868,
                                      "end": 871,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 870,
                                        "end": 871,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 870,
                                          "end": 871,
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
                                  "start": 872,
                                  "end": 875,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 874,
                                    "end": 875,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 874,
                                      "end": 875,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
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
                      "start": 883,
                      "end": 890,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 885,
                        "end": 890,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 885,
                          "end": 888
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 896,
                    "end": 1002,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 901,
                        "end": 993,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 902,
                          "end": 993,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 904,
                            "end": 993,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 914,
                                "end": 948,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 918,
                                  "end": 938,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 919,
                                      "end": 937,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 919,
                                        "end": 920,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 929,
                                        "end": 937,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 929,
                                          "end": 937,
                                          "name": "Derived2",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
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
                                    "start": 939,
                                    "end": 943,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 940,
                                      "end": 943,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 942,
                                        "end": 943,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 942,
                                          "end": 943,
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
                                  "start": 944,
                                  "end": 947,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 946,
                                    "end": 947,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 946,
                                      "end": 947,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 957,
                                "end": 987,
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 961,
                                  "end": 977,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 962,
                                      "end": 976,
                                      "name": {
                                        "type": "Identifier",
                                        "start": 962,
                                        "end": 963,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 972,
                                        "end": 976,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 972,
                                          "end": 976,
                                          "name": "Base",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
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
                                    "start": 978,
                                    "end": 982,
                                    "name": "a",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 979,
                                      "end": 982,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 981,
                                        "end": 982,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 981,
                                          "end": 982,
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
                                  "start": 983,
                                  "end": 986,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 985,
                                    "end": 986,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 985,
                                      "end": 986,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
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
                      "start": 994,
                      "end": 1001,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 996,
                        "end": 1001,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 996,
                          "end": 999
                        }
                      }
                    }
                  }
                ]
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
      "start": 1007,
      "end": 1035,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1011,
          "end": 1034,
          "id": {
            "type": "Identifier",
            "start": 1011,
            "end": 1034,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1012,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1014,
                "end": 1034,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1018,
                  "end": 1021,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1019,
                      "end": 1020,
                      "name": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1020,
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
                    "start": 1022,
                    "end": 1026,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1023,
                      "end": 1026,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1025,
                        "end": 1026,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1025,
                          "end": 1026,
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
                  "start": 1028,
                  "end": 1034,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1031,
                    "end": 1034,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1031,
                      "end": 1032,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1032,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 1037,
      "end": 1043,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1037,
        "end": 1042,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1037,
          "end": 1038,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1041,
          "end": 1042,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1050,
      "end": 1056,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1050,
        "end": 1055,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1050,
          "end": 1051,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1054,
          "end": 1055,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1063,
      "end": 1097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1067,
          "end": 1096,
          "id": {
            "type": "Identifier",
            "start": 1067,
            "end": 1096,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1069,
              "end": 1096,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1071,
                "end": 1096,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1075,
                  "end": 1078,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1076,
                      "end": 1077,
                      "name": {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1077,
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
                    "start": 1079,
                    "end": 1083,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1080,
                      "end": 1083,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1082,
                        "end": 1083,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1082,
                          "end": 1083,
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
                  "start": 1085,
                  "end": 1096,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1088,
                    "end": 1096,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1088,
                      "end": 1094
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
      "type": "ExpressionStatement",
      "start": 1099,
      "end": 1107,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1099,
        "end": 1106,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1099,
          "end": 1101,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1104,
          "end": 1106,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1114,
      "end": 1122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1114,
        "end": 1121,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1114,
          "end": 1116,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1119,
          "end": 1121,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1129,
      "end": 1156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1133,
          "end": 1155,
          "id": {
            "type": "Identifier",
            "start": 1133,
            "end": 1155,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1135,
              "end": 1155,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1137,
                "end": 1155,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1141,
                  "end": 1144,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1142,
                      "end": 1143,
                      "name": {
                        "type": "Identifier",
                        "start": 1142,
                        "end": 1143,
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
                    "start": 1145,
                    "end": 1149,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1146,
                      "end": 1149,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1148,
                        "end": 1149,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1148,
                          "end": 1149,
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
                  "start": 1151,
                  "end": 1155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1154,
                    "end": 1155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1154,
                      "end": 1155,
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1158,
      "end": 1166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1158,
        "end": 1165,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1158,
          "end": 1160,
          "name": "a3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1163,
          "end": 1165,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1173,
      "end": 1181,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1173,
        "end": 1180,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1173,
          "end": 1175,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1178,
          "end": 1180,
          "name": "a3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1188,
      "end": 1229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1192,
          "end": 1228,
          "id": {
            "type": "Identifier",
            "start": 1192,
            "end": 1228,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1194,
              "end": 1228,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1196,
                "end": 1228,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1200,
                  "end": 1206,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1201,
                      "end": 1202,
                      "name": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1202,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1204,
                      "end": 1205,
                      "name": {
                        "type": "Identifier",
                        "start": 1204,
                        "end": 1205,
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
                    "start": 1207,
                    "end": 1211,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1208,
                      "end": 1211,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1210,
                        "end": 1211,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1210,
                          "end": 1211,
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
                    "start": 1213,
                    "end": 1217,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1214,
                      "end": 1217,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1216,
                        "end": 1217,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1216,
                          "end": 1217,
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
                  "start": 1219,
                  "end": 1228,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1222,
                    "end": 1228
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
      "type": "ExpressionStatement",
      "start": 1231,
      "end": 1239,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1231,
        "end": 1238,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1231,
          "end": 1233,
          "name": "a4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1236,
          "end": 1238,
          "name": "b4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1246,
      "end": 1254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1246,
        "end": 1253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1246,
          "end": 1248,
          "name": "b4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1251,
          "end": 1253,
          "name": "a4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1261,
      "end": 1307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1265,
          "end": 1306,
          "id": {
            "type": "Identifier",
            "start": 1265,
            "end": 1306,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1267,
              "end": 1306,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1269,
                "end": 1306,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1273,
                  "end": 1279,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1274,
                      "end": 1275,
                      "name": {
                        "type": "Identifier",
                        "start": 1274,
                        "end": 1275,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1277,
                      "end": 1278,
                      "name": {
                        "type": "Identifier",
                        "start": 1277,
                        "end": 1278,
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
                    "start": 1280,
                    "end": 1300,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1281,
                      "end": 1300,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1283,
                        "end": 1300,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1288,
                            "end": 1294,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1291,
                              "end": 1294,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1293,
                                "end": 1294,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1293,
                                  "end": 1294,
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
                          "start": 1296,
                          "end": 1300,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1299,
                            "end": 1300,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1299,
                              "end": 1300,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1302,
                  "end": 1306,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1305,
                    "end": 1306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1305,
                      "end": 1306,
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1309,
      "end": 1317,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1309,
        "end": 1316,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1309,
          "end": 1311,
          "name": "a5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1314,
          "end": 1316,
          "name": "b5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1324,
      "end": 1332,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1324,
        "end": 1331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1324,
          "end": 1326,
          "name": "b5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1329,
          "end": 1331,
          "name": "a5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1339,
      "end": 1414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1413,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1413,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1345,
              "end": 1413,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1347,
                "end": 1413,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1351,
                  "end": 1386,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1352,
                      "end": 1366,
                      "name": {
                        "type": "Identifier",
                        "start": 1352,
                        "end": 1353,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1362,
                        "end": 1366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1362,
                          "end": 1366,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1368,
                      "end": 1385,
                      "name": {
                        "type": "Identifier",
                        "start": 1368,
                        "end": 1369,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1378,
                        "end": 1385,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1378,
                          "end": 1385,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
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
                    "start": 1387,
                    "end": 1407,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1388,
                      "end": 1407,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1390,
                        "end": 1407,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1395,
                            "end": 1401,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1398,
                              "end": 1401,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1400,
                                "end": 1401,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1400,
                                  "end": 1401,
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
                          "start": 1403,
                          "end": 1407,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1406,
                            "end": 1407,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1406,
                              "end": 1407,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1409,
                  "end": 1413,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1412,
                    "end": 1413,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1412,
                      "end": 1413,
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1416,
      "end": 1424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1416,
        "end": 1423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1416,
          "end": 1418,
          "name": "a6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1421,
          "end": 1423,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1431,
      "end": 1439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1431,
        "end": 1438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1431,
          "end": 1433,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1436,
          "end": 1438,
          "name": "a6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1446,
      "end": 1512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1450,
          "end": 1511,
          "id": {
            "type": "Identifier",
            "start": 1450,
            "end": 1511,
            "name": "b11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1453,
              "end": 1511,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1455,
                "end": 1511,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1459,
                  "end": 1465,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1460,
                      "end": 1461,
                      "name": {
                        "type": "Identifier",
                        "start": 1460,
                        "end": 1461,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1463,
                      "end": 1464,
                      "name": {
                        "type": "Identifier",
                        "start": 1463,
                        "end": 1464,
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
                    "start": 1466,
                    "end": 1479,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1467,
                      "end": 1479,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1469,
                        "end": 1479,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1471,
                            "end": 1477,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1471,
                              "end": 1474,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1474,
                              "end": 1477,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1476,
                                "end": 1477,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1476,
                                  "end": 1477,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1481,
                    "end": 1502,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1482,
                      "end": 1502,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1484,
                        "end": 1502,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1486,
                            "end": 1493,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1486,
                              "end": 1489,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1489,
                              "end": 1492,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1491,
                                "end": 1492,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1491,
                                  "end": 1492,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1494,
                            "end": 1500,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1494,
                              "end": 1497,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1497,
                              "end": 1500,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1499,
                                "end": 1500,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1499,
                                  "end": 1500,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 1504,
                  "end": 1511,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1507,
                    "end": 1511,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1507,
                      "end": 1511,
                      "name": "Base",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1514,
      "end": 1524,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1514,
        "end": 1523,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1514,
          "end": 1517,
          "name": "a11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1520,
          "end": 1523,
          "name": "b11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1531,
      "end": 1541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1531,
        "end": 1540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1531,
          "end": 1534,
          "name": "b11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1537,
          "end": 1540,
          "name": "a11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1548,
      "end": 1595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1552,
          "end": 1594,
          "id": {
            "type": "Identifier",
            "start": 1552,
            "end": 1594,
            "name": "b15",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1555,
              "end": 1594,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1557,
                "end": 1594,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1561,
                  "end": 1567,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1562,
                      "end": 1563,
                      "name": {
                        "type": "Identifier",
                        "start": 1562,
                        "end": 1563,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1565,
                      "end": 1566,
                      "name": {
                        "type": "Identifier",
                        "start": 1565,
                        "end": 1566,
                        "name": "V",
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
                    "start": 1568,
                    "end": 1586,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1569,
                      "end": 1586,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1571,
                        "end": 1586,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1573,
                            "end": 1578,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1573,
                              "end": 1574,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1574,
                              "end": 1577,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1576,
                                "end": 1577,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1576,
                                  "end": 1577,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1579,
                            "end": 1584,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1579,
                              "end": 1580,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1580,
                              "end": 1583,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1582,
                                "end": 1583,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1582,
                                  "end": 1583,
                                  "name": "V",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 1588,
                  "end": 1594,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1591,
                    "end": 1594,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1591,
                      "end": 1592,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1591,
                        "end": 1592,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 1597,
      "end": 1607,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1597,
        "end": 1606,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1597,
          "end": 1600,
          "name": "a15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1603,
          "end": 1606,
          "name": "b15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1614,
      "end": 1624,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1614,
        "end": 1623,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1614,
          "end": 1617,
          "name": "b15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1620,
          "end": 1623,
          "name": "a15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1631,
      "end": 1674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1635,
          "end": 1673,
          "id": {
            "type": "Identifier",
            "start": 1635,
            "end": 1673,
            "name": "b16",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1638,
              "end": 1673,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1640,
                "end": 1673,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1644,
                  "end": 1647,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1645,
                      "end": 1646,
                      "name": {
                        "type": "Identifier",
                        "start": 1645,
                        "end": 1646,
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
                    "start": 1648,
                    "end": 1665,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1649,
                      "end": 1665,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1651,
                        "end": 1665,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1653,
                            "end": 1658,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1653,
                              "end": 1654,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1654,
                              "end": 1657,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1656,
                                "end": 1657,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1656,
                                  "end": 1657,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1659,
                            "end": 1663,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1659,
                              "end": 1660,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1660,
                              "end": 1663,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1662,
                                "end": 1663,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1662,
                                  "end": 1663,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                  "start": 1667,
                  "end": 1673,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1670,
                    "end": 1673,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1670,
                      "end": 1671,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1670,
                        "end": 1671,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 1676,
      "end": 1686,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1676,
        "end": 1685,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1676,
          "end": 1679,
          "name": "a15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1682,
          "end": 1685,
          "name": "b16",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1693,
      "end": 1703,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1693,
        "end": 1702,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1693,
          "end": 1696,
          "name": "b15",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1699,
          "end": 1702,
          "name": "a16",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1710,
      "end": 1754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1714,
          "end": 1753,
          "id": {
            "type": "Identifier",
            "start": 1714,
            "end": 1753,
            "name": "b17",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1717,
              "end": 1753,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1719,
                "end": 1753,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1723,
                  "end": 1726,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1724,
                      "end": 1725,
                      "name": {
                        "type": "Identifier",
                        "start": 1724,
                        "end": 1725,
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
                    "start": 1727,
                    "end": 1745,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1728,
                      "end": 1745,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1730,
                        "end": 1745,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1735,
                            "end": 1739,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1736,
                              "end": 1739,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1738,
                                "end": 1739,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1738,
                                  "end": 1739,
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
                          "start": 1741,
                          "end": 1745,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1744,
                            "end": 1745,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1744,
                              "end": 1745,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1747,
                  "end": 1753,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1750,
                    "end": 1753,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1750,
                      "end": 1751,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1750,
                        "end": 1751,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 1756,
      "end": 1766,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1756,
        "end": 1765,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1756,
          "end": 1759,
          "name": "a17",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1762,
          "end": 1765,
          "name": "b17",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1773,
      "end": 1783,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1773,
        "end": 1782,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1773,
          "end": 1776,
          "name": "b17",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1779,
          "end": 1782,
          "name": "a17",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1790,
      "end": 1836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1794,
          "end": 1835,
          "id": {
            "type": "Identifier",
            "start": 1794,
            "end": 1835,
            "name": "b18",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1797,
              "end": 1835,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1799,
                "end": 1835,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1804,
                    "end": 1825,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1805,
                      "end": 1825,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 1807,
                        "end": 1825,
                        "abstract": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 1811,
                          "end": 1814,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 1812,
                              "end": 1813,
                              "name": {
                                "type": "Identifier",
                                "start": 1812,
                                "end": 1813,
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
                            "start": 1815,
                            "end": 1819,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1816,
                              "end": 1819,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1818,
                                "end": 1819,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1818,
                                  "end": 1819,
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
                          "start": 1821,
                          "end": 1825,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1824,
                            "end": 1825,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1824,
                              "end": 1825,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1827,
                  "end": 1835,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1830,
                    "end": 1835,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1830,
                      "end": 1833
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
      "type": "ExpressionStatement",
      "start": 1838,
      "end": 1848,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1838,
        "end": 1847,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1838,
          "end": 1841,
          "name": "a18",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1844,
          "end": 1847,
          "name": "b18",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1855,
      "end": 1865,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1855,
        "end": 1864,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1855,
          "end": 1858,
          "name": "b18",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1861,
          "end": 1864,
          "name": "a18",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
