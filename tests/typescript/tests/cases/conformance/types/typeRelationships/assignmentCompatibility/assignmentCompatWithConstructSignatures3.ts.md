__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 3173,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 119,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 102,
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
        "start": 103,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 117,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 116,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
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
      "start": 120,
      "end": 163,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 142,
        "end": 146,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 161,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 152,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
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
      "start": 164,
      "end": 211,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 178,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 187,
        "end": 194,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 211,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 197,
            "end": 209,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 202,
                "end": 208
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
      "start": 212,
      "end": 261,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 230,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 239,
        "end": 243,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 244,
        "end": 261,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 246,
            "end": 259,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 246,
              "end": 250,
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 258,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
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
      "type": "VariableDeclaration",
      "start": 263,
      "end": 298,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 297,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 297,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 270,
                "end": 297,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 275,
                    "end": 284,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 297,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 289,
                    "end": 297,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 289,
                      "end": 295
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
      "type": "VariableDeclaration",
      "start": 299,
      "end": 335,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 303,
            "end": 334,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 334,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 307,
                "end": 334,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 312,
                    "end": 321,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 315,
                        "end": 321
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 323,
                  "end": 334,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 326,
                    "end": 334,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 326,
                      "end": 332
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
      "type": "VariableDeclaration",
      "start": 336,
      "end": 368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 367,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 367,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 344,
                "end": 367,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 349,
                    "end": 358,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 358,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 352,
                        "end": 358
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 360,
                  "end": 367,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 363,
                    "end": 367
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
      "type": "VariableDeclaration",
      "start": 369,
      "end": 414,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 413,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 413,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 377,
                "end": 413,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 382,
                    "end": 391,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 385,
                        "end": 391
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 393,
                    "end": 402,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 394,
                      "end": 402,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 396,
                        "end": 402
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 404,
                  "end": 413,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 407,
                    "end": 413
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
      "type": "VariableDeclaration",
      "start": 415,
      "end": 466,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 465,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 465,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 423,
                "end": 465,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 428,
                    "end": 454,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 429,
                      "end": 454,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 431,
                        "end": 454,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 432,
                            "end": 443,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 435,
                              "end": 443,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 437,
                                "end": 443
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 445,
                          "end": 454,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 448,
                            "end": 454
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 465,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 459,
                    "end": 465
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
      "type": "VariableDeclaration",
      "start": 467,
      "end": 515,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 514,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 514,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 514,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 475,
                "end": 514,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 480,
                    "end": 505,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 481,
                      "end": 505,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 483,
                        "end": 505,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 484,
                            "end": 493,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 487,
                              "end": 493,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 489,
                                "end": 493,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 489,
                                  "end": 493,
                                  "decorators": [],
                                  "name": "Base",
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
                          "start": 495,
                          "end": 505,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 498,
                            "end": 505,
                            "typeName": {
                              "type": "Identifier",
                              "start": 498,
                              "end": 505,
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
                  "start": 507,
                  "end": 514,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 510,
                    "end": 514,
                    "typeName": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 514,
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
      "type": "VariableDeclaration",
      "start": 516,
      "end": 580,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 520,
          "end": 579,
          "id": {
            "type": "Identifier",
            "start": 520,
            "end": 579,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 579,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 524,
                "end": 579,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 529,
                    "end": 554,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 530,
                      "end": 554,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 532,
                        "end": 554,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 533,
                            "end": 542,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 536,
                              "end": 542,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 538,
                                "end": 542,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 538,
                                  "end": 542,
                                  "decorators": [],
                                  "name": "Base",
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
                          "start": 544,
                          "end": 554,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 547,
                            "end": 554,
                            "typeName": {
                              "type": "Identifier",
                              "start": 547,
                              "end": 554,
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
                  "start": 556,
                  "end": 579,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 559,
                    "end": 579,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 560,
                        "end": 567,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 567,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 563,
                            "end": 567,
                            "typeName": {
                              "type": "Identifier",
                              "start": 563,
                              "end": 567,
                              "decorators": [],
                              "name": "Base",
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
                      "start": 569,
                      "end": 579,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 572,
                        "end": 579,
                        "typeName": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 579,
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
      "start": 581,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 672,
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 672,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 589,
                "end": 672,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 594,
                    "end": 619,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 595,
                      "end": 619,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 597,
                        "end": 619,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 598,
                            "end": 607,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 601,
                              "end": 607,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 603,
                                "end": 607,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 603,
                                  "end": 607,
                                  "decorators": [],
                                  "name": "Base",
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
                          "start": 609,
                          "end": 619,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 612,
                            "end": 619,
                            "typeName": {
                              "type": "Identifier",
                              "start": 612,
                              "end": 619,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 621,
                    "end": 647,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 622,
                      "end": 647,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 624,
                        "end": 647,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 625,
                            "end": 635,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 629,
                              "end": 635,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 631,
                                "end": 635,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 631,
                                  "end": 635,
                                  "decorators": [],
                                  "name": "Base",
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
                          "start": 637,
                          "end": 647,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 640,
                            "end": 647,
                            "typeName": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 647,
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
                  "start": 649,
                  "end": 672,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 652,
                    "end": 672,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 653,
                        "end": 660,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 654,
                          "end": 660,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 656,
                            "end": 660,
                            "typeName": {
                              "type": "Identifier",
                              "start": 656,
                              "end": 660,
                              "decorators": [],
                              "name": "Base",
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
                      "start": 662,
                      "end": 672,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 665,
                        "end": 672,
                        "typeName": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 672,
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
      "start": 674,
      "end": 766,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 678,
            "end": 765,
            "decorators": [],
            "name": "a9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 680,
              "end": 765,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 682,
                "end": 765,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 687,
                    "end": 712,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 688,
                      "end": 712,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 690,
                        "end": 712,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 691,
                            "end": 700,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 694,
                              "end": 700,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 696,
                                "end": 700,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 700,
                                  "decorators": [],
                                  "name": "Base",
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
                          "start": 702,
                          "end": 712,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 705,
                            "end": 712,
                            "typeName": {
                              "type": "Identifier",
                              "start": 705,
                              "end": 712,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 714,
                    "end": 740,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 715,
                      "end": 740,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 717,
                        "end": 740,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 718,
                            "end": 728,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 722,
                              "end": 728,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 724,
                                "end": 728,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 724,
                                  "end": 728,
                                  "decorators": [],
                                  "name": "Base",
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
                          "start": 730,
                          "end": 740,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 733,
                            "end": 740,
                            "typeName": {
                              "type": "Identifier",
                              "start": 733,
                              "end": 740,
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
                  "start": 742,
                  "end": 765,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 745,
                    "end": 765,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 746,
                        "end": 753,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 747,
                          "end": 753,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 749,
                            "end": 753,
                            "typeName": {
                              "type": "Identifier",
                              "start": 749,
                              "end": 753,
                              "decorators": [],
                              "name": "Base",
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
                      "start": 755,
                      "end": 765,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 758,
                        "end": 765,
                        "typeName": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 765,
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
      "start": 767,
      "end": 809,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 771,
          "end": 808,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 808,
            "decorators": [],
            "name": "a10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 774,
              "end": 808,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 776,
                "end": 808,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 781,
                    "end": 796,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 785,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 785,
                      "end": 796,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 787,
                        "end": 796,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 787,
                          "end": 794,
                          "typeName": {
                            "type": "Identifier",
                            "start": 787,
                            "end": 794,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 798,
                  "end": 808,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 801,
                    "end": 808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 801,
                      "end": 808,
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
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 810,
      "end": 885,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 884,
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 817,
              "end": 884,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 819,
                "end": 884,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 824,
                    "end": 842,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 825,
                      "end": 842,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 827,
                        "end": 842,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 829,
                            "end": 840,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 829,
                              "end": 832,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 832,
                              "end": 840,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 834,
                                "end": 840
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
                    "start": 844,
                    "end": 875,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 845,
                      "end": 875,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 847,
                        "end": 875,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 849,
                            "end": 861,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 849,
                              "end": 852,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 852,
                              "end": 860,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 854,
                                "end": 860
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 862,
                            "end": 873,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 862,
                              "end": 865,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 865,
                              "end": 873,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 867,
                                "end": 873
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
                  "start": 877,
                  "end": 884,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 880,
                    "end": 884,
                    "typeName": {
                      "type": "Identifier",
                      "start": 880,
                      "end": 884,
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
      "type": "VariableDeclaration",
      "start": 886,
      "end": 954,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 890,
          "end": 953,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 953,
            "decorators": [],
            "name": "a12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 893,
              "end": 953,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 895,
                "end": 953,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 900,
                    "end": 914,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 901,
                      "end": 914,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 903,
                        "end": 914,
                        "typeName": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 908,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 908,
                          "end": 914,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 909,
                              "end": 913,
                              "typeName": {
                                "type": "Identifier",
                                "start": 909,
                                "end": 913,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 916,
                    "end": 934,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 917,
                      "end": 934,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 919,
                        "end": 934,
                        "typeName": {
                          "type": "Identifier",
                          "start": 919,
                          "end": 924,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 924,
                          "end": 934,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 925,
                              "end": 933,
                              "typeName": {
                                "type": "Identifier",
                                "start": 925,
                                "end": 933,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 936,
                  "end": 953,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 939,
                    "end": 953,
                    "typeName": {
                      "type": "Identifier",
                      "start": 939,
                      "end": 944,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 944,
                      "end": 953,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 945,
                          "end": 952,
                          "typeName": {
                            "type": "Identifier",
                            "start": 945,
                            "end": 952,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
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
      "type": "VariableDeclaration",
      "start": 955,
      "end": 1022,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 959,
          "end": 1021,
          "id": {
            "type": "Identifier",
            "start": 959,
            "end": 1021,
            "decorators": [],
            "name": "a13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 962,
              "end": 1021,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 964,
                "end": 1021,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 969,
                    "end": 983,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 970,
                      "end": 983,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 972,
                        "end": 983,
                        "typeName": {
                          "type": "Identifier",
                          "start": 972,
                          "end": 977,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 977,
                          "end": 983,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 978,
                              "end": 982,
                              "typeName": {
                                "type": "Identifier",
                                "start": 978,
                                "end": 982,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 985,
                    "end": 1002,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 986,
                      "end": 1002,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 988,
                        "end": 1002,
                        "typeName": {
                          "type": "Identifier",
                          "start": 988,
                          "end": 993,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 993,
                          "end": 1002,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 994,
                              "end": 1001,
                              "typeName": {
                                "type": "Identifier",
                                "start": 994,
                                "end": 1001,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1004,
                  "end": 1021,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1007,
                    "end": 1021,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1012,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1012,
                      "end": 1021,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1013,
                          "end": 1020,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1013,
                            "end": 1020,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
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
      "type": "VariableDeclaration",
      "start": 1023,
      "end": 1076,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1027,
          "end": 1075,
          "id": {
            "type": "Identifier",
            "start": 1027,
            "end": 1075,
            "decorators": [],
            "name": "a14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1030,
              "end": 1075,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1032,
                "end": 1075,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1037,
                    "end": 1064,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1038,
                      "end": 1064,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1040,
                        "end": 1064,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1042,
                            "end": 1052,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1042,
                              "end": 1043,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1043,
                              "end": 1051,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1045,
                                "end": 1051
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1053,
                            "end": 1062,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1053,
                              "end": 1054,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1054,
                              "end": 1062,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1056,
                                "end": 1062
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
                  "start": 1066,
                  "end": 1075,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1069,
                    "end": 1075,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1075,
                      "decorators": [],
                      "name": "Object",
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
      "type": "VariableDeclaration",
      "start": 1077,
      "end": 1151,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1081,
          "end": 1151,
          "id": {
            "type": "Identifier",
            "start": 1081,
            "end": 1151,
            "decorators": [],
            "name": "a15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1084,
              "end": 1151,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1086,
                "end": 1151,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1092,
                    "end": 1118,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1097,
                        "end": 1106,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1098,
                          "end": 1106,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1100,
                            "end": 1106
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1107,
                      "end": 1117,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1109,
                        "end": 1117,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1109,
                          "end": 1115
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1123,
                    "end": 1149,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1128,
                        "end": 1137,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1129,
                          "end": 1137,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1131,
                            "end": 1137
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1138,
                      "end": 1148,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1140,
                        "end": 1148,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1140,
                          "end": 1146
                        }
                      }
                    }
                  }
                ]
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
      "start": 1152,
      "end": 1251,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1156,
          "end": 1251,
          "id": {
            "type": "Identifier",
            "start": 1156,
            "end": 1251,
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1159,
              "end": 1251,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1161,
                "end": 1251,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1167,
                    "end": 1207,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1171,
                      "end": 1190,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1172,
                          "end": 1189,
                          "name": {
                            "type": "Identifier",
                            "start": 1172,
                            "end": 1173,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1182,
                            "end": 1189,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1182,
                              "end": 1189,
                              "decorators": [],
                              "name": "Derived",
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
                        "start": 1191,
                        "end": 1195,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1192,
                          "end": 1195,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1194,
                            "end": 1195,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1194,
                              "end": 1195,
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
                      "start": 1196,
                      "end": 1206,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1198,
                        "end": 1206,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1198,
                          "end": 1204
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1212,
                    "end": 1249,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1216,
                      "end": 1232,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1217,
                          "end": 1231,
                          "name": {
                            "type": "Identifier",
                            "start": 1217,
                            "end": 1218,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1227,
                            "end": 1231,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1227,
                              "end": 1231,
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
                        "start": 1233,
                        "end": 1237,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1234,
                          "end": 1237,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1236,
                            "end": 1237,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1236,
                              "end": 1237,
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
                      "start": 1238,
                      "end": 1248,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1240,
                        "end": 1248,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1240,
                          "end": 1246
                        }
                      }
                    }
                  }
                ]
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
      "start": 1252,
      "end": 1365,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1256,
          "end": 1364,
          "id": {
            "type": "Identifier",
            "start": 1256,
            "end": 1364,
            "decorators": [],
            "name": "a17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1259,
              "end": 1364,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1261,
                "end": 1364,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1267,
                    "end": 1312,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1272,
                        "end": 1300,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1273,
                          "end": 1300,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1275,
                            "end": 1300,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1280,
                                "end": 1289,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1281,
                                  "end": 1289,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1283,
                                    "end": 1289
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1291,
                              "end": 1300,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1294,
                                "end": 1300
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1301,
                      "end": 1311,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1303,
                        "end": 1311,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1303,
                          "end": 1309
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1317,
                    "end": 1362,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1322,
                        "end": 1350,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1323,
                          "end": 1350,
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "start": 1325,
                            "end": 1350,
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1330,
                                "end": 1339,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1331,
                                  "end": 1339,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1333,
                                    "end": 1339
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1341,
                              "end": 1350,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1344,
                                "end": 1350
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1351,
                      "end": 1361,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1353,
                        "end": 1361,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1353,
                          "end": 1359
                        }
                      }
                    }
                  }
                ]
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
      "start": 1366,
      "end": 1566,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1370,
          "end": 1566,
          "id": {
            "type": "Identifier",
            "start": 1370,
            "end": 1566,
            "decorators": [],
            "name": "a18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1373,
              "end": 1566,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1375,
                "end": 1566,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1381,
                    "end": 1471,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1386,
                        "end": 1462,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1387,
                          "end": 1462,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1389,
                            "end": 1462,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1399,
                                "end": 1423,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1404,
                                    "end": 1413,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1405,
                                      "end": 1413,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1407,
                                        "end": 1413
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1414,
                                  "end": 1422,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1416,
                                    "end": 1422
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1432,
                                "end": 1456,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1437,
                                    "end": 1446,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1438,
                                      "end": 1446,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1440,
                                        "end": 1446
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1447,
                                  "end": 1455,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1449,
                                    "end": 1455
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
                      "start": 1463,
                      "end": 1470,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1465,
                        "end": 1470,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1465,
                          "end": 1468
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 1476,
                    "end": 1564,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1481,
                        "end": 1555,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1482,
                          "end": 1555,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1484,
                            "end": 1555,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1494,
                                "end": 1520,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1499,
                                    "end": 1509,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1500,
                                      "end": 1509,
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 1502,
                                        "end": 1509
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1510,
                                  "end": 1519,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1512,
                                    "end": 1519
                                  }
                                }
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 1529,
                                "end": 1549,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1534,
                                    "end": 1541,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1535,
                                      "end": 1541,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1537,
                                        "end": 1541,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1537,
                                          "end": 1541,
                                          "decorators": [],
                                          "name": "Date",
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
                                  "start": 1542,
                                  "end": 1548,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1544,
                                    "end": 1548,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1544,
                                      "end": 1548,
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
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
                      "start": 1556,
                      "end": 1563,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1558,
                        "end": 1563,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1558,
                          "end": 1561
                        }
                      }
                    }
                  }
                ]
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
      "start": 1568,
      "end": 1596,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1572,
          "end": 1595,
          "id": {
            "type": "Identifier",
            "start": 1572,
            "end": 1595,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1573,
              "end": 1595,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1575,
                "end": 1595,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1579,
                  "end": 1582,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1580,
                      "end": 1581,
                      "name": {
                        "type": "Identifier",
                        "start": 1580,
                        "end": 1581,
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
                    "start": 1583,
                    "end": 1587,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1584,
                      "end": 1587,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1586,
                        "end": 1587,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1586,
                          "end": 1587,
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
                  "start": 1589,
                  "end": 1595,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1592,
                    "end": 1595,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1592,
                      "end": 1593,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1592,
                        "end": 1593,
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
      "start": 1598,
      "end": 1604,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1598,
        "end": 1603,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1598,
          "end": 1599,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1602,
          "end": 1603,
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
      "start": 1611,
      "end": 1617,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1611,
        "end": 1616,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1611,
          "end": 1612,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1615,
          "end": 1616,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1624,
      "end": 1658,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1628,
          "end": 1657,
          "id": {
            "type": "Identifier",
            "start": 1628,
            "end": 1657,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1630,
              "end": 1657,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1632,
                "end": 1657,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1636,
                  "end": 1639,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1637,
                      "end": 1638,
                      "name": {
                        "type": "Identifier",
                        "start": 1637,
                        "end": 1638,
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
                    "start": 1640,
                    "end": 1644,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1641,
                      "end": 1644,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1643,
                        "end": 1644,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1643,
                          "end": 1644,
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
                  "start": 1646,
                  "end": 1657,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1649,
                    "end": 1657,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1649,
                      "end": 1655
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
      "start": 1660,
      "end": 1668,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1660,
        "end": 1667,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1660,
          "end": 1662,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1665,
          "end": 1667,
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
      "start": 1676,
      "end": 1684,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1676,
        "end": 1683,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1676,
          "end": 1678,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1681,
          "end": 1683,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1691,
      "end": 1718,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1695,
          "end": 1717,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1717,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1697,
              "end": 1717,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1699,
                "end": 1717,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1703,
                  "end": 1706,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1704,
                      "end": 1705,
                      "name": {
                        "type": "Identifier",
                        "start": 1704,
                        "end": 1705,
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
                    "start": 1707,
                    "end": 1711,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1708,
                      "end": 1711,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1710,
                        "end": 1711,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1710,
                          "end": 1711,
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
                  "start": 1713,
                  "end": 1717,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1716,
                    "end": 1717,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1716,
                      "end": 1717,
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
      "start": 1720,
      "end": 1728,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1720,
        "end": 1727,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1720,
          "end": 1722,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1725,
          "end": 1727,
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
      "start": 1735,
      "end": 1743,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1735,
        "end": 1742,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1735,
          "end": 1737,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1740,
          "end": 1742,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1750,
      "end": 1786,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1754,
          "end": 1785,
          "id": {
            "type": "Identifier",
            "start": 1754,
            "end": 1785,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1756,
              "end": 1785,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1758,
                "end": 1785,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1762,
                  "end": 1768,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1763,
                      "end": 1764,
                      "name": {
                        "type": "Identifier",
                        "start": 1763,
                        "end": 1764,
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
                      "start": 1766,
                      "end": 1767,
                      "name": {
                        "type": "Identifier",
                        "start": 1766,
                        "end": 1767,
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
                    "start": 1769,
                    "end": 1773,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1770,
                      "end": 1773,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1772,
                        "end": 1773,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1772,
                          "end": 1773,
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
                    "start": 1775,
                    "end": 1779,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1776,
                      "end": 1779,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1778,
                        "end": 1779,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1778,
                          "end": 1779,
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
                  "start": 1781,
                  "end": 1785,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1784,
                    "end": 1785,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1784,
                      "end": 1785,
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
      "start": 1788,
      "end": 1796,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1788,
        "end": 1795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1788,
          "end": 1790,
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1793,
          "end": 1795,
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
      "start": 1803,
      "end": 1811,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1803,
        "end": 1810,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1803,
          "end": 1805,
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1808,
          "end": 1810,
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1818,
      "end": 1860,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1822,
          "end": 1859,
          "id": {
            "type": "Identifier",
            "start": 1822,
            "end": 1859,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1824,
              "end": 1859,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1826,
                "end": 1859,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1830,
                  "end": 1836,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1831,
                      "end": 1832,
                      "name": {
                        "type": "Identifier",
                        "start": 1831,
                        "end": 1832,
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
                      "start": 1834,
                      "end": 1835,
                      "name": {
                        "type": "Identifier",
                        "start": 1834,
                        "end": 1835,
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
                    "start": 1837,
                    "end": 1853,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1838,
                      "end": 1853,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1840,
                        "end": 1853,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1841,
                            "end": 1847,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1844,
                              "end": 1847,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1846,
                                "end": 1847,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1846,
                                  "end": 1847,
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
                          "start": 1849,
                          "end": 1853,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1852,
                            "end": 1853,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1852,
                              "end": 1853,
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
                  "start": 1855,
                  "end": 1859,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1858,
                    "end": 1859,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1858,
                      "end": 1859,
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
      "start": 1862,
      "end": 1870,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1862,
        "end": 1869,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1862,
          "end": 1864,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1867,
          "end": 1869,
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
      "start": 1877,
      "end": 1885,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1877,
        "end": 1884,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1877,
          "end": 1879,
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1882,
          "end": 1884,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1892,
      "end": 1963,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1896,
          "end": 1962,
          "id": {
            "type": "Identifier",
            "start": 1896,
            "end": 1962,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1898,
              "end": 1962,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1900,
                "end": 1962,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1904,
                  "end": 1939,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1905,
                      "end": 1919,
                      "name": {
                        "type": "Identifier",
                        "start": 1905,
                        "end": 1906,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1915,
                        "end": 1919,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1915,
                          "end": 1919,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 1921,
                      "end": 1938,
                      "name": {
                        "type": "Identifier",
                        "start": 1921,
                        "end": 1922,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1931,
                        "end": 1938,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1931,
                          "end": 1938,
                          "decorators": [],
                          "name": "Derived",
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
                    "start": 1940,
                    "end": 1956,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1941,
                      "end": 1956,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1943,
                        "end": 1956,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1944,
                            "end": 1950,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1947,
                              "end": 1950,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1949,
                                "end": 1950,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1949,
                                  "end": 1950,
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
                          "start": 1952,
                          "end": 1956,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1955,
                            "end": 1956,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1955,
                              "end": 1956,
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
                  "start": 1958,
                  "end": 1962,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1961,
                    "end": 1962,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1961,
                      "end": 1962,
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
      "start": 1965,
      "end": 1973,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1965,
        "end": 1972,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1965,
          "end": 1967,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1970,
          "end": 1972,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1980,
      "end": 1988,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1980,
        "end": 1987,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1980,
          "end": 1982,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1985,
          "end": 1987,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1995,
      "end": 2076,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1999,
          "end": 2075,
          "id": {
            "type": "Identifier",
            "start": 1999,
            "end": 2075,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2001,
              "end": 2075,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2003,
                "end": 2075,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2007,
                  "end": 2042,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2008,
                      "end": 2022,
                      "name": {
                        "type": "Identifier",
                        "start": 2008,
                        "end": 2009,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2018,
                        "end": 2022,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2018,
                          "end": 2022,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2024,
                      "end": 2041,
                      "name": {
                        "type": "Identifier",
                        "start": 2024,
                        "end": 2025,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2034,
                        "end": 2041,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2034,
                          "end": 2041,
                          "decorators": [],
                          "name": "Derived",
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
                    "start": 2043,
                    "end": 2059,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2044,
                      "end": 2059,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2046,
                        "end": 2059,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2047,
                            "end": 2053,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2050,
                              "end": 2053,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2052,
                                "end": 2053,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2052,
                                  "end": 2053,
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
                          "start": 2055,
                          "end": 2059,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2058,
                            "end": 2059,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2058,
                              "end": 2059,
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
                  "start": 2061,
                  "end": 2075,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2064,
                    "end": 2075,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2065,
                        "end": 2069,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2066,
                          "end": 2069,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2068,
                            "end": 2069,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2068,
                              "end": 2069,
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
                      "start": 2071,
                      "end": 2075,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2074,
                        "end": 2075,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2074,
                          "end": 2075,
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
      "start": 2078,
      "end": 2086,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2078,
        "end": 2085,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2078,
          "end": 2080,
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2083,
          "end": 2085,
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2093,
      "end": 2101,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2093,
        "end": 2100,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2093,
          "end": 2095,
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2098,
          "end": 2100,
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2108,
      "end": 2208,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2112,
          "end": 2207,
          "id": {
            "type": "Identifier",
            "start": 2112,
            "end": 2207,
            "decorators": [],
            "name": "b8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2114,
              "end": 2207,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2116,
                "end": 2207,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2120,
                  "end": 2155,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2121,
                      "end": 2135,
                      "name": {
                        "type": "Identifier",
                        "start": 2121,
                        "end": 2122,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2131,
                        "end": 2135,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2131,
                          "end": 2135,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2137,
                      "end": 2154,
                      "name": {
                        "type": "Identifier",
                        "start": 2137,
                        "end": 2138,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2147,
                        "end": 2154,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2147,
                          "end": 2154,
                          "decorators": [],
                          "name": "Derived",
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
                    "start": 2156,
                    "end": 2172,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2157,
                      "end": 2172,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2159,
                        "end": 2172,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2160,
                            "end": 2166,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2163,
                              "end": 2166,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2165,
                                "end": 2166,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2165,
                                  "end": 2166,
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
                          "start": 2168,
                          "end": 2172,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2171,
                            "end": 2172,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2171,
                              "end": 2172,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 2174,
                    "end": 2191,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2175,
                      "end": 2191,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2177,
                        "end": 2191,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2178,
                            "end": 2185,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2182,
                              "end": 2185,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2184,
                                "end": 2185,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2184,
                                  "end": 2185,
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
                          "start": 2187,
                          "end": 2191,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2190,
                            "end": 2191,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2190,
                              "end": 2191,
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
                  "start": 2193,
                  "end": 2207,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2196,
                    "end": 2207,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2197,
                        "end": 2201,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2198,
                          "end": 2201,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2200,
                            "end": 2201,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2200,
                              "end": 2201,
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
                      "start": 2203,
                      "end": 2207,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2206,
                        "end": 2207,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2206,
                          "end": 2207,
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
      "start": 2209,
      "end": 2217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2209,
        "end": 2216,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2209,
          "end": 2211,
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2214,
          "end": 2216,
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2224,
      "end": 2232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2224,
        "end": 2231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2224,
          "end": 2226,
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2229,
          "end": 2231,
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2239,
      "end": 2367,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2243,
          "end": 2366,
          "id": {
            "type": "Identifier",
            "start": 2243,
            "end": 2366,
            "decorators": [],
            "name": "b9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2245,
              "end": 2366,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2247,
                "end": 2366,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2251,
                  "end": 2286,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2252,
                      "end": 2266,
                      "name": {
                        "type": "Identifier",
                        "start": 2252,
                        "end": 2253,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2262,
                        "end": 2266,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2262,
                          "end": 2266,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2268,
                      "end": 2285,
                      "name": {
                        "type": "Identifier",
                        "start": 2268,
                        "end": 2269,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2278,
                        "end": 2285,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2278,
                          "end": 2285,
                          "decorators": [],
                          "name": "Derived",
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
                    "start": 2287,
                    "end": 2303,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2288,
                      "end": 2303,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2290,
                        "end": 2303,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2291,
                            "end": 2297,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2294,
                              "end": 2297,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2296,
                                "end": 2297,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2296,
                                  "end": 2297,
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
                          "start": 2299,
                          "end": 2303,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2302,
                            "end": 2303,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2302,
                              "end": 2303,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 2305,
                    "end": 2350,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2306,
                      "end": 2350,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 2308,
                        "end": 2350,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2309,
                            "end": 2344,
                            "decorators": [],
                            "name": "arg2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2313,
                              "end": 2344,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 2315,
                                "end": 2344,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2317,
                                    "end": 2329,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2317,
                                      "end": 2320,
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2320,
                                      "end": 2328,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2322,
                                        "end": 2328
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 2330,
                                    "end": 2342,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 2330,
                                      "end": 2334,
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2334,
                                      "end": 2342,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2336,
                                        "end": 2342
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
                          "start": 2346,
                          "end": 2350,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2349,
                            "end": 2350,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2349,
                              "end": 2350,
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
                  "start": 2352,
                  "end": 2366,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2355,
                    "end": 2366,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2356,
                        "end": 2360,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2357,
                          "end": 2360,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2359,
                            "end": 2360,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2359,
                              "end": 2360,
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
                      "start": 2362,
                      "end": 2366,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2365,
                        "end": 2366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2365,
                          "end": 2366,
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
      "start": 2369,
      "end": 2377,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2369,
        "end": 2376,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2369,
          "end": 2371,
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2374,
          "end": 2376,
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2384,
      "end": 2392,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2384,
        "end": 2391,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2384,
          "end": 2386,
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2389,
          "end": 2391,
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2399,
      "end": 2448,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2403,
          "end": 2447,
          "id": {
            "type": "Identifier",
            "start": 2403,
            "end": 2447,
            "decorators": [],
            "name": "b10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2406,
              "end": 2447,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2408,
                "end": 2447,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2412,
                  "end": 2431,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2413,
                      "end": 2430,
                      "name": {
                        "type": "Identifier",
                        "start": 2413,
                        "end": 2414,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2423,
                        "end": 2430,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2423,
                          "end": 2430,
                          "decorators": [],
                          "name": "Derived",
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
                    "type": "RestElement",
                    "start": 2432,
                    "end": 2441,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 2435,
                      "end": 2436,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2436,
                      "end": 2441,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2438,
                        "end": 2441,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2438,
                          "end": 2439,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2438,
                            "end": 2439,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2443,
                  "end": 2447,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2446,
                    "end": 2447,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2446,
                      "end": 2447,
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
      "start": 2450,
      "end": 2460,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2450,
        "end": 2459,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2450,
          "end": 2453,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2456,
          "end": 2459,
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2467,
      "end": 2477,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2467,
        "end": 2476,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2467,
          "end": 2470,
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2473,
          "end": 2476,
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2484,
      "end": 2531,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2488,
          "end": 2530,
          "id": {
            "type": "Identifier",
            "start": 2488,
            "end": 2530,
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2491,
              "end": 2530,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2493,
                "end": 2530,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2497,
                  "end": 2513,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2498,
                      "end": 2512,
                      "name": {
                        "type": "Identifier",
                        "start": 2498,
                        "end": 2499,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2508,
                        "end": 2512,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2508,
                          "end": 2512,
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
                    "start": 2514,
                    "end": 2518,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2515,
                      "end": 2518,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2517,
                        "end": 2518,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2517,
                          "end": 2518,
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
                    "start": 2520,
                    "end": 2524,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2521,
                      "end": 2524,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2523,
                        "end": 2524,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2523,
                          "end": 2524,
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
                  "start": 2526,
                  "end": 2530,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2529,
                    "end": 2530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2529,
                      "end": 2530,
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
      "start": 2533,
      "end": 2543,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2533,
        "end": 2542,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2533,
          "end": 2536,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2539,
          "end": 2542,
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
      "start": 2550,
      "end": 2560,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2550,
        "end": 2559,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2550,
          "end": 2553,
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2556,
          "end": 2559,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2567,
      "end": 2644,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2571,
          "end": 2643,
          "id": {
            "type": "Identifier",
            "start": 2571,
            "end": 2643,
            "decorators": [],
            "name": "b12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2574,
              "end": 2643,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2576,
                "end": 2643,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2580,
                  "end": 2603,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2581,
                      "end": 2602,
                      "name": {
                        "type": "Identifier",
                        "start": 2581,
                        "end": 2582,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2591,
                        "end": 2602,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2591,
                          "end": 2596,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2596,
                          "end": 2602,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2597,
                              "end": 2601,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2597,
                                "end": 2601,
                                "decorators": [],
                                "name": "Base",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2604,
                    "end": 2618,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2605,
                      "end": 2618,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2607,
                        "end": 2618,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2607,
                          "end": 2612,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2612,
                          "end": 2618,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2613,
                              "end": 2617,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2613,
                                "end": 2617,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2620,
                    "end": 2624,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2621,
                      "end": 2624,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2623,
                        "end": 2624,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2623,
                          "end": 2624,
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
                  "start": 2626,
                  "end": 2643,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2629,
                    "end": 2643,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2629,
                      "end": 2634,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2634,
                      "end": 2643,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2635,
                          "end": 2642,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2635,
                            "end": 2642,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
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
      "start": 2646,
      "end": 2656,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2646,
        "end": 2655,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2646,
          "end": 2649,
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2652,
          "end": 2655,
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2663,
      "end": 2673,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2663,
        "end": 2672,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2663,
          "end": 2666,
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2669,
          "end": 2672,
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2680,
      "end": 2747,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2684,
          "end": 2746,
          "id": {
            "type": "Identifier",
            "start": 2684,
            "end": 2746,
            "decorators": [],
            "name": "b13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2687,
              "end": 2746,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2689,
                "end": 2746,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2693,
                  "end": 2719,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2694,
                      "end": 2718,
                      "name": {
                        "type": "Identifier",
                        "start": 2694,
                        "end": 2695,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2704,
                        "end": 2718,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2704,
                          "end": 2709,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2709,
                          "end": 2718,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2710,
                              "end": 2717,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2710,
                                "end": 2717,
                                "decorators": [],
                                "name": "Derived",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2720,
                    "end": 2734,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2721,
                      "end": 2734,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2723,
                        "end": 2734,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2723,
                          "end": 2728,
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2728,
                          "end": 2734,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2729,
                              "end": 2733,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2729,
                                "end": 2733,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2736,
                    "end": 2740,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2737,
                      "end": 2740,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2739,
                        "end": 2740,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2739,
                          "end": 2740,
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
                  "start": 2742,
                  "end": 2746,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2745,
                    "end": 2746,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2745,
                      "end": 2746,
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
      "start": 2749,
      "end": 2759,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2749,
        "end": 2758,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2749,
          "end": 2752,
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2755,
          "end": 2758,
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2766,
      "end": 2776,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2766,
        "end": 2775,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2766,
          "end": 2769,
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2772,
          "end": 2775,
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2783,
      "end": 2824,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2787,
          "end": 2823,
          "id": {
            "type": "Identifier",
            "start": 2787,
            "end": 2823,
            "decorators": [],
            "name": "b14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2790,
              "end": 2823,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2792,
                "end": 2823,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2796,
                  "end": 2799,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2797,
                      "end": 2798,
                      "name": {
                        "type": "Identifier",
                        "start": 2797,
                        "end": 2798,
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
                    "start": 2800,
                    "end": 2817,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2801,
                      "end": 2817,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2803,
                        "end": 2817,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2805,
                            "end": 2810,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2805,
                              "end": 2806,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2806,
                              "end": 2809,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2808,
                                "end": 2809,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2808,
                                  "end": 2809,
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
                            "start": 2811,
                            "end": 2815,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2811,
                              "end": 2812,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2812,
                              "end": 2815,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2814,
                                "end": 2815,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2814,
                                  "end": 2815,
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
                  "start": 2819,
                  "end": 2823,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2822,
                    "end": 2823,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2822,
                      "end": 2823,
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
      "start": 2826,
      "end": 2836,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2826,
        "end": 2835,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2826,
          "end": 2829,
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2832,
          "end": 2835,
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2843,
      "end": 2853,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2843,
        "end": 2852,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2843,
          "end": 2846,
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2849,
          "end": 2852,
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2860,
      "end": 2890,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2864,
          "end": 2889,
          "id": {
            "type": "Identifier",
            "start": 2864,
            "end": 2889,
            "decorators": [],
            "name": "b15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2867,
              "end": 2889,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2869,
                "end": 2889,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2873,
                  "end": 2876,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2874,
                      "end": 2875,
                      "name": {
                        "type": "Identifier",
                        "start": 2874,
                        "end": 2875,
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
                    "start": 2877,
                    "end": 2881,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2878,
                      "end": 2881,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2880,
                        "end": 2881,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2880,
                          "end": 2881,
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
                  "start": 2883,
                  "end": 2889,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2886,
                    "end": 2889,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2886,
                      "end": 2887,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2886,
                        "end": 2887,
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
      "start": 2892,
      "end": 2902,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2892,
        "end": 2901,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2892,
          "end": 2895,
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2898,
          "end": 2901,
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2909,
      "end": 2919,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2909,
        "end": 2918,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2909,
          "end": 2912,
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2915,
          "end": 2918,
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2926,
      "end": 2974,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2930,
          "end": 2973,
          "id": {
            "type": "Identifier",
            "start": 2930,
            "end": 2973,
            "decorators": [],
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2933,
              "end": 2973,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2935,
                "end": 2973,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2939,
                  "end": 2955,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2940,
                      "end": 2954,
                      "name": {
                        "type": "Identifier",
                        "start": 2940,
                        "end": 2941,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2950,
                        "end": 2954,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2950,
                          "end": 2954,
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
                    "start": 2956,
                    "end": 2960,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2957,
                      "end": 2960,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2959,
                        "end": 2960,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2959,
                          "end": 2960,
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
                  "start": 2962,
                  "end": 2973,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2965,
                    "end": 2973,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2965,
                      "end": 2971
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
      "start": 2975,
      "end": 2985,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2975,
        "end": 2984,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2975,
          "end": 2978,
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2981,
          "end": 2984,
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
      "start": 2992,
      "end": 3002,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2992,
        "end": 3001,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2992,
          "end": 2995,
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2998,
          "end": 3001,
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3009,
      "end": 3053,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3013,
          "end": 3052,
          "id": {
            "type": "Identifier",
            "start": 3013,
            "end": 3052,
            "decorators": [],
            "name": "b17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3016,
              "end": 3052,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3018,
                "end": 3052,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3022,
                  "end": 3025,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3023,
                      "end": 3024,
                      "name": {
                        "type": "Identifier",
                        "start": 3023,
                        "end": 3024,
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
                    "start": 3026,
                    "end": 3044,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3027,
                      "end": 3044,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3029,
                        "end": 3044,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3034,
                            "end": 3038,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3035,
                              "end": 3038,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3037,
                                "end": 3038,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3037,
                                  "end": 3038,
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
                          "start": 3040,
                          "end": 3044,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3043,
                            "end": 3044,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3043,
                              "end": 3044,
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
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3046,
                  "end": 3052,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3049,
                    "end": 3052,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3049,
                      "end": 3050,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3049,
                        "end": 3050,
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
      "start": 3060,
      "end": 3070,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3060,
        "end": 3069,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3060,
          "end": 3063,
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3066,
          "end": 3069,
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3077,
      "end": 3087,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3077,
        "end": 3086,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3077,
          "end": 3080,
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3083,
          "end": 3086,
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3094,
      "end": 3138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3098,
          "end": 3137,
          "id": {
            "type": "Identifier",
            "start": 3098,
            "end": 3137,
            "decorators": [],
            "name": "b18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3101,
              "end": 3137,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3103,
                "end": 3137,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3107,
                  "end": 3110,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3108,
                      "end": 3109,
                      "name": {
                        "type": "Identifier",
                        "start": 3108,
                        "end": 3109,
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
                    "start": 3111,
                    "end": 3129,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3112,
                      "end": 3129,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3114,
                        "end": 3129,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3119,
                            "end": 3123,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3120,
                              "end": 3123,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3122,
                                "end": 3123,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3122,
                                  "end": 3123,
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
                          "start": 3125,
                          "end": 3129,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3128,
                            "end": 3129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3128,
                              "end": 3129,
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
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3131,
                  "end": 3137,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3134,
                    "end": 3137,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3134,
                      "end": 3135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3134,
                        "end": 3135,
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
      "start": 3140,
      "end": 3150,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3140,
        "end": 3149,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3140,
          "end": 3143,
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3146,
          "end": 3149,
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3157,
      "end": 3167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3157,
        "end": 3166,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3157,
          "end": 3160,
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 3163,
          "end": 3166,
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
