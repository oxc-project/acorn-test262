__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 2407,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
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
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
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
        "end": 112,
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
      "start": 130,
      "end": 173,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
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
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
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
        "start": 136,
        "end": 143,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
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
      "start": 174,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
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
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
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
        "start": 180,
        "end": 188,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
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
      "start": 222,
      "end": 271,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
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
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
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
        "start": 228,
        "end": 240,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 273,
      "end": 1326,
      "body": {
        "type": "TSInterfaceBody",
        "start": 285,
        "end": 1326,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 331,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
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
              "start": 308,
              "end": 330,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 310,
                "end": 330,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 318,
                    "end": 322,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 319,
                      "end": 322,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 322,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
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
                  "start": 324,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 327,
                    "end": 330,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 327,
                      "end": 328,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 328,
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
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 336,
            "end": 366,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 338,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 365,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 340,
                "end": 365,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 348,
                    "end": 352,
                    "decorators": [],
                    "name": "x",
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
                  "start": 354,
                  "end": 365,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 357,
                    "end": 365,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 357,
                      "end": 363
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 344,
                  "end": 347,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 345,
                      "end": 346,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
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
          {
            "type": "TSPropertySignature",
            "start": 371,
            "end": 397,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 373,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 396,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 375,
                "end": 396,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 383,
                    "end": 387,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 384,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 386,
                        "end": 387,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 387,
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
                  "start": 389,
                  "end": 396,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 392,
                    "end": 396
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 379,
                  "end": 382,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 380,
                      "end": 381,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
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
          {
            "type": "TSPropertySignature",
            "start": 402,
            "end": 439,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 402,
              "end": 404,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 438,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 406,
                "end": 438,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 417,
                    "end": 421,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 418,
                      "end": 421,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 420,
                        "end": 421,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 420,
                          "end": 421,
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
                    "start": 423,
                    "end": 427,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 424,
                      "end": 427,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 426,
                        "end": 427,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 427,
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
                  "start": 429,
                  "end": 438,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 432,
                    "end": 438
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 410,
                  "end": 416,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 411,
                      "end": 412,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 412,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 414,
                      "end": 415,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
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
          {
            "type": "TSPropertySignature",
            "start": 444,
            "end": 482,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 446,
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 481,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 448,
                "end": 481,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 459,
                    "end": 475,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 460,
                      "end": 475,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 462,
                        "end": 475,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 463,
                            "end": 469,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 466,
                              "end": 469,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 468,
                                "end": 469,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 468,
                                  "end": 469,
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
                          "start": 471,
                          "end": 475,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 474,
                            "end": 475,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 474,
                              "end": 475,
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
                  "start": 477,
                  "end": 481,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 480,
                    "end": 481,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 481,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 452,
                  "end": 458,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 453,
                      "end": 454,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 453,
                        "end": 454,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 456,
                      "end": 457,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 457,
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
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 541,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 489,
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 540,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 491,
                "end": 540,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 512,
                    "end": 534,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 513,
                      "end": 534,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 515,
                        "end": 534,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 516,
                            "end": 522,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 519,
                              "end": 522,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 521,
                                "end": 522,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 521,
                                  "end": 522,
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
                          "start": 524,
                          "end": 534,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 527,
                            "end": 534,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 534,
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
                  "start": 536,
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
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 495,
                  "end": 511,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 496,
                      "end": 510,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 506,
                        "end": 510,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 506,
                          "end": 510,
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
                        "start": 496,
                        "end": 497,
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
          {
            "type": "TSPropertySignature",
            "start": 546,
            "end": 605,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 604,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 551,
                "end": 604,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 559,
                    "end": 572,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 560,
                      "end": 572,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 562,
                        "end": 572,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 564,
                            "end": 570,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 564,
                              "end": 567,
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
                              "start": 567,
                              "end": 570,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 569,
                                "end": 570,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 569,
                                  "end": 570,
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
                    "start": 574,
                    "end": 595,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 575,
                      "end": 595,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 577,
                        "end": 595,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 579,
                            "end": 586,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 582,
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
                              "start": 582,
                              "end": 585,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 584,
                                "end": 585,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 584,
                                  "end": 585,
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
                            "start": 587,
                            "end": 593,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 590,
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
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 597,
                  "end": 604,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 600,
                    "end": 604,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 604,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 555,
                  "end": 558,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 556,
                      "end": 557,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 556,
                        "end": 557,
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
          {
            "type": "TSPropertySignature",
            "start": 610,
            "end": 649,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 610,
              "end": 613,
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 648,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 615,
                "end": 648,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 623,
                    "end": 640,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 624,
                      "end": 640,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 626,
                        "end": 640,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 628,
                            "end": 633,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 628,
                              "end": 629,
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
                              "start": 629,
                              "end": 632,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 631,
                                "end": 632,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 631,
                                  "end": 632,
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
                            "start": 634,
                            "end": 638,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 635,
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
                              "start": 635,
                              "end": 638,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 637,
                                "end": 638,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 637,
                                  "end": 638,
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
                  "start": 642,
                  "end": 648,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 645,
                    "end": 648,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 645,
                      "end": 646,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 645,
                        "end": 646,
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
                  "start": 619,
                  "end": 622,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 620,
                      "end": 621,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 621,
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
          {
            "type": "TSPropertySignature",
            "start": 654,
            "end": 706,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 654,
              "end": 657,
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 705,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 659,
                "end": 705,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 680,
                    "end": 697,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 681,
                      "end": 697,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 683,
                        "end": 697,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 685,
                            "end": 690,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 685,
                              "end": 686,
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
                              "start": 686,
                              "end": 689,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 688,
                                "end": 689,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 688,
                                  "end": 689,
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
                            "start": 691,
                            "end": 695,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 691,
                              "end": 692,
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
                              "start": 692,
                              "end": 695,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 694,
                                "end": 695,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 694,
                                  "end": 695,
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
                  "start": 699,
                  "end": 705,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 702,
                    "end": 705,
                    "elementType": {
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
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 663,
                  "end": 679,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 664,
                      "end": 678,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 674,
                        "end": 678,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 674,
                          "end": 678,
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
                        "start": 664,
                        "end": 665,
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
          {
            "type": "TSPropertySignature",
            "start": 711,
            "end": 809,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 714,
              "decorators": [],
              "name": "a17",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 808,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 716,
                "end": 808,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 726,
                    "end": 758,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 747,
                        "end": 751,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 748,
                          "end": 751,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 750,
                            "end": 751,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 751,
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
                      "start": 752,
                      "end": 757,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 754,
                        "end": 757,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 754,
                          "end": 755,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 754,
                            "end": 755,
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
                      "start": 730,
                      "end": 746,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 731,
                          "end": 745,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 741,
                            "end": 745,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 741,
                              "end": 745,
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
                            "start": 731,
                            "end": 732,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 767,
                    "end": 802,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 791,
                        "end": 795,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 792,
                          "end": 795,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 794,
                            "end": 795,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 794,
                              "end": 795,
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
                      "start": 796,
                      "end": 801,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 798,
                        "end": 801,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 798,
                          "end": 799,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 798,
                            "end": 799,
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
                      "start": 771,
                      "end": 790,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 772,
                          "end": 789,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 782,
                            "end": 789,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 782,
                              "end": 789,
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
                            "start": 772,
                            "end": 773,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 814,
            "end": 922,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 817,
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 817,
              "end": 921,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 819,
                "end": 921,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 829,
                    "end": 869,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 853,
                        "end": 857,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 854,
                          "end": 857,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 856,
                            "end": 857,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 856,
                              "end": 857,
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
                      "start": 858,
                      "end": 868,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 860,
                        "end": 868,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 860,
                          "end": 866
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 833,
                      "end": 852,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 834,
                          "end": 851,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 844,
                            "end": 851,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 844,
                              "end": 851,
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
                            "start": 834,
                            "end": 835,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 878,
                    "end": 915,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 899,
                        "end": 903,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 900,
                          "end": 903,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 902,
                            "end": 903,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 902,
                              "end": 903,
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
                      "start": 904,
                      "end": 914,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 906,
                        "end": 914,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 906,
                          "end": 912
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 882,
                      "end": 898,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 883,
                          "end": 897,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 893,
                            "end": 897,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 893,
                              "end": 897,
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
                            "start": 883,
                            "end": 884,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 927,
            "end": 1053,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 927,
              "end": 930,
              "decorators": [],
              "name": "a19",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 930,
              "end": 1052,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 932,
                "end": 1052,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 942,
                    "end": 991,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 966,
                        "end": 984,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 967,
                          "end": 984,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 969,
                            "end": 984,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 974,
                                "end": 978,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 975,
                                  "end": 978,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 977,
                                    "end": 978,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 977,
                                      "end": 978,
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
                              "start": 980,
                              "end": 984,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 983,
                                "end": 984,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 983,
                                  "end": 984,
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
                      "start": 985,
                      "end": 990,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 987,
                        "end": 990,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 987,
                          "end": 988,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 987,
                            "end": 988,
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
                      "start": 946,
                      "end": 965,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 947,
                          "end": 964,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 957,
                            "end": 964,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 957,
                              "end": 964,
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
                            "start": 947,
                            "end": 948,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1000,
                    "end": 1046,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1039,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1022,
                          "end": 1039,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1024,
                            "end": 1039,
                            "abstract": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1029,
                                "end": 1033,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1030,
                                  "end": 1033,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1032,
                                    "end": 1033,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1032,
                                      "end": 1033,
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
                              "start": 1035,
                              "end": 1039,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1038,
                                "end": 1039,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1038,
                                  "end": 1039,
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
                      "start": 1040,
                      "end": 1045,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1042,
                        "end": 1045,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1042,
                          "end": 1043,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1042,
                            "end": 1043,
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
                      "start": 1004,
                      "end": 1020,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1005,
                          "end": 1019,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1015,
                            "end": 1019,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1015,
                              "end": 1019,
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
                            "start": 1005,
                            "end": 1006,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1058,
            "end": 1324,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1058,
              "end": 1061,
              "decorators": [],
              "name": "a20",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1061,
              "end": 1323,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1063,
                "end": 1323,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1073,
                    "end": 1190,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1181,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1079,
                          "end": 1181,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1081,
                            "end": 1181,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1095,
                                "end": 1128,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1119,
                                    "end": 1123,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1120,
                                      "end": 1123,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1122,
                                        "end": 1123,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1122,
                                          "end": 1123,
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
                                  "start": 1124,
                                  "end": 1127,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1126,
                                    "end": 1127,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1126,
                                      "end": 1127,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 1099,
                                  "end": 1118,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 1100,
                                      "end": 1117,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 1110,
                                        "end": 1117,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1110,
                                          "end": 1117,
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
                                        "start": 1100,
                                        "end": 1101,
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
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1141,
                                "end": 1171,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1162,
                                    "end": 1166,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1163,
                                      "end": 1166,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1165,
                                        "end": 1166,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1165,
                                          "end": 1166,
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
                                  "start": 1167,
                                  "end": 1170,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1169,
                                    "end": 1170,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1169,
                                      "end": 1170,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 1145,
                                  "end": 1161,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 1146,
                                      "end": 1160,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 1156,
                                        "end": 1160,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1156,
                                          "end": 1160,
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
                                        "start": 1146,
                                        "end": 1147,
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
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1182,
                      "end": 1189,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1184,
                        "end": 1189,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1184,
                          "end": 1187
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1199,
                    "end": 1317,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1204,
                        "end": 1308,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1205,
                          "end": 1308,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1207,
                            "end": 1308,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1221,
                                "end": 1251,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1242,
                                    "end": 1246,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1243,
                                      "end": 1246,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1245,
                                        "end": 1246,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1245,
                                          "end": 1246,
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
                                  "start": 1247,
                                  "end": 1250,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1249,
                                    "end": 1250,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1249,
                                      "end": 1250,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 1225,
                                  "end": 1241,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 1226,
                                      "end": 1240,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 1236,
                                        "end": 1240,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1236,
                                          "end": 1240,
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
                                        "start": 1226,
                                        "end": 1227,
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
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1264,
                                "end": 1298,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1289,
                                    "end": 1293,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1290,
                                      "end": 1293,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1292,
                                        "end": 1293,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1292,
                                          "end": 1293,
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
                                  "start": 1294,
                                  "end": 1297,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1296,
                                    "end": 1297,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1296,
                                      "end": 1297,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": {
                                  "type": "TSTypeParameterDeclaration",
                                  "start": 1268,
                                  "end": 1288,
                                  "params": [
                                    {
                                      "type": "TSTypeParameter",
                                      "start": 1269,
                                      "end": 1287,
                                      "const": false,
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "start": 1279,
                                        "end": 1287,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1279,
                                          "end": 1287,
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
                                        "start": 1269,
                                        "end": 1270,
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
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1309,
                      "end": 1316,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1311,
                        "end": 1316,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1311,
                          "end": 1314
                        }
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 284,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1335,
      "end": 2407,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1357,
        "end": 2407,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1374,
            "end": 1398,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1374,
              "end": 1375,
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
              "start": 1375,
              "end": 1397,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1377,
                "end": 1397,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1389,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1386,
                      "end": 1389,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1388,
                        "end": 1389,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1388,
                          "end": 1389,
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
                  "start": 1391,
                  "end": 1397,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1394,
                    "end": 1397,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1394,
                      "end": 1395,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1394,
                        "end": 1395,
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
                  "start": 1381,
                  "end": 1384,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1382,
                      "end": 1383,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1382,
                        "end": 1383,
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
          {
            "type": "TSPropertySignature",
            "start": 1460,
            "end": 1490,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1460,
              "end": 1462,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1462,
              "end": 1489,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1464,
                "end": 1489,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1472,
                    "end": 1476,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1473,
                      "end": 1476,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1475,
                        "end": 1476,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1475,
                          "end": 1476,
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
                  "start": 1478,
                  "end": 1489,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1481,
                    "end": 1489,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1481,
                      "end": 1487
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1468,
                  "end": 1471,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1469,
                      "end": 1470,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1469,
                        "end": 1470,
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
          {
            "type": "TSPropertySignature",
            "start": 1501,
            "end": 1524,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1501,
              "end": 1503,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1503,
              "end": 1523,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1505,
                "end": 1523,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1513,
                    "end": 1517,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1514,
                      "end": 1517,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1516,
                        "end": 1517,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1516,
                          "end": 1517,
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
                  "start": 1519,
                  "end": 1523,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1522,
                    "end": 1523,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1522,
                      "end": 1523,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1509,
                  "end": 1512,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1510,
                      "end": 1511,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1510,
                        "end": 1511,
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
          {
            "type": "TSPropertySignature",
            "start": 1559,
            "end": 1596,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1559,
              "end": 1561,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1561,
              "end": 1595,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1563,
                "end": 1595,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1574,
                    "end": 1578,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1575,
                      "end": 1578,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1577,
                        "end": 1578,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1577,
                          "end": 1578,
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
                    "start": 1580,
                    "end": 1584,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1581,
                      "end": 1584,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1583,
                        "end": 1584,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1583,
                          "end": 1584,
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
                  "start": 1586,
                  "end": 1595,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1589,
                    "end": 1595
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1567,
                  "end": 1573,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1568,
                      "end": 1569,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1568,
                        "end": 1569,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1571,
                      "end": 1572,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1571,
                        "end": 1572,
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
          {
            "type": "TSPropertySignature",
            "start": 1671,
            "end": 1709,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1671,
              "end": 1673,
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1673,
              "end": 1708,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1675,
                "end": 1708,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1686,
                    "end": 1702,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1687,
                      "end": 1702,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1689,
                        "end": 1702,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1690,
                            "end": 1696,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1693,
                              "end": 1696,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1695,
                                "end": 1696,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1695,
                                  "end": 1696,
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
                          "start": 1698,
                          "end": 1702,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1701,
                            "end": 1702,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1701,
                              "end": 1702,
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
                  "start": 1704,
                  "end": 1708,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1707,
                    "end": 1708,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1707,
                      "end": 1708,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1679,
                  "end": 1685,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1680,
                      "end": 1681,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1680,
                        "end": 1681,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1683,
                      "end": 1684,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1683,
                        "end": 1684,
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
          {
            "type": "TSPropertySignature",
            "start": 1776,
            "end": 1843,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1776,
              "end": 1778,
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1778,
              "end": 1842,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1780,
                "end": 1842,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1820,
                    "end": 1836,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1821,
                      "end": 1836,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1823,
                        "end": 1836,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1824,
                            "end": 1830,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1827,
                              "end": 1830,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1829,
                                "end": 1830,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1829,
                                  "end": 1830,
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
                          "start": 1832,
                          "end": 1836,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1835,
                            "end": 1836,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1835,
                              "end": 1836,
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
                  "start": 1838,
                  "end": 1842,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1841,
                    "end": 1842,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1841,
                      "end": 1842,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1784,
                  "end": 1819,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1785,
                      "end": 1799,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1795,
                        "end": 1799,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1795,
                          "end": 1799,
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
                        "start": 1785,
                        "end": 1786,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1801,
                      "end": 1818,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1811,
                        "end": 1818,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1811,
                          "end": 1818,
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
                        "start": 1801,
                        "end": 1802,
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
          {
            "type": "TSPropertySignature",
            "start": 1897,
            "end": 1959,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1897,
              "end": 1900,
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1900,
              "end": 1958,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1902,
                "end": 1958,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1913,
                    "end": 1926,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1914,
                      "end": 1926,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1916,
                        "end": 1926,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1918,
                            "end": 1924,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1918,
                              "end": 1921,
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
                              "start": 1921,
                              "end": 1924,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1923,
                                "end": 1924,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1923,
                                  "end": 1924,
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
                    "start": 1928,
                    "end": 1949,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1929,
                      "end": 1949,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1931,
                        "end": 1949,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1933,
                            "end": 1940,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1933,
                              "end": 1936,
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
                              "start": 1936,
                              "end": 1939,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1938,
                                "end": 1939,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1938,
                                  "end": 1939,
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
                            "start": 1941,
                            "end": 1947,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1941,
                              "end": 1944,
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
                              "start": 1944,
                              "end": 1947,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1946,
                                "end": 1947,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1946,
                                  "end": 1947,
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
                  "start": 1951,
                  "end": 1958,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1954,
                    "end": 1958,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1954,
                      "end": 1958,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1906,
                  "end": 1912,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1907,
                      "end": 1908,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1907,
                        "end": 1908,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1910,
                      "end": 1911,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1910,
                        "end": 1911,
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
          {
            "type": "TSPropertySignature",
            "start": 1970,
            "end": 2013,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1970,
              "end": 1973,
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1973,
              "end": 2012,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1975,
                "end": 2012,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1986,
                    "end": 2004,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1987,
                      "end": 2004,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1989,
                        "end": 2004,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1991,
                            "end": 1996,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1991,
                              "end": 1992,
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
                              "start": 1992,
                              "end": 1995,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1994,
                                "end": 1995,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1994,
                                  "end": 1995,
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
                            "start": 1997,
                            "end": 2002,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1997,
                              "end": 1998,
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
                              "start": 1998,
                              "end": 2001,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2000,
                                "end": 2001,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2000,
                                  "end": 2001,
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
                  "start": 2006,
                  "end": 2012,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2009,
                    "end": 2012,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2009,
                      "end": 2010,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2009,
                        "end": 2010,
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
                  "start": 1979,
                  "end": 1985,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1980,
                      "end": 1981,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1980,
                        "end": 1981,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1983,
                      "end": 1984,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 1983,
                        "end": 1984,
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
          {
            "type": "TSPropertySignature",
            "start": 2038,
            "end": 2077,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2038,
              "end": 2041,
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2041,
              "end": 2076,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2043,
                "end": 2076,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2051,
                    "end": 2068,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2052,
                      "end": 2068,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2054,
                        "end": 2068,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2056,
                            "end": 2061,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2056,
                              "end": 2057,
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
                              "start": 2057,
                              "end": 2060,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2059,
                                "end": 2060,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2059,
                                  "end": 2060,
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
                            "start": 2062,
                            "end": 2066,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2062,
                              "end": 2063,
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
                              "start": 2063,
                              "end": 2066,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2065,
                                "end": 2066,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2065,
                                  "end": 2066,
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
                  "start": 2070,
                  "end": 2076,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2073,
                    "end": 2076,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2073,
                      "end": 2074,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2073,
                        "end": 2074,
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
                  "start": 2047,
                  "end": 2050,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2048,
                      "end": 2049,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2048,
                        "end": 2049,
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
          {
            "type": "TSPropertySignature",
            "start": 2117,
            "end": 2156,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2117,
              "end": 2120,
              "decorators": [],
              "name": "a17",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2120,
              "end": 2155,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2122,
                "end": 2155,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2143,
                    "end": 2147,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2144,
                      "end": 2147,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2146,
                        "end": 2147,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2146,
                          "end": 2147,
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
                  "start": 2149,
                  "end": 2155,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2152,
                    "end": 2155,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2152,
                      "end": 2153,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2152,
                        "end": 2153,
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
                  "start": 2126,
                  "end": 2142,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2127,
                      "end": 2141,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2137,
                        "end": 2141,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2137,
                          "end": 2141,
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
                        "start": 2127,
                        "end": 2128,
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
          {
            "type": "TSPropertySignature",
            "start": 2196,
            "end": 2240,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2196,
              "end": 2199,
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2199,
              "end": 2239,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2201,
                "end": 2239,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2222,
                    "end": 2226,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2223,
                      "end": 2226,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2225,
                        "end": 2226,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2225,
                          "end": 2226,
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
                  "start": 2228,
                  "end": 2239,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2231,
                    "end": 2239,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2231,
                      "end": 2237
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2205,
                  "end": 2221,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2206,
                      "end": 2220,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2216,
                        "end": 2220,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2216,
                          "end": 2220,
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
                        "start": 2206,
                        "end": 2207,
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
          {
            "type": "TSPropertySignature",
            "start": 2280,
            "end": 2333,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2280,
              "end": 2283,
              "decorators": [],
              "name": "a19",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2283,
              "end": 2332,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2285,
                "end": 2332,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2306,
                    "end": 2324,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2307,
                      "end": 2324,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 2309,
                        "end": 2324,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2314,
                            "end": 2318,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2315,
                              "end": 2318,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2317,
                                "end": 2318,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2317,
                                  "end": 2318,
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
                          "start": 2320,
                          "end": 2324,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2323,
                            "end": 2324,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2323,
                              "end": 2324,
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
                  "start": 2326,
                  "end": 2332,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2329,
                    "end": 2332,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2329,
                      "end": 2330,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2329,
                        "end": 2330,
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
                  "start": 2289,
                  "end": 2305,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2290,
                      "end": 2304,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2300,
                        "end": 2304,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2300,
                          "end": 2304,
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
                        "start": 2290,
                        "end": 2291,
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
          {
            "type": "TSPropertySignature",
            "start": 2344,
            "end": 2399,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2344,
              "end": 2347,
              "decorators": [],
              "name": "a20",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2347,
              "end": 2398,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2349,
                "end": 2398,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2354,
                    "end": 2388,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2355,
                      "end": 2388,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 2357,
                        "end": 2388,
                        "abstract": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2378,
                            "end": 2382,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2379,
                              "end": 2382,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2381,
                                "end": 2382,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2381,
                                  "end": 2382,
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
                          "start": 2384,
                          "end": 2388,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2387,
                            "end": 2388,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2387,
                              "end": 2388,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 2361,
                          "end": 2377,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 2362,
                              "end": 2376,
                              "const": false,
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 2372,
                                "end": 2376,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2372,
                                  "end": 2376,
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
                                "start": 2362,
                                "end": 2363,
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
                  "start": 2390,
                  "end": 2398,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2393,
                    "end": 2398,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2393,
                      "end": 2396
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1355,
          "end": 1356,
          "expression": {
            "type": "Identifier",
            "start": 1355,
            "end": 1356,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1345,
        "end": 1346,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
