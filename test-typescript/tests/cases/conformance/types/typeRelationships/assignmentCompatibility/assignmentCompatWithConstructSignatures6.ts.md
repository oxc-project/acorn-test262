__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 1133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 89,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 106,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
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
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
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
      "start": 107,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 120,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 129,
        "end": 133,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
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
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
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
      "start": 151,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 165,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 181,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 184,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 187,
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
              "start": 187,
              "end": 195,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 189,
                "end": 195
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
      "start": 199,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 217,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 226,
        "end": 230,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 231,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
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
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
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
      "type": "TSInterfaceDeclaration",
      "start": 250,
      "end": 669,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 262,
        "end": 669,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 292,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 291,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 271,
                "end": 291,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 275,
                  "end": 278,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 276,
                      "end": 277,
                      "name": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
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
                    "start": 279,
                    "end": 283,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 280,
                      "end": 283,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 282,
                        "end": 283,
                        "typeName": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 283,
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
                  "start": 285,
                  "end": 291,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 288,
                    "end": 291,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 288,
                      "end": 289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 297,
            "end": 327,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 326,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 301,
                "end": 326,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 305,
                  "end": 308,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 306,
                      "end": 307,
                      "name": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
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
                    "start": 309,
                    "end": 313,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 310,
                      "end": 313,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 312,
                        "end": 313,
                        "typeName": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 313,
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
                  "start": 315,
                  "end": 326,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 318,
                    "end": 326,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 318,
                      "end": 324
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 332,
            "end": 358,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 332,
              "end": 334,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 357,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 336,
                "end": 357,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 340,
                  "end": 343,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 341,
                      "end": 342,
                      "name": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 342,
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
                    "start": 344,
                    "end": 348,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 345,
                      "end": 348,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 347,
                        "end": 348,
                        "typeName": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 348,
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
                  "start": 350,
                  "end": 357,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 353,
                    "end": 357
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 363,
            "end": 400,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 399,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 367,
                "end": 399,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 371,
                  "end": 377,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 372,
                      "end": 373,
                      "name": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 373,
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
                      "start": 375,
                      "end": 376,
                      "name": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 376,
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
                    "start": 378,
                    "end": 382,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 379,
                      "end": 382,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 381,
                        "end": 382,
                        "typeName": {
                          "type": "Identifier",
                          "start": 381,
                          "end": 382,
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
                    "start": 384,
                    "end": 388,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 388,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 387,
                        "end": 388,
                        "typeName": {
                          "type": "Identifier",
                          "start": 387,
                          "end": 388,
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
                  "start": 390,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 405,
            "end": 443,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 407,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 442,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 409,
                "end": 442,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 413,
                  "end": 419,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 414,
                      "end": 415,
                      "name": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
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
                      "start": 417,
                      "end": 418,
                      "name": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 418,
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
                    "start": 420,
                    "end": 436,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 421,
                      "end": 436,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 423,
                        "end": 436,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 424,
                            "end": 430,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 427,
                              "end": 430,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 429,
                                "end": 430,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 429,
                                  "end": 430,
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
                          "start": 432,
                          "end": 436,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 435,
                            "end": 436,
                            "typeName": {
                              "type": "Identifier",
                              "start": 435,
                              "end": 436,
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
                  "start": 438,
                  "end": 442,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 442,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 448,
            "end": 502,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 450,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 501,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 452,
                "end": 501,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 456,
                  "end": 472,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 457,
                      "end": 471,
                      "name": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 467,
                        "end": 471,
                        "typeName": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 471,
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
                    "start": 473,
                    "end": 495,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 474,
                      "end": 495,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 476,
                        "end": 495,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 477,
                            "end": 483,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 480,
                              "end": 483,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 482,
                                "end": 483,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 482,
                                  "end": 483,
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
                          "start": 485,
                          "end": 495,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 488,
                            "end": 495,
                            "typeName": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 495,
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
                  "start": 497,
                  "end": 501,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 500,
                    "end": 501,
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 501,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 507,
            "end": 566,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 507,
              "end": 510,
              "name": "a11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 510,
              "end": 565,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 512,
                "end": 565,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 516,
                  "end": 519,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 517,
                      "end": 518,
                      "name": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
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
                    "start": 520,
                    "end": 533,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 533,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 523,
                        "end": 533,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 525,
                            "end": 531,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 525,
                              "end": 528,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 528,
                              "end": 531,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 530,
                                "end": 531,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 530,
                                  "end": 531,
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
                    "start": 535,
                    "end": 556,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 536,
                      "end": 556,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 538,
                        "end": 556,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 540,
                            "end": 547,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 540,
                              "end": 543,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 543,
                              "end": 546,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 545,
                                "end": 546,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 545,
                                  "end": 546,
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
                            "start": 548,
                            "end": 554,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 551,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 551,
                              "end": 554,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 553,
                                "end": 554,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 553,
                                  "end": 554,
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
                  "start": 558,
                  "end": 565,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 561,
                    "end": 565,
                    "typeName": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 565,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 571,
            "end": 610,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 574,
              "name": "a15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 609,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 576,
                "end": 609,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 580,
                  "end": 583,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 581,
                      "end": 582,
                      "name": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 582,
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
                    "start": 584,
                    "end": 601,
                    "name": "x",
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 589,
                              "end": 590,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 590,
                              "end": 593,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 592,
                                "end": 593,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 592,
                                  "end": 593,
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
                            "start": 595,
                            "end": 599,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 595,
                              "end": 596,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 596,
                              "end": 599,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 598,
                                "end": 599,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 598,
                                  "end": 599,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 606,
                        "end": 607,
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
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 615,
            "end": 667,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 615,
              "end": 618,
              "name": "a16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 666,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 620,
                "end": 666,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 624,
                  "end": 640,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 625,
                      "end": 639,
                      "name": {
                        "type": "Identifier",
                        "start": 625,
                        "end": 626,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 635,
                        "end": 639,
                        "typeName": {
                          "type": "Identifier",
                          "start": 635,
                          "end": 639,
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
                    "start": 641,
                    "end": 658,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 642,
                      "end": 658,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 644,
                        "end": 658,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 646,
                            "end": 651,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 646,
                              "end": 647,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 647,
                              "end": 650,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 649,
                                "end": 650,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 649,
                                  "end": 650,
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
                            "start": 652,
                            "end": 656,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 652,
                              "end": 653,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 653,
                              "end": 656,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 655,
                                "end": 656,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 655,
                                  "end": 656,
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
                  "start": 660,
                  "end": 666,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 663,
                    "end": 666,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 663,
                      "end": 664,
                      "typeName": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 664,
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 679,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 679,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 678,
                "end": 679,
                "typeName": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 679,
                  "name": "A",
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 709,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 709,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 687,
              "end": 709,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 689,
                "end": 709,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 693,
                  "end": 696,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 694,
                      "end": 695,
                      "name": {
                        "type": "Identifier",
                        "start": 694,
                        "end": 695,
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
                    "start": 697,
                    "end": 701,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 698,
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 703,
                  "end": 709,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 706,
                    "end": 709,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 706,
                      "end": 707,
                      "typeName": {
                        "type": "Identifier",
                        "start": 706,
                        "end": 707,
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
      "start": 712,
      "end": 720,
      "expression": {
        "type": "AssignmentExpression",
        "start": 712,
        "end": 719,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 712,
          "end": 715,
          "object": {
            "type": "Identifier",
            "start": 712,
            "end": 713,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 714,
            "end": 715,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 718,
          "end": 719,
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
      "start": 721,
      "end": 729,
      "expression": {
        "type": "AssignmentExpression",
        "start": 721,
        "end": 728,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 721,
          "end": 722,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 725,
          "end": 728,
          "object": {
            "type": "Identifier",
            "start": 725,
            "end": 726,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 727,
            "end": 728,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 763,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 763,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 736,
              "end": 763,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 738,
                "end": 763,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 742,
                  "end": 745,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 743,
                      "end": 744,
                      "name": {
                        "type": "Identifier",
                        "start": 743,
                        "end": 744,
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
                    "start": 746,
                    "end": 750,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 747,
                      "end": 750,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 749,
                        "end": 750,
                        "typeName": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 750,
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
                  "start": 752,
                  "end": 763,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 755,
                    "end": 763,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 755,
                      "end": 761
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
      "start": 766,
      "end": 776,
      "expression": {
        "type": "AssignmentExpression",
        "start": 766,
        "end": 775,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 766,
          "end": 770,
          "object": {
            "type": "Identifier",
            "start": 766,
            "end": 767,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 768,
            "end": 770,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 773,
          "end": 775,
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
      "start": 777,
      "end": 787,
      "expression": {
        "type": "AssignmentExpression",
        "start": 777,
        "end": 786,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 777,
          "end": 779,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 782,
          "end": 786,
          "object": {
            "type": "Identifier",
            "start": 782,
            "end": 783,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 784,
            "end": 786,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 788,
      "end": 815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 792,
          "end": 814,
          "id": {
            "type": "Identifier",
            "start": 792,
            "end": 814,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 794,
              "end": 814,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 796,
                "end": 814,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 800,
                  "end": 803,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 801,
                      "end": 802,
                      "name": {
                        "type": "Identifier",
                        "start": 801,
                        "end": 802,
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
                    "start": 804,
                    "end": 808,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 805,
                      "end": 808,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 807,
                        "end": 808,
                        "typeName": {
                          "type": "Identifier",
                          "start": 807,
                          "end": 808,
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
                  "start": 810,
                  "end": 814,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 813,
                    "end": 814,
                    "typeName": {
                      "type": "Identifier",
                      "start": 813,
                      "end": 814,
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
      "start": 816,
      "end": 826,
      "expression": {
        "type": "AssignmentExpression",
        "start": 816,
        "end": 825,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 816,
          "end": 820,
          "object": {
            "type": "Identifier",
            "start": 816,
            "end": 817,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 818,
            "end": 820,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 823,
          "end": 825,
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
      "start": 827,
      "end": 837,
      "expression": {
        "type": "AssignmentExpression",
        "start": 827,
        "end": 836,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 827,
          "end": 829,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 832,
          "end": 836,
          "object": {
            "type": "Identifier",
            "start": 832,
            "end": 833,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 834,
            "end": 836,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 838,
      "end": 879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 842,
          "end": 878,
          "id": {
            "type": "Identifier",
            "start": 842,
            "end": 878,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 878,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 846,
                "end": 878,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 850,
                  "end": 856,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 851,
                      "end": 852,
                      "name": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 852,
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
                      "start": 854,
                      "end": 855,
                      "name": {
                        "type": "Identifier",
                        "start": 854,
                        "end": 855,
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
                    "start": 857,
                    "end": 861,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 858,
                      "end": 861,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 860,
                        "end": 861,
                        "typeName": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 861,
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
                    "start": 863,
                    "end": 867,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 864,
                      "end": 867,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 866,
                        "end": 867,
                        "typeName": {
                          "type": "Identifier",
                          "start": 866,
                          "end": 867,
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
                  "start": 869,
                  "end": 878,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 872,
                    "end": 878
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
      "start": 881,
      "end": 891,
      "expression": {
        "type": "AssignmentExpression",
        "start": 881,
        "end": 890,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 881,
          "end": 885,
          "object": {
            "type": "Identifier",
            "start": 881,
            "end": 882,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 883,
            "end": 885,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 888,
          "end": 890,
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
      "start": 892,
      "end": 902,
      "expression": {
        "type": "AssignmentExpression",
        "start": 892,
        "end": 901,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 892,
          "end": 894,
          "name": "b4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 897,
          "end": 901,
          "object": {
            "type": "Identifier",
            "start": 897,
            "end": 898,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 899,
            "end": 901,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 903,
      "end": 945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 907,
          "end": 944,
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 944,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 909,
              "end": 944,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 911,
                "end": 944,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 915,
                  "end": 921,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 916,
                      "end": 917,
                      "name": {
                        "type": "Identifier",
                        "start": 916,
                        "end": 917,
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
                      "start": 919,
                      "end": 920,
                      "name": {
                        "type": "Identifier",
                        "start": 919,
                        "end": 920,
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
                    "start": 922,
                    "end": 938,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 923,
                      "end": 938,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 925,
                        "end": 938,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 926,
                            "end": 932,
                            "name": "arg",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 929,
                              "end": 932,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 931,
                                "end": 932,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 931,
                                  "end": 932,
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
                          "start": 934,
                          "end": 938,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 937,
                            "end": 938,
                            "typeName": {
                              "type": "Identifier",
                              "start": 937,
                              "end": 938,
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
                  "start": 940,
                  "end": 944,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 943,
                    "end": 944,
                    "typeName": {
                      "type": "Identifier",
                      "start": 943,
                      "end": 944,
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
      "start": 947,
      "end": 957,
      "expression": {
        "type": "AssignmentExpression",
        "start": 947,
        "end": 956,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 947,
          "end": 951,
          "object": {
            "type": "Identifier",
            "start": 947,
            "end": 948,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 949,
            "end": 951,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 954,
          "end": 956,
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
      "start": 958,
      "end": 968,
      "expression": {
        "type": "AssignmentExpression",
        "start": 958,
        "end": 967,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 958,
          "end": 960,
          "name": "b5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 963,
          "end": 967,
          "object": {
            "type": "Identifier",
            "start": 963,
            "end": 964,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 965,
            "end": 967,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 969,
      "end": 1035,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 973,
          "end": 1034,
          "id": {
            "type": "Identifier",
            "start": 973,
            "end": 1034,
            "name": "b11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 976,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 978,
                "end": 1034,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 982,
                  "end": 988,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 983,
                      "end": 984,
                      "name": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 984,
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
                      "start": 986,
                      "end": 987,
                      "name": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 987,
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
                    "start": 989,
                    "end": 1002,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 990,
                      "end": 1002,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 992,
                        "end": 1002,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 994,
                            "end": 1000,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 994,
                              "end": 997,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 997,
                              "end": 1000,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 999,
                                "end": 1000,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 999,
                                  "end": 1000,
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
                    "start": 1004,
                    "end": 1025,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1005,
                      "end": 1025,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1007,
                        "end": 1025,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1009,
                            "end": 1016,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1009,
                              "end": 1012,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1012,
                              "end": 1015,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1014,
                                "end": 1015,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1014,
                                  "end": 1015,
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
                            "start": 1017,
                            "end": 1023,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1017,
                              "end": 1020,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1020,
                              "end": 1023,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1022,
                                "end": 1023,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1022,
                                  "end": 1023,
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
                  "start": 1027,
                  "end": 1034,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1030,
                    "end": 1034,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1030,
                      "end": 1034,
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
      "start": 1037,
      "end": 1049,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1037,
        "end": 1048,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1037,
          "end": 1042,
          "object": {
            "type": "Identifier",
            "start": 1037,
            "end": 1038,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1039,
            "end": 1042,
            "name": "a11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1045,
          "end": 1048,
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
      "start": 1050,
      "end": 1062,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1050,
        "end": 1061,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1050,
          "end": 1053,
          "name": "b11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1056,
          "end": 1061,
          "object": {
            "type": "Identifier",
            "start": 1056,
            "end": 1057,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1058,
            "end": 1061,
            "name": "a11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1063,
      "end": 1106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1067,
          "end": 1105,
          "id": {
            "type": "Identifier",
            "start": 1067,
            "end": 1105,
            "name": "b16",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1070,
              "end": 1105,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1072,
                "end": 1105,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1076,
                  "end": 1079,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1077,
                      "end": 1078,
                      "name": {
                        "type": "Identifier",
                        "start": 1077,
                        "end": 1078,
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
                    "start": 1080,
                    "end": 1097,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1081,
                      "end": 1097,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1083,
                        "end": 1097,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1085,
                            "end": 1090,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1085,
                              "end": 1086,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1086,
                              "end": 1089,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1088,
                                "end": 1089,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1088,
                                  "end": 1089,
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
                            "start": 1091,
                            "end": 1095,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1091,
                              "end": 1092,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1092,
                              "end": 1095,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1094,
                                "end": 1095,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1094,
                                  "end": 1095,
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
                  "start": 1099,
                  "end": 1105,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1102,
                    "end": 1105,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1102,
                      "end": 1103,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1102,
                        "end": 1103,
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
      "start": 1108,
      "end": 1120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1108,
        "end": 1119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1108,
          "end": 1113,
          "object": {
            "type": "Identifier",
            "start": 1108,
            "end": 1109,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1110,
            "end": 1113,
            "name": "a16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1116,
          "end": 1119,
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
      "start": 1121,
      "end": 1133,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1121,
        "end": 1132,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1121,
          "end": 1124,
          "name": "b16",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1127,
          "end": 1132,
          "object": {
            "type": "Identifier",
            "start": 1127,
            "end": 1128,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1129,
            "end": 1132,
            "name": "a16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
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
