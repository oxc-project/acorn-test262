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
        "start": 80,
        "end": 84
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
              "start": 87,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
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
            "start": 87,
            "end": 99
          }
        ],
        "start": 85,
        "end": 101
      },
      "abstract": false,
      "declare": false,
      "start": 74,
      "end": 101
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
        "start": 108,
        "end": 115
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 128
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
              "start": 131,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
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
            "start": 131,
            "end": 143
          }
        ],
        "start": 129,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 145
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
        "start": 152,
        "end": 160
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 176
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
              "start": 179,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
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
            "start": 179,
            "end": 191
          }
        ],
        "start": 177,
        "end": 193
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 193
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
        "start": 200,
        "end": 212
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 225
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
              "start": 228,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 234,
                "end": 240
              },
              "start": 232,
              "end": 240
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
            "start": 228,
            "end": 241
          }
        ],
        "start": 226,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 194,
      "end": 243
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
                "type": "TSFunctionType",
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
                        "start": 253,
                        "end": 254
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 253,
                      "end": 254
                    }
                  ],
                  "start": 252,
                  "end": 255
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
                          "start": 259,
                          "end": 260
                        },
                        "typeArguments": null,
                        "start": 259,
                        "end": 260
                      },
                      "start": 257,
                      "end": 260
                    },
                    "start": 256,
                    "end": 260
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
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    },
                    "start": 265,
                    "end": 268
                  },
                  "start": 262,
                  "end": 268
                },
                "start": 252,
                "end": 268
              },
              "start": 250,
              "end": 268
            },
            "start": 249,
            "end": 268
          },
          "init": null,
          "definite": false,
          "start": 249,
          "end": 268
        }
      ],
      "declare": false,
      "start": 245,
      "end": 269
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
                "type": "TSFunctionType",
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
                        "start": 279,
                        "end": 280
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 279,
                      "end": 280
                    }
                  ],
                  "start": 278,
                  "end": 281
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
                          "start": 285,
                          "end": 286
                        },
                        "typeArguments": null,
                        "start": 285,
                        "end": 286
                      },
                      "start": 283,
                      "end": 286
                    },
                    "start": 282,
                    "end": 286
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 291,
                      "end": 297
                    },
                    "start": 291,
                    "end": 299
                  },
                  "start": 288,
                  "end": 299
                },
                "start": 278,
                "end": 299
              },
              "start": 276,
              "end": 299
            },
            "start": 274,
            "end": 299
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 299
        }
      ],
      "declare": false,
      "start": 270,
      "end": 300
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
                "type": "TSFunctionType",
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
                        "start": 310,
                        "end": 311
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 310,
                      "end": 311
                    }
                  ],
                  "start": 309,
                  "end": 312
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
                          "start": 316,
                          "end": 317
                        },
                        "typeArguments": null,
                        "start": 316,
                        "end": 317
                      },
                      "start": 314,
                      "end": 317
                    },
                    "start": 313,
                    "end": 317
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 322,
                    "end": 326
                  },
                  "start": 319,
                  "end": 326
                },
                "start": 309,
                "end": 326
              },
              "start": 307,
              "end": 326
            },
            "start": 305,
            "end": 326
          },
          "init": null,
          "definite": false,
          "start": 305,
          "end": 326
        }
      ],
      "declare": false,
      "start": 301,
      "end": 327
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
                "type": "TSFunctionType",
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
                        "start": 337,
                        "end": 338
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 337,
                      "end": 338
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 340
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 339,
                      "end": 340
                    }
                  ],
                  "start": 336,
                  "end": 341
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
                          "start": 345,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 345,
                        "end": 346
                      },
                      "start": 343,
                      "end": 346
                    },
                    "start": 342,
                    "end": 346
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
                          "start": 351,
                          "end": 352
                        },
                        "typeArguments": null,
                        "start": 351,
                        "end": 352
                      },
                      "start": 349,
                      "end": 352
                    },
                    "start": 348,
                    "end": 352
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 357,
                    "end": 363
                  },
                  "start": 354,
                  "end": 363
                },
                "start": 336,
                "end": 363
              },
              "start": 334,
              "end": 363
            },
            "start": 332,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 363
        }
      ],
      "declare": false,
      "start": 328,
      "end": 364
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
                "type": "TSFunctionType",
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
                        "start": 374,
                        "end": 375
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 374,
                      "end": 375
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 377
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 376,
                      "end": 377
                    }
                  ],
                  "start": 373,
                  "end": 378
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
                        "type": "TSFunctionType",
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
                                  "start": 388,
                                  "end": 389
                                },
                                "typeArguments": null,
                                "start": 388,
                                "end": 389
                              },
                              "start": 386,
                              "end": 389
                            },
                            "start": 383,
                            "end": 389
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
                              "start": 394,
                              "end": 395
                            },
                            "typeArguments": null,
                            "start": 394,
                            "end": 395
                          },
                          "start": 391,
                          "end": 395
                        },
                        "start": 382,
                        "end": 395
                      },
                      "start": 380,
                      "end": 395
                    },
                    "start": 379,
                    "end": 395
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
                      "start": 400,
                      "end": 401
                    },
                    "typeArguments": null,
                    "start": 400,
                    "end": 401
                  },
                  "start": 397,
                  "end": 401
                },
                "start": 373,
                "end": 401
              },
              "start": 371,
              "end": 401
            },
            "start": 369,
            "end": 401
          },
          "init": null,
          "definite": false,
          "start": 369,
          "end": 401
        }
      ],
      "declare": false,
      "start": 365,
      "end": 402
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
                "type": "TSFunctionType",
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
                        "start": 412,
                        "end": 413
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 422,
                          "end": 426
                        },
                        "typeArguments": null,
                        "start": 422,
                        "end": 426
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 412,
                      "end": 426
                    }
                  ],
                  "start": 411,
                  "end": 427
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
                        "type": "TSFunctionType",
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
                                  "start": 437,
                                  "end": 438
                                },
                                "typeArguments": null,
                                "start": 437,
                                "end": 438
                              },
                              "start": 435,
                              "end": 438
                            },
                            "start": 432,
                            "end": 438
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
                              "start": 443,
                              "end": 450
                            },
                            "typeArguments": null,
                            "start": 443,
                            "end": 450
                          },
                          "start": 440,
                          "end": 450
                        },
                        "start": 431,
                        "end": 450
                      },
                      "start": 429,
                      "end": 450
                    },
                    "start": 428,
                    "end": 450
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
                      "start": 455,
                      "end": 456
                    },
                    "typeArguments": null,
                    "start": 455,
                    "end": 456
                  },
                  "start": 452,
                  "end": 456
                },
                "start": 411,
                "end": 456
              },
              "start": 409,
              "end": 456
            },
            "start": 407,
            "end": 456
          },
          "init": null,
          "definite": false,
          "start": 407,
          "end": 456
        }
      ],
      "declare": false,
      "start": 403,
      "end": 457
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
                "type": "TSFunctionType",
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
                        "start": 468,
                        "end": 469
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 468,
                      "end": 469
                    }
                  ],
                  "start": 467,
                  "end": 470
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
                              "start": 476,
                              "end": 479
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
                                  "start": 481,
                                  "end": 482
                                },
                                "typeArguments": null,
                                "start": 481,
                                "end": 482
                              },
                              "start": 479,
                              "end": 482
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 476,
                            "end": 482
                          }
                        ],
                        "start": 474,
                        "end": 484
                      },
                      "start": 472,
                      "end": 484
                    },
                    "start": 471,
                    "end": 484
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
                              "start": 491,
                              "end": 494
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
                                  "start": 496,
                                  "end": 497
                                },
                                "typeArguments": null,
                                "start": 496,
                                "end": 497
                              },
                              "start": 494,
                              "end": 497
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 491,
                            "end": 498
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
                              "start": 499,
                              "end": 502
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
                                  "start": 504,
                                  "end": 505
                                },
                                "typeArguments": null,
                                "start": 504,
                                "end": 505
                              },
                              "start": 502,
                              "end": 505
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 499,
                            "end": 505
                          }
                        ],
                        "start": 489,
                        "end": 507
                      },
                      "start": 487,
                      "end": 507
                    },
                    "start": 486,
                    "end": 507
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
                      "start": 512,
                      "end": 516
                    },
                    "typeArguments": null,
                    "start": 512,
                    "end": 516
                  },
                  "start": 509,
                  "end": 516
                },
                "start": 467,
                "end": 516
              },
              "start": 465,
              "end": 516
            },
            "start": 462,
            "end": 516
          },
          "init": null,
          "definite": false,
          "start": 462,
          "end": 516
        }
      ],
      "declare": false,
      "start": 458,
      "end": 517
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
                "type": "TSFunctionType",
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
                        "start": 528,
                        "end": 529
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 528,
                      "end": 529
                    }
                  ],
                  "start": 527,
                  "end": 530
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
                              "start": 536,
                              "end": 537
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
                                  "start": 539,
                                  "end": 540
                                },
                                "typeArguments": null,
                                "start": 539,
                                "end": 540
                              },
                              "start": 537,
                              "end": 540
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 536,
                            "end": 541
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
                              "start": 542,
                              "end": 543
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
                                  "start": 545,
                                  "end": 546
                                },
                                "typeArguments": null,
                                "start": 545,
                                "end": 546
                              },
                              "start": 543,
                              "end": 546
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 542,
                            "end": 546
                          }
                        ],
                        "start": 534,
                        "end": 548
                      },
                      "start": 532,
                      "end": 548
                    },
                    "start": 531,
                    "end": 548
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
                        "start": 553,
                        "end": 554
                      },
                      "typeArguments": null,
                      "start": 553,
                      "end": 554
                    },
                    "start": 553,
                    "end": 556
                  },
                  "start": 550,
                  "end": 556
                },
                "start": 527,
                "end": 556
              },
              "start": 525,
              "end": 556
            },
            "start": 522,
            "end": 556
          },
          "init": null,
          "definite": false,
          "start": 522,
          "end": 556
        }
      ],
      "declare": false,
      "start": 518,
      "end": 557
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
                "type": "TSFunctionType",
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
                        "start": 568,
                        "end": 569
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 582
                        },
                        "typeArguments": null,
                        "start": 578,
                        "end": 582
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 568,
                      "end": 582
                    }
                  ],
                  "start": 567,
                  "end": 583
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
                              "start": 589,
                              "end": 590
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
                                  "start": 592,
                                  "end": 593
                                },
                                "typeArguments": null,
                                "start": 592,
                                "end": 593
                              },
                              "start": 590,
                              "end": 593
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 589,
                            "end": 594
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
                              "start": 595,
                              "end": 596
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
                                  "start": 598,
                                  "end": 599
                                },
                                "typeArguments": null,
                                "start": 598,
                                "end": 599
                              },
                              "start": 596,
                              "end": 599
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 595,
                            "end": 599
                          }
                        ],
                        "start": 587,
                        "end": 601
                      },
                      "start": 585,
                      "end": 601
                    },
                    "start": 584,
                    "end": 601
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
                        "start": 606,
                        "end": 607
                      },
                      "typeArguments": null,
                      "start": 606,
                      "end": 607
                    },
                    "start": 606,
                    "end": 609
                  },
                  "start": 603,
                  "end": 609
                },
                "start": 567,
                "end": 609
              },
              "start": 565,
              "end": 609
            },
            "start": 562,
            "end": 609
          },
          "init": null,
          "definite": false,
          "start": 562,
          "end": 609
        }
      ],
      "declare": false,
      "start": 558,
      "end": 610
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
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 627,
                            "end": 628
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 644
                            },
                            "typeArguments": null,
                            "start": 637,
                            "end": 644
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 627,
                          "end": 644
                        }
                      ],
                      "start": 626,
                      "end": 645
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
                            "type": "TSFunctionType",
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
                                      "start": 653,
                                      "end": 654
                                    },
                                    "typeArguments": null,
                                    "start": 653,
                                    "end": 654
                                  },
                                  "start": 651,
                                  "end": 654
                                },
                                "start": 650,
                                "end": 654
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
                                  "start": 659,
                                  "end": 660
                                },
                                "typeArguments": null,
                                "start": 659,
                                "end": 660
                              },
                              "start": 656,
                              "end": 660
                            },
                            "start": 649,
                            "end": 660
                          },
                          "start": 647,
                          "end": 660
                        },
                        "start": 646,
                        "end": 660
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
                            "start": 663,
                            "end": 664
                          },
                          "typeArguments": null,
                          "start": 663,
                          "end": 664
                        },
                        "start": 663,
                        "end": 666
                      },
                      "start": 661,
                      "end": 666
                    },
                    "start": 626,
                    "end": 667
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 673,
                            "end": 674
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 683,
                              "end": 687
                            },
                            "typeArguments": null,
                            "start": 683,
                            "end": 687
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 673,
                          "end": 687
                        }
                      ],
                      "start": 672,
                      "end": 688
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
                            "type": "TSFunctionType",
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
                                      "start": 696,
                                      "end": 697
                                    },
                                    "typeArguments": null,
                                    "start": 696,
                                    "end": 697
                                  },
                                  "start": 694,
                                  "end": 697
                                },
                                "start": 693,
                                "end": 697
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
                                  "start": 702,
                                  "end": 703
                                },
                                "typeArguments": null,
                                "start": 702,
                                "end": 703
                              },
                              "start": 699,
                              "end": 703
                            },
                            "start": 692,
                            "end": 703
                          },
                          "start": 690,
                          "end": 703
                        },
                        "start": 689,
                        "end": 703
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
                            "start": 706,
                            "end": 707
                          },
                          "typeArguments": null,
                          "start": 706,
                          "end": 707
                        },
                        "start": 706,
                        "end": 709
                      },
                      "start": 704,
                      "end": 709
                    },
                    "start": 672,
                    "end": 710
                  }
                ],
                "start": 620,
                "end": 720
              },
              "start": 618,
              "end": 720
            },
            "start": 615,
            "end": 720
          },
          "init": null,
          "definite": false,
          "start": 615,
          "end": 720
        }
      ],
      "declare": false,
      "start": 611,
      "end": 721
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
                    "type": "TSCallSignatureDeclaration",
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 752,
                                        "end": 753
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 762,
                                          "end": 769
                                        },
                                        "typeArguments": null,
                                        "start": 762,
                                        "end": 769
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 752,
                                      "end": 769
                                    }
                                  ],
                                  "start": 751,
                                  "end": 770
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
                                          "start": 774,
                                          "end": 775
                                        },
                                        "typeArguments": null,
                                        "start": 774,
                                        "end": 775
                                      },
                                      "start": 772,
                                      "end": 775
                                    },
                                    "start": 771,
                                    "end": 775
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
                                      "start": 778,
                                      "end": 779
                                    },
                                    "typeArguments": null,
                                    "start": 778,
                                    "end": 779
                                  },
                                  "start": 776,
                                  "end": 779
                                },
                                "start": 751,
                                "end": 780
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 790,
                                        "end": 791
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 800,
                                          "end": 804
                                        },
                                        "typeArguments": null,
                                        "start": 800,
                                        "end": 804
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 790,
                                      "end": 804
                                    }
                                  ],
                                  "start": 789,
                                  "end": 805
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
                                          "start": 809,
                                          "end": 810
                                        },
                                        "typeArguments": null,
                                        "start": 809,
                                        "end": 810
                                      },
                                      "start": 807,
                                      "end": 810
                                    },
                                    "start": 806,
                                    "end": 810
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
                                      "start": 813,
                                      "end": 814
                                    },
                                    "typeArguments": null,
                                    "start": 813,
                                    "end": 814
                                  },
                                  "start": 811,
                                  "end": 814
                                },
                                "start": 789,
                                "end": 815
                              }
                            ],
                            "start": 741,
                            "end": 821
                          },
                          "start": 739,
                          "end": 821
                        },
                        "start": 738,
                        "end": 821
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 824,
                          "end": 827
                        },
                        "start": 824,
                        "end": 829
                      },
                      "start": 822,
                      "end": 829
                    },
                    "start": 737,
                    "end": 830
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 850,
                                        "end": 851
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 860,
                                          "end": 868
                                        },
                                        "typeArguments": null,
                                        "start": 860,
                                        "end": 868
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 850,
                                      "end": 868
                                    }
                                  ],
                                  "start": 849,
                                  "end": 869
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
                                          "start": 873,
                                          "end": 874
                                        },
                                        "typeArguments": null,
                                        "start": 873,
                                        "end": 874
                                      },
                                      "start": 871,
                                      "end": 874
                                    },
                                    "start": 870,
                                    "end": 874
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
                                      "start": 877,
                                      "end": 878
                                    },
                                    "typeArguments": null,
                                    "start": 877,
                                    "end": 878
                                  },
                                  "start": 875,
                                  "end": 878
                                },
                                "start": 849,
                                "end": 879
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 889,
                                        "end": 890
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 899,
                                          "end": 903
                                        },
                                        "typeArguments": null,
                                        "start": 899,
                                        "end": 903
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 889,
                                      "end": 903
                                    }
                                  ],
                                  "start": 888,
                                  "end": 904
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
                                          "start": 908,
                                          "end": 909
                                        },
                                        "typeArguments": null,
                                        "start": 908,
                                        "end": 909
                                      },
                                      "start": 906,
                                      "end": 909
                                    },
                                    "start": 905,
                                    "end": 909
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
                                      "start": 912,
                                      "end": 913
                                    },
                                    "typeArguments": null,
                                    "start": 912,
                                    "end": 913
                                  },
                                  "start": 910,
                                  "end": 913
                                },
                                "start": 888,
                                "end": 914
                              }
                            ],
                            "start": 839,
                            "end": 920
                          },
                          "start": 837,
                          "end": 920
                        },
                        "start": 836,
                        "end": 920
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 923,
                          "end": 926
                        },
                        "start": 923,
                        "end": 928
                      },
                      "start": 921,
                      "end": 928
                    },
                    "start": 835,
                    "end": 929
                  }
                ],
                "start": 731,
                "end": 931
              },
              "start": 729,
              "end": 931
            },
            "start": 726,
            "end": 931
          },
          "init": null,
          "definite": false,
          "start": 726,
          "end": 931
        }
      ],
      "declare": false,
      "start": 722,
      "end": 932
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
                "type": "TSFunctionType",
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
                        "start": 942,
                        "end": 943
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 942,
                      "end": 943
                    }
                  ],
                  "start": 941,
                  "end": 944
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
                          "start": 948,
                          "end": 949
                        },
                        "typeArguments": null,
                        "start": 948,
                        "end": 949
                      },
                      "start": 946,
                      "end": 949
                    },
                    "start": 945,
                    "end": 949
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
                        "start": 954,
                        "end": 955
                      },
                      "typeArguments": null,
                      "start": 954,
                      "end": 955
                    },
                    "start": 954,
                    "end": 957
                  },
                  "start": 951,
                  "end": 957
                },
                "start": 941,
                "end": 957
              },
              "start": 939,
              "end": 957
            },
            "start": 938,
            "end": 957
          },
          "init": null,
          "definite": false,
          "start": 938,
          "end": 957
        }
      ],
      "declare": false,
      "start": 934,
      "end": 958
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
          "start": 960,
          "end": 961
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 965
        },
        "start": 960,
        "end": 965
      },
      "directive": null,
      "start": 960,
      "end": 966
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
          "start": 973,
          "end": 974
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 977,
          "end": 978
        },
        "start": 973,
        "end": 978
      },
      "directive": null,
      "start": 973,
      "end": 979
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
                "type": "TSFunctionType",
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
                        "start": 995,
                        "end": 996
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 995,
                      "end": 996
                    }
                  ],
                  "start": 994,
                  "end": 997
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
                          "start": 1001,
                          "end": 1002
                        },
                        "typeArguments": null,
                        "start": 1001,
                        "end": 1002
                      },
                      "start": 999,
                      "end": 1002
                    },
                    "start": 998,
                    "end": 1002
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1007,
                      "end": 1013
                    },
                    "start": 1007,
                    "end": 1015
                  },
                  "start": 1004,
                  "end": 1015
                },
                "start": 994,
                "end": 1015
              },
              "start": 992,
              "end": 1015
            },
            "start": 990,
            "end": 1015
          },
          "init": null,
          "definite": false,
          "start": 990,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 986,
      "end": 1016
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
          "start": 1018,
          "end": 1020
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1023,
          "end": 1025
        },
        "start": 1018,
        "end": 1025
      },
      "directive": null,
      "start": 1018,
      "end": 1026
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
          "start": 1033,
          "end": 1035
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1038,
          "end": 1040
        },
        "start": 1033,
        "end": 1040
      },
      "directive": null,
      "start": 1033,
      "end": 1041
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
                "type": "TSFunctionType",
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
                        "start": 1057,
                        "end": 1058
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1057,
                      "end": 1058
                    }
                  ],
                  "start": 1056,
                  "end": 1059
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
                          "start": 1063,
                          "end": 1064
                        },
                        "typeArguments": null,
                        "start": 1063,
                        "end": 1064
                      },
                      "start": 1061,
                      "end": 1064
                    },
                    "start": 1060,
                    "end": 1064
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
                      "start": 1069,
                      "end": 1070
                    },
                    "typeArguments": null,
                    "start": 1069,
                    "end": 1070
                  },
                  "start": 1066,
                  "end": 1070
                },
                "start": 1056,
                "end": 1070
              },
              "start": 1054,
              "end": 1070
            },
            "start": 1052,
            "end": 1070
          },
          "init": null,
          "definite": false,
          "start": 1052,
          "end": 1070
        }
      ],
      "declare": false,
      "start": 1048,
      "end": 1071
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
          "start": 1073,
          "end": 1075
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1078,
          "end": 1080
        },
        "start": 1073,
        "end": 1080
      },
      "directive": null,
      "start": 1073,
      "end": 1081
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
          "start": 1088,
          "end": 1090
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1095
        },
        "start": 1088,
        "end": 1095
      },
      "directive": null,
      "start": 1088,
      "end": 1096
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
                "type": "TSFunctionType",
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
                        "start": 1112,
                        "end": 1113
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1112,
                      "end": 1113
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1115,
                        "end": 1116
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1115,
                      "end": 1116
                    }
                  ],
                  "start": 1111,
                  "end": 1117
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
                          "start": 1121,
                          "end": 1122
                        },
                        "typeArguments": null,
                        "start": 1121,
                        "end": 1122
                      },
                      "start": 1119,
                      "end": 1122
                    },
                    "start": 1118,
                    "end": 1122
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
                          "start": 1127,
                          "end": 1128
                        },
                        "typeArguments": null,
                        "start": 1127,
                        "end": 1128
                      },
                      "start": 1125,
                      "end": 1128
                    },
                    "start": 1124,
                    "end": 1128
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1133,
                    "end": 1139
                  },
                  "start": 1130,
                  "end": 1139
                },
                "start": 1111,
                "end": 1139
              },
              "start": 1109,
              "end": 1139
            },
            "start": 1107,
            "end": 1139
          },
          "init": null,
          "definite": false,
          "start": 1107,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1103,
      "end": 1140
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
          "start": 1142,
          "end": 1144
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1147,
          "end": 1149
        },
        "start": 1142,
        "end": 1149
      },
      "directive": null,
      "start": 1142,
      "end": 1150
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
          "start": 1157,
          "end": 1159
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1162,
          "end": 1164
        },
        "start": 1157,
        "end": 1164
      },
      "directive": null,
      "start": 1157,
      "end": 1165
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
                "type": "TSFunctionType",
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
                        "start": 1181,
                        "end": 1182
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1181,
                      "end": 1182
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1184,
                        "end": 1185
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1184,
                      "end": 1185
                    }
                  ],
                  "start": 1180,
                  "end": 1186
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
                        "type": "TSFunctionType",
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
                                  "start": 1196,
                                  "end": 1197
                                },
                                "typeArguments": null,
                                "start": 1196,
                                "end": 1197
                              },
                              "start": 1194,
                              "end": 1197
                            },
                            "start": 1191,
                            "end": 1197
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
                              "start": 1202,
                              "end": 1203
                            },
                            "typeArguments": null,
                            "start": 1202,
                            "end": 1203
                          },
                          "start": 1199,
                          "end": 1203
                        },
                        "start": 1190,
                        "end": 1203
                      },
                      "start": 1188,
                      "end": 1203
                    },
                    "start": 1187,
                    "end": 1203
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
                      "start": 1208,
                      "end": 1209
                    },
                    "typeArguments": null,
                    "start": 1208,
                    "end": 1209
                  },
                  "start": 1205,
                  "end": 1209
                },
                "start": 1180,
                "end": 1209
              },
              "start": 1178,
              "end": 1209
            },
            "start": 1176,
            "end": 1209
          },
          "init": null,
          "definite": false,
          "start": 1176,
          "end": 1209
        }
      ],
      "declare": false,
      "start": 1172,
      "end": 1210
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
          "start": 1212,
          "end": 1214
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1217,
          "end": 1219
        },
        "start": 1212,
        "end": 1219
      },
      "directive": null,
      "start": 1212,
      "end": 1220
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
          "start": 1227,
          "end": 1229
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1234
        },
        "start": 1227,
        "end": 1234
      },
      "directive": null,
      "start": 1227,
      "end": 1235
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
                "type": "TSFunctionType",
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
                        "start": 1251,
                        "end": 1252
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1261,
                          "end": 1265
                        },
                        "typeArguments": null,
                        "start": 1261,
                        "end": 1265
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1251,
                      "end": 1265
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1267,
                        "end": 1268
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1277,
                          "end": 1284
                        },
                        "typeArguments": null,
                        "start": 1277,
                        "end": 1284
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1267,
                      "end": 1284
                    }
                  ],
                  "start": 1250,
                  "end": 1285
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
                        "type": "TSFunctionType",
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
                                  "start": 1295,
                                  "end": 1296
                                },
                                "typeArguments": null,
                                "start": 1295,
                                "end": 1296
                              },
                              "start": 1293,
                              "end": 1296
                            },
                            "start": 1290,
                            "end": 1296
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
                              "start": 1301,
                              "end": 1302
                            },
                            "typeArguments": null,
                            "start": 1301,
                            "end": 1302
                          },
                          "start": 1298,
                          "end": 1302
                        },
                        "start": 1289,
                        "end": 1302
                      },
                      "start": 1287,
                      "end": 1302
                    },
                    "start": 1286,
                    "end": 1302
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
                      "start": 1307,
                      "end": 1308
                    },
                    "typeArguments": null,
                    "start": 1307,
                    "end": 1308
                  },
                  "start": 1304,
                  "end": 1308
                },
                "start": 1250,
                "end": 1308
              },
              "start": 1248,
              "end": 1308
            },
            "start": 1246,
            "end": 1308
          },
          "init": null,
          "definite": false,
          "start": 1246,
          "end": 1308
        }
      ],
      "declare": false,
      "start": 1242,
      "end": 1309
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
          "start": 1311,
          "end": 1313
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1316,
          "end": 1318
        },
        "start": 1311,
        "end": 1318
      },
      "directive": null,
      "start": 1311,
      "end": 1319
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
          "start": 1326,
          "end": 1328
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1331,
          "end": 1333
        },
        "start": 1326,
        "end": 1333
      },
      "directive": null,
      "start": 1326,
      "end": 1334
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
                "type": "TSFunctionType",
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
                        "start": 1351,
                        "end": 1352
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1351,
                      "end": 1352
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1354,
                        "end": 1355
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1354,
                      "end": 1355
                    }
                  ],
                  "start": 1350,
                  "end": 1356
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
                              "start": 1362,
                              "end": 1365
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
                                  "start": 1367,
                                  "end": 1368
                                },
                                "typeArguments": null,
                                "start": 1367,
                                "end": 1368
                              },
                              "start": 1365,
                              "end": 1368
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1362,
                            "end": 1368
                          }
                        ],
                        "start": 1360,
                        "end": 1370
                      },
                      "start": 1358,
                      "end": 1370
                    },
                    "start": 1357,
                    "end": 1370
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
                              "start": 1377,
                              "end": 1380
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
                                  "start": 1382,
                                  "end": 1383
                                },
                                "typeArguments": null,
                                "start": 1382,
                                "end": 1383
                              },
                              "start": 1380,
                              "end": 1383
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1377,
                            "end": 1384
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
                              "start": 1385,
                              "end": 1388
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
                                  "start": 1390,
                                  "end": 1391
                                },
                                "typeArguments": null,
                                "start": 1390,
                                "end": 1391
                              },
                              "start": 1388,
                              "end": 1391
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1385,
                            "end": 1391
                          }
                        ],
                        "start": 1375,
                        "end": 1393
                      },
                      "start": 1373,
                      "end": 1393
                    },
                    "start": 1372,
                    "end": 1393
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
                      "start": 1398,
                      "end": 1402
                    },
                    "typeArguments": null,
                    "start": 1398,
                    "end": 1402
                  },
                  "start": 1395,
                  "end": 1402
                },
                "start": 1350,
                "end": 1402
              },
              "start": 1348,
              "end": 1402
            },
            "start": 1345,
            "end": 1402
          },
          "init": null,
          "definite": false,
          "start": 1345,
          "end": 1402
        }
      ],
      "declare": false,
      "start": 1341,
      "end": 1403
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
          "start": 1405,
          "end": 1408
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1411,
          "end": 1414
        },
        "start": 1405,
        "end": 1414
      },
      "directive": null,
      "start": 1405,
      "end": 1415
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
          "start": 1422,
          "end": 1425
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1428,
          "end": 1431
        },
        "start": 1422,
        "end": 1431
      },
      "directive": null,
      "start": 1422,
      "end": 1432
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
                "type": "TSFunctionType",
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
                        "start": 1449,
                        "end": 1450
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1449,
                      "end": 1450
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1452,
                        "end": 1453
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1452,
                      "end": 1453
                    }
                  ],
                  "start": 1448,
                  "end": 1454
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
                              "start": 1460,
                              "end": 1461
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
                                  "start": 1463,
                                  "end": 1464
                                },
                                "typeArguments": null,
                                "start": 1463,
                                "end": 1464
                              },
                              "start": 1461,
                              "end": 1464
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1460,
                            "end": 1465
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
                              "start": 1466,
                              "end": 1467
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
                                  "start": 1469,
                                  "end": 1470
                                },
                                "typeArguments": null,
                                "start": 1469,
                                "end": 1470
                              },
                              "start": 1467,
                              "end": 1470
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1466,
                            "end": 1471
                          }
                        ],
                        "start": 1458,
                        "end": 1473
                      },
                      "start": 1456,
                      "end": 1473
                    },
                    "start": 1455,
                    "end": 1473
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
                        "start": 1478,
                        "end": 1479
                      },
                      "typeArguments": null,
                      "start": 1478,
                      "end": 1479
                    },
                    "start": 1478,
                    "end": 1481
                  },
                  "start": 1475,
                  "end": 1481
                },
                "start": 1448,
                "end": 1481
              },
              "start": 1446,
              "end": 1481
            },
            "start": 1443,
            "end": 1481
          },
          "init": null,
          "definite": false,
          "start": 1443,
          "end": 1481
        }
      ],
      "declare": false,
      "start": 1439,
      "end": 1482
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
          "start": 1484,
          "end": 1487
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1490,
          "end": 1493
        },
        "start": 1484,
        "end": 1493
      },
      "directive": null,
      "start": 1484,
      "end": 1494
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
          "start": 1515,
          "end": 1518
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1521,
          "end": 1524
        },
        "start": 1515,
        "end": 1524
      },
      "directive": null,
      "start": 1515,
      "end": 1525
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
                "type": "TSFunctionType",
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
                        "start": 1542,
                        "end": 1543
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1542,
                      "end": 1543
                    }
                  ],
                  "start": 1541,
                  "end": 1544
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
                              "start": 1550,
                              "end": 1551
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
                                  "start": 1553,
                                  "end": 1554
                                },
                                "typeArguments": null,
                                "start": 1553,
                                "end": 1554
                              },
                              "start": 1551,
                              "end": 1554
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1550,
                            "end": 1555
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
                              "start": 1556,
                              "end": 1557
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
                                  "start": 1559,
                                  "end": 1560
                                },
                                "typeArguments": null,
                                "start": 1559,
                                "end": 1560
                              },
                              "start": 1557,
                              "end": 1560
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1556,
                            "end": 1560
                          }
                        ],
                        "start": 1548,
                        "end": 1562
                      },
                      "start": 1546,
                      "end": 1562
                    },
                    "start": 1545,
                    "end": 1562
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
                        "start": 1567,
                        "end": 1568
                      },
                      "typeArguments": null,
                      "start": 1567,
                      "end": 1568
                    },
                    "start": 1567,
                    "end": 1570
                  },
                  "start": 1564,
                  "end": 1570
                },
                "start": 1541,
                "end": 1570
              },
              "start": 1539,
              "end": 1570
            },
            "start": 1536,
            "end": 1570
          },
          "init": null,
          "definite": false,
          "start": 1536,
          "end": 1570
        }
      ],
      "declare": false,
      "start": 1532,
      "end": 1571
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
          "start": 1573,
          "end": 1576
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1579,
          "end": 1582
        },
        "start": 1573,
        "end": 1582
      },
      "directive": null,
      "start": 1573,
      "end": 1583
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
          "start": 1590,
          "end": 1593
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1596,
          "end": 1599
        },
        "start": 1590,
        "end": 1599
      },
      "directive": null,
      "start": 1590,
      "end": 1600
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
                "type": "TSFunctionType",
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
                        "start": 1617,
                        "end": 1618
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1617,
                      "end": 1618
                    }
                  ],
                  "start": 1616,
                  "end": 1619
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
                        "type": "TSFunctionType",
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
                                  "start": 1627,
                                  "end": 1628
                                },
                                "typeArguments": null,
                                "start": 1627,
                                "end": 1628
                              },
                              "start": 1625,
                              "end": 1628
                            },
                            "start": 1624,
                            "end": 1628
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
                              "start": 1633,
                              "end": 1634
                            },
                            "typeArguments": null,
                            "start": 1633,
                            "end": 1634
                          },
                          "start": 1630,
                          "end": 1634
                        },
                        "start": 1623,
                        "end": 1634
                      },
                      "start": 1621,
                      "end": 1634
                    },
                    "start": 1620,
                    "end": 1634
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
                        "start": 1639,
                        "end": 1640
                      },
                      "typeArguments": null,
                      "start": 1639,
                      "end": 1640
                    },
                    "start": 1639,
                    "end": 1642
                  },
                  "start": 1636,
                  "end": 1642
                },
                "start": 1616,
                "end": 1642
              },
              "start": 1614,
              "end": 1642
            },
            "start": 1611,
            "end": 1642
          },
          "init": null,
          "definite": false,
          "start": 1611,
          "end": 1642
        }
      ],
      "declare": false,
      "start": 1607,
      "end": 1643
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
          "start": 1645,
          "end": 1648
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1651,
          "end": 1654
        },
        "start": 1645,
        "end": 1654
      },
      "directive": null,
      "start": 1645,
      "end": 1655
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
          "start": 1662,
          "end": 1665
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1668,
          "end": 1671
        },
        "start": 1662,
        "end": 1671
      },
      "directive": null,
      "start": 1662,
      "end": 1672
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
                "type": "TSFunctionType",
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
                        "type": "TSFunctionType",
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
                                "start": 1693,
                                "end": 1694
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1693,
                              "end": 1694
                            }
                          ],
                          "start": 1692,
                          "end": 1695
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
                                  "start": 1699,
                                  "end": 1700
                                },
                                "typeArguments": null,
                                "start": 1699,
                                "end": 1700
                              },
                              "start": 1697,
                              "end": 1700
                            },
                            "start": 1696,
                            "end": 1700
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
                              "start": 1705,
                              "end": 1706
                            },
                            "typeArguments": null,
                            "start": 1705,
                            "end": 1706
                          },
                          "start": 1702,
                          "end": 1706
                        },
                        "start": 1692,
                        "end": 1706
                      },
                      "start": 1690,
                      "end": 1706
                    },
                    "start": 1689,
                    "end": 1706
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1711,
                      "end": 1714
                    },
                    "start": 1711,
                    "end": 1716
                  },
                  "start": 1708,
                  "end": 1716
                },
                "start": 1688,
                "end": 1716
              },
              "start": 1686,
              "end": 1716
            },
            "start": 1683,
            "end": 1716
          },
          "init": null,
          "definite": false,
          "start": 1683,
          "end": 1716
        }
      ],
      "declare": false,
      "start": 1679,
      "end": 1717
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
          "start": 1719,
          "end": 1722
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1725,
          "end": 1728
        },
        "start": 1719,
        "end": 1728
      },
      "directive": null,
      "start": 1719,
      "end": 1729
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
          "start": 1736,
          "end": 1739
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 1742,
          "end": 1745
        },
        "start": 1736,
        "end": 1745
      },
      "directive": null,
      "start": 1736,
      "end": 1746
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 74,
  "end": 1752
}
```
