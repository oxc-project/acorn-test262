__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 78,
  "end": 1066,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 105,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 88,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 105,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 94,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 149,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 146,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 140,
                "end": 146
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 197,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 164,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 173,
        "end": 180,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 197,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 183,
            "end": 195,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 186,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 247,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 216,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 225,
        "end": 229,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 230,
        "end": 247,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 236,
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 244,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 238,
                "end": 244
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 249,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 260,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 261,
        "end": 630,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 267,
            "end": 287,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 286,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 270,
                "end": 286,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 270,
                  "end": 273,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 271,
                      "end": 272,
                      "name": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 274,
                    "end": 278,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                  "start": 280,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 283,
                    "end": 286,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 283,
                      "end": 284,
                      "typeName": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 292,
            "end": 318,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 292,
              "end": 294,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 317,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 296,
                "end": 317,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 296,
                  "end": 299,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 297,
                      "end": 298,
                      "name": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 300,
                    "end": 304,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 301,
                      "end": 304,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 303,
                        "end": 304,
                        "typeName": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 304,
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
                  "start": 306,
                  "end": 317,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 309,
                    "end": 317,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 309,
                      "end": 315
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
            "start": 323,
            "end": 345,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 325,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 344,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 327,
                "end": 344,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 327,
                  "end": 330,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 328,
                      "end": 329,
                      "name": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 331,
                    "end": 335,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 332,
                      "end": 335,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 334,
                        "end": 335,
                        "typeName": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 335,
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
                  "start": 337,
                  "end": 344,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 340,
                    "end": 344
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 350,
            "end": 382,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 352,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 381,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 354,
                "end": 381,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 354,
                  "end": 359,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 355,
                      "end": 356,
                      "name": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 356,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 357,
                      "end": 358,
                      "name": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 360,
                    "end": 364,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 361,
                      "end": 364,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 363,
                        "end": 364,
                        "typeName": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 364,
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
                    "start": 366,
                    "end": 370,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 367,
                      "end": 370,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 369,
                        "end": 370,
                        "typeName": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 370,
                          "decorators": [],
                          "name": "U",
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
                  "start": 372,
                  "end": 381,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 375,
                    "end": 381
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 420,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 389,
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 419,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 391,
                "end": 419,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 391,
                  "end": 396,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 392,
                      "end": 393,
                      "name": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 393,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 394,
                      "end": 395,
                      "name": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 395,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 397,
                    "end": 413,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 400,
                        "end": 413,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 401,
                            "end": 407,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 404,
                              "end": 407,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 406,
                                "end": 407,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 406,
                                  "end": 407,
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
                          "start": 409,
                          "end": 413,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 412,
                            "end": 413,
                            "typeName": {
                              "type": "Identifier",
                              "start": 412,
                              "end": 413,
                              "decorators": [],
                              "name": "U",
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
                  "start": 415,
                  "end": 419,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 418,
                    "end": 419,
                    "typeName": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 419,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 425,
            "end": 475,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 425,
              "end": 427,
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 427,
              "end": 474,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 429,
                "end": 474,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 429,
                  "end": 445,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 430,
                      "end": 444,
                      "name": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 440,
                        "end": 444,
                        "typeName": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 444,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 446,
                    "end": 468,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 447,
                      "end": 468,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 449,
                        "end": 468,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 450,
                            "end": 456,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 453,
                              "end": 456,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 455,
                                "end": 456,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 455,
                                  "end": 456,
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
                          "start": 458,
                          "end": 468,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 461,
                            "end": 468,
                            "typeName": {
                              "type": "Identifier",
                              "start": 461,
                              "end": 468,
                              "decorators": [],
                              "name": "Derived",
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
                  "start": 470,
                  "end": 474,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 480,
            "end": 535,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 534,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 485,
                "end": 534,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 485,
                  "end": 488,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 486,
                      "end": 487,
                      "name": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 487,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 489,
                    "end": 502,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 490,
                      "end": 502,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 492,
                        "end": 502,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 494,
                            "end": 500,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 494,
                              "end": 497,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 497,
                              "end": 500,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 499,
                                "end": 500,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 500,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 504,
                    "end": 525,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 505,
                      "end": 525,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 507,
                        "end": 525,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 509,
                            "end": 516,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 509,
                              "end": 512,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 512,
                              "end": 515,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 514,
                                "end": 515,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 514,
                                  "end": 515,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 517,
                            "end": 523,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 517,
                              "end": 520,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 520,
                              "end": 523,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 522,
                                "end": 523,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 522,
                                  "end": 523,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 527,
                  "end": 534,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 530,
                    "end": 534,
                    "typeName": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 534,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 540,
            "end": 575,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 543,
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 543,
              "end": 574,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 545,
                "end": 574,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 545,
                  "end": 548,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 546,
                      "end": 547,
                      "name": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 547,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 549,
                    "end": 566,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 550,
                      "end": 566,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 552,
                        "end": 566,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 554,
                            "end": 559,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 555,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 555,
                              "end": 558,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 557,
                                "end": 558,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 557,
                                  "end": 558,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 560,
                            "end": 564,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 560,
                              "end": 561,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 561,
                              "end": 564,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 563,
                                "end": 564,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 563,
                                  "end": 564,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 568,
                  "end": 574,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 571,
                    "end": 574,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 571,
                      "end": 572,
                      "typeName": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 572,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 580,
            "end": 628,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 580,
              "end": 583,
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 583,
              "end": 627,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 585,
                "end": 627,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 585,
                  "end": 601,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 586,
                      "end": 600,
                      "name": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 587,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 596,
                        "end": 600,
                        "typeName": {
                          "type": "Identifier",
                          "start": 596,
                          "end": 600,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 602,
                    "end": 619,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 603,
                      "end": 619,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 605,
                        "end": 619,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 607,
                            "end": 612,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 607,
                              "end": 608,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 608,
                              "end": 611,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 610,
                                "end": 611,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 610,
                                  "end": 611,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 613,
                            "end": 617,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 613,
                              "end": 614,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 614,
                              "end": 617,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 616,
                                "end": 617,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 616,
                                  "end": 617,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 621,
                  "end": 627,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 624,
                    "end": 627,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
      "start": 632,
      "end": 641,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 640,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 637,
              "end": 640,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 639,
                "end": 640,
                "typeName": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 643,
      "end": 667,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 666,
          "id": {
            "type": "Identifier",
            "start": 647,
            "end": 666,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 648,
              "end": 666,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 650,
                "end": 666,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 650,
                  "end": 653,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 651,
                      "end": 652,
                      "name": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 652,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 654,
                    "end": 658,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 655,
                      "end": 658,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 657,
                        "end": 658,
                        "typeName": {
                          "type": "Identifier",
                          "start": 657,
                          "end": 658,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 669,
      "end": 677,
      "expression": {
        "type": "AssignmentExpression",
        "start": 669,
        "end": 676,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 669,
          "end": 672,
          "object": {
            "type": "Identifier",
            "start": 669,
            "end": 670,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 671,
            "end": 672,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 675,
          "end": 676,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 678,
      "end": 686,
      "expression": {
        "type": "AssignmentExpression",
        "start": 678,
        "end": 685,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 678,
          "end": 679,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 682,
          "end": 685,
          "object": {
            "type": "Identifier",
            "start": 682,
            "end": 683,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 684,
            "end": 685,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 687,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 716,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 693,
              "end": 716,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 695,
                "end": 716,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 695,
                  "end": 698,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 696,
                      "end": 697,
                      "name": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 697,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 699,
                    "end": 703,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 700,
                      "end": 703,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 702,
                        "end": 703,
                        "typeName": {
                          "type": "Identifier",
                          "start": 702,
                          "end": 703,
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
                  "start": 705,
                  "end": 716,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 708,
                    "end": 716,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 708,
                      "end": 714
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 729,
      "expression": {
        "type": "AssignmentExpression",
        "start": 719,
        "end": 728,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 719,
          "end": 723,
          "object": {
            "type": "Identifier",
            "start": 719,
            "end": 720,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 721,
            "end": 723,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 726,
          "end": 728,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 730,
      "end": 740,
      "expression": {
        "type": "AssignmentExpression",
        "start": 730,
        "end": 739,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 730,
          "end": 732,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 735,
          "end": 739,
          "object": {
            "type": "Identifier",
            "start": 735,
            "end": 736,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 737,
            "end": 739,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 741,
      "end": 764,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 763,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 763,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 747,
              "end": 763,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 749,
                "end": 763,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 749,
                  "end": 752,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 750,
                      "end": 751,
                      "name": {
                        "type": "Identifier",
                        "start": 750,
                        "end": 751,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 753,
                    "end": 757,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 754,
                      "end": 757,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 756,
                        "end": 757,
                        "typeName": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 757,
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
                  "start": 759,
                  "end": 763,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 762,
                    "end": 763,
                    "typeName": {
                      "type": "Identifier",
                      "start": 762,
                      "end": 763,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 765,
      "end": 775,
      "expression": {
        "type": "AssignmentExpression",
        "start": 765,
        "end": 774,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 765,
          "end": 769,
          "object": {
            "type": "Identifier",
            "start": 765,
            "end": 766,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 767,
            "end": 769,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 772,
          "end": 774,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 786,
      "expression": {
        "type": "AssignmentExpression",
        "start": 776,
        "end": 785,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 776,
          "end": 778,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 781,
          "end": 785,
          "object": {
            "type": "Identifier",
            "start": 781,
            "end": 782,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 783,
            "end": 785,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 787,
      "end": 824,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 823,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 823,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 793,
              "end": 823,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 795,
                "end": 823,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 795,
                  "end": 801,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 796,
                      "end": 797,
                      "name": {
                        "type": "Identifier",
                        "start": 796,
                        "end": 797,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 799,
                      "end": 800,
                      "name": {
                        "type": "Identifier",
                        "start": 799,
                        "end": 800,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 802,
                    "end": 806,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 803,
                      "end": 806,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 805,
                        "end": 806,
                        "typeName": {
                          "type": "Identifier",
                          "start": 805,
                          "end": 806,
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
                    "start": 808,
                    "end": 812,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 809,
                      "end": 812,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 811,
                        "end": 812,
                        "typeName": {
                          "type": "Identifier",
                          "start": 811,
                          "end": 812,
                          "decorators": [],
                          "name": "U",
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
                  "start": 814,
                  "end": 823,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 817,
                    "end": 823
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 826,
      "end": 836,
      "expression": {
        "type": "AssignmentExpression",
        "start": 826,
        "end": 835,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 826,
          "end": 830,
          "object": {
            "type": "Identifier",
            "start": 826,
            "end": 827,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 828,
            "end": 830,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 833,
          "end": 835,
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 837,
      "end": 847,
      "expression": {
        "type": "AssignmentExpression",
        "start": 837,
        "end": 846,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 837,
          "end": 839,
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 842,
          "end": 846,
          "object": {
            "type": "Identifier",
            "start": 842,
            "end": 843,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 844,
            "end": 846,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 848,
      "end": 886,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 852,
          "end": 885,
          "id": {
            "type": "Identifier",
            "start": 852,
            "end": 885,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 854,
              "end": 885,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 856,
                "end": 885,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 856,
                  "end": 862,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 857,
                      "end": 858,
                      "name": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 858,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 860,
                      "end": 861,
                      "name": {
                        "type": "Identifier",
                        "start": 860,
                        "end": 861,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 863,
                    "end": 879,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 864,
                      "end": 879,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 866,
                        "end": 879,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 867,
                            "end": 873,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 870,
                              "end": 873,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 872,
                                "end": 873,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 872,
                                  "end": 873,
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
                          "start": 875,
                          "end": 879,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 878,
                            "end": 879,
                            "typeName": {
                              "type": "Identifier",
                              "start": 878,
                              "end": 879,
                              "decorators": [],
                              "name": "U",
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
                  "start": 881,
                  "end": 885,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 884,
                    "end": 885,
                    "typeName": {
                      "type": "Identifier",
                      "start": 884,
                      "end": 885,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 888,
      "end": 898,
      "expression": {
        "type": "AssignmentExpression",
        "start": 888,
        "end": 897,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 888,
          "end": 892,
          "object": {
            "type": "Identifier",
            "start": 888,
            "end": 889,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 890,
            "end": 892,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 895,
          "end": 897,
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 899,
      "end": 909,
      "expression": {
        "type": "AssignmentExpression",
        "start": 899,
        "end": 908,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 899,
          "end": 901,
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 904,
          "end": 908,
          "object": {
            "type": "Identifier",
            "start": 904,
            "end": 905,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 906,
            "end": 908,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 910,
      "end": 972,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 914,
          "end": 971,
          "id": {
            "type": "Identifier",
            "start": 914,
            "end": 971,
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 917,
              "end": 971,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 919,
                "end": 971,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 919,
                  "end": 925,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 920,
                      "end": 921,
                      "name": {
                        "type": "Identifier",
                        "start": 920,
                        "end": 921,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 923,
                      "end": 924,
                      "name": {
                        "type": "Identifier",
                        "start": 923,
                        "end": 924,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 926,
                    "end": 939,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 927,
                      "end": 939,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 929,
                        "end": 939,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 931,
                            "end": 937,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 931,
                              "end": 934,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 934,
                              "end": 937,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 936,
                                "end": 937,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 936,
                                  "end": 937,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 941,
                    "end": 962,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 942,
                      "end": 962,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 944,
                        "end": 962,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 946,
                            "end": 953,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 946,
                              "end": 949,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 949,
                              "end": 952,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 951,
                                "end": 952,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 951,
                                  "end": 952,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 954,
                            "end": 960,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 954,
                              "end": 957,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 957,
                              "end": 960,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 959,
                                "end": 960,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 959,
                                  "end": 960,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 964,
                  "end": 971,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 967,
                    "end": 971,
                    "typeName": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 971,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 974,
      "end": 986,
      "expression": {
        "type": "AssignmentExpression",
        "start": 974,
        "end": 985,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 974,
          "end": 979,
          "object": {
            "type": "Identifier",
            "start": 974,
            "end": 975,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 976,
            "end": 979,
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 982,
          "end": 985,
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 987,
      "end": 999,
      "expression": {
        "type": "AssignmentExpression",
        "start": 987,
        "end": 998,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 987,
          "end": 990,
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 993,
          "end": 998,
          "object": {
            "type": "Identifier",
            "start": 993,
            "end": 994,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 995,
            "end": 998,
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1000,
      "end": 1039,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1004,
          "end": 1038,
          "id": {
            "type": "Identifier",
            "start": 1004,
            "end": 1038,
            "decorators": [],
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1007,
              "end": 1038,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1009,
                "end": 1038,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1009,
                  "end": 1012,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1010,
                      "end": 1011,
                      "name": {
                        "type": "Identifier",
                        "start": 1010,
                        "end": 1011,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1013,
                    "end": 1030,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1014,
                      "end": 1030,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1016,
                        "end": 1030,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1018,
                            "end": 1023,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1018,
                              "end": 1019,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1019,
                              "end": 1022,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1021,
                                "end": 1022,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1021,
                                  "end": 1022,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1024,
                            "end": 1028,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1024,
                              "end": 1025,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1025,
                              "end": 1028,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1027,
                                "end": 1028,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1027,
                                  "end": 1028,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1032,
                  "end": 1038,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1035,
                    "end": 1038,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1035,
                      "end": 1036,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1035,
                        "end": 1036,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1041,
      "end": 1053,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1041,
        "end": 1052,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1041,
          "end": 1046,
          "object": {
            "type": "Identifier",
            "start": 1041,
            "end": 1042,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1043,
            "end": 1046,
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 1049,
          "end": 1052,
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1054,
      "end": 1066,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1054,
        "end": 1065,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1054,
          "end": 1057,
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1060,
          "end": 1065,
          "object": {
            "type": "Identifier",
            "start": 1060,
            "end": 1061,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1062,
            "end": 1065,
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
