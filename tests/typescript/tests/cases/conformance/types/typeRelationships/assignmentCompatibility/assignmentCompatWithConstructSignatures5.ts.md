__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 74,
            "end": 86
          }
        ],
        "start": 72,
        "end": 88
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 88
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 102
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 115
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 123,
                "end": 129
              },
              "start": 121,
              "end": 129
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 118,
            "end": 130
          }
        ],
        "start": 116,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 132
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 147
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 163
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 171,
                "end": 177
              },
              "start": 169,
              "end": 177
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 166,
            "end": 178
          }
        ],
        "start": 164,
        "end": 180
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 180
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 199
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 212
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
              },
              "start": 219,
              "end": 227
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 215,
            "end": 228
          }
        ],
        "start": 213,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 244,
                        "end": 245
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 244,
                      "end": 245
                    }
                  ],
                  "start": 243,
                  "end": 246
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 251
                        },
                        "typeArguments": null,
                        "start": 250,
                        "end": 251
                      },
                      "start": 248,
                      "end": 251
                    },
                    "start": 247,
                    "end": 251
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 257
                      },
                      "typeArguments": null,
                      "start": 256,
                      "end": 257
                    },
                    "start": 256,
                    "end": 259
                  },
                  "start": 253,
                  "end": 259
                },
                "start": 239,
                "end": 259
              },
              "start": 237,
              "end": 259
            },
            "start": 236,
            "end": 259
          },
          "init": null,
          "definite": false,
          "start": 236,
          "end": 259
        }
      ],
      "declare": false,
      "start": 232,
      "end": 260
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 274,
                      "end": 275
                    }
                  ],
                  "start": 273,
                  "end": 276
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 280,
                          "end": 281
                        },
                        "typeArguments": null,
                        "start": 280,
                        "end": 281
                      },
                      "start": 278,
                      "end": 281
                    },
                    "start": 277,
                    "end": 281
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 286,
                      "end": 292
                    },
                    "start": 286,
                    "end": 294
                  },
                  "start": 283,
                  "end": 294
                },
                "start": 269,
                "end": 294
              },
              "start": 267,
              "end": 294
            },
            "start": 265,
            "end": 294
          },
          "init": null,
          "definite": false,
          "start": 265,
          "end": 294
        }
      ],
      "declare": false,
      "start": 261,
      "end": 295
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 309,
                      "end": 310
                    }
                  ],
                  "start": 308,
                  "end": 311
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 316
                        },
                        "typeArguments": null,
                        "start": 315,
                        "end": 316
                      },
                      "start": 313,
                      "end": 316
                    },
                    "start": 312,
                    "end": 316
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 321,
                    "end": 325
                  },
                  "start": 318,
                  "end": 325
                },
                "start": 304,
                "end": 325
              },
              "start": 302,
              "end": 325
            },
            "start": 300,
            "end": 325
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 325
        }
      ],
      "declare": false,
      "start": 296,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 341
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 340,
                      "end": 341
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 344
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 343,
                      "end": 344
                    }
                  ],
                  "start": 339,
                  "end": 345
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 349,
                          "end": 350
                        },
                        "typeArguments": null,
                        "start": 349,
                        "end": 350
                      },
                      "start": 347,
                      "end": 350
                    },
                    "start": 346,
                    "end": 350
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 355,
                          "end": 356
                        },
                        "typeArguments": null,
                        "start": 355,
                        "end": 356
                      },
                      "start": 353,
                      "end": 356
                    },
                    "start": 352,
                    "end": 356
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 361,
                    "end": 367
                  },
                  "start": 358,
                  "end": 367
                },
                "start": 335,
                "end": 367
              },
              "start": 333,
              "end": 367
            },
            "start": 331,
            "end": 367
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 367
        }
      ],
      "declare": false,
      "start": 327,
      "end": 368
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 383
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 382,
                      "end": 383
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 385,
                        "end": 386
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 385,
                      "end": 386
                    }
                  ],
                  "start": 381,
                  "end": 387
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 401,
                                  "end": 402
                                },
                                "typeArguments": null,
                                "start": 401,
                                "end": 402
                              },
                              "start": 399,
                              "end": 402
                            },
                            "start": 396,
                            "end": 402
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 407,
                              "end": 408
                            },
                            "typeArguments": null,
                            "start": 407,
                            "end": 408
                          },
                          "start": 404,
                          "end": 408
                        },
                        "start": 391,
                        "end": 408
                      },
                      "start": 389,
                      "end": 408
                    },
                    "start": 388,
                    "end": 408
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 414
                    },
                    "typeArguments": null,
                    "start": 413,
                    "end": 414
                  },
                  "start": 410,
                  "end": 414
                },
                "start": 377,
                "end": 414
              },
              "start": 375,
              "end": 414
            },
            "start": 373,
            "end": 414
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 414
        }
      ],
      "declare": false,
      "start": 369,
      "end": 415
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 430
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 443
                        },
                        "typeArguments": null,
                        "start": 439,
                        "end": 443
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 429,
                      "end": 443
                    }
                  ],
                  "start": 428,
                  "end": 444
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 458,
                                  "end": 459
                                },
                                "typeArguments": null,
                                "start": 458,
                                "end": 459
                              },
                              "start": 456,
                              "end": 459
                            },
                            "start": 453,
                            "end": 459
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 464,
                              "end": 471
                            },
                            "typeArguments": null,
                            "start": 464,
                            "end": 471
                          },
                          "start": 461,
                          "end": 471
                        },
                        "start": 448,
                        "end": 471
                      },
                      "start": 446,
                      "end": 471
                    },
                    "start": 445,
                    "end": 471
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "typeArguments": null,
                    "start": 476,
                    "end": 477
                  },
                  "start": 473,
                  "end": 477
                },
                "start": 424,
                "end": 477
              },
              "start": 422,
              "end": 477
            },
            "start": 420,
            "end": 477
          },
          "init": null,
          "definite": false,
          "start": 420,
          "end": 477
        }
      ],
      "declare": false,
      "start": 416,
      "end": 478
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 493,
                        "end": 494
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 493,
                      "end": 494
                    }
                  ],
                  "start": 492,
                  "end": 495
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 501,
                              "end": 504
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 506,
                                  "end": 507
                                },
                                "typeArguments": null,
                                "start": 506,
                                "end": 507
                              },
                              "start": 504,
                              "end": 507
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 501,
                            "end": 507
                          }
                        ],
                        "start": 499,
                        "end": 509
                      },
                      "start": 497,
                      "end": 509
                    },
                    "start": 496,
                    "end": 509
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 516,
                              "end": 519
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 521,
                                  "end": 522
                                },
                                "typeArguments": null,
                                "start": 521,
                                "end": 522
                              },
                              "start": 519,
                              "end": 522
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 516,
                            "end": 523
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 527
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 529,
                                  "end": 530
                                },
                                "typeArguments": null,
                                "start": 529,
                                "end": 530
                              },
                              "start": 527,
                              "end": 530
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 524,
                            "end": 530
                          }
                        ],
                        "start": 514,
                        "end": 532
                      },
                      "start": 512,
                      "end": 532
                    },
                    "start": 511,
                    "end": 532
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 541
                    },
                    "typeArguments": null,
                    "start": 537,
                    "end": 541
                  },
                  "start": 534,
                  "end": 541
                },
                "start": 488,
                "end": 541
              },
              "start": 486,
              "end": 541
            },
            "start": 483,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 541
        }
      ],
      "declare": false,
      "start": 479,
      "end": 542
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 558
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 557,
                      "end": 558
                    }
                  ],
                  "start": 556,
                  "end": 559
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 565,
                              "end": 566
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 568,
                                  "end": 569
                                },
                                "typeArguments": null,
                                "start": 568,
                                "end": 569
                              },
                              "start": 566,
                              "end": 569
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 565,
                            "end": 570
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 571,
                              "end": 572
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 574,
                                  "end": 575
                                },
                                "typeArguments": null,
                                "start": 574,
                                "end": 575
                              },
                              "start": 572,
                              "end": 575
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 571,
                            "end": 575
                          }
                        ],
                        "start": 563,
                        "end": 577
                      },
                      "start": 561,
                      "end": 577
                    },
                    "start": 560,
                    "end": 577
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 583
                      },
                      "typeArguments": null,
                      "start": 582,
                      "end": 583
                    },
                    "start": 582,
                    "end": 585
                  },
                  "start": 579,
                  "end": 585
                },
                "start": 552,
                "end": 585
              },
              "start": 550,
              "end": 585
            },
            "start": 547,
            "end": 585
          },
          "init": null,
          "definite": false,
          "start": 547,
          "end": 585
        }
      ],
      "declare": false,
      "start": 543,
      "end": 586
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 602
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 615
                        },
                        "typeArguments": null,
                        "start": 611,
                        "end": 615
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 601,
                      "end": 615
                    }
                  ],
                  "start": 600,
                  "end": 616
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 622,
                              "end": 623
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 625,
                                  "end": 626
                                },
                                "typeArguments": null,
                                "start": 625,
                                "end": 626
                              },
                              "start": 623,
                              "end": 626
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 622,
                            "end": 627
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 628,
                              "end": 629
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 631,
                                  "end": 632
                                },
                                "typeArguments": null,
                                "start": 631,
                                "end": 632
                              },
                              "start": 629,
                              "end": 632
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 628,
                            "end": 632
                          }
                        ],
                        "start": 620,
                        "end": 634
                      },
                      "start": 618,
                      "end": 634
                    },
                    "start": 617,
                    "end": 634
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 640
                      },
                      "typeArguments": null,
                      "start": 639,
                      "end": 640
                    },
                    "start": 639,
                    "end": 642
                  },
                  "start": 636,
                  "end": 642
                },
                "start": 596,
                "end": 642
              },
              "start": 594,
              "end": 642
            },
            "start": 591,
            "end": 642
          },
          "init": null,
          "definite": false,
          "start": 591,
          "end": 642
        }
      ],
      "declare": false,
      "start": 587,
      "end": 643
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 664,
                            "end": 665
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 674,
                              "end": 681
                            },
                            "typeArguments": null,
                            "start": 674,
                            "end": 681
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 664,
                          "end": 681
                        }
                      ],
                      "start": 663,
                      "end": 682
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 694,
                                      "end": 695
                                    },
                                    "typeArguments": null,
                                    "start": 694,
                                    "end": 695
                                  },
                                  "start": 692,
                                  "end": 695
                                },
                                "start": 691,
                                "end": 695
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 700,
                                  "end": 701
                                },
                                "typeArguments": null,
                                "start": 700,
                                "end": 701
                              },
                              "start": 697,
                              "end": 701
                            },
                            "start": 686,
                            "end": 701
                          },
                          "start": 684,
                          "end": 701
                        },
                        "start": 683,
                        "end": 701
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 705
                          },
                          "typeArguments": null,
                          "start": 704,
                          "end": 705
                        },
                        "start": 704,
                        "end": 707
                      },
                      "start": 702,
                      "end": 707
                    },
                    "start": 659,
                    "end": 708
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 718,
                            "end": 719
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 728,
                              "end": 732
                            },
                            "typeArguments": null,
                            "start": 728,
                            "end": 732
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 718,
                          "end": 732
                        }
                      ],
                      "start": 717,
                      "end": 733
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 745,
                                      "end": 746
                                    },
                                    "typeArguments": null,
                                    "start": 745,
                                    "end": 746
                                  },
                                  "start": 743,
                                  "end": 746
                                },
                                "start": 742,
                                "end": 746
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 751,
                                  "end": 752
                                },
                                "typeArguments": null,
                                "start": 751,
                                "end": 752
                              },
                              "start": 748,
                              "end": 752
                            },
                            "start": 737,
                            "end": 752
                          },
                          "start": 735,
                          "end": 752
                        },
                        "start": 734,
                        "end": 752
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 755,
                            "end": 756
                          },
                          "typeArguments": null,
                          "start": 755,
                          "end": 756
                        },
                        "start": 755,
                        "end": 758
                      },
                      "start": 753,
                      "end": 758
                    },
                    "start": 713,
                    "end": 759
                  }
                ],
                "start": 653,
                "end": 769
              },
              "start": 651,
              "end": 769
            },
            "start": 648,
            "end": 769
          },
          "init": null,
          "definite": false,
          "start": 648,
          "end": 769
        }
      ],
      "declare": false,
      "start": 644,
      "end": 770
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 809,
                                        "end": 810
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 819,
                                          "end": 826
                                        },
                                        "typeArguments": null,
                                        "start": 819,
                                        "end": 826
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 809,
                                      "end": 826
                                    }
                                  ],
                                  "start": 808,
                                  "end": 827
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 831,
                                          "end": 832
                                        },
                                        "typeArguments": null,
                                        "start": 831,
                                        "end": 832
                                      },
                                      "start": 829,
                                      "end": 832
                                    },
                                    "start": 828,
                                    "end": 832
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 835,
                                      "end": 836
                                    },
                                    "typeArguments": null,
                                    "start": 835,
                                    "end": 836
                                  },
                                  "start": 833,
                                  "end": 836
                                },
                                "start": 804,
                                "end": 837
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 851,
                                        "end": 852
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 861,
                                          "end": 865
                                        },
                                        "typeArguments": null,
                                        "start": 861,
                                        "end": 865
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 851,
                                      "end": 865
                                    }
                                  ],
                                  "start": 850,
                                  "end": 866
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 870,
                                          "end": 871
                                        },
                                        "typeArguments": null,
                                        "start": 870,
                                        "end": 871
                                      },
                                      "start": 868,
                                      "end": 871
                                    },
                                    "start": 867,
                                    "end": 871
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 874,
                                      "end": 875
                                    },
                                    "typeArguments": null,
                                    "start": 874,
                                    "end": 875
                                  },
                                  "start": 872,
                                  "end": 875
                                },
                                "start": 846,
                                "end": 876
                              }
                            ],
                            "start": 794,
                            "end": 882
                          },
                          "start": 792,
                          "end": 882
                        },
                        "start": 791,
                        "end": 882
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 885,
                          "end": 888
                        },
                        "start": 885,
                        "end": 890
                      },
                      "start": 883,
                      "end": 890
                    },
                    "start": 786,
                    "end": 891
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 919,
                                        "end": 920
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 929,
                                          "end": 937
                                        },
                                        "typeArguments": null,
                                        "start": 929,
                                        "end": 937
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 919,
                                      "end": 937
                                    }
                                  ],
                                  "start": 918,
                                  "end": 938
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 942,
                                          "end": 943
                                        },
                                        "typeArguments": null,
                                        "start": 942,
                                        "end": 943
                                      },
                                      "start": 940,
                                      "end": 943
                                    },
                                    "start": 939,
                                    "end": 943
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 946,
                                      "end": 947
                                    },
                                    "typeArguments": null,
                                    "start": 946,
                                    "end": 947
                                  },
                                  "start": 944,
                                  "end": 947
                                },
                                "start": 914,
                                "end": 948
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 962,
                                        "end": 963
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 972,
                                          "end": 976
                                        },
                                        "typeArguments": null,
                                        "start": 972,
                                        "end": 976
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 962,
                                      "end": 976
                                    }
                                  ],
                                  "start": 961,
                                  "end": 977
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 981,
                                          "end": 982
                                        },
                                        "typeArguments": null,
                                        "start": 981,
                                        "end": 982
                                      },
                                      "start": 979,
                                      "end": 982
                                    },
                                    "start": 978,
                                    "end": 982
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 985,
                                      "end": 986
                                    },
                                    "typeArguments": null,
                                    "start": 985,
                                    "end": 986
                                  },
                                  "start": 983,
                                  "end": 986
                                },
                                "start": 957,
                                "end": 987
                              }
                            ],
                            "start": 904,
                            "end": 993
                          },
                          "start": 902,
                          "end": 993
                        },
                        "start": 901,
                        "end": 993
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 996,
                          "end": 999
                        },
                        "start": 996,
                        "end": 1001
                      },
                      "start": 994,
                      "end": 1001
                    },
                    "start": 896,
                    "end": 1002
                  }
                ],
                "start": 780,
                "end": 1004
              },
              "start": 778,
              "end": 1004
            },
            "start": 775,
            "end": 1004
          },
          "init": null,
          "definite": false,
          "start": 775,
          "end": 1004
        }
      ],
      "declare": false,
      "start": 771,
      "end": 1005
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1019,
                      "end": 1020
                    }
                  ],
                  "start": 1018,
                  "end": 1021
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1025,
                          "end": 1026
                        },
                        "typeArguments": null,
                        "start": 1025,
                        "end": 1026
                      },
                      "start": 1023,
                      "end": 1026
                    },
                    "start": 1022,
                    "end": 1026
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "start": 1031,
                      "end": 1032
                    },
                    "start": 1031,
                    "end": 1034
                  },
                  "start": 1028,
                  "end": 1034
                },
                "start": 1014,
                "end": 1034
              },
              "start": 1012,
              "end": 1034
            },
            "start": 1011,
            "end": 1034
          },
          "init": null,
          "definite": false,
          "start": 1011,
          "end": 1034
        }
      ],
      "declare": false,
      "start": 1007,
      "end": 1035
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1037,
          "end": 1038
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1041,
          "end": 1042
        },
        "start": 1037,
        "end": 1042
      },
      "directive": null,
      "start": 1037,
      "end": 1043
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1050,
          "end": 1051
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1054,
          "end": 1055
        },
        "start": 1050,
        "end": 1055
      },
      "directive": null,
      "start": 1050,
      "end": 1056
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1076,
                        "end": 1077
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1076,
                      "end": 1077
                    }
                  ],
                  "start": 1075,
                  "end": 1078
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1082,
                          "end": 1083
                        },
                        "typeArguments": null,
                        "start": 1082,
                        "end": 1083
                      },
                      "start": 1080,
                      "end": 1083
                    },
                    "start": 1079,
                    "end": 1083
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1088,
                      "end": 1094
                    },
                    "start": 1088,
                    "end": 1096
                  },
                  "start": 1085,
                  "end": 1096
                },
                "start": 1071,
                "end": 1096
              },
              "start": 1069,
              "end": 1096
            },
            "start": 1067,
            "end": 1096
          },
          "init": null,
          "definite": false,
          "start": 1067,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 1063,
      "end": 1097
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1099,
          "end": 1101
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1104,
          "end": 1106
        },
        "start": 1099,
        "end": 1106
      },
      "directive": null,
      "start": 1099,
      "end": 1107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1114,
          "end": 1116
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1119,
          "end": 1121
        },
        "start": 1114,
        "end": 1121
      },
      "directive": null,
      "start": 1114,
      "end": 1122
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1142,
                        "end": 1143
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1142,
                      "end": 1143
                    }
                  ],
                  "start": 1141,
                  "end": 1144
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1148,
                          "end": 1149
                        },
                        "typeArguments": null,
                        "start": 1148,
                        "end": 1149
                      },
                      "start": 1146,
                      "end": 1149
                    },
                    "start": 1145,
                    "end": 1149
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1154,
                      "end": 1155
                    },
                    "typeArguments": null,
                    "start": 1154,
                    "end": 1155
                  },
                  "start": 1151,
                  "end": 1155
                },
                "start": 1137,
                "end": 1155
              },
              "start": 1135,
              "end": 1155
            },
            "start": 1133,
            "end": 1155
          },
          "init": null,
          "definite": false,
          "start": 1133,
          "end": 1155
        }
      ],
      "declare": false,
      "start": 1129,
      "end": 1156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1158,
          "end": 1160
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1163,
          "end": 1165
        },
        "start": 1158,
        "end": 1165
      },
      "directive": null,
      "start": 1158,
      "end": 1166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1175
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1178,
          "end": 1180
        },
        "start": 1173,
        "end": 1180
      },
      "directive": null,
      "start": 1173,
      "end": 1181
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1201,
                        "end": 1202
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1201,
                      "end": 1202
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1204,
                        "end": 1205
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1204,
                      "end": 1205
                    }
                  ],
                  "start": 1200,
                  "end": 1206
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1210,
                          "end": 1211
                        },
                        "typeArguments": null,
                        "start": 1210,
                        "end": 1211
                      },
                      "start": 1208,
                      "end": 1211
                    },
                    "start": 1207,
                    "end": 1211
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1216,
                          "end": 1217
                        },
                        "typeArguments": null,
                        "start": 1216,
                        "end": 1217
                      },
                      "start": 1214,
                      "end": 1217
                    },
                    "start": 1213,
                    "end": 1217
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1222,
                    "end": 1228
                  },
                  "start": 1219,
                  "end": 1228
                },
                "start": 1196,
                "end": 1228
              },
              "start": 1194,
              "end": 1228
            },
            "start": 1192,
            "end": 1228
          },
          "init": null,
          "definite": false,
          "start": 1192,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 1188,
      "end": 1229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1231,
          "end": 1233
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1238
        },
        "start": 1231,
        "end": 1238
      },
      "directive": null,
      "start": 1231,
      "end": 1239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1246,
          "end": 1248
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1251,
          "end": 1253
        },
        "start": 1246,
        "end": 1253
      },
      "directive": null,
      "start": 1246,
      "end": 1254
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1274,
                        "end": 1275
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1274,
                      "end": 1275
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1277,
                        "end": 1278
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1277,
                      "end": 1278
                    }
                  ],
                  "start": 1273,
                  "end": 1279
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1293,
                                  "end": 1294
                                },
                                "typeArguments": null,
                                "start": 1293,
                                "end": 1294
                              },
                              "start": 1291,
                              "end": 1294
                            },
                            "start": 1288,
                            "end": 1294
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1299,
                              "end": 1300
                            },
                            "typeArguments": null,
                            "start": 1299,
                            "end": 1300
                          },
                          "start": 1296,
                          "end": 1300
                        },
                        "start": 1283,
                        "end": 1300
                      },
                      "start": 1281,
                      "end": 1300
                    },
                    "start": 1280,
                    "end": 1300
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1306
                    },
                    "typeArguments": null,
                    "start": 1305,
                    "end": 1306
                  },
                  "start": 1302,
                  "end": 1306
                },
                "start": 1269,
                "end": 1306
              },
              "start": 1267,
              "end": 1306
            },
            "start": 1265,
            "end": 1306
          },
          "init": null,
          "definite": false,
          "start": 1265,
          "end": 1306
        }
      ],
      "declare": false,
      "start": 1261,
      "end": 1307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1309,
          "end": 1311
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1314,
          "end": 1316
        },
        "start": 1309,
        "end": 1316
      },
      "directive": null,
      "start": 1309,
      "end": 1317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1324,
          "end": 1326
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1329,
          "end": 1331
        },
        "start": 1324,
        "end": 1331
      },
      "directive": null,
      "start": 1324,
      "end": 1332
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1352,
                        "end": 1353
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1362,
                          "end": 1366
                        },
                        "typeArguments": null,
                        "start": 1362,
                        "end": 1366
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1352,
                      "end": 1366
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1368,
                        "end": 1369
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1378,
                          "end": 1385
                        },
                        "typeArguments": null,
                        "start": 1378,
                        "end": 1385
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1368,
                      "end": 1385
                    }
                  ],
                  "start": 1351,
                  "end": 1386
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1400,
                                  "end": 1401
                                },
                                "typeArguments": null,
                                "start": 1400,
                                "end": 1401
                              },
                              "start": 1398,
                              "end": 1401
                            },
                            "start": 1395,
                            "end": 1401
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1406,
                              "end": 1407
                            },
                            "typeArguments": null,
                            "start": 1406,
                            "end": 1407
                          },
                          "start": 1403,
                          "end": 1407
                        },
                        "start": 1390,
                        "end": 1407
                      },
                      "start": 1388,
                      "end": 1407
                    },
                    "start": 1387,
                    "end": 1407
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1412,
                      "end": 1413
                    },
                    "typeArguments": null,
                    "start": 1412,
                    "end": 1413
                  },
                  "start": 1409,
                  "end": 1413
                },
                "start": 1347,
                "end": 1413
              },
              "start": 1345,
              "end": 1413
            },
            "start": 1343,
            "end": 1413
          },
          "init": null,
          "definite": false,
          "start": 1343,
          "end": 1413
        }
      ],
      "declare": false,
      "start": 1339,
      "end": 1414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1416,
          "end": 1418
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1421,
          "end": 1423
        },
        "start": 1416,
        "end": 1423
      },
      "directive": null,
      "start": 1416,
      "end": 1424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1431,
          "end": 1433
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1436,
          "end": 1438
        },
        "start": 1431,
        "end": 1438
      },
      "directive": null,
      "start": 1431,
      "end": 1439
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1460,
                        "end": 1461
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1460,
                      "end": 1461
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1463,
                        "end": 1464
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1463,
                      "end": 1464
                    }
                  ],
                  "start": 1459,
                  "end": 1465
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1471,
                              "end": 1474
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1476,
                                  "end": 1477
                                },
                                "typeArguments": null,
                                "start": 1476,
                                "end": 1477
                              },
                              "start": 1474,
                              "end": 1477
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1471,
                            "end": 1477
                          }
                        ],
                        "start": 1469,
                        "end": 1479
                      },
                      "start": 1467,
                      "end": 1479
                    },
                    "start": 1466,
                    "end": 1479
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1486,
                              "end": 1489
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1491,
                                  "end": 1492
                                },
                                "typeArguments": null,
                                "start": 1491,
                                "end": 1492
                              },
                              "start": 1489,
                              "end": 1492
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1486,
                            "end": 1493
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1494,
                              "end": 1497
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1499,
                                  "end": 1500
                                },
                                "typeArguments": null,
                                "start": 1499,
                                "end": 1500
                              },
                              "start": 1497,
                              "end": 1500
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1494,
                            "end": 1500
                          }
                        ],
                        "start": 1484,
                        "end": 1502
                      },
                      "start": 1482,
                      "end": 1502
                    },
                    "start": 1481,
                    "end": 1502
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1507,
                      "end": 1511
                    },
                    "typeArguments": null,
                    "start": 1507,
                    "end": 1511
                  },
                  "start": 1504,
                  "end": 1511
                },
                "start": 1455,
                "end": 1511
              },
              "start": 1453,
              "end": 1511
            },
            "start": 1450,
            "end": 1511
          },
          "init": null,
          "definite": false,
          "start": 1450,
          "end": 1511
        }
      ],
      "declare": false,
      "start": 1446,
      "end": 1512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1514,
          "end": 1517
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1520,
          "end": 1523
        },
        "start": 1514,
        "end": 1523
      },
      "directive": null,
      "start": 1514,
      "end": 1524
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1531,
          "end": 1534
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1540
        },
        "start": 1531,
        "end": 1540
      },
      "directive": null,
      "start": 1531,
      "end": 1541
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1562,
                        "end": 1563
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1562,
                      "end": 1563
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1565,
                        "end": 1566
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1565,
                      "end": 1566
                    }
                  ],
                  "start": 1561,
                  "end": 1567
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1573,
                              "end": 1574
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1576,
                                  "end": 1577
                                },
                                "typeArguments": null,
                                "start": 1576,
                                "end": 1577
                              },
                              "start": 1574,
                              "end": 1577
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1573,
                            "end": 1578
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1579,
                              "end": 1580
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1582,
                                  "end": 1583
                                },
                                "typeArguments": null,
                                "start": 1582,
                                "end": 1583
                              },
                              "start": 1580,
                              "end": 1583
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1579,
                            "end": 1584
                          }
                        ],
                        "start": 1571,
                        "end": 1586
                      },
                      "start": 1569,
                      "end": 1586
                    },
                    "start": 1568,
                    "end": 1586
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1591,
                        "end": 1592
                      },
                      "typeArguments": null,
                      "start": 1591,
                      "end": 1592
                    },
                    "start": 1591,
                    "end": 1594
                  },
                  "start": 1588,
                  "end": 1594
                },
                "start": 1557,
                "end": 1594
              },
              "start": 1555,
              "end": 1594
            },
            "start": 1552,
            "end": 1594
          },
          "init": null,
          "definite": false,
          "start": 1552,
          "end": 1594
        }
      ],
      "declare": false,
      "start": 1548,
      "end": 1595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1597,
          "end": 1600
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1603,
          "end": 1606
        },
        "start": 1597,
        "end": 1606
      },
      "directive": null,
      "start": 1597,
      "end": 1607
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1614,
          "end": 1617
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1620,
          "end": 1623
        },
        "start": 1614,
        "end": 1623
      },
      "directive": null,
      "start": 1614,
      "end": 1624
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1645,
                        "end": 1646
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1645,
                      "end": 1646
                    }
                  ],
                  "start": 1644,
                  "end": 1647
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1653,
                              "end": 1654
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1656,
                                  "end": 1657
                                },
                                "typeArguments": null,
                                "start": 1656,
                                "end": 1657
                              },
                              "start": 1654,
                              "end": 1657
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1653,
                            "end": 1658
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1659,
                              "end": 1660
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1662,
                                  "end": 1663
                                },
                                "typeArguments": null,
                                "start": 1662,
                                "end": 1663
                              },
                              "start": 1660,
                              "end": 1663
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1659,
                            "end": 1663
                          }
                        ],
                        "start": 1651,
                        "end": 1665
                      },
                      "start": 1649,
                      "end": 1665
                    },
                    "start": 1648,
                    "end": 1665
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1670,
                        "end": 1671
                      },
                      "typeArguments": null,
                      "start": 1670,
                      "end": 1671
                    },
                    "start": 1670,
                    "end": 1673
                  },
                  "start": 1667,
                  "end": 1673
                },
                "start": 1640,
                "end": 1673
              },
              "start": 1638,
              "end": 1673
            },
            "start": 1635,
            "end": 1673
          },
          "init": null,
          "definite": false,
          "start": 1635,
          "end": 1673
        }
      ],
      "declare": false,
      "start": 1631,
      "end": 1674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1676,
          "end": 1679
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1685
        },
        "start": 1676,
        "end": 1685
      },
      "directive": null,
      "start": 1676,
      "end": 1686
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1693,
          "end": 1696
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1699,
          "end": 1702
        },
        "start": 1693,
        "end": 1702
      },
      "directive": null,
      "start": 1693,
      "end": 1703
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1724,
                        "end": 1725
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1724,
                      "end": 1725
                    }
                  ],
                  "start": 1723,
                  "end": 1726
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1738,
                                  "end": 1739
                                },
                                "typeArguments": null,
                                "start": 1738,
                                "end": 1739
                              },
                              "start": 1736,
                              "end": 1739
                            },
                            "start": 1735,
                            "end": 1739
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1744,
                              "end": 1745
                            },
                            "typeArguments": null,
                            "start": 1744,
                            "end": 1745
                          },
                          "start": 1741,
                          "end": 1745
                        },
                        "start": 1730,
                        "end": 1745
                      },
                      "start": 1728,
                      "end": 1745
                    },
                    "start": 1727,
                    "end": 1745
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1750,
                        "end": 1751
                      },
                      "typeArguments": null,
                      "start": 1750,
                      "end": 1751
                    },
                    "start": 1750,
                    "end": 1753
                  },
                  "start": 1747,
                  "end": 1753
                },
                "start": 1719,
                "end": 1753
              },
              "start": 1717,
              "end": 1753
            },
            "start": 1714,
            "end": 1753
          },
          "init": null,
          "definite": false,
          "start": 1714,
          "end": 1753
        }
      ],
      "declare": false,
      "start": 1710,
      "end": 1754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1756,
          "end": 1759
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1762,
          "end": 1765
        },
        "start": 1756,
        "end": 1765
      },
      "directive": null,
      "start": 1756,
      "end": 1766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1773,
          "end": 1776
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1779,
          "end": 1782
        },
        "start": 1773,
        "end": 1782
      },
      "directive": null,
      "start": 1773,
      "end": 1783
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1812,
                                "end": 1813
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1812,
                              "end": 1813
                            }
                          ],
                          "start": 1811,
                          "end": 1814
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1818,
                                  "end": 1819
                                },
                                "typeArguments": null,
                                "start": 1818,
                                "end": 1819
                              },
                              "start": 1816,
                              "end": 1819
                            },
                            "start": 1815,
                            "end": 1819
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1824,
                              "end": 1825
                            },
                            "typeArguments": null,
                            "start": 1824,
                            "end": 1825
                          },
                          "start": 1821,
                          "end": 1825
                        },
                        "start": 1807,
                        "end": 1825
                      },
                      "start": 1805,
                      "end": 1825
                    },
                    "start": 1804,
                    "end": 1825
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1830,
                      "end": 1833
                    },
                    "start": 1830,
                    "end": 1835
                  },
                  "start": 1827,
                  "end": 1835
                },
                "start": 1799,
                "end": 1835
              },
              "start": 1797,
              "end": 1835
            },
            "start": 1794,
            "end": 1835
          },
          "init": null,
          "definite": false,
          "start": 1794,
          "end": 1835
        }
      ],
      "declare": false,
      "start": 1790,
      "end": 1836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1838,
          "end": 1841
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1844,
          "end": 1847
        },
        "start": 1838,
        "end": 1847
      },
      "directive": null,
      "start": 1838,
      "end": 1848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1855,
          "end": 1858
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1861,
          "end": 1864
        },
        "start": 1855,
        "end": 1864
      },
      "directive": null,
      "start": 1855,
      "end": 1865
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 1871
}
```
